# 🎨 Visual Customization: CSS Variables

`ntPopups` provides **100+ CSS variables** for complete visual control. All variables use the `--ntpopups-*` prefix.

### How to Customize

Create a CSS file and override the variables. Import this file *after* the `ntpopups` styles.

```css
/* styles/custom-ntpopups.css */

.ntpopups-overlay {
  /* Brand colors */
  --ntpopups-color-primary: #ff6b6b;
  --ntpopups-color-primary-hover: #ff5252;
  
  /* Typography */
  --ntpopups-font-family: 'Poppins', sans-serif;
  --ntpopups-font-size-base: 16px;
  
  /* Rounded design */
  --ntpopups-border-radius: 20px;
  --ntpopups-border-radius-button: 10px;
  
  /* Softer shadows */
  --ntpopups-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  /* Generous spacing */
  --ntpopups-padding-body: 30px;
  
  /* Darker backdrop */
  --ntpopups-bg-overlay: rgba(0, 0, 0, 0.7);
}

/* Dark theme customization */
.ntpopups-dark-theme {
  --ntpopups-color-primary: #bb86fc;
  --ntpopups-bg-overlay: rgba(0, 0, 0, 0.9);
  --ntpopups-bg-body: #1e1e1e;
}
```

**Import in your app:**

```jsx
import 'ntpopups/dist/styles.css';
import './styles/custom-ntpopups.css';
```

---

### Variable Categories (Sample)

#### Typography

```css
--ntpopups-font-family: "Segoe UI", Arial, sans-serif;
--ntpopups-font-size-base: 18px;
/* ... other typography variables ... */
```

#### Colors

```css
/* Primary */
--ntpopups-color-primary: #5f54f0;
--ntpopups-color-primary-hover: #4f43f5;

/* Semantic */
--ntpopups-color-success: #28a745;
--ntpopups-color-danger: #dc3545;

/* Text */
--ntpopups-color-text: rgba(64, 64, 64, 0.95);
--ntpopups-color-text-light: #f8f9fa;
```

#### Backgrounds

```css
--ntpopups-bg-default: linear-gradient(...);
--ntpopups-bg-overlay: rgba(0, 0, 0, 0.459);
/* ... other background variables ... */
```

#### Borders & Radius

```css
--ntpopups-border-width: 1px;
--ntpopups-border-color: rgba(0, 0, 0, 0.07);
--ntpopups-border-radius: 10px;
--ntpopups-border-radius-button: 5px;
```

#### Shadows

```css
--ntpopups-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
--ntpopups-shadow-button: 0 2px 4px rgba(0, 0, 0, 0.1);
```

#### Spacing

```css
--ntpopups-spacing-md: 15px;
--ntpopups-padding-header: var(--ntpopups-spacing-lg);
--ntpopups-padding-body: var(--ntpopups-spacing-lg);
--ntpopups-padding-footer: var(--ntpopups-spacing-sm);
--ntpopups-padding-button: var(--ntpopups-spacing-md) var(--ntpopups-spacing-lg);
```

#### Form Inputs

```css
--ntpopups-input-bg: #ffffff;
--ntpopups-input-border: var(--ntpopups-border-color);
--ntpopups-input-border-focus: var(--ntpopups-color-primary);
--ntpopups-input-text-color: var(--ntpopups-color-text);
```

#### Dimensions & Transitions

```css
--ntpopups-width-min: 300px;
--ntpopups-width-max: 1000px;
--ntpopups-height-max: 90dvh;
--ntpopups-transition-duration: 0.2s;
--ntpopups-transition-easing: ease-in-out;
```
