---
title: Disappearing toast notifications
layout: default
parent: Patterns to avoid
description: In able to get the message on a toast, the user must notice the message appear on the screen and have time enough to read it. This may not work for all users for disappearing toasts.
nav_order: 3
contributors:
  - Rian Rietveld
---

# Patterns to avoid: Disappearing toast notifications

There are different ways to dynamically provide a user with information. Methods might include using a banner, a snackbar, or a toast. What are the differences, and what is important to ensure all users get the same information?

## Banners, snackbars, and toasts

What is the difference?

- A **banner** is a message of one or more paragraphs that appears on top of the screen and stays there until dismissed by the user. It can contain actions such as Close, Undo, or Retry, as well as links.
- A **snackbar** is a short message that appears at the bottom of the screen or close to the user's focus and can contain one or more actions. A snackbar preferably stays on screen until dismissed by the user.
- A **toast** is a short message that appears on screen and disappears after a few seconds.

## Accessibility concerns of toasts

In order to receive the message in a toast, the user must notice it appear on the screen and have enough time to read it.

Because a toast disappears, the user must have **enough time** to spot it and then read it. Chances are that the user is busy with another task on the page and misses the message altogether. Also, not everyone reads fast; the reader may see the message too late or doesn't have enough time to read what it says. 

The disappearing message cannot be read again; the information is lost after a few seconds.

**Delaying** the disappearance of the message on hover or focus can help, but the user must know this is possible, and a keyboard user may not have enough time to tab to the toast before it disappears.

If a user is **zoomed in** the messages may fall outside the viewport or be overlapped by other elements.

Another concern is that **screen reader users** won't receive the message at all if it isn't announced using, for example, `aria-live="polite"` or `role="status"`.

Adrian Roselli wrote an extensive article [Defining ‘Toast’ Messages](https://adrianroselli.com/2020/01/defining-toast-messages.html) about its accessibility issues.

These are not only accessibility concerns but also usability issues.

<div class="info callout">
  <blockquote cite="https://yatil.social/@yatil/117100482844913801">
    <p> How many days of my life have I wasted in wait to get a confirmation for an action only to see in the corner of my eye on my 27-inch screen that a toast message has just disappeared?</p>
    <p>Please, for the love of kittens: Stop using toast messages. Thank you.</p>
  </blockquote>
  <p> – Eric Eggert <cite>Mastodon</cite> </p>
</div>

## How to provide dynamic information

The best way to dynamically provide a user with information is to use a message component that stays on screen. Let the user close the status message manually or let it disappear when the user leaves the page or when it's no longer valid.

A common pattern is to add messages to a region in a consistent place, for example, at the top of the screen, close to the previous user interaction, or, for form error messages, just above the form. 

Test if the message stays visible when a user zooms in or enlarges the text by using [reflow](https://www.w3.org/WAI/WCAG22/quickref/#reflow) or [text only](https://www.w3.org/WAI/WCAG22/quickref/#resize-text).

Announce a dynamically generated message with, for example, `aria-live="polite"` or `role="status"` to inform the screen reader user too. 

For WordPress core, you can use `wp.a11y.speak()` and for the Block editor `speak()` to announce the message. The topic [Feedback on dynamic changes]({{site.baseurl}}/docs/topics/code/dynamic-changes/) provides you with more information on how to do this in WordPress.

Then you are ensured all users will notice the information and have time enough to read and even re-read it.

## Summarized

Make sure that:
- The message always appears in a consistent and easy-to-discover position on the screen.
- The message stays on screen until the user dismisses it, or after a page reload.
- The message isn't overlapped by other elements or falls outside the viewport when the user zooms in or enlarges the text.
- The message is announced by a screen reader. 

## Banners, snackbars, and toasts in WordPress code

WordPress core provides a few options for displaying dynamic messages; when you use these, test for the accessibility issues mentioned above first.

To print admin screen notices: [do_action( ‘admin_notices’ )](https://developer.wordpress.org/reference/hooks/admin_notices/).

For Gutenberg:
- [Notice](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/notice), to communicate prominent messages to the user.
- [Snackbar](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/snackbar), to communicate low-priority, non-interruptive messages to the user. 
  **Note**: set `explicitDismiss` to `true`.

### Examples in WordPress of dynamic messages

#### Update a theme

Updating themes in the WordPress Admin is done well; the new message is announced by a screen reader and is easy to spot.

![Notification: New version available]({{site.baseurl}}/assets/images/theme-update-now.png)

After pressing the link "Update now", the message is replaced by "Updated!".

![Notification: Updated]({{site.baseurl}}/assets/images/theme-updated.png)

The screen reader feedback is added to the `a11y-speak-polite` region in the HTML at the bottom of the page with aria-live="polite":

```html
<div id="a11y-speak-polite" class="a11y-speak-region" style="position:absolute;margin:-1px;padding:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);border:0;word-wrap:normal !important;" aria-live="polite" aria-relevant="additions text" aria-atomic="true">
    Update completed successfully.
</div>
```

#### Update a post

After updating a post, the snackbar "Post updated" with a "View Post" link appears at the bottom of the page for a few seconds and then disappears. The text is announced by a screen reader, but this pattern needs improvement. The message should not disappear.

![Notification: Post updated with a link to View Post]({{site.baseurl}}/assets/images/post-updated.png)

## Resources

### WCAG Success Criteria related to banners, snackbars, and toasts

- [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/quickref/#resize-text) (Level AA).
- [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/quickref/#reflow) (Level AA).
- [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable) (Level A).
- [2.2.3 No Timing](https://www.w3.org/WAI/WCAG22/quickref/#no-timing) (Level AAA).
- [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/quickref/#status-messages) (Level AA).

### Related pages in this documentation

- [Feedback on dynamic changes]({{site.baseurl}}/docs/topics/code/dynamic-changes/) in Standards and best practice, Frontend code.
- [Provide feedback to screen reader users on form errors]({{site.baseurl}}/docs/topics/forms/feedback/screen-reader-feedback/) in Standards and best practice, Web forms.
- [Screen reader testing]({{site.baseurl}}/docs/testing/screen-readers/) in Test for accessibility.

### Other resources

- [Defining ‘Toast’ Messages](https://adrianroselli.com/2020/01/defining-toast-messages.html) by Adrian Roselli.
- [Accessible notifications and messages: Toasts](https://primer.style/accessibility/patterns/accessible-notifications-and-messages/) on Primer, the design system for GitHub.
- [A toast to an accessible toast](https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html) by Scott O'Hara.
- [Toast Notification Accessibility](https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/) by Design System Problems.
- [Toasts, Snackbars, and WCAG Compliance](https://www.linkedin.com/pulse/toasts-snackbars-wcag-compliance-arpita-banerjee-cpacc-fjt1c/) by Arpita Banerjee.
- [Snackbar vs toast: decoding the subtle differences in design systems](https://medium.com/design-bootcamp/ux-blueprint-01-snackbar-vs-toast-decoding-the-subtle-differences-in-design-systems-8ad82ff61115) by Hizkia St.
- [Toast vs Snackbar vs Banner: Which One Should You Use?](https://supercharge.design/articles/toast-vs-snackbar-vs-banner) on Supercharge design.
