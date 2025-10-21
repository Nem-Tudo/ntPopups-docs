---
title: Generic Popup
---

# Generic Popup

Simple message popup for displaying information.

```jsx
openPopup('generic', {
  data: {
    title: 'Warning',
    message: 'This is an informative message.',
    closeLabel: 'Got it',
    icon: '⚠️'
  }
});
```

**Available props:**
- `title` (ReactNode): Popup title
- `message` (ReactNode): Main message
- `closeLabel` (ReactNode): Close button text
- `icon` (ReactNode): Icon next to title (default: "ⓘ")