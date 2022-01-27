# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

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





### OrgEventStack <a name="blea.OrgEventStack" id="bleaorgeventstack"></a>

#### Initializers <a name="blea.OrgEventStack.Initializer" id="bleaorgeventstackinitializer"></a>

```typescript
import { OrgEventStack } from 'blea'

new OrgEventStack(scope: Construct, id: string, props: EventSnsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgeventstackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgeventstackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgeventstackparameterprops)<span title="Required">*</span> | [`blea.EventSnsProps`](#blea.EventSnsProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgEventStack.parameter.scope" id="bleaorgeventstackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgEventStack.parameter.id" id="bleaorgeventstackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgEventStack.parameter.props" id="bleaorgeventstackparameterprops"></a>

- *Type:* [`blea.EventSnsProps`](#blea.EventSnsProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`topic`](#bleaorgeventstackpropertytopic)<span title="Required">*</span> | [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic) | *No description.* |

---

##### `topic`<sup>Required</sup> <a name="blea.OrgEventStack.property.topic" id="bleaorgeventstackpropertytopic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)

---



### OrgHealthStack <a name="blea.OrgHealthStack" id="bleaorghealthstack"></a>

#### Initializers <a name="blea.OrgHealthStack.Initializer" id="bleaorghealthstackinitializer"></a>

```typescript
import { OrgHealthStack } from 'blea'

new OrgHealthStack(scope: Construct, id: string, props: OrgHealthProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorghealthstackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorghealthstackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorghealthstackparameterprops)<span title="Required">*</span> | [`blea.OrgHealthProps`](#blea.OrgHealthProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgHealthStack.parameter.scope" id="bleaorghealthstackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgHealthStack.parameter.id" id="bleaorghealthstackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgHealthStack.parameter.props" id="bleaorghealthstackparameterprops"></a>

- *Type:* [`blea.OrgHealthProps`](#blea.OrgHealthProps)

---





### OrgSlackStack <a name="blea.OrgSlackStack" id="bleaorgslackstack"></a>

#### Initializers <a name="blea.OrgSlackStack.Initializer" id="bleaorgslackstackinitializer"></a>

```typescript
import { OrgSlackStack } from 'blea'

new OrgSlackStack(scope: Construct, id: string, props: OrgSlackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#bleaorgslackstackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#bleaorgslackstackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#bleaorgslackstackparameterprops)<span title="Required">*</span> | [`blea.OrgSlackProps`](#blea.OrgSlackProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="blea.OrgSlackStack.parameter.scope" id="bleaorgslackstackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="blea.OrgSlackStack.parameter.id" id="bleaorgslackstackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="blea.OrgSlackStack.parameter.props" id="bleaorgslackstackparameterprops"></a>

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


### OrgHealthProps <a name="blea.OrgHealthProps" id="bleaorghealthprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgHealthProps } from 'blea'

const orgHealthProps: OrgHealthProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`notifyEventTypeCodes`](#bleaorghealthpropspropertynotifyeventtypecodes)<span title="Required">*</span> | `any` | *No description.* |
| [`orgHealthMinutesInterval`](#bleaorghealthpropspropertyorghealthminutesinterval)<span title="Required">*</span> | `string` | *No description.* |
| [`orgHealthSlackWebHookPath`](#bleaorghealthpropspropertyorghealthslackwebhookpath)<span title="Required">*</span> | `string` | *No description.* |

---

##### `notifyEventTypeCodes`<sup>Required</sup> <a name="blea.OrgHealthProps.property.notifyEventTypeCodes" id="bleaorghealthpropspropertynotifyeventtypecodes"></a>

```typescript
public readonly notifyEventTypeCodes: any;
```

- *Type:* `any`

---

##### `orgHealthMinutesInterval`<sup>Required</sup> <a name="blea.OrgHealthProps.property.orgHealthMinutesInterval" id="bleaorghealthpropspropertyorghealthminutesinterval"></a>

```typescript
public readonly orgHealthMinutesInterval: string;
```

- *Type:* `string`

---

##### `orgHealthSlackWebHookPath`<sup>Required</sup> <a name="blea.OrgHealthProps.property.orgHealthSlackWebHookPath" id="bleaorghealthpropspropertyorghealthslackwebhookpath"></a>

```typescript
public readonly orgHealthSlackWebHookPath: string;
```

- *Type:* `string`

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



