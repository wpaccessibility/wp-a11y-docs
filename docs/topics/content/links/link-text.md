---
title: Link texts
layout: default
parent: Links
description: A link text should describe the resource that it links to.
nav_order: 2
contributors:
  - Joe Dolson
  - Rian Rietveld
---

# Write meaningful link text

{: .callout .tip }
**Rule of thumb**: a link text should describe the resource that it links to, so that when the text is read out of context the user will still know what to expect. A link is a promise, not a surprise.

Link text should stand on its own. Some assistive software scans a page for links and presents them to the user as a simple list. In these situations, all the links will be read out of context. So it is important the text used in a link is descriptive and meaningful.

It also makes your text easier to scan visually, so that sighted users can more quickly find the information they’re looking for.

<figure>
<img src="{{site.baseurl}}/assets/images/vo-rotor-links.png" alt="">
<figcaption>Descriptive, meaningful link text in the Apple VoiceOver link list.</figcaption>
</figure>

Saar Twito explains the concept of a good link text comprehensive in [Descriptive Link Text: The Art of Clear Digital Signposting](https://www.greadme.com/blog/accessibility/how-to-write-descriptive-link-text-complete-guide).

## Make links texts descriptive

Avoid meaningless link text like: click here, download, info, more, here, this.

With these types of links, users have to read the whole sentence to understand the purpose of the link. This makes your content less browsable, and harder to engage with. Screen reader users cannot navigate by links, because those links are not useful without additional context.

<figure>
<img src="{{site.baseurl}}/assets/images/incorrect-links.png" alt="">
<figcaption>Useless, non-descriptive link text in the Apple VoiceOver link list.</figcaption>
</figure>

{: .callout .dont }
**Don't**: write poor quality (non-descriptive) link texts:        
If you are interested in our work, [click here](#dummy-link) to subscribe to our newsletter. You can [download](#dummy-link) the manual of the espresso machine, or contact us for more [info](#dummy-link).

{: .callout .do }
**Do**: write helpful (descriptive) link texts:  
[Subscribe to our newsletter](#dummy-link) if you are interested in our work. You can download the [manual as a PDF]((#dummy-link) ) of the espresso machine, or [contact us](#dummy-link) for more info.

## Avoid fancy character combinations in your links

Avoid for example in your link texts:

- ASCII art, example: \ō͡≡o˞̶
- Emoticons, example: <3
- Leetspeak, example: m8ts
- Excessive use of Emoji

ASCII art is invariably meaningless to screen reader users. Emoticons may occasionally be interpretable, but are confusing and difficult to understand. “Leetspeak” is unpronounceable, and creates difficult in comprehension. Emoji are independently accessible; they do have text alternatives. However, a large number of emoji can make the text effectively impossible to comprehend.

## Avoid writing links in all caps

Sequences of all capital letters are harder to read for people with dyslexia, screen readers may interpret short capitalized words as abbreviations, and read the words out character by character. This is also true if text is capitalized using CSS.

{: .callout .dont }
**Don't**: use all caps as link text.   
`<a href="some-url">ACT NOW</a>`    
<a href="#">ACT NOW</a>

{: .callout .do }
**Do**: use sentence case or title case as link text.   
`<a href="some-url">Act now</a>`     
<a href="#">Act now</a>     
`<a href="some-url">Act Now</a>`     
<a href="#">Act Now</a>   

## Avoid using complete URLs as link text

Some URLs are highly readable, such as “wordpress.org”. Others are almost impossible to parse as language. In most cases, you should avoid using a URL as the visible link text. If you are explicitly referring to a web address, keep it short: [wordpress.org](https://www.wordpress.org) instead of [https://www.wordpress.org](https://www.wordpress.org).

{: .callout .dont }
**Don't**: use a url as link text:    
We keep track of all the issues in: [https://github.com/wpaccessibility/wp-a11y-docs/issues/85](https://github.com/wpaccessibility/wp-a11y-docs/issues/85).

{: .callout .do }
**Do**: write a meaningful and readable link text:    
We keep track of all the issues in: [Content pages: create or review or rewrite](https://github.com/wpaccessibility/wp-a11y-docs/issues/85).

## Avoid the title attribute on links

You should not use the title attribute on links, because the title attribute is only available for sighted users on desktop using a mouse. Other users will miss that information. 

In addition, screen readers announce the title attribute inconsistently. You must be sure that all users get the information they need and the title attribute doesn’t provide that.

{: .callout .dont }
**Don't**: use a title attribute on links.   
`<a href="some-url" title="download the PDF">manual</a>`    
<a href="#" title="download the PDF">manual</a>

{: .callout .do }
**Do**: add all into in the link text, so everyone had the dame information and the inforlation is aways visible.  
`<a href="some-url">download the manual as PDF</a>`    
<a href="#">download the manual as PDF</a>

## Resources

### Related WCAG Success Criteria for links

By giving a meaningful link text, you meet WCAG success criteria
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) (level A).
- [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only) (level **AAA**).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (level A).

### Other resources

- [Descriptive Link Text: The Art of Clear Digital Signposting](https://www.greadme.com/blog/accessibility/how-to-write-descriptive-link-text-complete-guide) by Saar Twito.
- [Writing for Web Accessibility ](https://www.w3.org/WAI/tips/writing/), by the W3C.
- [Links and Hypertext](https://webaim.org/techniques/hypertext/hypertext_links), by WebAIM
- [Creating the perfect link](https://www.a11y-collective.com/blog/the-perfect-link/), by The A11Y Collective.
