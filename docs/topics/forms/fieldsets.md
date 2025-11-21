---
title: Group form fields
layout: default
parent: Web forms
nav_order: 5
---

# Fieldset and legend to group form fields

{: .callout  .alert }
This content will be rewritten and expanded.  
Related issue on [GitHub #157 Topic  Fieldsets to group form fields](https://github.com/wpaccessibility/wp-a11y-docs/issues/157).  

The `fieldset` and `legend` elements are a standard way to group fields. When a screen reader enters a fieldset, the `legend` of that group will be announced. This is a helpful way of grouping related fields together, such as differentiating between an order address and a shipping address; but is critical when grouping radio buttons and checkboxes.

In radio and checkbox groups, it is common that the `label` holds the answer to a question that is presented earlier. Without an appropriate `legend`, this question may not be presented to users of assistive technology.

```html
<fieldset>
<Legend>Which is the best color?</legend>

    <input name="colorOption" type="radio" id="purple" />
    <label for="purple">Purple</label>
    
    <input name="colorOption" type="radio" id="aubergine" />
    <label for="aubergine">Aubergine</label>
    
    <input name="colorOption" type="radio" id="magenta" />
    <label for="magenta">Magenta</label>
    
    <input name="colorOption" type="radio" id="all" />
    <label for="all">All of the above</label>

</fieldset>
```

