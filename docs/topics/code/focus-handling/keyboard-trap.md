---
title: Keyboard trap
layout: default
parent:  Handling focus
nav_order: 7
description: Make sure keyboard users are always able to navigate away from components on a web page.
---

# Avoid a keyboard trap

A keyboard trap is when keyboard users get stuck in a part of a page and can't navigate out using the keyboard alone.
Make sure keyboard users are always able to navigate away from components on a web page.

According to [Understanding SC 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html): If the keyboard focus can be moved to a component of the page using a keyboard interface, then the focus can be moved away from that component using only the keyboard. 

When you develop a custom component and the keyboard focus cannot be moved using standard keys such as escape, arrows, or tabs, then inform the user about how they can operate and leave the component by keyboard. 

A keyboard trap and a focus trap are two different patterns:
- **Keyboard trap** is a WCAG violation, the keyboard user is stuck and cannot escape.
- **Focus trap** is a feature, the keyboard focus is intentionally contained, but the user can always move away.

More about the focus trap on: [Sustain keyboard focus within a responsive menu or dialog component]({{site.baseurl}}/docs/topics/code/focus-handling/focus-trapping/).

## How to test

How to test with a keyboard is described with [Keyboard navigation testing]({{site.baseurl}}/docs/testing/keyboard/) in this documentation.

- Navigate the page using the keyboard.
- Especially test forms, filters, modals, menus and tabular interfaces.
- If you can't navigate further or back out of the component, check for instructions on how to do so.

## Resources

### WCAG Success Criteria for keyboard focus

- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/quickref/#keyboard) (Level A).
- [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus) (Level A).
