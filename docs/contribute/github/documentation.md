---
title: Add a topic
parent: How to help on GitHub
nav_order: 1
---

# Add or change a topic in the documentation

Do you have a great idea for a topic for the documentation or do you want to pick up an open issue for GitHub? Here's the documentation how to write and add content.

Each documentation file has the same setup:

- First a set of variables like the title and the parent.
- Then the content.

The documentation files live in the directory /docs/ and are named [title].md.
For example contribute.md. Keep the name short and unique. Use `-` instead of spaces in the filename.

Each directory has an `index.md` which is the file that directly links to the directory topic. For example: 
`/docs/about/index.md` displays [About this website]({{site.baseurl}}/docs/about/).
Other files for this topic are also placed in this directory and assigned a 'parent' with the variables.

## The variables at the top of the file for a topic

Example for `/docs/about/index.md`:

```
---
layout: default
title: Accessibility statement
parent: About this website
description: "Accessibility statement of the website wpaccessibility.org."
nav_order: 2
---
```

Use for the `parent` the `title` of the parent and not the filename.
The `nav_order` determines the location of the topic in the menu.

## The content of the post

The page [Content kitchen sink]({{site.baseurl}}/docs/contribute/github/content-kitchen-sink/) describes and displays all options for the content, like: markdown, images, videos, code, callouts and how to indicate a different language in the text.

## How to start

If you have an idea for a topic, please open an [issue on GitHub](https://github.com/wpaccessibility/wp-a11y-docs/issues) and share your idea first.
If you want to work on a topic (yay!) please let us know by adding a comment with the issue.

Need help? Feel free to [contact us]({{site.baseurl}}/docs/contact/).








