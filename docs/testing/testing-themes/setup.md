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

{: .callout .alert }
**Notice**: We are aware of some missing focus indicators and other accessibility issues with InstaWP's launcher. These issues will be reported to them for remediation. If you are unable to create a test site due to accessibility issues, tag Amber Hinds and Joe Dolson (`@alh0319 @joedolson`) in #accessibility in Make WordPress Slack, and one of them will create a site for you.

Here's how to create a testing site from our template:

1. Go to the [WordPress Accessibility-ready Test Sites launcher on InstaWP.](https://app.instawp.io/launch?s=wp-accessibility-ready-test-sites&d=v2)
2. Click the "launch demo" button.
3. Enter your email address in the email field.
4. Check the box acknowledging the privacy notice.
5. Click the "proceed" button.

The website should be created in a matter of minutes and you will be automatically logged into the site. 

An email will be sent to you with the web address and admin credentials for logging into the website should you need to revisit the site later.

**Note:** These sites expire after seven (7) days. You can extend them for three (3) additional days if needed. If you need a testing site to be available longer than 10 days, you'll need to migrate it to your own hosting or local development environment.

### Install, activate, and configure the theme

After creating the site, you need to install and setup the theme for testing. Here are the steps to make sure you're ready to test:

#### Installing and activating the theme

1. Determine if you're testing a new theme or existing theme. ([See Identifying themes that need to be tested]({{site.baseurl}}/docs/testing/testing-themes/identifying-themes/)) 
2. Install the theme in the testing site following these instructions:
    1. If the theme is a new theme or an existing theme with an unreleased new version:
        1. Go to the Trac ticket for the theme.
        2. Download the latest zip file for the theme from the Trac ticket. There will be a zip file linked in the ticket, but check all comments to make sure a newer zip file has not been provided.
        3. In WP-admin, go to Appearance \> Themes.
        4. Click the "Add theme" link (visually styled as a button).
        5. Click the "Upload Theme" button.
        6. Upload your theme and click the "Install Now" button.
    2. If the theme is already approved:
        1. In WP-admin, go to Appearance \> Themes.
        2. Click the "Add theme" link (visually styled as a button).
        3. Search for the theme by name.
        4. Once you have found the theme, click the "Install" link (visually styled as a button) on the theme tile.
3. After installing the theme, click the "Activate" link (visually styled as a button) to activate it.

#### Configuring the theme

Once the theme is active, you need to configure the theme content for testing. The following steps assume you're starting with our InstaWP template content, in which case the setup work should be minimal. 

After activating the theme, do the following:

1. If prompted to install "required" plugins, install and activate those plugins.
2. If prompted to import demo content, import the content. Important: Add demo content to the existing content rather than overwriting it.
3. Set up the menus:
    1. Set the primary menu in the header to the menu named "Primary".
    2. If a "mobile" menu exists, also assign the Primary menu to this menu area.
    3. If a footer or other menu area exists, assign the "Social menu" or "All Pages Flat" menu to these areas.
4. Set up the Block Patterns page:
    1. Go to the Block Patterns page (`/accessibility-ready-test-pages/block-patterns/`).
    2. Edit the Block Patterns page.
    3. In the editing screen, click the Block inserter (+) in the top-left corner.
    4. Click the Patterns tab.
    5. Insert all available patterns into the page. Do not change any content or settings for the patterns.
    6. Save the page.
5. Configure any other available settings.
    1. If the theme supports the Customizer, open the Customizer and check for theme settings that need to be configured.
    2. Check for a theme settings page and enable settings there as needed. 

Examples of other settings you may need to enable in the theme Customizer or settings pages include:
* Show search in header.
* Enable comments.
* Add related posts below content on post single.
* Adding URLs to fields for social media profiles.

Note: Each theme is different so the exact configuration process will vary by theme. Use these steps to guide you, however you may need to do something different if prompted by the theme. Ultimately the goal is to configure the theme in a way that is representative of how a typical website owner might configure it and to cover as many of the possible settings as is reasonably possible.

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