---
title: Form Popup
---

# Form Popup

Dynamic form with multiple field types.

```jsx
openPopup('form', {
  data: {
    title: 'Registration',
    message: 'Fill in the fields below:',
    doneLabel: 'Submit',
    icon: '📝',
    components: [
      {
        id: 'name',
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your name',
        required: true,
        minLength: 3,
        maxLength: 50
      },
      {
        id: 'email',
        type: 'text',
        label: 'Email',
        placeholder: 'your@email.com',
        required: true,
        matchRegex: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
      },
      {
        id: 'bio',
        type: 'textarea',
        label: 'Biography',
        placeholder: 'Tell us about yourself...',
        maxLength: 200,
        disableResize: true
      },
      {
        id: 'accept',
        type: 'checkbox',
        label: 'I accept the terms',
        defaultValue: false
      },
      [
        {
          id: 'city',
          type: 'text',
          label: 'City',
          placeholder: 'New York'
        },
        {
          id: 'state',
          type: 'text',
          label: 'State',
          placeholder: 'NY',
          maxLength: 2
        }
      ]
    ],
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
    onChange: ({ changedComponentState, formState }) => {
      const { id, value, isValid } = changedComponentState;
      const { values, idValid} = formState;
      
      console.log('Changed component:', id);
      console.log('New value:', value);
      console.log('New value is valid:', isValid);

      console.log('Current form values:', values);
      console.log('Current form values is valid:', values);
    }
  }
});
```

**Form Props:**
- `title` (ReactNode): Form title
- `message` (ReactNode): Optional explanatory message
- `doneLabel` (ReactNode): Submit button text
- `icon` (ReactNode): Header icon
- `components` (Array): List of form components
- `onSubmit` (Function): Callback with object containing all values
- `onChange` (Function): Event fired when any information changes

### Text Input Component

```javascript
{
  id: 'unique_field',
  type: 'text',
  label: 'Label',
  placeholder: 'Type...',
  defaultValue: '',
  required: false,
  disabled: false,
  minLength: 3,
  maxLength: 50,
  matchRegex: '^[A-Z].*'
}
```

### Textarea Component

```javascript
{
  id: 'text_field',
  type: 'textarea',
  label: 'Description',
  placeholder: 'Enter a description...',
  defaultValue: '',
  required: false,
  disabled: false,
  disableResize: false,
  minLength: 10,
  maxLength: 500,
  matchRegex: '.*'
}
```

### Checkbox Component

```javascript
{
  id: 'accept_terms',
  type: 'checkbox',
  label: 'I accept the terms of use',
  defaultValue: false,
  disabled: false,
  required: false
}
```

**💡 Tips:**
- When `requireAction = true`, the "Cancel" button is removed
- The submit button is disabled until all fields are valid
- Invalid fields automatically receive a red border
- Applied validations: `required`, `minLength`, `maxLength`, `matchRegex`