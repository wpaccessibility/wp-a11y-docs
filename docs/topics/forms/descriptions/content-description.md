---
title: Description has text only
layout: default
parent: Input and description
nav_order: 3
has_video: true
---

# Only include text in the description

The HTML attribute `aria-describedby`, which you use to connect a description, must only contain text and no additional structure or interactive functionality like links, buttons, lists, headings or for example tooltips.

Screen readers don't convey this information correctly or even skip it entirely in a description.

## Demo of a description with a list, announced with VoiceOver in Safari

<video data-able-player data-youtube-nocookie="true" data-youtube-id="6brKmJfDtNQ" data-heading-level="0"></video>

In this [demo video](https://www.youtube.com/watch?v=6brKmJfDtNQ), VoiceOver in Safari 18.6 skips the bulleted list from the description when a form field receives keyboard focus. NVDA 2024.4.1 in Firefox does the same. The codepen with the HTML/CSS of this demo: [Demo rich text in a description](https://codepen.io/rianrietveld/pen/emJedVR).

What are the options for adding information and explanations to a form and its input fields? Follow the [description decision tree]({{site.baseurl}}/docs/topics/forms/descriptions/).

## Resources

### WCAG Success Criteria for text in a description

 - [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships).
 - [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).


### Other resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [ARIA: aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- W3C: [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/).

