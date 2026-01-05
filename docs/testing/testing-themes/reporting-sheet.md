---
title: Reporting sheet overview
layout: default
parent: Testing WordPress themes
description: How to set up a test site and reporting document for accessibility-ready reviews
nav_order: 3
---

# Reporting sheet overview

As described in _[Getting set up to test]({{site.baseurl}}/docs/testing/testing-themes/setup/)_, accessibility ready reports are generated using a Google Sheets template. This ensures that all reports are consistent between testers and helps guide the testing process so nothing is missed. The reporting sheet has three tabs which are described in detail below.

[View the Accessibility Ready Test Report Template](https://docs.google.com/spreadsheets/d/1sIHAPwwQIoJVj1ODg2FX2L_wf_CLNMLekQ2D-MvWGq4/edit?usp=sharing)

## Summary tab
The summary tab provides a high-level overview of the accessibility review. Most fields on this tab are populated automatically based on results entered in the "Full Review" tab.

This tab is intended to:

* Identify the theme and testing context.
* Summarize pass/fail outcomes for each Accessibility Ready requirement.
* Communicate whether testing was completed or stopped early.
* Clearly outline next steps for the theme developer.

### Theme test metadata section

The top section captures identifying information for the review, when it was completed and who by. This information is filled in during the test setup process and is described in greater detail in [setup documentation]({{site.baseurl}}/docs/testing/testing-themes/setup/).

### Status explanation section

A reference cell explains the meaning of each status used throughout the report:
* **Pass:** All relevant aspects of the theme fully meet the requirements.
* **Fail:** At least one aspect of the theme does not meet the requirement.
* **Not Applicable:** This requirement does not apply to the page.
* **Not Evaluated/Test Incomplete:** This requirement has not yet been tested. Completed reports should not have this status.

If a requirement fails, testers are expected to add explanatory notes describing what fails and why.

### Requirements summary table

This table lists all Accessibility Ready requirements and provides a snapshot of their testing status. Columns in the table are:

* Requirement: The name of the accessibility requirement (linked to detailed testing instructions on this site).
* Status: One of Pass, Fail, Not Applicable, or Test Incomplete, which is automatically assigned based on data entered in the "Full Review" tab.
* Notes: Brief explanations for failures or relevant clarifications, which are added in list format from relevant notes fields on the "Full Review" tab.

At the start of testing, requirements are marked Test Incomplete. As testing progresses, statuses and notes will update automatically.

If testing is stopped early due to significant failures, remaining items may remain incomplete until the theme developer fixes issues and another review is started.

### Next steps section
The next steps section is automatically populated with relevant information based upon if the statuses are all "Pass" or if there are failures present.

### Tester responsibilities for the summary tab

Testers should:

* Ensure identifying information is accurate.
* Verify that statuses align with test results entered on the "Full Review" tab.
* Confirm that reviews for approved themes contain no “Not Evaluated” statuses.

This tab serves as the official summary record of the Accessibility Ready review and is used to generate the report on the "Markdown for Trac" tab.

## Full review tab
The Full Review tab is the primary workspace for conducting and documenting Accessibility Ready testing. All accessibility checks are performed and recorded on this tab. Results entered here automatically populate the Summary tab and form the basis of the final review outcome.

This tab is designed to support systematic, page-by-page testing across required templates while keeping results consistent, repeatable, and auditable.

The Full Review tab enables testers to:

* Evaluate each Accessibility Ready requirement in detail.
* Record pass/fail outcomes using standardized statuses and all required page templates.
* Add concise notes explaining failures or relevant findings.
* Identify patterns of failure that may justify stopping testing early.

All accessibility-ready approval decisions should be based on evidence recorded in this tab.

### Table structure

The Full Review tab consists of a series of tables for each accessibility-ready requirement.

#### Columns (pages and templates)

Column A in the sheet lists the tests for each accessibility-ready requirement. Each requirement is broken into specific, testable assertions (a "check") that will result in a clear "pass" or "fail" result. The checks in each group are identical to the numbered steps in accessibility-ready requirement testing documentation.

There are eight (8) additional columns, each of which represents a required page or template that must be tested:

* Front Page
* Blog Page - `/blog/`
* Post with Comments - `/template-comments/`
* Category Archive - `/category/block/`
* Page Markup and Formatting - `/accessibility-ready-test-pages/page-markup-and-formatting/`
* Block Patterns - `/accessibility-ready-test-pages/block-patterns/`
* Search Results Page - `/?s=block`
* 404 Page

The slugs/page paths for these templates are provided in row 1 to make it easier to find these pages for testing. These slugs/paths map to content in the testing sites.

#### Rows (results)

Each cell contains a dropdown with the following status options:

* Pass – The check passes on that page with no exceptions.
* Fail – At least one instance fails on that page.
* Not Applicable – The check does not apply to that page or template.
* Not Evaluated – Testing has not yet been performed.

A single failure on a page is sufficient to mark a check as Fail.

#### Notes rows

Each requirement group includes a Notes row spanning all columns. Use Notes to:

* Briefly describe what failed and why.
* Identify repeated or global issues.
* Provide clarifying context when needed

All notes across a row will be automatically combined into a single notes cell on the summary tab. For this reason, when adding notes, it is important to avoid duplicating identical notes and only document global issues once.

### Tester responsibilities for the full review tab

When entering information in the full review tab, testers should:

* Apply statuses consistently and accurately.
* Provide concise but detailed notes with enough information for theme developer to understand what elements they need to fix to pass and failed checks. It can be helpful to use IDs or classes when describing problematic elements to they are easy for the developer to located.
* Ensuring the recorded results are sufficient to support the review outcome.

## Markdown for Trac tab

The Markdown for Trac tab provides a preformatted, copy-and-paste–ready report for posting Accessibility Ready test results directly to the theme’s WordPress.org Trac ticket.

This tab is automatically generated from data entered on the Summary tab using a `concatenate` formula. Testers can not manually edit the Markdown content itself with in the sheet but can do so after pasting the cell contents into a Trac comment.

### Purpose of the markdown for Trac tab

This tab exists to:

* Standardize how Accessibility Ready results are communicated in Trac.
* Reduce manual formatting work for testers.
* Ensure consistency, clarity, and completeness across all reports
* Provide developers with a readable, scannable summary of results that includes links to both the full Google sheet and also documentation for each accessibility ready requirement on this website.


### Structure of the generated markdown

The output on this tab is intentionally formatted to work with Trac’s Markdown-like syntax, and includes the correct heading levels when pasted into a Trac comment, which starts with an H3 heading. 

In order for the report to fully function, the following fields must be completed:

* Theme developer username (starting with an `@` symbol) on the Summary tab, cell B5.
* Sharing URL, cell C1, on the Markdown for Trac tab.

This report documents the results of the Accessibility Ready review and summarizes pass, fail, and incomplete findings for each requirement, with notes and links to relevant documentation. It includes a direct link to the full Google Sheets report and recommended next steps.

### Sharing workflow

To share the results of your review, follow the steps outlined at the top of the tab:

1. Find the sharing link to the Google Sheet.
    1. Click Quick Sharing Actions (upper-right corner of Google Sheets).
    2. Copy the shareable link to the spreadsheet.
2. Paste the URL into cell C1 (“Sharing URL”).
3. Click on cell A2, which holds the generated report, and copy it to your clipboard.
4. Log into WordPress.org.
5. Open the theme's Trac ticket.
6. Paste the report into a new comment on the Trac ticket.

No additional formatting is required, however you are welcome to modify the introduction and next steps as needed.