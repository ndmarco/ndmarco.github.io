---
layout: archive
title: "Podcasts"
permalink: /podcasts/
author_profile: true
---

{% if author.spotify %}
  You can also find the podcasts on <u><a href="{{author.googlescholar}}">Spotify</a>.</u>
{% endif %}
{% if author.applepodcast %}
  You can also find the podcasts on <u><a href="{{author.googlescholar}}">Apple Podcasts</a>.</u>
{% endif %}


{% include base_path %}

{% for post in site.podcasts reversed %}
  {% include archive-single.html %}
{% endfor %}
