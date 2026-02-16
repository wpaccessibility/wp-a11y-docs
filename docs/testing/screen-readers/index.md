---
title: Screen reader
layout: default
parent: Test for accessibility
nav_order: 7
---

# Screen reader testing

Content that changes dynamically during time, like JavaScript generated error messages or content, must also be announced for screen readers. The best way is to test this with a screen reader like Apple VoiceOver (for Mac) or NVDA (for Windows). Listen to your website!

While we know that many developers work primarily on MacOS, testing only with Apple’s VoiceOver is not sufficient. VoiceOver, while fairly common, has many non-standard interpretations of accessibility interactions that aren’t the most accurate representation of average user experience.

### Screen reader testing

There are numerous excellent articles on how to test with and for a screen reader. Keep in mind that the best screen reader testing is by users who use a screen reader on a regular basis for their interactions with the web; you can do your own testing, but it is not a substitute for real user tests.

- [Testing with Screen Readers: Questions and Answers](https://webaim.org/articles/screenreader_testing/) on WebAIM.
- For Mac (native for iOS): [Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/) on WebAIM.
- [VoiceOver cheat sheet](http://pauljadam.com/demos/iosvocheatsheet.html) by Paul J. Adam
- [VoiceOver Getting Started](https://help.apple.com/voiceover/info/guide/10.8/English.lproj/) by Apple.
- For Windows (free, open source): [Using NVDA to Evaluate Web Accessibility](http://webaim.org/articles/nvda/) on WebAIM.
- For Windows: [Using JAWS to Evaluate Web Accessibility](http://webaim.org/articles/jaws/) on WebAIM.
- [Screen reader keyboard shortcuts and gestures](https://dequeuniversity.com/screenreaders/) by Deque.
- [Basic screen reader commands for accessibility testing](https://www.tpgi.com/basic-screen-reader-commands-for-accessibility-testing/) by Léonie Watson.
- [Five Screen Reader Accessibility Tests Your QA Team Should Do](https://vispero.com/resources/five-screen-reader-accessibility-tests-your-qa-team-should-do/) – An introduction to fundamental screen reader tests by Charlie Pike.


### Best screen reader / browser combinations

- VoiceOver with Safari,
- NVDA with Chrome or FireFox
- JAWS with Chrome, Edge or FireFox
- Windows Narrator with Edge

The screen readers ChromeVox and Orca don’t perform well enough as a screen reader, at this moment, to give representative test information.
