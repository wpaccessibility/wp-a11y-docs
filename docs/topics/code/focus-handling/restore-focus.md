---
title: Restore focus
layout: default
parent:  Focus handling
nav_order: 4
description: Restore the keyboard focus after completing a task or action.
---

# Restore the keyboard focus after completing a task or action

Make sure the keyboard focus returns to a predictable spot after completing a task or action. Like closing a modal or menu. The best place to return to is the button that triggered the action in the first place. 

One common mistake with keyboard focus handling is that the focus is lost after completing a task. Make sure the keyboard user can predict where the keyboard focus ends up.

When that control is no longer available, put yourself in the place of a user and find the best alternative spot. Avoid that the user has to tab all the way from the top of the page to where they were before.

{: .info .callout }
For [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) the correct focus management is handled automatically when you invoke the JavaScript method [`showModal()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal).

## How to test for a predictable keyboard focus

1. Open the component.
2. Close the component with the available close option.
3. Check if the focus returns to the button that triggered the action
4. Also check if the focus returns properly when the component is closed with the Escape key.

## Examples

The responsive menu with the WordPress [Navigation Block](https://wordpress.org/documentation/article/navigation-block/) handles the keyboard focus correctly. But always check the keyboard interaction yourself when installing this block on a site.

## Resources

### WCAG Success Criterion for predictable keyboard focus

- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).

### Other resources

- [Managing Focus and Visible Focus Indicators](https://vispero.com/resources/managing-focus-and-visible-focus-indicators-practical-accessibility-guidance-for-the-web/), a practical Accessibility Guidance for the Web by Kirby Tucker.
- [How to Restore Focus After Modal Dialogs](https://www.uxpin.com/studio/blog/restore-focus-after-modal-dialogs/) by Andrew Martin.
- [How to Set Focus on a JavaScript Modal Window](https://www.javaspring.net/blog/how-to-set-the-focus-on-a-javascript-modal-window/), Accessibility Guide for First Element Focus, on JavaSpring.
- [React Refocus](https://react-refocus.mallikcheripally.com/) by Mallik Cheripally.
