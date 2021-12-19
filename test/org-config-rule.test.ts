import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { OrgConfigRules } from '../src';

test('configuration', () => {
  const app = new App();
  const stack = new Stack(app, 'test-stack');

  new OrgConfigRules(stack, 'test-config-rules', {
    region: 'ap-northeast-1',
    configRulesAll: [
      { ruleIdentifier: 'DYNAMODB_TABLE_ENCRYPTED_KMS' },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    OrganizationConfigRuleName: 'DYNAMODB_TABLE_ENCRYPTED_KMS',
  });
});
