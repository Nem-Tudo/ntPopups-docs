---
title: Basic Structure
---

# Basic Structure
This is the basic structure of a popup. Use it to ensure the styles work correctly.

```jsx
export default function MyCustomPopup({
  closePopup,
  popupstyles,
  requireAction,
  data = {}
}) {
  
  return (
    <>
      <div className={popupstyles.header}> 
        <div className={popupstyles.icon}>ⓘ</div>
        Title
      </div>

      <div className={popupstyles.body}>
        <p>Body</p>
      </div>

      <div className={popupstyles.footer}>        
        <button
          className={popupstyles.baseButton}
          base-button-style="0"
          base-button-no-flex={"false"}
          onClick={() => closePopup(true)}
        >Ok</button>
      </div>
    </>
  );
}
```

If you are using `baseButton`, you have access to the following properties:

**Boolean as a string** / whether the button expands or not

* `base-button-no-flex`

**Number as a string** / the button style

* `base-button-style`

Values:

* `"0"` = default
* `"1"` = secondary
* `"2"` = text
* `"3"` = success
* `"4"` = danger