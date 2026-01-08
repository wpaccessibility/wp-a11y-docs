---
title: HTML form validation
layout: default
parent: Feedback on errors
nav_order: 2
---

# Avoid HTML form validation

![Example of HTML validation: a small tooltip above the form field with the text: “Fill out this field.”]({{site.baseurl}}/assets/images/html-validation.png)

Most browsers can automatically check whether a required field has been filled out. This happens when the HTML attribute `required` is present on the form field.

```html
<input type="text" id="example" name="example" required />
```

This type of error handling provides insufficient information. In many browsers, not all users are informed that the field is required, and there is no explanation when a specified pattern is not met, as Adrian Roselli points out in [Avoid default field validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html).

It is preferable to add custom client-side validation.

To specifically communicate to assistive technologies that a field is required, `aria-required="true"` can be used. If you use `aria-required` instead of `required`, the browser will not perform validation or provide feedback on its own.

```html
<input type="text" id="example" name="example" aria-required="true" />
```

Find more information about the use of `aria-required` in [Indicate required fields for screen readers]({{site.baseurl}}//docs/topics/forms/required/required-screen-readers/).

## Progressive enhancement

Although we discourage HTML form validation and do not consider it a final solution, it can be useful as a fallback when there is a poor internet connection and JavaScript is not yet available.

This option applies only to forms where error messages are handled by JavaScript.

The setup is as follows:

- Use the required attribute on form fields instead of aria-required.
- As soon as the JavaScript loads, immediately add the novalidate attribute to the `<form>` element to disable HTML validation.

This prevents users with a poor internet connection from not being informed about form errors in time.

This is an option, not a requirement. Ultimately, a custom server-side final validation of form fields is the most reliable and accessible solution, and therefore the recommended way to handle form validation.

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
