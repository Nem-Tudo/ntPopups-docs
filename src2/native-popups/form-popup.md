# Form - Dynamic Forms

Create powerful, validated forms with multiple input types. The submit button is automatically disabled until all required fields are valid.

```jsx
openPopup('form', {
  data: {
    title: 'User Registration',
    message: 'Fill in the fields below:',
    doneLabel: 'Submit',
    icon: '📝',
    components: [
      { id: 'name', type: 'text', label: 'Full Name', required: true, minLength: 3 },
      { id: 'email', type: 'email', label: 'Email', required: true },
      // Fields can be grouped in an array for inline (side-by-side) layout
      [
        { id: 'city', type: 'text', label: 'City' },
        { id: 'state', type: 'text', label: 'State', maxLength: 2 }
      ]
    ],
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
    onChange: ({ changedComponentState, formState }) => {
      console.log('Form is valid:', formState.isValid);
    }
  }
});
```

**Main Props (`data`):**
| Property | Type | Description |
|---|---|---|
| `title` | ReactNode | Form title |
| `message` | ReactNode | Optional description |
| `doneLabel` | ReactNode | Submit button text |
| `icon` | ReactNode | Header icon |
| `components` | Array | List of form fields (see [Field Types](/native-popups/form/field-types/text)) |
| `onSubmit` | `(values: object) => void` | Callback with all form values |
| `onChange` | `(event: object) => void` | Fired when any field changes |

To see all available input types, navigate to [Field Types](/native-popups/form/field-types/text). To learn how to add your own inputs, see [Custom Form Components](/native-popups/form-custom-components).
