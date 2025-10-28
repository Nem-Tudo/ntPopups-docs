# Onboarding Tour

```jsx
const startOnboardingTour = () => {
  const steps = [
    {
      title: 'Welcome! 👋',
      message: "Let's take a quick tour of the main features.",
      icon: '🚀'
    },
    {
      title: 'Dashboard',
      message: 'View all your metrics in real-time here.',
      icon: '📊'
    },
    {
      title: 'Settings',
      message: 'Customize your experience in settings.',
      icon: '⚙️'
    },
    {
      title: 'Ready to Go!',
      message: "You're all set. Enjoy!",
      icon: '🎉'
    }
  ];
  
  let currentStep = 0;
  
  const showStep = () => {
    const step = steps[currentStep];
    const isLastStep = currentStep === steps.length - 1;
    
    openPopup('generic', {
      id: 'tour_step',
      data: {
        title: step.title,
        message: step.message,
        icon: step.icon,
        closeLabel: isLastStep ? 'Get Started' : 'Next'
      },
      onClose: (hasAction) => {
        if (hasAction && !isLastStep) {
          currentStep++;
          setTimeout(showStep, 300);
        } else if (hasAction && isLastStep) {
          localStorage.setItem('tour_complete', 'true');
        }
      }
    });
  };
  
  showStep();
};
```
