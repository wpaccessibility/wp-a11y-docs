---
title: Provide help
layout: default
parent: Web forms
nav_order: 7
---

# Provide help filling out a form

### Provide instructions to help users with complex forms

Strong semantic structure, like what is provided by `fieldset` and `legend` is very helpful in understanding complex forms. However, providing assistance to users can sometimes make the difference between having a user complete a process and abandon it.

Instructions can range anywhere from an `aria-describedby` description associated with a single input, to a modal dialog that gives additional context or provides a worksheet to help the user calculate a value.

Importantly, the line between understandable and…not can be very blurry; and you should always be looking at your form with an empathetic eye. Your knowledge of the form is likely much greater than your user’s.

### Validate user input

If it is possible to know whether a value is acceptable before the form is submitted, you should provide accessible validation as soon as possible. That validation should do more than simply notifying the user there is a problem with the field; it should also tell them how to fix it, if you’re able to provide that information.

For example, in a required email field, you should be able to quickly identify the difference between a missing email and an invalid format, and provide feedback accordingly.

That feedback should be provided in an accessible notification. And on that point…
