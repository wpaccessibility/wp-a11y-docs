---
title: Link texts
layout: default
parent: Links
nav_order: 2
---

# Write a meaningful link text

{: .callout .alert }
This content will be reviewed, restructured and expanded.
Related issue on [GitHub #110 Topic Write a meaningful link text](https://github.com/wpaccessibility/wp-a11y-docs/issues/110).  

{: .tip }
**Rule of thumb**: a link text should describe the resource that it links to, so that when the text is read out of context the user will still know what to expect. A link is a promise, not a surprise.

Link text should stand on its own. Some assistive software scans a page for links and presents them to the user as a simple list. In these situations, all the links will be read out of context. So it is important the text used in a link is descriptive and meaningful.

It also makes your text easier to scan visually, so that sighted users can more quickly find the information they’re looking for.

<figure>
<img src="{{site.baseurl}}/assets/images/vo-rotor-links.png" alt="">
<figcaption>Descriptive, meaningful link text in the Apple VoiceOver link list.</figcaption>
</figure>

### Make links texts descriptive

Avoid meaningless link text like: click here, download, info, more, here, this.

With these types of links, users have to read the whole sentence to understand the purpose of the link. This makes your content less browsable, and harder to engage with. Screen reader users cannot navigate by links, because those links are not useful without additional context.

<figure>
<img src="{{site.baseurl}}/assets/images/incorrect-links.png" alt="">
<figcaption>Useless, non-descriptive link text in the Apple VoiceOver link list.</figcaption>
</figure>

{: .dont}
Poor qualify (non-descriptive) link texts:
If you are interested in our work, [click here](#dummy-link) to subscribe to our newsletter. You can [download](#dummy-link) the manual of the espresso machine, or contact us for more [info](#dummy-link).

{: .do }
Helpful (descriptive) link texts:
[Subscribe to our newsletter](#dummy-link) if you are interested in our work. You can download the [manual as a PDF]((#dummy-link) ) of the espresso machine, or [contact us](#dummy-link) for more info.

## Avoid fancy character combinations in your links

Avoid for example in your link texts:

- ASCII art, example: \ō͡≡o˞̶
- Emoticons, example: <3
- Leetspeak, example: m8ts
- Excessive use of Emoji

ASCII art is invariably meaningless to screen reader users. Emoticons may occasionally be interpretable, but are confusing and difficult to understand. “Leetspeak” is unpronounceable, and creates difficult in comprehension. Emoji are independently accessible; they do have text alternatives. However, a large number of emoji can make the text effectively impossible to comprehend.

### Avoid writing links in all caps

Sequences of all capital letters are harder to read for people with dyslexia, screen readers may interpret short capitalized words as abbreviations, and read the words out character by character. This is also true if text is capitalized using CSS.

### Avoid using complete URLs as link text

Some URLs are highly readable, such as “wordpress.org”. Others are almost impossible to parse as language. In most cases, you should avoid using a URL as the visible link text. If you are explicitly referring to a web address, keep it short: [wordpress.org](https://www.wordpress.org) instead of [https://www.wordpress.org](https://www.wordpress.org).

{: .dont}
Poor quality (non-descriptive) link texts:
If you are interested in our work, [click here](#dummy-link) to subscribe to our newsletter. You can [download](#dummy-link) the manual of the espresso machine, or contact us for more [info](#dummy-link).

{: .do}
Helpful (descriptive) link texts:
[Subscribe to our newsletter]((#dummy-link)) if you are interested in our work. You can download the [manual as a PDF]((#dummy-link)) of the espresso machine, or [contact us](#dummy-link) for more info.

## Avoid the title attribute on links

You should not use the title attribute on links, because the title attribute is only available for sighted users on desktop using a mouse. Other users will miss that information. In addition, screen readers announce the title attribute inconsistently. You must be sure that all users get the information they need and the title attribute doesn’t provide that.
