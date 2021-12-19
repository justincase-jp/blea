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





## Structs <a name="Structs" id="structs"></a>

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



