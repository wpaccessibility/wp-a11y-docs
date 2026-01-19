---
title: Be flexible
layout: default
parent: Provide help
nav_order: 3
---

# Don’t reject a form entry too quickly

Be flexible accepting the data a user fills out a field. If it's not exactly in the format you want, change it for them in the code.

{: .info .callout}
**Note**: this is best practice and not a WCAG requirement.

## Date formats

Users may unknowingly enter a different separation character then planned and then get the warning "Invalid date". While actually it's not invalid, it's not in your preferred format.

For example January 1, 2026 can be entered as: 

- 01.01.2026
- 01-01-2026
- 01/01/2026

Why not help the user and transform the separation character in your software for them?

## Email addresses

Some people use a + in their email address, for example to make it easier to group emails.

They might use name+school@example.com for school-related emails and name+work@example.com for work emails. These are valid email addresses, so don’t reject them.

Email addresses with a plus sign are valid.

## Postal codes

[Postal codes](https://en.wikipedia.org/wiki/List_of_postal_codes) can be written in different ways, for example in the Netherlands as: “1234 AA” (with a space), “1234AA” (without a space), or “1234aa” (lowercase). Extra spaces at the beginning or end can also be included when text is copied and pasted.

In code, these variations can easily be normalized to a single format. By accepting all valid ways and letting the software correct them, you prioritize the user instead of your software.
