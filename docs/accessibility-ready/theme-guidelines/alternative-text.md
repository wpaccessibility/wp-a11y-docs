---
title: Alternative text on images and graphics
layout: default
parent: Theme accessibility-ready guidelines
description: Use of alternative text requirements for accessibility-ready themes
nav_order: 10
contributors:
   - Amber Hinds
   - Joe Dolson
redirect_from:
   - /docs/topics/theme-guidelines/alternative-text/
---

# Alternative text on images and graphics

## Basic principle

All non-text content must have an accessible name. Non-text content includes all font icons, images, SVG elements, non-standard usages of extended ASCII characters, or CSS used to construct interactive element graphics.

Different types of graphics require different implementations; the most common is the `img` element and the `alt` attribute. All graphics require some form of alternative text, however.

**Note:** This requirement does not mean "must have text"; it means "must be explicitly defined." An empty alt attribute specifically defines the alternative text for an image as empty. This is different from a *missing* alt attribute, which leaves alternative text undefined. Some icons and images may be decorative.

Decorative graphics may include:

* Graphics used purely ornamentally.  
* Supplemental graphics associated with links or buttons where the link or button has a name already defined.

## Testing

**Tools:** Browser inspector, screen reader (recommended)

1. For each non-text graphic, inspect the image using the browser inspector.  
2. In the inspector, determine whether the image has an accessible name.  
   1. If yes, determine whether the accessible name is appropriate.  
   2. If the image is inside a control, identify whether the control already has a name. If the control already has a name, this image may be decorative.  
   3. If the image is decorative, verify that it is hidden from screen readers. For `img` elements, this is done via `alt=""`. For font icons or extended ASCII, this is done using `aria-hidden="true"` on a wrapping element. The wrapping element must not be interactive. For `svg`, this is done using `aria-hidden="true"` on the `svg` element or a wrapping parent that is not interactive.  
3. Verify accessibility of extended ASCII characters if present.  
   1. Extended ASCII characters will not display text in the browser's accessibility inspector. Most characters have a standard reading value, but not all. If a theme uses ASCII characters in the design, use the article "[How Screen Readers read Special Characters](https://elevenways.be/en/articles/screenreaders-special-characters)" as a reference to know what the screen reader will say, or (recommended) listen to the element with a screen reader.  
   2. If the read text would not be appropriate in context, verify the character is wrapped in a `span` that either hides the character or provides it with a more appropriate `aria-label`, depending on context.

## WCAG resources

## Resources

{: .resource-h3}
### WCAG Success Criteria for alternative text on images and graphics

By giving a meaningful image the proper alternative text, you meet WCAG success criterion [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (level A).

{: .resource-h3}
### Related pages in this documentation

- [7 Quick wins]({{site.baseurl}}/docs/start/quick-wins/) in Start with accessibility.
- [Alternative text for images in the content]({{site.baseurl}}/docs/topics/content/alt-text/) in Content and images.
- [Images as links]({{site.baseurl}}/docs/topics/content/links/link-image/) in Content and images.
- [Alternative text for images, SVGs and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/) in Frontend code. 
