---
title: Tables in the content
layout: default
parent: Content and images
description: How to add a table to the content in an accessible way.
nav_order: 4
date_created: September 02, 2026
---

# Tables in the content

When you want to show information in a structured way, a table made up of rows and columns is a clear way to present your data. How to do this in a way everyone understands the information?

<table>
<caption>The cities of WordCamp Europe</caption>
  <thead>
    <tr>
      <th>Year</th>
      <th>City</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>2026</td>
        <td>Krakow</td>
        <td>Poland</td>
    </tr>
    <tr>
        <td>2025</td>
        <td>Basel</td>
        <td>Switzerland</td>
    </tr>
    <tr>
        <td>2024</td>
        <td>Torino</td>
        <td>Italy</td>
    </tr>
</tbody>
</table>

A few things are important to make the data understandable for users that rely on assistive technology like a screen reader:

- Make sure you use a real HTML table and not, for example, spaces or other dividers to separate the data.
- Use table headers to describe the columns and rows.
- If possible, give the table a caption to describe the purpose of the table. If that is not possible, give the table a heading that fits in the [heading structure]({{site.baseurl}}/docs/topics/content/headings/) of the page.

When designing the structure of a table, keep in mind: when a complex table is hard to make accessible, it's probably also hard to understand for every reader. Best split up a complex table in multiple tables or use, for example, unordered lists. Keep it as simple as possible, always keep your reader in mind.

{: .callout .warning}
**Warning:** Using a table only for layout and not for displaying data makes the content hard to understand for screen reader users. It is actually a WCAG violation to use a table for layout only. See [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships).

## The table block in WordPress Admin

With the default Table block you can create simple and accessible tables. This example is created with WordPress 7.1.

Step 1. When editing or adding a post, search for the table block and select it.
![Search for the table block]({{site.baseurl}}/assets/images/table-step-1.png)

Step 2. Select how many columns and rows you want in the table and add the table to the content.

Step 3. Give the table a sort heading that describes the purpose of the table.

Step 4. Select the table block and select with the options: Header section.
![Check the Header section]({{site.baseurl}}/assets/images/table-step-4.png)

Step 5. Fill in the table headers and the cells.

Step 6. Save the post and check the table on the webpage
![SCreenshot of the table in the web page]({{site.baseurl}}/assets/images/table-step-6.png)

These are the current options to create an accessible table in the WordPress Admin. If you want more, try out one of the plugins that can add more features to the table block, like row headers and captions. Before using a plugin, make sure it creates accessible tables in the website. You can test this by using a test tool like the [WAVE Browser Extension](https://wave.webaim.org/) on the webpage with the table.

Work is currently underway to improve and enhance the table block in the WordPress Admin. You can follow this in the GitHub issue [Table V2: define accessibility requirements for table semantics and header associations](https://github.com/WordPress/gutenberg/issues/81722).

## Resources

### Related WCAG success criteria for tables

- [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence) (Level A).

### Related pages in this documentation

- [Tables in theme and plugin development](/docs/topics/code/tables/) in Frontend code.
- [Semantic HTML]({{site.baseurl}}/docs/topics/code/tables/) in Frontend code.

### Other resources

- [Creating Accessible Tables](https://webaim.org/techniques/tables/), by WebAIM
- [How to Create Tables in WordPress Using the Block Editor, Plugins, and External Sources](https://www.hostinger.com/tutorials/how-to-add-tables-in-wordpress/), by Jordana Alexandrea on Hostinger.
