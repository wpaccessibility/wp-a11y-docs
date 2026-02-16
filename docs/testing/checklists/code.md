---
title: Frontend code checks
layout: default
parent: Checklists
nav_order: 5
---

# Frontend checks for web accessibility

Testing for valid, semantic HTML is essential for the accessibility of your work. In this page we list some essential requirements and best resources. It gives you the minimum tests you need to do during development and before you commit your work.

While you develop, always check the following items while developing: keyboard navigation, W3C validation, WCAG 2 AA validation and then announcement of dynamic changes for screen readers.

{: .callout .info }
**Note**: automated testing is not perfect. Automated testing rarely catches more than about 30% of types of issues. It also gives false positives. Manual testing is required to find most issues.

## What is web accessibility?

_Using semantic, meaningful, valid HTML5_.

The way all devices, browsers and users can understand and interact with the functionality on a web page. The best resource for HTML5 is the [Mozilla Developer Network web docs](https://developer.mozilla.org/en-US/).

For WordPress, we aim to meet [WCAG accessibility guidelines](https://www.w3.org/WAI/) at level AA and the [W3C standards](https://www.w3.org/standards/webdesign/htmlcss). In the section [Accessibility standards and best practice]({{site.baseurl}}/docs/topics/) you’ll find documentation and resources.

You need to do two different checks, one for **keyboard navigation** and one for **DOM validation**.

### Key topics to check

- [Write semantic, meaningful HTML]({{site.baseurl}}/docs/topics/code/semantics/)
    - Use a `<button>` to invoke an action and an `<a>` for a change of location.
    - A `<div>` or `<span>` doesn’t natively provide interactivity, and should not be used for links or buttons.
- [Heading text and level matter]({{site.baseurl}}/docs/topics/code/heading-structure/)
- [Make link and button text meaningful]({{site.baseurl}}/docs/topics/content/links/link-text/)
- Use the [.screen-reader-text]({{site.baseurl}}/docs/topics/code/screen-reader-text/) class, a CSS class to hide text visually while leaving it available to screen readers.
- Always give images a proper alt attribute following the [alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- Forms:
    - always explicitly link [labels to an input control](https://webaim.org/techniques/forms/controls). If the label must be invisible for the design, hide it with the screen-reader-text class
    - Wrap check box groups and radio buttons in a [`<fieldset>`]({{site.baseurl}}/docs/topics/forms/fieldsets/) and add a `<legend>` describing the group of controls
- Always define both a `:hover` and `:focus` states in your CSS
- Announce dynamic changes with [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) or [wp.a11y.speak()]({{site.baseurl}}/docs/topics/code/dynamic-changes/)
