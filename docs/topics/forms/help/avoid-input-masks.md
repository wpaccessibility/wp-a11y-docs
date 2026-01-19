---
title: Avoid input patterns
layout: default
parent: Provide help
nav_order: 3
has_video: true
---

# Avoid input patterns on form fields

Make it as easy as possible for users to enter a value flexibly. A fixed input pattern (mask) may not be suitable for the answer a user wants to provide.

## What is the issue about input patterns?

When you force a user to enter data according to a fixed pattern it can cause confusion when their value to enter doesn't match the pattern.

A fixed pattern can even become a barrier to completing a form. 

For example:

- The phone number does not match the required pattern: the user wants to enter a foreign number, but that is not allowed.
- The user wants to add important information such as “call only in the afternoon,” but cannot.
- The user doesn't understand what is going wrong because, for example, letters cannot be entered and there is no good feedback explaining the error.
- Screen reader users may miss the visual information about how to fill out the form.

Note: There are situations where an exact input is required. In those cases, always clearly explain in the description how the field should be filled in.

## What is a pattern on an input field?

A pattern (mask) defines exactly how a form field must be filled out and doesn't allow any other input.

This can be done using the HTML pattern attribute in combination with JavaScript.

The pattern specifies what the value must look like exactly. JavaScript then checks that value, may adjust the layout, and blocks invalid input. How the user is expected to enter the value according to the desired pattern is then explained in the description or in a placeholder.

You can restrict a first-name input field to, for example, a minimum of 3 and a maximum of 12 characters. Too bad if your name is Jo or Claus-Casimir.

```html
<!-- Incorrect code, do not use -->
<input 
        id="firstname" 
        name="firstname" 
        type="text" 
        pattern="\w{3,16}" 
        autocomplete="given-name" 
/>
```

You can require a specific format for a phone number input field. Too bad if you no longer have a landline or want to provide an international number.

```html
<!-- Incorrect code, do not use -->
<input
    type="tel"
    id="telephone"
    name="telephone"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    placeholder="___-___-____"
    autocomplete="tel"
/>
```

## User experience and accessibility of input patterns

Adam Silver summarizes it well in his article [The problem with input masks and what to do instead](https://adamsilver.io/blog/the-problem-with-input-masks-and-what-to-do-instead/).

- The pattern may not be suitable for the answer the user wants to give.
- Enforced patterns are confusing: the cursor automatically jumps to the next position, and special characters such as -, (, or ) cannot be removed.
- A placeholder with an example can look like a pre-filled field.
- The placeholder with the example disappears while typing, and you no longer know how to complete the rest of the value.
- Because characters are removed or skipped, it can feel like something is going wrong without an immediate error message appearing.

In the article [Accessible input masking](https://giovanicamara.com/blog/accessible-input-masking/), Giovani Camara shows in the YouTube video [Allow users to edit anywhere](https://www.youtube.com/watch?v=rTk3XNSXJXY) what can go wrong when a user wants to change a value. The cursor can automatically jump to the end of the value while you want to edit the first character. This is annoying for everyone and leads to errors.

Indicating input patterns in a placeholder or in the value attribute can be very unclear for screen reader users. A series of underscores is not very informative. Watch and listen to Giovani Camara’s demo on YouTube using VoiceOver.
<video data-able-player data-youtube-nocookie="true" data-youtube-id="7WWQXGgRDLc" data-heading-level="0"></video>

If exact input is required, for example for a date of birth, provide an option that everyone can easily complete. 
 In addition, a [good description]({{site.baseurl}}/docs/topics/forms/help/valid-values/) and [clear error messages]({{site.baseurl}}/docs/topics/forms/feedback/error-message-text/) are important. Help the user and do not make them puzzle over how exactly to fill in a field or what went wrong again.

## Resources

### WCAG Success Criteria for descriptions

Providing good feedback about correctly entering data in form fields is necessary to meet the WCAG success criteria:

- [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/quickref/#error-identification) (Level A)
- [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion) (Level AA)

