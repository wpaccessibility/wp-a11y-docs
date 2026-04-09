---
title: Heading structure
layout: default
parent: Frontend code
description: How to use headings in theme development in an accessible way.
nav_order: 3
---

# Heading structure in theme development

Headings are the backbone of your content structure and describe the content on a webpage. Good headings also make the site easier to scan. Sighted users are accustomed to seeing sections of content broken up using various font sizes that highlight groups of related content.

Visually, it only matters that these are set off in design. Using appropriate heading levels is the screen reader equivalent of good visual design: if headings are not present, then all the text is undifferentiated – if headings are used inappropriately, then content doesn’t make sense.

{: .info .callout }
How to use headings in the editor is addressed in the “Content and images” section [Using headings in content]({{site.baseurl}}/docs/topics/content/headings/).

## Rules of thumb for headings in theme development

- One unique H1 per page, post or archive that describes the primary topic of the page. In most themes, this is the post, page, or archive title.
- Use H2 through H6 to divide major sections of the page, such as widget areas, comment sections, or other major segments of the page.
- Use headings in a logical and hierarchical structure.
- Do not skip a heading level. 
- Use headings to meaningfully describe the content that follows, not as a design element.

WPBeginner published a practical guide on headings for WordPress: [How to Properly Use Heading Tags in WordPress (H1-H6 Explained)](https://wp-coder.net/blog/how-to-properly-use-heading-tags-in-wordpress-explained/). The guide also addresses the impact of a good heading structure on SEO.

### Sections and headings

The obsolete practice of using an H1 for each `<section>`  harms accessibility, as the algorithm to structure the document outline was never implemented. If everything is an H1, there is no indication about what the main content is about. Read more about this in [Computer says NO to HTML5 document outline](http://html5doctor.com/computer-says-no-to-html5-document-outline/) by Steve Faulkner.

If you want to give a section an [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/), use `aria-labelledby`, linking the heading to the section. For example:
```html
<section aria-labelledby="news-heading">
  <h2 id="news-heading">The latest news</h2>
    [...]
</section>
```

### Heading levels in components depend on context

Take extra care when including a heading in a component or block. The heading level may depend on the way or location a component is included in the page. 

Make it possible to change a heading level based on the semantics of the heading structure on that specific web page. A widget may need a different heading level in the sidebar than when it's used in the content.

## How to test for a proper heading structure

Use the browser tool **HeadingsMap** to test the heading structure of an entire web page:
- [Headings Map toolbar for Edge](https://microsoftedge.microsoft.com/addons/detail/headingsmap/bokekiiaddinealohkmhjcgfanndmcgo)
- [Headings Map toolbar for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en)
- [Headings Map toolbar for Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

Are you testing the heading structure for an accessibility-ready WordPress theme? Please follow the testing procedure outlined in the Theme Accessibility Guidelines under [Headings with meaningful structure]({{site.baseurl}}/docs/topics/theme-guidelines/headings-structure/).

{: .callout .info }
**Note**: If you use a headings validation tool, a warning may pop up when the first heading is not an H1. This only applies when your web page needs to comply with WCAG 2 AAA (triple A). The global web standard is WCAG 2 AA (double A) and starting with an H2 (such as in the navigation) is allowed at the AA standard.

## Resources

### WCAG Success Criteria for the heading structure

Using a meaningful heading structure is necessary to meet the WCAG success criteria:

- [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels) (Level AA).
- [WCAG 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG22/quickref/#section-headings) (**Level AAA**).

### Other resources

#### Heading structure in WordPress

- [How to Properly Use Heading Tags in WordPress (H1-H6 Explained)](https://www.wpbeginner.com/wp-tutorials/how-to-properly-use-heading-tags-in-wordpress-explained/) by WPBeginner.
- [The Heading Block](https://wordpress.org/documentation/article/heading-block/) on WordPress.org

#### Resources on heading semantics

- [Semantic Structure on WebAIM](https://webaim.org/techniques/semanticstructure/), by WebAIM.
- [Web Accessibility Tutorials: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/), by the W3C.
- [The HTML5 Document Outline](https://developer.paciellogroup.com/blog/2013/10/html5-document-outline/) by Steven Faulkner. 
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/) by Rian Rietveld on the A11y Project.

#### Heading structure best practices

- [Web Accessibility Tutorials: Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby), by the W3C.
- [MRW web: Common heading-mistakes](https://mrwweb.com/common-heading-mistakes/), by Mark Root-Wiley.
