---
title: Guided Tour (Onboarding)
---

# Guided Tour (Onboarding)

```jsx
const startTour = () => {
  const steps = [
    {
      title: 'Welcome!',
      message: "Let's take a quick tour of the main features.",
      icon: '🚀'
    },
    {
      title: 'Dashboard',
      message: 'Here you can view all your metrics in real-time.',
      icon: '📊'
    },
    {
      title: 'Settings',
      message: 'Customize your experience in the settings.',
      icon: '⚙️'
    },
    {
      title: 'Ready!',
      message: "You're all set to begin. Good luck!",
      icon: '🎉'
    }
  ];
  
  let currentStep = 0;
  
  const showStep = () => {
    const step = steps[currentStep];
    const isLast = currentStep === steps.length - 1;
    
    openPopup('generic', {
      id: 'tour_step',
      data: {
        title: step.title,
        message: step.message,
        icon: step.icon,
        closeLabel: isLast ? 'Start' : 'Next'
      },
      onClose: (hasAction) => {
        if (hasAction && !isLast) {
          currentStep++;
          setTimeout(showStep, 300);
        } else if (hasAction && isLast) {
          localStorage.setItem('tour_complete', 'true');
        }
      }
    });
  };
  
  showStep();
};
```