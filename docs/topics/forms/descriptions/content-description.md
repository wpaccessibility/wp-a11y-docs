---
title: Description has text only
layout: default
parent: Input and description
nav_order: 3
has_video: true
---

# Only include text in the description

The HTML attribute `aria-describedby`, which you use to connect a description, must only contain "plain text". Plain text represents text without further formatting and has no additional HTML for formatting or meaning. Link lists, headings or tooltips.

We call formatted text "rich text". Screen readers don't convey this information correctly or even skip it entirely in a description.

## Demo of a description with rich text announced with VoiceOver in Safari

<video data-able-player data-youtube-nocookie="true" data-youtube-id="6brKmJfDtNQ" data-heading-level="0"></video>

In this [demo video](https://www.youtube.com/watch?v=6brKmJfDtNQ), VoiceOver in Safari 18.6 skips the bulleted list from the description when a form field receives keyboard focus. NVDA 2024.4.1 in Firefox does the same. The codepen with the HTML/CSS of this demo: [Demo rich text in a description](https://codepen.io/rianrietveld/pen/emJedVR).

## Description decision tree

What are the options for adding information and explanations to a form and its input fields? Follow the decision tree in 6 questions.

### Question 1: Does the information apply to all form fields?

**Yes**: Place the information just above the form and below its heading. You can use rich text here.  
**No**: Go to question 2.

### Question 2: Does the information concern a single field or a group of fields, grouped in a fieldset?

**A single field**: Go to question 3.  
**A group of fields**: Go to question 5.  

### Question 3: Is the information in the form field plain text?

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

## Related WCAG Succes Criteria

 - [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships).
 - [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [ARIA: aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- W3C: [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/).

