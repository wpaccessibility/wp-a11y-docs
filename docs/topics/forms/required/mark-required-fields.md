---
title: Mark required fields
layout: default
parent: Required fields
nav_order: 2
---

# Option 1: Marking only the required form fields

Clearly indicate to the user if a form field is required to fill out or not. Inform the user above the field how the fields are marked. 

If you choose to mark the required field, include  the text '(required)', or an equivalent, in the label for required fields.

A required field indicator can be:
- The text (required).
- An asterisk (\*). If you use an asterisk, explain this above the form. An asterisk on the form field alone is not sufficient; not everyone has this prior knowledge.

## Example

<figure>
    <img src="{{site.baseurl}}/assets/images/mark-required-form-fields.png" alt="Screenshot form indicating required fields">
    <figcaption>
    In this screenshot: Above the form the text: "*" indicates required fields.
    This information is also in the label text: Your name *.
    </figcaption>
</figure>

{: .alert }
**Note for developers**: for screen reader users the indication if a field is required must be added in the code with a form field. Read [Mark if a form field is required for screen readers]({{site.baseurl}}/docs/topics/forms/required/required-screen-readers/) about how to do this.

## Indication required fields in WordPress form plugins

### Gravity Forms

Gravity Forms adds the possibility to select "Required" with each form field. In the form settings you can choose the type of Required Field Indicator. The explanation of this indicator is added automatically above the form.

### Other WordPress form plugins

{: .info }
We'd like to invite people familiar with form plugins to help us add instructions for WordPress form plugins. Like possibilities, settings and screenshots.
Please [contact us]({{site.baseurl}}/docs/contact/) if you want to help us with this additional content.

## Related WCAG Success Criteria

By indicating required fields, you meet WCAG success criterion [3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Related pages in this documentation

-  [Option 2: Marking only the non-required form fields]({{site.baseurl}}/docs/topics/forms/required/mark-non-required-fields/).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- Faizan Ahmed on UX Design World [Optimizing Form Design: Marking Required and Optional Fields in a Better Way](https://uxdworld.com/form-design-required-and-optional-fields/)
