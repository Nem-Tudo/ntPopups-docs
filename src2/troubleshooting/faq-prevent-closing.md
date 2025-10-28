# FAQ: How do I prevent closing a popup?

Set `closeOnEscape` and `closeOnClickOutside` to `false`, and use `requireAction: true`:

```jsx
openPopup('generic', {
  closeOnEscape: false,
  closeOnClickOutside: false,
  requireAction: true,
  data: { /* ... */ }
})
```
