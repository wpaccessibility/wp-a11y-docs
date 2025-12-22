---
title: Skip to Content Link
layout: default
parent: Theme accessibility guidelines
description: The requirements for a Skip to Content link on accessibility-ready themes.
nav_order: 1
---

# Skip to Content Link

## Basic principle

Themes must include an in-page link that helps users navigate directly to content, bypassing navigation and other repeated elements in the header.

These links may be positioned off-screen initially, but must be available to screen reader and keyboard users and must become visible on focus. A minimally conforming skip link must:

* Be the first focusable element perceived by a user via screen reader or keyboard navigation.  
* Be visible when keyboard focus moves to the link.  
* Move focus to the main content area of the page when activated.

## Testing

**Tools**: browser (Chrome or Firefox) `tab`, `enter/return`

For every template being tested:

1. Log out of the website or view the page in another browser.  
2. Refresh the web page to ensure your focus is at the top.  
3. Press the `tab` key to verify that a skip link is present: look for a link with text like “Skip to content” or “Skip to main content” as the link text.  
4. Verify the skip link is the first focusable element on the page when not logged in.  
5. Verify the skip link becomes visible when it receives focus.  
6. Press the `enter/return` key to activate the skip link. The page may visually scroll or jump down.  
7. Press the `tab` key again to verify that the skip link points to the content area correctly. The tab focus should jump to the first focusable element in the main content area of the page (first button or link) and bypass all links, buttons, and form fields in the header.

The skip link must be tested on all page templates provided by the theme (home page, blog archive, post single, etc.), as its functionality on one page does not guarantee that it will work throughout the theme.  

## WCAG resources

* [Understanding: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)