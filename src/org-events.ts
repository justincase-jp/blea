import {
  aws_events as events,
  aws_sns as sns,
  aws_iam as iam,
  aws_kms as kms,
  aws_events_targets as targets,
  RemovalPolicy,
  Duration,
} from 'aws-cdk-lib';
import { ServicePrincipals } from 'cdk-constants';
import { Construct } from 'constructs';

export interface EventSnsProps {
  readonly region: string;
  readonly accountId: string;
  readonly kmsAliasName: string;
}

export class OrgEventStack extends Construct {
  public readonly topic: sns.Topic;
  constructor(scope: Construct, id: string, props: EventSnsProps) {
    super(scope, id);

    const { region, accountId, kmsAliasName } = props;

    const SecurityhubNotifyPattern = {
      'source': ['aws.securityhub'],
      'detail-type': ['Security Hub Findings - Imported'],
      'detail': {
        findings: {
          Compliance: {
            Status: ['NOT_AVAILABLE', 'FAILED', 'WARNING'],
          },
          Workflow: {
            Status: ['NEW'],
          },
        },
      },
    };
    const eventsRule = new events.Rule(this, 'events', {
      eventPattern: SecurityhubNotifyPattern,
    });
    const snsPrincipal = new iam.AnyPrincipal().withConditions({
      StringEquals: {
        'kms:CallerAccount': accountId,
        'kms:ViaService': `sns.${region}.amazonaws.com`,
      },
    });
    const snsPolicyStatement = new iam.PolicyStatement({
      actions: [
        'kms:Decrypt',
        'kms:GenerateDataKey*',
        'kms:CreateGrant',
        'kms:ListGrants',
        'kms:DescribeKey',
      ],
      effect: iam.Effect.ALLOW,
      principals: [snsPrincipal],
      resources: ['*'],
    });
    const principals = [];
    const eventsServicePrincipal = new iam.ServicePrincipal(
      ServicePrincipals.EVENTS,
      {},
    );
    principals.push(eventsServicePrincipal);

    const eventsPolicyStatement = new iam.PolicyStatement({
      actions: ['kms:Decrypt', 'kms:GenerateDataKey*'],
      effect: iam.Effect.ALLOW,
      principals: principals,
      resources: ['*'],
    });

    const accountRootPrincipal = new iam.AccountRootPrincipal();
    const accountRootPolicyStatement = new iam.PolicyStatement({
      actions: ['kms:*'],
      effect: iam.Effect.ALLOW,
      principals: [accountRootPrincipal],
      resources: ['*'],
    });

    const keypolicy = new iam.PolicyDocument({
      statements: [
        eventsPolicyStatement,
        snsPolicyStatement,
        accountRootPolicyStatement,
      ],
    });

    const cmk = new kms.Key(this, 'key', {
      alias: kmsAliasName,
      enableKeyRotation: true,
      pendingWindow: Duration.days(30),
      removalPolicy: RemovalPolicy.DESTROY,
      policy: keypolicy,
    });
    this.topic = new sns.Topic(this, 'snsTopic', {
      fifo: false,
      masterKey: cmk,
    });
    const snsTargets = new targets.SnsTopic(this.topic);
    eventsRule.addTarget(snsTargets);
  }
}
