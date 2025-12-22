---
title: No ambiguous link text
layout: default
parent: Theme accessibility guidelines
description: Accessibility-ready theme requirements for ambiguous link text
nav_order: 8
---

# No ambiguous link text

## Basic principle

The text of a link should be sufficient for a user to distinguish it from other links on the same page, and should be useful when taken out of context. Screen readers contain shortcuts that allow users to view and navigate to all links on a page. Repetitive or unclear link text can make it difficult for screen reader users to understand where links go and why they want to click them. Additionally, the same text within a page should not point to different URLs.

Examples of ambiguous link text include “read more”, “continue reading”, “keep reading”, “more”, “click here”, etc.

In most themes, this test will only apply to post 'read more' links.

## Testing

**Tools:** Browser inspector.

1. Check the theme settings page (if one exists) and see if a setting needs to be enabled to show “Read More” links. If so, enable it.   
2. View the blog home page. If the page shows excerpts with a link to read the full post, inspect the link that leads to the post.  
3. Right-click on the link to open the context menu. In Chrome, choose "Inspect", then switch to the "Accessibility" tab in the element inspector.   
4. For each link, verify the following:  
   1. The accessible name of the link is unique  
   2. The accessible name contains the post title.  
   3. The accessible name starts with the visible text.  
5. Go to a category archive page and, if “Read More” links are present, repeat the same tests.  
6. If the theme created a custom home page with blocks or other specially formatted content with “Read More” links, repeat the same tests.  
7. Check for any other links created by the theme that have ambiguous or repetitive visible text and verify there is a unique and meaningful accessible name starting with the visible text.  
8. Verify there are no links on the page with identical accessible names that point to different URLs.

**Note:** It is not required that the visible text be unique; only the accessible name.

## WCAG resources

* [Understanding: Link Purpose In Context](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)  
* [Understand: Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
