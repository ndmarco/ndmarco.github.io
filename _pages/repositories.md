---
layout: archive
title: "Repositories"
permalink: /repositories/
author_profile: true
---

{% include base_path %}

<div class="research-page">
<div class="research-overview">
<p>
Many statistical methods see limited use because their implementations are hard to run, slow, or, worse, nonexistent. I am committed to developing reliable, efficient software, both for domain-specific models that let scientists obtain reproducible results from their own data and for general-purpose sampling methods that can be widely adopted. All of my methods are released as open-source software, with efficient implementations and documentation aimed at practitioners.
</p>

<p>
<a href="https://ndmarco.github.io/AdaptEllipticalSliceSampler.jl/stable/">AdaptEllipticalSliceSampler.jl</a> implements the adaptive generalized elliptical slice sampler (AGESS), a gradient-free, black-box sampler that performs well on a wide variety of target distributions, including those that are non-differentiable, multimodal, or high-dimensional. Because the package is integrated with <a href="https://turinglang.org/">Turing.jl</a> through AbstractMCMC.jl, users can write models in general probabilistic programming syntax and use AGESS as a drop-in sampler, without deriving anything specific to their model. The package also supports running multiple chains in parallel, so convergence can be checked with standard multi-chain diagnostics. In addition, I have developed two R packages with computationally intensive routines written in C++: <a href="https://github.com/ndmarco/BayesFMMM">BayesFMMM</a>, for fitting functional mixed membership models, and <a href="https://github.com/ndmarco/NeuralComp">NeuralComp</a>, for testing whether neurons multiplex when encoding multiple stimuli.
</p>
</div>
</div>

<div id="repositories" class="repositories">
  <p class="repositories__loading">Loading repositories from GitHub…</p>
</div>

<script>
  window.__repoList = [
    {% for r in site.data.repositories.github_repos %}"{{ r }}"{% unless forloop.last %},{% endunless %}{% endfor %}
  ];
  window.__repoDocs = {{ site.data.repositories.docs | jsonify }};
</script>
<script src="{{ base_path }}/assets/js/repositories.js"></script>
