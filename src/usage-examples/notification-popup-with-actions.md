---
title: Notification Popup with Actions
---

# Notification Popup with Actions

```jsx
const NotificationPopup = ({ closePopup, popupstyles, data }) => {
  const { type, title, message, actions = [] } = data;
  
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  return (
    <>
      <div className={popupstyles.header}>
        <div className={popupstyles.icon}>{icons[type]}</div>
        {title}
      </div>
      
      <div className={popupstyles.body}>
        <p>{message}</p>
      </div>
      
      <div className={popupstyles.footer}>
        {actions.map((action, index) => (
          <button
            key={index}
            className={popupstyles.baseButton}
            base-button-style={action.style || "0"}
            onClick={() => {
              action.callback?.();
              closePopup(true);
            }}
          >
            {action.label}
          </button>
        ))}
      </div>
    </>
  );
};

openPopup('notification', {
  data: {
    type: 'warning',
    title: 'New Message',
    message: 'You have a new message from John Smith.',
    actions: [
      {
        label: 'Dismiss',
        style: '1',
        callback: () => console.log('Dismissed')
      },
      {
        label: 'View Now',
        callback: () => navigateTo('/messages/123')
      }
    ]
  },
  timeout: 8000
});
```