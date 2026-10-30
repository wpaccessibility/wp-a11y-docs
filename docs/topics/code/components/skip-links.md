---
title: Skip links
layout: default
parent: Components
description: How to set up an accessible skip link.
nav_order: 2
contributors:
  - Joe Dolson
  - Rian Rietveld
---

# Skip links

Navigation links, search forms, social media links, or other elements commonly appear on the page before the main content. 

When [navigating using the keyboard]({{site.baseurl}}/docs/testing/keyboard), it can be frustrating to get to links or a form in the main content of a page because you need to tab through all these focusable elements on each page. 

A skip link provides users (particularly keyboard users) with a means to skip all these elements and jump directly to the content.

Example of a skip-to-content link when focused:
![Skip to content link]({{site.baseurl}}/assets/images/skip-link.png)

## Functionality of a skip link

- The skip link should be the first focusable element in the page.
- If the skip link is visually hidden at first, it must become visible when the keyboard focus moves to the link.
- The skip link is not required to be visible all the time for all users, but making it visible will increase accessibility.
- When the skip link is clicked, it should move the keyboard focus to the main content. The next tab press should continue navigation inside the main content.

Even though it's best practice to place all content inside a [landmark region]({{site.baseurl}}/docs/topics/code/landmarks/), skip links can be placed outside any landmarks. If a user is navigating using landmark regions, having skip links inside a landmark may be excessively verbose.

But make sure the skip link is always the first focusable item on the page, then it is easily findable.

## Skip links in WordPress

### Skip link block themes

Starting in WordPress 6.4, skip links are automatically added to the pages rendered in sites using block templates.

The skip link is added with the PHP function [get_the_block_template_html()](https://developer.wordpress.org/reference/functions/get_the_block_template_html/) in the Block template loader functions.

The generated HTML, just below the `<body>` element is:

```html
<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">
    Skip to content
</a>
```
The `id="wp--skip-link--target"` to move the keyboard focus is added to `<main>`:

```html
<main id="wp--skip-link--target" class="[...]">
```

{: .callout .alert }
**Please note**: there needs to be a `<main>` landmark in your theme, otherwise this function doesn't work. Read the discussion about this on the GitHub issue [Themes: Document the auto addition of skip links on Block Themes](https://github.com/WordPress/Documentation-Issue-Tracker/issues/1677) by Matias Benedetto on the WordPress Documentation-Issue-Tracker.

The CSS is added by [wp_enqueue_block_template_skip_link()](https://developer.wordpress.org/reference/functions/wp_enqueue_block_template_skip_link/).

The generated CSS is:

```css
/*! This file is auto-generated */
.skip-link.screen-reader-text {
    border:0;
    clip-path:inset(50%);
    height:1px;
    margin:-1px;
    overflow:hidden;
    padding:0;
    position:absolute!important;
    width:1px;
    word-wrap:normal!important;
    word-break:normal!important
}

.skip-link.screen-reader-text:focus {
    background-color:#eee;
    clip-path:none;
    color:#444;
    display:block;
    font-size:1em;
    height:auto;
    left:5px;
    line-height:normal;
    padding:15px 23px 14px;
    text-decoration:none;
    top:5px;
    width:auto;
    z-index:100000
}
/*# sourceURL=/wp-includes/css/wp-block-template-skip-link.min.css */
```

Read more about the [.screen-reader-text class]({{site.baseurl}}/docs/topics/code/screen-reader-text/).

### Skip link in classic themes

For implementing a skip link in classic themes, please read the guide by Carolina Nymark: [How to add and test skip links](https://make.wordpress.org/themes/2019/07/14/how-to-add-and-test-skip-links/).



## Resources

{: .resource-h3}
### WCAG Success Criteria skip links

[2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).

{: .resource-h3}
### Related pages in this documentation

- [Skip to Content Link]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/skip-to-content/) in the Theme guidelines for the WordPress accessibility-ready program.
- [The CSS class screen-reader-text]({{site.baseurl}}/docs/topics/code/screen-reader-text/) in Standards and best practice, Frontend code.
- [Keyboard navigation testing]({{site.baseurl}}/docs/testing/keyboard) in Test for accessibility.

{: .resource-h3}
### Other resources

- [Skip navigation links](https://webaim.org/techniques/skipnav/) by WebAIM. In this article there is also information about having multiple skip links and the most common wording for skip to content.
- [How–to: Use Skip Navigation links](https://www.a11yproject.com/posts/2013-05-11-skip-nav-links/) by Cameron Cundiff on the A11y Project.
