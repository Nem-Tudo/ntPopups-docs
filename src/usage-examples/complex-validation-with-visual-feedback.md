---
title: Complex Validation with Visual Feedback
---

# Complex Validation with Visual Feedback

```jsx
const advancedForm = () => {
  openPopup('form', {
    data: {
      title: 'Create New Account',
      icon: '🔐',
      components: [
        {
          id: 'username',
          type: 'text',
          label: 'Username',
          placeholder: 'minimum 3 characters',
          required: true,
          minLength: 3,
          maxLength: 20,
          matchRegex: '^[a-zA-Z0-9_]+
        },
        {
          id: 'email',
          type: 'text',
          label: 'Email',
          placeholder: 'your@email.com',
          required: true,
          matchRegex: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}
        },
        {
          id: 'password',
          type: 'text',
          label: 'Password',
          placeholder: 'minimum 8 characters',
          required: true,
          minLength: 8,
          matchRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+
        },
        {
          id: 'bio',
          type: 'textarea',
          label: 'Biography',
          placeholder: 'Tell us a bit about yourself (optional)',
          maxLength: 150,
          disableResize: true
        },
        [
          {
            id: 'terms',
            type: 'checkbox',
            label: 'I accept the Terms of Use',
            required: true
          },
          {
            id: 'privacy',
            type: 'checkbox',
            label: 'I accept the Privacy Policy',
            required: true
          }
        ]
      ],
      onSubmit: async (data) => {
        try {
          await api.post('/create-account', data);
          
          openPopup('generic', {
            data: {
              title: 'Account Created!',
              message: 'Check your email to activate your account.',
              icon: '📧'
            }
          });
        } catch (error) {
          openPopup('generic', {
            data: {
              title: 'Error',
              message: error.response?.data?.message || 'Error creating account.',
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