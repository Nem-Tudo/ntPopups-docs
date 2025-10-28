# Loading Indicator

```jsx
const performLongAction = async () => {
  const loading = openPopup('generic', {
    id: 'loading_popup',
    data: {
      title: 'Processing...',
      message: 'Please wait while we complete your request.',
      icon: '⏳'
    },
    requireAction: true,
    hiddenFooter: true
  });
  
  try {
    await performOperation();
    
    closePopup(loading.id, true);
    
    openPopup('generic', {
      data: {
        title: 'Success!',
        message: 'Operation completed.',
        icon: '✅'
      },
      timeout: 3000
    });
  } catch (error) {
    closePopup(loading.id, true);
    
    openPopup('generic', {
      data: {
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        icon: '❌'
      }
    });
  }
};
```
