---
title: Loading Modal
---

# Loading Modal

```jsx
const executeLongAction = async () => {
  const loadingId = openPopup('generic', {
    id: 'loading_popup',
    data: {
      title: 'Processing...',
      message: 'Please wait while we process your request.',
      icon: '⏳'
    },
    closeOnEscape: false,
    closeOnClickOutside: false,
    hiddenFooter: true
  });
  
  try {
    await performLongOperation();
    
    closePopup(loadingId, true);
    
    openPopup('generic', {
      data: {
        title: 'Complete!',
        message: 'Operation completed successfully.',
        icon: '✅'
      },
      timeout: 3000
    });
  } catch (error) {
    closePopup(loadingId, true);
    
    openPopup('generic', {
      data: {
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        icon: '❌',
        closeLabel: 'Got it'
      }
    });
  }
};
```