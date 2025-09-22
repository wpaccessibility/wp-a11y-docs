---
title: Screen reader testing
layout: default
parent: Testing for accessibility
nav_order: 7
---

# Screen reader testing

{: .alert }
This content needs to be reviewed and expanded.  
Related issue on [GitHub #176 Topic Screen reader testing](https://github.com/wpaccessibility/wp-a11y-docs/issues/176).    
If you want to work on this, please let us know before you start.

Content that changes dynamically during time, like JavaScript generated error messages or content, must also be announced for screen readers. The best way is to test this with a screen reader like Apple VoiceOver (for Mac) or NVDA (for Windows). Listen to your website!

While we know that many developers work primarily on MacOS, testing only with Apple’s VoiceOver is not sufficient. VoiceOver, while fairly common, has many non-standard interpretations of accessibility interactions that aren’t the most accurate representation of average user experience.

### Screen reader testing

- [Testing with Screen Readers: Questions and Answers](https://webaim.org/articles/screenreader_testing/)
- [Screen reader keyboard shortcuts and gestures](https://dequeuniversity.com/screenreaders/)
- [Basic screen reader commands for accessibility testing](https://developer.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

### Best screen reader / browser combinations

- VoiceOver with Safari,
- NVDA with Chrome or FireFox
- JAWS with Chrome, Edge or FireFox
- Windows Narrator with Edge

The screen readers ChromeVox and Orca don’t perform well enough as a screen reader, at this moment, to give representative test information.

### How to use a screen reader

- [List of screen reader test tools](https://make.wordpress.org/accessibility/handbook/which-tools-can-i-use/useful-tools/#screen-reader-testing) in the Accessibility Handbook
- [VoiceOver Getting Started](https://help.apple.com/voiceover/info/guide/10.8/English.lproj/index.html)
- [VoiceOver cheat sheet](http://pauljadam.com/demos/iosvocheatsheet.html) by Paul J. Adam
- [NVDA](https://www.nvaccess.org/)
- [NVDA shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
