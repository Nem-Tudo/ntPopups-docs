---
title: How to Customize
---

# How to Customize

Create a global CSS file and override the variables:

```css
/* styles/custom-ntpopups.css */

.ntpopups-main{
  --ntpopups-color-primary: #ff6b6b;
  --ntpopups-color-primary-hover: #ff5252;
  --ntpopups-font-family: 'Poppins', sans-serif;
  --ntpopups-font-size-base: 16px;
  --ntpopups-border-radius: 20px;
  --ntpopups-border-radius-button: 10px;
  --ntpopups-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --ntpopups-padding-body: 30px;
  --ntpopups-bg-overlay: rgba(0, 0, 0, 0.7);
}

.ntpopups-dark-theme {
  --ntpopups-color-primary: #bb86fc;
  --ntpopups-bg-overlay: rgba(0, 0, 0, 0.9);
}
```