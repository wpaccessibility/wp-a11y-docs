---
title: No links opening new windows or tabs without warning
layout: default
parent: Theme Accessibility Guidelines
description: Requirements for opening new windows or tabs in accessibility-ready themes
nav_order: 14
---

# No links opening new windows or tabs without warning

## Basic principle

By default, links open in the current browser tab or window. Other behaviors—like opening in a new tab—are optional. Links that do something other than the default behavior without notifying the user in advance can create problems or cause confusion about how to return to the prior page after clicking a link.

It is not a problem to open a link in a new tab; it is a problem if the user is not informed of this change in default behavior before they click the link. Accessibility-ready themes should have visual and auditory warnings if a link is set to open in a new tab.

## Testing

**Tools:** Browser, browser inspector, text editor (free examples include [Visual Studio Code](https://code.visualstudio.com/) (VS Code) or [Sublime Text](https://www.sublimetext.com/)).

1. Fastest: Search in a text editor:  
   1. Download the theme zip file and unzip it.  
   2. Open the entire folder in your preferred text editor. To open an entire folder in a text editor like Sublime Text or VS Code, you can generally drag and drop the folder into the editor or use the "Open Folder" option within the editor's interface.  
   3. Search the entire folder for the following:  
      1. `target="_blank"`  
      2. `window.open( url, '_blank' )`  
      3. `attr( 'target', '_blank' )`  
      4. `setAttribute( 'target', '_blank' )` or similar

2. Alternative: Go page by page in the browser and click links or view source and search in the page source code to identify links that open in a new tab.  
   1. The most common links to open new tabs are theme credits and social media. You may need to add a social media navigation menu or widget and links to set up the scenario where these are added.  
   2. If there is a theme settings page or customizer settings, check for a new tab setting and enable it before testing.  
3. For any situation where you have identified that a link opens in a new tab, inspect that link.  
4. Verify all links have a notification that the link will open in a new tab that is communicated both to screen readers and to sighted users. An icon alone is not sufficient, even if it is accompanied with alternative text. Notifications should have:  
   1. Visible “opens new window” text or similar, **or**  
   2. Visible new window icon **and** screen reader text or aria-label that includes the visible text and unique name for the link, followed by “opens new window” or similar.

**Note:** Accessibility-ready themes do *not* have to dynamically add a new window warning for links set to open in a new tab by content authors. They only need to add the warning for any links that are coded this way within the theme itself.

If the theme does not open links in new tabs, this criteria is not applicable.

## WCAG resources

* [Understanding: Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)  
* [Technique: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)
