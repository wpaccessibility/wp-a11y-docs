---
title: Autocomplete
layout: default
parent: Provide help
nav_order: 3
has_video: true
---

# Autocomplete in a form

The HTML [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete) attribute tells the browser what type of value is expected when filling in out form field. Browsers store what users have entered before. Browsers can then use those saved values to automatically fill out fields. 

Data such as names, addresses, and phone numbers can then be filled in automatically by the browser.

Autocomplete is helpful for users who have difficulty typing, have memory issues, struggle with language or just love the convenience of not typing the same data over and over again.

## Use autocomplete when a value is defined

WCAG contains a complete [list of values for autocomplete](https://www.w3.org/TR/WCAG22/#input-purposes). Always use an `autocomplete` attribute if a value for a form field is defined in this list.

When using `autocomplete`, it is important that the label always remains visible. The user needs to know whether the correct value has been entered in the according field.

{: .callout .tip }
**Tip**: The autocomplete value for City is `address-level2`.

## Code example

```html
<input 
        id="firstname"
        name="firstname"
        type="text"
        autocomplete="given-name"
/>
```

{: .callout .info }
Note: `aria-autocomplete` has a different purpose and usage than autocomplete on form fields. [aria-autocomplete is used in web components](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete), for example to indicate that suggestions are available for search results.

## Pre-fill known information where possible

This doesn't address 'autocomplete', but it is related: if the user is logged in, use known information to pre-fill fields. For example, if a session already contains available information that could be used to pre-fill fields. Like a shipping address for an online order.

## Resources

### WCAG Success Criteria

Using the correct autocomplete attribute is required to meet WCAG Success Criterion [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose) (Level AA).

### Autocomplete in WP Plugins
- Gravity Forms
- WP Forms
- etc

### Other resources

Jules Ernst from 200 OK has created a [Dutch interpretation of autocomplete](https://www.200ok.nl/tips/autocomplete/) of this list.
