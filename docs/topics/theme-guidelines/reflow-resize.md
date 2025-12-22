---
title: Support for reflow, resize, and text spacing changes
layout: default
parent: Theme accessibility guidelines
description: Requirements for handling reflow, resize, and text spacing in accessibility-ready themes
nav_order: 12
---

# Support for reflow, resize, and text spacing changes

## Basic principle

Web content must remain usable and readable when users adjust the zoom level, resize the browser window, or apply custom text spacing. This ensures people with low vision, cognitive disabilities, or reading difficulties can access content without losing functionality or requiring horizontal scrolling. Layouts should adapt fluidly up to 400% zoom, and custom spacing settings—such as increased line height, letter spacing, or word spacing—must not cause content to overlap, be cut off, or become unreadable.

## Testing

**Tools:** keyboard, browser inspector, [Text Spacing Bookmarklet](https://codepen.io/stevef/full/YLMqbo), Firefox browser

1. Test Reflow at 200% zoom.  
   1. Make your browser window 1280px wide by narrowing it or use the viewport tools for inspecting responsive mode, and set the width to 1280px.   
   2. Press `Ctrl +` (Windows) or `Cmd +` (Mac) repeatedly until you reach 200% zoom.  
   3. Scroll through the pages and verify that:  
      1. Content adapts (e.g., stacks vertically, wraps appropriately).  
      2. All content is visible without horizontal scrolling (except for elements requiring it, like data tables).  
      3. Text is not overlapping or cut off.  
      4. Interactive elements (buttons, links, forms) are still usable.  
2. Zoom to 400% and verify reflow at this zoom level.  
3. Apply custom text spacing to test for responsiveness when text spacing is changed. Use the browser inspector to modify the CSS or this [Text Spacing Bookmarklet.](https://codepen.io/stevef/full/YLMqbo) Verify that the text is responsive and readable when the following is changed:  
   1. Line height: 1.5x font size.  
   2. Letter spacing: 0.12x font size.  
   3. Word spacing: 0.16x font size.		  
   4. Paragraph spacing: 2x font size.  
4. Open the Firefox browser, enable the [Zoom Text Only setting](https://support.mozilla.org/en-US/kb/font-size-and-zoom-increase-size-of-web-pages#w_how-to-only-change-the-size-of-the-text), and verify that the text is responsive and readable with this setting enabled.

## WCAG resources

* [Understanding: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)  
* [Understanding: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow)  
* [Understanding: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
