---
layout: post
title: "Accessible error messages in forms"
permalink: /blog/2025/accessible-error-messages-forms/
author: Rian Rietveld
categories: forms
parent: Blog
excerpt: "When you put care into preventing errors and clearly indicating when something goes wrong, users are much more likely to successfully submit a form."
date: 2025-08-16
---

When you put care into preventing errors and clearly indicating when something goes wrong, users are much more likely to successfully submit a form.
{: .fs-6 .fw-300 }

In this post, we’ll walk step-by-step through how to prevent errors, indicate them clearly, and offer help with error messages in forms for different types of users.

When designing a form, ask yourself the following questions:

* What do I really need to know?
* How will I ask for this information?
* What information can I provide in advance to help the user?
* How do I show which fields are required?
* When do I check for errors?
* How do I indicate that an answer is incomplete or filled out incorrectly?
* What makes a helpful error message?
* How do I confirm that a form has been submitted successfully?
* How can I offer help when a user gets stuck?

No one enjoys filling out forms, and all the help you can give is useful. Keep that goal in mind. You want to learn something from your user, or your user wants to tell you something. Make that process as easy as possible.

## What do I really need to know?

Handling errors starts with the questions you ask. Some questions are difficult to answer. Is it really essential to know whether someone is male or female? Do you only want to contact them by phone? What if a user's answer to a question isn't an available option, or they don't want to answer a question? They may just give up.

Only ask for information you truly need in order to process the request. The fewer questions you ask, the lower the barrier for filling out the form.

Be clear about why you need sensitive personal information, such as an identification number, race, religion or medical data. Check your local legislation to see if you are allowed to request such private information in an open online form.

{: .note }
In the Netherlands there are strict rules about [when to ask for a citizen service number](https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN)). Canada has similar rules governing [how you can request Personally Identifying Information (PII)](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/). 


## How will I ask for this information?

The input mechanism you use to ask for information has a profound impact on your users. Should you design new custom input fields or use recognizable, familiar patterns? Please don’t reinvent the web for something as essential as form fields. As Heydon Pickering explains in his talk [Get Your Priorities Straight](https://www.youtube.com/watch?v=ediHVy0869c): “Real people aren't looking to be delighted. People want to get the task done and get on with their lives".

{: .example }
For example: users recognize radio buttons as circles and checkboxes as squares. They know from experience they can choose one option from the radio buttons and multiple options from the checkboxes. Also, the [keyboard interaction](https://webaim.org/techniques/keyboard/#testing) for radio buttons and checkboxes differs from each other. 

Some field types are better avoided due to poor usability, such as multi-selects. Using date pickers? Check the experience for keyboard or screen reader users.

Sometimes a simple solution works best for everyone. For example, KLM’s method for selecting a date with a text input for the day, a dropdown for the month, and another text input for the year:
![Date selection with a text field for day, a select for month, and a text field for year](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog_toegankelijker-foutmeldingen-date-picker.png)

For a deep dive into asking for dates in forms, see the GOV.UK Design System pattern library: [Ask users for Dates](https://design-system.service.gov.uk/patterns/dates/).

Don't force the user to enter information (like an email address) more than once, or expect them to remember entries entered on previous screens, like in a multistep form.

{: .note }
This success criterion was added in [WCAG 2.2: 3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html).

## What information can I provide in advance to help the user?

We’ve all been there: you enter a new password, click submit, and *then* you’re told what the password requirements are. You yell at the screen: “Why didn't you tell me that before?”.

The blog post [*Blind people don't visit my website*](https://www.a11y-collective.com/blog/blind-people-dont-visit-my-website/) lists frustrations from web users, such as:
> *"Error messages that come afterwards and eventually don't explain what you need to change."*

Don’t make users guess — offer clear help in plain language, at the right moment. Tell users in advance which documents they'll need, and which fields are or aren't required. Add descriptions to fields where necessary.

## How do I show which fields are required?

If you only ask what's really needed, all fields could technically be required — but that’s not always the case. Different types of forms have different needs. For example, if you're creating content in the admin of a website, all of the content fields you might use need to be available; but most of them won't be required. 

### What’s the best way to indicate required?

Many websites use indicators like “required”, “optional”, or an asterisk (\*). But which is clearest? 

Do user research for your language. For example in Dutch the word "optioneel" (optional) is hard to understand for people with low literacy, and "niet verplicht" (not required) is a better choice. This may be different for your language.

Prefer **“required”** over an asterisk, because an asterisk assumes prior knowledge of the meaning of that icon. If you do use an asterisk, explain its meaning above the form.

### Should I mark required or non-required fields?

Which is better? Indicate required or non-required fields? It depends. Your choice should be based on the form’s function, your CMS or plugin, and user research.

One option could be that when most fields are required, mark the *optional* ones. If most fields are not required, mark the *required* ones.

But, keep the way you indicate required/non-required fields consistent with all forms in your site.

{: .example }
For example: "Please complete all fields. If a field is not required, it will be labeled "(Optional)".

Whatever you choose, be consistent within the form and across all forms on your website. Inform users above the form how field requirements are indicated.

{: .note }
Please note: for **screen readers** is is  always necessary to add the attributes [`aria-required`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) and [`aria-invalid`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) for required form field.

## When should I check for errors?

Websites commonly check for errors while typing, after the focus moves out of a field, or after the form is submitted. Which approach is most user-friendly?

Checking during typing can be confusing. Imagine typing an email address and seeing “Invalid email address” after the first letter. Of course, it’s invalid, you haven’t finished yet! 

That leaves two options: check after leaving a field, or after submission. These can be combined. For certain fields, like dates that must be in the future, immediate checking is helpful. But checking after submission is always necessary.

{: .warning }
HTML5 form validation is not accessible at this moment. The W3C summarizes the options in [Validating Input ](https://www.w3.org/WAI/tutorials/forms/validation/). "If your web browser supports HTML5, it will not allow you to submit the form without entering text into the input field. Instead, it will display a message that is generated by the web browser itself".  Write custom error messages and provide server side generated error messages. The W3C explains the options in [Validating Input ](https://www.w3.org/WAI/tutorials/forms/validation/).

## How do I indicate that an answer is incomplete or filled out incorrectly?

Use more than color alone to indicate errors. A user with visual impairments or color blindness may not notice a red outline. Color is helpful but always include an error message in text too.

* Clearly state whether a field is required.
* Show errors with more than just color or an icon.
* Write out the error in text above the form field.
* Add a summary of all errors above the form  helps the user quickly see what needs to be corrected.


## What makes a helpful error message?

Messages like “This field is required” or “Invalid value” don’t offer much help. Write clear error messages that explain what’s missing or needs changing.

{: .example }
“Enter your first name”  
“Your chosen password is too short. It must be at least 8 characters long.”  
“The expiration date must be in the future.”

This is far more helpful than a vague generic message.


## How do I confirm a form was successfully submitted?

You click "Send" and… nothing happens. Or you're redirected to the homepage. Was the form actually sent? How do you know?

Give users clear confirmation that their form has been submitted and what will happen next. You can also include this messsage in a confirmation email.

{: .example }
A confirmation text could be:  
Thank you for your registration for our workshop "Knitting socks". A confirmation email has been sent to user@example.com with the time and location of the workshop. If you haven't received an email? [Please contact us](#).

## How can I offer help if a user gets stuck?

If a user gets stuck filling out a complex form, they need to be able to easily request help.

Don't hide contact details. They shouldn't be buried at the bottom of the form, or isolated on just one page of your site. Include a short sentence at the top of your form, and place contact information in predictable places in your site design. The footer is a common place to include additional contact information. 

Always offer multiple ways to get in touch on your contact page — not everyone can make a phone call.

{: .example }
A help text could be:  
Do you need help filling out this form or do you have questions? [Please contact us](#).

## Summary

Help your users as much as possible when filling out a form. Don't ask unnecessary questions just to collect for your statistics. Use standard input form fields wherever possible. Make it clear what is required and how to fill out a field. Use clear, timely error messages. And make sure it’s easy to ask for help when needed.

Remember: people want to get through a form quickly and move on with their lives. Make that task as easy as possible.

## Credits
This post was first published in Dutch on the [NL Design Systems blog](https://nldesignsystem.nl/blog/toegankelijke-foutmeldingen-formulieren/) and is used with permission. The text has been modified for a global audience.

