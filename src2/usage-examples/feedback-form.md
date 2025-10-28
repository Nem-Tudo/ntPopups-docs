# Feedback Form

```jsx
const openFeedbackForm = () => {
  openPopup('form', {
    data: {
      title: 'Send Feedback',
      message: 'Your opinion matters!',
      icon: '💬',
      components: [
        { id: 'name', type: 'text', label: 'Name', required: true, minLength: 2 },
        { id: 'email', type: 'email', label: 'Email', required: true },
        { id: 'message', type: 'textarea', label: 'Message', required: true, minLength: 10, maxLength: 500 },
        { id: 'contact', type: 'checkbox',label: 'You may contact me about this', defaultValue: true }
      ],
      onSubmit: async (data) => {
        await api.post('/feedback', data);
        
        openPopup('generic', {
          data: {
            title: 'Thank you!',
            message: 'Feedback sent successfully.',
            icon: '🎉'
          },
          timeout: 4000
        });
      }
    },
    maxWidth: '600px'
  });
};
```
