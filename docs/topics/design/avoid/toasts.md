---
title: Toasts
layout: default
parent: Patterns to avoid
description: In able to get the message on a toast, the user must notice the message appear on the screen and have time enough to read it. This may not work for all users.
nav_order: 3
contributors:
  - Rian Rietveld
---

# Patterns to avoid: Toasts

<div class="callout">
  <blockquote cite="https://adrianroselli.com/2020/01/defining-toast-messages.html">
    <p>
      A toast is a message that appears on the screen; it is often short, often appears only briefly, and often animates up from the bottom (like a piece of ghostly yet precisely-crafted toast), though other directions and a fade-in/-out is common.
    </p>
  </blockquote>
<p>— Adrian Roselli <cite><a href="https://adrianroselli.com/2020/01/defining-toast-messages.html">Defining ‘Toast’ Messages</a></cite></p>
</div>

## Accessibility concerns

In able to get the message on a toast, the user must notice the message appear on the screen and have time enough to read it.

Because a toast disappears, the user must have **enough time** to spot it and after that read it. Chances are that the user is busy with another task on the page and misses the message all together. Also, not everyone reads fast, the reader may see the message too late or doesn't have enough time to read what it says. 

The disappearing message cannot be read again, the info is lost after a few seconds.

Another concern is that screen reader users don't get the message at all. **Announce a dynamic change** with for example `aria-live="polite"` or `role="status"`, to inform the screen reader user of the message user too. 

**Pausing** the disappearance of the message on hover or focus can help, but the user must know this can be done, and a keyboard user may have not enough time to tab to the toast before it disappears.

If a user is **zoomed in** either by [reflow](https://www.w3.org/WAI/WCAG22/quickref/#reflow) or [text only](https://www.w3.org/WAI/WCAG22/quickref/#resize-text), the messages may fall outside the viewport or may be overlapped by other elements.

These are not only accessibility concerns but also usability issues.

## Status messages

The best way to give a user information dynamically is to use a status message that stays on the screen. Let the user close the status message manually or let it disappear when the user leaves the page. Announce the message for a screen reader user. 

A common pattern is to add messages to a region in a consistent place, for example, at the top of the screen or, for form error messages, just above the form. Test if the message stays visible when a user zooms in or enlarges the text.

The topics [Feedback on dynamic changes]({{site.baseurl}}/docs/topics/code/dynamic-changes/) and [Feedback on dynamic changes]({{site.baseurl}}/docs/topics/code/dynamic-changes/) provide you with information on how to do this in WordPress.

Then you are ensured all users will notice the information and have time enough to read and even re-read it.

## Resources

### WCAG Success Criteria related to toasts

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
- [Toast Notification Accessibility](https://designsystemproblems.com/accessibility-compliance/toast-notification-accessibility/) by Design System Problems.
- [Toasts, Snackbars, and WCAG Compliance](https://www.linkedin.com/pulse/toasts-snackbars-wcag-compliance-arpita-banerjee-cpacc-fjt1c/) by Arpita Banerjee.
