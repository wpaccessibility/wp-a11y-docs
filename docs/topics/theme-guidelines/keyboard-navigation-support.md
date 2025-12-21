---
title: Keyboard navigation support
layout: default
parent: Theme Accessibility Guidelines
description: The requirements for keyboard navigation in accessibility-ready themes
nav_order: 3
---

# Keyboard navigation support

## Basic principle

Accessibility for keyboard navigation means that all interactive elements of a website can be reached and operated only using the keyboard. This includes links, buttons, form fields, navigation menus, and any other part of the page that a user is expected to interact with.

## Testing

**Tools**: browser `tab` key, `shift + tab`, `enter/return`, `spacebar`, `escape`, `arrow keys`

Keyboard testing checks the **Operability**, **Visibility**, and **Order** of controls on the page.

1. Log out of the website or view the page in another browser.  
2. Refresh the web page to ensure your focus is at the top.  
3. Use the `tab` key to navigate forward through the site. Navigate forward through all items on the page. If encountering radio buttons or tab components, use the `tab` key to enter the group and the arrow keys to move between the elements in the group.  
4. Verify that all interactive elements can be reached using the keyboard.  
5. Verify that you do not get trapped in a location on the page when using the keyboard. (A focus trap is when you can tab to an element but cannot tab past or outside of it when it receives focus.)  
6. Verify that a visible focus state on all controls is present, and is a minimum of a 2px outline surrounding the element with a contrast that meets color contrast standards against the background color ([see color contrast requirements]({{site.baseurl}}/docs/topics/theme-guidelines/sufficient-color-contrast/)).  
7. Verify that the visual order of elements matches the order in which you reached the items. This generally means that the tab navigation travels in the reading direction of the content language, e.g. traveling from left to right and top to bottom in a LTR language.  
8. Use `shift + tab` to reverse your tabbing path. Verify that the order of elements is the same forwards and backwards.  
9. Verify that you can operate all controls. It is not required to test every individual link. Buttons should be operable using either the `spacebar` or the `enter/return` keys; links should only be activated using `enter/return`.  
10. If a control opens a content panel, e.g. a dropdown menu, modal, or dialog, ensure that pressing `tab` again remains in the newly opened panel.  
11. If focus is inside a modal or dialog that covers other content, verify that you cannot exit the modal using the `tab` key.  
12. If focus is inside a modal or dialog that covers other content, verify that you can exit the modal either using a button to close the modal or by pressing the `esc` key.  
13. Verify that no item is fully obscured when it receives focus. For example, if a menu or modal is opened, you should not be able to tab to an item behind the menu while it is opened.  
14. Verify that intentionally hidden items (such as menu items in a collapsed navigation or links in a closed accordion) do not receive focus.   
15. Adjust the website viewport or enable the browser console's responsive view and repeat these tests in the mobile view.

Keyboard navigation must be supported in all responsive views. While the native interaction on mobile devices is touch, the use of a keyboard to navigate mobile devices is an important tool for many users. Be aware that since responsive modes are triggered based on content width, screen reader users who operate without a monitor or low vision users at high levels of zoom are likely to trigger these modes.

## WCAG resources

* [Understanding: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)  
* [Understanding: Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)  
* [Understanding: Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)  
* [Understanding: Focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)  
* [Understanding: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap)  
* [Understanding: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
