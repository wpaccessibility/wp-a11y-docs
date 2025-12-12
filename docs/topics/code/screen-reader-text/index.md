---
title:  CSS screen-reader-text
layout: default
parent: Frontend code
nav_order: 6
---

# The CSS class screen-reader-text

{: .callout .alert }
**Alert:** This content will be reviewed and restructured.  
Related issue on [GitHub #145 Topic The CSS class screen-reader-text](https://github.com/wpaccessibility/wp-a11y-docs/issues/145).  

# The CSS class screen-reader-text

WordPress introduced the class `.screen-reader-text` in 2009 and extended the use in 2015. Joe Dolson wrote a good post about the [extended use of the screen-reader-text](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core/) class in WordPress 4.2.

## Use

The screen-reader-text class is used:

- to hide text visually that is primarily needed for screen reader users.
- for skip links to ensure keyboard navigation visibility when the link gets focus.

The CSS class screen-reader-text is a WordPress Generated Class. Each theme should have these styles in its CSS.

The :focus style is primarily used by skip links. The colors, borders and padding of the focus style can be adjusted to match the styling of the theme. The styles defined below are those used by WordPress core for Skip Links.

If you’re using the class ‘.screen-reader-text’ on any other focusable element (buttons, links, or form fields), then these focus styles will also apply. If this is the case, you may need to change the positioning rules, depending on the location of the focusable element.

## The CSS

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

This CSS will bring focusable elements with .screen-reader-text into view when they receive keyboard focus, and is specifically targeted for skip links:


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

### Explanation of some of these CSS properties

- Set width and height to 1 pixel, because some screen readers don’t announce an element with a size of 0 pixels.
- `margin: -1px;` to hide it completely from sight
- `word-wrap: normal;` to avoid screen readers reading the text letter for letter, as the text is placed in a 1 pixel wide space. Many screen reader and browser combinations announce broken words as they would appear visually.
- `clip` is deprecated, and is being removed from WordPress core as of WordPress 6.8, as `clip-path` now has support for this usage across 99.5% of browsers.

**Note**: `display: none;` and `visibility: hidden;` hide text from screen, but also for a screen reader, so they can’t be used to give extra information to screen reader users.

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

A heading to make the heading structure meaningful and understandable. This also prevents an overload of H2s and gives the heading structure more context:

```html
<h2 class="screen-reader-text">Contact Information</h2>

<h3>Address</h3>
<p>[...]</p>

<h3>Social media</h3>
<p>[...]</p>
```

**Note**: If you include screen-reader-text as a part of a longer string in your WordPress theme, make sure the construction is translatable as a whole string (see [I18n for WordPress Developers](https://codex.wordpress.org/I18n_for_WordPress_Developers)), because the word order may vary in different languages.

```php
// Don't do this, because it doesn't allow changing word order.
echo __( 'Continue reading', 'textdomain' ) . ' ' . get_the_title() . '';
```

```php
// Do this, translators can now change the word order.
printf(
__( 'Continue reading "%s"', 'twentyseventeen' ),
get_the_title()
);
```

## Resources

- [The introduction of the screen-reader-text class](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core) by @joedolson
- [WordPress Codex on CSS](https://codex.wordpress.org/CSS#WordPress_Generated_Classes)
- [Supporting Screen Reader Text](https://make.wordpress.org/themes/2015/01/26/supporting-screen-reader-text/) by @obenland
- [The screen reader text class, why and how](http://rianrietveld.com/2015/04/04/the-screen-reader-text-class-why-and-how/), by @rianrietveld
- [Text for Screen Readers Only (Updated)](http://www.coolfields.co.uk/2016/05/text-for-screen-readers-only-updated/), @grahamarmfield
