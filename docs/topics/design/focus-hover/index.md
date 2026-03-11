---
title: Styling hover and focus
layout: default
parent: Design & user experience
description: How to style focus and hover states of interactive HTML elements.
nav_order: 3
---

# Styling focus and hover states of interactive HTML elements

Design interactive HTML elements so keyboard users can always clearly see which element is currently has the **focus** as they tab through the page. 

For mouse users a clear **hover** state, next to the pointer changing into a hand, is helpful and regarded best practice and not a WCAG requirement.

WCAG 2.2 AA doesn’t require visual hover or focus states other than the browser defaults. But if a custom design for hover or focus state is provided, it must meet accessibility requirements.

The styling of the hover and focus state can be the same but doesn't have to.

## Option 1: Use the default focus outline of the browser

The advantage of keeping that the default focus outline is that you don’t have to do anything.

The disadvantage is that each browser displays this outline differently, and that it may be hard to discover in your design. Adrian Roselli gives a clear explanation about this in [Avoid Default Browser Focus Styles](https://adrianroselli.com/2017/02/avoid-default-browser-focus-styles.html)

## Option 2: Design your own outline or border

A more reliable way to add an outline or border of hover or focus is by designing your own. Then the visual representation is consistent and independent of the browser. This also gives you the opportunity to design the states differently for dark and light mode.

### Guidelines for custom hover and focus styles

The color contrast the custom focus or hover indicator should have a contrast ratio of at least 3:1. Against the background, but also against the background color of the focusable element itself. For example, for a button or input field that has a custom background color.

Best practice is to follow [WGAC 2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance)] level **AAA**.

Provide the outline or border with:

- a thickness of at least 2 [CSS pixels](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel);
- a color contrast ratio of at least 3:1 against adjacent colors;
- a color contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.

Another option is to skip the outline and instead change the color of the entire element. For example, a button that changes color when it receives keyboard focus. In this case as well, there must be a color contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states. 

Make sure that the text inside the element always must have a color contrast ratio of at least 4.5:1 against its background color.

{: .info .callout }
The topic [Visibility of the keyboard focus]({{site.baseurl}}/docs/topics/code/focus-handling/visual-focus/), in the section Frontend code of this documentation, addresses the CSS and possibilities of styling keyboard focus in more detail.

## Resources

### WCAG Success Criteria for visual focus

- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/quickref/#focus-visible), (Level AA).
- [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) (Level **AAA**).
- [1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (Level AA).

### Other resources

- [Beautiful focus outlines](https://medienbaecker.com/articles/focus-outlines) by Thomas Günther.
- [WCAG 2.2 misses the mark on defining visible focus](https://yatil.net/blog/wcag22-visible-focus) by Eric Eggert.
- [Avoid Default Browser Focus Styles](https://adrianroselli.com/2017/02/avoid-default-browser-focus-styles.html) by Adrian Roselli.
- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) by Sara Soueidan.
- [Managing Focus and Visible Focus Indicators: Practical Accessibility Guidance for the Web](https://vispero.com/resources/managing-focus-and-visible-focus-indicators-practical-accessibility-guidance-for-the-web/) by Kirby Tucker.

