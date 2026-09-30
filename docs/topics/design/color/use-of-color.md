---
title: Use of color
layout: default
parent: Color
description: Learn best practices for how to use color while also considering accessibility.
nav_order: 3
contributors:
  - Joe Dolson
  - Maja Benke
  - Rian Rietveld
---

# The use of color

Color is a powerful way to add meaning to elements on a page. However, you need to make sure color is not the **only way** users can get this additional information. 

Users who are colorblind, are visually impaired, or who don't understand the intention of the color you chose, will otherwise miss the information. A color may not have the same meaning in every culture. Always add additional information when you use color in a meaningful way.

![Two forms, one with the error only indicated by a red border and one with additional text to explain the error]({{site.baseurl}}/assets/images/use-of-color-form-erorr.png)

In addition to color, use another way to add information. For example:

- Underline links in the content. More info in [Styling links]({site.baseurl}}/docs/topics/design/links/).
- Add an icon and additional text with status messages.
- Always add additional text with form errors. More info in [Write out an error message in text]({site.baseurl}}/docs/topics/forms/feedback/error-message-format/).
- Style hover and focus states of links and buttons using more than just color changes. More info in [Styling focus and hover states of interactive HTML elements]({site.baseurl}}/docs/topics/design/focus-hover/).

## Examples

{: .callout .dont }
**Don't**: Use only color to distinguish the different items in a graph.

![graph of CMS usage with colored lines to show the data.]({{site.baseurl}}/assets/images/use-of-color-graph-only-lines.png)

Source data: [Historical yearly trends in the usage statistics of content management systems](https://w3techs.com/technologies/history_overview/content_management/all/y) by W3Techs.

{: .callout .do }
**Do**: In addition to colors, use line shapes and/or symbols, so colorblind users can understand the data too.

![graph of CMS usage with differently shaped symbols for the data.]({{site.baseurl}}/assets/images/use-of-color-graph-lines-and-icons.png)

{: .callout .dont }
**Don't**: Use only color to indicate a link in a paragraph of text. Visitors may miss important links.

<p>Forgotten vegetables are those <a href="https://en.wikipedia.org/wiki/Neglected_and_underutilized_crop" style="color: green; text-decoration: none;">once-common crops</a> that have largely disappeared from modern diets. They were very common before, but now our food choices have changed.</p>

{: .callout .do }
**Do**: Underline the link a paragraph of text.

<p>Forgotten vegetables are those <a href="https://en.wikipedia.org/wiki/Neglected_and_underutilized_crop" style="color: green;">once-common crops</a> that have largely disappeared from modern diets. They were very common before, but now our food choices have changed.</p>

## Check your design in gray scale

To check if your website works for colorblind users, you can view it in grayscale. Without color information, you get a better sense for whether your site is easy to understand.

Some tools to emulate how colorblind visitors view your website:
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), an open source color-blindness simulator for macOS and iOS.
- [Colorblind Web Page Filter](https://www.toptal.com/designers/colorfilter), a color-blindness emulating filter for a web page, by TopTal.

## Resources

{: .resource-h3}
### WCAG Success Criteria for the use of color

- [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics) (level A).
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/quickref/#use-of-color) (level A).
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimumt) (level AA).
- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (level AA).

{: .resource-h3}
### Related pages in this documentation

- [Sufficient color contrast of text and UI controls]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/sufficient-color-contrast/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Underlined links in text]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/underlined-links/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Styling links]({site.baseurl}}/docs/topics/design/links/) in Standards and best practice, Design & user experience.
- [Styling focus and hover states of interactive HTML elements]({site.baseurl}}/docs/topics/design/focus-hover/) in Standards and best practice, Design & user experience.
- [Write out an error message in text]({site.baseurl}/docs/topics/forms/feedback/error-message-format/) in Standards and best practice, Web forms.
