---
title: Available CSS Variables
---

# Available CSS Variables

The library offers over 100 CSS variables for complete customization. All follow the `--ntpopups-*` pattern.

### Typography

```css
--ntpopups-font-family: "Segoe UI", Arial, sans-serif;
--ntpopups-font-size-base: 18px;
--ntpopups-font-size-header: 24px;
--ntpopups-font-size-button: 14px;
--ntpopups-font-weight-header: 400;
--ntpopups-font-weight-normal: 400;
--ntpopups-font-weight-semibold: 500;
--ntpopups-font-weight-bold: 700;
--ntpopups-line-height-base: 1.5;
--ntpopups-line-height-header: 1.3;
```

### Primary Colors

```css
--ntpopups-color-primary: #5f54f0;
--ntpopups-color-primary-hover: #4f43f5;
--ntpopups-color-primary-active: #3f33e5;
--ntpopups-color-primary-disabled: #a39fd8;
--ntpopups-color-primary-light: #e8e6fc;
```

### Secondary Colors

```css
--ntpopups-color-secondary: #2a2a2a;
--ntpopups-color-secondary-hover: #363636;
--ntpopups-color-secondary-active: #4e555b;
--ntpopups-color-secondary-disabled: #b8bfc6;
--ntpopups-color-secondary-light: #e9ecef;
```

### Semantic Colors

```css
--ntpopups-color-success: #28a745;
--ntpopups-color-success-hover: #218838;
--ntpopups-color-danger: #dc3545;
--ntpopups-color-danger-hover: #c82333;
--ntpopups-color-warning: #ffc107;
--ntpopups-color-info: #17a2b8;
```

### Text Colors

```css
--ntpopups-color-text: rgba(64, 64, 64, .95);
--ntpopups-color-text-secondary: rgba(14, 14, 14, 0.6);
--ntpopups-color-text-muted: rgba(14, 14, 14, 0.4);
--ntpopups-color-text-light: #f8f9fa;
--ntpopups-color-text-on-primary: #ffffff;
```

### Backgrounds

```css
--ntpopups-bg-default: linear-gradient(...);
--ntpopups-bg-overlay: rgba(0, 0, 0, 0.459);
--ntpopups-bg-footer: #f0f0f0;
--ntpopups-bg-header: linear-gradient(...);
--ntpopups-bg-body: linear-gradient(...);
--ntpopups-bg-button-primary: var(--ntpopups-color-primary);
--ntpopups-bg-button-secondary: var(--ntpopups-color-secondary);
```

### Borders

```css
--ntpopups-border-width: 1px;
--ntpopups-border-width-thick: 2px;
--ntpopups-border-style: solid;
--ntpopups-border-color: rgba(0, 0, 0, 0.07);
--ntpopups-border-radius: 10px;
--ntpopups-border-radius-sm: 5px;
--ntpopups-border-radius-lg: 15px;
--ntpopups-border-radius-xl: 20px;
--ntpopups-border-radius-button: 5px;
```

### Shadows

```css
--ntpopups-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
--ntpopups-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--ntpopups-shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.2);
--ntpopups-shadow-button: 0 2px 4px rgba(0, 0, 0, 0.1);
--ntpopups-shadow-button-hover: 0 4px 8px rgba(0, 0, 0, 0.15);
```

### Spacing

```css
--ntpopups-spacing-xs: 5px;
--ntpopups-spacing-sm: 10px;
--ntpopups-spacing-md: 15px;
--ntpopups-spacing-lg: 20px;
--ntpopups-spacing-xl: 30px;
--ntpopups-spacing-2xl: 40px;
```

### Form Inputs

```css
--ntpopups-input-bg: #ffffff;
--ntpopups-input-border: var(--ntpopups-border-color);
--ntpopups-input-border-focus: var(--ntpopups-color-primary);
--ntpopups-input-text-color: var(--ntpopups-color-text);
--ntpopups-input-placeholder-color: var(--ntpopups-color-text-muted);
--ntpopups-input-padding: var(--ntpopups-spacing-sm) var(--ntpopups-spacing-md);
--ntpopups-input-border-radius: var(--ntpopups-border-radius-sm);
```

### Dimensions

```css
--ntpopups-width-min: 300px;
--ntpopups-width-max: 1000px;
--ntpopups-width-default: fit-content;
--ntpopups-height-max: 90dvh;
--ntpopups-button-min-width: 80px;
--ntpopups-button-height: auto;
```

### Transitions

```css
--ntpopups-transition-duration: 0.2s;
--ntpopups-transition-duration-fast: 0.1s;
--ntpopups-transition-duration-slow: 0.3s;
--ntpopups-transition-easing: ease-in-out;
--ntpopups-transition-easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Responsiveness

```css
--ntpopups-mobile-padding: 15px;
--ntpopups-mobile-font-size: 14px;
```