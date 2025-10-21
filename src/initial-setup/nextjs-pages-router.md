---
title: Next.js Pages Router
---

# Next.js Pages Router

```jsx
// pages/_app.jsx
import { NtPopupProvider } from 'ntpopups';
import 'ntpopups/dist/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <NtPopupProvider language="en" theme="white">
      <Component {...pageProps} />
    </NtPopupProvider>
  );
}

export default MyApp;
```