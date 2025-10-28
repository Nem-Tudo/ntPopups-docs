# Form Field: Textarea

### Type: `textarea`

Multi-line text input.

```javascript
{
  id: 'description',
  type: 'textarea',
  label: 'Description',
  placeholder: 'Enter description...',
  defaultValue: '',
  required: false,
  disabled: false,
  disableResize: false, // Prevent user resizing
  minLength: 10,
  maxLength: 500,
  matchRegex: '.*'
}
```

| Property | Type | Description |
|---|---|---|
| `placeholder` | string | Field placeholder |
| `disableResize` | boolean | If `true`, prevents the user from manually resizing the textarea. |
| `minLength` | number | Minimum required length. |
| `maxLength` | number | Maximum allowed length. |
| `matchRegex` | string | Regular expression pattern for advanced validation. |
