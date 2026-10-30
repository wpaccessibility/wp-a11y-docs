---
title: Your inaccessible WP site is running a tab
layout: default
parent: Accessibility, the business case
description: How much is your client spending on support contacts from users who could not complete a task on the website you built?
contributors:
  - Anne-Mieke Bovelett
nav_order: 3
---
# Your client's inaccessible WordPress site is running a tab. Here's what's on it.

You built a WordPress site, and your client is not subject to the European Accessibility Act (EAA). They have fewer than ten employees, their turnover is under €2 million, they sell B2B, or they are not selling anything at all, and you both know the compliance argument does not apply here.

So let me ask you about a different argument entirely.

How much is your client spending on support contacts from users who could not complete a task on the website you built?

They probably do not know. Their CX (Customer Service) report does not explain it, and their support ticket system categorizes it as "general inquiry" or "website question." Nobody has connected the unlabelled form field, the modal that a screen reader cannot close, the filter that only works with a mouse, or the PDF that exported without tags, to the phone calls those barriers generate every single month.

But the bill is running, and it has been running since launch day.

## The cost structure nobody talks about

Before the scenarios, the numbers need to land. According to [Gartner's benchmarks on customer service costs](https://www.gartner.com/en/documents/5164231), the median cost of a self-service contact is $1.84, and the same contact handled through a live channel, whether phone, chat, or email, costs $13.50. That is a factor of seven, and every user who hits a wall in self-service and calls instead costs roughly eleven euros more than if they had managed it alone.

That difference is the accessibility tax. It is charged per contact, it runs every month, and it does not care whether the EAA applies.

## Scenario 1: The WooCommerce shop that doesn't need to comply and loses around €6,600 a year

Let's take a Dutch WooCommerce shop. It's "just" mid-size and has around 40,000 transactions a year, which puts it comfortably inside EAA exemption territory. A contact form, a help page, and a support inbox that the team handles.

The support volume is around 800 inbound contacts a month. Some of those are returns and complaints, but a meaningful share are users who could not do something themselves: find a product, complete a checkout, understand a delivery status page, work out how a filter operates, or read a comparison table on a mobile screen, for example.

A Dutch customer service employee working at an online help desk earns on average between €14.50 and €18.50 gross per hour. A typical support contact for a small e-commerce operation takes around eight minutes end-to-end, so at a mid-point of €16.50 an hour, that is roughly €2.20 per contact.

### At 800 contacts a month, the total handling cost is around €21,120 a year.

Now here is the question your client is not asking: how many of those 800 monthly contacts are avoidable? 

 i'm not talking about the complaints or the returns here. The contacts I meet are the ones where someone simply could not figure out how to do something on the website. A conservative estimate, based on what the research consistently shows about inaccessible digital journeys, puts that share at 30 to 40 percent, so call it 250 contacts a month. At €2.20 each, that is €550 a month, or €6,600 a year in avoidable support handling cost, from a website that does not legally need to be accessible. And to be clear: that is based on gross salary alone, not total employer cost, so the real figure is much higher.

€6,600 covers a focused accessibility audit. It covers a sprint of targeted remediation work, and it covers the WCAG training your client's team never got. And it would repeat as recovered cost every year after the remediation.

So now you see, the exemption may have saved your client from a compliance conversation, but it did not save them from losing a lot of money on overhead.

## Scenario 2: The B2B portal where "accessibility is a consumer topic" and loses around €18,000 a year

The assumption I hear most often in B2B is that digital accessibility is a consumer-facing problem, because procurement managers are not retail shoppers and enterprise buyers work differently. However, the data disagrees.

According to the [Qualtrics XM Institute State of B2B Customer Experience Management Report 2025](https://www.qualtrics.com/research/b2b-cx-management-2025/), service and support handling is the most commonly broken customer journey in B2B organizations, cited by 50% of respondents, and it ranked above delivery and deployment, account relationship management, and product quality. Support is the top broken journey in B2B, and the organizations experiencing it mostly cannot explain why.

Now model that against a B2B SaaS platform built on WordPress with 200 client accounts and 600 active users. The help documentation lives in a custom post type, the account settings page was designed on a high-resolution MacBook screen where thin fonts and low contrast look perfectly fine, and tested only by clicking through it with a mouse. The product spec downloads are PDFs generated from a template that has never been reviewed for tags or reading order.

A procurement manager navigating the portal with a wrist injury uses keyboard navigation. A buyer with low vision or color blindness needs to read a spec comparison without relying on color differentiation alone. A product description hiding in a video with spoken text without closed captions and a proper transcript won't come across if the user can't listen to the video. These users do not disappear. They open a support ticket (if you're lucky. If not, you lose them to another B2B portal that does better).

Whether you are exempt from rules and regulations in your country based on the European Accessibility Act actually doesn't matter at all. You may be exempt because you solely operate B2B, but as you can see, being a B2B business also means the cost per contact is higher. 

In B2B, support contacts are more expensive than in e-commerce because they involve more specialized staff and longer handling times. If 15% of the monthly ticket volume traces back to interface barriers, and the platform handles 400 tickets a month, that is 60 avoidable tickets a month. At a conservative €25 per ticket to resolve end-to-end, that is €1,500 a month and €18,000 a year.
## Scenario 3: The organization that isn't selling anything, throwing around €20,000 a year in the bin

"We don't have customers. We have members, residents, beneficiaries. We are not a webshop."

That reasoning holds right up until someone calls because they could not fill in the PDF intake form.

Take a Dutch housing association with 8,000 tenants. Their tenant portal handles maintenance requests, rent payments, and address changes, and their communication materials are PDFs, typically created in Word and exported without accessibility tags, which means screen readers encounter them as unstructured noise. The portal was built on WordPress, the theme looked fine in the browser, and the keyboard navigation was never tested.

A tenant who cannot use the portal calls the service line instead. Benchmarking Publiekszaken, the benchmark program run in partnership with the VNG and NVVB, puts the cost of a telephone contact at a municipality at around €14, and housing associations operate in a comparable range. If the housing association receives 600 inbound contacts a month and a conservative 20% trace back to navigating the portal or interpreting a PDF, that is 120 avoidable contacts at €14 each, so €1,680 a month and €20,160 a year.

Of course that is not revenue at risk. But is is operating cost, drawn from service charges and housing budgets, and the conversation about not needing to comply did not touch it.

## Scenario 4: The municipal website, annually burning €210,000 in tax payers money

This is the one I find it hardest to stay calm about.

A Dutch municipality of 80,000 residents. Their WordPress site contains forms for permits, benefits, parking dispensations, care applications, and school registrations. The PDFs are generated from legacy systems and exported without tags, the forms have unlabelled fields, and the navigation fails keyboard users on several key pages. The site passed a visual design review and has never been tested with a screen reader or keyboard alone.

Dutch municipalities manage their contact costs using Benchmarking Publiekszaken figures: a digital self-service contact costs under €1, a telephone contact costs around €14, and a counter visit costs €26 or more. A municipality of this size receives somewhere in the range of 12,000 to 18,000 inbound contacts per month across all channels, and research on broken digital journeys consistently suggests that 20 to 30 percent of contacts arriving by phone or at the counter began as failed digital self-service attempts.

Take the lower end. At 15,000 contacts a month with 25% arriving via phone or counter because the digital journey failed, that is 3,750 contacts a month shifting from a sub-€1 channel to a €14-plus channel, or €52,500 per month in assisted contact costs from avoidable digital failures. Per year: €630,000.

The Netherlands has 342 municipalities. According to the [DigiToegankelijk Jaarmonitor 2024](https://www.digitoegankelijk.nl/nieuws/jaarmonitor-digitale-toegankelijkheid-2024-gelanceerd) (in Dutch), the official Dutch government accessibility monitoring program, more than half of all government digital channels still did not meet the legal accessibility standard at the end of 2024. For municipalities specifically, the VNG Monitor confirms that full compliance remains the exception. That means the cost structure above applies across the majority of the 342, not as a worst-case assumption but as a documented baseline.

Scale that across even half of those municipalities and a conservative estimate puts the national figure at over €35 million a year in avoidable support costs attributable to accessibility barriers. That is tax payers money. All of it.

## The users you never hear from

The scenarios above only count the users who escalated, and they don't count the ones who gave up.

According to a [2023 Yext study of German consumers](https://www.yext.com/de/about/news-media/support-survey-2023), one in five people who used a help page bought from a different company because the search function was not useful, and among 18 to 34 year olds that figure rises to 36%. These users do not appear in the support queue. They appear in the churn rate, and nobody connects the two.

The [Qualtrics XM Institute Consumer Trends Report 2024](https://www.qualtrics.com/research/consumer-trends-2024/), based on 28,400 consumers across 26 countries, found that customers who experience excellent digital support are 2.7 times more likely to return, which is the highest return multiplier of any channel and journey combination in the study, and that digital support satisfaction currently sits 22 percentage points below purchase satisfaction. For German consumers specifically, the [Qualtrics XM Institute ROI of Customer Experience Report 2025](https://www.qualtrics.com/research/roi-customer-experience-2025/) found that only 19% intend to purchase more after a poor experience, and after an excellent experience 56% do. That is a factor of three, and it is the lowest repurchase intent after poor experiences of any country in the same study.

Inaccessibility produces poor experiences, systematically, for a portion of every user base. And that portion is larger than most organizations assume, because it includes not only users with permanent disabilities but users with temporary injuries, older users, users on slow connections, users on mobile devices, and users who are simply tired, have a headache, or are in a temporary stressful situation.

## What this has to do with the website you built

If you are a WordPress developer, freelancer, or agency reading this, there is a layer here that goes beyond your client's business.

Every WordPress product you deliver runs inside someone else's cost model. The inaccessible checkout on the WooCommerce shop generates support contacts your client pays for. The untagged PDF template on the housing association site generates phone calls the tenants' service charges fund. The municipal forms with unlabelled fields generate counter visits paid for by residents who had no idea their tax money was covering the gap.

Your client may not connect any of that back to the website you built, because the support system categorizes it as general inquiry, the CX report measures it as a broken journey without identifying the cause, and the finance department sees the staffing cost without seeing the interface that generated it. But it connects, and it connected from launch day.

This is not a compliance argument. Compliance arguments depend on thresholds and enforcement and legal risk, and this argument is simpler than that. The interfaces you build either help users complete tasks or they do not, and when they do not, someone pays. Usually it is your client, and sometimes it is the public.

An accessible form is a cleaner form. Correct heading hierarchy is clearer navigation. Labelled fields, proper focus management, and keyboard-navigable components are things that reduce friction for every user, not a special category of user, and when you build them correctly your client's support queue gets shorter. That is a concrete, measurable outcome that has nothing to do with whether the EAA applies.

## The number that puts this in context

For a WooCommerce shop with 40,000 annual transactions and a conservative 20% of inbound contacts tracing back to interface barriers:

|Metric|Amount|
|---|---|
|Monthly inbound support contacts|800|
|Contacts attributable to interface barriers (30%)|250|
|Average gross hourly wage (mid-point)|€16.50|
|Average handling cost per contact (8 min)|€2.20|
|Monthly avoidable support cost|€550|
|Annual avoidable support cost|€6,600|
|Cost of a focused audit and remediation|€3,000 to €6,000|
|Payback period|12 to 18 months|
After the first payback cycle, the remediation recovers its cost every year, and this model uses gross salary figures rather than total employer cost. The real figures are higher. For a mid-size municipality, replace 250 contacts with 3,750 and replace €2.20 with €14, and you do not need a different argument, just different inputs.
## The exemption question, settled

Compliance exemptions describe when a regulator can enforce against you, and they say nothing about what your inaccessible interface costs in practice. A keyboard user who cannot complete a checkout does not check your employee headcount before abandoning, and a screen reader user who cannot navigate your form does not pause because your annual turnover is under €2 million. The barrier is there regardless, the escalation happens regardless, and the cost lands regardless.

The EAA sets a floor on what regulators can require, but it does not set a ceiling on what your clients are allowed to save.

The support costs are already in the budget, the staff are already there, and the handling overhead is already running. Accessibility does not add a line item. It removes contacts from the expensive channel and moves them to the cheap one, and the only question is whether your client is paying for that shift to happen, or paying for the contacts that keep arriving because it has not.

Most of the fixes involved are not expensive. The expensive part is the years of avoidable contacts that accumulate while the form field stays unlabelled, the PDF stays untagged, and the modal stays impossible to close with a keyboard. The broken journeys are in your client's support queue right now, and accessibility is what explains them and what fixes them.

## Resources

- [Gartner, Benchmarks to Assess Your Customer Service Costs](https://www.gartner.com/en/documents/5164231).
- [Qualtrics XM Institute, Consumer Trends Report 2024](https://www.qualtrics.com/research/consumer-trends-2024/). 
- [Qualtrics XM Institute, Consumer Journeys Needing Improvement 2025](https://www.qualtrics.com/research/journeys-improve-2025/). 
- [Qualtrics XM Institute, ROI of Customer Experience 2025](https://www.qualtrics.com/research/roi-customer-experience-2025/). 
- [Qualtrics XM Institute, State of B2B CX Management 2025](https://www.qualtrics.com/research/b2b-cx-management-2025/). 
- [Yext, Customer Service Study Germany 2023](https://www.yext.com/de/about/news-media/support-survey-2023). 
- Benchmarking Publiekszaken / VNG, contactkosten gemeenten (institutional benchmark, no public URL).
