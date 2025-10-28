# Register and Use Custom Popups

### 1. Register the Component

Pass your components to the `customPopups` prop in `NtPopupProvider`.

```jsx
import { NtPopupProvider } from 'ntpopups';
import MyCustomPopup from './components/MyCustomPopup';
import AnotherCustomPopup from './components/AnotherPopup';

function App() {
  return (
    <NtPopupProvider
      language="en"
      theme="white"
      customPopups={{
        'my_custom': MyCustomPopup,
        'another_custom': AnotherCustomPopup
      }}
    >
      {/* Your app */}
    </NtPopupProvider>
  );
}
```

### 2. Use Your Custom Popup

Call `openPopup` with the key you used to register the component.

```jsx
const { openPopup } = useNtPopups();

openPopup('my_custom', {
  data: {
    message: 'Hello from custom popup!',
    customProp1: 'Value 1',
    customProp2: 'Value 2',
    onConfirm: (result) => {
      console.log('Confirmed:', result);
    }
  },
  requireAction: true,
  maxWidth: '600px'
});
```
