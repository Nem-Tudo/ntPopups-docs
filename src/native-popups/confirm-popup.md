---
title: Confirm Popup
---

# Confirm Popup

Confirmation popup for user decisions.

```jsx
openPopup('confirm', {
  data: {
    title: 'Confirmation',
    message: 'Are you sure you want to continue?',
    cancelLabel: 'Cancel',
    confirmLabel: 'Yes, continue',
    confirmStyle: 'Danger',
    icon: '❓',
    onChoose: (confirmed) => {
      if (confirmed) {
        console.log('User confirmed!');
      } else {
        console.log('User cancelled.');
      }
    }
  }
});
```

**Available props:**
- `title` (ReactNode): Popup title
- `message` (ReactNode): Confirmation message
- `cancelLabel` (ReactNode): Cancel button text
- `confirmLabel` (ReactNode): Confirm button text
- `confirmStyle` ('default'|'Secondary'|'Success'|'Danger'): Confirmation button style
- `icon` (ReactNode): Icon next to title
- `onChoose` (Function): Callback that receives `true` (confirm) or `false` (cancel)