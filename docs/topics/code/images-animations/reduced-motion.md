---
title: Reduced motion
layout: default
parent: Images and animations
nav_order: 3
---

# Setting reduced motion for animations

Animations can cause a variety of symptoms in many users, ranging from mild dizziness to triggering migraines and nausea. You can help users avoid these problems by making all of your animations support the `prefers-reduced-motion` flag.

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

## Resources

- [Respecting “Prefers Reduced Motion” with JavaScript and React](https://since1979.dev/respecting-prefers-reduced-motion-with-javascript-and-react/), by Stephan Nijman
- [Prefers-reduced-motion ](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)from MDN Web Docs
