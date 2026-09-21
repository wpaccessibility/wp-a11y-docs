---
title: Infinite scroll
layout: default
parent: Patterns to avoid
description: Using infinite scroll is not recommended. 
nav_order: 2
contributors:
  - Joe Dolson
  - Rian Rietveld
---

# Patterns to avoid: Infinite scroll

Infinite scroll is a front-end interaction pattern in which new content loads automatically as users reach the bottom of the page, eliminating the need to click through numbered pages.

We don’t recommend using infinite scroll because it has many significant accessibility issues:

- You can’t go back to your previous place using browser “back” button.
- You can’t easily get to the footer or the last items in the infinite scroll.
- There is a large memory footprint if loading big images.
- It doesn’t work without JavaScript.
- You can’t access elements with keyboard only.
- There is no consistent audible feedback or instructions about how infinite scrolling works for assistive technologies.
- There is no URL to a specific place on the page.
- And the list goes on…

There is a great summary of the disadvantages in the WordPress trac ticket [Reconsider the usage of infinite scrolling across the admin](https://core.trac.wordpress.org/ticket/40330).

## Recommendations

Pagination with page numbers removes all the issues mentioned above.

![Pagination with page numbers from 1 to 9]({{site.baseurl}}/assets/images/pagination.png)

If the number of items to load is not too high, “Load more items” buttons could work as well. However, that option is limited to sequential usage and doesn’t provide any methods to access previously loaded items or the very last items to load.

{: .callout .info }
**Note**: [role="feed"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role), that should solve the screenreader feedback and keyboard navigation issues, isn't at this moment reliable enough for screen reader support, and it also [doesn't solve all the (usability) issues](https://www.digitala11y.com/ok-aria-rolefeed-is-here-its-not-ready-for-prime-time/) mentioned above.

## Infinite scroll the WordPress Media Library grid view

In WordPress 7.1, infinite scroll is added by default for the Media Library grid view.  There are 2 ways to disable this:

In your **user profile** (Users > Profile > Your name), check the option “Disable infinite scrolling in the Media Library grid view”. Then, a message “Load more” appears in the Medial Library grid view to manually load more images.

<img src="{{site.baseurl}}/assets/images/media-load-more.png" alt="Load more button, with above the button the text Showing 80 of 2987 media items.">

Or view the images in “**list view**” instead of “grid view”. The list view option has standard WordPress Admin pagination.

<figure>
<img src="{{site.baseurl}}/assets/images/media-list-view.png" alt="Icons to select list or grid view, with the list view focussed.">
<figcaption>"List view" is the first icon in the options to change view.</figcaption>
</figure>

We are working on a more intuitive way to disable infinit scroll, read the trac ticket: [Add option to toggle infinite scroll in the media modal](https://core.trac.wordpress.org/ticket/65775) for the discussion.

## Resources

### Resources mostly focused on accessibility

- [So You Think You’ve Built a Good Infinite Scroll](http://adrianroselli.com/2014/05/so-you-think-you-built-good-infinite.html), by Adrian Roselli.
- [Infinite Scroll & Accessibility! Is It Any Good?](https://www.digitala11y.com/infinite-scroll-accessibility-is-it-any-good/), from a screen reader user’s point of view, by Raghavendra Satish Peri on DigitalaA11Y.
- [OK ARIA! Role=feed is here & it’s not ready for prime time](https://www.digitala11y.com/ok-aria-rolefeed-is-here-its-not-ready-for-prime-time/), by Raghavendra Satish Peri for DigitalaA11Y.

### Resources mostly focused on usability

- [The UX of Infinite Scroll: The Good, the Bad, and the Maybe](https://www.sitepoint.com/ux-infinite-scroll-good-bad-maybe/), by Christian Leeds for Sitepoint.
- [Infinite Scrolling, Pagination Or “Load More” Buttons?](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/), by Christian Holst for Smashing Magazine.
- [Infinite Scroll: Let’s Get To The Bottom Of This](https://www.smashingmagazine.com/2013/05/infinite-scrolling-lets-get-to-the-bottom-of-this/), by Yogev Ahuvia for Smashing Magazine.
- [Infinite scrolling](https://www.nngroup.com/articles/infinite-scrolling/), by Hoa Loranger for the Nielsen Norman Group.
