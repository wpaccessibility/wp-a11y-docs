---
title: Images as links
layout: default
parent: Links
description: For linked images, the alt attribute (the alternative text) can be used as the link text.
nav_order: 3
---

# Images as links

For linked images, the `alt` attribute (the alternative text) can be used as the link text.
If the alt attribute describes the image: the link text will be the description of the image, which is unlikely to clearly communicate the link purpose.

The post [Creating the perfect link](https://www.a11y-collective.com/blog/the-perfect-link/h-embedding-an-image-in-a-link) by The A11Y Collective gives an example of this.

> Take an image of a cherry tree, for instance: Normally the alternative text would be something like, “A cherry tree in full bloom”. But if the image serves as a link to Wikipedia about cherry blossoms, the alternative text will be:
“Wikipedia page on cherry blossoms”.

So the proper way to use an image as a link is to describe the link destination in the alt text. If the image links to a post about the Accessibility Team’s handbook, add the alternative text “Accessibility Team Handbook”.

It is not necessary to ever use the word ‘link’ or 'this link goes to' in your alt text; that will already be sufficient announced by the screen reader.

## Resources

### Related WCAG Success Criteria for links on images

By giving a meaningful image a proper alternative text, you meet WCAG success criteria
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (level A).
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) (level A).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (level A).
