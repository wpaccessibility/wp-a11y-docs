---
title: Pull requests
layout: default
parent: Technical documentation website
nav_order: 3
---

# GitHub pull requests for the documentation

First, find the issue you want to help with on our [project board WP A11y Docs](https://github.com/orgs/wpaccessibility/projects/3) in the **Todo column**, that is not assigned to someone else. Comment with the issues that you want to work on this, and you will be assigned to the issue. This prevents double work.

## How to make a good pull request

Describe in the title and description of the pull request what the change or addition is about and which related issue the content belongs to.

All documentation files live in the `/docs/` directory. For Markdown, we use the [Markdown Style Guide](https://developer.wordpress.org/coding-standards/styleguide/).

Please check for grammar and spelling errors before submitting the PR. 

## Create a pull request from a fork on GitHub with your text.

GitHub offers good documentation on how to create a pull request using a fork on: [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

## Create a pull request from a fork using a local install

WPaccessibility.org is written in [Jekyll](https://jekyllrb.com), a static site generator in Ruby using [markdown](https://www.markdownguide.org/) for content. Please read [Local install of wpaccessibility.org](https://github.com/wpaccessibility/wp-a11y-docs?tab=readme-ov-file#local-install-of-the-website) in wp-a11y-docs/README.md.

## Pull Request Previews
When you create a pull request, a preview of your changes will be automatically deployed and a comment will be added to your PR with a link to the preview site. This allows you and reviewers to see how your changes will look before merging.

Preview URLs follow the format: `https://wpaccessibility.org/pr-preview/pr-{number}/`.
