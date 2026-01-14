---
title: No unexpected changes of context
layout: default
parent: Theme accessibility guidelines
description: Requirements for changes of context in accessibility-ready themes
nav_order: 13
---

# No unexpected changes of context

## Basic principle

Websites must not change context, such as navigating to a new page, submitting a form, or opening new windows, without warning or user initiation. Unexpected changes can disorient users, especially those with cognitive disabilities or who rely on screen readers or keyboard navigation. Any context changes should be clearly indicated and only occur as a direct result of a deliberate user action. This helps maintain user control and predictability throughout the experience.

## Testing

**Tools:** keyboard, browser inspector

1. For each template, make a list of all interactive elements, such as links, buttons, inputs, and selects.  
2. Use the `Tab` key to navigate to each element.  
3. Verify that when the keyboard focus reaches the elements, there are no unexpected page loads, form submissions, or focus shifts.  
4. For radio or checkbox inputs, use the `tab` key to reach the first input in the group, then use the `arrow` keys to move through all available options in the group.  
5. Verify that when using arrow keys to switch between radio and checkbox inputs does not cause unexpected page loads, form submissions, or focus shifts.  
6. For radio or checkbox inputs or `<select>` dropdowns, use the `return/enter` key or space bar to change the selected option.  
7. Verify that choosing an input (radio or checkbox field) or `<select>` option does not automatically submit the form, reload the page, or trigger a major layout or content change without confirmation.

## WCAG resources

* [Understanding: On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus)  
* [Understanding: On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input)
