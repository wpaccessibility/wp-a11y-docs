---
title: Indicate required fields for screen readers
layout: default
parent: Required fields
nav_order: 4
description: Screen readers announce form fields as required if they have the HTML attributes aria-required or required on the form field.
---

# Indicate required fields for screen readers

Screen readers announce form fields as required if they have the HTML attributes `aria-required="true"` or `required` on the form field.

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

The attribute `required` triggers the [client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) of the browser. 

Client side validation may create accessibility and usability issues. The topic about [feedback on form errors]({{site.baseurl}}/docs/topics/forms/feedback/) will address this in more detail.

If you decide to use `required`, also use `novalidate` on the form element to prevent the browser's form validation from kicking in and enable you to handle validation server-side.

```html
<form action="some-url" novalidate>
```

{: .info }
Note: the use of `aria-invalid` will be addressed later in the section Feedback on form errors.

## Using aria-required or required in WordPress plugins

### Gravity Forms

Gravity Forms adds `aria-required="true"` to required fields.

### Other WordPress form plugins

{: .info }
We'd like to invite people familiar with form plugins to help us add instructions for WordPress form plugins. Like possibilities, settings and screenshots.
Please [contact us]({{site.baseurl}}/docs/contact/) if you want to help us with this additional content.

## WCAG Success Criteria

By indicating required fields, you meet WCAG success criterion [3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Related pages in this documentation

-  [Option 1: Marking only the required form fields]({{site.baseurl}}/docs/topics/forms/required/mark-required-fields/).
-  [Option 2: Marking only the optional form fields]({{site.baseurl}}/docs/topics/forms/required/mark-optional-fields/).

## Resources
- MDN [aria-required](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required).
- MDN [HTML attribute: required](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required).
- W3C [Validating Input](https://www.w3.org/WAI/tutorials/forms/validation/).
- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
