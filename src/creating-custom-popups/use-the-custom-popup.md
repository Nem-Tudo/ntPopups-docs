---
title: Use the Custom Popup
---

# Use the Custom Popup
Done! You’re free to use your custom popup wherever you want! :D

```jsx
const { openPopup } = useNtPopups();

openPopup('my_custom', {
  data: {
    message: 'Hello from custom popup!',
    myProp1: 'Value 1',
    myProp2: 'Value 2',
    myProp3: 'Secret revealed!',
    myCallback: (result) => {
      console.log('Callback executed:', result);
    }
  },
  requireAction: true,
  maxWidth: '600px'
});
```