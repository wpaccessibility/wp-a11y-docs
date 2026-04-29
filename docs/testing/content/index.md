---
title: Content checks
layout: default
parent: Test for accessibility
description: Find an overview of content checks for accessibility.
nav_order: 2
---

# Content checks for web accessibility

This page gives an overview of the **manual checks** you can do to provide readable content for as many users as possible. Read the detailed explanation about how to write accessible content in [Content and images]({{site.baseurl}}docs/topics/content/) in the section Standard and best practice of this documentation.

## Alternative text for images

Describe (for non-visual readers) the contents and purpose of a meaningful image in your alternate text. That purpose may depend on the context in which an image is used. The [Alt decision three](https://www.w3.org/WAI/tutorials/images/decision-tree/) by the W3C helps you decide what the alternate text should be for various situations. 

Documentation about alternative text for images:

- [Alternative text for images]({{site.baseurl}}/docs/topics/content/alt-text/).
- [Images as link]({{site.baseurl}}/docs/topics/content/links/link-image/).
- [Alternative text for images, SVGs and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/).

## Headings

Headings are the framework of your content. A good heading structure reflects the content on your page, like the index of a book:

- One H1 per page, describing what the page is about.
- Use the other headings meaningfully by their level and not by their font size.
- A good heading describes in short the content that follows.
- Do not skip a heading level.

Documentation and test tools for the heading structure:

- [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/).
- [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/).

## Link texts

- Use meaningful link text that describes the content being linked to.
- Avoid “click here”, “read more”, ”download”, ”continue reading” as link text. It’s meaningless and people have to read around the link to see what’s it about.
- If you use an image as link, use the alternative text as link text.

Documentation about link texts:

- [Write meaningful link text]({{site.baseurl}}/docs/topics/content/links/link-text/).
- [Images as links]({{site.baseurl}}docs/topics/content/links/link-image/).
- [Link desitnation]({{site.baseurl}}/docs/topics/content/links/link-destinations/).

## Video and audio

- Make sure video has [closed captions](https://gaming.stackexchange.com/questions/57243/whats-the-difference-between-closed-captions-and-subtitles-in-portal).
- Make sure audio has transcriptions.
- Don’t autoplay video and audio.

Documentation about video and audio:

- [Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/), by the W3C.

## Readability

How you construct your text and what the reading level is, is depending on the purpose of your content, but here are a few good practices:

- Start with a short summary of the content.
- Divide the rest of the text in short blocks.
- Keep your texts simple and to the point.
- Use headings and lists and meaningful link text.
- Avoid large blocks of text.

Note: The Web Content Accessibility Guidelines at level AA do not check for readability.

Documentation about readability: [Readability]({{site.baseurl}}/docs/topics/content/readability/).
