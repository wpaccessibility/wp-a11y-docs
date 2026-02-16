---
title: Design checks
layout: default
parent: Checklists
description: Find what design checks you can do to enhance accessibility.
nav_order: 4
---


# Design checks for web accessibility

The most common design elements to check for are color contrast between text / background and the meaning of color to give information. But these aren’t the only things to take into consideration to improve your design.

Here are a few major issues to address. At the end of the page you’ll find links to good resources with more examples and solutions.

## Color contrast

Check the color contrast ratio between text and its background. The rules in WCAG 2 AA guidelines are: Color contrast ratio between text and background must be 4.5 or more for normal text and 3.1 or more for text of at least 24 pixels or 19 pixels bold.

There are many tools to calculate this easily, see [Color contrast checkers](http://www.webaxe.org/color-contrast-tools/).

{: .callout  .tip }
**Tip:** Logos and logotype are frequently exceptions to accessibility guidelines, including color contrast rules. If you’re designing a new logo, however, it might be a good idea to consider them, anyway.

## Color Contrast

- [contrastchecker.com](http://contrastchecker.com/) (Online) — checks foreground/background contrast levels and also gives information on the accessibility levels of the contrast
- [Color Contrast Analyser](http://www.paciellogroup.com/resources/contrastAnalyser) (Windows and OSX)– checks foreground/background contrast levels and preview designs as they might be seen by color blind users.
- [Sim Daltonism](http://michelf.ca/projects/sim-daltonism/) — a color blindness simulator for Mac OS X.
- [Colorblind Web Page Filter](https://www.toptal.com/designers/colorfilter) — apply a color blindness emulating filter to a web page.
- [Color Palette Accessibility Evaluator](http://accessibility.oit.ncsu.edu/tools/color-contrast/index.php) — analyze color combinations for conformance to accessibility guidelines.


## Not by color alone

- [Don’t depend on color for meaning](https://make.wordpress.org/accessibility/handbook/best-practices/design/use-of-color/) – it’s fine to use color, as long as that isn’t the only identifying characteristic
- Links in text must stand out as links, make them underlined
- Error messages in forms: don’t indicate errors only using text color, borders, or backgrounds; include clear text messages or icons, as well.

### Color blindness check tools:

- Look at your design only in grey scale colors, remove all color. Can you still understand it?
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) tool for color blindness check.
- [Coblis](http://www.color-blindness.com/coblis-color-blindness-simulator/) – Color Blindness Simulator

## Not by icon alone

Add text with icons, if they are an essential part of the functionality. Make sure interactive elements such as navigation menus are labelled correctly. Not every user understands the icons (hamburgers) that are obvious to you.

## For users with dyslexia

- No large blocks of text, e.g. use short paragraphs, headings and lists to divide the information
- Uppercase font is harder to read
- Handwritten font is harder to read
- A font size of 16 pixels minimum, is best for most devices
- Make the line height not too small

## For users with limited vision

Keep together what belongs together: place related links or controls near each other.

Some people don’t have an overview of everything that’s on a page, like [people with glaucoma](https://www.aao.org/newsroom/news-releases/detail/probability-of-blindness-from-glaucoma-has-nearly-). Don’t make them search for a submit button that’s on the bottom right, while the input fields is on the top left, for example.

Make the order of things logical, most users read from top to bottom. For example, do not put required check boxes below the submit button in a form.

## For users with an attention disorder

- Users must be able to pause animations, or the animations must automatically stop after 3 seconds
- Avoid using too many elements that distract the user from reading the text or using the navigation.

## Resources

- Section [Use of color](https://make.wordpress.org/accessibility/handbook/best-practices/design/use-of-color/) in this handbook
- [Inclusive Components](https://inclusive-components.design/)
- [Inclusive Design Patterns – Heydon Pickering](https://shop.smashingmagazine.com/products/inclusive-design-patterns)
- [Inclusive Design Checklist – Heydon Pickering](https://github.com/Heydon/inclusive-design-checklist)
- [Web Accessibility for Designers](https://webaim.org/resources/designers/)
- [Accessible design: a process](https://humanmade.com/2017/11/09/accessible-design-a-process/)
- [7 Things Every Designer Needs to Know about Accessibility – Jesse Hausler](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b)
- [Tips for Getting Started Designing for Web Accessibility – W3C](https://www.w3.org/WAI/tips/designing/)
- [Writing accessible content – Sami Keijonen](https://foxland.fi/writing-accessible-content/)
- [6 Principles Of Visual Accessibility Design – Jenna Erickson](https://usabilitygeek.com/6-principles-visual-accessibility-design/https:/usabilitygeek.com/6-principles-visual-accessibility-design/)
- [Designing for Accessibility, Step 1: Color Contrast – Neil Shankar](https://uxdesign.cc/the-easiest-part-about-designing-accessible-websites-76cd6b9a7ae4?gi=ffa6b3378eb0)
- [Accessible Design – Maja Benke (presentation)](https://wordpress.tv/2017/09/27/maja-benke-accessible-design/)
- [Accessibility for everyone – Laura Kalbag (book)](https://abookapart.com/products/accessibility-for-everyone)
- [WebAIM: on fonts](https://webaim.org/techniques/fonts/)
- [Pennsylvania State University: about Font Face](http://accessibility.psu.edu/legibility/fontface/)

## Related posts

- [Test for web accessibility: introduction](https://make.wordpress.org/accessibility/handbook/best-practices/test-for-web-accessibility/)
- [Test for web accessibility: content](https://make.wordpress.org/accessibility/handbook/best-practices/test-for-web-accessibility-content/)
- [Test for web accessibility: frontend code (DOM)](https://make.wordpress.org/accessibility/handbook/best-practices/test-for-web-accessibility/test-for-web-accessibility-frontend-code/)
