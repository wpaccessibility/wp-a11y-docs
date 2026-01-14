---
title: Controls with accessible names, roles, and states
layout: default
parent: Theme accessibility guidelines
description: Accessibility-ready theme requirements for accessible controls
nav_order: 4
---

# Controls with accessible names, roles, and states

## Basic principle

To be accessible, all interactive controls must clearly communicate their purpose and current status to assistive technologies. This includes providing a programmatically determinable name, role (type of control, such as button, link, or checkbox), and state (e.g., expanded, selected, disabled). These attributes help screen reader users and others understand and interact with controls accurately.

## Testing

**Tools:** browser inspector, `tab`, `enter/return`, `spacebar`, screen reader (preferred)

For each interactive control, check for an accessible **name,** the correct **role** and **state,** and that **state changes** are announced.

1. For each template, make a list or take note of all interactive elements (controls) to test. Look for:  
   1. Links  
   2. Buttons  
   3. Any other advanced controls, such as accordions or tabs.  
2. Right-click on each control and select Inspect to open the browser dev tools inspector.  
3. Verify the control has a unique accessible name that clearly describes its purpose. Accessible names may come from:  
   1. Visible text content (e.g., button label)  
   2. `aria-label` or `aria-labelledby`  
   3. Associated `<label>` element for inputs  
4. If a control has both visible text and `aria-label` or `aria-labelledby`, ensure that the ARIA text includes the visible text at the **beginning** of the `aria-label` or `aria-labelledby`.   
5. Verify the control has an appropriate role. For example:  
   1. A button should be `<button>` or have `role="button"`. Buttons perform an action on a page (such as expanding collapsed content or submitting a form), whereas links go somewhere.  
   2. A form or search field should be an `<input>,` not a `<span>` or a `<div>`.  
6. If any elements have been turned into buttons with `role="button"`, verify they can be triggered using the spacebar.  
7. If the control changes state dynamically (e.g., opens a panel or reveals content), verify that the initial state and any changes in state (such as from collapsed to expanded) are communicated programmatically using ARIA attributes.  
   1. Tab to the control with the `tab` key, then press `spacebar` or `enter/return` to activate it. Watch the value of the relevant ARIA attribute in the inspector to observe changes, such as `aria-expanded` toggling from `false` to `true`.  
8. If there are buttons that are disabled, such as a comment form that disables the submit button until required fields are completed, verify that the button has a `disabled` attribute.  
9. (Rare) If the theme includes a tabs component, verify the tab controls are programmatically defined and associated with the tab panel. See link in WCAG resources for tab pattern expectations.  
10. Preferred: Use a screen reader (e.g., VoiceOver, NVDA) to confirm the name, role, and state are announced correctly.  
11. Repeat this process for all controls in your list.  
12. After testing the desktop view, switch into responsive mode or zoom your browser at least 200% and test responsive toggles (e.g., hamburger menu toggles) in the same way.

## WCAG resources

* [Understanding: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)  
* [Understanding: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)  
* [Understanding: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)  
* [Understanding: Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)  
* [Tab Pattern Expectations](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

## Relevant ARIA

* [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)  
* [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)  
* [aria-expanded](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)  
* [aria-selected](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)  
* [aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)  
* [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)