# FAQ: Can I use ntPopups with TypeScript?

Yes! ntPopups is built with TypeScript support. All types are exported and you can use them in your project:

```typescript
import useNtPopups, { PopupSettings } from 'ntpopups'

const settings: PopupSettings = {
  data: {
    title: 'Hello',
    message: 'World'
  }
}
```
