# Advanced Form Validation

```jsx
const createAccountForm = () => {
  openPopup('form', {
    data: {
      title: 'Create Account',
      icon: '🔐',
      components: [
        {
          id: 'username',
          type: 'text',
          label: 'Username',
          placeholder: 'Minimum 3 characters',
          required: true,
          minLength: 3,
          maxLength: 20,
          matchRegex: '^[a-zA-Z0-9_]+$'
        },
        {
          id: 'email',
          type: 'email',
          label: 'Email',
          placeholder: 'your@email.com',
          required: true
        },
        {
          id: 'password',
          type: 'password',
          label: 'Password',
          placeholder: 'Min 8 chars, 1 uppercase, 1 number',
          required: true,
          minLength: 8,
          matchRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'
        },
        // ... other fields
      ],
      onSubmit: async (data) => {
        try {
          await api.post('/auth/register', data);
          
          openPopup('generic', {
            data: {
              title: 'Account Created!',
              message: 'Check your email to verify your account.',
              icon: '📧'
            }
          });
        } catch (error) {
          openPopup('generic', {
            data: {
              title: 'Error',
              message: error.response?.data?.message || 'Failed to create account.',
              icon: '❌'
            }
          });
        }
      }
    },
    maxWidth: '550px'
  });
};
```
