---
title: Fonts
layout: default
parent: Design & user experience
description: Visitors should be able to read and also adjust the text appearance without the use of assistive technology. Read what is important to offer readable and resizable fonts.
nav_order: 2
contributors:
  - Joe Dolson
  - Rian Rietveld
---

# Readable and adjustable fonts

Sighted visitors should be able to see, read, and understand the content on a webpage or view with ease. Additionally, they should be able to adjust the text appearance without the use of assistive technology.

For accessibility, it's important that a user should be able to: 

- **resize** only the text up to 200% or
- **zoom** in the whole view up to 400% or 
- change the **text style properties** like line height and spacing.

And do so without the loss of content and functionality. This means after resize, zoom or changing the text style properties, no text or focusable elements overlap or get unreachable for a mouse or keyboard. This is further explained in the text below.

For readability, it's important to provide fonts in sizes and shapes that are easy to read. WCAG 2 doesn't provide guidelines for font size or shape, but it's best practice to offer font that is easy to read.

{: .callout .info }
**Note**: Text should also have a good color contrast to be readable. The topic [Color contrast of text against its background]({{site.baseurl}}/docs/topics/design/color/color-contrast-text/) addresses this.

## Resize text and reflow

The difference between resize and reflow: resize addresses only the text itself, reflow is about the zooming whole view of a web page. 

Both can be executed by using Press `Ctrl +` (Windows) or `Cmd +` (Mac). How you zoom depends on the browser settings. How to test for resize and zoom in detail is described in [Support for reflow, resize, and text spacing changes]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/reflow-resize/) in the Theme guidelines for the WordPress accessibility-ready program.

### Resize text

The [WCAG guideline 1.4.4 for resizing text](https://www.w3.org/WAI/WCAG22/quickref/#resize-text) summarized: users must be able to double the font size without loss of content or functionality.

Exceptions are captions and images of text, although it's still a fail if the text in the image gets cut off. 

The quickest way to test this is by using the browser FireFox and in the toolbar select: View > Zoom > Check **Text only**. And the use `Ctrl +` (Windows) or `Cmd +` (Mac) to zoom in up to 200%.

### Reflow

The [WCAG guideline 1.4.10 for reflow](https://www.w3.org/WAI/WCAG22/quickref/#reflow) summarized: users must be able to zoom in up to 400% to enlarge the whole view without loss of content or functionality and without requiring scrolling in two dimensions.

This the most common way to enlarge text. Use `Ctrl +` (Windows) or `Cmd +` (Mac) to zoom in up to 400% to enlarge the whole view. Note: 400% is a lot.

Mostly, responsive websites handle this well, but check if no functionality gets lost, is hidden or overlapped by other elements. Don't assume these views only appear on mobile, users that are visually impaired may zoom in on a large screen.

### Multidimensional scrolling

Enlarging the font size or view can result in a horizontal scroll bar. Then the user has 2 scrollbars to handle, which can be hard to navigatie or understand. Avoid multidimensional scrolling. 

But there are exceptions. according to [Understanding SC 1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) by the W3C: 

> Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.

### Viewport

Always give the user the opportunity to scale the display themselves. So, never set the viewport to `user-scalable=no;` this setting prevents the user from using the browser’s zoom on mobile devices. Many mobile devices will ignore this meta setting because of its accessibility impact.

{: .callout .dont }
**Don't**: Prevent users to alter the text size in a webpage.
```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
```

{: .callout .do }
**Do**: Give users control of how they view text a webpage.
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Adjustable text style properties

Users may have their own settings and preferences for how text appears. These settings must be supported. No content or functionality may be lost. Some people need text with a different appearance. This includes people with visual impairments and people with dyslexia.

The following settings must be supported:

- Line height of at least 1.5 times the font size;
- Spacing between paragraphs of at least 2 times the font size;
- Letter spacing of at least 0.12 times the font size;
- Word spacing of at least 0.16 times the font size.

In practice: when a user adds custom CSS the content should adjust to this and still be readable. Like for example:

```css
{
    line-height: 1.5 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.16em !important;
}

p {
    margin-bottom: 2em !important;
} 
```

The common way to test this by viewing the webpage while using the [text spacing bookmarklet](https://codepen.io/stevef/full/YLMqbo) by Steven Faulkner. 

{: .callout .info :}
**Please note**: The website **doesn't** need to offer settings to customize this in a toolbar. The settings only need to be supported in the HTML/CSS, when the user sets them themselves.

How to test text spacing in detail is described in [Support for reflow, resize, and text spacing changes]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/reflow-resize/) in the Theme guidelines for the WordPress accessibility-ready program.

## Font size and shape

WCAG 2 doesn't provide guidelines for font size or shape, but it's best practice to offer font that is easy to read. 

One takeaway for choosing a good font: make sure there is a visual difference between:
- 0 (zero) and O (capital o),
- 1 (one), l, L (capital l) and I (capital i).

The topic [Readability]({{site.baseurl}}/docs/topics/content/readability/) in the Content and images section addresses best practice for Text style and layout. For example:

- Use **uppercase** carefully. Uppercase obscures the shape of the word and can make it harder to understand. Screen readers will announce some short words as abbreviations.
- Use **italic** and **bold** text carefully, as it interrupts the reading flow. If the information is important, think about making it stand alone.
- Use enough **line-height** and a large enough **font-size**. A font size of at least 16 pixels is works well for body copy.

### Relative units vs. absolute units

Whether a font size is defined in pixels, em, rem or % units for resizing doesn’t really matter. Modern browsers adequately resize text regardless of how the size has been defined.

There is much research and debate about whether text elements should be defined in pixels, em, rem or % units for resizing, and whether only the text or also other elements on a page should scale.

Operating systems, browsers and devices have various ways to enlarge text:

- with the OS settings,
- with assistive technology, like Zoom Text,
- browser settings to enlarge text,
- a plugin that changes the default text size,
- zoom in and out with they keys Control plus and minus in the browser,
- using your fingers on touch devices,
- reader view in browsers.

The WordPress Accessibility Team agrees with [WebAim on font size](http://webaim.org/techniques/fonts/):

> Relative font sizes (such as percents or ems) provide more flexibility in modifying the visual presentation compared to absolute units (such as pixels or points).

## Resources

{: .resource-h3}
### WCAG Success Criteria for text presentation

- [Success Criterion 1.4.4, Resize Text](https://www.w3.org/WAI/WCAG22/quickref/#resize-text) (Level AA).
- [Success Criterion 1.4.10, Reflow](https://www.w3.org/WAI/WCAG22/quickref/#reflow) (Level AA).
- [Success Criterion 1.4.12, Text Spacing](https://www.w3.org/WAI/WCAG22/quickref/#text-spacing) (Level AA).

{: .resource-h3}
### Related pages in this documentation

- [Support for reflow, resize, and text spacing changes]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/reflow-resize/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Readability]({{site.baseurl}}/docs/topics/content/readability/) in Standards and best practice, Content and images.

{: .resource-h3}
### Other resources

- [Typefaces and Fonts](https://webaim.org/techniques/fonts/) by WebAIM.
- [Ultimate Guide: EM vs REM vs PX Which Is Better & Why?](https://www.fhoke.com/em-vs-rem-vs-px/) by Seb Kay for Fhoke.
- [Visual principles](https://developers.google.com/cars/design/design-foundations/visual-principles#make_content_easy_to_read) by Google.
- [Accessible Fonts: How to Choose the Best Ones](https://venngage.com/blog/accessible-fonts/) by Jennifer Gaskin for Venngage.
