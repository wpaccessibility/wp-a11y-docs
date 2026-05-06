---
title: Alt text for images
layout: default
parent: Content and images
description: The alt attribute (alt text) is used to provide an alternative to the image for users who can’t see it.
nav_order: 2
contributors:
  - Rian Rietveld
  - Joe Dolson
  - Gary Jones
---

# Alternative text for images in the content

The alternative text or “alt text” is used to provide an alternative to an image for users who can’t see it. Screen readers will announce that alternative text, so visitors that can not see the image will also know what it shows and won’t miss information. How do you add good alt text in your WordPress content?

{: .info .callout }
How to implement and name images in development is addressed in the "Frontend code" section [Images]({{site.baseurl}}/docs/topics/code/images/) of this documentation.

## The alternative text describes the purpose of an image

Describe (for non-visual readers) the contents and purpose of the image in your alternate text. That purpose may depend on the context in which an image is used. 

Add alt text for images that contain text that is not contained in nearby text content.

Images with complex information, like infographics, should be described briefly in the alt text, and the information should be provided elsewhere on the page. 

If an image is used as a link, use the link target as alt text. More about linking images in [Images as links]({{site.baseurl}}/docs/topics/content/links/link-image/).

You can leave the alt text empty for images that are decorative and add no information to the content. Then a screen reader will skip that image and not announce it. 

In the _Web Accessibility Tutorials_ documentation of the W3C, the [alt text Decision Tree tool](https://www.w3.org/WAI/tutorials/images/decision-tree/) is an almost comprehensive guide that describes how to provide alternative text in various situations.

## Alt text in WordPress

In WordPress, you an add `alt` text for an image in the Media Library, in the Attachment Details panel for an image. This alt text will be used by default when embedding this image in content.

![Screenshot of the attachment details of the WP A11y wapuu]({{site.baseurl}}/assets/images/attachment-details.png)

When you add an image in the content using the Image Block, make sure the alt text still matches the purpose of the image as you are using it. The alt text for the image can be altered in the Block Settings and will only be used for this block.

![Screenshot of the Image block settings for alt text]({{site.baseurl}}/assets/images/img-block-alt-text.png)

## Overall benefits of using a proper alt text

People who can't see your image can get equivalent information about it using their assistive technology, such as a screen reader or a Braille display.

The alt text also shows when the images are still loading, in the case of a slow internet connection.

The `alt` attribute helps with Search Engine Optimization. Google uses alt text along with computer vision algorithms and the contents of the page to understand the [subject of the image](https://support.google.com/webmasters/answer/114016).

Alt text also is useful for [Answer Engine Optimisation](https://dubbot.com/dubblog/2025/alt-text-and-answer-engine-optimization.html) (AEO), it provides essential information about the content in an image.

## Examples

### Don't add "Image of"

When announcing an image, the screen reader announces the alt text and the fact that it is an image. 

{: .dont .callout}
**Don't**: Add the words "Image of", `Image of a nest of kittens.`.   
Screen readers already add the information that it's an image.

{: .do .callout}
**Do:** Be brief and to the point.  
Add the alt text `A nest of kittens.`.

### Explain the essence of an image

Think about what you want to tell with an image and capture that in the alt text.

{: .dont .callout}
**Don't**: Describe everything that's on the image, like the alt text:  
"A photo of Jane, she is wearing her vintage dress by Dior, in her garden in full bloom, the sun is shining, she is smiling into the camera while holding a cup of coffee.".

In a fashion blog, the relevant information might be "wearing a vintage dress by Dior", on a gardening page the background garden might be most important, describe what's important in the image.

{: .do .callout}
Be to the point, like the alt text for a portrait:  
"Jane, smiling into the camera.".  
The alt text for a photo of Jane, showing off her dress:   
"Jane, in vintage Dior.".    
The alt text for a photo of Jane in her garden:    
"Jane, in her garden in full bloom.".  

## Resources

### WCAG Success Criterion for alternative text for images

By giving a meaningful image the proper alternative text, you meet WCAG success criterion [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content) (level A).

### Related pages in this documentation

-  WordPress accessibility-ready guidelines: [Alternative text on images and graphics]({{site.baseurl}}/docs/topics/theme-guidelines/alternative-text/).
- Start with accessibility: [7 Quick wins]({{site.baseurl}}/docs/start/quick-wins/).
- Standards and best practice - Content and images - Links: [Images as links]({{site.baseurl}}/docs/topics/content/links/link-image/).
- Standards and best practice - Frontend code - Images: [Alternative text for images, SVGs and icons in development]({{site.baseurl}}/docs/topics/code/images/alt-text/).

### Other resources

- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) by the W3C.
- [Write helpful alt text](https://developers.google.com/tech-writing/accessibility/self-study/write-alt-text) by Google.
- [Are alt attributes required? Always?](https://www.joedolson.com/2015/03/are-alt-attributes-required-always/), by Joe Dolson.
- [Image SEO: alt tag and title tag optimization](https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/), by Yoast.
- [The Rules of ALT](https://html.com/images/rules-of-alt/) by Jon Penland.
- [Text descriptions and emotion rich images](https://tink.uk/text-descriptions-emotion-rich-images/) by Léonie Watson.
