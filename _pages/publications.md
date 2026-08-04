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

<div class="section-label" id="bayesian-computation">
  <span class="section-label-text">Bayesian Computation</span>
  <span class="section-label-line"></span>
</div>

{% for post in site.publications reversed %}
  {% if post.category == 'Bayesian Computation' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<div class="section-label" id="neural-encoding--neural-imaging">
  <span class="section-label-text">Neural Encoding &amp; Neural Imaging</span>
  <span class="section-label-line"></span>
</div>

{% for post in site.publications reversed %}
  {% if post.category == 'Neural Encoding & Neural Imaging' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<div class="section-label" id="applied--clinical-collaborations">
  <span class="section-label-text">Applied &amp; Clinical Collaborations</span>
  <span class="section-label-line"></span>
</div>

{% for post in site.publications reversed %}
  {% if post.category == 'Applied & Clinical Collaborations' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
