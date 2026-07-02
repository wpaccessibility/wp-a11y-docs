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

With automated accessibility testing, it is important to check against the generated DOM, the frontend of your web project. This is different from, for example, PHP code standard checks where you can perform checks on the code base. You need to run checks on a working WordPress site.

Automated accessibility testing doesn't catch all accessibility errors at this moment, so additional manual testing stays needed. Testing in the browser and manual keyboard testing still need to be part of your workflow.

## Recommended testing tools

### Axe-core

[Axe-core](https://github.com/dequelabs/axe-core-npm) by DeQue is an accessibility testing engine for websites and other HTML-based user interfaces.

[axe-core-npm](https://github.com/dequelabs/axe-core-npm) offers packages like @axe-core/cli and @axe-core/react, which can be used for automated accessibility testing powered by axe core.

[Playwright Accessibility testing](https://playwright.dev/docs/accessibility-testing) uses Axe. Accessibility tests work just like any other Playwright test. You can either create separate test cases or integrate accessibility scans and assertions into your existing test cases. NPM package: [@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright).

Axe is also available as [aXe Devtools browser addon](https://www.deque.com/axe/devtools/extension/). The addon adds a tab to your inspector with a "validate" button. After validating you see the errors and warnings for that particular webpage and how to fix them. Available as a free limited version and as a paid Pro version. 

[Google LightHouse for Chrome](https://developer.chrome.com/docs/lighthouse) uses axe-core under the hood.

### IBM Equal Access Accessibility Checker

On the Wiki Page of [The IBM Equal Access Accessibility Checker](https://github.com/IBMa/equal-access/wiki) is an open-source freely available set of tools for web developers and accessibility auditors. 

- The **accessibility-checker-engine** uses a set of rules that map to accessibility standards to detect accessibility issues in web content and applications. 
- The **accessibility-checker-extension** integrates into browser DevTools, providing an integrated scanning experience, a keyboard checker mode visualization, and helps users quickly identify the source of accessibility issues, understand what to do, and try fixes. The Checker is also available as a package for CI/CD environments and automated testing frameworks.


### W3C Validators and tools

The W3C maintains a page with [links to the test tools](https://www.w3.org/developers/tools/) they provide, like the Nu HTML Checker, CSS Validator, and Link Checker to test your work. Including a W3C API.

### Pa11y
[Pa11y](https://github.com/pa11y/pa11y), runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process. 

## Resources

Research by Adrian Roselli: [Comparing Manual and Free Automated WCAG Reviews](https://adrianroselli.com/2023/01/comparing-manual-and-free-automated-wcag-reviews.html). This recommended post is updated regularly.

