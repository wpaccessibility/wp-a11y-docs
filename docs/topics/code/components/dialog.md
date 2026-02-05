---
title: The dialog modal
layout: default
parent: Components
description: How to set up an accessible dialog modal.
nav_order: 5
---

# The dialog modal

A dialog is a window that separates content from the main content of a page. It can ask questions or require user input. When the dialog is active and opened, only the content inside the dialog should be available for interaction. Visually it’s usually overlaid on top of main content.

![Form inside dialog modal]({{site.baseurl}}/assets/images/modal-dialog.png)

There are two main practices for achieving an accessible modal dialog:

- The use of appropriate WAI-ARIA roles, states, and properties markup for dialog helps assistive technology identify the content as grouped and separated from the rest of the page.
- Providing keyboard interaction and restricting focus within the modal helps keyboard users to navigate the content inside the dialog, and only navigate back to the main content when they’re ready.

Detailed information can be found in the [WAI-ARIA authoring practices for modals](https://www.w3.org/TR/wai-aria-practices/#dialog_modal).

The HTML 5.2 specification will include a native `<dialog>` element which is being implemented by browser vendors. [See caniuse.com for up-to-date information on support](https://caniuse.com/#feat=dialog).

## Resources

- [WAI-ARIA authoring practices for dialog modal](https://www.w3.org/TR/wai-aria-practices/#dialog_modal).
- [Making modals accessible](https://yoast.com/dev-blog/the-a11y-monthly-making-modals-accessible/) by Andrea Fercia
- [Understanding screen reader interaction modes](https://tink.uk/understanding-screen-reader-interaction-modes/) by Léonie Watson
- [Using the dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role) (MDN web docs).
- [Advanced ARIA Tips for Accessible modal dialogs](https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/).
- [Mozilla Developer Network page for the HTML native dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

## Accessible modal dialog scripts

- [A11y dialog script](https://github.com/edenspiekermann/a11y-dialog) for creating accessible dialog windows.
- [Launchy](https://github.com/svinkle/launchy) is another script for accessible modal dialog.
- [Accessible and flexible React modal dialog](https://github.com/davidtheclark/react-aria-modal).
- [W3C Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html)

