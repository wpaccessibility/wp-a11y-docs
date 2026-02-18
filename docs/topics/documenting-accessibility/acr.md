---
title: Accessibility Conformance Reports
layout: default
parent: Documenting accessibility
description: An ACR is a document explaining how you meet accessibility standards.
nav_order: 3
---

# Accessibility Conformance Reports

An Accessibility Conformance Report (ACR) is a document that explains how well a product or service meets accessibility standards. It’s most commonly used to communicate accessibility compliance to customers or procurement teams. In some cases, an ACR may be required to sell software such as a WordPress theme or plugin to government or other organizations.

## What an ACR includes

Accessibility Conformance Reports are created using an internationally-recognized template called a [Voluntary Product Accessibility Template (VPAT®).](https://www.itic.org/policy/accessibility/vpat) This template offers a clear path for documenting conformance against one or more accessibility standards, such as:

* WCAG 2.0, 2.1, or 2.2
* Section 508 (U.S. federal requirements)
* EN 301 549 (used across the EU and for the European Accessibility Act)

An ACR provides a tabular view of the requirements or criteria for each standard. Each table row contains information about the product's compliance to a standard, including:

* Conformance level: whether the product supports, partially supports, or does not support the criteria.
* Detailed remarks explaining what works, what doesn’t, and why.
* Known issues or exceptions, often with context or remediation notes.

## ACR vs VPAT

Some organizations may confuse a VPAT and ACR. As previously stated, a VPAT is a template used to create an Accessibility Conformance Report. A completed VPAT *is* an accessibility conformance report. If someone asks you for a VPAT for your plugin or theme, what they typically mean is that they want an ACR.

## Why plugins and themes should create ACRs
WordPress plugins and themes can create Accessibility Conformance Reports (ACRs) to provide clear, standardized documentation of how their products support accessibility. 

An ACR helps customers, especially governments, higher education, and enterprise organizations, make informed procurement decisions, demonstrates transparency and good-faith effort, and clarifies shared responsibility between the product and the site owner. 

By documenting what works, what doesn’t, and any known limitations, ACRs build trust, reduce legal and support risk, and encourage more intentional accessibility improvements over time. If you're hoping to sell or distribute your theme or plugin to government, education, or enterprise organizations, creating an Accessibility Conformance Report can help you stand out from competitor solutions and may be required before they can begin using it.

## How to create an ACR

Creating an Accessibility Conformance Report requires testing and documenting accessibility. 

Here is a basic overview of the process.

1. Download the [free ITI VPAT® template](https://www.itic.org/policy/accessibility/vpat) for the version you would like to complete.
2. Create one or more testing environments with your plugin or theme active and all possible templates, shortcodes, and blocks inserted and with all possible settings variations.
3. Test the plugin or theme following the [accessibility testing practices outlined here.]({{site.baseurl}}/docs/testing/) Use the VPAT template as a guide to make sure you test all criteria for your desired standard.
4. Once you have identified accessibility issues, these can be noted in the VPAT or fixed before the VPAT is completed.
5. Fill out the complete VPAT following instructions in the template.

When filling out a VPAT for a WordPress plugin or theme, it is important to note that active themes and plugins can greatly impact the accessibility conformance of websites using your product. 

Be clear about how it was tested, including the environment, configurations, and assistive technologies used, and clearly document any assumptions, dependencies, or known limitations. This helps set accurate expectations, clarifies shared responsibility between your product and the site owner, and ensures the report is an honest, useful disclosure rather than a blanket claim of compliance.

Typically ACRs are published on your website and linked to from an accessibility statement page, documentation, or an [accessibility.txt file.]({{site.baseurl}}/docs/topics/documenting-accessibility/accessibility-txt/)
