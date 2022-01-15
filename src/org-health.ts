import {
  aws_iam as iam,
  aws_lambda as lambda,
  aws_lambda_nodejs as lambdaNodejs,
  aws_events as events,
  aws_events_targets as eventsTargets,
  Duration,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface OrgHealthProps {
  readonly orgHealthMinutesInterval: string;
  readonly orgHealthSlackWebHookPath: string;
  readonly notifyEventTypeCodes: any;
}

export class OrgHealthStack extends Construct {
  constructor(scope: Construct, id: string, props: OrgHealthProps) {
    super(scope, id);
    const {
      orgHealthMinutesInterval,
      orgHealthSlackWebHookPath,
      notifyEventTypeCodes,
    } = props;

    const roleLambda = new iam.Role(this, 'roleLambda', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });
    roleLambda.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambdaExecute'),
    );
    roleLambda.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('AWSHealthFullAccess'),
    );
    const healthLambda = new lambdaNodejs.NodejsFunction(this, 'orgHealth', {
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: 'lambda/health/handler.ts',
      handler: 'handler',
      environment: {
        slackWebhook: orgHealthSlackWebHookPath,
        interval: orgHealthMinutesInterval,
        notifyEventTypeCodes: JSON.stringify(notifyEventTypeCodes),
      },
      role: roleLambda,
      timeout: Duration.seconds(300),
    });
    new events.Rule(this, 'events', {
      schedule: events.Schedule.cron({
        minute: `0/${orgHealthMinutesInterval}`,
      }),
      targets: [
        new eventsTargets.LambdaFunction(healthLambda, { retryAttempts: 2 }),
      ],
    });
  }
}
