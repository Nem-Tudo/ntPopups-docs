# Next.js Hydration Error

**Symptom:** "Hydration mismatch" warning in console

**Solution:**
```jsx
// ✅ Mark provider component as Client Component
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
