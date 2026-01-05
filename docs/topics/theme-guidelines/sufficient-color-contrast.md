---
title: Sufficient color contrast of text and UI controls
layout: default
parent: Theme accessibility guidelines
description: Color contrast requirements in accessibility-ready themes
nav_order: 9
---

# Sufficient color contrast of text and UI controls

## Basic principle

The color contrast between text and backgrounds or between user interface controls and their backgrounds must be clearly visible. The measurement to test this is an [algorithm measuring relative luminance](https://www.w3.org/TR/WCAG21/relative-luminance.html). While this algorithm is not perfect, it is based on significant research, and generally provides a good baseline for acceptable contrast. 

Text contrast must meet the WCAG 2.2 Level AA minimum contrast criterion. This requires that most text has a contrast ratio of at least **4.5:1** and large-scale text has a contrast ratio of at least **3:1.** 

Large-scale text is defined as either **14pt bold** and larger or **18pt non-bold** and larger. In pixels, 14pt text is approximately 19px and 18pt text is approximately 24px. Point-to-pixel conversions are approximate, and rounding up is acceptable.

User interface element contrast must meet the WCAG 2.2 Level AA "non-text contrast" criterion. This requires that interface elements must have a contrast greater or equal to **3:1**.

## Testing

**Tools:** [WAVE by WebAIM](https://wave.webaim.org/extension/), [axe DevTools](https://www.deque.com/axe-accessibility-testing-tools/), browser inspector. 

It can be advantageous to use a tool that will check all contrasts on a page at once, like WAVE or axe. You can also check color contrast within the browser inspector. Tools do not generally test `hover` and `focus` states, so these need to be tested separately. All states must meet color contrast.

1. Visit the page "Page Markup and Formatting". This page contains examples of all basic markup patterns.  
2. Inspect all text color contrasts on the page using the default color scheme for the theme.  
3. Verify all text has a contrast ratio of at least 4.5:1.  
4. Visit the page "Block Patterns". This page contains examples of all registered patterns for this theme.  
5. Inspect all text color contrast on the page using the default color scheme for the theme.  
6. Verify all text has a contrast ratio of at least 4.5:1.  
7. Inspect all controls: graphic buttons such as hamburger buttons, menu toggle buttons, comment form submit, comment form field outlines, etc.   
8. Verify all icon-only controls, focus outlines, and non-decorative components/controls have a contrast ratio of at least 3:1.  
9. Repeat process for elements hover and focus states.  
10. Check if the theme has multiple default color palettes available (look at the theme settings page if one exists or in the customizer).  
11. If multiple color palettes exist, switch to additional palettes and repeat the contrast checks for each one.

## WCAG resources

* [Understanding: Contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)  
* [Understanding: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)