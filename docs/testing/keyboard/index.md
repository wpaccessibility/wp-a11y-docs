---
title: Keyboard only
layout: default
parent: Test for accessibility
nav_order: 6
---

# Keyboard navigation testing

All functionality should work using a **keyboard only**. This essential for all assistive technology to work properly. Most keyboard testing should be checked manually. The best time to test this is during development.

## How to keyboard test:

- [Keyboard Accessibility](https://webaim.org/techniques/keyboard/) by WebAIM
- [Workshop keyboard accessibility](http://rianrietveld.com/2016/05/10/keyboard/)

Tab through your pages, links and forms to do the following tests:

- Confirm all links can be reached and activated via keyboard, including any inside drop downs
- Confirm all links have a strong visible focus indicator
- Confirm all focusable [visually hidden content]({{site.baseurl}}/docs/topics/code/screen-reader-text/) (such as [skip links]({{site.baseurl}}/docs/topics/code/components/skip-links/)) becomes visible when in focus.
- Confirm all interactions – form fields, buttons, and other controls – can be triggered via keyboard. Any action you can complete with a mouse must also be possible from the keyboard.
- Perform keyboard tests both with a screen reader and without. Screen reader use of the keyboard can override custom keyboard scripting.



