# Form Field: Text Input

### Type: `text`

Generic single-line text input field.

```javascript
{
  id: 'username',
  type: 'text',
  label: 'Username',
  placeholder: 'Enter username...',
  defaultValue: '',
  required: false,
  disabled: false,
  minLength: 3,
  maxLength: 50,
  matchRegex: '^[A-Z].*' // Regex pattern
}
```

| Property | Type | Description |
|---|---|---|
| `placeholder` | string | Field placeholder |
| `minLength` | number | Minimum required length. |
| `maxLength` | number | Maximum allowed length. |
| `matchRegex` | string | Regular expression pattern for advanced validation. |
