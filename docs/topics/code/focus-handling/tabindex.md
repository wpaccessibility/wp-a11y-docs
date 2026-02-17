---
title: Tabindex and tab order
layout: default
parent:  Focus handling
nav_order: 1
description: Make the tab order of the keyboard focus predictable and sequential.
---

# Tabindex and tab order

Make the tab order of the keyboard focus predictable and sequential. Then keyboard users understand better how to navigate through menus, forms and the links and other interactive elements in a web page.

Elements that get keyboard focus natively are `<a>` or `<area>` with a href attribute, `<button>`, `<iframe>`, `<input>` including checkboxes and radio buttons, `<object>`, `<select>`, `<textarea>`, and the `<summary>` element that provides summary for a `<details>` element.  You do not need to add a tabindex to these elements.

## About tabindex

Avoid tabindex values greater than 0 or CSS techniques (such as reordering flex items) that alter the expected focus order of interactive elements. The order of the focusable elements in HTML is important for keyboard and screen reader users.

A positive tabindex hijacks the natural tab order of a page. An unexpected tab order makes it difficult for keyboard users and people who rely on assistive technologies to navigate a page or use a form. Structure the focusable elements in the document source, make them appear in a logical and predictable order.

### Values of tabindex and their behaviour

According to the MDN [HTML tabindex global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) (summarized):

- A negative value, usually `tabindex="-1"`, means that the element is not reachable via sequential keyboard navigation. But the element can be focused with JavaScript (by calling the `focus()` method).

- `tabindex="0"` means that the element should be focusable in sequential keyboard navigation, after any positive tabindex values. The focus navigation order of these elements is defined by their order in the document source.

- A positive value means the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number. 

## How to test

How to test with a keyboard is described with [Keyboard navigation testing]({{site.baseurl}}/docs/testing/keyboard/) in this documentation. 

{: .info .callout }
**Note**: When you create different layouts for different views, always check if the tab order stays logical and predictable in every view.

## Examples

{: .dont .callout }
**Don't**: add a tabindex to an element that has already native keyboard focus.

```html
<!-- No not copy, this is incorrect code -->
<button tabindex="0">Click me</button>
```

{: .dont .callout }
**Don't**: add `tabindex="-1"` to a focusable element. Keyboard users can not access that element, only mouse users can.

```html
<!-- No not copy, this is incorrect code -->
<button tabindex="-1">Click me</button>
```

{: .do  .callout }
**Do**: depend on the native behaviour of an HTML element.

```html
<button>Click me</button>
```

{: .dont .callout }
**Don't**: decide the tab order for your user.

```html
<!-- No not copy, this is user unfriendly code -->
<ul>
    <li><a href="some-url">About us</a></li>
    <li><a href="some-url">Services</a></li>
    <li><a href="some-url" tabindex="1">Contact</a></li>
</ul>
```

{: .do .callout }
**Do**: present the elements in the right order in de document source.

```html
<ul>
    <li><a href="some-url">Contact</a></li>
    <li><a href="some-url">About us</a></li>
    <li><a href="some-url">Services</a></li>
</ul>
```

{: .callout .dont }
**Don't**: add a positive tabindex to a form field. Not everyone may want to fill out the form, more about this with [Avoid using a positive tabindex on a form field]({{site.baseurl}}/docs/topics/forms/tabindex/#avoid-using-a-positive-tabindex-on-a-form-field) in this documentation.

```html
<!-- do not copy, this is not keyboard user-friendly -->
<label for="first-name">First name</label>
<input id='first-name" tabindex="1" autocomplete="given-name" >
```

{: .callout .do }
**Do**: leave to natural tab order of a web page intact.

```html
<label for="first-name">First name</label>
<input id='first-name" autocomplete="given-name" >
```

## Resources

### WCAG Success Criteria for focus order

Maintaining a meaningful and predictable focus order is necessary to meet the WCAG success criteria:

- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).

### Other resources

- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) by Adrian Roselli.
- [HTML tabindex global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) by the MDN.
- [Keyboard Accessibility Tabindex](https://webaim.org/techniques/keyboard/tabindex) on WebAIM
