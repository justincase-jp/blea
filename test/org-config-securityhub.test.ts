import { App, Stack, aws_sns as sns } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ManagedPolicies } from 'cdk-constants';
import { OrgConfigSecurityhub } from '../src';

test('OrgConfigSecurityhub', () => {
  const app = new App();
  const stack = new Stack(app, 'test-stack');
  const testSnsTopic = new sns.Topic(stack, 'test-topic');

  new OrgConfigSecurityhub(stack, 'test', {
    auditAccountId: '012345678912',
    snsTopicArn: testSnsTopic.topicArn,
    controlTowerHomeRegion: 'ap-northeast-1',
    configurationAggregatorName:
      'aws-controltower-GuardrailsComplianceAggregator',
  });

  const template = Template.fromStack(stack);
  // lambda & role are created for log retention, so total count is 2
  template.resourceCountIs('AWS::Lambda::Function', 2);
  template.resourceCountIs('AWS::IAM::Role', 2);
  template.resourceCountIs('AWS::Lambda::Permission', 1);
  template.resourceCountIs('AWS::SNS::Subscription', 1);

  console.log('print:', ManagedPolicies.AWS_LAMBDA_BASIC_EXECUTION_ROLE);

  template.hasResourceProperties('AWS::IAM::Role', {
    ManagedPolicyArns: [
      {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            `:iam::aws:policy/${ManagedPolicies.AWS_LAMBDA_BASIC_EXECUTION_ROLE}`,
          ],
        ],
      },
      {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            `:iam::aws:policy/${ManagedPolicies.AWS_SECURITY_HUB_FULL_ACCESS}`,
          ],
        ],
      },
      {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            `:iam::aws:policy/${ManagedPolicies.AWS_CONFIG_USER_ACCESS}`,
          ],
        ],
      },
    ],
  });
});
