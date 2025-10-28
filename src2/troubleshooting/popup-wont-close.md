# Popup Won't Close

**Symptom:** ESC key or backdrop click doesn't work

**Solutions:**
- ✓ Check `closeOnEscape` setting (default: `true`)
- ✓ Check `closeOnClickOutside` setting (default: `true`)
- ✓ If `requireAction: true`, you **must** use `closePopup(true)` (or `closePopup(id, true)`) to close it.
- ✓ Verify no JavaScript errors preventing event handlers
