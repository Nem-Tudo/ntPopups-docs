# React Setup

Wrap your application with `NtPopupProvider`:

```jsx
// App.jsx
import { NtPopupProvider } from 'ntpopups';
import 'ntpopups/dist/styles.css';

function App() {
  return (
    <NtPopupProvider language="en" theme="white">
      {/* Your app content */}
    </NtPopupProvider>
  );
}

export default App;
```
