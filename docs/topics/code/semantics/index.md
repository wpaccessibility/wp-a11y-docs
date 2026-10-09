---
title: Semantic HTML
layout: default
parent: Frontend code
description: Learn why using semantic HTML is essential for web accessibility.
nav_order: 2
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# Semantic HTML

Accessibility isn't dark magic. Most of it comes down to using semantic HTML, choosing the element that best represents the purpose of the content or functionality.

The proper HTML element informs a browser about its functionality, keyboard handling, value and state. 

The browser stores this information in the DOM (Document Object Model]) and in the accessibility tree. Assistive technologies read the accessibility tree to inform users about the meaning and function of that element.

The topic [Accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/) describes the accessibility tree in more detail.

{: .callout .info }
**Note**: Don't look down on HTML. It's the API that interacts with your browser. All the code you write, like JavaScript, React, PHP, CSS, and whatever language or framework you use, is ultimately transformed into the DOM and the accessibility tree. And what's in there must make sense.

## The DOM, the Document Object Model

The DOM is the browser's internal representation of an HTML document as a tree of objects. The DOM represents what your HTML looks like after the browser interprets it and any JavaScript manipulations are applied. 

In short:

- When your browser loads HTML, it parses it and creates a tree structure of nodes with their name, states and values.
- This tree is the DOM, a live, programmable view of the page.
- JavaScript and ARIA can interact with the DOM to read, modify, add, or remove or announce content dynamically.

If the DOM is built with meaningful HTML, browsers and other technology can figure out how to use and understand the website.

This includes browsers, screen readers, voice recognition software, Apple Watch, and a nearly infinite variety of other tools. Search engines also benefit from semantic HTML, so they can better understand the content.

If you inspect a page using your browser's inspector, you can see the rendered DOM. 

The DOM in the browser inspector
![The DOM in the browser inspector of FireFox]({{site.baseurl}}/assets/images/DOM-in-inspector.png)

## HTML is a markup language

Most HTML elements have specific meanings:

- Landmarks like `<header>`, `<nav>`, `<main>`, `<aside>` and `<footer>` give structure to a page.
- Headings (`<h1>` up to `<h6>`), paragraphs (`<p>`), images (`<img>`), lists (`<ul>` and `<ol>`), and quotes (`<blockquote>`) tell the interpreter what this content is for.
- Buttons (`<button>`) and links(`<a href="link">`) add interactions on a page.
- Use tables (`<table>`) for tabular date.

In the section [Frontend code](/docs/topics/code/) you can find information about how to use these HTML elements in an accessible way. 

Work in layers:
- Semantic HTML is the base.
- Then add the interaction with JavaScript.
- Then add styling by using CSS if the native look of an element is not to your liking.

Some elements, such as `span` and `div`, are specifically defined as having no semantics. They are valuable for creating layout.

Not all semantic elements are directly interpreted by assistive technology. `<strong>` and `<em>` are considered semantic, but don’t have any direct impact on how screen readers behave using default settings. However, many elements can optionally be interpreted by screen readers, and are still well worth using.

## Examples

### Incorrect use of HTML

{: .callout .dont }
**Don't** use a `<div>` or an `<a>` for an interactive element like a `<button>`. A `<div>` doesn’t get keyboard focus and gives no information about its role, state or value. A link Use `<a>` only for a change of location, not to invoke an action.

```html
<!-- Do not copy,this is incorrect code -->
<div class="menu-toggle">Menu</div>

<a class="menu-toggle" href="#">Menu</a>
```

{: .callout .do }
Use the proper HTML element, in this case a button, for an interactive element. It will add the right role, state and value.

```html
<button class="menu-toggle">menu</button>

<button type="button" role="switch" aria-checked="true">Dark mode</button>
```

## Test Tools

Want to check if your HTML is valid? There are multiple open-source tools that can help:

- [Validators and tools](https://www.w3.org/developers/tools/), by the W3C.
- Axe DevTools browser extensions for [Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/?utm_campaign=axe&utm_content=axe), and [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn?utm_campaign=axe&utm_content=axe), by Deque Systems Inc.
- Axe-core API for [Web Testing](https://github.com/dequelabs/axe-core) and [Windows Testing](https://github.com/microsoft/axe-windows), by Deque Systems Inc.

You can find a comprehensive list of how to do automated and frontend tests in the section [Test for accessibility]({{site.baseurl}}/docs/testing/) in this documentation.

It’s harder to check if your HTML is actually meaningful, because this highly depends on the content of your web page. Use common sense: search for the right element for the job and [don’t suffer from Divitus](https://css-tricks.com/css-beginner-mistakes-1/).

## Resources

{: .resource-h3}
### WCAG Success Criteria for semantic HTML

Semantic HTML is necessary to meet the WCAG Success Criterion [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).

  {: .resource-h3}
### Related pages in this documentation

- [Meaningful landmark roles and names]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/meaningful-landmark-roles/) in the Theme guidelines for the WordPress accessibility-ready program.
- [Headings with meaningful structure]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/headings-structure/) in the Theme guidelines for the WordPress accessibility-ready program.

{: .resource-h3}
### Other resources

Take the time to study and learn HTML thoroughly. If you’re using a library that generates output for you, make sure you know what it is doing.

- The MDN provides extensive information about [all the existing HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) and how to use them. Give it a read, it's the foundation of your work.
- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html), by WHATWG.
- [Semantic HTML](https://web.dev/learn/html/semantic-html/), on web.dev.
- [What are Markup Languages?](https://www.thoughtco.com/what-are-markup-languages-3468655), by Jennifer Kyrnin.
- [Screen Reader support for text level HTML semantics](https://vispero.com/resources/screen-readers-support-for-text-level-html-semantics/), by Steve Faulkner.

Style guides for Markup for WordPress:

- [WordPress HTML Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/) in the WordPress core handbook.
- [Markup best practices](https://10up.github.io/Engineering-Best-Practices/markup/) by 10up.
- [Markup style guide](https://engineering.hmn.md/how-we-work/style/markup/) by Human Made.

About the use of semantic HTML:

- [HTML5 semantic elements and Webflow: the essential guide](https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide), by Webflow.
- [Computer says NO to HTML5 document outline](http://html5doctor.com/computer-says-no-to-html5-document-outline/), by Steve Faulkner.
- [Can I use](https://caniuse.com/), by Alexis Deveria.
- [Can I include](https://caninclude.onrender.com/), by CyberLight.
- [A Web Developer’s Guide to Buttons vs Links](https://www.a11y-collective.com/blog/button-vs-link/), by The ALLY Collective.


