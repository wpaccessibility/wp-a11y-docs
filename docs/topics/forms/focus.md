---
title: Form focus handling
layout: default
parent: Web forms
nav_order: 6
---

# Form focus handling

Keyboard and screen reader users rely on predictable and visible focus behavior to navigate web forms.  
Proper focus management ensures that users can efficiently move between fields, understand where they are, and successfully complete tasks.

---

## Why focus handling matters

Focus is the visible and programmatic indicator of which element on the page is currently active — where keyboard input will go.  

A well-managed focus experience ensures that:

- Users can tab through form elements in a logical order.  
- Focus is always visible and clearly styled.  
- Dynamic updates don’t move focus unexpectedly.  

---

## Consistent tab order

### Description

Tab order determines how users navigate through form controls using the **Tab** key.  
Manually setting `tabindex` values can easily break expected navigation flow.

Avoid using `tabindex` with positive values (`tabindex="1"`, `tabindex="2"`, etc.).  
Instead, rely on the natural order of the HTML structure for predictable navigation.

### Incorrect: Using positive tabindex values

```html
<form>
  <input type="text" name="first" placeholder="First name" tabindex="2">
  <input type="text" name="last" placeholder="Last name" tabindex="1">
  <input type="submit" value="Submit" tabindex="3">
</form>
```

**Problem:**  
The tab order jumps unpredictably between elements, making the form confusing for keyboard users.

### Correct: Natural tab order

```html
<form>
  <input type="text" name="first" placeholder="First name">
  <input type="text" name="last" placeholder="Last name">
  <input type="submit" value="Submit">
</form>
```

**Best practice:**  
Let the browser manage focus order naturally. It follows the logical reading order of the document.

---

## Don't remove native :focus styling

### Description

Modern browsers provide strong default focus outlines for focused elements.  
These outlines help users track their position on the page as they navigate.

Removing the outline may make it impossible for sighted keyboard users to know where they are on the page.

### Incorrect: Removing focus outline

```css
/* Never do this */
*:focus {
  outline: none;
}

button:focus {
  outline: 0;
}
```

**Problem:**  
Keyboard users lose the visual indicator showing which element is currently focused.

### Correct: Enhance focus styling

```css
/* Enhance the default outline */
button:focus {
  outline: 2px solid #0073aa;
  outline-offset: 2px;
}

/* Or provide custom focus styles */
input:focus,
textarea:focus,
select:focus {
  border: 2px solid #0073aa;
  box-shadow: 0 0 0 2px rgba(0, 115, 170, 0.2);
}
```

**Best practice:**  
Always provide visible focus indicators. You can enhance or replace the default outline, but never remove it without providing an alternative.

---

## Managing focus programmatically

### Description

When content updates dynamically (modals, form validation, AJAX submissions), you may need to manage focus with JavaScript to maintain a logical user experience.

### When to move focus

- **Opening a modal:** Move focus to the first interactive element inside the modal.
- **Closing a modal:** Return focus to the element that triggered it.
- **Form errors:** Move focus to the first error message or field.
- **Dynamic content loaded:** Optionally move focus to new content or provide clear indication.

### Example: Focus management for modal dialogs

```javascript
// Opening modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const triggerElement = document.activeElement; // Remember trigger
  
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  
  // Move focus to first focusable element
  const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) {
    focusable.focus();
  }
  
  // Store trigger for later
  modal.dataset.trigger = triggerElement.id;
}

// Closing modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const triggerId = modal.dataset.trigger;
  
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  
  // Return focus to trigger element
  if (triggerId) {
    document.getElementById(triggerId).focus();
  }
}
```

### Example: Focus management for form validation

```javascript
function validateForm(formElement) {
  const errors = [];
  const firstNameInput = formElement.querySelector('[name="first"]');
  
  if (!firstNameInput.value.trim()) {
    errors.push({
      field: firstNameInput,
      message: 'First name is required'
    });
  }
  
  if (errors.length > 0) {
    // Display error messages
    displayErrors(errors);
    
    // Move focus to first error field
    errors[0].field.focus();
    
    return false;
  }
  
  return true;
}
```

---

## Best practices summary

1. **Natural tab order:** Avoid positive `tabindex` values. Use semantic HTML structure.
2. **Visible focus:** Never remove focus indicators without providing clear alternatives.
3. **Logical focus flow:** Ensure focus moves in a predictable sequence through form elements.
4. **Focus management:** Move focus intentionally when content changes dynamically.
5. **Return focus:** When closing modals or dismissing content, return focus to the trigger element.
6. **Test with keyboard:** Navigate your forms using only the Tab key to verify the experience.

---

## Resources

- [WAI: Managing focus](https://www.w3.org/WAI/WCAG21/Techniques/general/G149.html)
- [MDN: :focus CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus)
- [WebAIM: Keyboard accessibility](https://webaim.org/techniques/keyboard/)