---
title: Fonts
layout: default
parent: Design & user experience
nav_order: 2
---

# Fonts

{: .callout .alert }
This content will be reviewed and restructured and probably divided into separate topics.
Related issue on [GitHub #124 Topic Fonts](https://github.com/wpaccessibility/wp-a11y-docs/issues/124).  

## Font sizes and resize text

The [WCAG 2.0 requirements](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html) for resizing text are quite loose:

> Resize text: Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality. (Level AA).  
[Success Criterion 1.4.4, Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)

In [WCAG 2.1](https://www.w3.org/TR/WCAG21/), there is an additional requirement for text size:

> Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:
> - Vertical scrolling content at a width equivalent to 320 [CSS pixels](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html#dfn-css-pixel);
> - Horizontal scrolling content at a height equivalent to 256 [CSS pixels](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html#dfn-css-pixel).Except for parts of the content which require two-dimensional layout for usage or meaning.
    > [Success Criterion 1.4.10, Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

Success Criterion 1.4.10 impacts font resizing because increases of font size must not trigger multidimensional scrolling.

## Best practice

- **Text can be enlarged** without text becoming unreadable or hidden.
- **Line heights and overflows**: test this with various browsers and screen widths.
- **Start with a reasonable font size**. A font size of at least 16 pixels is works well for body copy.
- **How to define font size is no big deal**. Whether a font size is defined in pixels, rem, rem or % units for resizing doesn’t really matter. Modern browsers adequately resize text regardless of how the size has been defined.

### Relative units vs. absolute units

There is much research and debate about whether text elements should be defined in pixels, em, rem or % units for resizing, and whether only the text or also other elements on a page should scale.

Operating systems, browsers and devices have various ways to enlarge text:

- with the OS settings
- with assistive technology, like Zoom Text
- browser settings to enlarge text
- a plugin that changes the default text size
- zoom in and out with they keys Control plus and minus in the browser
- using your fingers on touch devices
- reader view in browsers

The WordPress Accessibility Team agrees with [WebAim on font size](http://webaim.org/techniques/fonts/#font_size):

> For development purposes, it is best to use relative units (such as percentages or ems) to specify font sizes rather than absolute units (such as pixels or points). This provides much flexibility in modifying the visual presentation using CSS. For accessibility, because modern browsers adequately resize text regardless of how the size has been defined, it is not vital that text sizes be defined in relative sizes.

### Viewport

- Always give the user the opportunity to scale the display.
- Never set the viewport to user-scalable=no; this setting prevents the user from using the browser’s zoom on mobile devices. Many mobile devices will ignore this meta setting because of its accessibility impact.

## Resources

### The px/rem/em debate

- [Is text sizing dead?](https://alastairc.ac/2017/11/is-text-sizing-dead/)
- [R.I.P. REM, Viva CSS Reference Pixel!](https://mindtheshift.wordpress.com/2015/04/02/r-i-p-rem-viva-css-reference-pixel/)
- [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/)

### On readability

- [Use Legible Font Sizes by Google](https://developers.google.com/speed/docs/insights/UseLegibleFontSizes)
- [Your Body Text Is Too Small](https://blog.marvelapp.com/body-text-small/)
- [Internet is becoming unreadable because of a trend towards lighter, thinner fonts](http://www.telegraph.co.uk/science/2016/10/23/internet-is-becoming-unreadable-because-of-a-trend-towards-light/)
- [16 Pixels Font Size: For Body Copy. Anything Less Is A Costly Mistake](https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/)

### On Viewport

- [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [The meta element on developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)




