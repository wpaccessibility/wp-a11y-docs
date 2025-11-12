---
title: Group form fields
layout: default
parent: Web forms
nav_order: 5
description: Group form fields that belong together inside a fieldset with a descriptive legend.
---

# Fieldset and legend to group form fields

Group form fields that belong together inside a `<fieldset>` with a descriptive `<legend>`. The advantage of this is that the fields are  visually and in the code connected to each other. The <legend> serves as the name of the group.

The `fieldset` and `legend` elements are a standard way to group fields. When a screen reader enters a fieldset, the `legend` of that group will be announced. This is a helpful way of grouping related fields together, such as differentiating between an order address and a shipping address; but is critical when grouping radio buttons and checkboxes.


<img src="{{site.baseurl}}/assets/images/fieldset-radio-buttons.png" alt="Screenshot of grouped radio buttons that let you select the best color">


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

## WCAG Succes Criteria for fieldsets

Using a fieldset and legend to group of form fields is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level AA).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [The Field Set element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset).
