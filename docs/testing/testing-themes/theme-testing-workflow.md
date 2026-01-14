---
title: Testing workflow tips
layout: default
parent: Testing WordPress themes
description: How to set up a test site and reporting document for accessibility-ready reviews
nav_order: 4
---

# Testing workflow tips

Once you have [set up your test site and reporting document]({{site.baseurl}}/docs/testing/testing-themes/setup/), you can begin the theme testing process. The guidance below focuses on how to test efficiently and report issues quickly. 

## Consider your browser window layout

A consistent desktop and browser setup will significantly reduce context switching and reporting time. Figure out how you can position browser windows so you can see multiple things at a time and reduce clicks.

**Suggested setup:**
* Keep your reporting spreadsheet open in a browser window wide enough to show all columns without scrolling.
* Open the [theme accessibility guidelines]({{site.baseurl}}/docs/topics/theme-guidelines/) in a separate browser window so you can reference instructions as needed while you work. This can be very narrow if you're working on one monitor with limited space.
* Open all pages you need to test in separate tabs so you can quickly switch between them without needing to navigate back and forth. Open these pages in the **same order they appear in the reporting sheet**. This alignment makes it much easier to record results accurately.

## Choosing a testing approach that works best for you

There is no single “correct” way to move through Accessibility Ready testing. Testers generally fall into one of two workflows: testing an entire page at once, or testing a single check across all required pages first. Understanding the pros and cons of each approach can help you choose the method that best matches your experience level, focus style, and available time.

### Testing a whole page at once

In this approach, you load one page (for example, the front page) and test all applicable accessibility requirements before moving on to the next page.

This approach is recommended if you prefer linear, page-based workflows. It mirrors the typical accessibility auditing process and is helpful if you expect to identify many failures (perhaps because you saw some while configuring the theme), and want the fastest understanding of status to report back to the theme developer. 

On the other hand, this approach may make testing and reporting slower because it requires more switching between tools and techniques than if you test a single check across all pages.

### Testing a single check across all pages first

In this approach, you choose one requirement (such as skip links or landmarks) and test it across every required page before moving on to the next requirement.

This approach reduces context and tool switching. It may make identifying global issues and repeated patterns easier and can speed up reporting if you identify a global issue and drag the statuses across columns in the Google Sheet.

The downside to this approach is that you may have fewer unique issues to note for the theme developer if you stop testing early based on a large numbers of failures.

### Choosing the right approach for you

Many experienced testers use a **hybrid approach**, starting with single-check testing to identify major blockers, then switching to page-based testing for more detailed reviews.

If you are:
* **New to Accessibility Ready testing**: testing one check at a time across all pages may feel less overwhelming and help you gain confidence in testing.
* **Seeing early, obvious failures**: testing multiple checks on a single page (like the home page) gives you a better understanding of what needs to be fixed when you report back to the theme developer.  

Whichever approach you choose, consistency in your process matters more than the order in which you test. One you get started you'll build a rhythm and each accessibility ready review will get easier as you go.

## Use spreadsheet features to save time

The reporting sheet is designed to support efficient workflows:
* Drag statuses across cells when the same result applies to multiple pages
* Mark checks that only need to be tested once (such as theme support declarations) or are irrelevant using the "Not Applicable" status.

## Stop testing when the outcome is clear

If you quickly identify multiple failures such as:
* Missing skip links
* Broken keyboard navigation
* Color contrast failures
* Empty buttons or links
* Problems easily identified with a browser extension

**You may stop testing early.** 

We appreciate your time as a volunteer tester. We don't expect you to spend hours testing a theme and reporting in detail failures on every row. It's ok to document representative issues, stop testing, and share the already identified failures with the theme developer, requesting fixes before you continue testing.

Go with your gut. If you suspect the developer has not read the documentation, you can kindly ask them to review the requirements and self-test their theme before passing it back for re-review.

