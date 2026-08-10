---
title: Semantic HTML
layout: default
parent: Frontend code
description: Learn why using semantic HTML is essential for web accessibility.
nav_order: 2
---

# Semantic HTML

Accessibility isn’t dark magic. Most of it comes down to using semantic HTML. Semantic HTML is about choosing the element that best presents the purpose of the content. Examples include using a `button` for an action, an `a` element for a link, and an `h1` heading for the main page content.

## Why semantic HTML?

All technology interacting with a website depends on what’s in the DOM (or Document Object Model.) The DOM is the API that is produced by all the PHP, HTML, CSS and JavaScript in WordPress’s code. If the DOM is built with meaningful HTML5, browsers and other technology can figure out how to use and understand the website.

This includes browsers, screen readers, voice recognition software, your iWatch, and an almost infinite variety of other tools. Search engines also benefit if you use semantic HTML, so they better understand the content.

If you inspect a page with the inspector of your browser you can see the rendered DOM. The DOM is what your HTML looks like after it has been manipulated using JavaScript and interpreted by the browser.

The DOM in the browser inspector
![The DOM in the browser inspector]({{site.baseurl}}/assets/images/DOM-in-inspector.png)

## HTML is a markup language

Most HTML elements have specific meanings:

- [HTML5 landmarks]({{site.baseurl}}/docs/topics/code/landmarks/) like `<header>`, `<nav>`, `<main>`, `<aside>` and `<footer>` give structure to a page.
- Headings (`<h1>` up to `<h6>`), paragraphs (`<p>`), images (`<img>`), lists (`<ul>` and `<ol>`), and quotes (`<blockquote>`) tell the interpreter what this content is for.
- Buttons (`<button>`) and links(`<a href="link">`) add interactions on a page.

When you use the right elements for the job, your site works better on all devices. You can always change the way they look by using CSS if the native look of an element is not to your liking.

The semantics of every element is defined in the HTML specifications. Some elements, such as `span`, are specifically defined as having no semantics. Not having semantics is also a valid choice: some text is only intended to be presentational, and is not intended to be interpreted in any significant way.

Not all semantic elements are directly interpreted by assistive technology, strong and em are considered semantic, but don’t have any direct impact on how screen readers behave using default settings. However, many elements can optionally be interpreted by screen readers, and are still well worth using.

**Note**: Adding `<h1>`s to every `<section>` in a page, as proposed in early HTML5, is not valid, because no browser supports the HTML5 outline. Use of this model hinders screen reader users in understanding the web page. If you’re not convinced, read [Computer says NO to HTML5 document outline](http://html5doctor.com/computer-says-no-to-html5-document-outline/) by Steve Faulkner.

## Examples

### Incorrect use of HTML

```html
// Incorrect, a `div` doesn’t get keyboard focus.
<div class="menu-toggle"></div>
```

```html
// Also incorrect. 
// You should use <a> only for a change of location, not to invoke an action.
<a class="menu-toggle" href="#">Menu</a>
```

### Correct use of HTML

```html
// Correct, works on every device.
<button class="menu-toggle">menu</button>
```

```html
// Also correct: If you want to hide text
// from vision, use the .screen-reader-text class.
<button class="menu-toggle">
  <span class="screen-reader-text">menu</span>
</button>
```

Read more on the [.screen-reader-text]({{site.baseurl}}/docs/topics/code/screen-reader-text/) CSS class in the section Frontend code.

## Test Tools

How do you test if the HTML you are using is valid? There are several tools for this:

- [W3C Markup Validation Service](https://validator.w3.org/).
- [W3C developers tools](https://www.w3.org/developers/tools/).
- [aXe browser extension by Deque](https://www.deque.com/products/axe/).
- [aXe-core npm module by Deque](https://www.deque.com/products/axe-core).

You can find a comprehensive list of how to do automated and frontend tests in the section [Test for accessibility]({{site.baseurl}}/docs/testing/) in this documentation.

It’s harder to check if your HTML is meaningful because this highly depends on the content of your web page. Use common sense: search for the right element for the content and [don’t suffer from Divitus](https://css-tricks.com/css-beginner-mistakes-1/).


## Resources

{: .resource-h3}
### WCAG Success Criteria for sematic HTML
 
[1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).

  {: .resource-h3}
### Related pages in this documentation

- [Meaningful landmark roles and names]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/meaningful-landmark-roles/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Headings with meaningful structure]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/headings-structure/) in the Theme guidelines for the WordPress accessibility-ready program.
- [The CSS class screen-reader-text]({{site.baseurl}}/docs/topics/code/screen-reader-text/) in Standards and best practice, Frontend code.

{: .resource-h3}
### Other resources

HTML is the foundation of all web output. Take the time to study and learn HTML thoroughly. If you’re using a library that generates output for you, make sure you know what it is doing.

- [MDN web docs HTML developer guide about HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) on MDN.
- [Semantic HTML](https://web.dev/learn/html/semantic-html/) on web.dev.
- [What are Markup Languages?](https://www.thoughtco.com/what-are-markup-languages-3468655) by Jennifer Kyrnin.
- [Screen Reader support for text level HTML semantics](https://vispero.com/resources/screen-readers-support-for-text-level-html-semantics/) by Steve Faulkner.

Style guides for Markup for WordPress:

- [WordPress HTML Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/) in the WordPress core handbook.
- [Markup best practices](https://10up.github.io/Engineering-Best-Practices/markup/) by 10up.
- [Markup style guide](https://engineering.hmn.md/how-we-work/style/markup/) by Human Made.

About the use of semantic HTML:

- [Semantic HTML5](https://www.w3.org/TR/html5/dom.html#semantics) by the W3C.
- [HTML5 semantic elements and Webflow: the essential guide](https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide) by Webflow.
- [Computer says NO to HTML5 document outline](http://html5doctor.com/computer-says-no-to-html5-document-outline/) by Steve Faulkner.
- [A Web Developer’s Guide to Buttons vs Links](https://www.a11y-collective.com/blog/button-vs-link/) by The ALLY Collective.

