---
title: Placeholders
layout: default
parent: Web forms
nav_order: 3
---

# Placeholders in form fields

{: .alert }
This content needs to be rewritten and expanded.  
Related issue on [GitHub #163 Topic Input fields and form labels](https://github.com/wpaccessibility/wp-a11y-docs/issues/163).

A placeholder is not a substitute for a label. For all users to understand a form, a `label` should be connected to an `input`.

The placeholder attribute should not be used as a replacement for a label. For a longer hint or other advisory text, place the text next to the control. In this case, use `aria-describedby` to connect the descriptive text to the form input:

The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
