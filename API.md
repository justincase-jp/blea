# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### OrgAccountInit <a name="blea.OrgAccountInit" id="bleaorgaccountinit"></a>

#### Initializers <a name="blea.OrgAccountInit.Initializer" id="bleaorgaccountinitinitializer"></a>

```typescript
import { OrgAccountInit } from 'blea'

new OrgAccountInit(scope: Construct, id: string, props: OrgAccountInitProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgaccountinitparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgaccountinitparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgaccountinitparameterprops)<span title="Required">*</span> | [`blea.OrgAccountInitProps`](#blea.OrgAccountInitProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgAccountInit.parameter.scope" id="bleaorgaccountinitparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgAccountInit.parameter.id" id="bleaorgaccountinitparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgAccountInit.parameter.props" id="bleaorgaccountinitparameterprops"></a>

- *Type:* [`blea.OrgAccountInitProps`](#blea.OrgAccountInitProps)

---





### OrgConfigRules <a name="blea.OrgConfigRules" id="bleaorgconfigrules"></a>

#### Initializers <a name="blea.OrgConfigRules.Initializer" id="bleaorgconfigrulesinitializer"></a>

```typescript
import { OrgConfigRules } from 'blea'

new OrgConfigRules(scope: Construct, id: string, props: OrgConfigRulesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgconfigrulesparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgconfigrulesparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgconfigrulesparameterprops)<span title="Required">*</span> | [`blea.OrgConfigRulesProps`](#blea.OrgConfigRulesProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgConfigRules.parameter.scope" id="bleaorgconfigrulesparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgConfigRules.parameter.id" id="bleaorgconfigrulesparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgConfigRules.parameter.props" id="bleaorgconfigrulesparameterprops"></a>

- *Type:* [`blea.OrgConfigRulesProps`](#blea.OrgConfigRulesProps)

---





### OrgConfigSecurityhub <a name="blea.OrgConfigSecurityhub" id="bleaorgconfigsecurityhub"></a>

#### Initializers <a name="blea.OrgConfigSecurityhub.Initializer" id="bleaorgconfigsecurityhubinitializer"></a>

```typescript
import { OrgConfigSecurityhub } from 'blea'

new OrgConfigSecurityhub(scope: Construct, id: string, props: Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgconfigsecurityhubparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgconfigsecurityhubparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgconfigsecurityhubparameterprops)<span title="Required">*</span> | [`blea.Props`](#blea.Props) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgConfigSecurityhub.parameter.scope" id="bleaorgconfigsecurityhubparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgConfigSecurityhub.parameter.id" id="bleaorgconfigsecurityhubparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgConfigSecurityhub.parameter.props" id="bleaorgconfigsecurityhubparameterprops"></a>

- *Type:* [`blea.Props`](#blea.Props)

---





### OrgEvent <a name="blea.OrgEvent" id="bleaorgevent"></a>

#### Initializers <a name="blea.OrgEvent.Initializer" id="bleaorgeventinitializer"></a>

```typescript
import { OrgEvent } from 'blea'

new OrgEvent(scope: Construct, id: string, props: EventSnsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgeventparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgeventparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgeventparameterprops)<span title="Required">*</span> | [`blea.EventSnsProps`](#blea.EventSnsProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgEvent.parameter.scope" id="bleaorgeventparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgEvent.parameter.id" id="bleaorgeventparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgEvent.parameter.props" id="bleaorgeventparameterprops"></a>

- *Type:* [`blea.EventSnsProps`](#blea.EventSnsProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`topic`](#bleaorgeventpropertytopic)<span title="Required">*</span> | [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic) | *No description.* |

---

##### `topic`<sup>Required</sup> <a name="blea.OrgEvent.property.topic" id="bleaorgeventpropertytopic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)

---


### OrgRoleStackSet <a name="blea.OrgRoleStackSet" id="bleaorgrolestackset"></a>

#### Initializers <a name="blea.OrgRoleStackSet.Initializer" id="bleaorgrolestacksetinitializer"></a>

```typescript
import { OrgRoleStackSet } from 'blea'

new OrgRoleStackSet(scope: Construct, id: string, props: OrgRoleStackSetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgrolestacksetparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgrolestacksetparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgrolestacksetparameterprops)<span title="Required">*</span> | [`blea.OrgRoleStackSetProps`](#blea.OrgRoleStackSetProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgRoleStackSet.parameter.scope" id="bleaorgrolestacksetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgRoleStackSet.parameter.id" id="bleaorgrolestacksetparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgRoleStackSet.parameter.props" id="bleaorgrolestacksetparameterprops"></a>

- *Type:* [`blea.OrgRoleStackSetProps`](#blea.OrgRoleStackSetProps)

---





### OrgSlack <a name="blea.OrgSlack" id="bleaorgslack"></a>

#### Initializers <a name="blea.OrgSlack.Initializer" id="bleaorgslackinitializer"></a>

```typescript
import { OrgSlack } from 'blea'

new OrgSlack(scope: Construct, id: string, props: OrgSlackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgslackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgslackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgslackparameterprops)<span title="Required">*</span> | [`blea.OrgSlackProps`](#blea.OrgSlackProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgSlack.parameter.scope" id="bleaorgslackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgSlack.parameter.id" id="bleaorgslackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgSlack.parameter.props" id="bleaorgslackparameterprops"></a>

- *Type:* [`blea.OrgSlackProps`](#blea.OrgSlackProps)

---





## Structs <a name="Structs" id="structs"></a>

### EventSnsProps <a name="blea.EventSnsProps" id="bleaeventsnsprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EventSnsProps } from 'blea'

const eventSnsProps: EventSnsProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountId`](#bleaeventsnspropspropertyaccountid)<span title="Required">*</span> | `string` | *No description.* |
| [`kmsAliasName`](#bleaeventsnspropspropertykmsaliasname)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#bleaeventsnspropspropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`securityhubNotifyPattern`](#bleaeventsnspropspropertysecurityhubnotifypattern)<span title="Required">*</span> | [`aws-cdk-lib.aws_events.EventPattern`](#aws-cdk-lib.aws_events.EventPattern) | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="blea.EventSnsProps.property.accountId" id="bleaeventsnspropspropertyaccountid"></a>

```typescript
public readonly accountId: string;
```

- *Type:* `string`

---

##### `kmsAliasName`<sup>Required</sup> <a name="blea.EventSnsProps.property.kmsAliasName" id="bleaeventsnspropspropertykmsaliasname"></a>

```typescript
public readonly kmsAliasName: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="blea.EventSnsProps.property.region" id="bleaeventsnspropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `securityhubNotifyPattern`<sup>Required</sup> <a name="blea.EventSnsProps.property.securityhubNotifyPattern" id="bleaeventsnspropspropertysecurityhubnotifypattern"></a>

```typescript
public readonly securityhubNotifyPattern: EventPattern;
```

- *Type:* [`aws-cdk-lib.aws_events.EventPattern`](#aws-cdk-lib.aws_events.EventPattern)

---

### OrgAccountInitProps <a name="blea.OrgAccountInitProps" id="bleaorgaccountinitprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgAccountInitProps } from 'blea'

const orgAccountInitProps: OrgAccountInitProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`controlTowerHomeRegion`](#bleaorgaccountinitpropspropertycontroltowerhomeregion)<span title="Required">*</span> | `string` | *No description.* |
| [`disableArnsBasicAll`](#bleaorgaccountinitpropspropertydisablearnsbasicall)<span title="Required">*</span> | `string`[] | *No description.* |
| [`disableArnsBasicVA`](#bleaorgaccountinitpropspropertydisablearnsbasicva)<span title="Required">*</span> | `string`[] | *No description.* |
| [`disableArnsCISAll`](#bleaorgaccountinitpropspropertydisablearnscisall)<span title="Required">*</span> | `string`[] | *No description.* |
| [`disableArnsCISNotCtHome`](#bleaorgaccountinitpropspropertydisablearnscisnotcthome)<span title="Required">*</span> | `string`[] | *No description.* |
| [`roleName`](#bleaorgaccountinitpropspropertyrolename)<span title="Required">*</span> | `string` | *No description.* |

---

##### `controlTowerHomeRegion`<sup>Required</sup> <a name="blea.OrgAccountInitProps.property.controlTowerHomeRegion" id="bleaorgaccountinitpropspropertycontroltowerhomeregion"></a>

```typescript
public readonly controlTowerHomeRegion: string;
```

- *Type:* `string`

---

##### `disableArnsBasicAll`<sup>Required</sup> <a name="blea.OrgAccountInitProps.property.disableArnsBasicAll" id="bleaorgaccountinitpropspropertydisablearnsbasicall"></a>

```typescript
public readonly disableArnsBasicAll: string[];
```

- *Type:* `string`[]

---

##### `disableArnsBasicVA`<sup>Required</sup> <a name="blea.OrgAccountInitProps.property.disableArnsBasicVA" id="bleaorgaccountinitpropspropertydisablearnsbasicva"></a>

```typescript
public readonly disableArnsBasicVA: string[];
```

- *Type:* `string`[]

---

##### `disableArnsCISAll`<sup>Required</sup> <a name="blea.OrgAccountInitProps.property.disableArnsCISAll" id="bleaorgaccountinitpropspropertydisablearnscisall"></a>

```typescript
public readonly disableArnsCISAll: string[];
```

- *Type:* `string`[]

---

##### `disableArnsCISNotCtHome`<sup>Required</sup> <a name="blea.OrgAccountInitProps.property.disableArnsCISNotCtHome" id="bleaorgaccountinitpropspropertydisablearnscisnotcthome"></a>

```typescript
public readonly disableArnsCISNotCtHome: string[];
```

- *Type:* `string`[]

---

##### `roleName`<sup>Required</sup> <a name="blea.OrgAccountInitProps.property.roleName" id="bleaorgaccountinitpropspropertyrolename"></a>

```typescript
public readonly roleName: string;
```

- *Type:* `string`

---

### OrgConfigRulesProps <a name="blea.OrgConfigRulesProps" id="bleaorgconfigrulesprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgConfigRulesProps } from 'blea'

const orgConfigRulesProps: OrgConfigRulesProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`configRulesAll`](#bleaorgconfigrulespropspropertyconfigrulesall)<span title="Required">*</span> | `any`[] | *No description.* |
| [`region`](#bleaorgconfigrulespropspropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`configExcludedAccounts`](#bleaorgconfigrulespropspropertyconfigexcludedaccounts) | `string`[] | *No description.* |
| [`configRulesOnlyUsEast1`](#bleaorgconfigrulespropspropertyconfigrulesonlyuseast1) | `any`[] | *No description.* |

---

##### `configRulesAll`<sup>Required</sup> <a name="blea.OrgConfigRulesProps.property.configRulesAll" id="bleaorgconfigrulespropspropertyconfigrulesall"></a>

```typescript
public readonly configRulesAll: any[];
```

- *Type:* `any`[]

---

##### `region`<sup>Required</sup> <a name="blea.OrgConfigRulesProps.property.region" id="bleaorgconfigrulespropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `configExcludedAccounts`<sup>Optional</sup> <a name="blea.OrgConfigRulesProps.property.configExcludedAccounts" id="bleaorgconfigrulespropspropertyconfigexcludedaccounts"></a>

```typescript
public readonly configExcludedAccounts: string[];
```

- *Type:* `string`[]

---

##### `configRulesOnlyUsEast1`<sup>Optional</sup> <a name="blea.OrgConfigRulesProps.property.configRulesOnlyUsEast1" id="bleaorgconfigrulespropspropertyconfigrulesonlyuseast1"></a>

```typescript
public readonly configRulesOnlyUsEast1: any[];
```

- *Type:* `any`[]

---

### OrgRoleStackSetProps <a name="blea.OrgRoleStackSetProps" id="bleaorgrolestacksetprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgRoleStackSetProps } from 'blea'

const orgRoleStackSetProps: OrgRoleStackSetProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`auditAccountID`](#bleaorgrolestacksetpropspropertyauditaccountid)<span title="Required">*</span> | `string` | *No description.* |
| [`roleName`](#bleaorgrolestacksetpropspropertyrolename)<span title="Required">*</span> | `string` | *No description.* |
| [`stackInstancesGroup`](#bleaorgrolestacksetpropspropertystackinstancesgroup)<span title="Required">*</span> | [`aws-cdk-lib.aws_cloudformation.CfnStackSet.StackInstancesProperty`](#aws-cdk-lib.aws_cloudformation.CfnStackSet.StackInstancesProperty) | *No description.* |

---

##### `auditAccountID`<sup>Required</sup> <a name="blea.OrgRoleStackSetProps.property.auditAccountID" id="bleaorgrolestacksetpropspropertyauditaccountid"></a>

```typescript
public readonly auditAccountID: string;
```

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="blea.OrgRoleStackSetProps.property.roleName" id="bleaorgrolestacksetpropspropertyrolename"></a>

```typescript
public readonly roleName: string;
```

- *Type:* `string`

---

##### `stackInstancesGroup`<sup>Required</sup> <a name="blea.OrgRoleStackSetProps.property.stackInstancesGroup" id="bleaorgrolestacksetpropspropertystackinstancesgroup"></a>

```typescript
public readonly stackInstancesGroup: StackInstancesProperty;
```

- *Type:* [`aws-cdk-lib.aws_cloudformation.CfnStackSet.StackInstancesProperty`](#aws-cdk-lib.aws_cloudformation.CfnStackSet.StackInstancesProperty)

---

### OrgSlackProps <a name="blea.OrgSlackProps" id="bleaorgslackprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgSlackProps } from 'blea'

const orgSlackProps: OrgSlackProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`channelId`](#bleaorgslackpropspropertychannelid)<span title="Required">*</span> | `string` | *No description.* |
| [`slackChannelConfigurationName`](#bleaorgslackpropspropertyslackchannelconfigurationname)<span title="Required">*</span> | `string` | *No description.* |
| [`snsTopic`](#bleaorgslackpropspropertysnstopic)<span title="Required">*</span> | [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)[] | *No description.* |
| [`workspaceId`](#bleaorgslackpropspropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="blea.OrgSlackProps.property.channelId" id="bleaorgslackpropspropertychannelid"></a>

```typescript
public readonly channelId: string;
```

- *Type:* `string`

---

##### `slackChannelConfigurationName`<sup>Required</sup> <a name="blea.OrgSlackProps.property.slackChannelConfigurationName" id="bleaorgslackpropspropertyslackchannelconfigurationname"></a>

```typescript
public readonly slackChannelConfigurationName: string;
```

- *Type:* `string`

---

##### `snsTopic`<sup>Required</sup> <a name="blea.OrgSlackProps.property.snsTopic" id="bleaorgslackpropspropertysnstopic"></a>

```typescript
public readonly snsTopic: Topic[];
```

- *Type:* [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)[]

---

##### `workspaceId`<sup>Required</sup> <a name="blea.OrgSlackProps.property.workspaceId" id="bleaorgslackpropspropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

### Props <a name="blea.Props" id="bleaprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Props } from 'blea'

const props: Props = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`auditAccountId`](#bleapropspropertyauditaccountid)<span title="Required">*</span> | `string` | *No description.* |
| [`configurationAggregatorName`](#bleapropspropertyconfigurationaggregatorname)<span title="Required">*</span> | `string` | *No description.* |
| [`controlTowerHomeRegion`](#bleapropspropertycontroltowerhomeregion)<span title="Required">*</span> | `string` | *No description.* |
| [`snsTopicArn`](#bleapropspropertysnstopicarn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `auditAccountId`<sup>Required</sup> <a name="blea.Props.property.auditAccountId" id="bleapropspropertyauditaccountid"></a>

```typescript
public readonly auditAccountId: string;
```

- *Type:* `string`

---

##### `configurationAggregatorName`<sup>Required</sup> <a name="blea.Props.property.configurationAggregatorName" id="bleapropspropertyconfigurationaggregatorname"></a>

```typescript
public readonly configurationAggregatorName: string;
```

- *Type:* `string`

---

##### `controlTowerHomeRegion`<sup>Required</sup> <a name="blea.Props.property.controlTowerHomeRegion" id="bleapropspropertycontroltowerhomeregion"></a>

```typescript
public readonly controlTowerHomeRegion: string;
```

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="blea.Props.property.snsTopicArn" id="bleapropspropertysnstopicarn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* `string`

---



