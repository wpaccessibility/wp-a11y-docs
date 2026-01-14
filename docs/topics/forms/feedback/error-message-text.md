---
title: Write clear error messages
layout: default
parent: Feedback on errors
nav_order: 5
---

# Write a clear error message

“This field is required” or "Fill out this field" doesn't provide enough information for a user. A custom-written error message gives the user much more guidance.

## Help the user

Never blame the user if they don't understand the error message. Most people struggle with the amount of information and functionality on the web. Help users as much as possible to successfully submit the form.

Therefore, make error messages as descriptive and tailored as possible. Instead of “Invalid input” or “This field is required,” for example, write:

For example:
- Enter a valid email address, for example name@example.com.
- The expiration date of your passport must be in the future.
- Please enter your email address, so we can send you the confirmation of your appointment.

{: .callout .tip }
**Tip:** Use a period `.` at the end of the error message (or any other message). This causes the screen reader to pause briefly and makes it clearer that the error message is a separate sentence.

The GOV.UK design system provides clear (English-language) guidance on error message text: [Be clear and concise](https://design-system.service.gov.uk/components/error-message/). In the video [Help Users Recognize, Diagnose, and Recover from Errors](https://www.nngroup.com/videos/usability-heuristic-recognize-errors/), the Nielsen Norman Group gives tips on how to effectively help users fix errors.

Writing error message texts that clearly explain what went wrong is required to meet the following WCAG success criteria:

- [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/quickref/#error-identification) (Level A).
- [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion) (Level AA).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
