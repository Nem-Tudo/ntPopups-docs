# Generic - Simple Message

Display informational messages, warnings, or notifications.

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

**Props (`data`):**
| Property | Type | Description |
|---|---|---|
| `title` | ReactNode | Popup title |
| `message` | ReactNode | Main message content |
| `closeLabel` | ReactNode | Close button text |
| `icon` | ReactNode | Icon next to title (default: "ⓘ") |
