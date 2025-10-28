# Toast Notifications

```jsx
// utils/toast.js
import useNtPopups from 'ntpopups'

export function useToast() {
  const { openPopup } = useNtPopups()
  
  const toast = {
    success: (message) => {
      openPopup('generic', {
        data: {
          message,
          icon: '✅',
          closeLabel: 'OK'
        },
        timeout: 3000,
        hiddenHeader: true
      })
    },
    error: (message) => {
      openPopup('generic', {
        data: {
          message,
          icon: '❌',
          closeLabel: 'OK'
        },
        timeout: 5000,
        hiddenHeader: true
      })
    },
    info: (message) => {
      openPopup('generic', {
        data: {
          message,
          icon: 'ℹ️',
          closeLabel: 'OK'
        },
        timeout: 3000,
        hiddenHeader: true
      })
    },
    warning: (message) => {
      openPopup('generic', {
        data: {
          message,
          icon: '⚠️',
          closeLabel: 'OK'
        },
        timeout: 4000,
        hiddenHeader: true
      })
    }
  }
  
  return toast
}

// Usage
const toast = useToast()

toast.success('Profile updated successfully!')
toast.error('Failed to save changes')
