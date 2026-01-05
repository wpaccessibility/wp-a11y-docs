---
title: Screen reader text supported
layout: default
parent: Theme accessibility guidelines
description: How screen reader text must be supported on an accessibility-ready theme
nav_order: 17
---

# Screen reader text supported

## Basic principle

Accessibility-ready themes make it easier for content authors to create accessible websites. Themes must have a clearly defined and properly styled class, such as `.screen-reader-text` or `.sr-only`, that allows content creators to include text that is hidden visually but still read by assistive technologies without needing to write custom CSS. 

Including a screen reader text class makes it easier for content creators to add additional context for links, buttons, or form fields when building with the theme.

[See the required CSS for a screen reader text class.]({{site.baseurl}}/docs/topics/code/screen-reader-text/)

## Testing

**Tools:** Browser, browser inspector, text editor, screen reader (optional)

1. Open the `accessibility.txt` file saved in the main theme directory. This can be opened in a text editor or in the [theme file editor](https://developer.wordpress.org/advanced-administration/wordpress/edit-files/). If an `accessibility.txt` file is not present, this criterion can be considered a fail.  
2. Find the Screen Reader Text Class section and see which class is being used for screen reader text (e.g., `.screen-reader-text`, `.visually-hidden`, etc.).  
3. Open a post or page in the WordPress editor and insert a heading block.  
4. Type any text in the heading block.  
5. In the block settings \> Advanced section, apply the correct screen reader text class to the block in the Additional CSS Class(es) field.  
6. View the post or page on the front end.  
7. Verify that the text in the heading block is not visible.  
8. Open the browser inspector and find the heading in the HTML section so you can inspect the related CSS.  
9. Verify that the text is hidden using the required CSS linked above.
10. Optional: Listen to the page with a screen reader and confirm the hidden text is read.