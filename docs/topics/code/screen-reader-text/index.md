---
title: CSS screen-reader-text
layout: default
parent: Frontend code
description: Learn about the CSS class screen-reader-text and how to use it.
nav_order: 6
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# The CSS class screen-reader-text

The screen-reader-text CSS class in WordPress is used:

- to hide text visually that is primarily needed for screen reader users.
- for [skip links](/docs/topics/code/components/skip-links/) to ensure keyboard navigation visibility when the link gets focus.

The CSS class screen-reader-text is a [WordPress Generated Class](https://developer.wordpress.org/advanced-administration/wordpress/css/#wordpress-generated-classes). Each theme should have these styles in its CSS.

WordPress introduced `.screen-reader-text` in 2009 and extended the use in 2015. Joe Dolson wrote an informative post about the [extended use of the screen-reader-text](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core/) class with the release of WordPress 4.2.

The colors, borders, and padding of the focus style can be adjusted to match the styling of the theme. The styles defined below are those used by WordPress core for Skip Links.

## The CSS of screen-reader-text

The below CSS will hide elements visually but keep them available to screen readers.

```css
/* Text meant only for screen readers. */
.screen-reader-text {
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}
```

This CSS will bring focusable elements with `.screen-reader-text:focus` into view when they receive keyboard focus and is specifically targeted for skip links:

```css
.screen-reader-text:focus {
    background-color: #eee;
    clip-path: none;
    color: #444;
    display: block;
    font-size: 1em;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000; /* Above WP toolbar. */
}
```

If you’re using the class ‘.screen-reader-text’ on any other focusable element (buttons, read more links, or form fields), then these focus styles will also apply. If this is the case, you may need to change the positioning rules, depending on the location of the focusable element.

### Explanation of some of these CSS properties

- The width and height are set to 1 pixel because some screen readers don’t announce an element with a size of 0 pixels.
- `margin: -1px;` to hide it completely from sight.
- `word-wrap: normal;` to avoid screen readers reading the text letter for letter, as the text is placed in a 1-pixel wide space. Many screen reader and browser combinations announce broken words as they would appear visually.
- `clip` is deprecated and is being removed from WordPress core as of WordPress 6.8, `clip-path` now has support for this usage for modern browsers (source: [Can I use](https://caniuse.com/?search=clip-path)).

{: .callout .alert }
**Beware**: `display: none;` and `visibility: hidden;` hide text from screen, but also for a screen reader, so they can’t be used to give extra information to screen reader users.

## Practical examples

Invisible text to make a link meaningful out of context:

```html
<a href="your-url">
    Read more
    <span class="screen-reader-text"> about cute kittens</span>
</a>
```

A caption of a table:

```html
<table>
    <caption class="screen-reader-text">The cities of WordCamp Europe</caption>
[...]
</table>
```

A heading to make the heading structure meaningful and understandable. This also prevents an overload of H2s in, for example, the footer and gives the heading structure more context:

```html
<h2 class="screen-reader-text">Contact Information</h2>

<h3>Address</h3>
<p>[...]</p>

<h3>Social media</h3>
<p>[...]</p>
```

## Translate screen-reader-text

If you include screen-reader-text as a part of a longer string in your WordPress theme, make sure the construction is translatable as a whole string (see [Internationalization in the Theme Handbook](https://developer.wordpress.org/themes/classic-themes/functionality/internationalization/)). The word order may vary in different languages.

{: .callout .dont }
**Don't** force the word order as it may vary in different languages.

```php
<!-- don't copy, this is incorrect -->
echo __( 'Continue reading', 'textdomain' ) . ' ' . get_the_title() . '';
```

{: .callout .do }
**Do** make the word order flexible, translators can now change the word order.

```php
printf(
__( 'Continue reading "%s"', 'twentyseventeen' ),
get_the_title()
);
```

## Resources

{: .resource-h3}
### Related pages in this documentation

- [Screen reader text supported]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/screen-reader-text/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Screen reader testing]({{site.baseurl}}/docs/testing/screen-readers/) in Test for accessibility.
- [Skip links](/docs/topics/code/components/skip-links/) in Standards and best practice, Frontend code, Components.

{: .resource-h3}
### Other resources

- [The introduction of the screen-reader-text class](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core) on WordPress.org by Joe Dolson.
- [Supporting Screen Reader Text](https://make.wordpress.org/themes/2015/01/26/supporting-screen-reader-text/) on WordPress.org by Konstantin Obenland.
- [Making Your Content Accessible: Adding a "Screen Reader Text" Button to the WordPress Formatting Toolbar](https://www.kalamuna.com/blog/making-your-content-accessible-adding-screen-reader-text-button-wordpress-formatting-toolbar), by Kristina Kaminski.

