---
title: Input and description
layout: default
parent: Web forms
nav_order: 4
---

# Input and descriptions

{: .alert }
This content needs to be written.  
Related issue on [GitHub #156 Topic Input fields and descriptions](https://github.com/wpaccessibility/wp-a11y-docs/issues/156).  


```html
<label for="search">Search for a product:</label>
<input type="text" id="search" placeholder="For example: apples, bread or milk">
```

```html
<label for="search">Search for a product:</label>
<input type="text" id="search" placeholder="For example: apples, bread or milk" aria-describedby="search_description">
<span id="search_description">This store only carries fruit, grain products, and dairy.</span>
```
