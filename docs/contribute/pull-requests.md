---
title: Pull requests
layout: default
parent: How to contribute
nav_order: 3
---

# GitHub pull requests for the Knowledge Base

First, create a new issue on GitHub or find an issue you want to help with on in our [GitHub repository labeled "documentation"](https://github.com/wpaccessibility/wp-a11y-docs/issues?q=is%3Aissue%20state%3Aopen%20label%3Adocumentation). Also check if there isn't already an open issue about what you want to add or change.

## How to make a good pull request

Describe in the title and description of the pull request what the change or addition is about and which related issue the content belongs to.

All Knowledge Base files live in the `/docs/` directory. For Markdown, we use the [Markdown Style Guide](https://developer.wordpress.org/coding-standards/styleguide/).

Please check for grammer and spelling errors before submitting the PR. 

## Create a pull request from a fork on GitHub with your text.

GitHub offers good documentation on how to create a pull request using a fork on: [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

## Create a pull request from a fork using a local install

WPaccessibility.org is written in [Jekyll](https://jekyllrb.com), a static site generator in Ruby using [markdown](https://www.markdownguide.org/) for content. Please read [Local install of the website](https://github.com/wpaccessibility/wp-a11y-docs?tab=readme-ov-file#local-install-of-the-website) in wp-a11y-docs/README.md.

## Pull Request Previews
When you create a pull request, a preview of your changes will be automatically deployed and a comment will be added to your PR with a link to the preview site. This allows you and reviewers to see how your changes will look before merging.

Preview URLs follow the format: `https://wpaccessibility.org/pr-preview/pr-{number}/`.
