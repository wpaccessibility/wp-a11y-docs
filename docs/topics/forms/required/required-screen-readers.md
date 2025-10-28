---
title: Mark required for screen readers
layout: default
parent: Required fields
nav_order: 4
---

# Mark a required form field for screen readers

Screen reader users will have the field announced as required by the HTML attributes `aria-required` or `required` on the form field.

## Basic HTML examples

### Using aria-required="true"

```html

<label for="name">Your name (required)</label>
<input
    id="name"
    type="text"
    name="name"
    autocomplete="name"
    aria-required="true"
    aria-invalid="false"
/>
```

### Using required

```html
<label for="name">Your name (required)</label>
<input
    id="name"
    type="text"
    name="name"
    autocomplete="name"
    required
    aria-invalid="false"
/>
```

The disadvantage of using `required` is, that it triggers the [client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) of the browser. 

At the time of writing, this validation does not meet WCAG accessibility guidelines. The error messages are not specific enough, they disappear after a few seconds, and they currently lack sufficient screen reader support.

If you decide to use `required`, also use `novalidate` on the form element to prevent the browser's form validation from kicking in and enable you to handle validation server-side.

```html
<form action="some-url" novalidate>
```

{: .info }
Note: the use of `aria-invalid` will be addressed later in the section Feedback on form errors.

## WCAG Success Criteria

By indicating required fields, you meet WCAG success criterion [3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Resources
- MDN [aria-required](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required).
- MDN [HTML attribute: required](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required).
- W3C [Validating Input](https://www.w3.org/WAI/tutorials/forms/validation/).
- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
