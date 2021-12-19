import { App, Stack } from 'aws-cdk-lib';
import { OrgEventStack } from './index';

const app = new App();
const stack = new Stack(app, 'MyStack');

new OrgEventStack(stack, 'OrgEventStack', {
  region: 'ap-northeast-1',
  accountId: '123456789012',
  kmsAliasName: 'jicOrgTest',
});
