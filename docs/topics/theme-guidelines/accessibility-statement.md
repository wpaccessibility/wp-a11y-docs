---
title: Accessibility Statement
layout: default
parent: Theme Accessibility Guidelines
nav_order: 16
description: Accessibility Statement requirements for Accessibility-ready themes
---

# Accessibility Statement

### Basic Principle

Accessibility Ready themes must include an `accessibility.txt` file to help website owners make informed decisions when choosing a theme. 

This file has a standardized format outlining the theme's accessibility audit status, how it has been tested, and any included accessibility features. It also provides information on reporting accessibility issues, making it easier to ensure that websites remain compliant with accessibility standards over time.

### Testing

**Tools:** browser or text editor.

1. Verify that there is a file in the main theme directory named `accessibility.txt`.  
2. Open the `accessibility.txt` file with a text editor or the [theme file editor](https://developer.wordpress.org/advanced-administration/wordpress/edit-files/).  
3. Review the contents of the file and verify it adheres to the WordPress [accessibility readme standard.](?tab=t.yqftxgy69g2k)

## Screen Reader Text Supported

### Basic Principle

Accessibility-ready themes make it easier for content authors to create accessible websites. Themes must have a clearly defined and properly styled class, such as `.screen-reader-text` or `.sr-only`, that allows content creators to include text that is hidden visually but still read by assistive technologies without needing to write custom CSS. Including a screen reader text class makes it easier for content creators to add additional context for links, buttons, or form fields when building with the theme.

[See the required CSS for a screen reader text class.](https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/)

### Testing

**Tools:** Browser, browser inspector, text editor, screen reader (optional)

4. Open the accessibility.txt file saved in the main theme directory. This can be opened in a text editor or in the [theme file editor](https://developer.wordpress.org/advanced-administration/wordpress/edit-files/). If an accessibility.txt file is not present, this criterion can be considered a fail.  
5. Find the Screen Reader Text Class section and see which class is being used for screen reader text (e.g., `.screen-reader-text`, `.visually-hidden`, etc.).  
6. Open a post or page in the WordPress editor and insert a heading block.  
7. Type any text in the heading block.  
8. In the block settings \> Advanced section, apply the correct screen reader text class to the block in the Additional CSS Class(es) field.  
9. View the post or page on the front end.  
10. Verify that the text in the heading block is not visible.  
11. Open the browser inspector and find the heading in the HTML section so you can inspect the related CSS.  
12. Verify that the text is hidden using the required CSS linked above.  
13. Optional: Listen to the page with a screen reader and confirm the hidden text is read.
