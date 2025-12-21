---
title: Content on hover or focus is accessible
layout: default
parent: Theme Accessibility Guidelines
description: How to handle content revealed on hover or focus in accessibility-ready themes
nav_order: 15
---

# Content on hover or focus is accessible

## Basic principle

When additional content appears on hover or keyboard focus—such as tooltips, dropdowns, or custom popovers—it must be fully accessible to all users. This means the content should remain visible long enough to be read, be dismissible without moving the pointer or focus, be reachable using the keyboard, and announced by screen readers. Ensuring hover and focus content is accessible helps users who navigate by keyboard or use assistive technologies understand and interact with important information without frustration or confusion.

## Testing

**Tools:** Theme settings, keyboard, screen reader, browser inspector.

1. Look for elements that reveal additional content when hovered over with a mouse or focused via keyboard, such as tooltips, help icons, custom error messages or validation messages. These elements are most likely to be found near forms or pricing/features tables.  
2. Test with a mouse: hover over the trigger element with your mouse and verify that:  
   1. The additional content becomes visible.  
   2. The content remains visible as long as the pointer is over the trigger or the revealed content.  
   3. Moving the pointer to the revealed content does **not** cause it to disappear prematurely.  
3. Test with focus interaction with a keyboard: use `tab` or `shift + tab` to move focus to the trigger element and verify that:  
   1. The same content appears when the element receives focus.  
   2. The revealed content remains visible while focus is on the trigger or the content itself.  
   3. You can reach and interact with links or buttons within the revealed content using only the keyboard (use arrow keys or `tab`, depending on the component).  
4. Verify that users can dismiss the content without moving their pointer or focus. Hover or focus on the trigger element and press the `Esc` key; the content on hover/focus should disappear.  
5. Verify the content does not trap keyboard focus or interfere with tab order. When you tab to the element or use arrow keys to reach it, you should be able to tab past the element.  
6. Test the trigger and content using a screen reader (e.g., NVDA, VoiceOver) and verify that:  
   1. Any additional content, such as helper text, is connected to the trigger using `aria-describedby` and is announced.  
   2. The user can perceive and navigate to the content using standard navigation keys.  
7. Check Responsiveness and Zoom: zoom in to 200–400% or resize the window and verify that the hover/focus content:  
   1. Remains visible and usable.  
   2. Does not overlap or become clipped by the viewport.

## WCAG resources

* [Understanding: Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus)  
* [Understanding: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
