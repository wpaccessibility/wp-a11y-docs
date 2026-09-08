---
title: Tables in code
layout: default
parent: Frontend code
description: How to create data tables in frontend development.
has_video: true
nav_order: 5
---

# Tables in frontend development

Tables are the recommended way to display tabular data. Tabular data is any data best navigated in two dimensions: where there are relationships both vertically along columns and horizontally in rows. Tables are not a good idea for layout, however.

Well-coded tables are important for screen reader users, so they can read, navigate, and understand the data.

This short video lets you listen to a screen reader announcing the information in a simple but well-structured table:
<video data-able-player data-youtube-nocookie="true" data-youtube-id="HRubrn1T3xU" data-heading-level="0"></video>

{: .info .callout }
How to add tables in the content is addressed in the “Content and Images” section [Tables in the content]({{site.baseurl}}/docs/topics/content/tables/).

## The basics

### Use an HTML table
Make sure you use an HTML`<table>`. Creating a pseudo-table for data by using divs and CSS will make the data much harder to understand for a screen reader user. The page [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) on MDN explains in detail how to set up an HTML table.

### Name the table

The `<caption>` describes the purpose of the table. It will be read out by screen readers, it gives the table its [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/). If you must, you can hide a caption with CSS like the [.screen-reader-text class]({{site.baseurl}}/docs/topics/code/screen-reader-text/).

If a caption is not possible, add a heading just above the table with a heading level that fits within the [heading structure]({{site.baseurl}}/docs/topics/content/headings/) of the page.

{: .callout .alert }
**Beware**: Using `<summary>` in a table is deprecated in HTML5 and should no longer be used.

### Use table headers

Use table headers to describe the columns and rows.  Header cells must be marked up with `<th>`, and data cells with `<td>`. For more complex tables, you may need `thead`, `colgroup`, `rowgroup`, `scope`, `id`, and headers attributes.

The W3C published an excellent tutorial for more complex tables on [how to write tables](https://www.w3.org/WAI/tutorials/tables/) at WAI/tutorials.

{: .callout .info }
**Note**: The rule of thumb is: the simpler, the better. If your table is going to be very complex, consider splitting it up into more tables or find a different way to organize your data. It will probably also be easier to read for all users.

## Examples

{: .callout .dont }
**Don't**: use a table purely for layout.  Using a table only for layout and not for displaying data makes the content hard to understand for screen reader user, because unrelated information about the table structure is also announced. 

```html
// Incorrect: don’t use a table for layout only, for example, in forms.
<table>
    <tr>
        <td><label for="blogname">Site Title</label></th>
        <td><input name="blogname" type="text" id="blogname" value="" /></td>
    </tr>
[...etc…]
</table>
```

{: .callout .dont }
**Don't**: use DIVs and CSS only to show tabular information. This way the HTML doesn't give any semantic information to screen reader users about how the data is structured. This relates to the WCAG success criterion [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) for more info.

```html
// Incorrect: don’t use meaningless divs to display meaningful data.
<div>
    <div class=”row”>The cities of WordCamp Europe</div>
    <div class=”row”>
        <div class=”cell1”><strong>Year</strong></div>
        <div class=”cell2”><strong>City</strong></div>
    </div>
    <div class=”row”>
        <div class=”cell1”>2017</div>
        <div class=”cell2”>Paris</div>
    </div>
    <div class=”row”>
        <div class=”cell1”>2018</div>
        <div class=”cell2”>Belgrade</div>
    </div>
</div>
```

{: .callout .do }
**Do**: use an HTML table with table headers and table calls to show tabular information. With a caption to give the table its accessible name.

```html
// A data table in its most basic form.
<table>
    <caption>The cities of WordCamp Europe</caption>
    <tr>
        <th>Year</th>
        <th>City</th>
    </tr>
    <tr>
        <td>2017</td>
        <td>Paris</td>
    </tr>
    <tr>
        <td>2018</td>
        <td>Belgrade</td>
    </tr>
</table>
```

### Can we use role="presentation"?

Yes, you can use the ARIA attribute `role="presentation"` or `role="none"` to tell a screen reader user that this is not a data table and let it read out like it is text. [ARIA: presentation role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) on MDN gives more information.

**Note**: removing the semantics from an HTML table can be done, but [don’t use ARIA to fix broken HTML](https://www.w3.org/TR/using-aria/#rule1). It’s a hack this way, not best practice. Use CSS instead for content layout. Adding the presentation role can be useful as a quick fix for legacy code, but not for new work.

## The Table block in WordPress

The [Table block in the WordPress Admin](https://wordpress.org/documentation/article/table-block/) is, at the moment, limited to table headings at the top and rows for the data below. 

Work is currently underway to improve and enhance the table block. You can follow this in the GitHub issue [Table V2: define accessibility requirements for table semantics and header associations](https://github.com/WordPress/gutenberg/issues/81722).

## Resources

{: .resource-h3}
### Related WCAG success criteria for tables

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).

{: .resource-h3}
### Related pages in this documentation

- [Tables in the content]({{site.baseurl}}/docs/topics/content/tables/) in Standards and best practice, Content and images.
- [Semantic HTML]({{site.baseurl}}/docs/topics/code/tables/) in Standards and best practice, Frontend code.
- [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/) in Standards and best practice, Frontend code.

{: .resource-h3}
### Other resources

- [Table element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/table) on developer.mozilla.org
- [How to write tables](https://www.w3.org/WAI/tutorials/tables/) for the W3C is at WAI/tutorials.
- [Creating Accessible Tables](http://webaim.org/techniques/tables/) on WebAIM.
- [It’s OK to use tables](http://adrianroselli.com/2012/07/its-ok-to-use-tables.html) by Adrian Roselli.

Tables can be challenging to make **responsive**. There are ways to do it while retaining accessibility:

- [Accessible Front-End Patterns For Responsive Tables](https://www.smashingmagazine.com/2022/12/accessible-front-end-patterns-responsive-tables-part1/), by Adrian Bece on Smashing Magazine.
- [A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html), by Adrian Roselli.
- [Responsive Tables for Humans, Web Crawlers, and Screen Readers](https://manu.ninja/responsive-tables-for-humans-web-crawlers-and-screen-readers) by Manuel Timelthaler.
