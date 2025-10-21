---
title: Popup won't close
---

# Popup won't close

**Problem:** ESC or click outside doesn't work

**Solutions:**
- Check `closeOnEscape` and `closeOnClickOutside`
- Check if `requireAction: true`
- Use `closePopup(id, true)` inside the component