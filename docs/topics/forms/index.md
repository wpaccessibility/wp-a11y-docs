---
title: Web forms
layout: default
parent: Standards and best practice
nav_order: 6
---

# Accessible web forms

{: .alert }
The intro text needs to be rewritten.  
Related issue on [GitHub #154 Intro page Accessible web forms](https://github.com/wpaccessibility/wp-a11y-docs/issues/154).    


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
- [WordPress speaks with wp.a11y.speak](https://foxland.fi/wordpress-speaks-wp-a11y-speak/)
- [A Guide to Accessible Form Validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/)
- [The Anatomy of Accessible Forms](https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/)
