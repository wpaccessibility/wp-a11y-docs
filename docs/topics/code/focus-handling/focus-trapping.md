---
title: Focus trapping
layout: default
parent:  Focus handling
nav_order: 4
description: Sustain focus within a responsive menu or dialog component.
---

# Sustain keyboard focus within a responsive menu or dialog component

When moving the keyboard focus inside a component like a responsive menu or modal, make sure that the focus doesn't drop out of the modal when the user tabs further after the last focusable element. This is called **focus trapping**, and unlike a [keyboard trap]({{site.baseurl}}/docs/code/focus-handling/keyboard-trap/), it gives the user a way out.

Focus trapping is failing when a component stays open while the keyboard focus moves out of the component to the underlying content. The focus then may be invisible or unfinable to the user. 

Keep the focus while tabbing within the component:

- Move the keyboard focus to the first tabable element after the last focusable element.
- Give the user a clear way out of the component by, for example, a close (X) or a confirmation button and also by using the Escape key.
- Bonus functionality, if there is space: the component also closes when a mouse user clicks outside the component.

{: .info .callout}
**Note**: The HTML element `<dialog>` can be dismissed by pressing the Esc key by default. More info about its accessibility on MDN: [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).  

## How to test focus trapping within a component

1. Open the component.
2. Tab through the component.
3. Verify that the focus stays within the component, after the last focusable element the focus should return to the first focusable element in the component.
4. Check if there is a close button or other way to close the component.
5. Check if the component also closes with the Escape key.

## Examples of focus trapping

The responsive menu on [WordPress.org](https://wordpress.org/) is an example of a component that has focus trapping. 

- After tabbing through all the links, the focus returns on the close button at the top of the menu. 
- The menu also closes with the Escape key.

The [Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/) on ARIA Authoring Practices Guide by the W3C gives examples of an accessible dialog which uses focus trapping.

## Resources

### WCAG Success Criteria for keyboard focus

- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/quickref/#keyboard) (Level A).
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/quickref/#focus-visible) (Level AA).
- [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum) (Level AA).
- [2.4.12 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured) (Level **AAA**).

### Other resources

- [A Primer on Focus Trapping](https://css-tricks.com/a-primer-on-focus-trapping/) by Zell Liew on CSS-Tricks.
- [There is No Need to Trap Focus on a Dialog Element ](https://css-tricks.com/there-is-no-need-to-trap-focus-on-a-dialog-element/) b by Zell Liew on CSS-Tricks.
- [React Refocus](https://react-refocus.mallikcheripally.com/) by Mallik Cheripally.
- [How to detect esc key press in React and how to handle it](https://www.xjavascript.com/blog/how-to-detect-esc-key-press-in-react-and-how-to-handle-it/) on XJavascript.com.
