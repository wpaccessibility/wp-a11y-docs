---
title: Changelog website
layout: default
parent: About this website
---

# Changelog

All notable user-facing changes to this project are documented in this file.

## Release v0.1

This Jekyll theme WP A11y Docs is based on Just the Docs by
Just The Docs is licenced as MIT.

In this initial release the theme is renamed into WP A11y Docs.

The URL for the GitHib pages is wpaccessibility.org.

### File organisation
This will be a one design theme only, so all the changes will be done directly in the files itself. This simplifies the code and makes the theme better maintainable. 

For this the following changes were made:
- Removed custom files and their references.
- Removed redundant include files.
- Removed the nav-footer: took up too much space and added a second `<footer>`.
- Added option for posts and post pagination.
- Refactored the breadcrumbs for the posts.
- Removed Just the Docs info pages and create placeholder text to match the actual site structure.
- Set Ruby to 3.3.6.
- Added option to add a canonical URL.

### SCSS 

- Refactoring directory structure.
- Removed the dark theme for now, that will be restored when the theme is finished and stable.
- Replaced `@import` for `@use`, for compatibility with Dart Sass 3.0.0.
- Replaced `darken` by `color.scale` and `color.adjust`, for compatibility with Dart Sass 3.0.0.
- Replaced deprecated global built-in functions by Sass values (sass:map, sass:color, sass:list etc.).

### CSS color contrast issue
- Placeholder: fixt color contrast and opacity.
- Fixed color contrast issues for text and non-text meaningful elements.

### Search at the top of the page
- Refactored the HTML of the form to make the HTML valid.
- Added screen reader feedback to announce number of search results.

### _config.yml

- Removed Google Analytics Tracking settings.
- Removed most variable because this is a static site.
- Changed names and colours of the callouts to match those used in [WordPress documentation style guide](https://make.wordpress.org/docs/handbook/documentation-team-handbook/handbooks-style-and-formatting-guide/)

### Accessibility improvements

- Moved the button to expand the submenus to after the submenu link, so the tab order is meaningful.
- Changed aria-pressed by aria-expanded, see also issue [Change aria-pressed into aria-expanded for buttons connected to expandable content](https://github.com/just-the-docs/just-the-docs/issues/1680).
- Added `aria-current="page"` to links to the current page.
- Removed anchor links before headings. The link was inside the heading, resulting in announcing the heading text twice. Maybe we find an accessible way later on.
- Copy code button is now always visible (not only on hover) and has a larger clickable area. The copy action has now also screenreader feedback.
- The code blocks now have a tabindex="0".
