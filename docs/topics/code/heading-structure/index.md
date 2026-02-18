---
title: Heading structure
layout: default
parent: Frontend code
description: How to insert headings in your content and make them accessible.
nav_order: 3
---

# Heading structure in theme development

Headings are the backbone of your content structure and describe the content on a webpage. Good headings also make the site easier to scan. As sighted users, we’re accustomed to seeing sections of content broken up using various font sizes that highlight groups of related content.

Visually, it only matters that these are set off in design. Using appropriate heading levels is the screen reader equivalent of good visual design: if headings are not present, then all the text is undifferentiated – if headings are used inappropriately, then content doesn’t make sense.

## Rules of thumb for headings in theme development:

- One unique H1 per page, post or archive that describes the primary topic of the page. In most themes, this is the post -, page – or archive title.
- Use H2 through H6 to divide major sections of the page, such as widget areas, comment sections, or other major segments of the page.
- Use headings in a logical and hierarchical structure.

Use HTML headings to meaningfully describe the content that follows, not as a design element. A heading means “this text describes the information that follows it.” There should not be text before the heading that is part of what that heading describes, and there must be content following the heading.

{: .callout .info }
**Note**: If you use a headings validation tool, a warning may pop up when the first heading is not an H1. This only applies when your web page needs to comply with WCAG 2 AAA (triple A). The global web standard is WCAG 2 AA (double A) and starting with an H2 (for e.g. the navigation) is allowed at the AA standard.

## Resources

### Testing tools for headings

- [WAVE](http://wave.webaim.org/extension/)
- [Headings map for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en)
- [a11yTools Extension for Safari macOS](http://www.pauljadam.com/extension.html)
- [Tota11y](http://khan.github.io/tota11y/)

### Heading semantics

- [Semantic Structure on WebAIM](https://webaim.org/techniques/semanticstructure/)
- [The HTML5 Document Outline](https://developer.paciellogroup.com/blog/2013/10/html5-document-outline/)
- [Heading Tags (H1, H2, H3, P) in HTML](http://accessibility.psu.edu/headingshtml/)
- [Computer says NO to HTML5 document outline](http://html5doctor.com/computer-says-no-to-html5-document-outline/)

### Heading structure best practices

- [Web Accessibility Tutorials: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Web Accessibility Tutorials: Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)
- [Web Page Mistakes: Heading Structure – Heading Tag](http://www.webpagemistakes.ca/heading-structure-heading-tag/)
- [Nomensa: How to structure headings for web accessibility](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility)
- [Using headings to improve accessibility (Drupal)](https://www.drupal.org/docs/7/creating-accessible-themes/using-headings-to-improve-accessibility). Note class=”element-invisible” is in WP class=”screen-reader-text”
- [MRW web: H1 Headings Are Important](https://mrwweb.com/use-html-headings-for-accessibility/)
- [MRW web: Common heading-mistakes](https://mrwweb.com/common-heading-mistakes/)

### Heading structure in WordPress

- [The Headings Hierarchy Challenge](https://www.joedolson.com/2014/11/headings-hierarchy-problem/)
- [Accessible HTML5 heading structure in WordPress](http://rianrietveld.com/2014/11/21/html5-headings-in-wordpress-lets-fight/)
