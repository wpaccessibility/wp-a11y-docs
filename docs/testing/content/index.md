---
title: Content checks
layout: default
parent: Test for accessibility
description: Find an overview of content checks for accessibility.
nav_order: 3
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# Content checks for web accessibility

This page gives an overview of the **manual checks** you can do to provide readable content for as many users as possible. Read the detailed explanation about how to write accessible content in [Content and images]({{site.baseurl}}docs/topics/content/) in the section Standard and best practice of this documentation.

## Alternative text for images

Describe (for non-visual readers) the contents and purpose of a meaningful image in your alternate text. That purpose may depend on the context in which an image is used. The [Alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) by the W3C helps you decide what the alternate text should be for various situations. 

Documentation about alternative text for images:

- [Alternative text on images and graphics]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/alternative-text/) in Theme guidelines for the WordPress accessibility-ready program.
- [Alternative text for images]({{site.baseurl}}/docs/topics/content/alt-text/) in Standards and best Practices: Content and images.
- [Images as link]({{site.baseurl}}/docs/topics/content/links/link-image/) in Standards and best Practices: Content and images.
- [Alternative text for images, SVGs and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/) in Standards and best Practices: Frontend code.

## Headings

Headings are the framework of your content. A good heading structure reflects the content on your page, like the index of a book:

- One H1 per page, describing what the page is about.
- Use other headings meaningfully according to their level, not for their appearance.
- A good heading briefly describes the content that follows it
- Do not skip heading levels.

Documentation and test tools for the heading structure:

- [Headings with meaningful structure]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/headings-structure/) in Theme guidelines for the WordPress accessibility-ready program.
- [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/) in Standards and best Practices: Content and images.
- [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/) in Standards and best Practices: Frontend code.

## Link texts

- Use meaningful link text that describes the content being linked to.
- Avoid “click here”, “read more”, ”download”, ”continue reading” or equivalent phrases as link text. It’s meaningless and people have to read around the link to see what’s it about.
- If you use an image as a link, use the alternative text as link text.

Documentation about link texts:

- [No ambiguous link text]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/no-ambiguous-link-text/) in Theme guidelines for the WordPress accessibility-ready program.
- [Write meaningful link text]({{site.baseurl}}/docs/topics/content/links/link-text/) in Standards and best Practices: Content and images.
- [Images as links]({{site.baseurl}}docs/topics/content/links/link-image/) in Standards and best Practices: Content and images.
- [Link destination]({{site.baseurl}}/docs/topics/content/links/link-destinations/) in Standards and best Practices: Content and images.

## Video and audio

- Make sure video has closed captions.
- Make sure audio has transcriptions.
- Don’t autoplay video and audio.

Documentation about video and audio:
- [Accessible audio, video, and animations]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/accessible-animation/) in Theme guidelines for the WordPress accessibility-ready program.
- [Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/), by the W3C.
- [What's the difference between "closed captions" and "subtitles"](https://gaming.stackexchange.com/questions/57243/whats-the-difference-between-closed-captions-and-subtitles-in-portal) on Stack Exchange.

## Readability

How you write your text and what reading level you aim for depends on the purpose of and audience for your content, but here are a few best practices:

- Start with a short summary of the content.
- Divide the rest of the text in short blocks.
- Keep your text simple and to the point.
- Use headings, lists, and meaningful link text.
- Avoid large blocks of text.

Documentation about readability: [Readability]({{site.baseurl}}/docs/topics/content/readability/) in Standards and best Practices: Content and images.

{: .callout .info}
Note: The Web Content Accessibility Guidelines at level **AA** don't address readability. Decent readability is considered a recommendation. However, WCAG 2.2 Level **AAA** has four success criteria for readability: [3.1.3 Unusual Words](https://www.w3.org/WAI/WCAG22/quickref/#unusual-words), [3.1.4 Abbreviations](https://www.w3.org/WAI/WCAG22/quickref/#abbreviations), [3.1.5 Reading level](https://www.w3.org/WAI/WCAG22/quickref/#reading-level), [3.1.6 Pronunciation](https://www.w3.org/WAI/WCAG22/quickref/#pronunciation).
