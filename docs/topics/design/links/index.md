---
title: Styling links
layout: default
parent: Design & user experience
description: When to underline links and when not.
nav_order: 3
contributors:
  - Joe Dolson
  - Rian Rietveld
---

# Styling links

Best practices for styling links are intended to ensure that links are easily distinguishable from other text on the page. This can be through the design of the link itself, or through the design and structure of the section containing the link, when the links are in a block of navigational content.

When creating styling for links, the following is best practice for usability and accessibility:

- Underlining links in **blocks of text** increases the usability of your website. On the web this is a universal convention that underlined text is a link. 
- **Grouped links** in sidebars, footers, or in navigation menus frequently don’t need to be underlined. If it is obvious in context that text is a link, underlining is not required.
- Use underlining of text **only** for links. Underlining makes people think your text is clickable; if they click it and nothing happens, they may be confused or frustrated.

Joe Dolson wrote [Why WordPress Themes Require Underlines on Links](https://www.joedolson.com/2025/10/why-wordpress-themes-require-underlines-on-links/) with the reasons why underlining is the best way to indicate links in the content.

For styling hover and focus states of links, read [Styling focus and hover states of interactive HTML elements]({{site.baseurl}}/docs/topics/design/focus-hover/).

When you create your underlining styles with CSS, make sure the underline has a color contrast ratio of at least 3:1 against its background color.

{: .callout .dont }
**Don't**: remove the underlining from links to only use color. Color-blind visitors (about 8% of the population) may miss the link.    
I love cats, so I watch <a href="#" style="text-decoration: none; color: darkgreen">cat videos</a> on YouTube.

{: .callout .do }
**Do**: underline links in the content, everyone gets that it's a link.     
I love cats, so I watch <a href="#" style="color: darkgreen">cat videos</a> on YouTube.

## Resources

### Related WCAG Success Criteria for styling links

- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/quickref/#use-of-color) (level A).
- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (level AA).

### Other resources

- [Underline Your Links!](https://theadminbar.com/accessibility-weekly/underline-your-links/), by Amber Hinds on the Admin Bar.
- [Why WordPress Themes Require Underlines on Links](https://www.joedolson.com/2025/10/why-wordpress-themes-require-underlines-on-links/), by Joe Dolson.
- [On Link Underlines](https://adrianroselli.com/2016/06/on-link-underlines.html), by Adrian Roselli.
- [Designing Better Links UX](https://smart-interface-design-patterns.com/articles/links-ux/) on Smart Interface Design Patterns.
- [Links and Hypertext - Underlining](https://webaim.org/techniques/hypertext/link_text#underlining), on WebAIM.
- [Guidelines for Visualizing Links](https://www.nngroup.com/articles/guidelines-for-visualizing-links/), by the NNGroup.
- [Link styling: Underline your links. Test with night mode. Test in greyscale](https://nicolas-steenhout.com/underline-your-links/), by Nic Steenhout.

