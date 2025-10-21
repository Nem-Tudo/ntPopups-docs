---
title: Recommendations
---

# Recommendations

**Async Callbacks** - Always handle errors in async operations

```jsx
onSubmit: async (data) => {
  try {
    await saveData(data);
  } catch (error) {
    console.error(error);
  }
}
```

**External Validation** - Validate critical data on the server too

**Appropriate Timeout** - Use timeouts only for informative messages

```jsx
// Good - success notification
timeout: 3000

// Bad - important form
timeout: 5000
```

**RequireAction** - Use for critical actions

```jsx
// Good - delete confirmation
requireAction: true

// Bad - informative message
requireAction: true
```

**Cleanup** - Close popups when unmounting components

```jsx
useEffect(() => {
  return () => closeAllPopups();
}, []);
```