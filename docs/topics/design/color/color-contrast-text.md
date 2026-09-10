---
title: Color contrast of text
layout: default
parent: Color
description: Sufficient contrast between text and its background ensures that content is easy to read. Learn about color contrast and how to comply to accessibility guidelines.
nav_order: 2
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# Color contrast of text against its background

Sufficient contrast between text and its background ensures that content is easy to read. This also applies when someone is visually impaired or when the sun is shining on your smartphone screen.

For example:
- <span style="color: #595959">Now you see me</span>, color contrast 7:1.
- <span style="color: #B5B5B5">Now you don't</span>, color contrast 2:1.

Good color contrast should be considered for the text color and background colors (or images), but also for dark mode, placeholders and hover or focus states of text in links and buttons.

The guidelines for [WCAG 2.2 Level AA](https://www.w3.org/WAI/WCAG22/quickref/#distinguishable) require that the contrast between background and foreground colors for text has a luminosity contrast ratio of:

- 4.5:1 contrast for normal text.
- 3:1 contrast for larger text (24 pixels and up).
- 3:1 contrast for bold text (bold and 19 pixels or larger).

{: .callout .tip }
**Tip:** Logos and logotype are exceptions to accessibility guidelines, including color contrast rules. If you’re designing a new logo, however, it might be a good idea to consider them, anyway.

Color contrast should be high enough for good readability but should not be too bright for people with sensitive eyes or cognitive problems. There are no WCAG criteria defining excessively high contrast, but very high contrast should be used selectively.

If you want to use text over an image, best the best method is to place a solid block behind the text or a transparent color overlay across the entire image. This ensures the contrast ratio is enough for all the text no matter the colors on the image or the viewport.

## Placeholders

Sufficient color contrast for text against the background also applies to placeholders.
Some browsers, such as Firefox, make placeholder text more transparent by default. Therefore, add `opacity: 1` in the CSS for the placeholder.

```css
::placeholder {
 opacity: 1;
 color: #757575;
}
```

**Tip**: The lightest shade of gray you can use against a white background is #757575 or rgb(117, 117, 117).

The topic [Placeholders in form fields]({{site.baseurl}}/docs/topics/forms/input-label/placeholders/) explains how and when to use placeholders.

## Color contrast checkers

There are many tools to check color contrast ratios on a web page. WebAxe published an [overview of contrast checkers](https://www.webaxe.org/color-contrast-tools/). 

Populair tools are:

- [Online Contrast Checker](https://webaim.org/resources/contrastchecker/) by WebAIM.
- [Colour Contrast Analyser (CCA)](https://vispero.com/lp/color-contrast-checker/), Vispero’s free color contrast checker for Windows and Mac, includes text and visual elements for individuals with color-blindness or low vision impairments.
- [Background Image & Text Contrast Checker](https://www.brandwood.com/a11y/), by Andrew Brandwood.

### Color palette tools

It's helpful to have a color palette that shows you which color combinations provide sufficient contrast. There are various tools available to help with this.

Tools to help design or check complete color palettes:

- [Accessible Palette](https://accessiblepalette.com/) by Eugene Fedorenko.
- [Online Contrast Grid](https://contrast-grid.equalizedigital.com/) by Equalize Digital.
- [Color Contrast Grid for Figma variables](https://www.figma.com/community/plugin/1429041037045202727/color-contrast-grid-for-figma-variables) by Moritz Neugebauer.
- [Contrast Grid for Figma](https://www.figma.com/community/plugin/993414361395505148/contrast-grid) by Hiloki.

### Contrast of text checks in the WordPress Admin

In the block editor, a content manager can alter the colors of the text and the background in the content with the Typography settings. When setting a different color, the contrast is automatically checked, and when the contrast is too low, the warning appears: "This color has poor contrast against the background. Consider increasing contrast".

![Screenshot of the warning when changing the text of a paragraph into a light pink color.]({{site.baseurl}}/assets/images/color-contrast-warning.png)

Find more about the typography settings in the block editor in the [Typography Settings overview](https://wordpress.org/documentation/article/typography-settings-overview/) in the documentation on WordPress.org.

## Resources

{: .resource-h3}
### WCAG Success Criteria for color contrast

- [1.4.3 Contrast Minimum](https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum)(Level AA).
- [1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced) (Level **AAA**).
- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (Level AA).

{: .resource-h3}
### Related pages in this documentation

- [Sufficient color contrast of text and UI controls]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/sufficient-color-contrast/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Placeholders in form fields]({{site.baseurl}}/docs/topics/forms/input-label/placeholders/) in Frontend code, Web forms, Input and label.

{: .resource-h3}
### Other resources

- [Assistive Technology Experiment: High Contrast](https://webaim.org/blog/high-contrast/) by WebAIM.
- [Color Contrast And Why You Should Rethink It](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/) by Cathy O’ Connor on Smashing Magazine.
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), an open source color-blindness simulator for macOS and iOS.
- [Colorblind Web Page Filter](https://www.toptal.com/designers/colorfilter), a color-blindness emulating filter for a web page, by TopTal.
- [Accessible color palette generator](https://venngage.com/tools/accessible-color-palette-generator), a tool to generate accessible color palettes by Venngage.
