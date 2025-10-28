# ⚙️ Global Configuration: Popup Settings

These settings can be applied to **any popup** (native or custom). You can set them globally in `config.defaultSettings` (see [Provider Props](/configuration/provider-props)) or pass them directly to `openPopup`.

| Property | Type | Default | Description |
|---|---|---|---|
| `id` | string | auto | Unique popup ID (It is not recommended to change) |
| `closeOnEscape` | boolean | true | Close on ESC key |
| `closeOnClickOutside` | boolean | true | Close on backdrop click |
| `requireAction` | boolean | false | Requires internal action to close |
| `timeout` | number | 0 | Auto-close after milliseconds |
| `keepLast` | boolean | false | Keep previous popup visible |
| `allowPageBodyScroll` | boolean | false | Allow page scrolling |
| `interactiveBackdrop` | boolean | false | Allow backdrop interactions |
| `hiddenBackdrop` | boolean | false | Hide backdrop |
| `hiddenHeader` | boolean | false | Hide header |
| `hiddenFooter` | boolean | false | Hide footer |
| `disableAnimation` | boolean | false | Disable open/close animation |
| `maxWidth` | string | - | CSS max-width (e.g., '800px') |
| `minWidth` | string | - | CSS min-width (e.g., '200px') |
| `onOpen` | `(id: string) => void` | - | Callback on open |
| `onClose` | `(hasAction: boolean, id: string) => void` | - | Callback on close |

**Example (in `openPopup`):**

```jsx
openPopup('generic', {
  closeOnEscape: false,
  requireAction: true,
  timeout: 5000,
  maxWidth: '400px',
  onOpen: (id) => console.log('Opened:', id),
  onClose: (hasAction, id) => {
    console.log('Closed with action?', hasAction);
  },
  data: {
    message: 'Auto-closes in 5 seconds'
  }
});
```
