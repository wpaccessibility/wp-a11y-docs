---
title: Accessible name
layout: default
parent: Input and label
nav_order: 2
---

# Give a form field an accessible name with a label

Each form field requires a label, linked to the form field with a `for`/`id` relationship.  
The label text then becomes the form field's [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/).


## Why is this important?

- Screen reader users will hear this name read aloud when the field receives keyboard focus.
- Voice recognition (voice control) users can focus the field by announcing this name.
- Mouse and touchscreen users can click the label to give the form field focus.

The purpose of a label is to ensure the user understands the question. An effective label is clear and descriptive. If further explanation is needed, use a [description]({{site.baseurl}}/docs/topics/forms/descriptions/).

## The for/id relationship

The HTML basics:

- Give the form field an ID.
- Give the label the `for` attribute, with the value being the ID of the corresponding form field.

{: .tip }
The IDs used must be unique for the page; otherwise, the wrong input fields may be announced or get focus. A quick test to see if the connection is working: click the label and see if the field receives focus.

### Basic example with input type="text"

<label for="color1">Your favorite color</label>  
<input type="text" id="color1" name="color">

```html
<label for="color2">Your favorite color</label>
<input type="text" id="color2" name="color">
```

### Basic example with a select

<label for="color3">Your favorite color</label>  
<select id="color3" name="favoritecolor">
  <option>Red</option>
  <option>Blue</option>
  <option>White</option>
</select>

```html
<label for="color4">Your favorite color</label>
<select id="color4" name="favoritecolor">
  <option>Red</option>
  <option>Blue</option>
  <option>White</option>
</select>
```

### Basic example with a fieldset

<fieldset>
  <legend>Choose your size</legend>
  <input id="size-s" name="size" type="radio" value="small" />
  <label for="size-s">Small</label>
  <input id="size-m" name="size" type="radio" value="medium" />
  <label for="size-m">Medium</label>
  <input id="size-l" name="size" type="radio" value="large" />
  <label for="size-l">Large</label>
</fieldset>

```html
<fieldset>
  <legend>Choose your size</legend>
  <input id="size-s2" name="size" type="radio" value="small" />
  <label for="size-s2">Small</label>
  <input id="size-m2" name="size" type="radio" value="medium" />
  <label for="size-m2">Medium</label>
  <input id="size-l2" name="size" type="radio" value="large" />
  <label for="size-l2">Large</label>
</fieldset>
```

## Other ways to provide an accessible name

The [first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1) is, don't use ARIA if there is a native HTML element for the job. But it's valid to use `aria-label` or `aria-labelledby` to give an accessible name for a form control.

If you have to, here are the basics:

<input type="search" name="s" aria-label="Search">  
<button>Search</button>

```html
<input type="search" name="s" aria-label="Search">
<button>Search</button>
```

<span id="search-text">Search this website</span>
<input type="text" name="s" aria-labelledby="search-text">
<button>Go</button>

```html
<span id="search-text">Search this website</span>
<input type="text" name="s" aria-labelledby="search-text">
<button>Go</button>
```

{: .alert }
Visual text or equivalent, like a search icon, should always be visible, so sighted users don't have to guess what they need to fill out.

If you must hide a label or control from vision, use the CSS class [`.screen-reader-text`](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/) or equivalent.

{: .dont }
Don't use the CSS `display: none`, `visibility: hidden` or the HTML attribute `hidden` on a label, as that also removes the element, and its accessible name, from the accessibility tree.

```html
<!-- this in incorrect code, the visual text Go is not describing what you need to fill out -->
<label for="search-text" class="screen-reader-text">Search this website</label>
<input type="text" name="s" id="search-text">
<button>Go</button>
```

```html
<!-- this in incorrect code, label is removed from the accessibility tree, the input field has no accessible name -->
<label for="search-text" hidden>Search this website</label>
<input type="text" name="s" id="search-text">
<button>Search</button>
```

{: .do }
Always add a visible hint about how to fill out the form field.  
<label for="search-text" class="screen-reader-text">Search this website</label>
<input type="text" name="s" id="search-text">
<button>Search</button>

```html
<label for="search-text" class="screen-reader-text">Search this website</label>
<input type="text" name="s" id="search-text">
<button>Search</button>
```

## How to test for a proper accessible name

Good tools to check the accessible name of a form input:

- Your browser's [accessibility tree]({{site.baseurl}}/docs/topics/code/accessible-name/).
- A screen reader, such as NVDA for Windows or VoiceOver/Safari for macOS.

## WCAG Succes Criteria

Giving a form control an accessible name is necessary to meet the WCAG success criteria:

- [1.3.1 Info and relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [2.4.6 Headings and labels](https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels) (Level AA).
- [3.3.2 Labels or instructions](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).
- [4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions) (Level A).

## Related pages in this documentation

-  Standards and best practice - Frontend code: [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/).

## Resources

- NL Design System [Guidelines for web forms (Dutch content)](https://nldesignsystem.nl/richtlijnen/formulieren/).
- Gravity Forms accessibility documentation: [Labels and Placeholders](https://docs.gravityforms.com/accessibility-for-developers/?partner_id=5477304&irgwc=1#h-labels-and-placeholders).
- WebAIM: [Decoding Label and Name for Accessibility](https://webaim.org/articles/label-name).
