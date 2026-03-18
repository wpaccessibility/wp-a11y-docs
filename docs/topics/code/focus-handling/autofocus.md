---
title: Autofocus
layout: default
parent:  Handling focus
nav_order: 5
description: Automatically setting a focus location when a page loads can be confusing and unwanted.
---

# The attribute autofocus 

With the attribute `autofocus` added to a focusable HTML element, the element will automatically receive focus after a webpage loads. Focus can be set programmatically using JS, for example by using the `focus()` method.

This overrides the natural order of visual and keyboard focus and can be confusing for keyboard and screen reader users.

> The screen reader will not announce anything before the element that gets autofocus, and sighted users on small devices will miss the context set by the preceding content. [MDN on autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus).

Do not make decisions for your users on how to read or operate a web page. Make the visible and keyboard focus predictable and sequential.

{: .info .callout}
The only possible accessible use for the attribute `autofocus` can be by moving the focus after opening a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#additional_notes).

## How to test for autofocus

Load a web page and verify that keyboard and visible focus is not automatically set, either by using the `autofocus` attribute or by assignment using JavaScript. 



## Examples

{: .callout .dont }
**Don't**: add autofocus to a form field. Not everyone may want to fill out the form, maybe they want to user the main menu or read content above the form.

```html
<!-- do not copy, this is not accessible and user-friendly -->
<label for="first-name">First name</label>
<input id='first-name" autofocus autocomplete="given-name" >
```

{: .callout .do }
**Do**: leave the natural visual and keyboard focus order of a web page intact.

```html
<label for="first-name">First name</label>
<input id="first-name" autocomplete="given-name" >
```

## Resources

### WCAG Success Criteria for focus order

Maintaining a meaningful and predictable focus order is necessary to meet the WCAG success criteria:

- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).

### Other resources

- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) by Adrian Roselli.
- [HTML autofocus global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) by the MDN.
- [Keyboard Accessibility Tabindex](https://webaim.org/techniques/keyboard/tabindex) on WebAIM
