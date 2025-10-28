# TypeScript Errors

**Symptom:** Type errors with custom popups

**Solution:**
```typescript
// Define types for your custom popup data
interface MyCustomData {
  message: string;
  onConfirm?: () => void;
}

openPopup('my_custom', {
  data: {
    message: 'Hello',
    onConfirm: () => console.log('Confirmed')
  } as MyCustomData
});
```
