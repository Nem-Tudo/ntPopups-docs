export default {
  '/': [
    { text: 'ntPopups', link: '/' },
    { text: 'Features', link: '/features/' },
    { text: 'Installation', link: '/installation/' },
    {
      text: 'Initial Setup',
      collapsed: false,
      items: [
        { text: 'React', link: '/initial-setup/react' },
        { text: 'Next.js App Router', link: '/initial-setup/nextjs-app-router' },
        { text: 'Next.js Pages Router', link: '/initial-setup/nextjs-pages-router' },
      ]
    },
    {
      text: 'Basic Usage',
      collapsed: false,
      items: [
        { text: 'Main Hook', link: '/basic-usage/main-hook' },
      ]
    },
    {
      text: 'Native Popups',
      collapsed: false,
      items: [
        { text: 'Generic Popup', link: '/native-popups/generic-popup' },
        { text: 'Confirm Popup', link: '/native-popups/confirm-popup' },
        { text: 'Crop Image Popup', link: '/native-popups/crop-image-popup' },
        { text: 'Form Popup', link: '/native-popups/form-popup' },
      ]
    },
    {
      text: 'Creating Custom Popups',
      collapsed: false,
      items: [
        { text: 'Basic Structure', link: '/creating-custom-popups/basic-structure' },
        { text: 'Create the Component', link: '/creating-custom-popups/create-the-component' },
        { text: 'Register in Provider', link: '/creating-custom-popups/register-in-provider' },
        { text: 'Use the Custom Popup', link: '/creating-custom-popups/use-the-custom-popup' },
      ]
    },
    {
      text: 'Global Settings',
      collapsed: false,
      items: [
        { text: 'Provider Props', link: '/global-settings/provider-props' },
        { text: 'Base Settings', link: '/global-settings/base-settings' },
      ]
    },
    {
      text: 'Hook API',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/hook-api/' },
        { text: 'openPopup', link: '/hook-api/openpopup' },
        { text: 'closePopup', link: '/hook-api/closepopup' },
        { text: 'closeAllPopups', link: '/hook-api/closeallpopups' },
        { text: 'isPopupOpen', link: '/hook-api/ispopupopen' },
        { text: 'getPopup', link: '/hook-api/getpopup' },
      ]
    },
    {
      text: 'CSS Visual Customization',
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: '/visual-customization/',
        },
        {
          text: 'Variables', collapsed: true, items: [
            { text: 'Available CSS Variables', link: '/visual-customization/available-css-variables' },
            { text: 'How to Customize', link: '/visual-customization/how-to-customize' },
          ]
        },
        {
          text: 'CSS Classes', collapsed: true, items: [
            { text: 'Overview', link: '/global-css-classes/' },
            { text: 'Main Structure', link: '/global-css-classes/main-structure' },
            { text: 'Buttons', link: '/global-css-classes/buttons' },
            { text: 'Form', link: '/global-css-classes/form' },
            { text: 'Crop Image', link: '/global-css-classes/crop-image' },
            { text: 'Usage Example', link: '/global-css-classes/usage-example' },
          ]
        },
      ]
    },
    {
      text: 'Responsive and Accessible Design',
      collapsed: false,
      items: [
        { text: 'Responsiveness', link: '/responsive-and-accessible-design/responsiveness' },
        { text: 'Accessibility', link: '/responsive-and-accessible-design/accessibility' },
      ]
    },
    {
      text: 'Usage Examples',
      collapsed: false,
      items: [
        { text: 'Delete Confirmation', link: '/usage-examples/delete-confirmation' },
        { text: 'Avatar Upload and Edit', link: '/usage-examples/avatar-upload-and-edit' },
        { text: 'Feedback Form', link: '/usage-examples/feedback-form' },
        { text: 'Multi-Step Wizard', link: '/usage-examples/multi-step-wizard' },
        { text: 'Loading Modal', link: '/usage-examples/loading-modal' },
        { text: 'Guided Tour (Onboarding)', link: '/usage-examples/guided-tour-onboarding' },
        { text: 'Notification Popup with Actions', link: '/usage-examples/notification-popup-with-actions' },
        { text: 'Complex Validation with Visual Feedback', link: '/usage-examples/complex-validation-with-visual-feedback' },
      ]
    },
    {
      text: 'Tips and Best Practices',
      collapsed: false,
      items: [
        { text: 'Recommendations', link: '/tips-and-best-practices/recommendations' },
        { text: 'What to Avoid', link: '/tips-and-best-practices/what-to-avoid' },
      ]
    },
    {
      text: 'Troubleshooting',
      collapsed: false,
      items: [
        { text: 'Popup doesn\'t open', link: '/troubleshooting/popup-doesnt-open' },
        { text: 'Styles not applied', link: '/troubleshooting/styles-not-applied' },
        { text: 'Form doesn\'t validate', link: '/troubleshooting/form-doesnt-validate' },
        { text: 'Popup won\'t close', link: '/troubleshooting/popup-wont-close' },
        { text: 'Next.js Hydration Error', link: '/troubleshooting/nextjs-hydration-error' },
        { text: 'TypeScript Type Errors', link: '/troubleshooting/typescript-type-errors' },
      ]
    },
    { text: 'License', link: '/license/' },
    { text: 'Contributing', link: '/contributing/' },
    { text: 'Additional Resources', link: '/additional-resources/' },
    { text: 'Acknowledgments', link: '/acknowledgments/' },
  ]
}