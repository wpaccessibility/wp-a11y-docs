---
title: Contributors
layout: default
description: "Thank you to the contributors of WP accessibility documentation"
nav_order: 12
---

#  Contributors of the WordPress accessibility documentation

## Props for content, discussion, code, design and reviews

- [Paul van Buuren](https://wbvb.nl/)
- [Yoren Chang](https://github.com/yoren)
- [Virginia Ciambriello](https://profiles.wordpress.org/virginiaciambriello/)
- [Moses Cursor Ssebunya](https://profiles.wordpress.org/mosescursor/)
- [Gary Jones](https://garyjones.io/)
- [Wendie Huis in't Veld](https://wendiehuisintveld.nl/)
- [Johan Huijkman](https://www.linkedin.com/in/johanhuijkman/)
- [Jeffrey Lauwers](https://www.linkedin.com/in/jeffreylauwers/)
- [Caitlin de Rooij](https://www.caitlinderooij.com/)
- Savi Sinnema
- [Annelies Verhelst](https://linkedin.com/in/anneliesverhelst)

### Project leads
- [Joe Dolson](https://joedolson.com)
- [Rian Rietveld](https://rianrietveld.com)

### GitHub contributor list

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="44" height="44" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>
