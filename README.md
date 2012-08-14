# Sequential Prediction

A sequential prediction workbench for JavaScript demos.

## Overview

Sequential prediction is an umbrella term covering a variety of games between an 
agent and an environment. These games proceed in a sequence of rounds where, each 
round, the agent takes an action and then the environment reveals a reward or
penalty.

Depending on the information the agent has access to and the type of rewards or 
penalties, several types of games can be studied, inclduing:

- Prediction With Expert Advice
- Multi-Armed Bandits
- Online Convex/Linear Optimisation

This project aims to implement existing settings and algorithms for sequential 
prediction within a common framework so as to better understand their commonalities
and differences.

Note: This is very much research code -- written for my own curiosity and 
edification, not for solving real prediction problems.

## Dependencies

- [Numeric Javascript][numericjs]

[numericjs]: http://www.numericjs.com/

## References

1. _[Putting Bayes to Sleep][KAW12]_, Koolen, Adamskiy and Warmuth, Draft paper, 2012. 

2. _[A modern Bayesian look at the multi-armed bandit][S10]_, S.L. Scott, Applied Stochastic Models in Business and Industry, vol. 26, 2010.

[KAW12]: http://www.cs.rhul.ac.uk/~wouter/Papers/sleep.pdf
[S10]: http://www.economics.uci.edu/~ivan/asmb.874.pdf