---
title: React
---

# React

Wrap your application with `NtPopupProvider`:

```jsx
// App.jsx
import { NtPopupProvider } from 'ntpopups';
import 'ntpopups/dist/styles.css'; // Import styles

function App() {
  return (
    <NtPopupProvider language="en" theme="white">
      {/* Your app here */}
    </NtPopupProvider>
  );
}

export default App;
```