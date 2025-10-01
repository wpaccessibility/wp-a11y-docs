---
title: Skip links
layout: default
parent: Components
nav_order: 2
---

# Skip links

{: .alert }
This content needs to be reviewed and restructured.  
Related issue on [GitHub #149 Topic Skip links](https://github.com/wpaccessibility/wp-a11y-docs/issues/149).  
If you want to work on this, please let us know before you start.

Navigation links, search forms, social media links, or other elements commonly appear on the page before the main content. When navigating using the keyboard, it can be frustrating to get to the main content of a page because of these elements if you need to tab through everything on each page. A skip link provides users (particularly keyboard users) with a means to skip all these elements and jump to the content.

## Best practices

- The link should be the first focusable element in the page.
- The link is not required to be visible all the time for all users, but making it visible will increase accessibility.
- If the link is visually hidden at first, it must become visible when keyboard focus moves to the link.
- When the link is clicked, it should move focus to the main content. The next tab press should continue navigation inside the main content.

Skip to content link when focused
![Skip to content link]({{site.baseurl}}/assets/images/skip-link.png)

Even though [all content should be inside a landmark region](https://make.wordpress.org/accessibility/handbook/best-practices/markup/aria-landmarks/), skip links can be outside any landmarks. If a user is navigating using landmark regions, having skip links inside a landmark may be excessively verbose. Since the skip link is the first item on the page, it is always easily findable.

Skip links should be the first focusable element on a page. In this example, the skip link is inside the <header> landmark, but this is not a requirement – and if there is content above the site header, it would be incorrect. Being the first item on the page is much more important than being inside a landmark.

```html
<body>
<header>
<a class="screen-reader-text skip-link" href="#content">Skip to content</a>
<h1>Site title</h1>
</header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/accessibility">Accessibility</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
  <main id="content">
    <!-- Content of the page --> 
  </main>
</body>
```

Read more about [the .screen-reader-text class](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/).

## Example: Skip link in wrong place

In this example, the skip link has been placed inside the navigation region, and moved to the top left corner using CSS. The result is that a user must travel through the navigation in order to reach the skip link. It appears visually in the correct place, but is useless to a user.

```html
<html>
<style>.skiplink { position: absolute; top: 0; left: 0; }</style>
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/accessibility">Accessibility</a></li>
      <li><a href="/blog">Blog</a></li>
      <li class="skiplink"><a href="#content">Skip to Content</a></li>
    </ul>
  </nav>

  <main id="content">
    <!-- Content of the page -->
  </main>
</body>
```

## Additional resources for skip links

- [Skip navigation links in webaim](https://webaim.org/techniques/skipnav/).  
  In this article there is also information about having multiple skip links and the most common wording for skip to content.
- [How–to: Use Skip Navigation links](https://www.a11yproject.com/posts/2013-05-11-skip-nav-links/).
- [Skip links guideline for accessibility ready themes](https://make.wordpress.org/themes/handbook/review/accessibility/required/#skip-links%E2%80%9D).
- [.screen-reader-text class article in the handbook](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/).
