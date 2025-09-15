---
title: Web forms
layout: default
parent: Standards and best practice
nav_order: 6
---

# Accessible web forms

{: .warning }
**TODO:**
This content should be reviewed and restructured and divided between separate topics.

For web-based forms to be accessible to all devices, it’s important to use valid, well-constructed HTML. Good structure is the foundation of a good form. In addition to using valid HTML, be sure to:

- Label controls (give `input` fields a `label`)
- Group controls with `fieldset` and `legend`
- Provide instructions to help users complete complex forms
- Validate user input
- Add accessible user notifications (both error and success messages)
- Do not remove native outline styling on `:focus` unless you provide custom styling that is equally prominent.

## Resources

- W3C Web accessibility Tutorials: [Forms Concepts](https://www.w3.org/WAI/tutorials/forms/)
- WebAIM: [Creating Accessible Forms](http://webaim.org/techniques/forms/)
- A good introduction by Nomensa: [Three rules for creating accessible websites](https://www.nomensa.com/blog/2010/three-rules-for-creating-accessible-forms)
- [Core handbook on labeling](https://make.wordpress.org/core/handbook/best-practices/coding-standards/accessibility-coding-standards/#labeling)

## Form Structure Guide

### Labels and placeholders

A placeholder is not a substitute for a label. For all users to understand a form, a `label` should be connected to an `input`.

The `label` should tell the user what information is required; the `placeholder` should describe _how_ to fill it out.

For example:

```html
<label for="search">Search for a product:</label>
<input type="text" id="search" placeholder="For example: apples, bread or milk">
```

The placeholder attribute should not be used as a replacement for a label. For a longer hint or other advisory text, place the text next to the control. In this case, use `aria-describedby` to connect the descriptive text to the form input:

The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

```html
<label for="search">Search for a product:</label>
<input type="text" id="search" placeholder="For example: apples, bread or milk" aria-describedby="search_description">
<span id="search_description">This store only carries fruit, grain products, and dairy.</span>
```

If you must hide a label or control from vision, use the CSS class [.screen-reader-text](https://make.wordpress.org/accessibility/handbook/best-practices/markup/the-css-class-screen-reader-text/) and not `display: none` or `visibility: hidden`. Hiding labels is generally discouraged, but can be acceptable in some cases, such as single-field search forms.

### Grouping with Fieldset & Legend

The `fieldset` and `legend` elements are a standard way to group fields. When a screen reader enters a fieldset, the `legend` of that group will be announced. This is a helpful way of grouping related fields together, such as differentiating between an order address and a shipping address; but is critical when grouping radio buttons and checkboxes.

In radio and checkbox groups, it is common that the `label` holds the answer to a question that is presented earlier. Without an appropriate `legend`, this question may not be presented to users of assistive technology.

If design demands make the use of a legend impractical, you can use ARIA to group fields:

```html
<div role="radiogroup" aria-labelledby="color_question">
  <h3 id="color_question">Which is the best color?</h3>
  <p>
    <input name="colorOption" type="radio" id="purple" />
    <label for="purple">Purple</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="aubergine" />
    <label for="aubergine">Aubergine</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="magenta" />
    <label for="magenta">Magenta</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="all" />
    <label for="all">All of the above</label>
  </p>
</div>
```

### Provide instructions to help users with complex forms

Strong semantic structure, like what is provided by `fieldset` and `legend` is very helpful in understanding complex forms. However, providing assistance to users can sometimes make the difference between having a user complete a process and abandon it.

Instructions can range anywhere from an `aria-describedby` description associated with a single input, to a modal dialog that gives additional context or provides a worksheet to help the user calculate a value.

Importantly, the line between understandable and…not can be very blurry; and you should always be looking at your form with an empathetic eye. Your knowledge of the form is likely much greater than your user’s.

### Validate user input

If it is possible to know whether a value is acceptable before the form is submitted, you should provide accessible validation as soon as possible. That validation should do more than simply notifying the user there is a problem with the field; it should also tell them how to fix it, if you’re able to provide that information.

For example, in a required email field, you should be able to quickly identify the difference between a missing email and an invalid format, and provide feedback accordingly.

That feedback should be provided in an accessible notification. And on that point…

### Provide accessible notifications

When a dynamic event occurs, it should be announced audibly by screen readers. A dynamic event is any event that is reacting to a user without a page refresh: either a direct scripted validation or an AJAX request.

A good way to announce dynamic notifications in WordPress is using [wp.a11y-speak()](https://make.wordpress.org/accessibility/handbook/best-practices/markup/wp-a11y-speak/). This JavaScript function is included in WordPress core and enables you to announce dynamic changes and notifications to screen reader users.

### Consistent tab order

It is a common technique for forms to give the first input field `tabindex="1"`. This can be annoying or confusing for keyboard users, as the tab order does not match what they expect.

Avoid applying `tabindex` attributes with positive values anywhere on your site, so that the keyboard path through the form is predictable and matches the visual layout of the form.

### Don’t remove native :focus styling

Most modern browsers have strong default `:focus` styling, making it easy for a user to tab from control to control and see clearly where they are on the page.

If you remove this, it is very easy for a sighted user to get lost and abandon the page. Custom `:focus` states are just fine; but avoid subtlety. Focus is an undirected action – meaning that the user does not know in advance where they are going, and will need to locate focus after it moves. Strong states make this easier.

## Useful WordPress Form plugins

- [Contact Form 7: Accessible Defaults](https://wordpress.org/plugins/contact-form-7-accessible-defaults/) (Generate accessible settings for Contact Form 7 forms.)
- [Gravity Forms](https://gravityforms.com/) (Build accessible forms; always disable Legacy HTML)

## More resources

- [WordPress speaks with wp.a11y.speak](https://foxland.fi/wordpress-speaks-wp-a11y-speak/)
- Research: [Accessible custom styled form elements](http://rianrietveld.com/2017/11/21/accessible-custom-styled-form-elements/)
- [A Guide to Accessible Form Validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/)
- [The Anatomy of Accessible Forms](https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/)
