# Form Field: File Upload

### Type: `file`

Input for uploading files.

```javascript
{
  id: 'file_upload',
  type: 'file',
  label: 'Upload File',
  accept: '.jpg,.png,.pdf', // Accepted file types
  multiple: false, // Allow multiple files
  required: false
}
```

| Property | Type | Description |
|---|---|---|
| `accept` | string | Comma-separated list of allowed file types (e.g., `'.jpg,.png'`). |
| `multiple` | boolean | If `true`, allows the user to select multiple files. |
