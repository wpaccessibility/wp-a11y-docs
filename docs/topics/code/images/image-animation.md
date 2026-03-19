---
title: Image animation
layout: default
parent: Images
description: Learn what is important for animation in images.
nav_order: 5
---

# Image animation and accessibility

For moving, blinking, scrolling, or auto-updating animation that starts automatically, make sure that:

- the animation doesn't last longer than 5 seconds and then stops,
- or the user can stop an animation themselves.

Make sure your animation doesn't contain anything that flashes more than three times in any one-second period.

These animations can cause a variety of symptoms in many users, ranging from mild dizziness to triggering migraines, nausea, and seizures.

Also, it's really hard to concentrate on reading text, when an animation next to it is screaming for attention and there is no way to stop it.

## Setting reduced motion for animations

You can help users avoid these problems by making all of your animations support the `prefers-reduced-motion` flag.

`prefers-reduced-motion` is a system preference that allows the user to indicate that they would prefer not to see animations. But this only works if the code properly supports it!

You can check for this system preference using the CSS media feature:

```css
@media (prefers-reduced-motion) {
    .animation {
        /*  adjust your animations if reduced motion is requested.  */
    }
}
```

Reduced motion doesn’t have to mean no animation at all, but it should be very minimal – no more than is absolutely necessary. When in doubt, eliminate the animation entirely.

You can check for the media query in JavaScript by checking the value of the media query:

```javascript
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
```

{: .warning .callout }
**Please note**: Not everyone is web savvy enough to activate reduced motion on their browser. Adding reduced motion only, is not enough to meet WCAG requirements.

## Resources

### WCAG Success Criteria for animations

- [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide) Level A
- [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold) Level A.

### Other resources

- [Respecting “Prefers Reduced Motion” with JavaScript and React](https://since1979.dev/respecting-prefers-reduced-motion-with-javascript-and-react/), by Stephan Nijman
- [Prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)from MDN Web Docs
- [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/), by TRACE RERC.

