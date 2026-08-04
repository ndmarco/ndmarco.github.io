---
layout: archive
title: "Repositories"
permalink: /repositories/
author_profile: true
---

{% include base_path %}

<div id="repositories" class="repositories">
  <p class="repositories__loading">Loading repositories from GitHub…</p>
</div>

<script>
  window.__repoList = [
    {% for r in site.data.repositories.github_repos %}"{{ r }}"{% unless forloop.last %},{% endunless %}{% endfor %}
  ];
</script>
<script src="{{ base_path }}/assets/js/repositories.js"></script>
