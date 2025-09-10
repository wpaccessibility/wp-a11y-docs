---
title: Alt text for images
layout: default
parent: Content and images
nav_order: 2
---

# Alternative text for images

{: .warning }
**TODO:**
This content should be reviewed and restructured.

{: .info }
**Note**: The alt attribute (“alt text”) is used to provide an alternative to the image for users who can’t see it.

## Best practice

- Give all HTML `<img>` elements an `alt` attribute.
- Give any decorative images an empty `alt` attribute ( `alt=""` ).
- Describe (for non-visual readers) the contents and purpose of the image in the alternate text.
- If an `alt` attribute is not inserted in the Media Library, this will be interpreted as `alt=""` in the front end.
- If an image contains a link, the alt attribute should contain the target of that link (e.g. the post title), and not a description of the image.
- When possible, use CSS to insert images that are only decorative, like an icon or ornament.

## Code examples

### Correct examples
```html
<img src="../../gallery/illustration.png" alt="description of the illustration">
Correct: will be interpreted as "description of the illustration, image"  
(example by Apple VoiceOver).

<img src="../../gallery/illustration.png" alt="">
Correct: will be interpreted as "image" 
(example by Apple VoiceOver).

<a href="blog.html"><img src="icon.png" alt="Blog Postings"></a>
Correct: will be interpreted as "link, image Blog Postings, image"  
(example by Apple VoiceOver).
```

### Incorrect examples

```html
<img src="../../gallery/illustration.png">
<img src="illustration.png">
Incorrect: will both be interpreted as "illustration.png, image"  
(example by Apple VoiceOver).
```

## Visual example

Image from WordPress Media Library where you can insert various meta-information for an image.

An alternative text can be inserted in the Alt Text-field:
![Screenshot of the add image modal in the editor](/assets/images/add-image.png)

### Inserting alt attributes

An `alt` attribute should always be present. The content of the `alt` attribute depends on the relevance of the image for understanding that context.

An `alt` attribute with a **description** should be added:

- images that contain text that is not provided nearby
- images that illustrate the content in the broadest sense
- images with complex information should be described briefly in the alt attribute, and the information should be provided elsewhere on the page

An `alt` attribute with text describing the **target** should be added:

- images that contain a link

An empty `alt` attribute (`alt=""`) should be added:

- when images are decorative; but it is better to insert such images using CSS

If an `alt` attribute is not present, the filename of that image may be used instead.

Read more on [Are alt attributes required? Always?](https://www.joedolson.com/2015/03/are-alt-attributes-required-always/)

On the _Web Accessibility Tutorials_ of the W3C the [alt Decision Tree tool](https://www.w3.org/WAI/tutorials/images/decision-tree/) is an almost comprehensive guide that describes how to use the alt attribute of an image in various situations.

### Benefits

Blind, people with visual and readability limitations will benefit when using a screen reader.

The `alt` attribute helps with Search Engine Optimization. Google uses alt text along with computer vision algorithms and the contents of the page to understand the [subject of the image](https://support.google.com/webmasters/answer/114016).

### WCAG 2.1 Success Criterion

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) (level A)


## Resources and external links

- [Alt Decision Tree tool](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [Image SEO: alt tag and title tag optimization](https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/)
- [The Rules of ALT](https://html.com/images/rules-of-alt/)
