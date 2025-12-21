---
title: Accessible audio, video, and animations
layout: default
parent: Theme Accessibility Guidelines
description: Support for audio, video, and animations in accessibility-ready themes
nav_order: 11
---

# Accessible audio, video, and animations

## Basic principle

All forms of multimedia have specific accessibility requirements, and any support for multimedia in a theme must meet those requirements. Themes are not responsible for the content of multimedia; but any demo media included should meet accessibility requirements.

The basic requirements are:

1. Three Flashes: No animation or video can flash more than three times in any one second period. Rapid flashing can trigger seizures, dizziness, nausea, or migraines.  
2. Motion animation triggered by interaction can be disabled. (Level AAA)  
3. Any automatically initiated moving, blinking, or auto-updating information can be paused, stopped, or hidden.

**Note**: It is difficult to test the three-flash rule. The simplest test, for CSS or JS animation, is to look at the source code and check the timing frequency; this will not work for a demo video. In general, any *potentially* risky animation should be considered a failure.

## Testing

**Tools:** Theme settings, keyboard, screen reader, browser inspector.

1. Interact with all controls and observe whether a repeating animation is triggered. Very small animations can be ignored, such as a transition shift between colors or minor border movement.  
2. If the theme supports a hero video, add a test video as the hero.  
3. Verify that the video provides controls allowing you to pause the video. The controls should meet all other accessibility requirements concerning keyboard accessibility and accessible naming.  
4. If the theme offers a carousel interface or similar, verify that if it auto-updates by default, this behavior can be paused. The controls should meet all other accessibility requirements.  
5. Scroll up and down the page to observe whether any parallax animations or other animation changes occur on scroll. If so, verify whether they can be paused.  
6. Enable your operating system’s options to reduce animations. Repeat the previous test to verify that existing animations do not occur or are significantly reduced.  
   1. On Windows 11: Go to Settings \> Accessibility \> Visual Effects \> Animation Effects.  
   2. On macOS: Navigate to System Preferences \> Accessibility \> Display \> Reduce motion.

## WCAG resources

* [Understanding: Pause, Stop and Hide.](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)  
* [Understanding: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)  
* [Understanding: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)