# HTML - Custom Content

Render custom HTML or React components in a popup.

```jsx
openPopup('html', {
  data: {
    html: <h1>Hello World!</h1>
  }
});
```

Or with access to `closePopup`:

```jsx
openPopup('html', {
  data: {
    html: ({ closePopup }) => (
      <div>
        <h1>Custom Content</h1>
        <button onClick={() => closePopup()}>Close</button>
      </div>
    )
  }
});
```

**Props (`data`):**
| Property | Type | Description |
|---|---|---|
| `html` | ReactNode \| Function | Custom content or render function. If a function, it receives `{ closePopup }`. |
