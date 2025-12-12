---
title: Mark optional form fields
layout: default
parent: Required fields
nav_order: 3
description: Clearly indicate to the user if a form field is optional.
---

# Option 2: Marking only the optional form fields

Clearly indicate to the user if a form field is optional.

Assuming that you only request essential information in forms, most fields will be required. Then, optional fields are the exception. You can choose to mark only the optional fields visually. Do this by informing the user above the field and by including the text '(optional)' in the label for optional fields.

## Example

<figure>
<img src="{{site.baseurl}}/assets/images/mark-non-required-form-fields.png" alt="Screenshot form indicating non-required fields">
    <figcaption>
    In this screenshot: Above the form the text: "All questions are required except the questions marked as (optional)".
    This information is also in the label text: Your Pronouns (optional).
    </figcaption>
</figure>

{: .callout .alert }
**Note for developers**: for screen reader users, the indication if a field is required must be added in the code with a form field. Learn how to [Indicate required fields for screen readers]({{site.baseurl}}/docs/topics/forms/required/required-screen-readers/).

## Indication of optional fields in WordPress form plugins

{: .callout .info }
**Help wanted:** We want to invite people familiar with form plugins to help us add instructions for WordPress form plugins, including options, settings, and screenshots.
Please [contact us]({{site.baseurl}}/docs/contact/) if you want to help us with this additional content.

## Related WCAG Success Criteria

By indicating required fields, you meet WCAG success criterion [3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions).

## Related pages in this documentation

-  [Option 1: Marking only the required form fields]({{site.baseurl}}/docs/topics/forms/required/mark-required-fields/).
- [Indicate required fields for screen readers]({{site.baseurl}}/docs/topics/forms/required/required-screen-readers/).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- Faizan Ahmed on UX Design World [Optimizing Form Design: Marking Required and Optional Fields in a Better Way](https://uxdworld.com/form-design-required-and-optional-fields/)
