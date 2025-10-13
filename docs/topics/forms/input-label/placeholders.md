---
title: Placeholders
layout: default
parent: Input and label
nav_order: 3
---

# Placeholders in form fields

For all users to understand how to fill out a form, the **labels** should be connected to form control.

The **placeholder** represents a short hint (a word or short phrase) intended to aid the user how to fill out a form field. A hint could be a sample value or a brief description of the expected format.

A screen reader announces first the label and then the placeholder.

```html
<label for="search">Search for a product:</label>
<input type="search" id="search" name="s" placeholder="For example: apples, bread or milk">
```

Only using a placeholder (without a connected label) has some disadvantages:
- the form field doesn't have a proper accessible name.
- the placeholder text may become unreadable when a user zooms in and the text becomes too large for the input field.

For a longer hint or other advisory text, place the text next to the form field. In this case, use [aria-describedby]({{site.baseurl}}/docs/topics/forms/descriptions/) to connect the descriptive text to the field.


## WCAG Succes Criteria

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [2.4.6 Headings and labels](https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels) (Level AA).
- [3.3.2 Labels or instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).
- [4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).

## Related pages in this documentation

- [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/).

