---
title: Images as links
layout: default
parent: Links
nav_order: 3
---

# Images as links

{: .callout .alert }
This content will be reviewed, restructured and expanded.
Related issue on [GitHub #117 Topic Images as links](https://github.com/wpaccessibility/wp-a11y-docs/issues/117).  

For linked images, the `alt` attribute (the alternative text) will be the link text.

- If the alt attribute describes the image: the link text will be the description of the image, which is unlikely to clearly communicate the link purpose.
- If there is no alt attribute: the link text will be the image file name.
- If there is an Empty alt attribute: the link will have no link text and will be announced as “link”.

So the proper way to use an image as a link is to describe the link destination in the alt text. If the image links to a post about the Accessibility Team’s handbook, add the alternative text “Accessibility Team Handbook”.

It is not necessary to ever use the word ‘link’ in your alt text; that will already be announced by the screen reader.
