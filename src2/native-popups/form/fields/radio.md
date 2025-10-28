# Form Field: Radio Button

### Type: `radio`

Group of buttons for single selection.

```javascript
{
  id: 'gender',
  type: 'radio',
  label: 'Gender',
  options: ['Male', 'Female', { label: 'Other', value: 'other' }],
  required: true,
  defaultValue: ''
}
```

| Property | Type | Description |
|---|---|---|
| `options` | `Array<string \| {label, value}>` | List of available choices. |
| `defaultValue` | `string` | The value of the option selected by default. |
