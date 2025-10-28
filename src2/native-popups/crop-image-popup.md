# Crop Image - Image Editor

Built-in image cropping with zoom, rotation, and format options.

```jsx
openPopup('crop_image', {
  requireAction: false,
  data: {
    image: fileOrUrl, // File object or URL/base64 string
    format: 'circle', // 'circle' or 'square'
    aspectRatio: '1:1', // Format: "width:height"
    onCrop: (result) => {
      console.log('Blob:', result.blob);
      console.log('Base64:', result.base64);
      console.log('File:', result.file);
    }
  }
});
```

**Props (`data`):**
| Property | Type | Default | Description |
|---|---|---|---|
| `image` | File \| string | - | Image file or URL/base64 |
| `format` | `'circle'` \| `'square'` | `'circle'` | Crop format |
| `aspectRatio` | string | `"1:1"` | Aspect ratio (e.g., "16:9", "4:3") |
| `minZoom` | number | 1 | Minimum zoom level |
| `maxZoom` | number | 4 | Maximum zoom level |
| `onCrop` | Function | - | Callback with `{ blob, base64, file }` |

💡 **Tip:** `requireAction: true` automatically removes the cancel button.  
