# Avatar Upload & Crop

```jsx
const handleAvatarUpload = (file) => {
  openPopup('crop_image', {
    data: {
      image: file,
      format: 'circle',
      onCrop: async (result) => {
        const formData = new FormData();
        formData.append('avatar', result.file);
        
        await api.post('/users/avatar', formData);
        setAvatarUrl(result.base64);
        
        openPopup('generic', {
          data: {
            title: 'Success!',
            message: 'Avatar updated.',
            icon: '✅'
          },
          timeout: 3000
        });
      }
    },
    requireAction: true
  });
};
```
