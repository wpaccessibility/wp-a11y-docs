---
title: Automated validation
layout: default
parent: Test for accessibility
nav_order: 5
---

# Automated accessibility testing

## WCAG 2 AA automated validation

The generated DOM, the front end of your web project, must conform to WCAG 2 AA. You can use automated validation to get a limited scope of your success at this.

Recommended:

- [aXe browser addon](https://www.deque.com/aXe/) for Chrome and FireFox. The addon adds a tab to your inspector with a validate button. After validating you see the errors and warnings for that particular webpage and how to fix them. Make sure to also test in different views and with the menu open and closed, for example.
- [HTML_CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/)
- Accessibility Inspector in the [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools). A good read about this by Marco Zehe:  How to use [NVDA and Firefox to test your web pages for accessibility](https://www.marcozehe.de/how-to-use-nvda-and-firefox-to-test-your-web-pages-for-accessibility/)

More tools:

- [React-a11y](https://github.com/reactjs/react-a11y), Identifies accessibility issues in your React.js elements
- Static AST checker for [a11y rules on JSX elements](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- More [Toolbars and toolkits ](https://make.wordpress.org/accessibility/handbook/which-tools-can-i-use/useful-tools/#toolbars-toolkits) in the Accessibility Handbook

## Automated testing

The big difference between PHP and JavaScript code standard checks and accessibility checks is that the accessibility checks need to be performed on the generated DOM, not on the code base. You need to run checks on a working WordPress site. This can be done using automation that sets up your environment dynamically, but still requires a fully built and run installation.

There are several command line tools for automated testing like [aXe-cli](https://github.com/dequelabs/axe-cli) and [pa11y](https://github.com/pa11y/pa11y).

{: .callout  .info }
**Info:** Automated accessibility testing doesn’t catch all the issues, rarely more than 30%. Testing in the browser and manual keyboard testing still needs to be part of your workflow.

### Setup for aXe-cli

Install axe-core for CLI first:

```
npm install axe-cli -g
npm install chromedriver –g`
```

Then run axe in the command line:

```
axe url -b c
```

The url can be any url, also a local one. You get a report of the accessibility issues for that url. The **-b** stands for browser, **c** for chrome, as this browser gives the best results (better than the default PhantomJS). You will get the errors and warnings in your console.

You can provide more (space separated) urls to the command like

```
axe url url2 url3 -b c
```

or call a file with urls like:

```
axe $( cat list-of-urls.txt ) -b c
```

**Note**:  You can run [axe-cli on more than one url](https://make.wordpress.org/accessibility/handbook/best-practices/test-for-web-accessibility/test-for-web-accessibility-frontend-code/#setup-for-axe-cli) in one command, but axe-cli is not build to run on a large amount of urls or on a complete site, axe-cli is not a crawler. Deque Labs recommends to use the [axe-webdriverjs](https://www.npmjs.com/package/axe-webdriverjs), a chainable aXe API for Selenium’s WebDriverJS for testing on a large amounts of urls.

### Setup for pa11y

The [setup for pa11y](https://github.com/pa11y/pa11y) is well documented in the GitHub repository.


## Browser Toolbars & Toolkits

- [aXe accessibility testing tool](https://www.deque.com/products/axe/) — available as browser extension and npm module ([axe-core](https://github.com/dequelabs/axe-core))
- [WAVE](http://wave.webaim.org/toolbar) — run the WAVE accessibility evaluation tool within Firefox and Chrome.
- Accessibility inspector in the FireFox developer tools
- [AInspector for WCAG Accessibility Evaluation](https://addons.mozilla.org/en-US/firefox/addon/ainspector-wcag/) — Inspect web pages for potential accessibility issues.
- [Tota11y](http://khan.github.io/tota11y/) — An accessibility visualization toolkit that can be dragged into your bookmarks bar or installed as a plugin.
- [Total Validator](http://www.totalvalidator.com/) — an HTML validator, accessibility validator, spell checker, and broken link checker all rolled into one tool. Free & commercial versions available.
- [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=es) — A [Chrome](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?pli=1) or [Firefox extension](https://addons.mozilla.org/en-us/firefox/addon/headingsmap/) that shows the structure of headings on a webpage.
- [Visual ARIA Bookmarklet](http://whatsock.com/training/matrices/visual-aria.htm) — A bookmarklet to visually display ARIA attributes on a webpage.
- [Accessibility Testing Tools for Desktop and Mobile Websites](https://www.24a11y.com/2017/accessibility-testing-tools-desktop-mobile-websites/) – A review of testing tools by Paul J. Adam.
- [Accessibility Bookmarklets](https://www.digitala11y.com/accessibility-bookmarklets-testing/) – A collection of bookmarklets useful for accessibility testing.
