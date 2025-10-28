# Form Field: Select Dropdown

### Type: `select`

Standard dropdown component.

```javascript
{
  id: 'country',
  type: 'select',
  label: 'Country',
  options: ['USA', 'Canada', { label: 'Other', value: 'world' }],
  required: true,
  defaultValue: ''
}
```

| Property | Type | Description |
|---|---|---|
| `options` | `Array<string \| {label, value}>` | List of available choices. |
| `defaultValue` | `string` | The value of the option selected by default. |
