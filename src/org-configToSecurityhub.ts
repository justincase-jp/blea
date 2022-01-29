import * as path from 'path';
import {
  aws_iam as iam,
  aws_lambda as lambda,
  aws_sns as sns,
  aws_logs as logs,
  aws_lambda_event_sources as lambda_event_sources,
  Duration,
} from 'aws-cdk-lib';
import { ManagedPolicies } from 'cdk-constants';
import { Construct } from 'constructs';

export interface Props {
  readonly auditAccountId: string;
  readonly snsTopicArn: string;
  readonly controlTowerHomeRegion: string;
  readonly configurationAggregatorName: string;
}

export class OrgConfigToSecurityhub extends Construct {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id);
    const {
      auditAccountId,
      snsTopicArn,
      controlTowerHomeRegion,
      configurationAggregatorName,
    } = props;

    const configToShubLambda = new lambda.Function(this, 'lambda', {
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
      timeout: Duration.seconds(300),
    });

    configToShubLambda.role?.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        ManagedPolicies.AWS_SECURITY_HUB_FULL_ACCESS,
      ),
    );
    configToShubLambda.role?.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        ManagedPolicies.READ_ONLY_ACCESS,
      ),
    );

    const snsTopic = sns.Topic.fromTopicArn(this, 'snsTopic', snsTopicArn);
    configToShubLambda.addEventSource(
      new lambda_event_sources.SnsEventSource(snsTopic),
    );
  }
}
