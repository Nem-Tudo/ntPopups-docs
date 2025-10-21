---
title: Next.js App Router
---

# Next.js App Router

Create a separate Providers component as a Client Component:

```jsx
// components/Providers.jsx
'use client';

import { NtPopupProvider } from 'ntpopups';
import 'ntpopups/dist/styles.css';

export default function Providers({ children }) {
  return (
    <NtPopupProvider language="en" theme="white">
      {children}
    </NtPopupProvider>
  );
}
```

And use it in the main layout:

```jsx
// app/layout.jsx
import Providers from '@/components/Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```