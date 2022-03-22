import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { OrgEvent } from '../src';

const securityhubNotifyPattern = {
  source: ['aws.securityhub'],
  'detail-type': ['Security Hub Findings - Imported'],
  detail: {
    findings: {
      Compliance: {
        Status: ['FAILED', 'WARNING'],
      },
      Workflow: {
        Status: ['NEW'],
      },
    },
  },
};

describe('orgEvent', () => {
  test('resouce count', () => {
    const app = new App();
    const stack = new Stack(app, 'test-org-event-stack');

    new OrgEvent(stack, 'test-event', {
      region: 'ap-northeast-1',
      accountId: '123456789012',
      kmsAliasName: 'test-key',
      securityhubNotifyPattern: securityhubNotifyPattern,
    });

    const template = Template.fromStack(stack);

    // test resource count
    template.resourceCountIs('AWS::SNS::Topic', 1);
    template.resourceCountIs('AWS::KMS::Key', 1);
    template.resourceCountIs('AWS::KMS::Alias', 1);
    template.resourceCountIs('AWS::Events::Rule', 1);

    // test authority
    template.hasResourceProperties('AWS::KMS::Key', {
      KeyPolicy: {
        Statement: [
          {
            Action: ['kms:Decrypt', 'kms:GenerateDataKey*'],
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: '*',
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:GenerateDataKey*',
              'kms:CreateGrant',
              'kms:ListGrants',
              'kms:DescribeKey',
            ],
            Condition: {
              StringEquals: {
                'kms:CallerAccount': '123456789012',
                'kms:ViaService': 'sns.ap-northeast-1.amazonaws.com',
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
            Resource: '*',
          },
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: {
                'Fn::Join': [
                  '',
                  [
                    'arn:',
                    {
                      Ref: 'AWS::Partition',
                    },
                    ':iam::',
                    {
                      Ref: 'AWS::AccountId',
                    },
                    ':root',
                  ],
                ],
              },
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      EnableKeyRotation: true,
      PendingWindowInDays: 30,
    });
  });
});
