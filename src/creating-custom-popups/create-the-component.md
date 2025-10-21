---
title: Create the Component
---

# Create the Component
Create a component in a preferred folder (for example: `/components/popups/`) that exports a JSX using the [Basic Structure](/creating-custom-popups/basic-structure).

```jsx
// components/popups/MyCustomPopup.jsx
import styles from './mystyles.module.css';

export default function MyCustomPopup({
  closePopup,
  popupstyles,
  requireAction,
  data: {
    message = 'Default message',
    myProp1,
    myProp2 = 'This is an amazing lib!',
    myProp3,
    myCallback = () => {}
  } = {}
}) {
  
  const handleReady = () => {
    myCallback(myProp1 + myProp2);
    closePopup(true);
  };

  return (
    <>
      <div className={popupstyles.header}> 
        <div className={popupstyles.icon}>💡</div>
        Custom Popup
      </div>

      <div className={popupstyles.body}>
        <p>{message}</p>
        <h3>Property 1: {myProp1}</h3>
        
        <button 
          className={styles.myCustomButton}
          onClick={() => alert(myProp3)}
        >
          {myProp2}
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
          onClick={handleReady}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
```

**💡 Tip:** When `requireAction = true`, the `closePopup()` function will only take effect if there's an action (`closePopup(true)`).