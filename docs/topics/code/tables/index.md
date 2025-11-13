---
title: Tables
layout: default
parent: Frontend code
nav_order: 5
---

# Tables in theme and plugin development

{: .alert }
This content will be reviewed and restructured.  
Related issue on [GitHub #144 Topic Tables in theme and plugin development](https://github.com/wpaccessibility/wp-a11y-docs/issues/144).  

Tables are the recommended way to display tabular data. Tabular data is any data that is best navigated in two dimensions: where there are relationships both vertically along columns and horizontally in rows. Tables are not a good idea for layout, however.

Well-coded tables are important for screen reader users, so they can read, navigate, and understand the data.

Creating a pseudo-table for data by using divs and CSS will make the data much harder to understand for a screen reader user.

## Examples

### Incorrect: a table purely for layout

```html
// Incorrect: don’t use a table for layout only, for example in forms.
<table>
    <tr>
        <td><label for="blogname">Site Title</label></th>
        <td><input name="blogname" type="text" id="blogname" value="" /></td>
    </tr>
[...etc…]
</table>
```

### Incorrect: divs show tabular information

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

### Correct: a table to show tabular information

```html
// A data table in it’s most basic form.
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

Header cells must be marked up with `<th>`, and data cells with `<td>`. For more complex tables, you may need `thead`, `colgroup`, `rowgroup`, `scope`, `id`, and headers attributes. The W3C WAI has a good and complete tutorial on [how to do complex tables](https://www.w3.org/WAI/tutorials/tables/).

### Caption or summary?

- A caption functions like a heading for a table
- Using `<summary>` in a `<table>` is deprecated in HTML5 and should no longer be used.

## Can we use role=presentation?

Yes, you can use the ARIA attribute [role=presentation](https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/presentation/PresentationRoleExamples.html) to tell a screen reader user that this is not a data table and let it read out like it is text.

This works, but don’t use **ARIA to fix broken HTML5**. It’s a hack this way, not a best practice.

## Complexity

The rule of thumb is: the simpler, the better. If your table is going to be very complex, consider splitting it up into more tables or find a different way to organize your data. It will probably also be easier to read for sighted users.

## Resources

- [Table element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/table) on developer.mozilla.org
- A good tutorial on [how to write complex tables](https://www.w3.org/WAI/tutorials/tables/) for the W3C is at WAI/tutorials
- [Creating Accessible Tables](http://webaim.org/techniques/tables/)
- [It’s OK to use tables](http://adrianroselli.com/2012/07/its-ok-to-use-tables.html)

### Responsive tables

One of the major limitations to tables is that they are difficult to make responsive. There are ways to do it while retaining accessibility.

- [Accessible, Simple, Responsive Tables](https://css-tricks.com/accessible-simple-responsive-tables/)
- [A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html), by Adrian Roselli
- [Responsive Tables for Humans, Web Crawlers and Screen Readers](https://manu.ninja/responsive-tables-for-humans-web-crawlers-and-screen-readers)
