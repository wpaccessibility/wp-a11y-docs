---
title: Mark required for screen readers
layout: default
parent: Required fields
nav_order: 4
---

# Mark a required form field for screen readers

Screen reader users will have announced if a field is required by the HTML attributes `aria-required` or `required` with the form field.

## Basic HTML examples

### Using aria-required="true"

```html

<label for="new-password">New password (required)</label>
<p>
    Choose a password of at least 8 characters long.
</p>
<input
  id="new-password"
  type="password"
  name="new-password"
  autocomplete="new-password"
  aria-required="true"
  aria-invalid="false"
/>

```

### Using required


```html
<label for="new-password">New password (required)</label>
<p>
    Choose a password of at least 8 characters long.
</p>
<input
  id="new-password"
  type="password"
  name="new-password"
  autocomplete="new-password"
  required
  aria-invalid="false"
/>

```


The disadvantage of using `required` is, that it triggers the [client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) of the browser. 

This validation is, at the moment of writing, do not meet WCAG accessibility guidelines. The text of the error messages are not specific enough, they disappear after a few seconds, and they have poor screen reader support at the moment.

If you decide to use required, also use `novalidate` on the form element, to prevent the form validation of the browser kicking in and enables you to handle the validation server side.

```html
<form action="some-url" novalidate>
```

{: .info }
Note: the use of `aria-invalid` will be addressed later in the section Feedback on form errors.


## WCAG Success Criteria

By indication required fields, you meet WCAG success criterion [3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Resources
- MDN [aria-required](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required).
- MDN [HTML attribute: required](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required).
- W3C [Validating Input](https://www.w3.org/WAI/tutorials/forms/validation/).
- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).

