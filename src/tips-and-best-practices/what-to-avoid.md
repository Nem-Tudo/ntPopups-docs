---
title: What to Avoid
---

# What to Avoid

**Multiple Simultaneous Popups** - Confuses the user

```jsx
// Avoid
openPopup('generic', { keepLast: true });
openPopup('confirm', { keepLast: true });
```

**Very Long Popups** - Break into multiple steps

**Timeout on Important Actions** - User might lose the popup

```jsx
// Avoid - confirmation with timeout
openPopup('confirm', { timeout: 5000 });
```