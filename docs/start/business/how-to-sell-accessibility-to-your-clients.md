---
title: How to sell accessibility to your clients
layout: default
parent: Accessibility, the business case
description: How to make the case for accessibility work, whether that means remediation or a full rebuild, and how to handle the question you are probably most nervous about.
contributors:
  - Anne-Mieke Bovelett
nav_order: 1
---


# How to sell accessibility to your existing clients

You are putting off the conversation. You know it needs to happen, but you are not sure how it will land. The site you built for your client has a problem. The pages load, the design holds up, they signed off on it. But it is losing money in ways that do not surface in a monthly report, and addressing that properly will take real work and a real budget. That conversation is about accessibility, and it is one of the most valuable upselling opportunities you will see this year.

This guide is for web agencies, freelancers, plugin developers, and agency owners. It covers how to make the case for accessibility work, whether that means remediation or a full rebuild, and how to handle the question you are probably most nervous about. The arguments here apply regardless of whether your clients face a legal obligation. The European Accessibility Act is in force, but the businesses you work with are most likely below the thresholds that trigger it. The revenue leak is there regardless of company size.

One thing needs to be said before the arguments start. Yes, including everyone is always the right thing to do. The disability community has deserved a functioning web since the first website went live, and that moral case is not in dispute here. It is also that moral argument that reliably fails to move budgets, and pretending otherwise helps no one.

Small changes happen through love and compassion. Big changes happen through capitalism. The professionals reading this guide are going to make the web more accessible because it is good for their clients' revenue and good for their own business pipeline. Everyone ends up better off for it, including the people who deserved it from the beginning.

## The question you are afraid of

Before the arguments, we need to deal with what is actually stopping this conversation from happening.

You built the site. The client paid for it, was satisfied, and moved on. Now you are coming back to say it needs significant work. The first thing many clients will ask is: "Why didn't you tell us about this and do this right the first time?"

That question feels like an accusation, and the instinct is to apologize or to start explaining the technical complexity in enough detail that the client's eyes glaze over. Both responses fail you, and neither is an accurate account of what happened.

Here is what is accurate. For the first 25 years of the web, inaccessible builds were industry standard, and they were industry standard across the board. Accessibility was absent from briefs, from contracts, from component libraries, from the training developers received, and from the default output of virtually every tool the industry relied on. Nobody asked for it to be different, nobody scoped for it, and nobody priced it in, because the industry infrastructure that should have made it standard simply did not exist yet. The professional who is now raising this conversation caught up with a shift that the entire industry is still working through. That is what professional development looks like, and it is exactly what clients are paying for when they hire someone with expertise.

The analogy that fits is a GP doing an annual checkup. When your doctor tells you your cholesterol is elevated, you do not fire them for missing it at a previous appointment. You are grateful they caught it now and you ask what to do about it. The web professional bringing this conversation to a client is doing the same thing: running the test, reading the results, and presenting options. The correct client response is to ask what happens from here.

Hold this frame close: if you are raising this conversation proactively, before a competitor mentions it, before a client's analytics team finds the revenue leak themselves, before anyone external forces the issue, you are demonstrating expertise. If you are raising it because something has already gone wrong, you are already late. The professionals who benefit most from this moment are the ones who do not wait for the pressure.

## What the site is actually costing right now

The blame question dissolves quickly once this conversation gets going properly because the financial argument replaces it. Clients who understand what inaccessibility is already costing them stop asking who is responsible for the past and start asking what to do next.

The detailed case is made in full in [The hidden but costliest blunder in budgeting for website and digital products](INSERT URL), but the core of it is this. According to [Gartner's benchmarks on customer service costs](https://www.gartner.com/en/documents/5164231), the median cost of a self-service contact is $1.84. The same contact resolved through a live channel, whether phone, chat, or email, costs $13.50. Every time a user cannot complete a task on an inaccessible site, they either give up or they escalate. The first outcome costs a sale. The second costs seven times more than a functional self-service experience would have.

A [2023 Yext study](https://www.yext.com/de/about/news-media/support-survey-2023) found that one in five German consumers who encountered a problem on a help page ended up buying from a different company because the self-service experience failed them. Among 18 to 34 year olds, that figure rises to more than one in three. [Deloitte's research on customer service in Germany](https://www.deloitte.com/de/de/services/consulting/research/studie-kundenservice-in-deutschland.html) found that self-service via online channels frequently fails because the information provided is either insufficient or, in their exact words, "schwer zugänglich," meaning difficult to access. That is an accessibility term buried inside a mainstream customer service study. It is unlikely that the clients who commissioned that research made the connection.

The upside of fixing this is equally concrete. The [Qualtrics XM Institute Consumer Trends Report 2024](https://www.qualtrics.com/research/consumer-trends-2024/) found that customers who experience excellent digital support are 2.7 times more likely to return, the highest multiplier of any channel and journey combination measured in that study. The [Qualtrics ROI of Customer Experience 2025 report](https://www.qualtrics.com/research/roi-customer-experience-2025/) puts the Germany-specific number in sharp focus: only 19% of German consumers say they intend to purchase more after a poor experience, the lowest repurchase intent of all 23 countries in the study. After an excellent experience, that figure rises to 56%. The gap between those two numbers is where the return on accessibility investment lives.

The business conversation with any client opens here: the site is generating support costs it should not have, losing customers to competitors, and the repair has a measurable return.

## The AI shift changed who this affects

Until recently, the human case for accessibility had a ceiling. Clients who were unmoved by inclusion arguments could dismiss them, and many did. That ceiling is gone, and the reason is technical.

On May 19 and 20, 2026, Google announced at I/O that it was pivoting from a traditional search interface to an AI agent interface powered by Gemini. Less than 24 hours later, they deployed the May 2026 Core Update. The direction is confirmed: AI agents are becoming a primary mechanism through which people interact with the web, including for shopping, research, and product discovery.

AI agents parse HTML structure or read the accessibility tree, the same underlying structure that screen readers use to interpret a page, and they act on what they find there. A site that is poorly structured for a screen reader is poorly structured for an AI agent for identical technical reasons. Researchers from UC Berkeley and the University of Michigan made this concrete in a peer-reviewed study published at [CHI 2026](https://arxiv.org/abs/2602.09310). They tested an AI agent across 60 real-world web tasks under different access conditions. On a properly built, accessible site, the agent completed tasks successfully 78% of the time. Under keyboard-only navigation, simulating screen reader conditions, that success rate dropped to 42%. Under viewport restriction, simulating the conditions of a magnification tool user, it dropped to 28% and tasks took three times as long to complete.

The practical consequence is straightforward. Customers are increasingly using AI assistants to search, compare, and make purchasing decisions. When the agent cannot navigate the site, the product does not appear in that interaction. The client is losing visibility to a technology shift that is already rewriting how a meaningful share of web traffic behaves. For a more detailed technical account of how AI agents perceive web pages, [this piece from nohacks.co](https://nohacks.co/blog/how-ai-agents-see-your-website) and [this field guide from OpenHermit](https://www.openhermit.com/blog/browser-ai-agents-2026) cover the architecture clearly.

## Web agencies

The framing of this conversation matters more than the argument itself. Clients who trust their agency will accept a difficult conversation when it is brought to them directly, with evidence, and with a clear recommendation attached. The same clients will resist when the conversation feels reactive, self-serving, or like the agency is backfilling after something went wrong. Bring the data first. Make the diagnosis before presenting the solution.

For remediation, the business case is: here is what is broken, here is what it is costing based on what we know about your traffic and support volume, here is what can be fixed without rebuilding, and here is the return. Remediation has a faster payback cycle than a rebuild and is the right recommendation when the site's foundations are otherwise sound and the issues are contained enough to address without replacing the structure underneath them.

For a full rebuild, the argument shifts to investment rather than repair. When the component library produces inaccessible markup by design, when the theme has never been built for keyboard navigation, when the navigation has been patched onto a structure that was never meant to support it, remediation becomes more expensive over time than starting from a foundation that works. The rebuild argument is about replacing a structure that was never designed to perform at the level the business now needs.

The "Why didn't you do this right?" question will come up in agency client conversations too. Answer it the way a GP answers the same implicit question: with context, without apology, and with immediate attention to what the options are from here. A client who spends fifteen minutes on the blame question and then commits to the project is still a client who committed to the project. The professionals who handle that conversation well come out of it with a stronger relationship. And they have a project.

A remediation scope is a project. A rebuild is a significant project. A client who rebuilds their site on an accessible foundation comes back for maintenance, for content work, for the next build, and refers other clients because the relationship is built on the kind of expertise that is genuinely hard to find.

## Freelancers

The relationship is personal, and the "Why didn't you do this right?" question lands with more weight when there is no agency structure between you and the client. The temptation is to over-explain, to soften the recommendation until it disappears into qualifications, or to avoid the conversation entirely because the relationship feels too valuable to risk.

That calculation is backwards. The client who discovers the revenue leak without you naming it first is far more likely to lose confidence in you than the client who hears it from you directly. The trust that makes a freelance relationship valuable is exactly what makes this conversation possible, and delivering it well is how that trust deepens rather than erodes. The GP analogy applies here with particular force, because a GP relationship is also personal, also built on sustained trust, and the conversation about something that needs attention is still the professional's job to initiate.

Present remediation and rebuild as distinct options with different timelines and different investment levels, and let the client make an informed decision. The freelancer who arrives with a clear diagnosis and two priced-out options is demonstrating exactly the judgment that turns a project relationship into something longer.

## Plugin developers

Your conversation is with the agencies and developers who build on your product, and the argument runs upstream from everything above.

Every agency using an inaccessible plugin carries that inaccessibility into every site they build on it. They may not know the extent of it. Their clients almost certainly do not. The output quality of a site is shaped by the quality of the tools underneath it, and a plugin that produces inaccessible markup by default propagates that problem at scale across every project that depends on it.

An accessibility-ready plugin gives the agencies using it something they currently lack: a component they can point to when the accessibility conversation comes up with their own clients. It becomes part of the agency's argument. They built on a foundation that was already designed to work. For every agency owner who wants to have the proactive expertise conversation with their clients, the quality of the tools in their stack is part of what makes that conversation credible. A plugin that is accessibility-ready makes it straightforward.

## Agency owners

The client conversation depends entirely on how your team builds. The most important question is whether your development workflow already produces accessible output as a matter of standard practice.

An agency whose team builds accessibly does not have a "Why didn't you do this right?" problem, because the answer is baked into the product. The conversation with clients shifts from remediation to positioning: we build differently from most agencies, and here is what that is worth to you. That positioning is only credible when it is true, which means the internal conversation has to happen before the client conversation.

Developers understand technical debt in a way most clients do not. Framing the shift to accessible workflows as the professional standard that prevents accumulated technical debt is the most honest version of the argument, and it tends to land well with technical teams. An inaccessible component library, an inaccessible theme, an inaccessible third-party plugin, each one is a liability that compounds across every project built on top of it. Teams that remove those liabilities early save themselves remediation costs, difficult client conversations, and reputational exposure later. The [Qualtrics XM Institute Consumer Journeys Needing Improvement 2025 report](https://www.qualtrics.com/research/journeys-improve-2025/) found that consumers who identified a broken journey gave an NPS an average of 34 points lower than those who found nothing broken. When those broken journeys originate in the tools an agency chose, that NPS gap belongs to the agency as much as to the client.

## The upsell nobody is talking about

The web industry spent 25 years building inaccessibility into its standard practice. The most expensive accessibility problems in the sites your clients are running right now are almost never bugs introduced during development. They are decisions made in planning meetings and component library choices and design briefs, long before a developer wrote a line of code, by an entire industry that had not yet developed the infrastructure to make better ones.

The professionals who raise this conversation proactively are upgrading a standard that was never good enough, at a moment when the business case is clearer than it has ever been. The client's customers will find what they need and complete their purchases without calling support. The AI agents those customers are increasingly using to research and buy will be able to navigate the site. The revenue that was leaking quietly will stop leaking. And you will have new work, a stronger client relationship, and a positioning that most of your competitors have not caught up to yet.

Everyone is better for it. Including the people who should have been included from the beginning.
