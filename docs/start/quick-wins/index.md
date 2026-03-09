---
title: 7 Quick wins
layout: default
parent: Start with accessibility
description: Quick wins to improve the accessibility of your website
nav_order: 2
---

# Quick wins to improve the accessibility of your website

What to do first when you want to make your site more accessible? Start with the low-hanging fruit. 

Like:
- Sufficient color contrast of text against its background. 
- Alternative text with images in the content.
- Change all the "click here" link texts into meaningful text.

## Seven quick accessibility wins

There is a lot you can do to improve a website without digging into code. Simple improvements that will dramatically improve the accessibility of your website.

### 1: Set the correct site language

Check if the site language is set correctly. The correct site language setting helps tell screen readers how to pronounce the text.

In the WordPress Admin. go to: Settings > General and look for the dropdown Site Language. Select the language of the website. 

If the language is spoken in multiple countries, select the language variation for the country. For example English (United Stated) for US English, and English (UK) if the site is written in British English.

![Screenshot of the language settings in the WordPress Admin]({{site.baseurl}}/assets/images/language-settings.png)

### 2: Write descriptive, unique page titles

Write a descriptive, unique page title for every page. Make sure the page title describes what the page is about. 

For WordPress, add the page title in the field "Add Title" when you create a new page or post. In most cases, this will also be the main heading (H1) of the page.

![Screenshot adding a page title in the WordPress Admin]({{site.baseurl}}/assets/images/add-title.png)

The page title is the first text that is announced by a screen reader after a page is loaded and is also shown in the tab of the browser.

![Screenshot the title in a browser tab]({{site.baseurl}}/assets/images/tab-with-title.png)

### 3: Use headings in a structured way

Structure content with proper heading levels (H1, H2, H3) in logical order. 
One H1 that tells what the page is about, the rest of the headings structure the content. Do not use headings to style text (for example to make text stand out visually, use headings to describe the text that follows after.

In WordPress, you can check the heading structure in the  "Outline" tab. The outline tab is visible after clicking the button "Document Overview" in the top bar of the editor.

![Screenshot of the document outline of the page get started at a contributor day]({{site.baseurl}}/assets/images/document-outline.png)

More on headings in: 
- [Headings in the content]({{site.baseurl}}/docs/topics/content/headings/).
- [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/).

### 4: Add alternative text to images

Add descriptive alternative text to all meaningful images. Screen readers will announce that alternative text, so visitors that can not see the image will also know what it shows and won't miss information.

In WordPress, you can add alternative text in the attachment details of an image.

![Screenshot of the attachment details of the WP A11y wapuu]({{site.baseurl}}/assets/images/attachment-details.png)

More on alternative texts for images in: [Alternative text for images]({{site.baseurl}}/docs/topics/content/alt-text/).

### 5: Write meaningful link texts

Avoid using meaningless link texts like "here", "click here", "read more" or "download".
Screen reader users can call a list of links to quickly navigate a website. When a link reads as "Click here" they have no clue where the link will take them. 

Instead of "[Click here]({{site.baseurl}}/docs/topics/legislation/) to read more about accessibility legislation",  
write "Read more about [accessibility legislation]({{site.baseurl}}/docs/topics/legislation/)".

Another advantage is that sighted users don't have to read the whole sentence to know what the link is about.

More about meaningful link texts in: [Write meaningful link text]({{site.baseurl}}/docs/topics/content/links/link-text/).

### 6: Check for sufficient color contrast for text

Check that text has sufficient color contrast against its background. People should be able to read your content with ease. Not everyone has perfect eyesight.

In WordPress, when you set a color and or background color in the editor, the software checks if the contrast meets accessibility guidelines.

![Warning in the WP Editor: This color combination may be hard for people to read. Try using a brighter background color and/or a darker text color.]({{site.baseurl}}/assets/images/color-contrast-warning-editor.png)

More about how to calculate and test the color contrast: [Color contrast of text against its background]({{site.baseurl}}/docs/topics/design/color/color-contrast-text/).

### 7: Add captions to videos

Add captions to all videos with spoken text (or lyrics, for songs). That way people who are deaf or hard of hearing don't miss out on information.

{: .tip .callout }
**Fun fact**: Most users who turn on captioning or subtitles while watching a video or TV are not deaf. For example, people who are not native speakers of the language in the video and need supporting text; people who are in a noisy environment; or who don't want to wake their partner in bed.
Source: [Survey: Why America is obsessed with subtitles](https://preply.com/en/blog/americas-subtitles-use/).

## Quick check you can do right now

Run your site through a free tool like the [WAVE browser extension](https://wave.webaim.org/extension/) and check for accessibility errors.

More on test tools in: [Test for accessibility]({{site.baseurl}}/docs/testing/).

## Be better than 96% of the web

The most made errors reported in the yearly report [WebAIM Million](https://webaim.org/projects/million/) are:

- Low [color contrast for text]({{site.baseurl}}/docs/topics/design/color/color-contrast-text/)
- Missing [alternative text on images]({{site.baseurl}}/docs/topics/content/alt-text/) 
- Missing [labels in forms]({{site.baseurl}}/docs/topics/forms/input-label/accessible-name/)
- Empty [links]({{site.baseurl}}/docs/topics/content/links/link-text/)
- Empty [buttons]({{site.baseurl}}/docs/topics/code/accessible-name/)
- Missing [language in the `<html>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang)

96% Of all errors detected fall into these six categories. So: if these errors are all sorted, you are already better than 96% of the rest of the web.
