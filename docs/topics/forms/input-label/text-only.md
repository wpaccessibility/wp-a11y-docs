---
title: Label has text only
layout: default
parent: Input and label
description: Use only plain text in a label. Avoid including interactive elements such as links, buttons or tooltips inside the label content.
nav_order: 6
---

# Only include text in the label

Use only plain text in a label. Avoid including interactive elements such as links, buttons or tooltips inside the label content.

## Why keep the label text only?

Additional HTML elements can cause problems when screen readers announce the label or when a user tries to focus the input field by voice recognition.

- The text inside the additional interactive elements will be added to the [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/). If that text is, for example, a tooltip, the accessible name of the form input can become unreadable, incomprehensible, or just plain wrong.
- If there is a clickable item inside the label, clicking it can result in also selecting the form control if it's a checkbox.
- The reading order (meaningful sequence) of the content can get illogical.

Keep the label with a form control to the point. Include additional information above the form, either as links above the label or form field (whichever makes sense in terms of reading order) or as a description next to the field.

## Accessibility concerns with using an implicitly associated form field

There is an exception for an implicitly associated form field. This is valid HTML. But adding an input field inside a label has accessibility concerns. 

Example implicit form field:

```html
<!-- Do not copy, using an implicit input field has accessibility concerns -->
<label>Your favorite color
  <input type="text" name="color">
</label>
```

Read [MDN about label accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#accessibility).

{: {: .callout .info }
The populair [WordPress form plugin Contact Form 7](https://wordpress.org/plugins/contact-form-7/) uses implicitly associated form fields as its default template to create a form. Joe Dolson created the plugin [Contact Form 7: Accessible Defaults](https://wordpress.org/plugins/contact-form-7-accessible-defaults/) that provides an accessible template for your form.


## Examples

{: .callout .do }
Place the link to the terms of delivery outside and above the label.  
[The terms of delivery](#).  
<input id="alv3" type="checkbox"/>
<label for="alv3">I agree with the terms of delivery</label>

```html
<p>
    <a href="#">The terms of delivery</a>.
</p>
<label for="alv1">I agree with the terms of delivery</label>
<input id="alv1" type="checkbox"/>
```

Note that the reading order is also meaningful: first the link to the terms and after that the checkbox to agree with them.

{: .callout .dont }
Place the link to the terms of delivery inside the label.  
<input id="alv4" type="checkbox"/>
<label for="alv4">I agree with [the terms of delivery](#)</label>


```html

<!-- this is invalid code, do not use -->
<input id="alv2" type="checkbox"/>
<label for="alv2">I agree with the <a href="#">terms of delivery</a></label>

```
## Resources

### WCAG Success Criteria for accessible names

Giving a form control an accessible name is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [1.3.2 Meaningful sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (Level A).

### Related pages in this documentation

- Standards and best practice - Frontend code: [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/).

### Other resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- [MDN about label accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#accessibility)
