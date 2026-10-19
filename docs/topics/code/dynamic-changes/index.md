---
title: Feedback on dynamic changes
layout: default
parent: Frontend code
description: How and when to announce dynamically generated notifications and changes for screenreader users in WordPress.
nav_order: 7
contributors:
  - Rian Rietveld
  - Joe Dolson
---

# Feedback on dynamic changes

All users should get the same information, also information given in messages that are dynamically created, without a page reload. A message didn't exist until the moment it was needed, and its content depends on the situation at that moment.

If a message is dynamically generated and visible but doesn't receive keyboard focus, the notification should be announced for screen reader users to import them too.

Use [ARIA live-regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) for this. Screenreaders announce changes within these regions. To work properly, the live-region must already be present in the DOM (the HTML processed by the browser) before you put anything in it. Often, the browser will only process changes in already-existing live-regions.

WordPress uses the JavaScript function [wp.a11y.speak](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-a11y/#speak) to generate live-regions.

## Live-regions with role="alert" or aria-live="assertive"

Use `role="alert"` to inform the screen reader user of important and/or time-sensitive messages.

An element with `role="alert"` is an assertive live region and is functionally equivalent to using the combination `aria-live="assertive"` plus `aria-atomic="true"`. It interrupts what the user is doing and delivers the message immediately.

For example:

- Your login session is about to expire.
- The connection to the server was lost; local changes are now not being saved.
- You have 20 seconds remaining to submit the form.

```html
<div role="alert">
    Warning: You have 20 seconds remaining to submit the form.
</div>
// or
<div aria-live="assertive" aria-atomic="true">
    Warning: You have 20 seconds remaining to submit the form.
</div>

```

**Note**: Use alerts sparingly, only in situations where the user's immediate attention is required.

## Live-region with role="status" or aria-live="polite"

A live-region with role="status" provides the user with information that isn't important enough to warrant an 'alert'.

Setting `role="status"` is equivalent to setting `aria-live="polite"` plus `aria-atomic="true"`.

For example:

- The contact form was successfully submitted.
- You now have 3 products in your shopping cart.
- There are 5 search results found for 'caterpillar'.

```html
<div role="status">
    There are 5 search results found for 'caterpillar'.
</div>
// or 
<div aria-live="polite" aria-atomic="true">
    There are 5 search results found for 'caterpillar'.
</div>
```

This `role="status"` does not interrupt the user, but the notification is only delivered when the user is no longer interacting with the assistive technology.

In other words, "status" waits its turn and "alert" cuts in front.

Most content management systems and frameworks include built-in features to simplify screen reader feedback. WordPress implements this functionality through the JavaScript method `wp.a11y.speak()`. It places fixed, visually hidden, live regions at the bottom of the page where developers can insert notifications that will then be announced to users.

## Using aria-live in WordPress with wp.a11y.speak

The JavaScript method `wp.a11y.speak` reserves two spots at the bottom of the page for the announcement, one for `aria-live="assertive"` and one for `aria-live="polite"`. What needs to be announced can be injected in one of these regions.

```html
<!-- example of the live regions created by wp.a11y.speak -->
<div id="a11y-speak-assertive" class="screen-reader-text wp-a11y-speak-region" aria-live="assertive" aria-relevant="additions text" aria-atomic="true"></div>

<div id="a11y-speak-polite" class="screen-reader-text wp-a11y-speak-region" aria-live="polite" aria-relevant="additions text" aria-atomic="true"></div>
```

Joe Dolson and Andrea Fercia wrote a clear introduction and manual on the method in [Let WordPress Speak](https://make.wordpress.org/accessibility/2015/04/15/let-wordpress-speak-new-in-wordpress-4-2/), for its introduction in WordPress 4.2.

### Example of a wp.a11y.speak implementation

In this example a table with data is displayed. The user can select a category, and the table with the data below will be updated dynamically.

With `wp.a11y.speak()` we can announce that the table has been updated with new data.

{: .callout .alert}
**Note**: `wp.a11y.speak()` is only available after "DOM ready", so be sure not to call it earlier!

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
        'strings' => array(
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
    New results found and displayed in the table below.
</div>
```

## Using the npm package

The `wp.a11y.speak()` functionality is also available from the NPM package `@wordpress/a11y`. This module is inspired by the speak function in wp-a11y.js.

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

### WCAG Success Criteria for the announcement of dynamic changes

- [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/quickref/#error-identification) (Level A).
- [4.1.3 Status messages](https://www.w3.org/WAI/WCAG22/quickref/#status-messages) (Level AA).

{: .resource-h3}
### Related pages in this documentation

- [Provide feedback to screen reader users on form errors]({{site.baseurl}}/docs/topics/forms/feedback/screen-reader-feedback/#screen-reader-feedback-after-submit) in Standards and best practice, Webforms.
- [Disappearing toast notifications]({{site.baseurl}}/docs/topics/design/avoid/toasts/) in Standards and best practice, Design & user experience.
- [Screen reader testing]({{site.baseurl}}/docs/testing/screen-readers/) in Test for accessibility.

{: .resource-h3}
### Other resources

- The NPM Module [@wordpress/a11y](https://www.npmjs.com/package/@wordpress/a11y) on npmjs.com. 
- [@wordpress/a11y package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-a11y/) in Accessibility utilities for WordPress, Block Editor Handbook.
- [Let WordPress Speak, new in WordPress 4.2](https://make.wordpress.org/accessibility/2015/04/15/let-wordpress-speak-new-in-wordpress-4-2/) by Joe Dolson and Andrea Fercia, introducing and explaining the method.
- [WordPress speaks with wp.a11y.speak](https://foxland.fi/wordpress-speaks-wp-a11y-speak/) by Sami Keijonen, explanation, examples in GitHub and a demo site.
- [Why are my live regions not working?](https://tetralogical.com/blog/2024/05/01/why-are-my-live-regions-not-working/) by Patrick H. Lauke.
- [Live Region Support](https://adrianroselli.com/2026/01/live-region-support.html) by Adrian Roselli.

