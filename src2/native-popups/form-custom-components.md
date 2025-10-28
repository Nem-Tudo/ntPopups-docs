# Custom Form Components
Extend forms with your own specialized input types while maintaining full validation and state management.

### Why Use Custom Components?

Perfect for:
- **Specialized inputs** (color picker, rich text editor, autocomplete)
- **Complex UI patterns** (multi-step inputs, dynamic lists)
- **External library integration** (date pickers, file uploaders)
- **API inputs** (product selectors, user pickers)

### Creating a Custom Component

**1. Define the Component Type**

```javascript
customComponents: {
  "color": {
    // Empty value for validation
    emptyValue: null, //Default: ""
    
    // Optional custom validator
    validator: (value, componentData) => {
      if (componentData.dontBeThat && value === componentData.dontBeThat) {
        return "Dont be that! >:(";
      }
      return null; // Valid
    },
    
    // Your React component
    render: (props) => <ColorPicker {...props} />
  }
}
```

**2. Component Props**

Your component receives:

```typescript
{
  id: string,                    // Unique field ID
  value: any,                    // Current value
  disabled: boolean,             // Disabled state
  required: boolean,             // Required field
  placeholder: string,           // Placeholder text
  changeValue: (value) => void,  // Update form value
  valid: boolean,                // Validation state
  autoFocus: boolean,            // Auto-focus flag
  data: object                   // All field config (including custom props)
}
```

**3. Implementation Example**

```javascript
function ColorPickerComponent(props) {
  const [preview, setPreview] = useState(props.value || '#000000');
  
  const handleChange = (e) => {
    const newColor = e.target.value;
    props.changeValue(newColor); // 💡 Best practice: Never change the current value state (in this case "preview") directly!
    // setPeview(newColor) // ❌ Never do this!
  };

  // ✅ Sync with form value
  useEffect(() => {
    setPreview(props.value || '#000000'); // 💡 Only change synchronously with props.value!
  }, [props.value]);

  return (
    <div style={{ display: 'flex', gap: '10px', opacity: props.disabled ? 0.5 : 1 }}>
      <input
        type="color"
        value={preview}
        onChange={handleChange}
        disabled={props.disabled}
        style={{ border: props.valid ? '2px solid #ccc' : '2px solid red' }}
      />
      <input
        type="text"
        value={preview}
        onChange={handleChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
        style={{ border: props.valid ? '1px solid #ccc' : '1px solid red' }}
      />
    </div>
  );
}

// Usage in form
openPopup('form', {
  data: {
    title: 'Theme Settings',
    customComponents: {
      'color': {
        emptyValue: null,
        validator: (value) => {
          if (value && !/^#[0-9A-Fa-f]{6}$/.test(value)) {
            return 'Invalid hex color';
          }
          return null;
        },
        render: (props) => <ColorPickerComponent {...props} />
      }
    },
    components: [
      {
        id: 'primary_color',
        type: 'color',
        label: 'Primary Color',
        placeholder: '#3B82F6',
        required: true,
        defaultValue: '#3B82F6'
      }
    ],
    onSubmit: (values) => {
      console.log('Selected color:', values.primary_color);
    }
  }
});
```

### Best Practices

**✅ DO:**
- Always use `props.changeValue()` to update values
- Sync local UI state with `props.value` using `useEffect`
- Use `props.valid` for visual feedback
- Access custom props from `props.data`

**❌ DON'T:**
- Don't manage the value in local state only
- Don't forget to handle `disabled` and `required` props
- Don't mutate `props.value` directly

### Validation

**Built-in Required Check:** If `required: true`, the form checks if value equals `emptyValue`.

**Custom Validator:** Add additional validation rules:

```javascript
validator: (value, componentData) => {
  const { maxItems } = componentData;
  
  if (value && value.length > maxItems) {
    return `Maximum ${maxItems} items allowed`;
  }
  
  return null; // Valid
}
```

**Note:** Custom validators run after the required check.