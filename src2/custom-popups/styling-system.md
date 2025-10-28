# Styling System

To ensure your custom popup matches the theme and responsiveness of the native popups, use the `popupstyles` prop and `ntpopups-css` attribute.

### 1. Button Styles

Use `className={popupstyles.baseButton}` with these attributes:

**`base-button-style`** (string):
- `"0"` - Primary (default)
- `"1"` - Secondary
- `"2"` - Text
- `"3"` - Success (green)
- `"4"` - Danger (red)

**`base-button-no-flex`** (string): `"true"` \| `"false"` (default)

If `base-button-no-flex="true"`, the button will not stretch to fill the available space.

**Example:**
```jsx
<button 
  className={popupstyles.baseButton}
  base-button-style="4" // Danger style
  base-button-no-flex="true"
>
  Delete
</button>
```

### 2. Form Elements (`ntpopups-css="true"`)

To apply `ntPopups` styling to native form elements inside your custom component, add the `ntpopups-css="true"` attribute.

**Supported elements:**
- `<input>` (text, email, password, number, date, time, radio)
- `<textarea>`
- `<select>`
- `<a>`

**Additional attributes:**
- `valid="false"` - Show error state (red border)
- `noresize="true"` - Disable textarea resizing (textarea only)

**Example:**
```jsx
<div className={popupstyles.body}>
  <label>Username</label>
  <input type="text" ntpopups-css="true" placeholder="Username" />

  <label>Notes</label>
  <textarea ntpopups-css="true" noresize="true" />

  <label>Category</label>
  <select ntpopups-css="true">
    <option>Option 1</option>
  </select>

  <a href="#" ntpopups-css="true">A styled link</a>
</div>
```
