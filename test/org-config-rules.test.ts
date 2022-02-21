import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { OrgConfigRules } from "../src";

test("OrgConfigRules", () => {
  const app = new App();
  const stack = new Stack(app, "test-stack");

  new OrgConfigRules(stack, "test-config-rules", {
    region: "us-east-1",
    configRulesAll: [{ ruleIdentifier: "DYNAMODB_TABLE_ENCRYPTED_KMS" }],
    configRulesOnlyUsEast1: [
      { ruleIdentifier: "CLOUDFRONT_ASSOCIATED_WITH_WAF" },
    ],
    configExcludedAccounts: ["111111111111", "222222222222"],
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::Config::OrganizationConfigRule", 2);

  template.hasResourceProperties("AWS::Config::OrganizationConfigRule", {
    OrganizationConfigRuleName: "DYNAMODB_TABLE_ENCRYPTED_KMS",
  });
  template.hasResourceProperties("AWS::Config::OrganizationConfigRule", {
    OrganizationConfigRuleName: "CLOUDFRONT_ASSOCIATED_WITH_WAF",
  });
  template.hasResourceProperties("AWS::Config::OrganizationConfigRule", {
    ExcludedAccounts: ["111111111111", "222222222222"],
  });
});
