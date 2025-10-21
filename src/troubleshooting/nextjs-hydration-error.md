---
title: Next.js Hydration Error
---

# Next.js Hydration Error

**Problem:** Hydration mismatch warning

**Solution:**

```jsx
// Mark the provider as 'use client'
'use client';
import { NtPopupProvider } from 'ntpopups';
```