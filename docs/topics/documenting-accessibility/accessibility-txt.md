---
title: accessibility.txt files
layout: default
parent: Documenting accessibility
nav_order: 3
---

# Accessibility.txt files

An `accxessibility.txt` file is a file that can be included in plugins and themes to provide information about accessibility of the plugin or theme in a standardized format.

This file helps website owners make informed decisions when choosing plugins and themes by clearly outlining accessibility audit status, how it has been tested, and any included accessibility features. It also provides information on reporting accessibility issues, making it easier to ensure websites remain compliant with accessibility standards over time, and developers can be notified of issues as they are identified.

{: .callout .alert }
As of January 2026, Accessibility Ready themes must include an `accessibility.txt` file that adheres to the WordPress theme accessibility readme standard described below.  

## Required Format

The `accessibility.txt` file is intended to be written using a subset of markdown. It should be located in the root theme or plugin directory and include the following sections.

```
=== Accessibility Statement ===
Short statement about approach to accessibility in the development process. 

== Quick Information ==
Accessibility audit completed: (Yes or No)
Most recent audit date: YYYY-MM-DD
Tested to standard and conformance level: WCAG 2.2 AA
Audited by: (comma-separated list of wordpress.org userid's or markdown-formatted links with Company Names and URLs)
Accessibility Conformance Report: https://example.com/ 

== Testing Tools and Methodology ==

Describe tools or testing techniques used when developing the theme or plugin to ensure accessibility. Explain how accessibility fits in your development process as updates are released. 

== Screen Reader Text Class ==

Provide the class name the theme or plugin uses for screen reader text.

== Accessibility Features ==

If the theme or plugin has any accessibility features, describe or list them here. This section may be omitted if the theme or plugin does not contain specific features for accessibility.

== Accessibility Help Contact ==

Email address or link to form where users can ask accessibility questions or get accessibility assistance. 

== Where to Report Issues ==

Email address or link to form to report accessibility issues identified in the theme.

```

## Explanation of sections
The following explains how to complete each section in the required format shown above.

### Accessibility Statement

This section provides a short summary of your approach to accessibility during theme development, goals, or accessibility commitments. 

Examples:

* “This theme was designed and developed with accessibility best practices in mind, following WCAG 2.2 guidelines.”  
* “We are committed to making our plugins usable by as many people as possible, including those using assistive technologies.”

### Quick Information

The Quick Information section provides a high-level overview of the theme’s or plugin's accessibility test status and conformance level. Some content in this section is optional or may be omitted if it does not apply.

* **Accessibility audit completed:** Yes or No. Answer yes if the theme or plugin has been audited for accessibility conformance with an officially recognized standard such as Web Content Accessibility Guidelines (WCAG), EN 301 549, etc. The testing may have been completed by you or an external organization or individual.  
* **Most recent audit date:** (OPTIONAL) provide the date when most recent audit was completed. Omit if the theme or plugin has never been audited.  
* **Conformance level:** (OPTIONAL) if an audit has been completed, list the standard it was tested against here. Omit if the theme or plugin has never been audited.  
* **Audited by:** (OPTIONAL) Provide a comma-separated list of wordpress.org userid's or markdown-formatted links with Company Names and URLs for the people or organization that performed the most recent audit. This can help to provide trustworthiness or third-party verification to the audit. Omit if the theme or plugin has never been audited.  
* **Accessibility Conformance Report:** (OPTIONAL) URL to an Accessibility Conformance Report for the theme or plugin. Omit if an ACR is not available. [Learn more about ACRs]({{site.baseurl}}/docs/topics/documenting-accessibility/acr/)

### **Testing Tools and Methodology**

This section details how accessibility was tested and integrated into your development workflow. Be as detailed as possible to help website owners understand how the theme was tested as it was built, and if there is ongoing testing for updates. List tools and techniques used, and if the theme was tested by a third-party accessibility specialist. If users with disabilities or everyday users of assistive technology have participated in the testing process also include that information.

**Example:**

"Accessibility was a core part of the development workflow for this theme from the initial design phase through final release. We followed WCAG 2.2 AA guidelines to ensure the theme is usable by people with a wide range of abilities and assistive technologies.

During development, we used a combination of automated and manual testing methods:

* **Automated Tools:**  
  * Accessibility Checker WordPress plugin  
  * axe DevTools browser extension  
  * WAVE browser extension  
  * ESLint with accessibility-focused rules for JSX and ARIA usage  
* **Manual Testing Techniques:**  
  * Keyboard-only navigation testing to ensure all interactive elements are focusable and operable  
  * Screen reader testing with **NVDA (Windows)** and **VoiceOver (macOS)** to verify meaningful announcements, focus order, and labeling  
  * Manual color contrast checks using the WebAIM Contrast Checker  
  * Testing responsive behaviors to ensure accessibility is preserved on mobile and tablet devices

  All components and templates were tested for accessibility as they were developed. Additionally, we performed a full accessibility audit prior to release. The audit was conducted internally and verified by an external accessibility expert, John Doe, and we conducted user testing sessions with three blind screen reader users.

  We maintain a version-controlled accessibility checklist, and all theme updates go through regression testing to ensure accessibility is preserved. Any reported issues from users are logged and reviewed as part of our regular release process.

  This proactive and ongoing approach helps ensure the theme remains compliant and usable for all site visitors."

### Screen Reader Text Class

This section names the CSS class used in your theme or plugin to visually hide content but make it available to screen readers. Including the class here makes it easier for website owners to find and use the class.

You may use any naming convention for your class, but must visually hide content with the [required CSS for a screen reader text class.]({{site.baseurl}}/docs/topics/code/screen-reader-text/)

**Example:**

`.screen-reader-text`

### Accessibility Features

A list or description of accessibility enhancements built into the theme or plugin above and beyond [theme accessibility-ready requirements]({{site.baseurl}}/docs/topics/theme-guidelines/). This section can be omitted if no features exist.

**Example:**

"In addition to meeting accessibility-ready requirements, the theme provides stylesheets for light mode, dark mode, and high contrast mode. These styles will be enabled automatically based on operating system color mode preferences, but in the theme settings, there is an option to turn on a front-end toggle allowing users to switch between color modes."

### Accessibility Help Contact

This section tells users how to get help if they experience accessibility issues with your theme.

**Examples:**

* [support@example.com](mailto:support@example.com)  
* [https://example.com/support](https://example.com/support) 

### Where to Report Issues

This section provides a designated channel for users to report accessibility bugs or concerns.

**Examples:**

* [https://wordpress.org/support/theme/theme-slug-here/](https://wordpress.org/support/theme/theme-slug-here/)  
* "Please report accessibility issues on our GitHub repository, https://github.com/URL."

## Markdown

The `accessibility.txt` readme use a customized version of Markdown. Most Markdown calls work as expected.

Markdown allows for easy linking in your `accessibility.txt` file. Just write like this to link a word to a URL:

`[WordPress](http://wordpress.org)`

[Learn more about markdown.](https://www.markdownguide.org/basic-syntax/)

## Visibility of `accessibility.txt` files

Currently `accessibility.txt` files can only be viewed by downloading plugin or theme files and viewing them in a text editor or using the [theme or plugin file editor](https://developer.wordpress.org/advanced-administration/wordpress/edit-files/). In the future, the accessibility team hopes to surface this information withing the WordPress admin and on WordPress.org. 