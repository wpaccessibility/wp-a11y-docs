---
title: Description decision tree
layout: default
parent: Input and description
nav_order: 5
---

# Description decision tree

A description should be short and to-the-point. But what if you need to add longer or more complex information with a from field? Follow this decision tree.

## Description decision tree in 6 questions.

{: .info }
Rich text in this context means: additional structure or interactive functionality like links, buttons, lists, headings or for example tooltips.

### Question 1: Does the information apply to all form fields?

**Yes**: Place the information just above the `<form>` element and below its heading.  
**No**: Go to question 2.

### Question 2: Does the information concern a single field or a group of fields, grouped in a fieldset?

**A single field**: Go to question 3.  
**A group of fields**: Go to question 5.

### Question 3: Is the information in the form field in text?

**Yes**: Place the information in a description.  
**No**: Go to question 4.

### Question 4: Is it necessary for the information in the form field to contain rich text?

**Yes**: Consider a multistep form, where the information is placed just above the form and below the corresponding heading for the relevant step.  
**No**: Rewrite the description so that it only contains plain text.

### Question 5: Is the information in the grouped fields plain text?

**Yes**: Place the information in a description linked to the `<fieldset>`.   
**No**: Go to question 6.

### Question 6: Is it necessary for the information in the grouped fields to contain rich text?

**Yes**: Consider a multistep form, where the information is placed directly above the form for each step.  
**No**: Rewrite the description so that it only contains plain text. This ensures that all users can read the information.

## Related WCAG Success Criteria

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships).
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [ARIA: aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- W3C: [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/).

