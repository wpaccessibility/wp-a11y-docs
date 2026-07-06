---
title: Screen reader
layout: default
parent: Test for accessibility
description: Learn how to use a screen reader to test for accessibility.
nav_order: 7
---

# Screen reader testing

Important content that changes dynamically, like JavaScript generated error messages or content, must also be announced for screen readers. The best way is to test this with a screen reader like Apple VoiceOver (for Mac) or NVDA (for Windows). Listen to your website!

## Test feedback on dynamic changes

When using interactive scripts to update content or states of interactive elements, check:

- DOM updates: Interactive scripts correctly update the DOM in response to user actions. Check if the relevant content is added to or changed within an `aria-live` region or `aria-describedby` form error message.
- ARIA states: ARIA attributes like `aria-expanded` or `aria-invalid` accurately reflect the current UI state after each interaction.

Verification methods:

- Use a screen reader to confirm announcements match the actual state changes.
- Use browsers inspect panel to check the accessibility tree and live ARIA values.

## Which screen reader should I test in?

[NVDA](https://www.nvaccess.org/download/) is an excellent, free, open source, screen reader for Windows 10 and later. If you enjoy this screen reader, consider a [donation to NVDA](https://www.nvaccess.org/support-us/).

[JAWS Screen Reading Software](https://support.freedomscientific.com/Downloads/JAWS), by Freedom Scientific, is a subscription-based screen reader for Windows. Life hack: you can run [JAWS in a 40-minute demo-mode](https://www.freedomscientific.com/training/enterprise/activating-software-licenses/) for free for testing. After that you need to reboot your system to run JAWS in demo-mode again.

[Narrator for Windows](https://support.microsoft.com/en-us/accessibility/windows/narrator/complete-guide-to-narrator), by Microsoft, is built into Windows. Use Narrator in the browser Edge for website testing.

[VoiceOver](https://www.apple.com/voiceover/) is built into macOS. Use VoiceOver in the browser Safari for website testing. While we know that many developers work primarily on macOS, testing only with Apple’s VoiceOver is not enough in some cases. VoiceOver, while fairly common, has some non-standard interpretations of accessibility interactions that aren’t the most accurate representation of average user experience.

The screen readers [ChromeVox for Chromebook](https://support.google.com/chromebook/answer/7031755?hl=en) and [Orca](https://orca.gnome.org/) for GNOME don’t perform well enough as a screen reader, at this moment, to give representative test information.

## Resources

There are many excellent articles on how to use and test with a screen reader. Keep in mind that the best screen reader testing is by users who use a screen reader regularly for their interactions with the web; you can do your own testing, but it is not a substitute for real user tests.

- [Testing with Screen Readers: Questions and Answers](https://webaim.org/articles/screenreader_testing/), on WebAIM.
- [Screen reader keyboard shortcuts and gestures](https://dequeuniversity.com/screenreaders/) by Deque university.
- [Basic screen reader commands for accessibility testing](https://www.tpgi.com/basic-screen-reader-commands-for-accessibility-testing/), by Léonie Watson.
- [Five Screen Reader Accessibility Tests Your QA Team Should Do](https://vispero.com/resources/five-screen-reader-accessibility-tests-your-qa-team-should-do/), An introduction to fundamental screen reader tests by Charlie Pike.
- [Using NVDA to Evaluate Web Accessibility](http://webaim.org/articles/nvda/), on WebAIM.
- [Using JAWS to Evaluate Web Accessibility](http://webaim.org/articles/jaws/), on WebAIM.
- [Using Narrator and Dev Mode](https://learn.microsoft.com/en-us/shows/one-dev-minute/using-narrator-dev-mode), by Microsoft.
- [Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/), on WebAIM.
- [VoiceOver cheat sheet](http://pauljadam.com/demos/iosvocheatsheet.html), by Paul J. Adam.
- [VoiceOver Getting Started](https://help.apple.com/voiceover/info/guide/10.8/English.lproj/), by Apple.
