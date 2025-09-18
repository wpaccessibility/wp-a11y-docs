---
title: Use of color
layout: default
parent: Color
nav_order: 4
---

# Using color

{: .alert }
This content needs to be reviewed and restructured.
Related issue on [GitHub #130 Topic Color Use of color](https://github.com/wpaccessibility/wp-a11y-docs/issues/130).  
If you want to work on this, please let us know before you start.

Using color to differentiate between elements on a page is fine. However, you should avoid using color as the only visual means to differentiate parts of a page. For example,

- error, success, or note messages
- links in the content
- active, hover or focus states
- display information updates

Use additional styling to indicate types of information including a change of shape or decoration. For example:

- Change symbols in addition to color
- Underline links that are embedded in text

Grouped links in sidebars, footers, or in navigation menus frequently don’t need to be underlined. If it is obvious in context that the text is a link, underlines are not required. However, in many cases underlining can increase the usability of your website.

## Examples

### Correct

Underline your links, which are placed between text.

Undelined links are easier to see.
![underlined links in body text](../../assets/Bildschirmfoto-2017-08-05-um-15.01.29-768x497.png)


Use symbols and colors in graphics.

Graphic with differently shaped symbols in black in white.
![graphic in color with differently shaped symbols](../../assets/Bildschirmfoto-2017-08-16-um-10.27.20-768x588.png)
![Graphic with differently shaped symbols in black in white](../../assets/Bildschirmfoto-2017-08-16-um-10.33.58-Kopie-768x629.png)



### Incorrect

Links not underlined – color blind users may have trouble distinguish links from text.

Can you see the links now?
![Links are not seen on grey scale when there is no underline](../../assets/grey-scale-links.png)

Color used as the only indicator for information or functionality
![Graphic: only color used (no symbols)](../../assets/Bildschirmfoto-2017-08-16-um-10.34.46-768x646.png)
![Graphic: only color used (in black and white)](../../assets/Bildschirmfoto-2017-08-16-um-10.34.46-Kopie-768x646.png)

The easiest way to check whether your website is usable for colorblind people is to test it in grayscale. When the color information is extracted, you can more easily see whether your website is still understandable.

