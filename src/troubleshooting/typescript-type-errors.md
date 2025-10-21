---
title: TypeScript Type Errors
---

# TypeScript Type Errors

**Problem:** Types not recognized

**Solution:**

```typescript
// Install types (if available) or use type assertions
const popup = openPopup('custom', settings) as string;
```