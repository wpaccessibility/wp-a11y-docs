---
title: The dialog modal
layout: default
parent: Components
description: Learn what is important for an accessible dialog modal.
nav_order: 5
contributors: 
  - Rian Rietveld
  - Joe Dolson
---

# The dialog modal

A dialog is a window that separates content from the main content of a page. It can ask questions or require user input. 

When the dialog is active and opened, only the content inside the dialog should be available for interaction. Visually, it’s usually overlaid on top of the main content.

{: .callout .info }
**Please note**: This page will not give you a full guide on how to create an accessible dialog modal, there is a lot to tell. But it gives you a brief overview of the requirements and points you to the relevant documentation and specifications.

![Form inside dialog modal]({{site.baseurl}}/assets/images/modal-dialog.png)

## Behavior of an accessible dialog modal

Provide keyboard interaction and restricting focus within the modal helps keyboard users to navigate the content inside the dialog modal and only navigate back to the main content when they’re ready.

- When a dialog opens, the keyboard focus moves to an element inside the dialog.
- When the user tabs, the keyboard focus moves to the next tabbable element inside the dialog. If the keyboard focus is on the last tabbable element inside the dialog, it moves to the first tabbable element inside the dialog.
- When the tabs back (Shift+Tab), the keyboard focus moves to the previous tabbable element inside the dialog. If the keyboard focus is on the first tabbable element inside the dialog, it moves to the last tabbable element inside the dialog.
- Pressing Escape (Esc) closes the dialog.

Use of appropriate WAI-ARIA roles, states, and properties markup for dialog helps assistive technology, like screen readers, identify the content as grouped and separated from the rest of the page. 

A screen reader user should know they are opening a modal and what the purpose of the modal is. Also, the close button icon should have a proper [accessible name]({{site.baseurl}}/docs/topics/code/images/alt-text/).

At the moment there are two ways to set up a dialog modal: using the [ARIA role dialog](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role), or using the [HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), both with supporting ARIA. 

{: .callout .alert }
**Note:** the HTML5 element `<dialog>` is not supported by Internet Explorer. 

Detailed information about using ARIA for dialog modals can be found in the [WAI-ARIAI-ARIA authoring practices for modals](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) and in the [dialog role WAI-ARIA specifications](https://w3c.github.io/aria/#dialog) by the W3C.

## Dialog modal in WordPress

The page [Modal in the block editor reference guide](https://developer.wordpress.org/block-editor/reference-guides/components/modal/) provides you with good practice information for modals and how to implement it with the React component `Modal`.

There are many blocks and plugins for dialog modals for WordPress. Please check the accessibility before you use them on your website. 

## Resources

{: .resource-h3}
### WCAG Success Criteria for dialog modals

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (Level A).
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/quickref/#keyboard) (Level A).
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/quickref/#focus-visible) (Level AA). 
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/quickref/#name-role-value) (Level A).
- [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/quickref/#status-messages) (Level AA).

{: .resource-h3}
### Related pages in this documentation

- [Handling focus]({{site.baseurl}}/docs/topics/code/focus-handling/) in Standards and best practice, Frontend code.
- [Alternative text for images, SVGs and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/) in Standards and best practice, Frontend code, Images.
- [Web forms]({{site.baseurl}}/docs/topics/forms/) in Standards and best practice.

{: .resource-h3}
### Other resources

These scripts claim to have accessibility in mind, please check if they are still accessible if you implement them in your own work.

- [A11y dialog script](https://github.com/KittyGiraudel/a11y-dialog) by Kitty Giraudel.
- [Launchy](https://github.com/svinkle/launchy) by Scott Vinkle.
- [Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) by the W3C.
