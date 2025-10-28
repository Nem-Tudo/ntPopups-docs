# Form Field: Number Input

### Type: `number`

Input field constrained to numerical values.

```javascript
{
  id: 'age',
  type: 'number',
  label: 'Age',
  placeholder: 'Enter your age...',
  defaultValue: 18,
  required: false,
  disabled: false,
  min: 0,
  max: 120
}
```

| Property | Type | Description |
|---|---|---|
| `placeholder` | string | Field placeholder |
| `min` | number | Minimum allowed numerical value. |
| `max` | number | Maximum allowed numerical value. |
