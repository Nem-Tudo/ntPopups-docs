# 🎯 Basic Usage

Import the hook and start creating popups:

```jsx
import useNtPopups from 'ntpopups';

function MyComponent() {
  const { openPopup } = useNtPopups();

  const handleClick = () => {
    openPopup('generic', {
      data: {
        title: 'Hello!',
        message: 'This is a simple popup.',
      }
    });
  };

  return <button onClick={handleClick}>Open Popup</button>;
}
```
