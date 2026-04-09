---
title: Headings
layout: default
parent: Content and images
description: A heading should simply and concisely describe the content that follows.
nav_order: 3
---

# Using headings in the content

## What are headings?

Headings are the framework of your content. A good heading should simply and concisely describe the content that follows.

The heading level is important. The H1 (heading level 1) is reserved for the post or page title. In most themes that is the title you give a page or post. 

![Screenshot adding a page title in the WordPress Admin]({{site.baseurl}}/assets/images/add-title.png)

Use other heading levels from `h2` to `h6` to divide your content into meaningful sections, like the index of a book.

Choose heading levels by their meaning, not by their visible size. This way, artificial intelligence (AI) agents, search engines and screen readers understand the structure and meaning of the content better. 

{: .info .callout }
How to implement headings in development is addressed in the “Frontend code” section [Heading structure in theme development]({{site.baseurl}}/docs/topics/code/heading-structure/).

### Best practices for headings summarized

- The H1 (heading level 1) is reserved for the post or page title.
- Use the other headings to divide content into scannable blocks.
- Use headings to describe the content below. Do not use a heading just to make the text appear bigger or stand out.
- Don't skip a heading level from the top down.
- Use real HTML heading elements instead of making text bold or large.

A heading means “this text describes the information that follows it.” There should not be text before the heading that is part of what that heading describes, and there must be content following the heading.

{: .tip .callout }
**Tip:** If you don’t like the sizes of the headings in your content, you should adjust the design of the heading rather than selecting a different heading level. Ask your web developer if needed. This helps with accessibility as well as with content adaptability. Selecting a heading based on size might make a change of theme more difficult.

## Examples of heading structures

Your page’s headings might resemble a structure similar to this one on a complex page:

```text
Heading 1 (post title)
    Heading 2 (major section)
        Heading 3 (subsection)
    Heading 2 (additional major section)
        Heading 3
            Heading 4
        Heading 3
            Heading 4
    Heading 2
        Heading 3 (post sub-heading)
        Heading 3 (post sub-heading)
 ```

If we use this post as an example, the heading structure for the content looks like this:

```text
    Heading 1: Using Headings in the content (main post topic)
        Heading 2: What are headings? (subsection)
            Heading 3: Best practices for headings summarized
        Heading 2: Examples of heading structures (subsection)
        Heading 2: How to test for a proper heading structure (subsection)
        Heading 2: Resources (subsection)
            Heading 3: WCAG Success Criteria for the heading structure
            heading 3: Other resources
```

## How to test for a proper heading structure

In WordPress, you can check the heading structure in the  "Outline" tab. The outline tab is visible after clicking the button "Document Overview" in the top bar of the editor.

![Screenshot of the document outline of the page get started at a contributor day]({{site.baseurl}}/assets/images/document-outline.png)

Use the browser tool **HeadingsMap** to test the heading structure of an entire web page:
- [Headings Map toolbar for Edge](https://microsoftedge.microsoft.com/addons/detail/headingsmap/bokekiiaddinealohkmhjcgfanndmcgo)
- [Headings Map toolbar for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en)
- [Headings Map toolbar for Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

{: .callout .info }
**Note**: If you use a headings validation tool, a warning may pop up when the first heading is not an H1. This only applies when your web page needs to comply with WCAG 2 AAA (triple A). The global web standard is WCAG 2 AA (double A) and starting with an H2 (such as in the navigation) is allowed at the AA standard.

## Resources

### WCAG Success Criteria for the heading structure

Using a meaningful heading structure is necessary to meet the WCAG success criteria:

- [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels) (Level AA).
- [WCAG 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG22/quickref/#section-headings) (**Level AAA**).

### Other resources

- [How to Properly Use Heading Tags in WordPress (H1-H6 Explained)](https://www.wpbeginner.com/wp-tutorials/how-to-properly-use-heading-tags-in-wordpress-explained/) by WPBeginner.
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/) by Rian Rietveld on the A11y Project.
- [Headings and why you should use them](https://yoast.com/headings-use/) by Brendan Reid on Yoast.
