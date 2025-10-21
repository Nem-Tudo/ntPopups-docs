---
title: Multi-Step Wizard
---

# Multi-Step Wizard

```jsx
const registrationWizard = () => {
  const steps = ['personal', 'address', 'preferences'];
  let currentStep = 0;
  let data = {};
  
  const openStep = (step) => {
    const configs = {
      personal: {
        title: 'Personal Information (1/3)',
        components: [
          {
            id: 'name',
            type: 'text',
            label: 'Full Name',
            required: true,
            minLength: 3
          },
          [
            {
              id: 'ssn',
              type: 'text',
              label: 'SSN',
              required: true,
              matchRegex: '^\\d{9}
            },
            {
              id: 'phone',
              type: 'text',
              label: 'Phone',
              required: true
            }
          ]
        ]
      },
      address: {
        title: 'Address (2/3)',
        components: [
          {
            id: 'zipcode',
            type: 'text',
            label: 'Zip Code',
            required: true,
            matchRegex: '^\\d{5}
          },
          {
            id: 'street',
            type: 'text',
            label: 'Street',
            required: true
          },
          [
            {
              id: 'number',
              type: 'text',
              label: 'Number',
              required: true
            },
            {
              id: 'complement',
              type: 'text',
              label: 'Complement'
            }
          ]
        ]
      },
      preferences: {
        title: 'Preferences (3/3)',
        components: [
          {
            id: 'newsletter',
            type: 'checkbox',
            label: 'I want to receive newsletter',
            defaultValue: true
          },
          {
            id: 'notifications',
            type: 'checkbox',
            label: 'I want to receive notifications',
            defaultValue: true
          },
          {
            id: 'notes',
            type: 'textarea',
            label: 'Notes',
            placeholder: 'Anything else you want to tell us...',
            maxLength: 200
          }
        ]
      }
    };
    
    const config = configs[step];
    
    openPopup('form', {
      id: `wizard_${step}`,
      data: {
        ...config,
        icon: '📝',
        doneLabel: step === 'preferences' ? 'Finish' : 'Next',
        onResponse: (values) => {
          data = { ...data, ...values };
          
          if (step === 'preferences') {
            finishRegistration(data);
          } else {
            currentStep++;
            openStep(steps[currentStep]);
          }
        }
      }
    });
  };
  
  const finishRegistration = async (completeData) => {
    await api.post('/registration', completeData);
    
    openPopup('generic', {
      data: {
        title: 'Registration Complete!',
        message: 'Welcome! Your registration was successful.',
        icon: '🎊'
      },
      timeout: 5000
    });
  };
  
  openStep(steps[0]);
};
```