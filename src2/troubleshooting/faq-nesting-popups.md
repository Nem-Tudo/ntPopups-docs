# FAQ: Can I nest popups?

While technically possible with `keepLast: true`, it's **not recommended** for UX reasons. Instead, close the first popup and open the second:

```jsx
openPopup('confirm', {
  data: {
    onChoose: (confirmed) => {
      if (confirmed) {
        openPopup('form', { /* ... */ }) // Open next popup
      }
    }
  }
})
```
