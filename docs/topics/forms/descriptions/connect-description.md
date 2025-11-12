---
title: Connect the description
layout: default
parent: Input and description
nav_order: 2
---

# Connect the description to the form field

For screen reader users, it's important that the description is announced along with the form field. By connecting the description to the form field using `aria-describedby`, the label and description are announced together when a screen reader user focuses on the form field.

## Why is this important?

Screen readers can switch to "forms mode" when processing content within a `<form>` element. In this mode, screen readers only read the form fields and their associated information. Unassociated information is not read aloud unless the user searches for it.

## The aria-describedby/id relationship

The HTML basics:

- Give the description a unique ID: `id="description-name"`.
- In the form field, refer to that ID: `aria-describedby="description-name"`.

```html
<label for="fullname">Full name</label>
<p id="description-fullname">Please fill out your first and last name.</p>
<input 
        id="fullname" 
        aria-describedby="description-fullname" 
        autocomplete="name" />
```

{: .alert }
IDs used must be unique on each page; otherwise, the wrong description may be announced with a form field.

It's possible to add multiple descriptions to one form field. You can combine the text of the description and an error message by separating the IDs with a space. The order of the IDs given in the `aria-describedby` attribute is the order in which they are announced.

```html
<label for="fullname">Full name</label>
<div id="description-fullname">Please fill out your first and last name.</div>
<div id="error-message-fullname">Your first and last name are missing.</div>
<input 
        id="fullname" 
        aria-describedby="description-fullname error-message-fullname" 
        autocomplete="name" />
```

{: .info }
For the documentation about descriptions in fieldsets read [Description with a fieldset]({{site.baseurl}}/docs/topics/forms/fieldsets/fieldset-descriptions/).

## Examples

{: .dont }
No connection between a form field and its description.

```html
<!-- do not copy, this is incorrect -->
<label for="new-password">New password</label>
<p>
    Choose a password of at least 8 characters long.
</p>
<input
  id="new-password"
  type="password"
  name="new-password"
  autocomplete="new-password"
/>
```

{: .do }
Connection between a form field and its description.

```html
<label for="new-password">New password</label>
<p id="new-password-description">
    Choose a password of at least 8 characters long.
</p>
<input
  id="new-password"
  type="password"
  name="new-password"
  autocomplete="new-password"
  aria-describedby="new-password-description"
/>
```

## WCAG Success Criteria

Connecting a description to a form field is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [3.3.2 Labels or instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [ARIA: aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- W3C: [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/).
- Accessibility Developer Guide: [Browse and focus modes](https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes).
