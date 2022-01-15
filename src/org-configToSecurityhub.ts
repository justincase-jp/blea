import * as path from 'path';
import {
  aws_iam as iam,
  aws_lambda as lambda,
  aws_sns as sns,
  aws_logs as logs,
  aws_lambda_event_sources as lambda_event_sources,
  Duration,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface Props {
  readonly auditAccountId: string;
  readonly snsTopicArn: string;
  readonly controlTowerHomeRegion: string;
}

export class OrgConfigToSecurityhub extends Construct {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id);
    const { auditAccountId, snsTopicArn, controlTowerHomeRegion } = props;

    const configurationAggregatorName =
      'aws-controltower-GuardrailsComplianceAggregator';

    const roleLambda = new iam.Role(this, 'roleLambda', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });
    roleLambda.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('AWSSecurityHubFullAccess'),
    );
    roleLambda.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess'),
    );
    roleLambda.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambdaExecute'),
    );

    const lambdaFunction = new lambda.Function(
      this,
      'OrgConfigToSecurityhubStack',
      {
        runtime: lambda.Runtime.PYTHON_3_7,
        code: lambda.Code.fromAsset(
          path.join(__dirname, '../lambda/configuToSecurityhub/'),
        ),
        handler: 'app.lambda_handler',
        logRetention: logs.RetentionDays.ONE_MONTH,
        environment: {
          configurationAggregatorName: configurationAggregatorName,
          auditAccountId: auditAccountId,
          controlTowerHomeRegion: controlTowerHomeRegion,
        },
        role: roleLambda,
        timeout: Duration.seconds(300),
      },
    );

    const snsTopic = sns.Topic.fromTopicArn(this, 'snsTopic', snsTopicArn);
    lambdaFunction.addEventSource(
      new lambda_event_sources.SnsEventSource(snsTopic),
    );
  }
}
