# Confirm - User Confirmation

Get user confirmation before critical actions.

```jsx
openPopup('confirm', {
  data: {
    title: 'Delete Item?',
    message: 'This action cannot be undone. Continue?',
    cancelLabel: 'Cancel',
    confirmLabel: 'Yes, delete',
    confirmStyle: 'Danger',
    icon: '❓',
    onChoose: (confirmed) => {
      if (confirmed) {
        console.log('User confirmed!');
      }
    }
  }
});
```

**Props (`data`):**
| Property | Type | Description |
|---|---|---|
| `title` | ReactNode | Popup title |
| `message` | ReactNode | Confirmation message |
| `cancelLabel` | ReactNode | Cancel button text |
| `confirmLabel` | ReactNode | Confirm button text |
| `confirmStyle` | `'default'` \| `'Secondary'` \| `'Success'` \| `'Danger'` | Confirm button style |
| `icon` | ReactNode | Header icon |
| `onChoose` | `(confirmed: boolean) => void` | Callback receiving true (confirm) or false (cancel) |
