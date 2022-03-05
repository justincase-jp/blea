import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { OrgConfigRules } from '../src';

test('OrgConfigRules', () => {
  const app = new App();
  const stackNotVirginia = new Stack(app, 'test-stack');
  const stackVirginia = new Stack(app, 'test-stack-virginia');

  new OrgConfigRules(stackNotVirginia, 'test-config-rules-not-virginia', {
    region: 'ap-northeast-1',
    configRulesAll: [{ ruleIdentifier: 'DYNAMODB_TABLE_ENCRYPTED_KMS' }],
    configExcludedAccounts: ['111111111111', '222222222222'],
  });

  new OrgConfigRules(stackVirginia, 'test-config-rules-virginia', {
    region: 'us-east-1',
    configRulesAll: [{ ruleIdentifier: 'DYNAMODB_TABLE_ENCRYPTED_KMS' }],
    configRulesOnlyUsEast1: [
      { ruleIdentifier: 'CLOUDFRONT_ASSOCIATED_WITH_WAF' },
    ],
    configExcludedAccounts: ['111111111111', '222222222222'],
  });

  const templateNV = Template.fromStack(stackVirginia);
  templateNV.resourceCountIs('AWS::Config::OrganizationConfigRule', 2);

  templateNV.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    OrganizationConfigRuleName: 'DYNAMODB_TABLE_ENCRYPTED_KMS',
  });
  templateNV.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    ExcludedAccounts: ['111111111111', '222222222222'],
  });

  const templateV = Template.fromStack(stackVirginia);
  templateV.resourceCountIs('AWS::Config::OrganizationConfigRule', 2);

  templateV.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    OrganizationConfigRuleName: 'DYNAMODB_TABLE_ENCRYPTED_KMS',
  });
  templateV.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    OrganizationConfigRuleName: 'CLOUDFRONT_ASSOCIATED_WITH_WAF',
  });
  templateV.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    ExcludedAccounts: ['111111111111', '222222222222'],
  });
});
