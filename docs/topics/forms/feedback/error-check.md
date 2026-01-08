---
title: Check at the right moment
layout: default
parent: Feedback on errors
nav_order: 1
---

# Check for form errors at the right moment

It’s important to choose the right moment to validate user input of a form field.

## Validate when the user is finished filling out a form field

Imagine you’re typing an email address and, after entering just the first character, already an error message appears saying “Invalid email address.”

That message only disappears when the entire email address is filled out. This is not only annoying, it can also cause uncertainty and confusion: “What am I doing wrong? I’m not even finished yet, and it’s already wrong!”

Validate a field when the user leaves the input field (on blur and input), or when the form is submitted.

## Resources

- For more information about the drawbacks of “live” validation, read [The problem with live validation and what to do instead](https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/) by Adam Silver.
- HTML form validation still has accessibility issues in 2026, please read [HTML form validation]({{site.baseurl}}//docs/topics/forms/feedback/html-form-validation/) for more context.
- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
