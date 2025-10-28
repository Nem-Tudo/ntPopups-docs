# ⚙️ Global Configuration: Provider Props

Global settings are passed to the `<NtPopupProvider>`.

```jsx
<NtPopupProvider
  language="en"             // 'en' | 'ptbr'
  theme="white"             // 'white' | 'dark'
  customPopups={{}}         // Your custom popup components
  config={{
    defaultSettings: {
      all: {                // Applied to all popups
        closeOnEscape: true,
        closeOnClickOutside: true,
      },
      generic: {            // Specific to generic popup
        closeOnClickOutside: false,
        timeout: 20000
      },
      confirm: {            // Override for confirm popup
        closeOnClickOutside: false
      },
      my_custom: {          // Your custom popup defaults
        requireAction: true
      }
    }
  }}
>
```

| Property | Type | Description |
|---|---|---|
| `language` | `'en'` \| `'ptbr'` | Sets the default language for native text (e.g., form validation). |
| `theme` | `'white'` \| `'dark'` | Sets the default theme. |
| `customPopups` | `object` | An object to [register your custom popup components](/custom-popups/register-and-use). |
| `config` | `object` | An object to define `defaultSettings` globally or per-popup-type. |
