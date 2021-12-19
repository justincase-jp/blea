import { aws_config as config } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface OrgConfigRulesProps {
  region: string,
  // use any to avoid jsii build error
  configRulesAll: any[];
  configRulesOnlyUsEast1?: any[];
  configExcludedAccounts?: string[];
}

export class OrgConfigRules extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: OrgConfigRulesProps,
  ) {
    super(scope, id);

    const { region, configRulesAll, configRulesOnlyUsEast1, configExcludedAccounts } =
      props;
    const rules = configRulesAll.concat(region == 'us-east-1' ? configRulesOnlyUsEast1 : [])

    rules.forEach((rule) => {
      new config.CfnOrganizationConfigRule(
        this,
        `ConfigRule${rule.ruleIdentifier}`,
        {
          organizationConfigRuleName: `${rule.ruleIdentifier}`,
          organizationManagedRuleMetadata: {
            ...(rule?.inputParameters ?  {inputParameters: rule.inputParameters} : {}),
            ruleIdentifier: rule.ruleIdentifier,
          },
          excludedAccounts: configExcludedAccounts,
        },
      )
    });
  }
}
