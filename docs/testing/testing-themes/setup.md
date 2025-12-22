---
title: Getting set up to test
layout: default
parent: Testing WordPress themes
description: How to set up a test site and reporting document for accessibility-ready reviews
nav_order: 2
---

# Getting set up to test

## Creating the test site
To accessibility-ready test a theme, you will first need to set up a testing environment. 

It is important to note that browser extensions for accessibility testing do not current work in WordPress Playground. As a result, you can't use Playground for accessibility-ready reviews. 

Outside of Playground, reviews can be done in any WordPress environment you prefer. For convenience, we have a template site available for quick spin-up via [InstaWP](https://instawp.com). 

### Why use our InstaWP testing site
You may be wondering why we recommend using our InstaWP template for testing rather than loading the theme up on any other WordPress site. Here's why:

Our InstaWP template has demo content including pages, posts, media, and navigation menus already configured so you can get started testing faster. We have also gone through the standard [WordPress theme unit test data](https://make.wordpress.org/themes/handbook/review/theme-unit-test/) and remediated accessibility issues to avoid false positives. 

Additionally, specific pages and URLs from this site are referenced in the report template. For this reason, we recommend starting with an InstaWP testing site. If you prefer to test elsewhere, you can export the InstaWP content and import it into a different site using the [WordPress Importer plugin.](https://wordpress.org/plugins/wordpress-importer/)

### How to create your site
Here's how to create a site you can test on from our template:

1. Go to the [WordPress Accessibility-ready Test Sites launcher on InstaWP.](https://app.instawp.io/launch?s=wp-accessibility-ready-test-sites&d=v2)
2. Click the launch demo button.
3. Enter your email address in the email field.
4. Check the box acknowledging the privacy notice.
5. Click the proceed button.

The website should be created in a matter of minutes and you will be automatically logged into the site. 

An email will be sent to you with the web address and admin credentials for logging into the website should you need to revisit the site later.

**Note:** These sites expire after seven (7) days. You can extend them for three (3) additional days if needed. If you need a testing site to be available longer than 10 days, you'll need to migrate it to your own hosting or local development environment.

### Install, activate, and configure the theme

{: .callout .alert }
Amber will finish this on Monday.


## Creating the report

Accessibility-ready reports are generated with a Google Sheet template. This ensures that all reports are consistent and provides a template for your audit.

### Copy the template
1. Open the [Theme Testing Reports Google Drive folder](https://drive.google.com/drive/folders/1z3v3U02W1WFt38Kvzb4aaVVkqzUq9pnP?usp=sharing).
2. Find the Google Sheet titled "** Template ** Accessibility-Ready Test Report".
3. On the template report, click the "More Actions" button (three dots) located at the far right in the list layout or in the upper right corner in the grid layout.
4. Click "Make a Copy" to duplicate the template. Your copy should stay in the Theme Testing Reports folder.
5. Rename your copy following this format: `YYYY-MM [Theme Name] Accessibility-Ready Test Report`.
6. Now your report is ready to edit.

{: .callout .warning }
**Warning:** Do not edit the template. Always make a copy of the template and then edit only your copy.

### Fill in the report summary
After creating a **copy** of the Google Sheets template and renaming it, open the file to get started. Before testing fill in the following information on the Summary tab:

1. **Theme Name:** the name of the theme found in the Trac ticket or themes directory.
2. **Theme URL:** if the theme is published, this is the URL to the theme in the directory. If the theme has not been published, this is not applicable and may be left blank.
3. **Theme Version Number:** the number of the version you're testing.
4. **Trac Ticket URL:** the URL to the Trac ticket for the theme and version you're testing.
5. **Theme developer:** WordPress.org username of the developer, formatted with an `@` symbol before it (e.g. `@alh0319`). Including the `@` symbol will ensure they get tagged when you paste in the final report on Trac. This cell supports multiple usernames so long as they each start with an `@` and are separated by spaces and/or commas.
6. **Tested by:** Your WordPress.org username so you can get credit for the contribution.
7. **Test Date:** The current date in YYYY-MM-DD format.
8. **Tested on URL:** The URL to your test site, if applicable. This is provided for convenience only and is not expected to be permanent. Leave blank if testing on a local site.

{: .callout .alert }
**Alert:** Do not edit any other content on the Summary tab. This content will update dynamically as you change content on the "Full Review" tab.

After filling in the information on the Summary tab, you're ready to start testing!