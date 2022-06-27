---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

## Methodology

{% for post in site.publications reversed %}
  {% if post.category == 'Methodology' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Applied
{% for post in site.publications reversed %}
  {% if post.category == 'Applied' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
