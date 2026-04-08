---
title: Alt text images
layout: default
parent: Images
description: How to add alternative text for images, SVGs and icons in development.
nav_order: 2
---

# Alternative text for images, SVGs and icons in development

When an image has meaning or adds information on a page, that image needs a text alternative. Screen r`eaders will announce that alternative text, so visitors using assistive technology will also know what it shows and won’t miss information.

You may think that you’re not including any images in your project. Possibly this is true; but are you using [dashicons](https://developer.wordpress.org/resource/dashicons/) or other icon fonts? Are you using SVG graphics? For accessibility, “images” doesn’t only refer to the `img` element. It means any non-text graphical elements on the page.

All of these images require accessibility considerations. The W3C offers a [useful decision tree to help you decide](https://www.w3.org/WAI/tutorials/images/decision-tree/) what kind of text you need for an image. If your image is conveying information or activating a control, it’s going to need some form of [accessible name]({{site.baseurl}}/docs/topics/code/accessible-name).

{: .info .callout }
This page addresses the alternative text and accessible names for images in development. How to write good alt text and add them to content is addressed in the "Content and Images" section [Alternative text for images in the content]({{site.baseurl}}/docs/topics/content/alt-text/) of this documentation.

## Alternative text on an img

Always add the `alt` attribute to an `img` element. The `alt` attribute can:

- contain the alternative text that will be announced by a screen reader
- be empty, so the image will be omitted by a screen reader.

When the alt attribute is not present, a screen reader may announce the **filename** or other information instead. Blind users will miss information that is on the image.

{: .dont .callout }
**Don't**: Remove the `alt` attribute

```html
<!-- Do not copy,this is incorrect code -->
<img src="IMG_123.jpg">
```
Will be announced in VoiceOver as "IMG_123, image".

{: .do .callout }
Do: Add an `alt` attribute, describing the purpose of the image.

```html
<img src="IMG_123.jpg" alt="All T-shirts are on sale">
```
Will be announced in VoiceOver as "All T-shirts are on sale, image".


## Alternative text on an svg

{: .tip .callout }
**Tip**: Carie Fisher published extensive research on how to [create accessible SVGs](https://www.smashingmagazine.com/author/carie-fisher/).

For accessibility: add `role="img"` to an SVG that serves as an image. Then the element is recognized and announced as an image by screen readers.

There are several ways to give an SVG an alt text (an accessible name). Here are three valid options:

1: Use the attribute `aria-label`:

<svg aria-label="WordPress logo" role="img" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 96.24 96.24">
<g>
	<path d="M48.122,0C21.587,0,0.001,21.585,0.001,48.118c0,26.535,21.587,48.122,48.12,48.122c26.532,0,48.117-21.587,48.117-48.122   C96.239,21.586,74.654,0,48.122,0z M4.857,48.118c0-6.271,1.345-12.227,3.746-17.606l20.638,56.544   C14.81,80.042,4.857,65.243,4.857,48.118z M48.122,91.385c-4.247,0-8.346-0.623-12.222-1.763L48.88,51.903l13.301,36.433   c0.086,0.215,0.191,0.411,0.308,0.596C57.992,90.514,53.16,91.385,48.122,91.385z M54.083,27.834   c2.604-0.137,4.953-0.412,4.953-0.412c2.33-0.276,2.057-3.701-0.277-3.564c0,0-7.007,0.549-11.532,0.549   c-4.25,0-11.396-0.549-11.396-0.549c-2.332-0.137-2.604,3.427-0.273,3.564c0,0,2.208,0.275,4.537,0.412l6.74,18.469l-9.468,28.395   L21.615,27.835c2.608-0.136,4.952-0.412,4.952-0.412c2.33-0.275,2.055-3.702-0.278-3.562c0,0-7.004,0.549-11.53,0.549   c-0.813,0-1.77-0.021-2.784-0.052C19.709,12.611,33.008,4.856,48.122,4.856c11.265,0,21.519,4.306,29.215,11.357   c-0.187-0.01-0.368-0.035-0.562-0.035c-4.248,0-7.264,3.702-7.264,7.679c0,3.564,2.055,6.582,4.248,10.146   c1.647,2.882,3.567,6.585,3.567,11.932c0,3.704-1.422,8-3.293,13.986l-4.315,14.421L54.083,27.834z M69.871,85.516l13.215-38.208   c2.471-6.171,3.29-11.106,3.29-15.497c0-1.591-0.104-3.07-0.292-4.449c3.38,6.163,5.303,13.236,5.301,20.758   C91.384,64.08,82.732,78.016,69.871,85.516z"/>
</g>
</svg>

```html
<svg aria-label="WordPress logo" role="img">
    [...]
</svg>
```

2: Use the element `<title>`:

<svg aria-labelledby="titleID" role="img" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 96.24 96.24">
<title id="titleID">WordPress logo</title>
<g>
	<path d="M48.122,0C21.587,0,0.001,21.585,0.001,48.118c0,26.535,21.587,48.122,48.12,48.122c26.532,0,48.117-21.587,48.117-48.122   C96.239,21.586,74.654,0,48.122,0z M4.857,48.118c0-6.271,1.345-12.227,3.746-17.606l20.638,56.544   C14.81,80.042,4.857,65.243,4.857,48.118z M48.122,91.385c-4.247,0-8.346-0.623-12.222-1.763L48.88,51.903l13.301,36.433   c0.086,0.215,0.191,0.411,0.308,0.596C57.992,90.514,53.16,91.385,48.122,91.385z M54.083,27.834   c2.604-0.137,4.953-0.412,4.953-0.412c2.33-0.276,2.057-3.701-0.277-3.564c0,0-7.007,0.549-11.532,0.549   c-4.25,0-11.396-0.549-11.396-0.549c-2.332-0.137-2.604,3.427-0.273,3.564c0,0,2.208,0.275,4.537,0.412l6.74,18.469l-9.468,28.395   L21.615,27.835c2.608-0.136,4.952-0.412,4.952-0.412c2.33-0.275,2.055-3.702-0.278-3.562c0,0-7.004,0.549-11.53,0.549   c-0.813,0-1.77-0.021-2.784-0.052C19.709,12.611,33.008,4.856,48.122,4.856c11.265,0,21.519,4.306,29.215,11.357   c-0.187-0.01-0.368-0.035-0.562-0.035c-4.248,0-7.264,3.702-7.264,7.679c0,3.564,2.055,6.582,4.248,10.146   c1.647,2.882,3.567,6.585,3.567,11.932c0,3.704-1.422,8-3.293,13.986l-4.315,14.421L54.083,27.834z M69.871,85.516l13.215-38.208   c2.471-6.171,3.29-11.106,3.29-15.497c0-1.591-0.104-3.07-0.292-4.449c3.38,6.163,5.303,13.236,5.301,20.758   C91.384,64.08,82.732,78.016,69.871,85.516z"/>
</g>
</svg>

```html
<svg role="img">
    <title>WordPress logo</title>
    [...]
</svg>
```
The content of `<title>` doesn't render as visual text, but browsers usually show the `<title>` as a tooltip.

3: Assign the accessible name to the content of `<title>` of the SVG, using `aria-labelledby` to explicitly connect the `svg` to its name:

<svg aria-labelledby="titleID" role="img" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 96.24 96.24">
<title id="titleID">WordPress logo</title>
<g>
	<path d="M48.122,0C21.587,0,0.001,21.585,0.001,48.118c0,26.535,21.587,48.122,48.12,48.122c26.532,0,48.117-21.587,48.117-48.122   C96.239,21.586,74.654,0,48.122,0z M4.857,48.118c0-6.271,1.345-12.227,3.746-17.606l20.638,56.544   C14.81,80.042,4.857,65.243,4.857,48.118z M48.122,91.385c-4.247,0-8.346-0.623-12.222-1.763L48.88,51.903l13.301,36.433   c0.086,0.215,0.191,0.411,0.308,0.596C57.992,90.514,53.16,91.385,48.122,91.385z M54.083,27.834   c2.604-0.137,4.953-0.412,4.953-0.412c2.33-0.276,2.057-3.701-0.277-3.564c0,0-7.007,0.549-11.532,0.549   c-4.25,0-11.396-0.549-11.396-0.549c-2.332-0.137-2.604,3.427-0.273,3.564c0,0,2.208,0.275,4.537,0.412l6.74,18.469l-9.468,28.395   L21.615,27.835c2.608-0.136,4.952-0.412,4.952-0.412c2.33-0.275,2.055-3.702-0.278-3.562c0,0-7.004,0.549-11.53,0.549   c-0.813,0-1.77-0.021-2.784-0.052C19.709,12.611,33.008,4.856,48.122,4.856c11.265,0,21.519,4.306,29.215,11.357   c-0.187-0.01-0.368-0.035-0.562-0.035c-4.248,0-7.264,3.702-7.264,7.679c0,3.564,2.055,6.582,4.248,10.146   c1.647,2.882,3.567,6.585,3.567,11.932c0,3.704-1.422,8-3.293,13.986l-4.315,14.421L54.083,27.834z M69.871,85.516l13.215-38.208   c2.471-6.171,3.29-11.106,3.29-15.497c0-1.591-0.104-3.07-0.292-4.449c3.38,6.163,5.303,13.236,5.301,20.758   C91.384,64.08,82.732,78.016,69.871,85.516z"/>
</g>
</svg>

```html
<svg aria-labelledby="titleID" role="img">
    <title id="titleID">WordPress logo</title>
    [...]
</svg>
```
The value `aria-labelledby` points to the `id` of the `title`.

## Image or SVG in a link

When adding an image inside a link, the alt text will be added to the link text, to the accessible name of the link. Make sure the link text still makes sense.

If an image of, for example, a logo also contains text, like a byline, make sure that text is also added to the link text. Then no information gets lost.

For example when you create a link to Instagram, showing only the icon.
```html
<a href="[some-url]">
    <img src="logo-insta.png" alt="Instagram">
</a>
```

"Instagram" will be the link text, the accessible name of the link, announced by a screen reader when the link gets focus. So, in this case don't add the word "Logo", even if it's a logo. Describe the link target.

### Special case: A link on the logo in the header

The alt text on a logo in the header of a website needs more information than just the link target. It must also show that the image displays the logo of the website/company.

For example:
```html
<a href="/">
    <img src="logo.png" alt="Company name logo, to the homepage">
</a>
```

Read the full explanation:

- [A link on a logo in the header, what should the alt-text be?](https://www.htmhell.dev/adventcalendar/2024/1/) by Rian Rietveld on HTMhell.
- [The accessible name of a link on a logo in the header, in Dutch](https://nldesignsystem.nl/blog/toegankelijke-naam-link-logo-header/) on NL Design System.

{: .alert .callout }
**Please note**: There are regional differences on how to interpret the WCAG success criterion [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) in this case. Please consult your accessibility expert on their opinion about what the accessible name of a link to home on a logo in the header should be. 


## Icons

Make sure screen readers users also know what's shown in the icon, if you use it in a meaningful way.
This is particularly crucial if you’re using images to represent controls, like a hamburger menu icon, an arrow, or a plus or minus icon. These images are used to represent information.

For example, if you use a close button with an "X"-icon, make sure that button is announced by a screen reader as "Close".


### Examples for icons

{: .dont .callout }
**Don't** Forget giving a button, containing only a menu icon, an accessible name.

```html
<!-- 
Do not copy,this is incorrect code.
This button has no accessible name and 
is announced just as "Button" by a screen reader. 
-->
<button>
    <span class="dashicons dashicons-menu"></span>
</button>
```


{: .do .callout }
**Do:** Provide an accessible name to the button.

Use an aria-label on the button, this will be the accessible name.
```html
<!-- This button is announced as "menu" by a screen reader. -->
<button aria-label="Menu">
    <span class="dashicons dashicons-menu"></span>
</button>
```

Add text, hidden from sight but announced by a screenreader using the [CSS class .screen-reader-text](/docs/topics/code/screen-reader-text/).
```html
<!-- This button is announced as "menu" by a screen reader. -->
<button>
    <span class="dashicons dashicons-menu"></span>
    <span class="screen-reader-text">Menu</span>
</button>
```

The best option is to add visible text. An icon alone may not be universally understood.

```html
<!-- This button is announced as "menu" by a screen reader. -->
<button>
    <span class="dashicons dashicons-menu"></span>
    <span>Menu</span>
</button>
```

## Resources

### Related WCAG Success Criteria for alternative text for images

By giving meaningful images proper alternative text, you meet WCAG success criteria:
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (level A).
- To be honest, this topic  (level A).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (level A).

### Other resources

- [Images Tutorial](https://www.w3.org/WAI/tutorials/images/), by the W3C.
- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/), by the W3C.
- [Accessible Images For When They Matter Most](https://www.smashingmagazine.com/2020/05/accessible-images/), by Carie Fisher on Smashing Magazine.
- [Accessible SVGs: Perfect Patterns For Screen Reader Users](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/), by Carie Fisher on Smashing Magazine.
- [Accessible SVGS from CSS Tricks](https://css-tricks.com/accessible-svgs/), by Heather Migliorisi on CSS Tricks.
- [Font Icon accessibility from Font Awesome](https://fontawesome.com/docs/web/dig-deeper/accessibility) by Font Awesome.
