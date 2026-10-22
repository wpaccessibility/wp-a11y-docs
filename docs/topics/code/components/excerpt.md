---
title: Excerpts, cards, and teasers
layout: default
parent: Components
description: How to set up an accessible post excerpt, card or tile.
nav_order: 3
has_video: true
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# Excerpts, cards, and teasers

Common practice on websites is adding a component referring to another post or page in a block with:

- The page- or post-title.
- An image, like a thumbnail or a featured image.
- A short summary of the content (excerpt) or a teaser text.
- A link to the page or post.

This component has different names and purposes, but all share a common structure. They can be used to list posts of a specific category, the latest news items, as a teaser to another page, or to navigate to important content. 

For convenience, in this topic we will refer to them as a "card" pointing to a "page".

## Cards and accessibility

There are a few things to keep in mind to make a card usable by everyone. They are further explained in examples later in this topic.

- Link texts: make sure the link texts are meaningful, do not wrap the whole card inside a link.
- Link target: use only one link to the page, avoid duplicate links to the same target within the card.
- Image link: If the image is a link, make sure the link has an appropriate link text.
- Image alternative text: If the image is not a link, make sure it has an appropriate alt text or is indicated as decorative.
- Headings: if you use headings in a card, make sure the heading level fits the heading structure of the page.
- Order of the items: make sure the order of the items makes sense if you read the card from the top down.

### Meaningful link texts

Link texts like “Read more…” or “Continue reading…” are meaningless, especially in a link list for screen reader users. Read more about what? It’s best to give context to links. Include the page title for your “read more” links so screen readers understand what’s being linked to and optionally hide this by using the CSS class [.screen-reader-text]({{site.baseurl}}/docs/topics/code/screen-reader-text).

For example:

```html
<a href="your-url">Continue reading
<span class="screen-reader-text">Your page title</span>
</a>
```

### Use only one link to the page

Create a usable card for screen reader and keyboard users by offering only one relevant link per card.

How many links per card will go to the same location? Do the page title, the image, and the "Continue reading" all link to the same destination? That will cause a great deal of link clutter on your page. Screen reader users can call a list of links to navigate a webpage, having three links to the same page for every card really adds up. Keyboard users will have three tab stops per card instead of one. [Duplicate and meaningless links]({{site.baseurl}}/docs/topics/content/links/link-text/) are annoying, time-consuming, and not user-friendly.

If you want to make a duplicate link only clickable by a mouse, there is a quick and dirty workaround. Add both `aria-hidden="true"` `tabindex="-1"` to the links you want to hide from the screen reader and keyboard users. Although removing a visible link from the tab order could be confusing for keyboard users. Make sure one link to the page stays available for keyboard and screen reader.


```html
<a href="your-url" aria-hidden="true" tabindex="-1">
        link text
</a>
```

{: .callout .dont }
**Don't** wrap the entire contents of a card inside a link. This is not helpful for screen readers. The whole content of the card is announced, making the link incomprehensible and way too long.

The link text of the code construction below will be: 
> "Quick wins to improve the accessibility of your website
What to do first when you want to make your site more accessible? Start with the low-hanging fruit like sufficient color contrast of text against its background. Last updated: October 01, 2026." 

Instead of just "Quick wins to improve the accessibility of your website".

```html
<!-- Don't copy, this is an inaccessible construction -->
<a href="https://wpaccessibility.org/docs/start/quick-wins/">
    <article class="your-card">
        <h2>
            Quick wins to improve the accessibility of your website
        </h2>
        <p>What to do first when you want to make your site more accessible? Start with the low-hanging fruit like sufficient color contrast of text against its background.</p>
        <p>Last updated: October 22, 2026.</p>
    </article>
</a>
```

{: .callout .do}
**Do**: Use one link to the page per card.

Adding a link inside a heading is open to debate. But this way the page title will also show up in the screen reader's headings list, so that’s probably not a bad thing. As we are all used to the heading being a link, it has become a WordPress convention. Removing the “continue reading” link could be an option to clean up the link clutter.

```html
<!-- Use the heading also as link -->
    <article class="your-card">
        <h2>
            <a href="https://wpaccessibility.org/docs/start/quick-wins/">Quick wins to improve the accessibility of your website</a>
        </h2>
        <p>What to do first when you want to make your site more accessible? Start with the low-hanging fruit like sufficient color contrast of text against its background.</p>
        <p>Last updated: October 22, 2026.</p>
    </article>

```

```html
<!-- Use the continue reading text as link and add the page title as screen-reader-text-->
    <article class="your-card">
        <h2>
            Quick wins to improve the accessibility of your website</a>
        </h2>
        <p>What to do first when you want to make your site more accessible? Start with the low-hanging fruit like sufficient color contrast of text against its background.</p>
        <p>Last updated: October 01, 2026.</p>
        <p><a href="https://wpaccessibility.org/docs/start/quick-wins/">Continue reading<span class="screen-reader-text">Quick wins to improve the accessibility of your website.</span></a></p>
    </article>

```

{: .callout .info }
**Please note**: Linking metadata like categories, dates, and authors in a card also adds to the link clutter. You can link those items on the page itself, but please avoid doing so in cards for screen reader and keyboard usability.

#### Accessible clickable card

One accessible way to make the whole card clickable by a mouse, using only one link is by using a CSS pseudo-element link overlay.

```html
<article class="teaser">
    <h2>
        Quick wins to improve the accessibility of your website
    </h2>
    <p>What to do first when you want to make your site more accessible? Start with the low-hanging fruit like sufficient color contrast of text against its background.</p>
    <p>Last updated: October 01, 2026.</p>
    <a class="teaser-link" href="https://example.com">
        Read the full article <span class="screen-reader-text">about the title of the page you are linking to</span>
    </a>
</article>
```

```css
.teaser {
	position: relative;
}
.teaser-link:after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
```

This simplified example is taken from and explained in [Pseudo-element link overlay](https://www.frontendbbq.com/articles/accessible-teaser) by Florian Schroiff. 

### The alternative text on the image

If the image is placed inside a link, the [alt attribute serves as the link text]({{site.baseurl}}/docs/topics/content/links/link-image/). So it’s important that the alternative (alt) text is not empty and contains the page title of the page it’s linking to.

For example:

```html
<a href="your-url">
    <img src="img-url" alt="Your page title">
</a>
```
If the image is not a link, make sure the alternative text makes sense. 

```html
<!-- if an image has meaningful content or text -->
<img src="img-url" alt="Black Friday deal: 50% off on all shoes">
```

```html
<!-- if an image is just decorative and adds no additional content -->
<img src="img-url" alt="">
```

Find more information about alt texts in the topics [Alternative text for images in the content]({{site.baseurl}}/docs/topics/content/alt-text/) and [Alternative text for images, SVGs, and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/) in this documentation.

### Headings in cards

If you use headings in a card, make sure the heading level fits the heading structure of the entire webpage. It may be necessary to give the content manager the possibility to change the heading level used in a card. The heading level can be dependent of how and where the card is used on a page. Read about semantic heading levels in: [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/) and [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/).

### Meaningful sequence of the card items

Screen reader users read a page from to top down, and a populair way to navigate a web page is by using headings. Therefore, make sure all content that belongs to a heading is placed below the heading in the DOM. This is explained, including a CSS workaround, in the topic [Meaningful sequence]({{site.baseurl}}/docs/topics/code/meaningful-sequence/) and in the video below.

<video data-able-player data-youtube-nocookie="true" data-youtube-id="Hn2GHgRLzjE" data-heading-level="0"></video>

## Cards in WordPress

There are many blocks and patterns for card components within WordPress, created by WordPress core and by third parties. Please check the accessibility before you use them on your website. 

## Resources

{: .resource-h3}
### WCAG Success Criteria for accessible cards

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (Level A).
- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) (Level A).
- [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only) (Level **AAA)**.

{: .resource-h3}
### Related pages in this documentation

In the Theme guidelines for the WordPress accessibility-ready program:
- [Keyboard navigation support]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/keyboard-navigation-support/).
- [Controls with accessible names, roles, and states]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/controls-with-accessible-names/).
- [Headings with meaningful structure]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/headings-structure/).
- [No ambiguous link text]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/no-ambiguous-link-text/).
- [Alternative text on images and graphics]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/alternative-text/) 

In standards and best practice:
- [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/) in Frontend code
- [Alternative text for images in the content]({{site.baseurl}}/docs/topics/content/alt-text/) in Content and images.
- [Alternative text for images, SVGs, and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/) in Frontend code.
- [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/) in Content and images.
- [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/) in Frontend code.

In Test for accessibility:
- [Keyboard navigation testing]({{site.baseurl}}/docs/testing/keyboard/).
- [Screen reader testing]({{site.baseurl}}/docs/testing/screen-readers/).


{: .resource-h3}
### Other resources

- [How to Design and Implement Accessible Cards](https://www.youtube.com/watch?v=iIoHdxmC8eM), presentation by Tina Reis for the WordPress Accessibility Day.
- [Screen Reader User Survey 2026](https://webaim.org/projects/screenreadersurvey11/) by WebAIM.
