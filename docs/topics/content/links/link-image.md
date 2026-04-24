---
title: Images as links
layout: default
parent: Links
description: For linked images, the alt attribute (the alternative text) can be used as the link text.
nav_order: 3
contributors:
  - Joe Dolson
  - Rian Rietveld
---

# Images as links

For linked images, the `alt` attribute (the alternative text) is used as the link text. Screen readers will announce the alt text when the link gets focus.

If the alt attribute describes the image, the link text will be the description of the image, which is unlikely to clearly communicate the link purpose.

The post [Creating the perfect link](https://www.a11y-collective.com/blog/the-perfect-link/h-embedding-an-image-in-a-link) by The A11Y Collective gives an example of this.

> Take an image of a cherry tree, for instance: Normally the alternative text would be something like, “A cherry tree in full bloom”. But if the image serves as a link to Wikipedia about cherry blossoms, the alternative text will be:
“Wikipedia page on cherry blossoms”.

So the proper way to use an image as a link is to describe the link destination in the alt text. If the image links to a post about the Accessibility Team’s handbook, add the alternative text “Accessibility Team Handbook”.

It is not helpful to use the word ‘link’ or 'this link goes to' in your alt text; that will already be announced by the screen reader.

{: .callout .dont }
**Don't**: omit alt text for an image that is used as link.    

<a href="{{site.baseurl}}"><img src="{{site.baseurl}}/assets/images/logo-wa11ypuu.png" alt=""></a>

The screen reader VoiceOver announces this as: "**Link, link image**". So there is no information about where the link leads.

{: .callout .do }
**Do**: use the alt text as link text.

With alt text:      
<a href="{{site.baseurl}}"><img src="{{site.baseurl}}/assets/images/logo-wa11ypuu.png" alt="WP Accessibility Knowledge Base"></a>  

The screen reader VoiceOver announces this as: "**Link, image, WP Accessibility Knowledge Base**". The user now knows it's a link with an image, and the link leads to the WP Accessibility Knowledge Base.

Read [Alternative text for images in the content]({{site.baseurl}}/docs/topics/content/alt-text/) about how to add a custom alt text on an image in WordPress.

## Resources

### Related WCAG Success Criteria for links on images

By giving a meaningful image proper alternative text, you meet WCAG success criteria
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (level A).
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) (level A).
- [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only) (level **AAA**).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (level A).

### Other resources

- [Creating the perfect link](https://www.a11y-collective.com/blog/the-perfect-link/), by The A11Y Collective.
