---
title: Placeholders
layout: default
parent: Input and label
nav_order: 3
---

# Placeholders in form fields

For all users to understand how to fill out a form, the **labels** should be connected to form control.

The **placeholder** represents a short hint (a word or short phrase) to inform the user on _what_ to fill out a form field. A hint could be a sample value or a brief description of the expected format.

A screen reader announces first the label and then the placeholder.

## Disadvantage of only using a placeholder
Only using a placeholder (without a connected label) has some disadvantages:
- the form field doesn't have a proper accessible name.
- the placeholder text may become unreadable when a user zooms in and the text becomes too large for the input field.
- the placeholder text disappears when the user starts typing in the form field or when the field is filled out with autocomplete.

For a longer hint or other advisory text, place the text close to the form field.
In this case, use a [description]({{site.baseurl}}/docs/topics/forms/descriptions/).

## Basic HTML example for a placeholder

<label for="search2">Search for a product:</label>  
<input type="search" id="search2" name="s" placeholder="For example: apples">

```html
<label for="search">Search for a product:</label>
<input type="search" id="search" name="s" placeholder="For example: apples">
```

## WCAG Succes Criteria

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [2.4.6 Headings and labels](https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels) (Level AA).
- [3.3.2 Labels or instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).
- [4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).

## Related pages in this documentation

- Standards and best practice - Frontend code: [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/).


## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [Placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/placeholder).
