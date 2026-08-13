---
title: Disappearing toasts
layout: default
parent: Patterns to avoid
description: In able to get the message on a toast, the user must notice the message appear on the screen and have time enough to read it. This may not work for all users for disappearing toasts.
nav_order: 3
contributors:
  - Rian Rietveld
---

# Patterns to avoid: Disappearing toasts

There are different ways to give a user information dynamically. By using a banner, a snackbar, and a toast. What is the difference and what is important to give all users the same information?

## Banners, snackbars, and toasts

What is the difference?

- A **banner** is a message of one or more paragraphs that appears on top of the screen and stays there until dismissed by the user. It can contain actions like Close, Undo, or Retry and also links.
- A **snackbar** is a short message that appears at the bottom of the screen or close by the user's focus and can contain one or more actions. A snackbar preferably stays on screen until dismissed by the user.
- A **toast** is only a short message that appears on screen and disappears again after a few seconds.

## Accessibility concerns of toasts

In able to get the message in a toast, the user must notice the message appear on the screen and have time enough to read it.

Because a toast disappears, the user must have **enough time** to spot it and after that read it. Chances are that the user is busy with another task on the page and misses the message all together. Also, not everyone reads fast, the reader may see the message too late or doesn't have enough time to read what it says. 

The disappearing message cannot be read again, the information is lost after a few seconds.

**Pausing** the disappearance of the message on hover or focus can help, but the user must know this can be done, and a keyboard user may have not enough time to tab to the toast before it disappears.

If a user is **zoomed in** either the messages may fall outside the viewport or may be overlapped by other elements.

Another concern is that **screen reader users** don't get the message at all when it is not announced by for example `aria-live="polite"` or `role="status"`.

Adrian Roselli wrote an extensive article [Defining ‘Toast’ Messages](https://adrianroselli.com/2020/01/defining-toast-messages.html) about its accessibility issues.

These are not only accessibility concerns but also usability issues.

## How to provide dynamic information

The best way to give a user information dynamically is to use a message component that stays on screen. Let the user close the status message manually or let it disappear when the user leaves the page or when it's no longer valid.

A common pattern is to add messages to a region in a consistent place, for example, at the top of the screen, close to the previous user interaction, or for form error messages, just above the form. 

Test if the message stays visible when a user zooms in or enlarges the text by using [reflow](https://www.w3.org/WAI/WCAG22/quickref/#reflow) or [text only](https://www.w3.org/WAI/WCAG22/quickref/#resize-text).

Announce a dynamic generated message with for example `aria-live="polite"` or `role="status"`, to inform the screen reader user too. 

For WordPress, you can use [wp.a11y.speak()](/docs/topics/code/dynamic-changes/) to announce the message. The topics [Feedback on dynamic changes]({{site.baseurl}}/docs/topics/code/dynamic-changes/) and [Feedback on dynamic changes]({{site.baseurl}}/docs/topics/code/dynamic-changes/) provide you with more information on how to do this in WordPress.

Then you are ensured all users will notice the information and have time enough to read and even re-read it.

## Summarized

Make sure that:
- The message always appears in a consistent and easy to discover position on the screen.
- The message stays on screen until the user dismisses it, or after a page reload.
- The message isn't overlapped by other elements of falls outside the viewport when the user zooms in or enlarges the text.
- The message is announced by a screen reader. 

## Banners, snackbars, and toasts in WordPress code

WordPress core provides a few options for displaying dymamic messages, when you use these, test for the accessibility issues mentioned above first.

To print admin screen notices: [do_action( ‘admin_notices’ )](https://developer.wordpress.org/reference/hooks/admin_notices/).

For Gutenberg:
- [Notice](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/notice), to communicate prominent messages to the user.
- [Snackbar](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/snackbar), to communicate low-priority, non-interruptive messages to the user. 
  **Note**: set `explicitDismiss` to `true`.

### Examples in WordPress of dynamic messages

#### Update a theme

Updating themes in the WordPress Admin is done well, the new message is announced by a screen reader and is easy to spot.

![Notication: New version available]({{site.baseurl}}/assets/images/theme-update-now.png)

After pressing the link "Update now" the message is replaced by "Updated!".

![Notication: Updated]({{site.baseurl}}/assets/images/theme-updated.png)

The screen reader feedback is added to the `a11y-speak-polite` region in the HTML at the bottom of the page with aria-live="polite":

```html
<div id="a11y-speak-polite" class="a11y-speak-region" style="position:absolute;margin:-1px;padding:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);border:0;word-wrap:normal !important;" aria-live="polite" aria-relevant="additions text" aria-atomic="true">
    Update completed successfully.
</div>
```

#### Update a post

After updating a post, the snackbar "Post updated" with a link to "View Post" appears for a few seconds at the bottom of the page and disappears again. The text is announced by a screen reader, but this pattern needs improvement. The message should not disappear.

![Notication: Post updated with a link to View Post]({{site.baseurl}}/assets/images/post-updated.png)

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
