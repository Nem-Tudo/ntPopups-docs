# 📱 Responsive Design

- **Mobile-First Approach** - Optimized for small screens first
- **Touch-Friendly** - Full gesture support (drag, pinch, zoom)
- **Adaptive Components** - Elements resize intelligently

### Mobile Optimizations:
- Reduced padding for better space usage
- Adjusted font sizes for readability
- Minimum 44px touch targets
- Optimized scrolling behavior

### How to make a popup fullscreen on mobile?

You can override the container styles with CSS:

```css
@media (max-width: 768px) {
  .ntpopups-container {
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
  }
}
```
