---
title: Screen reader feedback
layout: default
parent: Feedback on errors
description: There are several ways to provide feedback to screen reader users on form errors
nav_order: 7
---

# Provide feedback to screen reader users on form errors

We provide you with several additional ways to give feedback about error messages to screen reader users:  [aria-required](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) and [aria-invalid](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) on the form field, and adjusting the [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) element in the `<head>` section of the web page.

## Use ARIA for feedback on a form field

Use ARIA to provide additional information and feedback to screen reader users that is needed to properly use and understand the form.

Two ARIA attributes are important for screen reader feedback:

- `aria-required="true"` indicates that a field is required.
- `aria-invalid="true"` indicates that a field has been filled out incorrectly.

Initially, the value of aria-invalid is set to false. When an error occurs, change the value from false to true. Optionally, the aria-invalid attribute can be omitted until validation has been performed.

```html
<label for="example">Example</label>
<input aria-required="true" aria-invalid="false" id="example" name="example" type="text" />
```

The screen reader VoiceOver announces: “Example, required, edit text”.

```html
<label for="example">Example</label>
<input aria-required="true" aria-invalid="true" id="example" name="example" type="text" />
```

VoiceOver announces: “Example, required, invalid data, edit text”.

## Screen reader feedback after submit

When a form is submitted unsuccessfully a screen reader user must get this information. For keyboard and screen reader users, it is important that after submitting a form, the visual focus and keyboard focus move to a logical location and information about what happened is announced.

### Update the title element

The content of the `<title>` element is the first thing a screen reader reads when a web page loads.

This makes it a good place to include valuable information like:

- The order form has two error messages.
- Which step the user is on in a multistep form.
- Your order has been successfully submitted.

For example:

```html
<head>
  <title>2 error messages, Step 1 of 4: Your question | Site Name</title>
  [...]
</head>
```

Or:
```html
<head>
  <title>Your question has been successfully send | Site Name</title>
  [...]
</head>
```

### Keyboard focus and aria-live

There are 2 ways to inform a screen reader about errors:
- Use an error summary, where the focus is moved to the heading of the summary. The text of the heading is announced. The topic [Provide a summary with form errors above the form]({{site.baseurl}}/docs/topics/forms/feedback/error-summary/) explains this further.
- When the form is submitted dynamically without a page reload, inform the user of what happened by using `aria-live`. The topic [Feedback on dynamic changes](/docs/topics/code/dynamic-changes/) explains how to use the WordPress JavaScript method `wp.a11y.speak()` for this.

## Resources

### WCAG Success Criteria for screen reader feedback on errors

Providing feedback about error messages to screen reader users is required to meet the WCAG success criteria:

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/quickref/#error-identification) (Level A).

Providing a descriptive `<title>` element is required to meet WCAG success criterion [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/quickref/#page-titled) (Level A).


### Other resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
