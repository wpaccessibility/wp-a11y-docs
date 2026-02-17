---
title: Visual focus
layout: default
parent:  Focus handling
nav_order: 2
description: Make sure a keyboard focus is clearly visible while navigating through a web page.
---

# Visibility of the keyboard focus

Make sure a keyboard user clearly sees where the focus is while navigation through a web page. Without a visible focus, it is very easy for a sighted user to get lost and abandon the page.

There are two ways to show an interactive HTML element has keyboard focus:
- keep the outline of the browser intact;
- design your own outline or border.

## Keep the outline of the browser intact

Most modern browsers have strong default `:focus` styling, making it easy for a user to tab from control to control and see clearly where they are on the page. The advantage of keeping that outline is that you don't have to do anything. The browser handles it all. 

This also passes WCAG Success criterion 2.4.7 Focus Visible, as explained in [Technique G149: Using user interface components that are highlighted by the user agent when they receive focus](https://www.w3.org/WAI/WCAG22/Techniques/general/G149).

The disadvantage of using the native outline is that each browser displays the outline differently, and that outline may be hard to discover in your design.

## Design your own outline or border

A more reliable way to add an outline, is by designing your own. Then the visual representation is consistent and independent of the browser. This also gives you the opportunity to design the outline differently for dark and light mode. 

When you use a custom design, the color contrast criteria of WCAG apply. The color contrast the focus outline or border color should have a contrast ratio of at least 3:1. Against the background, but also against the background color of the focusable element itself. For example for a button or input field that has a custom background color.


Best practice is to follow WGAC [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) level AAA.

- The focus outline is at least 2px wide
- The focus outline color has a contrast ratio of at least 3:1

The topic [Styling hover and focus]({{site.baseurl}}/docs/topics/design/focus-hover/), in the section Design and user experience of this documentation, addresses the design guidelines of keyboard focus in more detail.

## CSS :focus-within

`:focus-visible` is a CSS pseudo-class that only applies focus styles when users navigate with the keyboard. Mouse users won’t see a focus outline when they click on an element.
Read more in [MDN: focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible).

```css
button:focus-visible {
    outline: 2px solid #757575;
}
```

## How to test for visual focus

Tab through your pages and check if the keyboard focus is visible.  If the visual focus indicator is created with custom CSS, check the color contrast. The color contrast the focus outline or border color should have a contrast ratio of at least 3:1. Against the background, but also against the background color of the focusable element itself.

How to test with a keyboard is described with [Keyboard navigation testing]({{site.baseurl}}/docs/testing/keyboard/) in this documentation.

## Examples

{: .dont .callout }
**Don't**: remove the outline without adding custom styling.

```css
button {
 outline: 0;
}
```

{: .do .callout }
**Do**: when you remove the outline, also add custom styling.

```css
button {
 outline: 0;
}

button:focus-visible {
    border: 2px solid #757575;
}

```

## Resources

### WCAG Success Criteria for visual focus

- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/quickref/#focus-visible), (Level AA).
- [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) (Level **AAA**).
- [1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (Level AA).

### Other resources

- [Beautiful focus outlines](https://medienbaecker.com/articles/focus-outlines) by Thomas Günther.
- [WCAG 2.2 misses mark on defining visible focus](https://yatil.net/blog/wcag22-visible-focus) by Eric Eggert.
- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) by Sara Soueidan.
- [Managing Focus and Visible Focus Indicators: Practical Accessibility Guidance for the Web](https://vispero.com/resources/managing-focus-and-visible-focus-indicators-practical-accessibility-guidance-for-the-web/) by Kirby Tucker.
