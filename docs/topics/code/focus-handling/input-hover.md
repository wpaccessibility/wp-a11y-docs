---
title: On input, focus and hover
layout: default
parent:  Handling focus
nav_order: 6
description: Do not surprise users with unexpected behavior on input, focus or hover.
---

# Predictable behavior on input, focus and on hover

Give users the choice when to start an action, like open a modal or submit a form. Do not surprise them with unexpected behavior or a sudden change of context. Make functionality predictable and therefore easy to understand.

This concerns focus and hover:

- If a user gives focus to a component with the keyboard or by hovering over it with the mouse, ensure that this action doesn't automatically trigger a context change. 
- When a user selects a form component or option, or fills in an input field with the keyboard or mouse, this doesn't automatically trigger a context change.

A **context** change unexpectedly changes the layout, information, keyboard focus, or functionality. For example, by immediately submitting a form after choosing a select option, after which the user is redirected to another page.

**Context** change is not the same as **content** change. Instantly adjusting search results, while keeping the user on the same page, is perfectly fine because it's expected.

{: .info .callout}
**Note**: When a dialog opens unexpectedly without any user interaction, is is not a WCAG violation. For example, a popup with an advertisement or a request to sign up for a newsletter. But it's still confusing for screen reader users and annoying for everyone.

## How to test for behavior on input and on hover

First, determine if there are any interactive elements on the page, such as form fields, buttons, or links. Then:

- Tab through each interactive element with the keyboard and give keyboard focus to all radio buttons and select options.
- Click on interactive elements with the mouse, including any select options.
- Watch for unexpected behavior, such as submitting the form, shifting focus, or opening a new window or tab.

Is there a form on the page?

- Select/activate each form element.
- If applicable: fill out a form field and then leave it (remove focus). Check also if this doesn't automatically submit the form.
- Test whether any unexpected behavior occurs, such as submitting the form without using the submit button, shifting focus, or opening a new window or tab.
- Test this with the mouse and then with the keyboard.

## Examples

{: .callout .dont }
**Don't**: Surprise your user by opening a dialog unexpectedly after hovering over or tabbing to a button.

```html
<button 
        onfocus="toggleDialog('dialog')" 
        onmousemove="toggleDialog('dialog')">
    On Sale!
</button>
```

{: .callout .do }
**Do**: Give the user the choice if they want to open a dialog.

```html
<button onclick="toggleDialog('dialog')">On Sale!</button>
```

{: .callout .dont }
**Don't**: Submit the form as soon as the user selects an option.

```html
<form>
    <label for="number">Choose a number</label>
    <select name="number" id="number" onchange="this.form.submit();">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</form>
```

{: .callout .do }
**Do**: Give the user control over when to submit the form by adding a submit button.

```html
<form>
    <label for="number">Choose a number</label>
    <select name="number" id="number">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <button>Order</button>
</form>
```

## Resources

### WCAG Success Criteria for predictable behavior on input and on focus

Maintaining predictable behavior on input and on focus is necessary to meet the WCAG success criteria:

- [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/quickref/#on-focus) (Level A).
- [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/quickref/#on-input) (Level A).
