---
title: Contributors
layout: default
parent: How to contribute
description: "Thank you to the contributors of WP accessibility documentation"
nav_order: 1
---

#  Contributors of the WP Accessibility Knowledge Base

## Project leads
- [Joe Dolson](https://joedolson.com)
- [Rian Rietveld](https://rianrietveld.com)

## A big thank you and props for:

### Content and reviews

[Joe Dolson](https://joedolson.com), [Gary Jones](https://garyjones.io/), [Amber Hinds](https://equalizedigital.com/), [Wendie Huis in't Veld](https://wendiehuisintveld.nl/) and [Rian Rietveld](https://rianrietveld.com) write and review the documentation.

The content about [web forms]({{site.baseurl}}/docs/topics/forms/) was taken, with permission, from the [NL Design System](https://nldesignsystem.nl/richtlijnen/formulieren/) and adjusted for WordPress and for a global audience.

### Website build and GitHub setup
People who build and maintain the Knowledge Base website, including the implementation on GitHub pages.
[Yoren Chang](https://github.com/yoren), [Joe Dolson](https://joedolson.com), [Gary Jones](https://garyjones.io/) and [Rian Rietveld](https://rianrietveld.com).

Thank you, [Just The Docs](https://just-the-docs.com/) for providing the starter theme on which this site is build upon.

### Design website

[Jeffrey Lauwers](https://www.linkedin.com/in/jeffreylauwers/) created the design of the Knowledge Base website including a new Wapuu as logo.

### Accessibility audit website

Florian Schroiff from [Level Level Platforms and Accessibility](https://level-level.com/) conducted the WCAG-EM accessibility audit of the Knowledge Base website.

### Brainstorming

Many people gave their time to brainstorm about content structure, the set up and shared ideas:
[Paul van Buuren](https://wbvb.nl/), [Milana Cap](https://profiles.wordpress.org/milana_cap/). [Virginia Ciambriello](https://profiles.wordpress.org/virginiaciambriello/), [Wendie Huis in't Veld](https://wendiehuisintveld.nl/), [Johan Huijkman](https://www.linkedin.com/in/johanhuijkman/), [Jon Ang](https://profiles.wordpress.org/kenshino/), [Caitlin de Rooij](https://www.caitlinderooij.com/), Savi Sinnema, [Annelies Verhelst](https://linkedin.com/in/anneliesverhelst) and [Angela Willemsen](https://www.linkedin.com/in/angela-willemsen-986674195/).

### GitHub contributor list

People who contributed content and code for the Knowledge Base via GitHub.

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="44" height="44" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>
