---
title: Link destinations
layout: default
parent: Links
description: Always tell a visitor what to expect when selecting a link.
nav_order: 4
contributors:
  - Joe Dolson
  - Rian Rietveld
---


# Link destinations

{: .tip .callout }
**Rule of thumb**: Always tell a visitor what to expect when selecting a link.

## Open a link in a new window or tab?

Opening a link in a new window or tab unexpectedly can disorient users. It also breaks the “back button”. The best practice is to let users decide if they want to open a link in a new tab or window.

![Screenshot of the WP Admin modal to insert or edit a link]({{site.baseurl}}/assets/images/new-tab.png)

Not all screen readers alert users when a new window or tab has opened and for those with cognitive disabilities, they may have trouble interpreting what’s happened.

This can be prevented by not checking “open link in a new target” on links, so they don’t trigger new windows or tabs to open.

If you absolutely need to open a link in a new window, you need to tell your visitor in the link text.

{: .callout .example }
For example:     
I love cats, so I watch [cat videos (opens in a new tab)](#) on YouTube.


## Link to a document

If the link opens a document, add the format of the document in the link text.

{: .callout .example }
For example:    
You can [download the manual as PDF](#).    
Please [download our terms (PDF, 3Mb)](#).

## Resources

### Related WCAG Success Criteria for links

By adding meaningful link text, you meet WCAG success criteria
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context) (level A).
- [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only) (level **AAA**).
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/#label-in-name) (level A).
- [3.2.5 Change on Request](https://www.w3.org/WAI/WCAG22/quickref/#change-on-request) (level **AAA)**.

### Other resources

- [Link Targets and 3.2.5](https://adrianroselli.com/2020/02/link-targets-and-3-2-5.html), by Adrian Roselli.
[Designing Better Links UX](https://smart-interface-design-patterns.com/articles/links-ux/) on Smart Interface Design Patterns.
- [Opening new windows and tabs from a link only when necessary](https://www.w3.org/WAI/WCAG21/Techniques/general/G200), by the W3C.
- [Creating the perfect link](https://www.a11y-collective.com/blog/the-perfect-link/), by The A11Y Collective.
