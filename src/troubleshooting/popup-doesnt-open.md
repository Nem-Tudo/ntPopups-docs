---
title: Popup doesn't open
---

# Popup doesn't open

**Problem:** `openPopup` returns `null`

**Solutions:**
- Check if the type is registered in `customPopups`
- Check for errors in the console
- Confirm that `NtPopupProvider` is wrapping the component