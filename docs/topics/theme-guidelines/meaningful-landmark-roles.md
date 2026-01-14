---
title: Meaningful landmark roles and names
layout: default
parent: Theme accessibility guidelines
description: Accessibility-ready themes requirements for meaningful landmark roles and names
nav_order: 2
---

# Meaningful landmark roles and names

## Basic principle

Landmark navigation is a navigational tool available to screen reader users that helps identify and move between the larger structural sections of a website. There are six standard landmark roles available in HTML.

* `role="banner"`, the `header` element when nested in the context of the `body` element.  
* `role="main"`, the `main` element.  
* `role="complementary"`, the `aside` element.  
* `role="contentinfo"`, the `footer` element when nested in the context of the `body` element.  
* `role="search"`, a search form.  
* `role="navigation"`, the `nav` element.

Most of these roles can be represented directly by their dedicated element; the `search` role must be assigned to the `form` element.

Screen reader users are able to generate a list of landmarks on the page and navigate between them.

The `banner`, `main`, and `contentinfo` landmarks should appear only once on a page. Other landmarks may appear multiple times, but each appearance should be accessibly named in a way that allows a screen reader user to identify it uniquely and usefully.

There are additional optional landmark regions, such as the `region` role, which is a generic region that is only exposed if it has an accessible name.

## Testing

**Tools:** Browser extensions ([Chrome Landmarks](https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp), [Firefox Landmarks](https://addons.mozilla.org/en-US/firefox/addon/landmarks/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)); Bookmarklet ([Accessibility Bookmarklets)](https://accessibility-bookmarklets.org/install.html);  (optional) text editor (free examples include [Visual Studio Code](https://code.visualstudio.com/) (VS Code) or [Sublime Text](https://www.sublimetext.com/)).

1. Using one of the suggested testing tools, expose all of the landmarks on the page.  
2. Verify that all content on the page is wrapped inside at least one landmark region.  
   1. Note: The skip link is allowed to be outside of a landmark region immediately before the header. This does not constitute a failure.  
3. Verify that all navigation menus are contained in a navigation landmark (I.e., button blocks should not be used to create navigation).  
4. Verify that the `banner`, `main`, and `contentinfo` landmarks only appear once each.  
5. Verify that any duplicated landmark regions have unique accessible names. Accessible names can be provided via `aria-label` attributes or via `aria-labelledby` pointing to the ID of an element with the relevant text.  
6. Verify that the landmark region's accessible name does not include the type of landmark region. E.g. "Primary navigation" is not a good landmark name for `nav`; "Primary" is better.  
7. Check to see if the theme has a `functions.php` file with a text editor or the [theme file editor](https://developer.wordpress.org/advanced-administration/wordpress/edit-files/).  
8. If the theme has a `functions.php` file, verify that the theme declares support for `navigation-widgets` in its `add_theme_support( 'html5' )` array.  
   1. If the theme does not have a `functions.php` file, then this requirement is "Not Applicable".

## WCAG resources

* [Technique: Grouping related links using the nav element](https://www.w3.org/WAI/WCAG22/Techniques/html/H97.html)  
* [Technique: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11)

**Note on these resources**: while the guidance regarding why and how to use these is good, the code examples pre-date wide availability of native roles for HTML5 elements. It is preferred to use the HTML elements directly, not the role attributes.
