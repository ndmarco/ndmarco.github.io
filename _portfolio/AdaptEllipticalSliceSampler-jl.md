---
title: "AdaptEllipticalSliceSampler.jl"
excerpt: "A Julia package implementing the adaptive generalized elliptical slice sampler (AGESS), a tuning-free, gradient-free MCMC algorithm for gradient-free Bayesian inference."
collection: portfolio
link: 'https://github.com/ndmarco/AdaptEllipticalSliceSampler.jl'
---

`AdaptEllipticalSliceSampler.jl` is a Julia implementation of the adaptive generalized elliptical slice sampler (AGESS) described in [Adaptive Generalized Elliptical Slice Sampling](/publication/AGESS). AGESS combines elliptical slice sampling with diminishing adaptation, allowing it to self-correct from a slow-mixing to a fast-mixing regime while preserving ergodicity across a wide variety of target densities, including targets that are non-elliptical, non-differentiable, multi-modal, or high-dimensional — all without gradients or manual tuning.

Source code is available on [GitHub](https://github.com/ndmarco/AdaptEllipticalSliceSampler.jl).
