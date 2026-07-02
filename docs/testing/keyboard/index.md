---
title: Keyboard only
layout: default
parent: Test for accessibility
description: Learn how to test for accessibility with your keyboard.
nav_order: 6
---

# Keyboard navigation testing

All functionality should work using a **keyboard**. This is essential for all assistive technology to work properly. Most keyboard testing should be checked manually. The best time to test this is during development.

## How to keyboard test

Note: before you start testing with a keyboard on a Mac, make sure the settings of your computer are set to allow keyboard navigation: [How to activate keyboard navigation on MacOS](https://www.a11y-collective.com/blog/how-to-activate-keyboard-navigation-on-macos/).

A **detailed guide** of how to test with a keyboard only is added to the theme accessibility-ready guideline: [Keyboard navigation support]({{site.baseurl}}//docs/accessibility-ready/theme-guidelines/keyboard-navigation-support/).

In short:

Tab through your pages, links, and forms to do the following tests:
- Confirm all links can be reached and activated via keyboard, including any inside drop-downs
- Confirm all links have a strong visible focus indicator
- Confirm all focusable [visually hidden content]({{site.baseurl}}/docs/topics/code/screen-reader-text/) (such as [skip links]({{site.baseurl}}/docs/topics/code/components/skip-links/)) becomes visible when in focus.
- Confirm all interactions like form fields, buttons, and other controls, can be triggered via keyboard. Any action you can complete with a mouse must also be possible from the keyboard.
- Perform keyboard tests both with a screen reader and without. Screen reader use of the keyboard can override custom keyboard scripting.


## Resources

- [Keyboard Accessibility](https://webaim.org/techniques/keyboard/) by WebAIM.
- [2.1.1 Keyboard](https://alphagov.github.io/guide-to-wcag/sc/2.1.1.html#how-to-check) on A guide to WCAG by the UK Government Digital Service.
