import { App, Stack } from 'aws-cdk-lib';
import { OrgEventStack, OrgSlackStack } from './index';

const app = new App();
const stack = new Stack(app, 'MyStack');

const orgEventStack = new OrgEventStack(stack, 'OrgEventStack', {
  region: 'ap-northeast-1',
  accountId: '123456789012',
  kmsAliasName: 'jicOrgTest',
});

new OrgSlackStack(stack, 'OrgSlackStack', {
  snsTopic: [orgEventStack.topic],
  workspaceId: 'xxxxxxx',
  channelId: 'xxxxxxx',
  slackChannelConfigurationName: 'xxxxxxx',
});
