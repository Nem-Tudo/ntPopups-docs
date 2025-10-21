---
title: Base Settings
---

# Base Settings

Applicable to any popup (native or custom):

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | string | auto | Unique popup ID (Not recommended to modify) |
| `closeOnEscape` | boolean | true | Allows closing with ESC key |
| `closeOnClickOutside` | boolean | true | Allows closing by clicking outside |
| `requireAction` | boolean | false | Requires internal action to close |
| `timeout` | number | 0 | Time (ms) to auto-close |
| `keepLast` | boolean | false | Keeps previous popup visible |
| `hiddenHeader` | boolean | false | Hides the header |
| `hiddenFooter` | boolean | false | Hides the footer |
| `disableOpenAnimation` | boolean | false | Disables opening animation |
| `maxWidth` | string | - | CSS max width |
| `onOpen` | Function | - | Callback on open |
| `onClose` | Function | - | Callback on close |

**Example with settings:**

```jsx
openPopup('generic', {
  closeOnEscape: false,
  closeOnClickOutside: false,
  requireAction: true,
  timeout: 5000,
  keepLast: true,
  hiddenHeader: true,
  hiddenFooter: true,
  disableOpenAnimation: true,
  maxWidth: '400px',
  onOpen: (id) => console.log('Popup opened:', id),
  onClose: (hasAction, id) => {
    console.log('Closed with action?', hasAction);
  },
  data: {
    message: 'This popup closes itself in 5 seconds!'
  }
});
```