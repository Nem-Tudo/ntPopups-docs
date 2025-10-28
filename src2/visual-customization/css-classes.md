# 🎨 Visual Customization: CSS Classes

All classes use the `.ntpopups-*` prefix for easy styling and overrides.

### Structure Classes

```css
.ntpopups-main                    /* Root container */
.ntpopups-[theme]-theme           /* Theme-specific (e.g., .ntpopups-dark-theme) */
.ntpopups-overlay                 /* Backdrop container */
.ntpopups-container               /* Popup container */
.ntpopups-header                  /* Header section */
.ntpopups-icon                    /* Header icon */
.ntpopups-body                    /* Body/content section */
.ntpopups-footer                  /* Footer section */
.ntpopups-basebutton              /* Base button style */
```

### Component-Specific Classes

**Buttons:**
```css
.ntpopups-basebutton              /* Base button */
.ntpopups-confirm-button          /* Confirm popup button */
```

**Form:**
```css
.ntpopups-form-body               /* Form container */
.ntpopups-form-row                /* Field row */
.ntpopups-form-component-container /* Individual field wrapper */
.ntpopups-form-message            /* Form message */
```

**Image Cropper:**
```css
.ntpopups-cropimage-header        /* Crop header */
.ntpopups-cropimage-main          /* Main container */
.ntpopups-cropimage-container     /* Canvas container */
.ntpopups-cropimage-canvas        /* Crop canvas */
.ntpopups-cropimage-zoom-slider   /* Zoom slider */
.ntpopups-cropimage-resetbutton   /* Reset button */
```

### Usage Example

```css
/* Customize all buttons */
.ntpopups-basebutton {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

/* Custom header gradient */
.ntpopups-header {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* Increase form spacing */
.ntpopups-form-body {
  gap: 25px;
}

/* Style specific popup type */
.ntpopups-overlay[data-popup-type="confirm"] .ntpopups-body {
  font-size: 18px;
  text-align: center;
}
```
