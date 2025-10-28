# ✅ Recommended

**1. Handle Async Operations**
```jsx
onSubmit: async (data) => {
  try {
    await api.post('/save', data);
    // Success handling
  } catch (error) {
    // Error handling
    console.error('Save failed:', error);
  }
}
```

**2. Validate on Server**
Never trust client-side validation alone.

**3. Use Timeouts Wisely**
```jsx
// ✅ Good - Success notification
openPopup('generic', {
  data: { message: 'Saved!' },
  timeout: 3000
});

// ❌ Bad - Critical action
openPopup('confirm', {
  data: { message: 'Delete everything?' },
  timeout: 5000  // User might miss it!
});
```

**4. RequireAction for Critical Actions**
```jsx
// ✅ Good - Delete confirmation
openPopup('confirm', {
  requireAction: true,
  data: { message: 'Delete account?' }
});

// ❌ Bad - Simple notification
openPopup('generic', {
  requireAction: true,  // Unnecessary friction
  data: { message: 'Welcome!' }
});
```

**5. Cleanup on Unmount**
```jsx
useEffect(() => {
  return () => {
    closeAllPopups(); // Clean up when component unmounts
  };
}, []);
```

**6. Provide Clear Feedback**
```jsx
// Show loading state
const loading = openPopup('generic', {
  data: { title: 'Saving...', message: 'Please wait' },
  requireAction: true,
  hiddenFooter: true
});

await saveData();

closePopup(loading.id, true);

// Show success
openPopup('generic', {
  data: { title: 'Saved!', icon: '✅' },
  timeout: 3000
});
```
