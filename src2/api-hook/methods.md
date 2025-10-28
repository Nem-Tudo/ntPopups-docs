# Hook API Methods

### `openPopup(type, settings)`
Opens a popup and returns its data (including unique ID).

```jsx
const popup = openPopup('confirm', {
  data: { message: 'Continue?' }
});
console.log(popup.id); // "popup_abc123"
```

### `closePopup(id?, hasAction?)`
Closes a specific popup or the last opened one.

```jsx
closePopup();                    // Close last popup, no action
closePopup(true);               // Close last popup, with action
closePopup('popup_123', true);  // Close specific popup, with action
```

### `updatePopup(id, newSettings)`
Updates settings of an open popup.

```jsx
const popup = openPopup('generic', {
  data: { title: "Status", message: 'Loading...' }
});

updatePopup(popup.id, {
  data: {...popup.settings.data, message: 'Complete!' }
});
```

### `closeAllPopups()`
Closes all open popups immediately.

```jsx
closeAllPopups();
```

### `isPopupOpen(id)`
Checks if a popup is currently open.

```jsx
if (isPopupOpen('my_popup')) {
  console.log('Still open!');
}
```

### `getPopup(id)`
Retrieves data for an open popup.

```jsx
const popup = getPopup('popup_123');
console.log(popup?.settings);
```
