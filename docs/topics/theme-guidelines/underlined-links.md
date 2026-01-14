---
title: Underlined links in text
layout: default
parent: Theme accessibility guidelines
description: Accessibility-ready theme requirements for how to indicate links in text
nav_order: 7
---

# Underlined links in text

## Basic principle

Links within large sections of text (e.g., post content or comments) must be underlined. When links appear within a larger body of block-level content, they must be clearly distinguishable from surrounding content. Links in navigation-like contexts (e.g. menus, lists of upcoming posts in widgets, grouped post meta data) do not need to be specifically distinguished from surrounding content.

The underline is the only accepted method of indicating links within content. Bold, italicized, or color-differentiated text are ambiguous and will not pass. Underlines should disappear on hover or there should be some other visual change on hover that does not rely on color alone to indicate if the link is being hovered.

## Testing

**Tools:** Visual inspection, mouse.

1. When using the Theme Unit Test data, navigate to the "Markup: HTML Tags and Formatting" page.  
2. Look at the examples for links within post content and verify that they are underlined.  
3. Hover over the link with your mouse and ensure there is a change to indicate the over state that does not rely on color alone (e.g., removing the underline, adding a thicker underline or icon, etc.)  
4. Navigate to the "Page with comments" page.   
5. Look at the example comments and verify that links are underlined and that the underline disappears on hover.  
6. If there are sidebars, add a text widget or paragraph block to a sidebar and add a link within the widget or block.  
7. Verify that links in a text widget are underlined and that the underline disappears on hover.  
8. If there is an editable footer (via widgets or blocks), add a link in a paragraph within the footer.  
9. Verify that links in footer paragraphs are underlined and that the underline disappears on hover.  
10. Review the overall design of the theme to identify other links contained within text blocks that may also need underlines.

**Note:** The WordPress block editor generates button links that may not have underlines. It is not required that themes force underlines on block-generated button links, so long as there is styling differentiating them from plain text.

## WCAG resources

* [Understanding: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.htm)