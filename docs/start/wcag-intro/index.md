---
title: Introduction to WCAG
layout: default
parent: Start with accessibility
description: What are the Web Content Accessibility Guidelines and how to use them.
nav_order: 3
contributors:
  - Annelies Verhelst
  - Joe Dolson
  - Rian Rietveld
---

# Introduction to WCAG

The Web Content Accessibility Guidelines, or WCAG, are the primary guidelines for meeting accessibility standards worldwide. You will need to refer to them when designing, writing, developing, or testing web pages, plugins, themes, or other software. 

Following these guidelines will help make your work accessible for as many people as possible, including those with disabilities. 

The guidelines are globally used in legislation and are created and maintained by the Web Accessibility Initiative (WAI), a part of the international World Wide Web Consortium (W3C).

It's worth mentioning that WCAG in itself is not a law. It is a set of guidelines for proper web development. Be aware that it's very often referred to as something that's legally mandatory.

However, there's more nuance to that. Correctly following these guidelines and techniques will help ensure compliance with accessibility laws and legislation. [More about legislation and laws for accessibility]({{site.baseurl}}/docs/topics/legislation/).

## WCAG and WordPress

WordPress requires that all content meet WCAG guidelines, but also pushes to provide accessibility beyond that minimum whenever possible. 

WordPress Accessibility Coding Standard:
<blockquote>
    <p>All new or updated code released in WordPress must conform to the WCAG 2.2 guidelines at level AA.</p>
    <cite><a href="https://make.wordpress.org/core/handbook/best-practices/coding-standards/accessibility-coding-standards/">WordPress Accessibility Coding Standard</a></cite>
</blockquote>

If you want to learn about WordPress-specific guidelines, find our [standards and best practices specific to WordPress](https://wpaccessibility.org/docs/topics/).

## WCAG explained

When building a new website, theme, or plugin, ask yourself these four questions:

- Is all content available to everyone? (Perceivable)
- Can visitors use all functionality? (Operable)
- Can visitors comprehend all content? (Understandable)
- Can visitors use any device? (Robust)

### Principles and guidelines

There are four key principles in WCAG, and they reflect what a website should be: **perceivable**, **operable**, **understandable** and **robust**.

Each principle has a few guidelines describing how to meet a principle.


#### Section 1: Principle Perceivable

Is all content available to everyone?

- Provide text alternatives for non-text content (e.g., images).
- Provide captions and other alternatives for multimedia.
- Create content that can be presented in different ways without losing meaning.
- Make it easy for users to see and hear content (e.g., by using color well, offering multimedia controls, and allowing text resizing).

#### Section 2: Principle Operable

Can visitors use all functionality?

- Make all essential functionality available from a keyboard.
- Give users enough time to read and use content.
- Do not use content that causes seizures.
- Help users navigate and find content.

#### Section 3: Principle Understandable

Can visitors comprehend all the content?

- Make text readable and understandable.
- Use easy-to-comprehend text — avoid complex wording.
- Make content appear and operate in predictable ways.
- Guide users to avoid and correct mistakes.

#### Section 4: Principle Robust

Can visitors use any device?

- Content must be able to be interpreted reliably by a wide variety of user agents, including assistive technologies.
- All user interface components should have programmatically determinable names and roles.

### Section 5: Conformance

Sections 1 through 4 contain the specific guidelines used to create accessible content. Section 5, however, talks about what it means to conform to these guidelines and defines important terminology used for conformance.

Although when following the WCAG guidelines you will often stay within sections 1 to 4 (the four principles), it's necessary to read through [section 5.2.5](https://www.w3.org/TR/WCAG22/#cc5) as well. It's about non-interference, meaning your techniques cannot block users' ability to access any part of a page. 

For example: if you have a background video at the top of a page, without buttons to stop or pause it, you are interfering with the possibility of people reading the rest of the page. There are 4 success criteria specifically mentioned:

- 1.4.2: Audio control
- 2.1.1: No keyboard trap
- 2.3.1: Three flashes or below threshold
- 2.2.2: Pause, stop, hide

Not passing these success criteria can make it hard, if not impossible, for some users to continue browsing or using your app. It will interfere with their physical or mental health or assistive devices.

### WCAG success criteria

The success criteria can be seen as a set of rules for complying with a guideline. Some of them are very specific; others are more open to interpretation. 

Each success criterion has a number, a name and a level.

The number is composed of:

- the number of the principle
- the number of the guideline
- the number of the criterion itself

For example, the success criterion [2.1.1 Keyboard, Level A](https://www.w3.org/WAI/WCAG22/quickref/#keyboard) means it's part of principle 2 (Operable), guideline 2.1 (Keyboard Accessible) and is the first criterion for that guideline.

### WCAG Levels of accessibility

There are 3 levels of accessibility:

- A (basic)
- AA (the global accessibility standard)
- AAA (for dedicated assistive support)

The success criteria can have one of 3 levels, A, AA or AAA. In general, level A criteria consist of basic rules that should lead to a technically functional website or app. Level AA consist of criteria that, if you follow them correctly, will lead to a website or app that works for most known assistive devices.

It is implied that when you need to comply with level AA, you automatically need to comply with level A as well.

Passing tests for the success criteria of level A and AA is what most legislation asks of you, and is what is meant when people say you are WCAG compliant. Level AAA adds additional success criteria that are necessary to expand the number of people with disabilities who can use your website or app. 

They're not necessarily harder to implement, but they're useful for a smaller group and sometimes require more work to maintain. Also, it is implied that when you say you (need to) comply with level AA, you automatically comply with A as well.

### WCAG Versions

As of early 2026, in most countries that have legislation about web accessibility, [WCAG version 2.1](https://www.w3.org/TR/WCAG21/) is the version referenced. It contains 78 criteria, divided into 13 general guidelines.

Many countries are starting to use [version 2.2](https://www.w3.org/TR/WCAG22/) as the version of choice. WCAG 2.2 has added a few more criteria (86 in total) and a couple criteria were removed or changed levels. In this documentation, we use version 2.2 as our point of reference.

The current versions are mainly focused on complete websites and apps. There is a newer version (WCAG 3.0) in development that intends to provide an outcome-based conformance model, aiming to better cover cognitive and low-vision disabilities. It will also cover a broader scope, including mobile apps, AR/VR software, and apps for other devices, such as TVs.

As of version WCAG 3.0, the abbreviation will reflect the wide scale it can be used for. It will then be named the W3C Accessibility Guidelines. [More on version 3.0](https://www.w3.org/TR/wcag-3.0-explainer/).

## Implementing the guidelines

The guidelines and criteria do not provide specific techniques to achieve conformance. However, the W3C provided a [quick reference guide](https://www.w3.org/WAI/WCAG22/quickref/) with common techniques and examples for implementing them. 

When designing, writing or coding, keep asking yourself if what you're doing contributes to the main purpose of the guideline.


## Testing or getting tested

You may have seen audit reports in which a website was tested for accessibility. 

One method of reporting an accessibility audit is the [WCAG Evaluation Method](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/), the Website Accessibility Conformance Evaluation Methodology by the W3C. This methodology  provides auditors and testers with guidelines for checking whether a success criterion has been met (and thus whether a guideline has been followed correctly). [More about testing]({{site.baseurl}}/docs/testing).

Many finding can be reported for each success criterion in the report. That can make a report overwhelming! It's recommended that you try and implement best practice accessibility techniques and follow the guidelines to the best of your abilities before getting an audit.

This way, it will be easier to follow recommendations from the report. It can be useful to read through the evaluation method yourself, as it offers ways to check for accessibility issues.

## Browser support

Decide which browsers and versions your theme or plugin will support. Some [WCAG techniques](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques) apply only to older browsers, e.g, Internet Explorer 7 and below. Don't forget to check mobile browsers and software versions.

The WordPress core handbook lists the [current browser support for WordPress](https://make.wordpress.org/core/handbook/best-practices/browser-support/).

## Relation to ISO standards, EAA and EN 301 549

WCAG 2.2 has been formally adopted by ISO/IEC as an official international standard, numbered [ISO/IEC 40500:2025](https://www.iso.org/standard/91029.html). Because WCAG is originally a W3C/WAI document that is freely published, ISO has allowed it to remain freely accessible, you can read and use it at no cost, even though it now carries the ISO/IEC stamp.

Most European laws implementing the [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en) reference [EN 301 549](https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en) as the standard for accessibility requirements. This document covers accessibility requirements for all information technology products and services and is based on WCAG 2.1. An update to WCAG 2.2 is expected in late 2026.

## WordPress theme guidelines and relation to WCAG

The WordPress guidelines for the accessibility-ready tag are based on WCAG. These guidelines are for themes only, without any content, so not all WCAG success criteria are relevant when developing a theme. 

You can find the WordPress theme guidelines for the accessibility-ready tag at: [Theme accessibility guidelines]({{site.baseurl}}/docs/topics/theme-guidelines/).

## Resources

* [WordPress Accessibility Coding Standard](https://make.wordpress.org/core/handbook/best-practices/coding-standards/accessibility-coding-standards/)
* [Non-interference section 5.2.5](https://www.w3.org/TR/WCAG22/#cc5)
* [WCAG version 2.1](https://www.w3.org/TR/WCAG21/)
* [WCAG version 2.2](https://www.w3.org/TR/WCAG22/)
* [More on WCAG version 3.0](https://www.w3.org/TR/wcag-3.0-explainer/)
* [W3C quick reference guide for techniques](https://www.w3.org/WAI/WCAG22/quickref/)
* [WCAG Evaluation Method](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
* [Accessibility Standards ISO/IEC 40500:2025](https://www.iso.org/standard/91029.html)
* [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en)
* [Standard norms for Accessibility of ICT: EN 301 549](https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en)
