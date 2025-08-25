---
title: Content kitchen sink
parent: How to contribute
nav_order: 4
has_video: true
---

# Kitchen sink: all options available for content

{: .info }
WordPress.org provides a lot of style guides for documentation: [WordPress Style Guides - highlights](https://make.wordpress.org/docs/style-guide/welcome/highlights/). We value most of all: be [kind and professional](docs/contribute/CODE_OF_CONDUCT.md) in your text and please write the text yourself or make sure the reader knows who you are citing.

## Headings
```markdown
#  This is an H1 heading
## This is an H2 heading
### This is an H2 heading
#### This is an H2 heading
##### This is an H2 heading
###### This is an H2 heading
```

## Text
```markdown
This is a paragraph.
```
This is a paragraph.

```markdown
This **bold text** and this is _italic text_.
```
This **bold text** and this is _italic text_.

```markdown
A link: Please visit the [Make WordPress Accessible Team Handbook](https://make.wordpress.org/accessibility/handbook/) for more info about contributor days.
```
A link: Please visit the [Make WordPress Accessible Team Handbook](https://make.wordpress.org/accessibility/handbook/) for more info about contributor days.

```markdown
An image: ![Alt text](url)
for example: ![Library](/assets/images/small-image.jpg)
```
![Library](/assets/images/small-image.jpg)


{: .info } 
For more text options with Markdown read: [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) on GitHub.

## Videos
This site uses the accessible video player [Able Player](https://ableplayer.github.io/ableplayer/).

Add to the variables at the top of the page:
```
has_video: true
```
This loads the CSS and Javascript for the Able videoplayer.

Add the video itself in the page with:

```markdown
<video data-able-player data-youtube-nocookie="true" data-youtube-id="1QjSYMd_pVk" data-heading-level="0"></video>
```
<video data-able-player data-youtube-nocookie="true" data-youtube-id="1QjSYMd_pVk" data-heading-level="0"></video>

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

## Langauge switch in the content text

Only use the lang attribute for 4 words and more.

For a part of sentence write, use a span in your Markdown text:
```markdown
This text is in English and <span lang="nl">deze tekst is in het Nederlands</span> and now we continue in English.
```

In link texts
```markdown
[<span lang="de">Forderungspapier des Deutschen Behindertenrats zur Umsetzung des European Accessibility Acts in Deutschland</span>](https://www.deutscher-behindertenrat.de/ID255536).
```

For a larger piece of content for can add to a `<p>`, `<div>`or even a landmark, depending on what you need, for example:
```markdown
<main lang="de">
[...]
</main>
```


## Shortcodes

 
```markdown
{: .info }
This is an informational message and uses the “info” short code.

{: .tip }
Use the “tip” short code to highlight tips.

{: .alert }
The “alert” short code is for alerting readers to important messages.

{: .warning }
When something is particularly precarious, use the “warning” short code.

{: .tutorial }
Give an example with the "tutorial" short code. 
The title of the callout will be "Example".
```

{: .info }
This is an informational message and uses the “info” short code.

{: .tip }
Use the “tip” short code to highlight tips.

{: .alert }
The “alert” short code is for alerting readers to important messages.

{: .warning }
When something is particularly precarious, use the “warning” short code.

{: .tutorial }
Give an example with the "tutorial" short code. The title of the callout will be "Example"

### Labels

```markdown

blue
{: .label .label-blue }

green
{: .label .label-green }

purple
{: .label .label-purple }

yellow
{: .label .label-yellow }

red
{: .label .label-red }

**bold**
{: .label }

*italic*
{: .label }

***bold + italic***
{: .label }
```

blue
{: .label .label-blue }

green
{: .label .label-green }

purple
{: .label .label-purple }

yellow
{: .label .label-yellow }

red
{: .label .label-red }

**bold**
{: .label }

*italic*
{: .label }

***bold + italic***
{: .label }


{: .info }
Note: these are not form labels, but text labels.


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
