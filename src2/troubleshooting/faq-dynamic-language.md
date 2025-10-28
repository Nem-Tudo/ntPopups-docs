# FAQ: How do I change the language dynamically?

The `language` prop on `NtPopupProvider` can be changed dynamically:

```jsx
const [language, setLanguage] = useState('en')

<NtPopupProvider language={language} theme="white">
  <button onClick={() => setLanguage('ptbr')}>
    Switch to Portuguese
  </button>
</NtPopupProvider>
```
