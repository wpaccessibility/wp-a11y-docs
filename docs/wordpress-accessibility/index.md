---
title: WP and Accessibility
layout: default
description: What is WordPress
nav_order: 6
has_video: true
---

# Plugin Accessibility

WordPress plugins extend functionality, but they can also introduce accessibility issues if they don’t follow inclusive development practices. This section provides guidance for plugin authors to ensure their work is accessible to all users, including those relying on assistive technologies.

## 1. Keyboard Accessibility
- All plugin features must be operable using only a keyboard.  
- Ensure focus order is logical and visible.  
- Avoid “keyboard traps” where users cannot move focus away.  

## 2. Forms and Inputs
- Provide descriptive labels linked with form elements (`<label for="">`).  
- Use clear instructions and error messages.  
- Group related form controls with `<fieldset>` and `<legend>`.  

## 3. Color and Contrast
- Maintain WCAG 2.2 contrast ratios (4.5:1 for normal text, 3:1 for large text).  
- Do not use color alone to convey information (e.g., success/error states).  

## 4. ARIA and Semantics
- Prefer native HTML elements whenever possible.  
- Use ARIA roles, states, and properties only when necessary and correctly.  
- Follow the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).  

## 5. Media and Dynamic Content
- Provide text alternatives for images (meaningful `alt` text).  
- Add captions or transcripts for audio and video content.  
- For modals, dialogs, or dynamic updates:
  - Set focus to the new content.  
  - Restore focus when the modal closes.  

## 6. Error Handling and Validation
- Clearly indicate input errors.  
- Provide suggestions for correction.  
- Announce errors to screen readers programmatically.  

## 7. Testing and Tools
- Use accessibility testing tools (e.g., axe, WAVE, Lighthouse).  
- Test with multiple screen readers (NVDA, JAWS, VoiceOver).  
- Confirm accessibility on both desktop and mobile.  

## 8. Best Practices for Plugin Authors
- Reuse WordPress core UI components and patterns.  
- Write clear documentation about accessibility features or known limitations.  
- Include accessibility checks in your development workflow.  

---

## Resources
- [WordPress Accessibility Handbook](https://make.wordpress.org/accessibility/handbook/)  
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)  
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)  

