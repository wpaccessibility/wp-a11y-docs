---
title: Plugins
layout: default
parent: Standards and best practice
nav_order: 9
---

# WordPress plugins and accessibility

{: .callout  .alert }
**Alert:** The accessibility content should be moved to the related topics, this page should only contain practical info. Which info that will be is open for discussion.  
Related issue on [GitHub #165 Topic WordPress plugins and accessibility](https://github.com/wpaccessibility/wp-a11y-docs/issues/165).  

There are no plugin accessibility requirements in the WordPress plugin directory. This is because of the labor required to test plugins for accessibility. However, you are strongly encouraged to consider accessibility when creating or updating your plugins.

## Why is plugin accessibility important?

Accessibility is the key to making your plug-in usable by people with disabilities. The accessibility of your user interface has an impact on what countries and organizations can legally use your plugin. Accessibility is required by many governments for any commercial site, and by even more for sites within governmentally supported institutions such as schools. The laws governing accessibility are variable, but most laws reference a set of guidelines called the Web Content Accessibility Guidelines (WCAG), authored by the World Wide Web Consortium (W3C).

The most common guidelines in current use are [WCAG version 2.2 at level AA](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize&levels=aaa). While many of these guidelines are specific to content, there are many aspects of accessibility that your plugin can and should employ.

## Resources:

- [Inclusive Design Components by Heydon Pickering](https://inclusive-components.design/)
- [United Kingdom’s Design System library](https://design-system.service.gov.uk/)
- [United States’ Design System library](https://designsystem.digital.gov/)
- [Accessible Components by Scott O’Hara](https://github.com/scottaohara/accessible_components)

## Interactive Elements

Forms, buttons, toggles, tabs – these are all elements commonly used both in the admin of your plugin and in public-facing interfaces. They’re also some of the most critical pieces for achieving a basic level of accessibility.

At minimum, you should be considering:

### Fields should be labeled

Every form input needs to have an associated `<label>` element. Those labels should be an accurate representation of the information required for that form. The label should be associated with the field using a for/id relationship:

```html
<label for="my_field">Share your story</label>
<textarea id="my_field" name="my_story"></textarea>
```

Avoid hiding your labels visually. If you do need to hide a label, use a standard `.screen-reader-text` class to do so.

[Learn more about visually hidden text](https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/).

### Form groups need group names

If you’re providing a group of checkboxes or radio buttons, the label for the input isn’t usually enough information: it tells you the value you’re selecting, but not the question you’re trying to answer. Checkboxes and radio buttons should be grouped inside a `<fieldset>` with a `<legend>`.

```html
<fieldset>
    <legend>Why do you love WordPress plugins?</legend>
      <input type="radio" id="radio1" value="money"> <label for="radio1">Money</label>
      <input type="radio" id="radio2" value="fame"> <label for="radio2">Fame</label>
      <input type="radio" id="radio3" value="respect"> <label for="radio3">Respect</label>
</fieldset>
```

### Buttons should be `<button>` or `<input>` elements

Attaching JavaScript to `<div>` or `<span>` elements can work great for mouse users, but leaves a ton of gaps for anybody using a screen reader or keyboard to use your site. Using standard form elements helps ensure that forms and toggles work for everybody.

You can use an anchor element for button-like behavior, but this creates accessibility problems, such as [preventing the user from cancelling the action](https://adrianroselli.com/2016/01/links-buttons-submits-and-divs-oh-hell.html?Theme=Light#Keyboard).

### Announce dynamic changes audibly

When an AJAX action runs, announce it audibly or move focus to an appropriate new location on the page.

WordPress contains a useful method called `wp.a11y.speak()` that you can use to announce results audibly. This gives screen reader users important feedback that something is happening, and what they can do next. If you’d show a result visually, you should also announce it audibly.
[Learn more about wp.a11y.speak()](https://make.wordpress.org/accessibility/2015/04/15/let-wordpress-speak-new-in-wordpress-4-2/).

Moving focus to a new location on the page will also generate new information for screen readers. This is appropriate when the action taken changes the user’s view, and they need to be informed of the change.

### Make it easy to identify and correct errors

When users input data into a form, provide them with feedback when a submission is made and notify them when they have entered something incorrectly. The error message should clearly describe the error and provide them with suggestions for correcting the error. Errors must be indicated by more than just a change of color.

You can use icons and error lists to present this visually but make sure you audibly announce it.

### Use Color Appropriately

Good color contrast is important to make sure that users with a variety of visual impairments can use your interface. The most common problem cited is color blindness, but presbyopia (age-related vision impairments) are even more common, and most specifically impacted by low contrast. As eyes age, their ability to perceive low contrast differences decreases.

The WCAG 2.1 guidelines measure contrast using a ratio comparing the relative luminosity of the colors. The guidelines stipulate a minimum contrast of 4.5:1 for normal text and 3.0:1 for large text using this ratio.

You can test your colors using many tools:

- [Joe Dolson’s Color Contrast Tool](https://www.joedolson.com/tools/color-contrast.php)
- [WebAIM’s ContrastChecker](https://webaim.org/resources/contrastchecker/color)
- [Lea Verou’s Contrast Ratio](https://contrast-ratio.com/)

Good color contrast doesn’t mean extremely high contrast; the guidelines set a minimum baseline, and any contrast that meets that baseline is acceptable.



