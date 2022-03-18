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
import { OrgEvent } from 'blea';

const orgEvent = new OrgEvent(this, 'OrgEvent', {
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

| Item           | Description   |
| -------------- | ------------- |
| Deploy Account | Audit Account |
| Resources      | chatbot       |

### Prerequisites

before deploying ,you have done configure new client. for more details , see below
https://docs.aws.amazon.com/dtconsole/latest/userguide/notifications-chatbot.html

### Usage

it supposes to be used with OrgEvent.

```
  const slackWorkspaceId = "xxxxx"
  const slackChannelId   = "xxxxx"

  const OrgSlack = new OrgSlack(this, 'OrgSlack', {
      snsTopic: [orgEven.topic],
      workspaceId: slackWorkspaceId,
      channelId: slackChannelId,
      slackChannelConfigurationName: slackChannelConfigurationName,
    });
```

# OrgConfigSecurityhub

### Overview

This provides lambda to import findings to securityhub
from all children accounts config compliance .

you have sns topic named 'aws-controltower-AggregateSecurityNotifications' that created by aws controltower .
All config compliance informations are sent to that one .

| Item           | Description   |
| -------------- | ------------- |
| Deploy Account | Audit Account |
| Resources      | lambda        |

### Prerequisites

Control tower is enabled in your organizations .

### Usage

```
new OrgConfigSecurityhub(stack, 'OrgConfigSecurityhub', {
  auditAccountId: '123456789012',
  snsTopicArn:
    'arn:aws:sns:ap-northeast-1:123456789012:aws-controltower-AggregateSecurityNotifications',
  controlTowerHomeRegion: 'ap-northeast-1',
  configurationAggregatorName:
    'aws-controltower-GuardrailsComplianceAggregator',
});
```

# OrgStackSet

### Overview

This provides IAM role to switch from auidt account to child account.
this is deployed by cloudfromation stack sets.

| Item           | Description                    |
| -------------- | ------------------------------ |
| Deploy Account | root Account                   |
| Resources      | cloudformation stacksets , Iam |

### Usage

```
new OrgRoleStackSet(this, 'OrgRoleStackSet', {
  auditAccountID: "012345678912",
  roleName: 'swrole-from-blea',
  stackInstancesGroup: {
    regions: [controlTowerHomeRegion],
    deploymentTargets: {
      organizationalUnitIds: [
        'ou-xxxxxx',
        'ou-xxxxxx',
      ]
    },
  },
});
```

# OrgAccountInitProc

### Overview

This provides stepfunciton to disable specific item in securityhub standard cis and aws standard.

| Item           | Description                |
| -------------- | -------------------------- |
| Deploy Account | root Account               |
| Resources      | stepfunctions , lambda,Iam |

### Prerequisites

This is supporsed to be deployed with OrgStackSet .
so, before run this, you must deploy OrgStackSet

### Usage

```
new OrgAccountInit(this, 'OrgAccountInit', {
  roleName: 'swrole-from-blea',
  disableArnsBasicAll: ['ACM.1','APIGateway.1'],
  disableArnsCISAll: ['1.1','1.10'],
  disableArnsBasicVA: ['CloudFront.1','CloudFront.2'],
  disableArnsCISNotCtHome: ['1.12', '1.13', '1.16', '1.2', '1.2'],
  controlTowerHomeRegion: controlTowerHomeRegion,
});
```

once you create , execute stepfunction with event like below.
```
{
  "accountId": "xxxxxxxxxxx",
  "region": "ap-northeast-1"
}
```

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
$ cdk synth --app='./lib/integ.xxxx.default.js'
or
$ cdk deploy --app='./lib/integ.xxxx.default.js'
```
