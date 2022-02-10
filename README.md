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

const orgEvent = new OrgEventStack(this, 'OrgEventStack', {
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

### Overview

This provides aws chatbot for slack to notify findings .

| Item           | Description                   |
| -------------- | ----------------------------- |
| Deploy Account | Audit Account                 |
| Resources      | chatbot |

### Prerequisites
before deploying ,you have done configure new client. for more details , see below
https://docs.aws.amazon.com/dtconsole/latest/userguide/notifications-chatbot.html

### Usage
it supposes to be used with OrgEvent.

```
  const slackWorkspaceId = "xxxxx"
  const slackChannelId   = "xxxxx"

  const orgSlackStack = new OrgSlackStack(this, 'OrgSlack', {
      snsTopic: [orgEven.topic],
      workspaceId: slackWorkspaceId,
      channelId: slackChannelId,
      slackChannelConfigurationName: slackChannelConfigurationName,
    });
```

# OrgConfigToSecurityhub

### Overview

This provides lambda to import findings to securityhub
from all children accounts config compliance .

you have sns topic named 'aws-controltower-AggregateSecurityNotifications' that created by aws controltower .
All config compliance informations are sent to that one .

| Item           | Description                   |
| -------------- | ----------------------------- |
| Deploy Account | Audit Account                 |
| Resources      | lambda |

### Prerequisites

Control tower is enabled in your organizations .


### Usage

```
new OrgConfigToSecurityhub(stack, 'OrgConfigToSecurityhub', {
  auditAccountId: '123456789012',
  snsTopicArn:
    'arn:aws:sns:ap-northeast-1:123456789012:aws-controltower-AggregateSecurityNotifications',
  controlTowerHomeRegion: 'ap-northeast-1',
  configurationAggregatorName:
    'aws-controltower-GuardrailsComplianceAggregator',
});
```

# OrgAccountInitProc

TODO:

# OrgStackSet

TODO:

# for contributor

first step

```
$ yarn
```

compile in the background

```
$ yarn watch

```

## IMPORTANT!

DO NOT EDIT by package.json


## to check specific source

once you build your source.

```
$ yarn build
```

then, execute synth, deploy etc...

```
$ cdk synth --app='./lib/integ.default.js'
or
$ cdk deploy --app='./lib/integ.default.js'
```
