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

The most common design elements to check for are color contrast between text / background and the meaning of color to give information. But these aren’t the only things to take into consideration to improve your design.

Read the detailed documentation accessible design in [Design and user experience]({{site.baseurl}}/docs/topics/design/) in the section Standard and best practice of this documentation.

Listed below are the major issues to address. 

## Color contrast of text

Check the color contrast ratio between **text** and its **background**. The rules in WCAG 2.2 AA guidelines are: Color contrast ratio between text and background must be 4.5 or more for normal text and 3.1 or more for text of at least 24 pixels or 19 pixels bold.

Logos and logotype are exceptions to accessibility guidelines, including color contrast rules.

Documentation about color contrast: [Color contrast of text against its background]({{site.baseurl}}/docs/topics/design/color/color-contrast-text/).

### Populair color contrast checkers

- [WebAIM Contrast Checker](http://webaim.org/resources/contrastchecker/).
- [contrastchecker.com](http://contrastchecker.com/) (Online) — checks foreground/background contrast levels and also gives information on the accessibility levels of the contrast.
- [Colour Contrast Analyser (CCA)](http://www.paciellogroup.com/resources/contrastAnalyser), Vispero’s free color contrast checker for Windows and Mac, includes text and visual elements for individuals with color-blindness or low vision impairments.
- [Background Image & Text Contrast Checker](http://www.brandwood.com/a11y/), by Andrew Brandwood.

## Not by color alone

Functionality must be understandable also for people who can not see colors.

- Don’t depend on color for meaning. It’s fine to use color, as long as that isn’t the only identifying characteristic.
- Links in text must stand out as links, make them underlined.
- Use clear hover and focus states, not depending on color alone.
- Error messages in forms: don’t indicate errors only using text color, borders, or backgrounds; include clear text messages as well.

Related documentation: 
- [Use of color]({{site.baseurl}}/docs/topics/design/color/use-of-color/).
- [Styling focus and hover states of interactive HTML elements]({{site.baseurl}}/docs/topics/design/focus-hover/).
- [Styling links]({{site.baseurl}}/docs/topics/design/links/).
- [Write out an error message in text]({{site.baseurl}}/docs/topics/forms/feedback/error-message-format/).

### Color-blindness checks and tools:

- Look at your design only in gray scale colors, remove all color. Can you still understand it?
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), macOS app tool for color-blindness check.
- [Coblis](http://www.color-blindness.com/coblis-color-blindness-simulator/), color-blindness simulator by Colblindor.

## Readability

Please note: these are recommendations and not WCAG 2.2 AA requirements:

- Break text into hierarchical headings (H1, H2, H3).
- Avoid all uppercase for headings or paragraph of text.
- Use a readable font for the main or important text. Handwritten font is harder to read.
- Use a font size of 16 pixels minimum.
- Align text to the left or right, avoiding justified text.
- Avoid large blocks of text. Use short paragraphs, headings and lists to divide the information.

Related documentation: [Readability]({{site.baseurl}}/docs/topics/content/readability/).

## Proximity

Keep together what belongs together: place related links or controls near each other.

Make the order of things logical when you read from the read from the top down. For example, do not put required check boxes below the submit button in a form.

## Animation

- Users must be able to pause animations, or the animations must automatically stop after 3 seconds
- Avoid using too many elements that distract the user from reading the text or using the navigation.
