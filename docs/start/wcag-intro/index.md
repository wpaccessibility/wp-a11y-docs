---
title: Introduction to WCAG
layout: default
parent: Start with accessibility
nav_order: 2
---

# Introduction to WCAG

{: .alert }
Starter content. This content needs to be reviewed and expanded.  
Related issue on [GitHub #92 Introduction to WCAG](https://github.com/wpaccessibility/wp-a11y-docs/issues/92).  
If you want to work on this, please let us know before you start.

The primary guidance for web accessibility on a global basis are the Web Content Accessibility Guidelines, commonly referred to as WCAG. WordPress requires that all content meet WCAG guidelines, but also pushes to provide accessibility beyond that minimum whenever possible. 

These guidelines are created and updated by the Web Accessibility Initiative (WAI), a part of the international World Wide Web Consortium (W3C).

WordPress Accessibility Coding Standard:
<blockquote>
    <p>All new or updated code released in WordPress must conform with the WCAG 2.2 guidelines at level AA.</p>
    <cite><a href="https://make.wordpress.org/core/handbook/best-practices/coding-standards/accessibility-coding-standards/">WordPress Accessibility Coding Standard</a></cite>
</blockquote>

## WCAG explained

When building a new website, theme, or plugin, ask yourself these four questions:

- Is all content available to everyone? (Perceivable)
- Can visitors use all functionality? (Operable)
- Can visitors comprehend all content? (Understandable)
- Can visitors use any device? (Robust)

These are the four principles of Web Content Accessibility Guidelines (WCAG) of what a website should be: perceivable, operable, understandable and robust.

### Perceivable

Is all content available to everyone?

- Provide text alternatives for non-text content (e.g., images).
- Provide captions and other alternatives for multimedia.
- Create content that can be presented in different ways without losing meaning.
- Make it easy for users to see and hear content (e.g., by using color well, offering multimedia controls, and allowing text resizing).

### Operable

Can visitors use all functionality?

- Make all essential functionality available from a keyboard.
- Give users enough time to read and use content.
- Do not use content that causes seizures.
- Help users navigate and find content.

### Understandable

Can visitors comprehend all content?

- Make text readable and understandable.
- Use easy-to-comprehend text — avoid complex wording.
- Make content appear and operate in predictable ways.
- Guide users to avoid and correct mistakes.

### Robust

Can visitors use any device?

- Content must be able to be interpreted reliably by a wide variety of user agents, including assistive technologies.
- All user interface components should have programmatically determinable names and roles.

## Levels of Accessibility

There are 3 levels of accessibility:

- A (basic)
- AA (the global accessibility standard)
- AAA (for dedicated software)

TODO: add content about version

TODO: add info about different principle/ guideline/succes criteria/technique.

Most European Union and many other countries use the accessibility standard WCAG 2.1 AA or equivalent for their government websites. Some countries require compliance with these guidelines for commercial websites, so the accessibility team uses these guidelines to improve WordPress core. [Overview of government accessibility laws and policies](Web Accessibility Laws & Policies) from the Web Accessibility Initiative.

The [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) is a good starting to read the guidelines. Use common sense when following WCAG techniques. Pick the one(s) that work well with your theme or plugin.

Decide which browser and versions your theme or plugin will support. Some WCAG techniques apply only to older browsers, e.g, Internet Explorer 7 and below. WordPress no longer supports Internet Explorer as of version 5.8.

TODO: what is the WP baseline now? A link may be better.

TODO: Link to Standards and best practice/ WCAG (to be written) for more in dept info
