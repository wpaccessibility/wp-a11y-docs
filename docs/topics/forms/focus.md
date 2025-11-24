---
title: Focus handling
layout: default
parent: Web forms
nav_order: 6
---

# Form focus handling

{: .callout  .alert }
This content will be rewritten and expanded.  
Related issue on [GitHub #158 Topic Form focus handling](https://github.com/wpaccessibility/wp-a11y-docs/issues/158).

## Consistent tab order

It is a common technique for forms to give the first input field `tabindex="1"`. This can be annoying or confusing for keyboard users, as the tab order does not match what they expect.

Avoid applying `tabindex` attributes with positive values anywhere on your site, so that the keyboard path through the form is predictable and matches the visual layout of the form.

## Don’t remove native :focus styling

Most modern browsers have strong default `:focus` styling, making it easy for a user to tab from control to control and see clearly where they are on the page.

If you remove this, it is very easy for a sighted user to get lost and abandon the page. Custom `:focus` states are just fine; but avoid subtlety. Focus is an undirected action – meaning that the user does not know in advance where they are going, and will need to locate focus after it moves. Strong states make this easier.
