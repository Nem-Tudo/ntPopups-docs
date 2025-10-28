# Confirmation Hook

```jsx
// hooks/useConfirm.js
import { useCallback } from 'react'
import useNtPopups from 'ntpopups'

export function useConfirm() {
  const { openPopup } = useNtPopups()
  
  const confirm = useCallback((options) => {
    return new Promise((resolve) => {
      openPopup('confirm', {
        data: {
          title: options.title || 'Confirm',
          message: options.message,
          confirmLabel: options.confirmLabel || 'Confirm',
          cancelLabel: options.cancelLabel || 'Cancel',
          confirmStyle: options.style || 'default',
          icon: options.icon || '❓',
          onChoose: (confirmed) => resolve(confirmed)
        },
        closeOnClickOutside: false
      })
    })
  }, [openPopup])
  
  return confirm
}

// Usage
const confirm = useConfirm()

const handleDelete = async () => {
  const confirmed = await confirm({
    title: 'Delete Item',
    message: 'This action cannot be undone',
    confirmLabel: 'Delete',
    style: 'Danger'
  })
  
  if (confirmed) {
    await deleteItem()
  }
}
```
