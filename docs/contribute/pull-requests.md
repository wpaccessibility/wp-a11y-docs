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

WPaccessibility.org is written in [Jekyll](https://jekyllrb.com), a static site generator in Ruby using [markdown](https://www.markdownguide.org/) for content. 
Please read the [Guide and requirements for Jekyll](https://jekyllrb.com/docs/installation/#requirements).

Then, in the terminal, install Jekyll:
```
gem install jekyll
```

Clone the wp-a11y-docs repository into your preferred directory and in that directory run:
```
npm install
bundle
bundle exec jekyll serve 
```

Open `http://127.0.0.1:4000/` or `http://localhost:4000` in your favourite browser.

Before making a commit or pull request, run the linters with: `npm run test`.

If you made changes to the `_config.yml` file, run `bundle exec jekyll serve` again to apply the changes to the site.

Documentation about Jekyll itself is on [jekyllrb.com](https://jekyllrb.com/docs/). The theme is based on the Jekyll theme [Just the Docs](https://just-the-docs.com/). The changes made in Just the Docs are documented in the [Changelog for Release v0.1](/CHANGELOG/#release-v01).
