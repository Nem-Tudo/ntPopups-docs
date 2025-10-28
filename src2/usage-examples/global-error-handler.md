# Global Error Handler

```jsx
// utils/errorHandler.js
import useNtPopups from 'ntpopups'

export function useErrorHandler() {
  const { openPopup } = useNtPopups()
  
  const handleError = (error) => {
    openPopup('generic', {
      data: {
        title: 'Error',
        message: error.message || 'An unexpected error occurred',
        icon: '❌',
        closeLabel: 'OK'
      }
    })
  }
  
  return { handleError }
}

// Usage in components
const { handleError } = useErrorHandler()

try {
  await riskyOperation()
} catch (error) {
  handleError(error)
}
```
