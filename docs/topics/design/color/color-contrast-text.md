---
title: Color contrast of text
layout: default
parent: Color
description: Learn about color contrast and how to comply to accessibility guidelines.
nav_order: 2
---

# Color contrast of text against its background

Color contrast is an important issue to address for the accessibility of your website. It should be considered for foreground (text and other elements) and background colors (or images), but also between elements and hover or focus states.

Color contrast should be high enough for good readability, but should not be too bright for people with sensitive eyes or cognitive problems.There are no WCAG criteria defining excessively high contrast, but very high contrast should be used selectively.

The WordPress project follows the [accessibility level “AA” of WCAG](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

This requires that the contrast between background and foreground colors has a luminosity contrast ratio of:

- 4.5:1 for normal text.
- 3:1 for large text (24px equivalent or 19px equivalent and bold).

{: .callout .tip }
**Tip:** Logos and logotype are exceptions to accessibility guidelines, including color contrast rules. If you’re designing a new logo, however, it might be a good idea to consider them, anyway.

Tools to help design or check complete color palettes:
- [Online Contrast Grid](https://contrast-grid.equalizedigital.com/) by Equalize Digital.
- [Color Contrast Grid for Figma variables](https://www.figma.com/community/plugin/1429041037045202727/color-contrast-grid-for-figma-variables) by Moritz Neugebauer.
- [Contrast Grid for Figma](https://www.figma.com/community/plugin/993414361395505148/contrast-grid) by hiloki.

There are many tools to check color contrast ratios. WebAxe published an [overview of contrast checkers](https://www.webaxe.org/color-contrast-tools/). Populair tools are:

- [Online Contrast Checker](https://webaim.org/resources/contrastchecker/) by WebAIM.
- [Colour Contrast Analyser (CCA)](https://vispero.com/lp/color-contrast-checker/), Vispero’s free color contrast checker for Windows and Mac, includes text and visual elements for individuals with color-blindness or low vision impairments.
- [Background Image & Text Contrast Checker](https://www.brandwood.com/a11y/), by Andrew Brandwood.



## Resources

{: .resource-h3}
### WCAG Success Criteria for color contrast

- [1.4.3 Contrast Minimum](https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum)(Level AA).
- [1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced) (Level **AAA**).
- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (Level AA).

{: .resource-h3}
### Related pages in this documentation

[Sufficient color contrast of text and UI controls]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/sufficient-color-contrast/) in the Theme guidelines for the WordPress accessibility-ready program.

{: .resource-h3}
### Other resources

- [Assistive Technology Experiment: High Contrast](https://webaim.org/blog/high-contrast/) by WebAIM.
- [Color Contrast And Why You Should Rethink It](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/) by Cathy O’ Connor on Smashing Magazine.
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), an open source color-blindness simulator for MacOS and iOS.
- [Colorblind Web Page Filter](https://www.toptal.com/designers/colorfilter), a color-blindness emulating filter for a web page, by TopTal.
- [Accessible color palette generator](https://venngage.com/tools/accessible-color-palette-generator), a tool to generate accessible color palettes by Venngage.
