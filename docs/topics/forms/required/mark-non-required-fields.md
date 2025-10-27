---
title: Mark non-required fields
layout: default
parent: Required fields
nav_order: 3
---

# Option 1: Marking only the non-required form fields

Clearly indicate to the user if a form field is required to fill out or not.

Assume that you only request essential information in forms, most fields will be required. Then, non-required fields are the exception. You can choose to visually mark only the optional fields. Do this by informing the user above the field and by including the text '(optional)' in the label for non-required fields.

## Example

<figure>
<img src="{{site.baseurl}}/assets/images/mark-non-required-form-fields.png" alt="">
    <figcaption>
    In this screenshot: Above the form the text: "All questions are required except the questions marked as (optional)".
    This information also in the label text: Pronounce (optional).
    </figcaption>
</figure>

{: .alert }
**Note for developers**: for screen reader users the indication if a field is required must be added in the code with a form field. Read [Mark if a form field is required for screen readers]({{site.baseurl}}/docs/topics/forms/required/required-screen-readers/) about how to do this.

## Indication non-required fields in WordPress form plugins

{: .info }
We'd like to invite people familiar with form plugins to help us add instructions for WordPress form plugins. Like possibilities, settings and screenshots.
Please [contact us]({{site.baseurl}}/docs/contact/) if you want to help us with this additional content.

## Related WCAG Success Criteria

By indication required fields, you meet WCAG success criterion [3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Related pages in this documentation

-  [Option 2: Marking only the required form fields]({{site.baseurl}}/docs/topics/forms/required/mark-required-fields/).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- Faizan Ahmed on UX Design World [Optimizing Form Design: Marking Required and Optional Fields in a Better Way](https://uxdworld.com/form-design-required-and-optional-fields/)

