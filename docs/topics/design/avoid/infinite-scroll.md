---
title: Infinite scroll
layout: default
parent: Patterns to avoid
description: Using infinite scroll is not recommended. 
nav_order: 2
---

# Patterns to avoid: Infinite scroll

We don’t recommend using infinite scroll because it has many significant accessibility issues:

- You can’t go back to your previous place using browser “back” button.
- You can’t easily get to the footer or the last items in the infinite scroll.
- There is a large memory footprint if loading big images.
- It doesn’t work without Javascript.
- You can’t access elements with keyboard only.
- There is no consistent audible feedback or instructions about how infinite scrolling works for assistive technologies.
- There is no URL to a specific place on the page.
- And the list goes on…

There is a great summary in the “[Reconsider the usage of infinite scrolling across the admin](https://core.trac.wordpress.org/ticket/40330)” trac ticket for more information.

## Recommendations

Pagination with page numbers removes all the issues mentioned above.

![Pagination with page numbers from 1 to 9]({{site.baseurl}}/assets/images/pagination.png)

If the number of items to load is not too high, “Load more items” buttons could work as well. However, that option is limited to sequential usage and doesn’t provide any methods to access previously loaded items or the very last items to load.

## Resources

### Resources mostly focused on accessibility

- [So You Think You’ve Built a Good Infinite Scroll](http://adrianroselli.com/2014/05/so-you-think-you-built-good-infinite.html)
- [Infinite scrolling in Simply accessible](http://simplyaccessible.com/article/infinite-scrolling/)
- [Infinite scrolling and accessibility](http://www.webaxe.org/infinite-scrolling-and-accessibility/)
- [Infinite scrolling – impact on assistive technologies](http://www.ssbbartgroup.com/blog/infinite-scrolling-impact-on-assistive-technologies-series-1/)
- From a screen reader user’s point of view: [Infinite Scroll & Accessibility! Is It Any Good?](https://www.digitala11y.com/infinite-scroll-accessibility-is-it-any-good/)

### Resources mostly focused on usability

- [Infinite scroll search-friendly recommendations](https://webmasters.googleblog.com/2014/02/infinite-scroll-search-friendly.html)
- [Infinite scrolling](https://www.nngroup.com/articles/infinite-scrolling/) in Nielsen Norman Group
- [The UX of Infinite Scroll: The Good, the Bad, and the Maybe](https://www.sitepoint.com/ux-infinite-scroll-good-bad-maybe/)
- [How infinite scrolling breaks UX](https://www.webdesignerdepot.com/2015/11/how-infinite-scrolling-breaks-ux/)
- [Infinite Scrolling, Pagination Or “Load More” Buttons?](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/)
- [Infinite Scroll: Let’s Get To The Bottom Of This](https://www.smashingmagazine.com/2013/05/infinite-scrolling-lets-get-to-the-bottom-of-this/)

### Resources focused on memory footprint

- [5 techniques for smooth infinite scrolling in HTML5](http://engineering.linkedin.com/linkedin-ipad-5-techniques-smooth-infinite-scrolling-html5)
- [The Making of Fastbook: An HTML5 Love Story](https://www.sencha.com/blog/the-making-of-fastbook-an-html5-love-story/)
- [Infinite Scroll Memory Optimization](http://dannysu.com/2012/07/07/infinite-scroll-memory-optimization/)
