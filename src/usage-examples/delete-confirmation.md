---
title: Delete Confirmation
---

# Delete Confirmation

```jsx
const confirmDeletion = (itemId) => {
  openPopup('confirm', {
    data: {
      title: 'Delete Item',
      message: 'This action cannot be undone. Do you want to continue?',
      icon: '🗑️',
      confirmLabel: 'Yes, delete',
      confirmStyle: 'Danger',
      cancelLabel: 'Cancel',
      onChoose: async (confirmed) => {
        if (confirmed) {
          await deleteItem(itemId);
          openPopup('generic', { 
            data: { message: "Item deleted!" } 
          });
        }
      }
    },
    closeOnClickOutside: false,
    closeOnEscape: true
  });
};
```