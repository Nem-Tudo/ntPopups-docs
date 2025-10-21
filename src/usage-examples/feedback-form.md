---
title: Feedback Form
---

# Feedback Form

```jsx
const openFeedbackForm = () => {
  openPopup('form', {
    data: {
      title: 'Send Your Feedback',
      message: 'Your opinion is very important to us!',
      icon: '💬',
      doneLabel: 'Send Feedback',
      components: [
        {
          id: 'name',
          type: 'text',
          label: 'Name',
          placeholder: 'Your name',
          required: true,
          minLength: 2
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
          id: 'type',
          type: 'text',
          label: 'Feedback Type',
          placeholder: 'Suggestion, Bug, Compliment...',
          required: true
        },
        {
          id: 'message',
          type: 'textarea',
          label: 'Message',
          placeholder: 'Describe your feedback here...',
          required: true,
          minLength: 10,
          maxLength: 500
        },
        {
          id: 'contact',
          type: 'checkbox',
          label: 'You may contact me about this feedback',
          defaultValue: true
        }
      ],
      onSubmit: async (data) => {
        await api.post('/feedback', data);
        
        openPopup('generic', {
          data: {
            title: 'Thank you!',
            message: 'Your feedback has been sent successfully.',
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