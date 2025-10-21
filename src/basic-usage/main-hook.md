---
title: Main Hook
---

# Main Hook
This is the simplest use case of a popup. When clicking a button, a generic popup is opened.

```jsx
"use client"; //Don’t forget for Next App Router!
import useNtPopups from 'ntpopups';

function MyComponent() {
  const { openPopup, closePopup } = useNtPopups();

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