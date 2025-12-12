---
title: WordPress Core
layout: default
parent: Standards and best practice
nav_order: 7
---

# WordPress Core Accessibility Standards

{: .callout .alert }
**Alert:** This content will be reviewed and restructured. 
Related issue on [GitHub #122 Topic WordPress Core Accessibility Standards](https://github.com/wpaccessibility/wp-a11y-docs/issues/122).  

{: .callout .warning }
**Warning:** This is duplicate content? see also [Accessibility Coding Standards ](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/accessibility/)in the coding standards handbook WCAG 2.0 must be WCAG 2.2?
The content should be reviewed for modern code and the links adjusted and divided between the topics.

When creating new interfaces in core, the output and interactions are expected to conform to WCAG 2.0 at level AA. But beyond that, there are some specific patterns that the accessibility team and core team have agreed on as the preferred method for structure.

Though there are many patterns that meet accessibility standards, being consistent across the platform is a key method to ensure that WordPress as a whole is easier to use.

This document is supplemental guidance to help developers meet the [WordPress Accessibility Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/accessibility/).

**TODO:** should this stay or should it go?

## HTML Semantics

Take a pragmatic approach to HTML semantics. Don’t add semantics purely for the sake of semantics; but if there is an HTML structure that clearly matches the content, use that element. For example, if you have a group of links, it should most likely use a list element.

### Heading structure

The H1 is the main heading representing the page title on every core page. For subsections, use a reasonable HTML heading structure — including the use of heading elements for page subsections. Heading markup should not be used for presentational purposes.

- Use H2 through H6 to give internal structure to the page.
- Don’t skip heading levels.
- Don’t add extra functionality inside a heading, like links or buttons.

### Semantics for Controls

Controls with a native keyboard interaction (buttons or links) are always preferred. If there is a valid target link for the control, either an in-page reference or a link, then the control should use an `<a href="{your-valid-target}">`. If there isn’t, it should use a `<button>`.

If you’re updating an existing control, button or link decision logic:

<table>
    <caption>Semantics for Controls</caption>
    <tr>
        <th>Scenario</th>
        <th>Choice</th>
    </tr>
    <tr>
        <td>Anchors with null or meaningless HREF values: href=’#’, no href, href=’#something’ where #something does not exist</td>
        <td><code>button</code></td>
    </tr>
    <tr>
        <td>Anchors with meaningful on-page HREF values href=’#something’ where #something does existAnchors with meaningful on-page HREF values href=’#something’ where #something does exist</td>
        <td><code>button</code> or <code>a href='#target'</code></td>
    </tr>
    <tr>
        <td>Anchors with meaningful off-page HREF values that are renderable (but actual behavior is AJAX)</td>
        <td>Link when JS not available, button the rest of the time.</td>
    </tr>
    <tr>
        <td>Anchors with meaningful off-page HREF values that are <strong>not</strong> renderable</td>
        <td>Should be a button, but perhaps the target should be made renderable</td>
    </tr>
    <tr>
        <td>Buttons that direct to new locations on the same page</td>
        <td>Could be either a button or a link.</td>
    </tr>
    <tr>
        <td>Buttons that direct to new locations on different pages.</td>
        <td>Should be a link.</td>
    </tr>
</table>

## Dynamic Content

When there are dynamic changes within a page without a page reload you must provide audible feedback with ARIA for important changes, like a successful save event, for example.

Use wp.a11y.speak() for all simple AJAX responses. If you are doing a complex interaction, wp.a11y.speak() may not be the best choice. In that case, discuss your usage with the Accessibility team to determine whether extending wp.a11y.speak() or coding your own ARIA live regions is the best choice.

- [Let WordPress Speak: introduction to wp.a11y.speak()](https://make.wordpress.org/accessibility/2015/04/15/let-wordpress-speak-new-in-wordpress-4-2/)
- [Mozilla developer documentation on ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Color Contrast

In most cases, feature plug-ins are not expected to add or modify colors in core. However, if a feature plug-in needs to add new color combinations, those combinations must meet minimum contrast requirements. Minimum contrast requirements are 4.5:1 for font sizes rendering smaller than 24px or smaller and 3.0:1 for font sizes larger than 24px or 19px and bold.

- [WordPress Accessibility Quick Start: Color Contrast](https://make.wordpress.org/accessibility/handbook/quick-start-guide/#color-contrast)

## Links: underline or no underline?

When links can be identified clearly by context, for example because they’re part of a menu, or a set of links clearly identified as user interface controls, they don’t need to be underlined. In other cases, especially for links surrounded by other text (in a line or block of text), links should be underlined.
Keyboard Accessibility

Users must be able to reach and successfully interact with all elements on the page that are actionable, including all form inputs, buttons and links by using the keyboard. They must be able to see a visual indicator of keyboard focus. You should be aware that keyboard events may operate differently when a screen reader is running.

If you can complete an action with a mouse, you must also be able to complete that action using the keyboard.

Be aware of where keyboard focus is traveling. When a modal dialog is opened, focus should be moved into the dialog. When a disclosure is toggled, the next tab press should move the user inside the content of the disclosure container.

- [Keyboard testing techniques](https://webaim.org/techniques/keyboard/) on WebAIM
- [Where to place focus when deleting a thing](https://adrianroselli.com/2023/08/where-to-put-focus-when-deleting-a-thing.html#:~:text=TL%3BDR%3A%20When%20deleting%20something,control%20or%20its%20grouping%20container.) by Adrian Roselli

## Images and Icons

Any image resource must include an accessible name. In some cases, the accessible name should be an empty string. An image can be an `<img>` element, an icon font, or an svg element; but any graphical representation is considered an image for these purposes. Different types of graphics use different types of accessible names.

For `<img>` elements, the accessible name should be in the alt attribute. If the img is ornamental, the alt attribute should still be included, but left empty.

For icon fonts, the icon itself should have the aria-hidden attribute, with screen-reader-text in a neighbor element. If the icon is ornamental, the font icon should still have the aria-hidden attribute, but the screen reader text should be omitted.

```html
<a href="this.html">
<span class="dashicons dashicon-thumbs-up" aria-hidden="true"></span>
<span class="screen-reader-text">Something</span>
</a>
```

For SVG, the SVG should be inline, so that accessible information isn’t hidden from assistive technology. SVG elements should contain a `<title>` element with the accessible name of the image. For cross-technology support, the title element should be associated with the svg element via `aria-labelledby`. For maximum compatibility, all SVG elements used to represent an image should carry the role attribute with a value of `img`.

If the SVG element is ornamental, then the title element should be omitted and no aria-labelledby attribute should be present. The SVG element should also carry the aria-hidden attribute.

- [More information on SVG Accessibility](http://www.sitepoint.com/tips-accessible-svg/) by Léonie Watson

### Labeling

Existing code uses a mixture of explicitly and implicitly labeled fields, but all new code must use an explicitly associated <label> element (using for/id attributes and not wrapping the form control). Labels are not required to be visible, but must use the .screen-reader-text class when hidden. Placeholders are fine, but are not a substitute for labels. For all labels, clicking on the field label should cause the associated field to receive focus or, for checkboxes and radio selectors, select that choice.

Don’t introduce new title attributes to convey information. Use `aria-label` when you need to provide an alternate label and `.screen-reader-text` if you’re appending additional data.

When using `aria-label`, be sure that the `aria-label` value contains any visible text on the control. The visible text should be the first part of the `aria-label` text. E.g.

```html
<button type="button" aria-label="Delete this post">Delete</button>
```

When creating forms, use `<fieldset>` and `<legend>` to group logically related form elements inside complex forms or to group radio buttons and checkboxes under a heading.
