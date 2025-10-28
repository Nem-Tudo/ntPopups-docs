# Basic Structure & Props

Your custom popup component is a standard React component that receives special props from `ntPopups`.

### Injected Props

| Prop | Type | Description |
|---|---|---|
| `closePopup` | `(hasAction?: boolean) => void` | **Function to close the popup.** Pass `true` if the close was an intentional action. |
| `popupstyles` | `object` | **CSS Module classes.** Use these to style your component with the library's theme (e.g., `popupstyles.header`, `popupstyles.body`, `popupstyles.baseButton`). |
| `requireAction` | `boolean` | `true` if this popup *must* be closed via an action (disables 'X' button, backdrop click, etc.). |
| `data` | `object` | **All custom props you pass** via `openPopup('my_type', { data: { ... } })` are here. |

💡 **Tip:** When `requireAction = true`, `closePopup()` (or `closePopup(false)`) will **not** work. You **must** call `closePopup(true)` to close it.

### Basic Common Structure

```jsx
export default function MyCustomPopup({
  // Provided by library
  closePopup,      // Function to close popup
  popupstyles,     // Predefined CSS classes
  requireAction,   // Boolean - requires user action to close
  
  // Your custom props
  data = {}
}) {
  return (
    <>
      {/* Header */}
      <div className={popupstyles.header}>
        <div className={popupstyles.icon}>ⓘ</div>
        <span>Custom Popup Title</span>
      </div>

      {/* Body */}
      <div className={popupstyles.body}>
        <p>Your custom content here</p>
      </div>

      {/* Footer */}
      <div className={popupstyles.footer}>
        <button
          className={popupstyles.baseButton}
          base-button-style="0"
          onClick={() => closePopup(true)}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
```

