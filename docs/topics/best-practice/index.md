---
title: Difference standard and best practice
layout: default
parent: Standards and best practice
description: Learn the difference between an accessibility standard and "best practice"?
nav_order: 8
date_created: October 26, 2026
contributors:
  - Rian Rietveld
---

# What is the difference between an accessibility standard and "best practice"?

In short:
- Standards: what you must do to comply with legal requirements.
- Best practices: what you should do to provide excellent accessibility and user experience, even beyond legal minimums.

Standards, guidelines and success criteria are written to help create accessible work but also to help auditors measure its accessibility.

But what is the best for your users? The commonly used guidelines are [WCAG level AA]({{site.baseurl}}/docs/start/wcag-intro/). They are actually a baseline. The minimum should do. 

To truly create an accessible and usable experience for your users, there is more involved. Include best practices for code, design and text. Go beyond the bare minimum and take that extra step to create an accessible experience.

### Examples of best practice

We give you two examples of where [WCAG at Level AAA](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize&levels=a%2Caa) adds much more value, even when you only need to comply to WCAG AA.

The criteria at level AA are the primary criteria for meeting accessibility standards worldwide. Level AAA adds more success criteria. Some of them are often used as best practice, even when you only need to comply to Level AA.

### Clickable target size of a button

WCAG [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum) Level **AA**:
The clickable target size of a button should be 24 pixels by 24 pixels minimum. This is pretty small; a user with Parkinson's having tremor in their hands, or someone with big fingers on a mobile device, may have a hard time clicking that button.

WCAG [Target Size (Enhanced)](https://www.w3.org/WAI/WCAG22/quickref/#target-size-enhanced) Level **AAA**:
The clickable target size of a button should be 44 pixels by 44 pixels minimum. Now more people are able to close your dialog modal. 

The difference visually:

<button class="demo-button-small" aria-label="Close (small)">X</button>
<button class="demo-button-large" aria-label="Close (large)">X</button>

### Heading structure

This may come as a shock. WCAG level **AA** doesn't address the relation between heading levels. A meaningful, semantic, heading structure is not mentioned.

Only WCAG 2.2 **AAA** addresses [Section Headings](https://www.w3.org/WAI/WCAG22/quickref/#section-headings):
Section headings are used to organize the content. Only when you need to comply to WCAG level AAA, a meaningful heading structure is required.

But a meaningful heading structure is crucial for a good understanding of the content by screen reader users, search engines and generative engines using AI. Despite meaningful heading structure is actually best practice, it is considered the only way to address headings in about every documentation about accessibility there is.

Read about a meaningful heading structure in this documentation:
- [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/) in Standards and best practice Content and images.
- [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/) in Standards and best practice, Frontend code.
- [Headings with meaningful structure]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/headings-structure/) in Accessibility-ready program, Theme accessibility-ready guidelines.

This documentation includes topics covering both WCAG standards and best practices. Each topic clearly indicates whether it addresses a WCAG AA requirement or a best practice.

### Conclusion

- Take what you can from WCAG 2.2 AAA. There are some pretty good success criteria that make your work more accessible.
- Test your work, organize usability testing with users. Include people with a disability and/or who use assistive technology and learn from them.

You are not legally required to do so, but it helps many of your users. And to be honest, you create your work for users, don't you?

## Resources

- [Severity and WCAG vs best practice](https://human-centred.nz/2026/07/08/wcag-best-practice-and-severity/) by Steve Barnett for Human-centred.
- [A11y vs WCAG: How They Work to Improve Accessibility](https://reciteme.com/us/news/a11y-vs-wcag/) by Michael Halpin for Recite Me.
