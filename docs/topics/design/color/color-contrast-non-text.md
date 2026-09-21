---
title: Color contrast of non-text
layout: default
parent: Color
description: Ensure sufficient color contrast between the background color and the color of components that carry important visual information.
nav_order: 3
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# Color contrast for non-text content

Maintain sufficient color contrast between interactive components that communicate content or meaning and their backgrounds to ensure important visual information remains visible to all users, including those with visual impairments.

User interface components and graphical objects like icons, toggle switches, sliders/range indicators, progress bars, form elements or data visualizations like graph lines, legend markers or, trend indicators. 

For these elements, the contrast ratio between foreground and surrounding colors should be **3:1 or higher**. The 3:1 contrast must be measured against **adjacent colors**, the color(s) immediately surrounding the element that help define its visibility.

The topic "Color contrast of text" provides you with links to [Color contrast checkers]({{site.baseurl}}/docs/topics/design/color/color-contrast-text/#color-contrast-checkers).

Examples are: 

- Meaningful icons, such as the three lines for a menu or an arrow pointing right for the next page.
- An icon that indicates the status of a message, such as an orange triangle for a warning and a green checkmark for success.
- An indicator or line in a graph that shows the trend of a metric.
- A red border indicating that an input field contains errors (in addition to the text error message).

### Form elements

The shape of checkboxes and radio buttons should have a contrast ratio of at least 3:1 against their surrounding colors, also for their checked and focus state. 

The border of input field and textarea elements should have a contrast ratio of at least 3:1 against their background but also against the inner color of the field. Ensure the focus state is clearly distinguishable form the normal state. For example, by making the border thicker or by using a different color with a higher contrast ratio.

{: .callout .info }
**Note**: The borders of controls, like buttons, with visible text or clear icons, don't need to meet color contrast requirements. The existing labels provide sufficient indication of their meaning. 

## Resources

{: .resource-h3}
### WCAG Success Criteria for color contrast of non-text content

- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/quickref/#use-of-color) (level A).
- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast) (Level AA).

{: .resource-h3}
### Related pages in this documentation

- [Sufficient color contrast of text and UI controls]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/sufficient-color-contrast/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Write out an error message in text]({site.baseurl}}/docs/topics/forms/feedback/error-message-format/) in Standards and best practice, Forms.

{: .resource-h3}
### Other resources

- [SC 1.4.11 - What does "Non-text Contrast" mean?](https://www.properaccess.nl/en/blog/wcag-1-4-11-non-text-contrast/), by Julia Tol for ProperAccess.
- [The Color Contrast Dilemma of Disabled Buttons in Accessible Design](https://medium.com/design-bootcamp/the-color-contrast-dilemma-of-disabled-buttons-in-accessible-design-59811fc89f62), by Salim Ansari.
