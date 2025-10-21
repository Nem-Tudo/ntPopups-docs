---
title: Register in Provider
---

# Register in Provider
Register the usage name and the component in the Provider.
```jsx
import { NtPopupProvider } from 'ntpopups';
import MyCustomPopup from './components/MyCustomPopup';

function App() {
  return (
    <NtPopupProvider
      language="en"
      theme="white"
      customPopups={{
        'my_custom': MyCustomPopup,
        'another_custom': AnotherPopup //Another popup example
      }}
    >
      {/* Your app */}
    </NtPopupProvider>
  );
}
```