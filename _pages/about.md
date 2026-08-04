---
permalink: /
title: "Research"
excerpt: "Statistical methodology for complex, high-dimensional neural data — and the computational tools to make it tractable."
author_profile: true
hide_title_heading: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="research-page">

<p class="research-subtitle">
I am currently a Postdoctoral Associate in the Department of <a href="https://stat.duke.edu/">Statistical Science</a> at Duke University, advised by <a href="https://www2.stat.duke.edu/~st118/">Surya Tokdar</a> and <a href="https://people.duke.edu/~jmgroh/">Jennifer Groh</a>. I completed my Ph.D. in <a href="https://www.biostat.ucla.edu/">Biostatistics</a> at UCLA, advised by <a href="https://donatello-telesca.com/">Donatello Telesca</a>.
</p>

<h1 class="page__title">Research</h1>

<div class="research-overview">
<p>
My research develops statistical methodology for complex neural data and the computational tools to make inference tractable. In an era dominated by big data, I focus instead on <em>small systems with limited data</em>: a single neuron among the billions in the brain, a handful of simultaneously recorded neurons, or an aggregate measure of population activity such as LFP or EEG. The systems are small, but the inferential problems they pose are not&mdash;the data exhibit complex dependence structures, and the processes generating them are only observed indirectly. The neuroscience literature, however, offers a rich body of theory about the mechanisms underlying neural activity. A spike train, for instance, is not simply a point pattern we wish to model; under the integrate-and-fire framework, it is the observable consequence of a latent, continuous-time voltage process crossing a threshold.
</p>

<p>
This motivates the central question of my work: Can we incorporate this scientific knowledge into our statistical models so that precise hypotheses become testable? Inferring the underlying latent, continuous-time dynamics from only the hitting times pushes beyond what available statistical methodology and computational tools can reliably handle. Consequently, much of the existing literature falls into two opposite camps: (1) abstract statistical models that fit the data well but cannot address mechanistic questions, or (2) detailed theoretical models that are validated by qualitatively comparing simulated and recorded data rather than through formal statistical inference. My goal is to close that gap: to build the statistical methods that let neuroscientists test hypotheses about how the brain works directly, rather than settling for indirect evidence.
</p>
</div>

<div class="section-label">
  <span class="section-label-text">Research Areas</span>
  <span class="section-label-line"></span>
</div>

<div class="research-cards">

  <div class="research-card research-card--neurosci">
    <a class="research-card__eyebrow" href="/publications/#neural-encoding--neural-imaging">Point Process Models &nbsp;·&nbsp; Neural Encoding</a>
    <h2 class="research-card__title">How Individual Neurons Encode Multiple Stimuli: A Multiplexing Framework</h2>
    <div class="research-card__body">
      <p>
        One leading theory&mdash;<em>multiplexing</em>&mdash;proposes
        that neurons temporally switch between encoding different stimuli, producing a fluctuating
        pattern of spike activity. Testing this theory rigorously requires a statistical framework
        capable of making precise, localized inferences about which stimulus is being encoded by
        each individual spike.
      </p>
      <p>
        I developed a mechanistic state-space model for spike train data, grounded in the
        integrate-and-fire framework, in which multiplexing arises from competition between latent
        drift-diffusion processes. The model's non-Markovian, continuous-time structure required
        a novel MCMC scheme combining Hamiltonian Monte Carlo with filtering algorithms.
        Applied to data from the Groh Lab at Duke, the framework found that multiplexing occurred
        in approximately 20% of neuron-stimulus triplets, with switching detectable at timescales
        under 75ms&mdash;a level of temporal resolution not possible with existing methods.
      </p>
    </div>
    <div class="research-card__links">
      <a href="/publication/neural-switching-drift-diffusion">Paper</a>
      <a href="https://github.com/ndmarco/NeuralComp">Code</a>
    </div>
    <div class="research-card__tags">
      <span class="research-tag">Drift-Diffusion Models</span>
      <span class="research-tag">Spike Trains</span>
      <span class="research-tag">State-Space Models</span>
      <span class="research-tag">HMC</span>
      <span class="research-tag">Neural Encoding</span>
    </div>
  </div>

  <div class="research-card research-card--sampler">
    <a class="research-card__eyebrow" href="/publications/#bayesian-computation">Bayesian Computation &nbsp;·&nbsp; Methodology</a>
    <h2 class="research-card__title">Adaptive Generalized Elliptical Slice Sampling</h2>
    <div class="research-card__body">
      <p>
        Many of the statistical models I develop for neural data involve high-dimensional,
        non-standard posterior distributions that standard MCMC methods&mdash;including HMC/NUTS&mdash;struggle to sample from efficiently. To solve this,
        I developed the <strong>Adaptive Generalized Elliptical Slice Sampler (AGESS)</strong>:
        a general-purpose Bayesian computing algorithm that adapts to the geometry of the target
        distribution, scaling well to high dimensions while remaining applicable to a broad class
        of lower semi-continuous posteriors.
      </p>
      <p>
        In case studies spanning deep Gaussian process surrogate modeling, Bayesian neural networks,
        and high-dimensional sparse regression with horseshoe priors, AGESS proved to be a reliable and efficient <em>black-box sampler</em>.
        The sampler is implemented as an open-source Julia package with a full tutorials included in the documentation.
      </p>
    </div>
    <div class="research-card__links">
      <a href="/publication/AGESS">Paper</a>
      <a href="https://github.com/ndmarco/AdaptEllipticalSliceSampler.jl">Code</a>
      <a href="https://ndmarco.github.io/AdaptEllipticalSliceSampler.jl/dev/">Docs</a>
    </div>
    <div class="research-card__tags">
      <span class="research-tag">MCMC</span>
      <span class="research-tag">Elliptical Slice Sampling</span>
      <span class="research-tag">Julia</span>
      <span class="research-tag">Open Source</span>
      <span class="research-tag">Scalable Inference</span>
    </div>
  </div>

  <div class="research-card research-card--asd">
    <a class="research-card__eyebrow" href="/publications/#neural-encoding--neural-imaging">Functional Data Analysis &nbsp;·&nbsp; Neurodevelopment</a>
    <h2 class="research-card__title">Characterizing Brain Activity in Children with Autism Spectrum Disorder</h2>
    <div class="research-card__body">
      <p>
        A central challenge in studying brain activity via EEG is that standard methods&mdash;clustering
        and functional principal component analysis&mdash;assume observations come from a small number of
        well-separated subtypes. In practice, children's EEG spectra often reflect a <em>continuous mixture</em>
        of underlying neural patterns, making these methods uninformative.
      </p>
      <p>
        To address this, I developed a <strong>functional mixed membership model</strong> that lets each
        observation belong to multiple latent features simultaneously, capturing the full heterogeneity
        of brain activity without forcing artificial discretization. Applied to EEG recordings from
        97 children with and without autism spectrum disorder (ASD), the model identified two dominant
        features: an aperiodic "pink noise" signal and the <em>alpha peak</em>, a developmental biomarker
        of neural maturation. Crucially, ASD children showed a more heterogeneous presence of this
        biomarker than their typically developing peers&mdash;a difference that standard clustering methods
        could not detect.
      </p>
      <p>
        I extended the framework to incorporate patient covariates, revealing that developmental shifts
        in the alpha peak are less pronounced in ASD children as they age.
      </p>
    </div>
    <div class="research-card__links">
      <a href="/publication/FPMM">Paper</a>
      <a href="/publication/covariate-adjusted-FMMM">Covariate-Adjusted Paper</a>
      <a href="https://github.com/ndmarco/BayesFMMM">Code</a>
    </div>
    <div class="research-card__tags">
      <span class="research-tag research-tag--green">Mixed Membership Models</span>
      <span class="research-tag research-tag--green">Functional Data Analysis</span>
      <span class="research-tag research-tag--green">EEG</span>
      <span class="research-tag research-tag--green">ASD</span>
      <span class="research-tag research-tag--green">Bayesian Inference</span>
    </div>
  </div>

  <div class="research-card research-card--future">
    <span class="research-card__eyebrow">Current Work</span>
    <h2 class="research-card__title">Neural Population Coordination</h2>
    <div class="research-card__body">
      <p>
        Current work extends the single-neuron multiplexing framework to populations of neurons,
        capturing the continuous-time interactions&mdash;both correlated firing rates and correlated
        firing times&mdash;that govern how groups of neurons coordinate to encode complex sensory scenes.
        This requires inference on latent high-dimensional continuous-time processes from spike
        timing data alone, a problem that demands both new statistical methodology and scalable
        computational tools. The AGESS sampler plays a central role in making this inference tractable.
      </p>
    </div>
    <div class="research-card__tags">
      <span class="research-tag research-tag--purple">Population Models</span>
      <span class="research-tag research-tag--purple">Neural Synchrony</span>
      <span class="research-tag research-tag--purple">LFP</span>
    </div>
  </div>

</div>

</div>
