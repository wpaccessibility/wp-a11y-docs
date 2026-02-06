---
title: Content kitchen sink
parent: Technical documentation
nav_order: 4
has_video: true
description: Options and code available for creating content in this documentation.
---

# Kitchen sink: options available for content

This page lists the options and code available for creating content in this documentation.

{: .callout  .info }
**Please note:** WordPress.org provides a lot of style guides for documentation: [WordPress Style Guides - highlights](https://make.wordpress.org/docs/style-guide/welcome/highlights/). We value most of all: be [kind and professional](docs/contribute/CODE_OF_CONDUCT.md) in your text and please write the text yourself or make sure the reader knows who you are citing.

## Headings
```markdown

# This is an H1 heading
## This is an H2 heading
### This is an H3 heading
#### This is an H4 heading
##### This is an H5 heading
###### This is an H6 heading
```

# This is an H1 heading
## This is an H2 heading
### This is an H3 heading
#### This is an H4 heading
##### This is an H5 heading
###### This is an H6 heading

{: .callout  .alert }
**Alert:** In blog posts the H1 is added by the template: [Add a blog post]({{site.baseurl}}/docs/contribute/github/blog-post/).

## Summary in a larger text font.

Start the paragraph with an H2 named "Summary, or introduction and the callout {: .lead }`


```markdown
## Summary

{: .lead }
When you put care into preventing errors and clearly indicating when something goes wrong, users are much more likely to successfully submit a form.
```
## Summary

{: .lead  }
When you put care into preventing errors and clearly indicating when something goes wrong, users are much more likely to successfully submit a form.

## Text
```markdown
This is a paragraph.
```
This is a paragraph.

```markdown
This is **bold text** and this is _italic text_.
```
This is **bold text** and this is _italic text_.

```markdown
A link: Please visit the [Make WordPress Accessible Team Handbook](https://make.wordpress.org/accessibility/handbook/) for more info about contributor days.
```
A link: Please visit the [Make WordPress Accessible Team Handbook](https://make.wordpress.org/accessibility/handbook/) for more info about contributor days.

```markdown
<small>This is small text</small>.
```
<small>This is small text</small>.

### Internal links

For links to other pages within wpaccessibility.org, always add the prefix &#123;&#123;site.baseurl}} to ensure they work in preview environments. For example &#123;&#123;site.baseurl}}/assets/images/small-image.jpg. This ensures links work correctly in both production and preview environments. External links to other websites don't need  this prefix.

### Images

```markdown
An image: ![Alt text](url)

```
![Library]({{site.baseurl}}/assets/images/small-image.jpg)

{: .callout  .tip }
**Tip:** For more text options with Markdown read: [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) on GitHub.

## Videos
This site uses the accessible media player Able Player.

Add to the variables at the top of the page:
```
has_video: true
```

This loads the CSS and Javascript for the Able media player.
Please read the [Able Player documentation](https://ableplayer.github.io/ableplayer/) for information on all available settings and how to add caption and subtitle tracks.

Add the video itself in the page with:

```markdown
<video data-able-player data-youtube-nocookie="true" data-youtube-id="Xj1P0Z6I2Wk" data-heading-level="0"></video>
```
<video data-able-player data-youtube-nocookie="true" data-youtube-id="Xj1P0Z6I2Wk" data-heading-level="0"></video>

You can add captions and navigable transcripts by placing `.vtt` files in the `/assets/captions/` directory and referencing them in the HTML:

```markdown
<video data-able-player data-youtube-nocookie="true" data-youtube-id="6brKmJfDtNQ" data-heading-level="0">
	<track kind="captions" src="{{site.baseurl}}/assets/captions/captions-6brKmJfDtNQ.vtt"/>
</video>
```

<video data-able-player data-youtube-nocookie="true" data-youtube-id="6brKmJfDtNQ" data-heading-level="0">
	<track kind="captions" src="{{site.baseurl}}/assets/captions/captions-6brKmJfDtNQ.vtt"/>
</video>

## Code examples in the text

A line of code starts and ends with a &#96; on the same line.
`<img src="alice.jpg" alt="White rabbit" />`

A block of code starts and ends with &#96;&#96;&#96;.

If you want to highlight the text for a programming language, add the language after the 3 quotes.
For example: &#96;&#96;&#96;html.

```html
<!-- html -->
<img src="alice.jpg" alt="White rabbit" />
```

```javascript
// javascript
var foo = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```css
/* css  */
button {
  cursor: pointer;
}
```

```php
// php
function themename_custom_excerpt_length( $length ) {
    return 40; //number of words in excerpt.
}
add_filter('excerpt_length','themename_custom_excerpt_length', 99 );
```

## Language switch in the content text

Only use the lang attribute for 4 words and more.

For a part of sentence write, use a span in your Markdown text:
```markdown
This text is in English and <span lang="nl">deze tekst is in het Nederlands</span> and now we continue in English.
```

In link texts:
```markdown
[<span lang="de">Forderungspapier des Deutschen Behindertenrats zur Umsetzung des European Accessibility Acts in Deutschland</span>](https://www.deutscher-behindertenrat.de/ID255536).
```

For larger pieces of content, you can add to a `<p>`, `<div>`or even a landmark, depending on what you need. For example:
```markdown
<p lang="de">
[...]
</p>
```

## Callouts

```markdown
{: .callout  .info }
**Info:** This is an informational message and uses the “info” callout.

{: .callout  .tip }
**Tip:** Use the “tip” callout to highlight tips.

{: .callout  .alert }
**Alert:** The “alert” callout is for alerting readers to important messages.

{: .callout  .warning }
**Warning:** When something is particularly precarious, use the “warning” callout.

{: .callout  .example }
**Example:** Give an example with the "example" callout.
The title of the callout will be "Example".

{: .callout  .do }
**Do:** Example of good practice.

{: .callout  .dont }
**Don't:** Example of bad practice.

```

{: .callout  .info }
**Info:** This is an informational message and uses the “info” callout.

{: .callout  .tip }
**Tip:** Use the “tip” callout to highlight tips.

{: .callout  .alert }
**Alert:** The “alert” callout is for alerting readers to important messages.

{: .callout  .warning }
**Warning:** When something is particularly precarious, use the “warning” callout.

{: .callout  .example }
**Example:** Give an example with the example.

{: .callout  .do }
**Do:** Example of how to do something.

{: .callout  .dont }
**Don't:** Example of how not to do something.

### Labels

{: .callout  .info }
**Please note:** These are not form labels, but text labels.


```markdown
{: .label .label-blue }
Blue

{: .label .label-green }
Green

{: .label .label-yellow }
Yellow

{: .label .label-red }
Red

```

{: .label .label-blue }
Blue

{: .label .label-green }
Green

{: .label .label-yellow }
Yellow

{: .label .label-red }
Red

### Collapsed Section

The following uses the [`<details>`](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections) tag to create a collapsed section.

```markdown
<details markdown="block">
<summary>Shopping list (click me!)</summary>

This is content inside a `<details>` dropdown.

- Apples
- Oranges
- Milk

</details>
```

<details markdown="block">
<summary>Shopping list (click me!)</summary>

This is content inside a `<details>` dropdown.

- Apples
- Oranges
- Milk

</details>
