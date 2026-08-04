---
title: "Adaptive Generalized Elliptical Slice Sampling"
collection: publications
permalink: /publication/AGESS
excerpt: 'A central challenge in gradient-free MCMC is designing algorithms that simultaneously bypass manual tuning, scale efficiently with dimension, and adapt to local target geometry. While adaptive strategies can auto-tune generic frameworks like random walk Metropolis, they offer slow, linear-order scaling of mixing times with dimension. Elliptical slice sampling (ESS) offers a promising alternative: it is tuning-free, adjusts to local geometry, and can achieve nearly dimension-free scaling under favorable conditions. However, its efficiency degrades rapidly if there is a mismatch between the target distribution and the distribution used to generate the ellipse-defining auxiliary variables, precluding its use in high-dimensional settings. We demonstrate that a careful synthesis of ESS and diminishing adaptation directly resolves these bottlenecks. The resulting adaptive generalized elliptical slice sampler (AGESS) self-corrects from a slow-mixing to a fast-mixing regime, while preserving ergodicity across a wide variety of target densities satisfying mild regularity conditions. The algorithm''s utility is demonstrated across a broad collection of challenging applications, including generalized regression, deep Gaussian process surrogate modeling, and high-dimensional sparse regression. Together, our theoretical results and the case studies give evidence of the efficiency and robustness of AGESS across target distributions that are non-elliptical, non-differentiable, multi-modal, or high-dimensional.'
date: 2026-05-20
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2605.21659'
citation: 'Marco, N. and Tokdar, S.T., 2026. Adaptive Generalized Elliptical Slice Sampling. arXiv preprint arXiv:2605.21659.'
authors: '**N. Marco**, S.T. Tokdar'
category: Bayesian Computation
codeurl: 'https://github.com/ndmarco/AdaptEllipticalSliceSampler.jl'
---

**Why AGESS?**
- **Gradient-free** — works on non-differentiable targets where HMC/NUTS can't be used.
- **Scales with dimension** — optimally tuned elliptical slice samplers can achieve mixing times that grow logarithmically with dimension in ideal situations.

We can illustrate the efficiency by considering the Volcano distribution as the target distribution.

<img src="/images/agess-volcano-distribution.svg" alt="Volcano distribution: a non-elliptical, non-monotonic test target">

<img src="/images/agess-dimension-scaling.svg" alt="Sampler efficiency vs. dimension on the volcano distribution">

AGESS holds its per-iteration efficiency roughly flat as dimension grows on this target, while (non-optimal) ESS, adaptive random-walk, and Metropolis–Hastings all degrade.


- **Robust to hard geometry** — handles multimodal, non-elliptical, and high-dimensional targets.


<img src="/images/agess-multimodal-exploration.png" alt="Sample exploration across three modes of a hierarchical model, compared across AGESS, PG, MH, NUTS, and ARW">

On this multimodal hierarchical model, AGESS explores all three modes in 0.32s, while adaptive random-walk gets stuck in a single mode and particle Gibbs needs substantially longer to reach comparable coverage.



Implemented in the Julia package [AdaptEllipticalSliceSampler.jl](https://github.com/ndmarco/AdaptEllipticalSliceSampler.jl) (Turing.jl-compatible via AbstractMCMC.jl). More detail in the [package documentation](https://ndmarco.github.io/AdaptEllipticalSliceSampler.jl/dev/generated/Motivation/).
