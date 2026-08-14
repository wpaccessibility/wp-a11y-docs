---
title: Feedback on dynamic changes
layout: default
parent: Frontend code
description: The explanation of wp.a11y.speak.
nav_order: 7
---

# Feedback on dynamic changes

## Using ARIA Live in WordPress

`wp.a11y.speak()` is a JavaScript method included into WordPress core as off version 4.2.

When content changes dynamically in a web page, `wp.a11y.speak()` can announce a message using [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Then users who depend on a screen reader will be notified of any change to the content on the page.

Joe Dolson and Andrea Fercia wrote a clear introduction and manual on the method in [Let WordPress Speak](https://make.wordpress.org/accessibility/2015/04/15/let-wordpress-speak-new-in-wordpress-4-2/), new in WordPress 4.2

### Example of a `wp.a11y.speak()` implementation

In this example a table with data is displayed. The user can select for example a category and the table with the data below will be updated dynamically.

With `wp.a11y.speak()` we can announce that the table has been updated with new data.

**Note**: `wp.a11y.speak()` is only available after DOM ready, so be sure not to call it earlier!

### In functions.php

```
add_action( 'wp_enqueue_scripts', 'yourprefix_ajax' );

function yourprefix_ajax() {
    // Register the script.
    wp_register_script( 'your-prefix-ajax', get_template_directory_uri() . '/assets/js/your-ajax-file.js',
        array(
            'wp-a11y',
        ),
        false,
        true
    );

    // Localization.
    wp_localize_script( 'your-prefix-ajax', 'yourData', array(
        strings' => array(
            'resultsFound' => esc_html__( 'New results found and displayed in the table below', 'your-theme' )
        ),
    ) );
    wp_enqueue_script( 'your-prefix-ajax' );
}
```

### In your-ajax-file.js

Within the js method generating the dynamic changes you can call:

```javascript
// Announce change of data in the table.
wp.a11y.speak( yourData.strings.resultsFound, 'polite' );
```

### The generated output

```html
<div id="wp-a11y-speak-polite" aria-live="polite" aria-relevant="additions text" aria-atomic="true" class="screen-reader-text wp-a11y-speak-region">
New results found and displayed in the table below
</div>
```

This `<div>` will be added to the bottom of the web page.

## Using the npm package

The `wp.a11y.speak()` functionality is also available from the NPM package `@wordpress/a11y`.

Install the module:

```
npm install @wordpress/a11y --save
```

Example usage:

```
import { speak } from '@wordpress/a11y';

// For polite messages that shouldn't interrupt what screen readers are currently announcing.
speak( 'The message you want to send to the ARIA live region' );

// For assertive messages that should interrupt what screen readers are currently announcing.
speak( 'The message you want to send to the ARIA live region', 'assertive' );
```

## Resources

{: .resource-h3}
### Related pages in this documentation

- [Provide feedback to screen reader users on form errors]({{site.baseurl}}/docs/topics/forms/feedback/screen-reader-feedback/#screen-reader-feedback-after-submit) in Standards and best practice, Webforms.
- [Disappearing toasts]({site.baseurl}}/docs/topics/design/avoid/toasts/) in Standards and best practice, Design & user experience.
- [Screen reader testing]({{site.baseurl}}/docs/testing/screen-readers/) in Test for accessibility.

{: .resource-h3}
### Other resources

- The NPM Module [@wordpress/a11y](https://www.npmjs.com/package/@wordpress/a11y) on npmjs.com. The “speak” method that allows you to easily announce dynamic interface updates to screen readers using ARIA live regions. This module is inspired by the speak function in wp-a11y.js.
- [@wordpress/a11y package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-a11y/) in Accessibility utilities for WordPress, Block Editor Handbook.
- [Let WordPress Speak, new in WordPress 4.2](https://make.wordpress.org/accessibility/2015/04/15/let-wordpress-speak-new-in-wordpress-4-2/) by Joe Dolson and Andrea Fercia, introducing and explaining the method.
- [WordPress speaks with wp.a11y.speak](https://foxland.fi/wordpress-speaks-wp-a11y-speak/) by Sami Keijonen, explanation, examples in GitHub and a demo site.
- [Live Region Support](https://adrianroselli.com/2026/01/live-region-support.html) by Adrian Roselli.

