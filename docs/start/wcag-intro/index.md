---
title: Introduction to WCAG
layout: default
parent: Start with accessibility
description: What are the Web Content Accessibility Guidelines and how to use them.
nav_order: 3
contributors:
  - Annelies Verhelst
  - Rian Rietveld
---

# Introduction to WCAG

When designing, writing, developing or testing a web page, plugin, theme, app or other software, you will be commonly referred to the Web Content Accessibility Guidelines, or WCAG in short. Following these guidelines will make it accessible for as many people as possible, including those with disabilities. 

The guidelines are globally used in legislation and normative documents, and are created and maintained by the Web Accessibility Initiative (WAI), a part of the international World Wide Web Consortium (W3C).

It's worth mentioning that WCAG in itself is not a law. They are guidelines for proper web development, as there are guidelines to use HTML, PHP and other programming languages as well. Be aware that it's very often referred to as something that's legally mandatory. 

However, there's more nuance to that. Correctly following these guidelines and techniques will likely help ensure compliance with accessibility laws and legislation. [More about legislation and laws for accessibility](https://wpaccessibility.org/docs/topics/legislation/).

## WCAG Versions

At this point (early 2026) in most countries that have legislation about web accessibility, [WCAG version 2.1](https://www.w3.org/TR/WCAG21/) is the version being referred to when they speak of web accessibility standards. It contains 78 criteria, divided into 13 general guidelines. 

Many countries are starting to use [version 2.2](https://www.w3.org/TR/WCAG22/) as the version of choice. The main difference is that this one has slightly more criteria (86) and a few were removed or changed levels. In this documentation, we use version 2.2 as our point of reference.

The current versions are mainly focused on complete websites and apps. There is a newer version (WCAG 3.0) in development that should provide an outcomes-based conformance model, aiming to better cover cognitive and low-vision disabilities. It will also cover a broader scope, including mobile apps, AR/VR software, and apps for other devices, such as TVs

As of version WCAG 3.0, the abbreviation will reflect the wide scale it can be used for. It will then be named the W3C Accessibility Guidelines. [More on version 3.0(https://www.w3.org/TR/wcag-3.0-explainer/).

## WCAG success criteria

The success criteria can be seen as a set of rules to follow. Some of them are very specific; others are more open to interpretation, because otherwise there would be no room for creativity. 

They describe a general focus, like "Make sure text has sufficient contrast", exceptions, specifics, and/or use cases. The criteria are numbered, for example, 2.1.1 Keyboard, meaning it's part of Chapter/Principle 2 and guideline 2.1 (Keyboard Accessible).

## WCAG Levels of WCAG

There are 3 levels of accessibility:

- A (basic)
- AA (the global accessibility standard)
- AAA (for dedicated assistive support)

The success criteria can have one of 3 levels, A, AA or AAA. In general, level A criteria consist of basic rules that should lead to a technically functional website or app. Nothing too special. Level AA consist of criteria that, if you follow them correctly, will lead to a website or app that works for most known assistive devices. 

Passing tests for the success criteria of level A and AA is what most legislation asks of you, and is what is meant when people say you are WCAG compliant. Level AAA adds additional success criteria that are necessary for most disabled people to use your website or app. 

They're not necessarily harder to implement, but they're useful for a smaller group and sometimes require more work to maintain. Also, it is implied that when you say you (need to) comply with level AA, you automatically comply with A as well.

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

These are the four principles in WCAG, and they reflect what a website should be: perceivable, operable, understandable and robust.

### Perceivable

Is all content available to everyone?

- Provide text alternatives for non-text content (e.g., images).
- Provide captions and other alternatives for multimedia.
- Create content that can be presented in different ways without losing meaning.
- Make it easy for users to see and hear content (e.g., by using color well, offering multimedia controls, and allowing text resizing).

### Operable

Can visitors use all functionality?

- Make all essential functionality available from a keyboard.
- Give users enough time to read and use content.
- Do not use content that causes seizures.
- Help users navigate and find content.

### Understandable

Can visitors comprehend all the content?

- Make text readable and understandable.
- Use easy-to-comprehend text — avoid complex wording.
- Make content appear and operate in predictable ways.
- Guide users to avoid and correct mistakes.

### Robust

Can visitors use any device?

- Content must be able to be interpreted reliably by a wide variety of user agents, including assistive technologies.
- All user interface components should have programmatically determinable names and roles.

### Non-interference section 5.2.5

Although when following guidelines you will often stay within chapters 1 to 4 (the four principles) of WCAG, it's necessary to read through [section 5.2.5](https://www.w3.org/TR/WCAG22/#cc5) as well. It's about non-interference, meaning your techniques cannot block users' ability to access any part of a page. 

Example: if you have a background video at the top of a page, without buttons to stop or pause it, you are interfering with the possibility of people reading the rest of the page. There are 4 success criteria specifically mentioned:

- 1.4.2: Audio control
- 2.1.1: No keyboard trap
- 2.3.1: Three flashes or below threshold
- 2.2.2: Pause, stop, hide

Not passing these success criteria can make it hard, if not impossible, for some users to continue browsing or using your app. It will interfere with their physical or mental health or assistive devices.

## Implementing the guidelines

The guidelines and criteria do not provide specific techniques for passing them in testing. However, the W3C provided a [quick reference guide](https://www.w3.org/WAI/WCAG22/quickref/) with common techniques and examples for implementing them. When designing, writing or coding, keep asking yourself if what you're doing contributes to the main purpose of the guideline. 

It's easy to get caught in techniques and specifics, while the purpose is to follow a guideline and be able to check off a success criterion. 

Example:

- Guideline: You need to make sure all texts have enough contrast with the background.
- Success criterion: It must be at least 4.5:1 if text is smaller than 14 pt (and some other specifics).
- Technique: Use a color contrast checker and CSS to make sure all texts pass this criterion.

## Testing or getting tested

You may have seen audit reports in which a website was tested for accessibility. The audits mostly follow the [WCAG Evaluation Method](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/). This method provides auditors and testers with guidelines for checking whether a success criterion has been met (and thus whether a guideline has been followed correctly). 

Per success criterion, usually many findings can be reported. That's why a report could be overwhelming, especially when you haven't done any work on the website yet. It's recommended to try to implement techniques and follow the guidelines before you get it audited. 

This way, it will be easier to follow recommendations from the report. It can be useful to read through the evaluation method yourself, as it offers ways to check for accessibility issues.

## Browser support

Decide which browsers and versions your theme or plugin will support. Some [WCAG techniques](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques) apply only to older browsers, e.g, Internet Explorer 7 and below. Don't forget to check mobile browsers and software versions.

WordPress no longer supports Internet Explorer as of version 5.8.

## Relation to ISO standards, EAA and EN 301 549

Under [ISO/IEC 40500:2025](https://www.iso.org/standard/91029.html), WCAG 2.2 is an approved standard. This means you can use WCAG free from ISO. 

In most laws in Europe that have the [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en) implemented, the European norm for accessibility [EN 301 549](https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en) is mentioned for accessibility requirements. This document explains accessibility requirements for all ICT products and services and uses WCAG 2.1 as its basis. It's expected to be updated to WCAG 2.2 late 2026.
