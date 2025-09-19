---
title: Input and label
layout: default
parent: Web forms
nav_order: 2
---

# Input field and form label

{: .alert }
This content needs to be rewritten and expanded.  
Related issue on [GitHub #155 Topic Input fields and form labels](https://github.com/wpaccessibility/wp-a11y-docs/issues/155).   

The `label` should tell the user what information is required; the `placeholder` should describe _how_ to fill it out.

For example:

```html
<label for="search">Search for a product:</label>
<input type="text" id="search" placeholder="For example: apples, bread or milk">
```


```html
<label for="search">Search for a product:</label>
<input type="text" id="search" placeholder="For example: apples, bread or milk" aria-describedby="search_description">
<span id="search_description">This store only carries fruit, grain products, and dairy.</span>
```

If you must hide a label or control from vision, use the CSS class [.screen-reader-text](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/) and not `display: none` or `visibility: hidden`. Hiding labels is generally discouraged, but can be acceptable in some cases, such as single-field search forms.




