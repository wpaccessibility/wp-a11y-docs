# WordPress Accessibility Knowledge Base

Website: [wpaccessibility.org](https://wpaccessibility.org).

**Please note**: wpaccessibility.org is a work in progress and is still in the setup phase. The knowledge base has no content yet and the site needs an accessibility audit. Please visit, for now, the documentation on the [Make WordPress Accessible Handbook](https://make.wordpress.org/accessibility/handbook/).

This website aims to provide you with answers about WordPress and accessibility. How do you design and create an accessible website or plugin? How do you write accessible content? What do you need to know to comply with international legislation?

We'll provide documentation, effective examples (both what to do and what to avoid) and reliable, up-to-date resources.

Additionally, we are developing a pattern library with code examples. We aim to meet [WCAG 2.2 AA](https://www.w3.org/WAI/WCAG22/quickref/).

Did we miss a topic? Did you find an error or have a great idea? Create an issue on our [GitHub repository wpaccessibility/wp-a11y-docs](https://github.com/wpaccessibility/wp-a11y-docs/issues/).

We would like to invite you [to contribute](https://wpaccessibility.org/docs/contribute/) to this documentation.

## Pull Request Previews

When you create a pull request, a preview of your changes will be automatically deployed and a comment will be added to your PR with a link to the preview site. This allows you and reviewers to see how your changes will look before merging.

Preview URLs follow the format: `https://wpaccessibility.org/pr-preview/pr-{number}/`

## Local install of the website

wpaccessibility.org is written in [Jekyll](https://jekyllrb.com), a static site generator in Ruby using [markdown](https://www.markdownguide.org/) for content.
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
Fix the linter issues automatically with `npm run format`.

If you made changes to the `_config.yml` file, run `bundle exec jekyll serve` again to apply the changes to the site.

Documentation about Jekyll itself is on [jekyllrb.com](https://jekyllrb.com/docs/). The theme is based on the Jekyll theme [Just the Docs](https://just-the-docs.com/). The changes made in Just the Docs are documented in the [Changelog for Release v0.1](/CHANGELOG/#release-v01).

## Create a Pull Request

Before submitting a Pull Request, please make sure:
- [ ] You checked the related issue is not already assigned to someone else.
- [ ] You checked the status of the related issue is "Todo" when you start.
- [ ] You did not generate content using AI (artificial intelligence).

If you submit code or documentation using a local build:
- [ ] Your code builds clean without any errors or warnings while running `npm run test`.
- [ ] You read the documentation in [How to help on GitHub](https://wpaccessibility.org/docs/contribute/github/).
- [ ] You checked the modified pages with an accessibility tool like [Axe Devtools](https://www.deque.com/axe/devtools/edge-browser-extension/) or [WAVE](https://wave.webaim.org/).

For more information, see the [How to contribute to this documentation](https://wpaccessibility.org/docs/contribute/) guide.

