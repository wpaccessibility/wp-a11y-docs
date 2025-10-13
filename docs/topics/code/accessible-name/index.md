---
title: Accessible name
layout: default
parent: Frontend code
nav_order: 2
---

# The accessible name

Give an (interactive) HTML element the correct accessible name.

> Accessible names convey the purpose or intent of the element. This helps users understand what the element is for and how they can interact with it. - [Accessible name on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name).

## Why is this important?

- Screen readers will announce the name, role, value or status when an interactive element gets keyboard focus.
- Voice recognition (voice control) users can focus an interactive element by announcing its name.

A proper accessible name for HTML elements is essential for screen reader users to understand and operate functionality on a web page.

Abdulqudus Abubakre gives an excellent, detailed writeup of the accessible name [Understanding Accessible Names in HTML](https://dev.to/ibn_abubakre/understanding-accessible-names-in-html-562).


{: .info }
Note: An `aria-label` attribute on a link or a button overrides all textual content within.   
For example, the accessible name of the button `<button aria-label="Close">Open</button>` is "Close".

## The accessibility tree shows the accessible name

Next to the [DOM-tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) a browser also generates an accessibility tree. Both are available in the inspector of every browser.
Assistive technology, like a screen reader, gets the information it needs from that accessibility tree. 

The way browsers show the accessibility tree differs:

- In Edge: [Test accessibility using the Accessibility tab](https://learn.microsoft.com/en-us/microsoft-edge/devtools/accessibility/accessibility-tab#view-the-position-of-an-element-in-the-accessibility-tree).
- In Chrome: [Full accessibility tree in Chrome DevTools Tools](https://developer.chrome.com/blog/full-accessibility-tree).
- In FireFox: [Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/).

## Examples the accessible name of interactive elements

### Menu button:

<button aria-expanded="false">Menu</button>

```html
<button aria-expanded="false">Menu</button>
```

The accessibility tree of Chrome shows the following relevant information: the accessible name is taken from the content, the role is button, the element is focusable, has focus and the menu is not expanded:
- Name
  - aria-labelledby: Not specified
  - aria-label: Not specified
  - From label: Not specified
  - Contents: "Menu"
  - title: Not specified
- Role: button
- Invalid user entry: false
- Focusable: true
- Focused: true
- Expanded: false

![Screenshot accessible name menu in Chrome]({{site.baseurl}}/assets/images/accessible-name-button.png)
 

### Link:

<a href="https://wpaccessibility.org/docs/contact/">Contact</a>

```html
<a href="https://wpaccessibility.org/docs/contact/">Contact</a>
```

The accessibility tree of Firefox shows the following relevant information: The accessible name is contact, the role is link and the value is the url.

- name:"Contact"
- role:"link"
- value:"https://wpaccessibility.org/docs/contact/"

![Screenshot accessible name link in FireFox]({{site.baseurl}}/assets/images/accessible-name-link.png)


## WCAG Succes Criteria

Giving interactive elements a well-defined, accessible name is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [2.4.6 Headings and labels](https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels) (Level AA).
- [3.3.2 Labels or instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).
- [4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).


## Resources

How to provide a proper accessible name for each use case is documented with the specific topics in this documentation, like for example on [Give a form field an accessible name with a label]({{site.baseurl}}/docs/topics/forms/input-label/accessible-name/) in forms.

- Abdulqudus Abubakre [Understanding Accessible Names in HTML](https://dev.to/ibn_abubakre/understanding-accessible-names-in-html-562).
- MDN: [Accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name).
- W3C: [Providing Accessible Names and Descriptions ](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/).
- W3C: [5 rules of ARIA](https://www.w3.org/TR/using-aria/#firstrule).

