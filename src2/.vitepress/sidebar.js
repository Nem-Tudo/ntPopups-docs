export default {
  '/': [
    { text: 'Overview', link: '/' },
    { text: 'Installation', link: '/installation' },
    {
      text: 'Initial Setup',
      link: '/setup/',
      collapsed: false,
      items: [
        { text: 'React', link: '/setup/react-setup' },
        { text: 'Next.js App Router', link: '/setup/nextjs-app-router' },
        { text: 'Next.js Pages Router', link: '/setup/nextjs-pages-router' }
      ]
    },
    { text: 'Basic Usage', link: '/basic-usage' },
    {
      text: 'Native Popups',
      link: '/native-popups/',
      collapsed: false,
      items: [
        { text: 'Generic', link: '/native-popups/generic-popup' },
        { text: 'Confirm', link: '/native-popups/confirm-popup' },
        { text: 'Crop Image', link: '/native-popups/crop-image-popup' },
        {
          text: 'Form',
          link: '/native-popups/form-popup',
          collapsed: true,
          items: [
            { text: 'Form Fields Overview', link: '/native-popups/form/fields/' },
            { text: 'Text Input', link: '/native-popups/form/fields/text' },
            { text: 'Textarea', link: '/native-popups/form/fields/textarea' },
            { text: 'Email Input', link: '/native-popups/form/fields/email' },
            { text: 'Number Input', link: '/native-popups/form/fields/number' },
            { text: 'Password Input', link: '/native-popups/form/fields/password' },
            { text: 'Checkbox', link: '/native-popups/form/fields/checkbox' },
            { text: 'Radio Button', link: '/native-popups/form/fields/radio' },
            { text: 'Select Dropdown', link: '/native-popups/form/fields/select' },
            { text: 'Date Input', link: '/native-popups/form/fields/date' },
            { text: 'Time Input', link: '/native-popups/form/fields/time' },
            { text: 'File Upload', link: '/native-popups/form/fields/file' },
            { text: 'Custom Form Components', link: '/native-popups/form-custom-components' }
          ]
        },
        { text: 'HTML', link: '/native-popups/html-popup' }
      ]
    },
    {
      text: 'Global Configuration',
      collapsed: false,
      items: [
        { text: 'Popup Settings', link: '/configuration/popup-settings' },
        { text: 'Provider Props', link: '/configuration/provider-props' },
      ]
    },
    {
      text: 'Creating Custom Popups',
      link: '/custom-popups/',
      collapsed: false,
      items: [
        { text: 'Basic Structure & Props', link: '/custom-popups/basic-structure' },
        { text: 'Styling System', link: '/custom-popups/styling-system' },
        { text: 'Register & Use', link: '/custom-popups/register-and-use' },
        { text: 'Complete Example', link: '/custom-popups/complete-example' },
      ]
    },
    {
      text: 'Hook API (useNtPopups)',
      link: '/api-hook/',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api-hook/' },
        { text: 'Methods', link: '/api-hook/methods' }
      ]
    },
    {
      text: 'Visual Customization (CSS)',
      link: '/visual-customization/css-variables',
      collapsed: false,
      items: [
        { text: 'CSS Variables (Theming)', link: '/visual-customization/css-variables' },
        { text: 'CSS Classes & Structure', link: '/visual-customization/css-classes' }
      ]
    },
    {
      text: 'Responsive & Accessible',
      link: '/a11y-responsive/',
      collapsed: false,
      items: [
        { text: 'Responsive Design', link: '/a11y-responsive/responsive-design' },
        { text: 'Accessibility', link: '/a11y-responsive/accessibility' }
      ]
    },
    {
      text: 'Usage Examples & Patterns',
      link: '/usage-examples/',
      collapsed: true,
      items: [
        { text: 'Delete Confirmation', link: '/usage-examples/delete-confirmation' },
        { text: 'Avatar Upload & Crop', link: '/usage-examples/avatar-upload-crop' },
        { text: 'Feedback Form', link: '/usage-examples/feedback-form' },
        { text: 'Multi-Step Wizard', link: '/usage-examples/multi-step-wizard' },
        { text: 'Loading Indicator', link: '/usage-examples/loading-indicator' },
        { text: 'Onboarding Tour', link: '/usage-examples/onboarding-tour' },
        { text: 'Notification with Actions', link: '/usage-examples/notification-with-actions' },
        { text: 'Advanced Form Validation', link: '/usage-examples/advanced-form-validation' },
        { text: 'Global Error Handler', link: '/usage-examples/global-error-handler' },
        { text: 'Confirmation Hook', link: '/usage-examples/confirmation-hook' },
        { text: 'Toast Notifications', link: '/usage-examples/toast-notifications' }
      ]
    },
    {
      text: 'Best Practices',
      link: '/best-practices/',
      collapsed: false,
      items: [
        { text: 'Recommendations', link: '/best-practices/recommendations' },
        { text: 'What to Avoid', link: '/best-practices/what-to-avoid' }
      ]
    },
    {
      text: 'Troubleshooting & FAQ',
      link: '/troubleshooting/',
      collapsed: false,
      items: [
        { text: "Popup Doesn't Open", link: '/troubleshooting/popup-wont-open' },
        { text: 'Styles Not Applied', link: '/troubleshooting/styles-not-applied' },
        { text: "Form Doesn't Validate", link: '/troubleshooting/form-wont-validate' },
        { text: "Popup Won't Close", link: '/troubleshooting/popup-wont-close' },
        { text: 'Next.js Hydration Error', link: '/troubleshooting/nextjs-hydration-error' },
        { text: 'TypeScript Errors', link: '/troubleshooting/typescript-errors' },
        { text: 'FAQ: TypeScript', link: '/troubleshooting/faq-typescript' },
        { text: 'FAQ: Dynamic Language', link: '/troubleshooting/faq-dynamic-language' },
        { text: 'FAQ: Custom Fonts', link: '/troubleshooting/faq-custom-fonts' },
        { text: 'FAQ: Nesting Popups', link: '/troubleshooting/faq-nesting-popups' },
        { text: 'FAQ: Prevent Closing', link: '/troubleshooting/faq-prevent-closing' }
      ]
    },
    { text: 'Additional Resources', link: '/additional-resources' },
    { text: 'Contributing', link: '/contributing' },
    { text: 'Acknowledgments', link: '/acknowledgments' },
    { text: 'License', link: '/license' }
  ]
}