---
title: Provider Props
---

### Provider Props

The `NtPopupProvider` accepts the following properties to configure the global behavior of popups:

```jsx
<NtPopupProvider
  language="en"             // Library popups language: 'en' (English) or 'ptbr' (Portuguese)
  theme="white"             // Visual theme: 'white' (light) or 'dark' (dark)
  customPopups={{}}         // Object containing custom popup definitions
  config={{
    defaultSettings: {
      all: { 
        // Settings applied to ALL popups (global default)
        closeOnEscape: true,           // Allows closing with ESC key
        closeOnClickOutside: true,     // Allows closing by clicking outside the popup
      },
      generic: { 
        // Specific settings for 'generic' type popups
        closeOnClickOutside: false,    // Overrides 'all' setting
        timeout: 20 * 1000             // Automatically closes after 20 seconds
      },
      confirm: {
        // Specific settings for 'confirm' type popups
        closeOnClickOutside: false     // Specific settings take priority over 'all'
      },
      my_custom: { 
        // Settings for your custom popups (use the name you defined)
        requireAction: true            // Requires user to take an action (won't close automatically)
      }
    }
  }}
>
```

#### Available Properties

| Property | Type | Values | Description |
|----------|------|--------|-------------|
| `language` | `string` | `'en'` \| `'ptbr'` | Sets the language for default texts in library popups |
| `theme` | `string` | `'white'` \| `'dark'` | Sets the visual theme (colors) for all popups |
| `customPopups` | `object` | `{}` | Object containing your custom popup definitions |
| `config.defaultSettings` | `object` | - | Configuration object with default popup behaviors |

#### Behavior Settings (defaultSettings)

You can define settings at three levels of specificity:

1. **`all`**: Global settings applied to all popups
2. **Popup type** (e.g., `generic`, `confirm`, `form`): Settings for a specific library type
3. **Custom name** (e.g., `my_custom`): Settings for your custom popups

**Priority order**: Specific settings > Type settings > Global settings (`all`)