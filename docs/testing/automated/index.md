---
title: Automated testing
layout: default
parent: Test for accessibility
description: Learn about automated accessibility testing and validation.
nav_order: 2
---

# Automated accessibility testing

With automated accessibility testing, it is important to check against the generated DOM, the frontend of your web project. This is different from, for example, PHP code standard checks where you can perform checks on the code base. You need to run checks on a working WordPress site.

Automated accessibility testing doesn't catch all accessibility errors at this moment, so additional manual testing stays needed. Testing in the browser and manual keyboard testing still need to be part of your workflow.

## Recommended testing tools

You need to run checks on a working WordPress site. This can be done using automation that sets up your environment dynamically but still requires a fully built and run installation.

### Axe
[axe-core-npm](https://github.com/dequelabs/axe-core-npm) by DeQue. This repository contains packages, which can be used for automated accessibility testing powered by axe core.
- @axe-core/cli
- @axe-core/playwright
- @axe-core/puppeteer
- @axe-core/react
- @axe-core/reporter-earl
- @axe-core/webdriverio
- @axe-core/webdriverjs

[Playwright Accessibility testing](https://playwright.dev/docs/accessibility-testing) uses Axe. Accessibility tests work just like any other Playwright test. You can either create separate test cases or integrate accessibility scans and assertions into your existing test cases. NPM package: [@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright).

Axe is also available as [aXe Devtools browser addon](https://www.deque.com/axe/devtools/extension/). The addon adds a tab to your inspector with a "validate" button. After validating you see the errors and warnings for that particular webpage and how to fix them. Available as a free limited version and as a paid Pro version.

### Pa11y
[Pa11y](https://github.com/pa11y/pa11y), runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process. 
