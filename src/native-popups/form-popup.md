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
    onResponse: (values) => {
      console.log('Form data:', values);
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
- `onResponse` (Function): Callback with object containing all values

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