---
title: Landmarks
layout: default
parent: Frontend code
description: Learn what landmarks in HTML are and how to use them.
nav_order: 4
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# ARIA Landmarks

Landmark roles in HTML help people screen readers user move around a website more easily. Some HTML elements act as landmarks, they mark important sections like headers, navigation bars (menus and breadcrumbs), main content, and footers so users can jump to them quickly.

{: .callout .info }
This page gives you a brief introduction. For more in depth documentation please read [ARIA: landmark role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) on MDN. You can also review the WordPress theme accessibility guidelines, as [WordPress themes are required to use landmark roles]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/meaningful-landmark-roles/).

## Most common landmark elements

<table>
    <caption>HTML sectioning elements</caption>
    <tr>
        <th>HTML element</th>
        <th>Default landmark role</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>header</td>
        <td>banner</td>
        <td>Site-oriented content at the beginning of each page within a website.</td>
    </tr>
    <tr>
        <td>nav</td>
        <td>navigation</td>
        <td>Groups (e.g. lists) of links for website or page content navigation.</td>
    </tr>
    <tr>
        <td>main</td>
        <td>main</td>
        <td>The primary content of the page.</td>
    </tr>
    <tr>
        <td>aside</td>
        <td>complementary</td>
        <td>Content, complementary to the main content but meaningful when separated from the main content.</td>
    </tr>
    <tr>
        <td>footer</td>
        <td>contentinfo</td>
        <td>Common information at the bottom of each page within a website</td>
    </tr>
</table>

## Good example of HTML landmarks

A basic example of a page structure can look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Semantic HTML</title>
    <meta charset="utf-8">
  </head>
  <body>

    <header>
        <img src="/assets/images/logo.png" alt="WP Accessibility logo">
    </header>
  
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/semantics">Semantics</a></li>
      </ul>
    </nav>
  
    <main>
      <article>
        <h1>Semantic HTML</h1>
        <p>That wasn’t so hard.</p>
      </article>
    </main>
  
    <aside>
      <p>Additional information.</p>
    </aside>
  
    <footer>
      <p>Information about the site.</p>
    </footer>
  </body>
</html>
```

In VoiceOver the landmark list will look like this:

![List of landmarks on a page in the VoiceOver web rotor: banner, navigation, main, complementary.]({{site.baseurl}}/assets/images/aria-landmarks-in-voiceover.png)

## Name multiple of the same landmarks

If the same role appears on more than one element on a page, add an aria-label attribute on each of those elements to tell them apart. For example in the case of two navigation landmarks:

```html
    [...]
<nav aria-label="Main">  
    [...]
<footer>
    <nav aria-label="Footer">
</footer>
    [...]
```

With those aria-label attributes, screen readers will announce **Main navigation** and **Footer navigation**, rather than **navigation** and **navigation**. Note that the word navigation is already announced by assistive technologies for `<nav>`. Therefore, avoid adding landmark names like “navigation” in your aria-label content.

In VoiceOver the landmark with the added aria-labels list will look like this:

![Multiple nav landmarks with different aria-labels for navigation in the VoiceOver web rotor.]({{site.baseurl}}/assets/images/aria-landmarks-with-aria-label.png)

`<header>` and `<footer>` elements can also be inside other elements like `<article>`. But only elements which are direct descendants of the `<body>` tag will be exposed as `header`, `footer`, `banner` and `contentinfo` landmarks respectively.

{: .callout .info }
**Note about themes**: Preferably, all content should be inside these semantically meaningful elements, so the user does not miss content when navigating by landmarks. Some themes place the [skip link]({{site.baseurl}}/docs/topics/code/components/skip-links/) above the `header` landmark. This is **not** a WCAG violation, but considered against best practice.

## Resources

{: .resource-h3}
### WCAG Success Criteria for meaningful landmarks

Providing meaningful landmark roles and names is necessary to meet the WCAG success criteria:

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships) (Level A).
- [1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose) (Level **AAA**).
- [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks) (Level A).

{: .resource-h3}
### Related pages in this documentation

- [The accessible name]({{site.baseurl}}/docs/topics/code/accessible-name/) in Standards and best practice, Frontend code.
- [Skip links]({{site.baseurl}}/docs/topics/code/components/skip-links/) in Standards and best practice, Frontend code, Components.
- [Meaningful landmark roles and names]({{site.baseurl}}/docs/accessibility-ready/theme-guidelines/meaningful-landmark-roles/) in the Theme guidelines for the WordPress accessibility-ready program.

{: .resource-h3}
### Other resources

- [ARIA: landmark role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role), by the MDN.
- [W3C ARIA landmark example page](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/general-principles.html), by the W3C.
- [Tutorial of page regions](https://www.w3.org/WAI/tutorials/page-structure/regions/), by the W3C
