---
title: Error summary
layout: default
parent: Feedback on errors 
nav_order: 6
---


# Provide a summary with form errors above the form

A very user-friendly way to display errors is a combination of a summary above the form and repeating the error message for each form field.

Each error message in the summary is also a link to the corresponding form field. This allows keyboard users to jump directly to the field with the error.

The structure is as follows:

- After submitting a form with errors, a list of errors is displayed above the form.
- This list has a heading with text like: “There was a problem with your submission. Please fix the errors below before continuing.”
- Below the heading is a list of error messages. Each error message is also a link to the corresponding form field.
- The heading above the errors receives keyboard focus. This ensures it is immediately visible, read aloud by screen readers, and that the tab order is logical: the links to the relevant fields are the next focusable items.

GOV.UK provides several clear examples of the [Error summary component](https://design-system.service.gov.uk/components/error-summary/.

Clear error messages are required to meet WCAG success criterion [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/quickref/#error-identification) (Level A).

## Setting Error summary in WordPress Plugins

### Gravity Forms

For a newly created form, go to the Form Settings tab and check Validation Summary: “On”.

### Other form plugins

{: .callout .info }
We'd like to invite people familiar with other plugins to add instructions for those plugins.
Please [contact us]({{site.baseurl}}/docs/contact/) if you want to help us with additional content.

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
