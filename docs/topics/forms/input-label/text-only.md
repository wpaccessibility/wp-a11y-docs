---
title: Label has text only
layout: default
parent: Input and label
nav_order: 6
---

# Only include text in the label

Use only plain text in a label. Avoid including interactive elements such as links, buttons or tooltips inside the label content.

## Why keep the label text only?

Additional HTML elements can cause problems when screen readers announce the label or when a user tries to focus the input field by voice recognition.

- The text inside the addition interactive elements wil be added to the [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/). It that text is for example a tooltip, the accessible name of the form input can become unreadable or incomprehensible or just plain wrong.
- If there is a clickable item inside the label, clicking it can result in also selecting the form control if it's a checkbox.
- The reading order (meaningful sequence) of the content can get unlogical.

Keep the label with a form control to the point.  Include additional information above the form, either as links above the label or form field (whichever makes sense in terms of reading order) or as a description next to the field.

There is an exception when using an implicitly associated form control. But adding an input field inside a label has accessibility concerns. Read [MDN about label accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#accessibility).

## Examples

{: .do }
Place the link to the terms of delivery outside and above the label.  
[The terms of delivery](#).  
<input id="alv1" type="checkbox"/>
<label for="alv1">I agree with the terms of delivery</label>

```html
<p>
    <a href="#">The terms of delivery</a>.
</p>
<label for="alv1">I agree with the terms of delivery</label>
<input id="alv1" type="checkbox"/>
```

Note that the reading order is also meaningful: first the link to the terms and after that the checkbox to agree with them.

{: .dont }
Place the link to the terms of delivery inside the label.  
<input id="alv1" type="checkbox"/>
<label for="alv1">I agree with [the terms of delivery](#)</label>

```html

<!-- this is invalid code, do not use -->
<label for="alv2">I agree with the <a href="#">terms of delivery</a></label>
<input id="alv2" type="checkbox"/>
```

## WCAG Succes Criteria

Giving a form control an accessible name is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [1.3.2 Meaningful sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (Level A).

## Related pages in this documentation

- [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/).

## Resources

- [MDN about label accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#accessibility)
