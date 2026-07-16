---
title: Frontend code checks
layout: default
parent: Test for accessibility
description: Learn how to perform frontend code checks for web accessibility.
nav_order: 5
---

# Frontend checks for web accessibility

Testing for valid, semantic HTML is essential for the accessibility of your work. On this page we list some essential requirements and best resources. It gives you the minimum tests you need to do during development, preferably before you ever commit your work.

{: .callout .info }
**Note**: test web accessibility against the generated DOM and not only on the codebase itself.

While you develop, always test the following items:

- [Semantic Markup (HTML)]({{site.baseurl}}/docs/topics/code/semantics/) to help your code work on every device and browser. 
- The generated DOM passes [Web Content Accessibility Guidelines (WCAG)]({{site.baseurl}}/docs/start/wcag-intro/) validation.
- All functionality must work with [keyboard only]({{site.baseurl}}/docs/testing/keyboard/).
- [Dynamic changes]({{site.baseurl}}/docs/testing/screen-readers/) in the DOM are properly announced for screen reader users.

Most checks for valid HTML and WCAG can be done with [automated accessibility testing]({{site.baseurl}}/docs/testing/automated/) in your browser or CLI suite, but most keyboard interaction and dynamic changes must be tested manually. 

For WordPress, we aim to meet [WCAG accessibility guidelines](https://www.w3.org/WAI/WCAG22/quickref/) version 2.2 at level AA and the [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/). 

In the section [Accessibility standards and best practice]({{site.baseurl}}/docs/topics/code/) you’ll find documentation and resources.

{: .callout .alert }
**Note**: automated testing is not perfect. Automated testing doesn't catch all accessibility issues and can give false positives. Additional manual testing is always required.

## The main topics to check

- Make sure all interactive elements have an [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/), so screen readers users know what the interaction is.
- [Write semantic, meaningful HTML]({{site.baseurl}}/docs/topics/code/semantics/).
    - Use a `<button>` to invoke an action and an `<a>` for a change of location.
    - A `<div>` or `<span>` doesn’t natively provide interactivity, and should not be used for links or buttons.
- [Heading text and level matter]({{site.baseurl}}/docs/topics/code/heading-structure/).
- Use [landmarks to group content]({{site.baseurl}}/docs/topics/code/landmarks/) and make sure they are properly announced by screen readers.
- Write meaningful [link and button texts]({{site.baseurl}}/docs/topics/content/links/link-text/).
- Use the [.screen-reader-text]({{site.baseurl}}/docs/topics/code/screen-reader-text/) class, a CSS class to hide text visually while leaving it available to screen readers.
- Always give images a proper alt attribute following the [alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- Forms:
    - always explicitly connect [labels to an input control]({{site.baseurl}}//docs/topics/forms/input-label/accessible-name/). If the label must be invisible for the design, hide it with the screen-reader-text class.
    - Wrap check box groups and radio buttons in a [`<fieldset>`]({{site.baseurl}}/docs/topics/forms/fieldsets/) and add a `<legend>` describing the group of controls
- Always define both a `:hover` and `:focus` states in your CSS, this is explained in [Visibility of the keyboard focus]({{site.baseurl}}/docs/topics/code/focus-handling/visual-focus/).
- Announce dynamic changes with [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) or [wp.a11y.speak()]({{site.baseurl}}/docs/topics/code/dynamic-changes/).

The [accessibility-ready program for WordPress]({{site.baseurl}}//docs/accessibility-ready/) provides you with the requirements for meeting the accessibility-ready tag for themes. Each requirement includes a detailed description of how to test for it.
