---
title: Fieldset description
layout: default
parent: Group form fields
nav_order: 3
description: Connect the description of a fieldset to the fieldset element
---

# Description with a fieldset

Radio buttons, checkboxes, and other groups of related fields (like addresses) can be grouped in fieldsets. The question or the subject will be the `legend`. Place the description below the legend just above the first label/form field. The description is linked to the fieldset element with `aria-describedby`.

## Example

![Screenshot of a fieldset, with a legend and 2 radio buttons]({{site.baseurl}}/assets/images/fieldset-description.png)

In HTML, simplified

```html
<fieldset aria-describedby="description-log-in">
  <legend>Do you want to log in?</legend>
  <p id="description-log-in">
      When you log in, your details are already filled in, and we can help you faster.
  </p>
    <input
      id="log-in-yes"
      type="radio"
      name="log-in"
      value="yes"
    />
    <label for="log-in-yes">Yes</label>

    <input
      id="log-in-no"
      type="radio"
      name="log-in"
      value="no"
    />
    <label for="log-in-no">No</label>

</fieldset>
```

## Examples

{: .callout .do }
**Do:** Connect a description to the form field, using aria-describedby.

```html
<label for="new-password">New password</label>
<p id="description-new-password">
    Choose a password of at least 8 characters long.
</p>
<input
  id="new-password"
  type="password"
  name="new-password"
  aria-describedby="description-new-password"
  autocomplete="new-password"
/>
```

## Resources 

### WCAG Success Criteria for descriptions

A description is optional, but it can help users to understand better what they need to fill out.
Then a description with a fieldset is necessary to meet the WCAG success criterion [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level AA).

### Related pages in this documentation

- [Group form fields]({{site.baseurl}}docs/topics/forms/fieldsets/).
- [Fieldset legend]({{site.baseurl}}/docs/topics/forms/fieldsets/legend/).

### Other Resources

- MDN: [ARIA: aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
