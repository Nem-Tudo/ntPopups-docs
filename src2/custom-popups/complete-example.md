# Complete Component Example

This example shows a custom popup component that uses its own CSS module for layout, while leveraging `popupstyles` for the theme-aware elements like buttons.

```jsx
// components/popups/MyCustomPopup.jsx
import styles from './mystyles.module.css'; // Your own CSS module

export default function MyCustomPopup({
  closePopup,
  popupstyles,
  requireAction,
  data: {
    message = 'Default message',
    customProp1,
    customProp2 = 'Amazing library!',
    onConfirm = () => {}
  } = {}
}) {
  const handleConfirm = () => {
    onConfirm(customProp1 + customProp2);
    closePopup(true); // true = user action
  };

  return (
    <>
      <div className={popupstyles.header}>
        <div className={popupstyles.icon}>💡</div>
        <span>Custom Popup</span>
      </div>

      <div className={popupstyles.body}>
        <p>{message}</p>
        <h3>Property 1: {customProp1}</h3>
        
        {/* A button using your own custom CSS */}
        <button 
          className={styles.myCustomButton}
          onClick={() => alert(customProp2)}
        >
          {customProp2}
        </button>
      </div>

      <div className={popupstyles.footer}>
        {!requireAction && (
          <button 
            className={popupstyles.baseButton}
            base-button-style="1"
            onClick={() => closePopup()}
          >
            Cancel
          </button>
        )}
        
        <button 
          className={popupstyles.baseButton}
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
```
