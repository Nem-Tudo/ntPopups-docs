# Multi-Step Wizard

```jsx
const registrationWizard = () => {
  const steps = ['personal', 'address', 'preferences'];
  let currentStep = 0;
  let formData = {};
  
  const stepConfigs = {
    personal: {
      title: 'Personal Information (1/3)',
      components: [ /* ... fields ... */ ]
    },
    address: {
      title: 'Address (2/3)',
      components: [ /* ... fields ... */ ]
    },
    preferences: {
      title: 'Preferences (3/3)',
      components: [ /* ... fields ... */ ]
    }
  };
  
  const openStep = (step) => {
    const config = stepConfigs[step];
    const isLastStep = step === 'preferences';
    
    openPopup('form', {
      id: `wizard_${step}`,
      data: {
        ...config,
        icon: '📝',
        doneLabel: isLastStep ? 'Finish' : 'Next',
        onSubmit: (values) => {
          formData = { ...formData, ...values };
          
          if (isLastStep) {
            finishRegistration(formData);
          } else {
            currentStep++;
            openStep(steps[currentStep]);
          }
        }
      }
    });
  };
  
  const finishRegistration = async (data) => {
    await api.post('/registration', data);
    
    openPopup('generic', {
      data: {
        title: 'Registration Complete!',
        message: 'Welcome! Your account is ready.',
        icon: '🎊'
      },
      timeout: 5000
    });
  };
  
  openStep(steps[0]);
};
```
