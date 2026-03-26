---
title: Alt text for images
layout: default
parent: Content and images
description: The alt attribute (alt text) is used to provide an alternative to the image for users who can’t see it.
nav_order: 2
---

# Alternative text for images in the content

The alternative text or “alt text” is used to provide an alternative to an image for users who can’t see it. Screen readers will announce that alternative text, so visitors that can not see the image will also know what it shows and won’t miss information. How to add a good alt text in the content in WordPress?

{: .info .callout }
How to implement and name images in development is addressed in the "Frontend code" section [Images]({{site.baseurl}}/docs/topics/code/images/) of this documentation.

## The alternative text describes the purpose of an image

What should the alt text be? Describe (for non-visual readers) the contents and purpose of the image in the alternate text. And that purpose can depend on the context in which an image is used. 

Add alt text for:

- Images that contain text that is not provided nearby.
- Images that illustrate content in the broadest sense. 

Images with complex information, like infographics, should be described briefly in the alt text, and the information should be provided elsewhere on the page. 

If an image is used as a link, use the link target as alt text. More about linking images in [Images as links]({{site.baseurl}}/docs/topics/content/links/link-image/).

You can leave the alt text empty for images that are decorative and add no information to the content. Then a screen reader will skip that image and not announce it. 

On the _Web Accessibility Tutorials_ of the W3C the [alt Decision Tree tool](https://www.w3.org/WAI/tutorials/images/decision-tree/) is an almost comprehensive guide that describes how to use the alt attribute of an image in various situations.

## Alt text in WordPress

In WordPress, add the alt text for an image in the Media Library, with the Attachment Details of an image. This alt text will be used for all embedding of this image in the content.

![Screenshot of the attachment details of the WP A11y wapuu]({{site.baseurl}}/assets/images/attachment-details.png)

Make sure, when you add the image in the content with the Image Block, the alt text still matches the purpose if the image in the content. The alt text that image can be altered with the Block Settings and will only be used for this block.

![Screenshot of the Image block settings for alt text]({{site.baseurl}}/assets/images/img-block-alt-text.png)

## Overall benefits of using a proper alt text.

People who can’t fully see or hear content can understand it by using a screen reader.

The alt text shows when the images are still loading, in the case of a slow internet connection.

The `alt` attribute helps with Search Engine Optimization. Google uses alt text along with computer vision algorithms and the contents of the page to understand the [subject of the image](https://support.google.com/webmasters/answer/114016).

Alt text also is useful for [Answer Engine Optimisation](https://dubbot.com/dubblog/2025/alt-text-and-answer-engine-optimization.html) (AEO), it provides essential information about the content in an image.

## Examples

### Don't add "Image of"

When announcing an image, the screen reader announces the alt text and the fact that it is an image. 

{: .dont .callout}
**Don't**: Add the alt text `Image of a nest of kittens.`. Screen readers already add the information that it's an image.

{: .do .callout}
**Do:** Be brief and to the point, Add the alt text `A nest of kittens.`.

### Explain the essence of an image

Think about what you want to tell with an image and capture that in the alt text.

{: .dont .callout}
**Don't**: Describe everything that's on the image, like the alt text:
`A photo of Jane, she is wearing her vintage dress by Dior, at the background is her garden, the sun is shining, she is smiling into the camera while holding a cup of coffee.`.

{: .do .callout}
Be to the point, like the alt text: `Jane, smiling into the camera.`.

{: .do .callout}
Describe what's important in the image: `Jane, in vintage Dior.`.

## Resources

### Related WCAG Success Criterion for alternative text for images

By giving a meaningful image the proper alternative text, you meet WCAG success criterion [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (level A).

### Other resources

- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) by the W3C.
- [Write helpful alt text](https://developers.google.com/tech-writing/accessibility/self-study/write-alt-text) by Google.
- [Are alt attributes required? Always?](https://www.joedolson.com/2015/03/are-alt-attributes-required-always/), by Joe Dolson.
- [Image SEO: alt tag and title tag optimization](https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/), by Yoast.
- [The Rules of ALT](https://html.com/images/rules-of-alt/) by Jon Penland.
- [Text descriptions and emotion rich images](https://tink.uk/text-descriptions-emotion-rich-images/) by Léonie Watson.
