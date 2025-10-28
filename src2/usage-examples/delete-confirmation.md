# Delete Confirmation

```jsx
const confirmDelete = (itemId) => {
  openPopup('confirm', {
    data: {
      title: 'Delete Item',
      message: 'This action cannot be undone. Continue?',
      icon: '🗑️',
      confirmLabel: 'Delete',
      confirmStyle: 'Danger',
      onChoose: async (confirmed) => {
        if (confirmed) {
          await deleteItem(itemId);
          openPopup('generic', {
            data: { message: 'Item deleted!' },
            timeout: 3000
          });
        }
      }
    },
    closeOnClickOutside: false
  });
};
```
