# Blea-Jic

Blea-Jic is an AWS CDK construct library that make up Organizations settings

## Installation

```
yarn add blea
```

# OrgEvent

### Overview

This provides eventBridge rule from securityhub to SNS which is encrypted

| Item           | Description                   |
| -------------- | ----------------------------- |
| Deploy Account | Audit Account                 |
| Resources      | EventBridgeRule,SNS Topic,KMS |


### Usage
```
import { OrgEventStack } from 'blea';

const orgEventStack = new OrgEventStack(this, 'OrgEventStack', {
    region: props?.env?.region || '',
    accountId: props?.env?.account || '',
    kmsAliasName: 'jicOrgTest',
});
```
# OrgConfigRules

### Overview

This provides OrganizationConfigRule to find child accounts Noncompliant

| Item           | Description            |
| -------------- | ---------------------- |
| Deploy Account | Audit Account          |
| Resources      | OrganizationConfigRule |

### Prerequisites

Before using , you should set up for root or audit account enable config rule to organizations.
for more detail , see below  
https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html

### Usage

```
import { OrgConfigRules } from 'blea';
const orgConfigRules = new OrgConfigRules(this, 'OrgConfigRules', {
    region: props?.env?.region || '',
    configRulesAll: [
    { ruleIdentifier: 'DYNAMODB_TABLE_ENCRYPTED_KMS' },
    {
        ruleIdentifier: 'CW_LOGGROUP_RETENTION_PERIOD_CHECK',
        inputParameters: '{"MinRetentionTime":"1827"}',
    },
    ],
    configRulesOnlyUsEast1: [
    { ruleIdentifier: 'CLOUDFRONT_ASSOCIATED_WITH_WAF' },
    ],
    configExcludedAccounts: ['111111111111', '222222222222'],
});
```

# OrgSlack
# OrgConfigToSecurityhub
# OrgAccountInitProc



## to check specific source

once you build your source.

```
yarn build
```

then, execute synth

```
cdk synth --app='./lib/integ.default.js'
```
