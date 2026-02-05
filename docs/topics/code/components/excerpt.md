---
title: Post Excerpts
layout: default
parent: Components
description: How to set up an accessible excerpt.
nav_order: 3
---

# Post Excerpts

{: .callout .alert }
**Alert:** This content will be updated with more modern ways to address accessibility in post excerpts.

## Excerpt block

In an archive template it is common to have a list of posts with the following elements for each post:

- the post title
- a thumbnail
- the excerpt
- a read more link

## Issues

There are a few things to watch out for to make this usable for everyone.

- avoid multiple / duplicate links to the same location (see examples below)
- avoid meaningless link texts (see examples below)
- make sure that the thumbnail has an appropriate link text
- avoid block level links

A screen reader user can call a list of links to quickly navigate a site. Then [duplicate and meaningless links](https://make.wordpress.org/accessibility/handbook/best-practices/content/good-link-texts/) are annoying and time-consuming.

### Duplicate links

How many links per block will go to the same location? Is the post title, the thumbnail and the read more all linked to the same destination? That will cause a great deal of link clutter on your page.  If you have, for example, 3 links to the same destination, consider removing 2 from the link list by adding the attribute `aria-hidden="true"`. Then the link is removed from the screen readers link list.

But adding `aria-hidden="true"` alone might be confusing because you can tab into it, but it doesn’t announce anything for the screen reader users.

So: take the link also out of the tab order by using `tabindex="-1"`:

```html
<a href="your-url" aria-hidden="true" tabindex="-1">
        link text
</a>
```

### Meaningless link text

Link text like “Read more…” or “Continue reading…” are meaningless, especially in a link list for screen reader users. Read more about what? It’s best to give context to links. Include the post title for your “read more” links so screen readers understand what’s being linked to, and optionally hide this by using the CSS class [.screen-reader-text](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/).

For example:

```html
<a href="your-url">Continue reading
<span class="screen-reader-text"> Your post title</span>
</a>
```

Notice the blank space inside the `.screen-reader-text`? This separates teh words so the text is read out as “continue reading your” instead of “continue readingyour”.

### The alt text of the thumbnail

If the thumbnail is placed inside a link, the [alt attribute serves as the link text](https://make.wordpress.org/accessibility/handbook/best-practices/content/good-link-texts/#images-as-link). So it’s important that the alt text is not empty and contains the post title of the post it’s linking to.

For example:

```html
<a href="your-url">
    <img src="img-url" alt="Your post title">
</a>
```

### Block level links

Wrapping a block level element, for example a heading and an image,  inside a link is not helpful for screen readers. The whole content is read and there is no indication if an element inside the block is a heading or an image. Therefore, do not wrap the block level element in a link but place the link inside the child elements of the block.

For example:

```html
<div class="your-card">
    <h3>
        <a href="your-url">Your post title</a>
    </h3>
    <img src="img-url" alt="Your post title">
</div>
```

## Proposed solution

Putting this all together, the following code will have one link in the link list and one tab stop per block.

Note: this HTML/PHP is only basic, without the styling that a theme may need.

### In HTML

```html
<h2>
    <a href="your-url">Your post title</a>
</h2>

<a href="your-url" tabindex="-1" aria-hidden="true">
    <img src="img-url" alt="Your post title">
</a>

<?php the_excerpt(); ?>

<a href="your-url" tabindex="-1" aria-hidden="true">
    Continue reading
    <span class="screen-reader-text"> Your post title</span>
</a>
```

### In PHP

For example for the Twenty Seventeen theme we can remove one tab stop:

```html
<?php the_title( '<h2><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>

<a href="<?php the_permalink(); ?>"tabindex="-1" aria-hidden="true">
    <?php the_post_thumbnail( 'twentyseventeen-featured-image', [ 'alt' => get_the_title() ] ); ?>
</a>
<?php
the_content( sprintf(
    __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'twentyseventeen' ),
    get_the_title()
) );
?>
```

## Discussion

Removing a visible link from the tab order could be confusing for keyboard users.

Adding a link inside a heading is open to debate. But the link will show up in the headings list too this way, so that’s probably not a bad thing. As we are all used to the heading being a link, it has become a WordPress convention. Removing the “continue reading” link could be an option to clean up the link clutter.

The “continue reading” link is hidden for screen readers, but it has screen reader text. This is useful because, if a user has her own stylesheet, or watches the sites without stylesheet, the link text is still understandable. Also adding the screen-reader-text class improves the quality of the link text, important for SEO (search engine optimization).
