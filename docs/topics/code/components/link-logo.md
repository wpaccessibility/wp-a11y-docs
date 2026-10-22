---
title: Home link on the logo in the header
layout: default
parent: Components
description: How do you give a link on a logo in the header an informative accessible name? 
has_video: true
nav_order: 4
contributors:
  - Rian Rietveld
---

# The accessible name of the link to home in the Header

How do you give a link on a logo in the header a good accessible name? There are two options for adding the accessible name: via the alt attribute of the logo-image or via an aria-label on the link. Which option you choose depends on the framework, CMS, or design system you're using your preference or theme.

{: .callout .info }
**Note**: This topic was originally published on the HTMLHell Advent Calendar as: [A link on a logo in the header, what should the alt-text be?](https://www.htmhell.dev/adventcalendar/2024/1/) and here updated and rewritten for WordPress specifically.

It's a common pattern to use a logo in the header as a link to the homepage. But what should the accessible name of the link be? "My WordPress plugin", "Homepage," or "Logo of my WordPress plugin"? Does it even matter?

The accessible name is read aloud by screen readers so that blind and visually impaired visitors also know where the link leads.

The problem with linking a logo is that it serves two purposes:

- a logo, which indicates which site you're visiting;
- a link, which leads to the homepage.

So explain that this is a logo and where the link leads, for example, "Site name logo, to the homepage".

{: .callout .info }
**Note**: Always start the accessible name with the visible information, so that the link is easier to select for people who use speech recognition software.

## Option 1: The accessible name in the alt attribute of an image

If you use an image such as a .gif, .png, .jpg, or .svg, you can use the alt attribute to give the link an accessible name. The content of the alt attribute — the alt text of an image within a link — is then added to the link text.

Let's take WordPress.org as an example.

In the code (simplified):

```html
<a href="https://wordpress.org/">
    <img alt="WordPress logo, to the homepage" src="WordPress-logo.png">
</a>
```
Visually:

<a href="https://wordpress.org/">
    <img alt="WordPress logo, to the homepage" src="{{site.baseurl}}/assets/images/WordPress-logo.png" width="100" height="100" loading="lazy" style=" border: 0 solid #fff;">
</a>

How do screen readers read this?

- VoiceOver in Safari: "Link, image, WordPress logo, to the homepage."
- NVDA in Firefox: "WordPress logo, to the homepage, image, link."

All the information is present.

There is an advantage to using the alt attribute instead of an aria-label solution. When the connection is slow, the alt text will already appear before the image loads, and it already informs all users about the name of the site and the link destination. It's quite robust.

## Option 2: The accessible name in an aria-label on the link itself

When the accessible name is provided by an aria-label on the `<a>` element, it overrides all content within the link, so the content of the image's alt attribute is not announced either. Do give the image itself a good alt text, especially if you often reuse the image on the website.

In the code (simplified):
```html
<a aria-label="WordPress logo, to the homepage" href="https://wordpress.org/">
    <img alt="WordPress logo" src="WordPress-logo.png" />
</a>
```

### Using aria-label on an inline SVG

The advantage of using an `aria-label` on the SVG instead of `<title>` and `aria-labelledby` is that no tooltip appears when you hover over the logo with the mouse.

The SVG gets `role="img"` and `aria-label="WordPress logo"` to give it its accessible name.

In the code (simplified):
```html
<a aria-label="WordPress logo, to the homepage" href="https://wordpress.org/">
    <svg aria-label="WordPress logo" role="img">
        [...]
    </svg>
</a>
```

Generated HTML:

<a aria-label="WordPress logo, to the homepage" href="https://wordpress.org/">
    <svg aria-label="WordPress logo" role="img" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
        <path fill="currentColor" d="M13.6052 0.923525C16.1432 0.923525 18.6137 1.67953 20.7062 3.09703C22.7447 4.47403 24.3512 6.41803 25.3097 8.68603C26.9837 12.6415 26.5382 17.164 24.1352 20.7145C22.7582 22.753 20.8142 24.3595 18.5462 25.318C14.5907 26.992 10.0682 26.5465 6.51772 24.1435C4.47922 22.7665 2.87272 20.8225 1.91422 18.5545C0.240225 14.599 0.685725 10.0765 3.08872 6.52603C4.46572 4.48753 6.40973 2.88103 8.67772 1.92253C10.2302 1.26103 11.9177 0.923525 13.6052 0.923525ZM13.6052 0.113525C6.15322 0.113525 0.105225 6.16153 0.105225 13.6135C0.105225 21.0655 6.15322 27.1135 13.6052 27.1135C21.0572 27.1135 27.1052 21.0655 27.1052 13.6135C27.1052 6.16153 21.0572 0.113525 13.6052 0.113525Z"></path>
        <path fill="currentColor" d="M2.36011 13.6133C2.36011 17.9198 4.81711 21.8618 8.70511 23.7383L3.33211 9.03684C2.68411 10.4813 2.36011 12.0338 2.36011 13.6133ZM21.2061 13.0463C21.2061 11.6558 20.7066 10.6973 20.2746 9.94134C19.8426 9.18534 19.1676 8.22684 19.1676 7.30884C19.1676 6.39084 19.9506 5.31084 21.0576 5.31084H21.2061C16.6296 1.11234 9.51511 1.42284 5.31661 6.01284C4.91161 6.45834 4.53361 6.93084 4.20961 7.43034H4.93861C6.11311 7.43034 7.93561 7.28184 7.93561 7.28184C8.54311 7.24134 8.61061 8.13234 8.00311 8.21334C8.00311 8.21334 7.39561 8.28084 6.72061 8.32134L10.8111 20.5118L13.2681 13.1273L11.5131 8.32134C10.9056 8.28084 10.3386 8.21334 10.3386 8.21334C9.73111 8.17284 9.79861 7.25484 10.4061 7.28184C10.4061 7.28184 12.2691 7.43034 13.3626 7.43034C14.4561 7.43034 16.3596 7.28184 16.3596 7.28184C16.9671 7.24134 17.0346 8.13234 16.4271 8.21334C16.4271 8.21334 15.8196 8.28084 15.1446 8.32134L19.2081 20.4173L20.3691 16.7453C20.8821 15.1388 21.1926 14.0048 21.1926 13.0328L21.2061 13.0463ZM13.7946 14.5853L10.4196 24.3998C12.6876 25.0613 15.1041 25.0073 17.3316 24.2243L17.2506 24.0758L13.7946 14.5853ZM23.4741 8.21334C23.5281 8.59134 23.5551 8.98284 23.5551 9.37434C23.5551 10.5218 23.3391 11.8043 22.7046 13.3973L19.2621 23.3333C24.5271 20.2688 26.4036 13.5593 23.4741 8.21334Z"></path>
    </svg>
</a>

How do screen readers read this?

- VoiceOver in Safari: "Link, image, WordPress logo, to the homepage."
- NVDA in Firefox: "WordPress logo, to the homepage, link."

## Discussion

{: .callout .alert}
**Disclaimer**: This article is only about assigning the accessible name. Implementing it on a website involves more, such as displaying the focus style, the exact location, and assigning aria-current="page" or removing the link on the front page.

### Do I need the word "logo"? 

Isn't that redundant, like the word "image" or "photo"?

Yes, you need the word "logo". In this case the fact that this is a logo provides important information.

Not only for blind users, but for all screen reader users. If you are visually impaired but not completely blind, you may be able to see the image vaguely. By adding the word "logo," you also know what the image is. A logo is a pictorial mark, and that adds legitimacy to a site.

The name of the site is required, but the word logo offers extra context.

### Isn't this a violation of 2.5.3 Label in Name?

WCAG success criterion [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) states: 

> For user interface components with labels that include text or images of text, the name contains the text that is presented visually.

So, no, this construction is not a violation. The visible name is in the alt text or in the aria-label, which becomes the accessible name of the link. Adding extra context to the link is common practice.

Compare this with the notorious "Read more" link. A common pattern is to use the [screen-reader-text](/docs/topics/code/screen-reader-text/) CSS class (or equivalent) with extra text to make the link text meaningful:

```html
<a href="your-page">
    Read more
    <span class="screen-reader-text"> about the oak processionary caterpillar</span>
</a>
```

- You see "Read more."
- You hear "Read more about the oak processionary caterpillar."

In our use case:

- You see the name of the site and the logo; the visual position indicates the link destination.
- ou hear the name of the site, the fact that it's a logo, and the link destination.

All the visible text must be in the accessible name, but extra information, such as the meaning of the image and the link destination, can be added for context. That way, the purpose of the link is explained.

### Does not adding the word "logo" fail for WCAG success criterion 2.5.3 Label in Name?

It depends on who does the audit and where you live. In the EU and Switzerland, auditors require the description of the logo in the accessible name on the logo link in the header. In the US they may not. Unfortunately, auditing is not "hard science" and opinions differ globally. Ask the accessibility expert that will audit your site for their opinion.

If you are unsure, consider this technique as best practice.
