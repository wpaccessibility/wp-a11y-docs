---
title: Automated testing
layout: default
parent: Test for accessibility
description: Learn about automated accessibility testing and validation.
nav_order: 2
contributors:
  - Rian Rietveld
---

# Automated accessibility testing

With automated accessibility testing, it is necessary to check against the generated Document Object Model (DOM) of your web project. This is different from, for example, PHP code standard checks where you can perform checks on the code base. You need to run checks on a working site.

Automated accessibility testing cannot catch all accessibility errors, so additional manual testing is still needed. Testing in the browser and manual keyboard testing need to be part of your regular workflow.

## Recommended testing tools

### Axe-core

[Axe-core](https://github.com/dequelabs/axe-core-npm) by Deque is an accessibility testing engine for websites and other HTML-based user interfaces.

[axe-core-npm](https://github.com/dequelabs/axe-core-npm) offers packages like @axe-core/cli and @axe-core/react, which can be used for automated accessibility testing powered by axe core.

[Playwright Accessibility testing](https://playwright.dev/docs/accessibility-testing) uses Axe. Accessibility tests work just like any other Playwright test. You can either create separate test cases or integrate accessibility scans and assertions into your existing test cases. NPM package: [@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright).

Axe is also available as [aXe Devtools browser addon](https://www.deque.com/axe/devtools/extension/). The addon adds a tab to your inspector with a "validate" button. After validating you see the errors and warnings for that particular webpage and how to fix them. Available as a free limited version and as a paid Pro version. 

[Google LightHouse for Chrome](https://developer.chrome.com/docs/lighthouse) uses axe-core under the hood.

### IBM Equal Access Accessibility Checker

[The IBM Equal Access Accessibility Checker](https://github.com/IBMa/equal-access/wiki) is an open-source and freely available set of tools for web developers and accessibility auditors, documented in the IBM Equal Access Wiki.

- The **accessibility-checker-engine** uses a set of rules that map to accessibility standards to detect accessibility issues in web content and applications. 
- The **accessibility-checker-extension** integrates into browser DevTools, providing an integrated scanning experience, a keyboard checker mode visualization, and helps users quickly identify the source of accessibility issues, understand what to do, and try fixes. The Checker is also available as a package for CI/CD environments and automated testing frameworks.


### W3C Validators and tools

The W3C maintains a page with [links to the test tools](https://www.w3.org/developers/tools/) they provide, like the Nu HTML Checker, CSS Validator, and Link Checker. Their information includes the W3C API, providing consistent access to specifications and other W3C data.

### Pa11y
[Pa11y](https://github.com/pa11y/pa11y), runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process. 

## Resources

Research by Adrian Roselli: [Comparing Manual and Free Automated WCAG Reviews](https://adrianroselli.com/2023/01/comparing-manual-and-free-automated-wcag-reviews.html). This recommended post is updated regularly.

