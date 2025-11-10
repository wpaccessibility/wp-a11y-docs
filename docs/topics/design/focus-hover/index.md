---
title: Styling hover and focus
layout: default
parent: Design & user experience
nav_order: 3
---

# Styling hover and focus

{: .alert }
This content needs to be reviewed and rewritten for designers.
Related issue on [GitHub #214 Topic Styling focus and hover](https://github.com/wpaccessibility/wp-a11y-docs/issues/214).  
If you want to work on this, please let us know **before you start**.

## Don’t remove native :focus styling

Most modern browsers have strong default `:focus` styling, making it easy for a user to tab from control to control and see clearly where they are on the page.

If you remove this, it is very easy for a sighted user to get lost and abandon the page. Custom `:focus` states are just fine; but avoid subtlety. Focus is an undirected action – meaning that the user does not know in advance where they are going, and will need to locate focus after it moves. Strong states make this easier.
