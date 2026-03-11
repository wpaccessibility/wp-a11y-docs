---
title: No positive tabindex
layout: default
parent:  Web forms
nav_order: 7
description: When accessing and filling out and submitting a form, the keyboard focus should be predictable and visible.
---

# Avoid using a positive tabindex on a form field

A common pattern is to give the first input field in a form a `tabindex="1"`. Easy for sighed mouse users, they can start filling out the form right away.

But the main disadvantage for keyboard users is, that a positive tabindex hijacks the natural tab order of a page. Maybe they don't want to fill out the form, but access the top menu. Don't make decisions for your user.

So: avoid using a positive tabindex in your forms, leave the natural tab order of a web page intact. Learn more about keyboard focus in the section about [Focus handling]({{site.baseurl}}/docs/topics/code/focus-handling).

## Examples

{: .callout .dont }
**Don't**: add a positive tabindex to a form field.
```html
<!-- do not copy, this is not keyboard user-friendly -->
<label for="first-name">First name</label>
<input id='first-name" tabindex="1" autocomplete="given-name" >
```

{: .callout .do }
**Do**: leave to natural tab order of a web page intact.
```html
<label for="first-name">First name</label>
<input id='first-name" autocomplete="given-name" >
```

## Resources

### WCAG Success Criteria for focus order

Accessible focus management in web forms is necessary to meet the WCAG success criterion: [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).
