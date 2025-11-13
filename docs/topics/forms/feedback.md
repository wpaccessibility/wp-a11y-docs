---
title: Feedback on errors
layout: default
parent: Web forms
nav_order: 9
---

# Feedback on form errors

{: .alert }
This content will be rewritten and expanded.  
Related issue on [GitHub #161 Feedback on form errors](https://github.com/wpaccessibility/wp-a11y-docs/issues/161).

## Provide accessible notifications

When a dynamic event occurs, it should be announced audibly by screen readers. A dynamic event is any event that is reacting to a user without a page refresh: either a direct scripted validation or an AJAX request.

A good way to announce dynamic notifications in WordPress is using [wp.a11y-speak()](https://make.wordpress.org/accessibility/handbook/best-practices/markup/wp-a11y-speak/). This JavaScript function is included in WordPress core and enables you to announce dynamic changes and notifications to screen reader users.

## Resources

- [A Guide to Accessible Form Validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/).
