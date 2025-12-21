---
title: Headings with meaningful structure
layout: default
parent: Theme Accessibility Guidelines
description: Accessibility-ready theme requirements for how to use headings
nav_order: 6
---

# Headings with meaningful structure

## Basic principle

Headings must follow a logical, nested order to convey the structure of content clearly to all users, including those using assistive technologies. Pages should begin with a single `<h1>`, and subsequent headings should not skip levels (e.g., jumping from `<h2>` to `<h4>`). Headings should describe the content that follows, and there should not be any empty heading tags. 

Proper heading structure improves navigation and understanding for screen reader users and supports consistent styling and organization across the site.

## Testing

**Tools:** [Headings Map toolbar for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en), [Headings Map toolbar for Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

For each page template, assess the heading structure to confirm that it accurately reflects the hierarchy of content on the page.

1. Install the HeadingsMap browser extension if you do not already have it.  
2. Load the page you are going to test and click the button to open the HeadingsMap panel.  
3. Verify that an `H1` element is present on the page.  
4. Verify there is only one `H1` on the page.  
5. Verify the `H1` is the page title (not the site title unless it is the Home page — `H1`s should not be identical on every page of the site).  
6. Verify that there are no empty heading tags.  
7. Verify headings do not skip levels when descending. `H1` cannot be followed by `H3`, etc.  
8. Verify headings are not used for content that does not begin a content group (e.g., large text or blockquotes should not be marked as headings for styling purposes).  
9. Verify that the content following a heading relates to that heading.   
10. Verify that all sub-sections defined by the theme use heading elements (e.g., sidebars, footers, and widget areas or major sections must all have headings), unless the section has been created as a landmark region with an accessible name.

Note: Heading elements for structure may be positioned off-screen if they would appear redundant to sighted users. It is not a failure, for example, to have a screen-reader-only heading in the footer (`<h2 class="screen-reader-text">Footer</h2>`) if that helps structure the page content and provides meaning for screen reader users.

## WCAG resources

* [Understanding: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)  
* [Understanding: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html%20)