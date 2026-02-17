---
title: Overlays
layout: default
parent: Start with accessibility
description: Do not use overlays. Here's why.
nav_order: 6
---

# Accessibility Overlays

An accessibility overlay is scripted code that is placed on a web page that automatically makes changes to the page with the intent of fixing accessibility issues on that page.

That's a technical definition of an overlay, which doesn't address the effectiveness of the overlay as a concept. An overlay can fix accessibility problems.

However, an overlay can also create new problems. 

{: .callout  .alert }
**Alert:** Note that while many of the accessibility plugins in the WordPress plugin repository are overlays or toolbar widgets, these are not recommended in this documentation. The WordPress Accessibility team does not recommend the usage of [accessibility overlays](https://overlayfactsheet.com/en/).

## What are legitimate uses of accessibility overlays?

Custom accessibility overlays are a common way of fixing existing problems on a website when you do not have access to the source code to make changes. They are broadly considered an inferior way to fix accessibility issues, as the better fix is to change the code at the source.

A custom overlay can be very targeted: in a known environment, an overlay can make very precise changes to the code of the site. 

## How is an overlay different from a toolbar widget?

An overlay makes changes automatically, with no user intervention. A toolbar makes changes at the request of the user.

The main difference is that what a toolbar offers is controllable by the person using the website; if it's not helpful to them, they can turn it off. An overlay forces its changes on the user.

## What are problematic ways of using accessibility overlays?

For an overlay to be effective, it needs to be targeting specific known results.  The less an overlay knows about your website, the less effective it will be.

There are specific areas where automation is particularly ineffective. These areas include as alternative text, keyboard accessibility, and forms. 

The [Overlay Fact Sheet](https://overlayfactsheet.com/en/) is an informational document that goes into depth about the problems with overlays. 

## Are there legal risks to using accessibility overlays?

One of the most dangerous claims an accessibility overlay can make is that it will protect you. Whether it's claiming to protect you from lawsuits, to make your site compliant with government regulations, or to make your site compliant with WCAG, it is telling you the same thing: a lie. 

No automated tool is able to achieve compliance on its own, and any claims to that effect should be an immediate danger sign. 

There are multiple cases on record of businesses being sued because of their accessibility overlays or of overlay providers being sued for deceptive practices.

- [Accessibility Overlay Widgets Attract Lawsuits](https://www.accessibility.works/blog/avoid-accessibility-overlay-tools-toolbar-plugins/)
- [Another Web Access Overlay Company Sued by a Small Business](https://www.lflegal.com/2025/02/userway-overlay-lawsuit/)
- [AccessiBe Faces Class Action Lawsuit](https://commlawgroup.com/2024/accessibe-faces-class-action-lawsuit-over-alleged-misrepresentation-of-ada-compliance-and-ai-accessibility-capabilities/)

Taken together, you should be very cautious about trusting the claims overlays make.

## Isn't WP Accessibility an overlay and a toolbar widget?

Yes, it is. These features were created to target specific known accessibility gaps that can be common in WordPress themes, and to provide stopgap remedies prior to remediating problems. WP Accessibility provides reporting on what it has done on your site, and you can turn off the overlay and toolbar aspects of the plugin. With any overlay, WP Accessibility included, you should be periodically assessing whether those features are still useful for your site.

## Other Resources

There are many articles and presentations available from accessibility experts talking about the risks and problems with accessibility overlays. Here are a few representative examples.

- Video: [Overlays Underwhelm, by Adrian Roselli](https://2022.wpaccessibility.day/sessions/overlays-underwhelm/)
- Video: [There is no spoon, by Leonie Watson](https://www.youtube.com/watch?v=fyRxd072JrA)
- Article: [Overlays Misunderstand Accessibility, by Joe Dolson](https://www.joedolson.com/2024/07/overlays-misunderstand-accessibility/)
- Video: [Five False Claims 1-line "AI" Accessibility Script Vendors Make, by Eric Eggert](5 False Claims 1-Line “AI” Accessibility Script Vendors Make)
- Article: [Overlays are not the solution to your accessibility problemm by Sheri Byrne-Haber](https://sheribyrnehaber.medium.com/overlays-are-not-the-solution-to-your-accessibility-problem-c5ffe44bd61f)
