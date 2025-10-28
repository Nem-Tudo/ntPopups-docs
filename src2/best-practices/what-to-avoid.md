# ⚠️ Avoid

**1. Multiple Simultaneous Popups**
```jsx
// ❌ Confusing for users
openPopup('generic', { keepLast: true });
openPopup('confirm', { keepLast: true });
openPopup('form', { keepLast: true });

// ✅ Use sequential flow instead
openPopup('confirm', {
  data: {
    onChoose: (confirmed) => {
      if (confirmed) {
        openPopup('form', { /* ... */ });
      }
    }
  }
});
```

**2. Overly Long Forms**
```jsx
// ❌ 20 fields in one popup
// ✅ Split into multi-step wizard

// ❌ Very large forms
components: [/* 25 fields */]

// ✅ Multi-step approach
const wizard = ['step1', 'step2', 'step3'];
```

**3. Timeout on Important Actions**
```jsx
// ❌ User might lose important popup
openPopup('confirm', {
  timeout: 5000,
  data: { message: 'Confirm deletion?' }
});

// ✅ No timeout for critical actions
openPopup('confirm', {
  data: { message: 'Confirm deletion?' }
});
```

**4. Missing Error Handling**
```jsx
// ❌ No error handling
onSubmit: async (data) => {
  await api.post('/save', data);
}

// ✅ Proper error handling
onSubmit: async (data) => {
  try {
    await api.post('/save', data);
  } catch (error) {
    openPopup('generic', {
      data: {
        title: 'Error',
        message: error.message,
        icon: '❌'
      }
    });
  }
}
```
