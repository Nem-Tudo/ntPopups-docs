# Form Field: Date Input

### Type: `date`

Input field for selecting a date.

```javascript
{
  id: 'birthdate',
  type: 'date',
  label: 'Birthdate',
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2024-12-31'),
  required: true,
  defaultValue: new Date('2000-01-01')
}
```

| Property | Type | Description |
|---|---|---|
| `minDate` | Date | Minimum selectable date. |
| `maxDate` | Date | Maximum selectable date. |
