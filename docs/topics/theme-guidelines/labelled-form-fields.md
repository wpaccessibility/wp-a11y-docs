---
title: Labelled form fields
layout: default
parent: Theme Accessibility Guidelines
description: Accessibility-ready theme requirements for how to label form fields
nav_order: 5
---

# Labelled form fields

## Basic principle

All form fields should have a visible label that's explicitly associated with the related input field. The label should clearly describe the purpose of the input field. A WordPress theme generally only supports a handful of inputs: the search form and the comment form. However, the principles apply to any input created by the theme.

Search forms are a unique case, because they are simple forms that frequently have many different labels. A search form could realistically have the `search` role, a visible label with the text `Search`, a placeholder with the text `Search terms`, a button with the text `Search` and a magnifying glass icon to indicate search. A search form must have some visible indicator that it is search, but does not need to incorporate *every* possible type of labeling. Including a magnifying glass icon only is considered an acceptable visual label for a search field.

## Testing

**Tools:** Mouse, browser inspector.

1. Locate the primary search form. This can be highly variable; it may be located in the header, in the sidebar, or elsewhere in the theme. It may only be present if enabled in settings.  
2. Verify that the search form has some form of visible labeling (either text or a magnifying glass icon).  
3. Verify that the search form has some form of persistent labeling by typing in the field and ensuring that the label does not disappear, as would be the case with placeholder text.  
4. Add a search form as a widget or block. Verify that this search form has the same or better labeling.  
5. Perform a search, to identify whether there's a search form on the search results page. If so, verify the labeling on that form.  
6. Trigger a 404 error by navigating to a non-existent page, to see if there's a search form on the error page. If so, verify the labeling on that form.  
7. Locate a post that's open for comments. While logged-out, inspect each default form field to check for visible labels. (Name, Email, Website, Comment.)  
8. Verify that the `label` elements are explicitly associated with the related form fields using `for` and `id` attributes.  
9. Verify that the `required` form fields are marked as `required` and that there is a visible indication showing which fields are required.

### WCAG resources

* [Understanding: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)  
* [Understanding: Labels and Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)  
* [Technique: Use labels to associate text with form fields](https://www.w3.org/WAI/WCAG22/Techniques/html/H44.html)  
* [Technique: Providing descriptive labels](https://www.w3.org/WAI/WCAG22/Techniques/general/G131.html) 