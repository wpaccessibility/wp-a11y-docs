---
title: Fieldset legend
layout: default
parent: Group form fields
nav_order: 2
description: A legend serves as the name of grouped form fields in a fieldset.
---

# Legend with a fieldset

A [legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend) serves as the name (caption) of grouped form fields in a `<fieldset>`. Most screen readers read this legend aloud the first input field within the fieldset, making the connection clear even without visual information. Keep the content of the legend short and descriptive.

```html
<fieldset>
    <legend>Your address</legend>
    <label for="street">Street and house number</label>
    <input type="text" name="street" id="street" autocomplete="address-line1">
    <label for="postal-code">ZIP code</label>
    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code">
    <label for="city">City</label>
    <input type="text" name="city" id="city" autocomplete="address-level2">
</fieldset>
```

{: info }
Screen readers read the information in variable ways; most announce the legend text when you reach the first field in a fieldset. The legend should be short and descriptive because some screen readers will announce it on every form field within the group.

## Heading in a legend

A legend can contain a heading. Make sure that the heading level fits correctly within the hierarchical heading structure of the entire page.

```html
<fieldset>
  <legend><h3>Shipping address</h3></legend>
    <label for="shipping-street">Street and house number</label>
    <input type="text" name="shipping-street" id="shipping-street" autocomplete="shipping address-line1">
    <label for="shipping-postal-code">ZIP code</label>
    <input type="text" name="shipping-postal-code" id="shipping-postal-code" autocomplete="shipping postal-code">
    <label for="shipping-city">City</label>
    <input type="text" name="shipping-city" id="shipping-city" autocomplete="shipping address-level2">
</fieldset>

<fieldset>
  <legend><h3>Billing address</h3></legend>
    <label for="billing-street">Street and house number</label>
    <input type="text" name="billing-street" id="billing-street" autocomplete="billing address-line1">
    <label for="billing-postal-code">ZIP code</label>
    <input type="text" name="billing-postal-code" id="billing-postal-code" autocomplete="billing postal-code">
    <label for="billing-city">City</label>
    <input type="text" name="billing-city" id="billing-city" autocomplete="billing address-level2">
</fieldset>
```

{: .alert }
The reverse is not true: a heading may not contain a `legend`, because the `legend` needs to be an immediate child of the `fieldset`.

```html
<!-- this is invalid code, do not use -->
<fieldset>
    
    <h3><legend>Which is the best color?</legend></h3>

    <input name="colorOption" type="radio" id="purple" value="purple" />
    <label for="purple">Purple</label>
    
    <input name="colorOption" type="radio" id="aubergine" value="aubergine" />
    <label for="aubergine">Aubergine</label>
    
</fieldset>
```

## WCAG Success Criteria for naming grouped form fields

Naming grouped form fields is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level AA).

## Related pages in this documentation

- [Group form fields]({{site.baseurl}}docs/topics/forms/fieldsets/).
- [Fieldset description]({{site.baseurl}}/docs/topics/forms/fieldsets/fieldset-descriptions/).

## Resources

- W3C: [Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/)
- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- MDN: [The Field Set Legend element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend).
