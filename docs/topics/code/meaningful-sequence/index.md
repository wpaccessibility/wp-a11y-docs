---
title: Meaningful sequence
layout: default
parent: Frontend code
description: A screen reader user hears page content in the HTML order, which should correspond to what a sighted visitor sees on screen. Ensure everyone understands which information belongs to which section regardless of how they use the page.
nav_order: 5
has_video: true
contributors:
  - Rian Rietveld
  - Joe Dolson
---

## Meaningful reading sequence

Screen reader yours read information on a webpage from top to bottom. It is therefore essential that the information is also coded in this same reading order.

Additionally, screen reader users can pull up a list of headings and select one to begin reading from that point on the page. This allows them to quickly jump to the information they want to read. However, if there is information above a heading that relates to it, the screen reader user will miss that content.

CSS can visually move elements without changing the HTML order using flexbox. The reading order may differ from the visual order, but the meaning must stay the same. A screen reader follows HTML order, not visual order. If the order has meaning, adjust the HTML instead of using CSS order.

## Use cases

### Metadata

If information like a date or category appears above the heading in the HTML, it seems to belong to the previous article.

For example:
In a list of events, the category and date appear above the heading. Visually, a border or container around the event details makes it visually clear which elements belong together. The screen reader user, however, misses the correct category and date for that event when they start reading from the heading. This is demonstrated using the VoiceOver screen reader in the video below.

<video data-able-player data-youtube-nocookie="true" data-youtube-id="Hn2GHgRLzjE" data-heading-level="0"></video>

### Table data

A table links data together: a day to an opening time, a name to a role. A properly structured HTML table using `<table>` with table rows `<tr>`, header cells `<th>`, and data cells `<td>`, preserves that relationship. A table rebuilt with `<div>` elements and CSS can cause a screen reader to read all the days first, followed by all the times.

More about accessible tables in:
- [Tables in the content]({{site.baseurl}}/docs/topics/content/tables/) in Content and images.
- [Tables in front-end development]({{site.baseurl}}/docs/topics/code/tables/) in Frontend code.

## How to test

### For everyone

* Read the page from top to bottom without looking at the layout. Is the information order logical? Do you understand which text belongs to which section?
* Pay attention to pages with multiple columns, cards, or lists. Would the information still make sense if everything were stacked vertically?
* Open an accordion, tab panel, or dialog window. Is new content shown in a logical place?
* Shrink your browser window or rotate your phone. Does the content order change? Is it still understandable?

### For developers

* Disable CSS. In Firefox: choose View > Page Style > No Style from the menu. Check whether content stands in a understandable order.
* View the Accessibility Tree in DevTools. Verify the order matches the visual order.
* Search your CSS for `order`, `flex-direction: row-reverse`, `flex-direction: column-reverse`, and `grid-row`/`grid-column` that change visual order. Verify the HTML order stays logical.
* Linearize tables with the Web Developer extension (Miscellaneous tab > Linearize Page). Verify the information still holds.
* Test dynamic content with a screen reader. Open an accordion, tab, or dialog window and verify content reads in the correct order. Read [Screen reader testing]({{site.baseurl}}/docs/testing/screen-readers/) how to set up testing with a screen reader
* Test across different responsive views and zoom to 400%. Verify reading order remains intact.

## WCAG Success Criteria for meaningful sequence

- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).
- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [2.4.3 Focus order](https://www.w3.org/WAI/WCAG22/quickref/#focus-order) (Level A).
- [4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/quickref/#name-role-value) (Level A).

### Related pages in this documentation

- [Keyboard navigation support]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/keyboard-navigation-support/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Place the label above the form field]({{site.baseurl}}/docs/topics/forms/input-label/label-location/) in  Web forms, Input and label.
- [Place descriptions between label and form field]({{site.baseurl}}/docs/topics/forms/descriptions/location-description/) in Web forms, Input and description.
- [Tables in the content]({{site.baseurl}}/docs/topics/content/tables/) in Content and images.
- [Tables in front-end development]({{site.baseurl}}/docs/topics/code/tables/) in  Frontend code.

### Other resources

- [Ordering flex items](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), by MDN.
- [SC 1.3.2 - What does "Meaningful Sequence" mean?](), by Julia Tol for Proper Access.
