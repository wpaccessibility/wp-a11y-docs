---
title: Images
layout: default
parent: Images and animations
nav_order: 2
---

# Images in theme development

{: .warning }
**TODO:**
This content should be reviewed and restructured.


You may think that you’re not including any images in your project. Possibly this is true; but are you using [dashicons](https://developer.wordpress.org/resource/dashicons/) or other icon fonts? Are you using SVG graphics?

For accessibility, “images” doesn’t only refer to the `img` element. It means any non-text graphical elements on the page.

This is particularly crucial if you’re using images to represent controls – a hamburger menu icon, an arrow, or a plus or minus icon. These images are used to represent information.

All of these images require accessibility considerations. The W3C offers a [useful decision tree to help you decide](https://www.w3.org/WAI/tutorials/images/decision-tree/) what kind of text you need for an image. If your image is conveying information or activating a control, it’s going to need some form of accessible name.

Making an image accessible doesn’t necessarily mean ensuring that it is named, however. If an image is the sole presentation of data, then it needs to be named. If it is supplemental, and that same information is presented in text, then it should be hidden from screen readers.

- [Accessible SVGS from CSS Tricks](https://css-tricks.com/accessible-svgs/)
- [Font Icon accessibility from Font Awesome](https://fontawesome.com/docs/web/dig-deeper/accessibility)
