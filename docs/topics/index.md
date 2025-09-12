---
title: Standards and best practice
layout: default
nav_order: 4
---

# Standards and best practice

## 1. Web Content Accessibility Guidelines (WCAG)

The [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) are developed through the W3C process in cooperation with individuals and organizations around the world. They provide a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.

- **WCAG 2.1** (and the newer **2.2**) are the main references today.  
- They define **success criteria** at three levels: A (basic), AA (recommended), and AAA (enhanced).  
- WordPress development generally aims for **AA compliance**.

---

## 2. Accessible Rich Internet Applications (WAI-ARIA)

When semantic HTML is not enough, [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) can provide roles, states, and properties to improve accessibility for assistive technologies.

- Use ARIA **only when necessary**.  
- Prefer **native HTML elements** over ARIA roles whenever possible.  
- Follow the rule: *“No ARIA is better than bad ARIA.”*

---

## 3. Semantic HTML

Semantic HTML is the backbone of accessibility:

- Use proper heading structure (`h1` → `h2` → `h3`, etc.).  
- Use lists (`ul`, `ol`, `dl`) instead of custom div-based solutions.  
- Label forms properly with `<label>` and use descriptive `alt` text for images.  

---

## 4. Keyboard Accessibility

Every functionality must be usable with a keyboard alone:

- Ensure proper `tabindex` order.  
- Use visible focus indicators.  
- Avoid using `div` or `span` for interactive controls; use buttons and links instead.  

---

## 5. Color and Contrast

- Text must meet WCAG **contrast ratios**:  
  - Normal text: **4.5:1**  
  - Large text (18px+ bold or 24px+ normal): **3:1**  
- Do not use color as the only means of conveying information.  

---

## 6. Testing Practices

To ensure accessibility:

- Test with screen readers (e.g., NVDA, VoiceOver).  
- Test keyboard-only navigation.  
- Use automated tools (like WAVE, axe) but don’t rely solely on them.  
- Involve real users with disabilities when possible.  

---

## 7. Legal and Ethical Considerations

- Many regions (EU, US, etc.) enforce digital accessibility by law.  
- Beyond compliance, accessibility ensures **equal access** and aligns with the WordPress mission of *democratizing publishing*.  

---

## 8. WordPress-Specific Best Practices

- Follow the [WordPress Accessibility Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/accessibility-coding-standards/).  
- Always test in the WordPress admin, since accessibility applies to both front end and back end.  
- Themes and plugins should never reduce accessibility of core.  

---

## References

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)  
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)  
- [WordPress Accessibility Handbook](https://make.wordpress.org/accessibility/handbook/)  
