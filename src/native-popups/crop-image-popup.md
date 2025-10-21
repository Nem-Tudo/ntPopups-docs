---
title: Crop Image Popup
---

# Crop Image Popup

Image editor with cropping functionality.

```jsx
openPopup('crop_image', {
  requireAction: false,
  data: {
    image: fileOrUrl, // File or string (base64/URL)
    format: 'circle', // 'circle' or 'square'
    onCrop: (result) => {
      console.log('Blob:', result.blob);
      console.log('Base64:', result.base64);
      console.log('File:', result.file);
    }
  }
});
```

**Available props:**
- `image` (File | string): Image file or URL/base64
- `format` ('circle' | 'square'): Crop format (default: 'circle')
- `onCrop` (Function): Callback with result `{ blob, base64, file }`

**💡 Tip:** When `requireAction = true`, the "Cancel" button is removed.