# Popup Doesn't Open

**Symptom:** `openPopup()` returns `null`

**Solutions:**
- ✓ Verify popup type is registered in `customPopups`
- ✓ Check browser console for errors
- ✓ Ensure `NtPopupProvider` wraps your component
- ✓ Confirm you're calling `openPopup` inside a component (not at module level)
