---
title: AI agents and accessibility
layout: default
parent: Accessibility, the business case
description: Your inaccessible site loses customers. Now it loses agents too.
contributors:
  - Anne-Mieke Bovelett
nav_order: 2
---

# Your inaccessible site loses customers. Now it loses agents too.

If you build websites for a living, you already know the argument. Inaccessible sites lose users with access needs, and those users take their spending with them. What has changed in 2026 is that there is now a second mechanism through which inaccessible sites lose traffic and revenue, one that operates without a human user ever being involved.

This article is about both mechanisms, why they point at the same structural problem, and why the decisions made inside a WordPress build are exactly where that problem starts.

## What the research has been telling us since 2016

The [Click-Away Pound Report](https://clickawaypound.com) has been documenting the commercial cost of inaccessible websites for nearly a decade. Its 2019 edition is worth reading for anyone making the business case for accessibility investment.

By 2019, the report had established that 7.15 million internet users in the UK have access needs. Their combined online spending power was £24.8 billion. And 69% of those users will simply leave a website they cannot use. They do not call. They do not send feedback. They find a competitor whose site works and spend their money there.

That redirected spending, what the report calls the Click-Away Pound, reached £17.1 billion in the UK in 2019. That is not money that goes unspent. It goes to barrier-free competitors who made different structural decisions about their websites.

One finding from the report is worth specific attention. 75% of users with access needs said they had chosen to pay more for a product from an accessible website rather than buy the same product from a less accessible one. These are not price-sensitive shoppers. They are willing buyers who actively prioritize accessibility over price and who remain loyal to sites that work for them. 86% said they would spend more overall if websites were more accessible.

The 2019 numbers are almost certainly conservative by now, given growth in internet use, in the disabled population as a percentage of internet users, and in overall online retail volume.

That is the baseline. That is the commercial cost of inaccessibility that already existed before AI agents entered the picture.

## The second layer

There is now a second mechanism through which inaccessible sites lose potential business. Google has already rolled out task-based agentic search, [as covered by Search Engine Journal](https://www.searchenginejournal.com/googles-task-based-search/571800/). You describe what you want. The agent browses sources, evaluates real-time availability or pricing or relevant information, and completes or mediates the transaction. Restaurant booking is live. Broader e-commerce and service tasks are in active development across multiple platforms. The agent acts on your behalf. The human user may never see most of the process.

Here is what that means for every business with a website: an AI agent does not experience a web page the way a sighted user does. It does not render the design. It parses the underlying HTML. It needs to understand what this page is about, where the main content is, what interactive elements are present and what they do, what a form field expects. Without structural answers to those questions, the agent cannot navigate the page to complete a task.

The technical mechanism that provides those structural answers has existed for decades. It is called semantic HTML. `<main>` tells an agent where the primary content is. `<button>` tells it an action is available here. `<label>` tells it what a form field means. A proper heading hierarchy tells it how the content is organized and what is most important. ARIA attributes fill in the gaps where standard HTML elements are not sufficient.

A product page built on unlabelled divs, JavaScript-rendered content with no semantic fallback, and interactive elements with no accessible names gives an agent none of that information. From the agent's perspective, the page is a dark room with no light switches.

## What the peer-reviewed research says

A [study accepted at CHI 2026](https://arxiv.org/abs/2602.09310), the premier academic conference for human-computer interaction research, tested AI agents on 60 everyday tasks across desktop and web applications under different accessibility conditions. The dataset includes over 40 hours of interaction data and more than 158,000 recorded events, capturing everything from DOM data and accessibility tree snapshots to screen reader announcements and mouse events. The [dataset is publicly available on HuggingFace](https://huggingface.co/datasets/berkeley-hci/A11y-CUA), and the paper is authored by researchers from UC Berkeley and the University of Michigan.

Under standard conditions, Claude Sonnet 4.5 completed 78.3% of tasks successfully. Under keyboard-only conditions, simulating what happens when standard mouse-based interaction patterns are unavailable, success dropped to 41.7%. Under magnified viewport conditions, which simulate a different interaction model common among users with low vision, success dropped to 28.3%.

A second model, Qwen3-VL, completed 20% of tasks successfully under standard conditions. Under keyboard-only and magnified viewport conditions, the figure dropped to 0%. Completely non-functional.

The research explains why this happens. AI agents operate by pointing, clicking, and typing, mirroring the interaction patterns of sighted mouse users. They were not built to navigate via keyboard or to work within a magnified viewport. When they encounter interfaces that provide no semantic structure, no accessible labels, and no keyboard-navigable controls, they face the same failure modes that screen reader users and low-vision users face on those pages. The agent's interaction model and the page's structure are simply incompatible.

The paper also identifies what it calls a double exclusion problem. A disabled user who cannot navigate a website directly might turn to an AI agent to complete the task on their behalf. If the website is inaccessible, the agent also fails. The structural decision that blocked the human user directly also blocks the AI layer, that was supposed to provide an alternative route. The same upstream decision creates both exclusions.

## How the agent failure is different from the human failure

When a user with access needs encounters a broken form or an unlabelled interactive element, some will try alternative paths. They might try a different browser, a different device, or a mobile app. Some will call a helpline. The Click-Away Pound data shows that 69% will simply leave and look elsewhere. But the attempt was made, and the friction was at least experienced.

When an AI agent encounters a page it cannot parse to complete a task, it does not try alternative paths. It does not register a failure that could be reviewed later. It moves to the next viable source in its decision logic. The user on whose behalf the agent was acting never knows your business was a candidate. You do not appear in the result. There is no second chance because the user was not watching.

A screen reader user routes around a broken experience. An agent routes around it faster, more completely, and without leaving any observable trace.

## The funnel does not fix itself at the halfway point

There is something important to understand about the relationship between accessibility for agents and accessibility for human users, because they are not identical and both matter.

An agent primarily needs code structure. Semantic HTML, properly labeled interactive elements, content that can be parsed and reasoned about. That is what allows an agent to navigate a page and complete a task.

An accessible human experience requires all of that, and considerably more. Color contrast that is legible under normal conditions and in low light. Text that is appropriately sized and not set in large blocks of centred copy. Spacing and layout that don't overwhelm users with cognitive disabilities or visual impairments. Meaningful image descriptions. Properly captioned video. Consistent, predictable navigation that does not shift unexpectedly.

A site could, in theory, have reasonably structured HTML and still be effectively unusable for many human visitors. Getting agent traffic to a page while the human experience remains broken is not a solution. It is getting users to the door and losing them at the checkout. The Click-Away Pound data is a reminder that 75% of users with access need prioritized accessibility over price when deciding where to spend. The agent gets them in. If the human experience is broken, they leave anyway.

The full argument, both the agentic traffic layer and the human conversion layer, requires accessible code and an accessible experience designed for real users.

## What this means in a WordPress build

Most of the structural failures that block agents and screen readers alike originate in decisions made before a line of custom code is written. Theme selection, page builder choice, and component library defaults determine the HTML output. A theme that renders navigation in a `<div>` instead of a `<nav>`, a builder that wraps everything in generic containers with no semantic meaning, a button component that is actually a styled `<div>` with a click handler and no keyboard event — these are not edge cases. They are the default output of a significant portion of the WordPress ecosystem.

Before asking whether your content is accessible, the question is whether your tooling produces semantic output at all. What does the heading structure look like in the source? Are form fields labelled in the HTML, not just visually positioned next to their labels? Do interactive elements have accessible names that a parser can read? These are the same questions a screen reader user would ask, and they are now also the questions an AI agent is asking.

Choosing tooling that produces clean semantic HTML is not an advanced accessibility implementation. It is the foundation. Everything else sits on top of it.

## What this means for the decision on your desk

The commercial case for accessibility was already established before AI agents existed. The Click-Away Pound documented £17.1 billion redirected from inaccessible sites to barrier-free competitors in the UK in 2019 alone. The users affected are frequent, loyal, and willing to pay more for sites that work for them.

The agentic layer adds a second mechanism with a different characteristic. Human users experience friction and leave. Agents simply do not select sources they cannot parse. Two different failure modes, both caused by the same structural decisions made when building the site.

The agent failure is silent and complete. No data is recorded. No friction is measured. The business simply does not appear as an option in an increasing proportion of task-mediated searches that are becoming the standard interaction model for many categories of intent.

The businesses that built on semantic structure, properly labeled controls, and machine-readable content, because that is what accessible development requires, are positioned better for both the human user base and the agent economy. Not because they predicted the future. Because they wrote good code, which, it turns out describes the same thing.

The cost of deferral now has a second row on the spreadsheet. The first row was always there. The question is whether you read it this time.

## Resources

- [Click-Away Pound Report 2019](https://clickawaypound.com), by Freeney Williams Limited
- [A11y-CUA, CHI 2026](https://arxiv.org/abs/2602.09310), by UC Berkeley / University of Michigan
- [A11y-CUA dataset](https://huggingface.co/datasets/berkeley-hci/A11y-CUA), by HuggingFace
- [Google's task-based agentic search](https://www.searchenginejournal.com/googles-task-based-search/571800/), by Search Engine Journal
- [Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), by OpenAI (Atlas/ARIA guidance)
