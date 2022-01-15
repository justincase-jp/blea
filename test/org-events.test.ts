import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { OrgEventStack } from '../src';

test('configuration', () => {
  const app = new App();
  const stack = new Stack(app, 'test-event-stack');

  new OrgEventStack(stack, 'test-event', {
    region: 'ap-northeast-1',
    accountId: '123456789012',
    kmsAliasName: 'jest',
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::SNS::Topic', 1);
});
