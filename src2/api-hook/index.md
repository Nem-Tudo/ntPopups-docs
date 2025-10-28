# 🎭 Hook API (`useNtPopups`)

The `useNtPopups` hook is the main entry point for all popup interactions.

### Overview

```typescript
const {
  openPopup,       // (type, settings) => PopupData | null
  closePopup,      // (id?, hasAction?) => void
  updatePopup,     // (id, newSettings) => PopupData | null
  closeAllPopups,  // () => void
  isPopupOpen,     // (id) => boolean
  getPopup,        // (id) => PopupData | null
  popups,          // PopupData[] - Array of active popups
  language         // 'en' | 'ptbr'
} = useNtPopups();
```

See [Hook Methods](/api-hook/methods) for a detailed breakdown of each function.
