---
title: Design checks
layout: default
parent: Test for accessibility
description: Learn about some design checks you can do to enhance accessibility.
nav_order: 4
contributors:
  - Joe Dolson
  - Rian Rietveld
---


# Design checks for web accessibility

The most common design elements to check for are color contrast between text / background and the use of color to present information. But these aren’t the only things to take into consideration to improve your design.

Read the detailed documentation accessible design in [Design and user experience]({{site.baseurl}}/docs/topics/design/) in the section Standard and best practice of this documentation.

Listed below are the major issues to address. 

## Color contrast

Check the color contrast ratio between **text** and its **background**. The guideline in WCAG 2.2 AA guidelines is: 
- the color contrast ratio between text and background must be 4.5 or more for normal text and 
- 3.1 or more for text of at least 24 pixels or 19 pixels bold.

Text in logos and logotypes are excluded from this guideline.

**Non-text elements** that have meaning should have a color contrast of 3.1 or more against its **background**.
For example: icons used functionally or informationally, borders of input fields, checkboxes or radio buttons.
Also check for different states (light/dark mode, checked, not checked, etc.). All states must have a color contrast of 3.1 or more.

Documentation about color contrast: [Color contrast of text against its background]({{site.baseurl}}/docs/topics/design/color/color-contrast-text/) in Standards and best practice: Design and user experience.

### Popular color contrast checkers

- [Figma Contrast Plugin](https://www.figma.com/community/plugin/748533339900865323).
- [Figma Color Contrast Checker Plugin](https://www.figma.com/color-contrast-checker/).
- [Figma WCAG Plugin](https://www.figma.com/community/plugin/1373362852131056921/wcag-plugin).
- [Colour Contrast Analyser (CCA)](https://vispero.com/lp/color-contrast-checker/), Vispero’s free color contrast checker for Windows and Mac, includes text and visual elements for individuals with color-blindness or low vision impairments.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- [contrastchecker.com](https://contrastchecker.com/) (Online) — checks foreground/background contrast levels and also gives information on the accessibility levels of the contrast.

## Not by color alone

Functionality must also be understandable for people who cannot see colors.

- Don’t depend on color for meaning. It’s fine to use color, as long as that isn’t the only identifying characteristic.
- Links in text must stand out as links, so keep them underlined.
- Use clear hover and focus states, not depending on color alone.
- Don’t indicate errors in forms only using text color, borders, or backgrounds. Include clear text messages as well.

Related documentation: 
- [Use of color]({{site.baseurl}}/docs/topics/design/color/use-of-color/), in Standard and best practice: Design and user experience.
- [Styling focus and hover states of interactive HTML elements]({{site.baseurl}}/docs/topics/design/focus-hover/), in Standard and best practice: Design and user experience.
- [Styling links]({{site.baseurl}}/docs/topics/design/links/), in Standard and best practice: Design and user experience.
- [Write out an error message in text]({{site.baseurl}}/docs/topics/forms/feedback/error-message-format/), in Standard and best practice: Web forms

### Color-blindness checks and tools:

- Look at your design by removing all colors, viewed only in grayscale. Can you still understand it?
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), a macOS app tool for color-blindness check.
- [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/), color-blindness simulator by Colblindor.

## Readability

Please note: these are recommendations and not WCAG 2.2 AA requirements:

- Break text into hierarchical headings (H1, H2, H3).
- Avoid all uppercase for headings or paragraphs of text.
- Use a readable font for the main or important text. Handwritten fonts are harder to read.
- Use a minimum font size of 16 pixels.
- Align text to the left or right, avoiding full or center justified text.
- Avoid large blocks of text. Use short paragraphs, headings, and lists to divide the information.

Related documentation: 
- [Headings with meaningful structure]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/headings-structure/) in Theme guidelines for the WordPress accessibility-ready program.
- [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/) in Standards and best Practices: Content and images.
- [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/) in Standards and best Practices: Frontend code.
- [Readability]({{site.baseurl}}/docs/topics/content/readability/), in Standard and best practice: Content and images.

{: .callout .info}
Note: The Web Content Accessibility Guidelines at level **AA** don't address readability. Decent readability is considered a recommendation. However, WCAG 2.2 Level **AAA** has four success criteria for readability: [3.1.3 Unusual Words](https://www.w3.org/WAI/WCAG22/quickref/#unusual-words), [3.1.4 Abbreviations](https://www.w3.org/WAI/WCAG22/quickref/#abbreviations), [3.1.5 Reading level](https://www.w3.org/WAI/WCAG22/quickref/#reading-level), [3.1.6 Pronunciation](https://www.w3.org/WAI/WCAG22/quickref/#pronunciation).

## Proximity

Keep together what belongs together: place related links or controls near each other. For example, place "Save" and "Cancel" buttons next to each other, rather than on opposite sides of the interface.

Make the order of content logical when read from the top down. For example, do not put required check boxes below the Submit button in a form.

## Animation

- Users must be able to pause animations, or the animations must automatically stop after 3 seconds
- Avoid using too many elements that distract the user from reading the text or using the navigation.

Related documentation: 
- [Image animation and accessibility]({{site.baseurl}}/docs/topics/code/images/image-animation/) in Frontend code
- [Accessible audio, video, and animations]({{site.baseurl}}/docs/topics/content/audio-video-and-animations/).
