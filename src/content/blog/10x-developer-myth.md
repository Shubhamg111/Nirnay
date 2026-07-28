---
title: "Why 'Just Hire a 10x Developer' Is the Wrong Fix"
description: "Individual brilliance rarely explains why some engineering teams ship faster than others. Here's what the actual research on AI and developer productivity shows."
pubDate: 2026-07-22
updatedDate: 2026-07-28
section: "tech"
category: "Programming"
tags: ["engineering", "productivity", "ai coding tools", "team culture"]
draft: false
---

Every founder who's struggled with a slow engineering team eventually says some
version of the same thing: "I just need one really strong developer to turn this
around." It's an understandable instinct. It's also usually wrong.

## Where the idea comes from

The "10x developer" concept traces back to old research on programmer
productivity that found big performance gaps between individuals working on
isolated, well-defined tasks. That finding got flattened over time into a much
bigger claim: that a single standout hire can multiply an entire team's output.
Those are not the same thing. Writing a fast solo script and keeping a
production codebase healthy for years are different skills, and the second one
depends heavily on everyone else involved, not just one person's raw speed.

## The hidden cost of a "hero" engineer

Teams that lean on one exceptional person often don't notice the risk they're
building up. If that person is the only one who understands how the system
fits together, the team has what's sometimes called a low "bus factor" — a
rough measure of how many people could leave before the project stalls. A bus
factor of one means the whole project depends on a single person staying
around, staying healthy, and staying interested.

This shows up at the worst possible times: during due diligence before a
funding round, during an acquisition, or the week that person finally takes a
real vacation. A team that spreads out ownership and documents its decisions
is slower to assemble but far more durable.

## What the actual research on AI coding tools shows

This is the part where most articles either overclaim or hand-wave, so it's
worth being specific.

In mid-2025, the AI safety research group METR ran a randomized controlled
trial with 16 experienced open-source developers working on real issues in
codebases they knew well — 246 tasks in total. Before starting, developers
predicted AI would speed them up by around 24%. After finishing, they
estimated they'd been sped up by about 20%. The measured reality was the
opposite: developers were about 19% *slower* with AI tools than without them.

That gap between what developers felt and what actually happened is the real
headline, not just the slowdown itself. It suggests people are genuinely bad
at judging their own AI-assisted speed in the moment.

METR itself was careful to call this an early-2025 snapshot, not a permanent
verdict, and they tried to re-run the study in 2026 with a larger, more
diverse group of developers. That follow-up broke down for an interesting
reason: too many developers refused to be randomly assigned to work *without*
AI, since they no longer wanted to. That selection bias made the new data too
unreliable to draw firm conclusions from, though the researchers believe
productivity has likely improved since the original study — they just can't
put a solid number on how much yet.

Google's 2025 DORA report tells a related but different story, drawing on
survey data from close to 5,000 technology professionals worldwide. It found
that AI adoption is now linked to higher individual effectiveness and higher
software delivery throughput — a reversal from the year before. But it also
found that AI adoption correlates with *higher* delivery instability. The
report's own framing is the most useful part: AI doesn't fix a struggling
team, it amplifies whatever is already there. Strong systems get stronger.
Weak systems get more chaotic, faster.

Put together, the honest summary is: AI coding tools can help, sometimes
significantly, but the benefit depends heavily on the underlying system the
developer is working in — and self-reported feelings of speed are not a
reliable substitute for actually measuring it.

## Why writing code was never the bottleneck

Ask most engineers how they actually spend their day, and writing new code is
a smaller slice than people assume. Reading existing code, reviewing
teammates' pull requests, waiting on decisions, debugging, and coordinating
across parts of a system usually take up more time than typing new logic.

That matters because it puts a ceiling on what any individual speed boost can
achieve. If code-writing is only a fraction of the total engineering workflow,
even a dramatic improvement there only moves the needle on that fraction. The
rest of the pipeline — review speed, deployment friction, clarity of
priorities — stays exactly as slow as it was, which lines up with the DORA
finding that faster code generation without matching process maturity just
shows up as more instability downstream.

## What tends to separate fast teams from slow ones

Teams that consistently ship well tend to share a few unglamorous habits:

- **Small, frequent changes** instead of large batches that are hard to review
  and risky to deploy
- **Fast code review turnaround**, so work doesn't sit half-finished for days
- **Automated tests and CI/CD**, so people aren't afraid to touch old code
- **Documentation and shared ownership**, so knowledge doesn't live in one
  person's head
- **Clear priorities**, so engineers aren't context-switching between five
  half-started efforts

None of this is exciting to talk about in a hiring pitch. All of it compounds
over months in a way that a single strong individual hire usually can't
replicate on their own — and it's the same set of things the DORA report
points to as the difference between teams that benefit from AI and teams that
get destabilized by it.

## A more useful question than "who's our 10x developer?"

If a team feels slow, it's worth asking a few blunter questions before
reaching for a hero hire: How long does a pull request typically sit before
it's reviewed? How many people actually understand the parts of the system
that matter most? What happens to the roadmap if the most senior engineer is
out for a month?

If those answers are uncomfortable, the fix usually isn't a better individual.
It's a better system — one that doesn't depend on any single person, or any
single tool, being exceptional to function well.

## Frequently asked questions

<details>
<summary>Do exceptionally productive developers actually exist?</summary>

Yes — skill gaps between individual engineers are real and well documented.
The disagreement isn't over whether some people are more effective than
others; it's over whether that translates into a flat "10x" multiplier once
you put them inside a real team, with real dependencies on other people's
work. Individual speed on an isolated task and sustained team output over
years are measuring different things.
</details>

<details>
<summary>Do AI coding tools actually make developers faster?</summary>

It depends heavily on context. A 2025 randomized controlled trial by METR
found experienced developers were about 19% *slower* with AI tools on
real tasks, despite believing they were faster. Google's 2025 DORA report,
based on a much larger survey, found AI adoption linked to higher individual
effectiveness and throughput — but also higher delivery instability. The
honest takeaway is that AI tends to amplify whatever a team's underlying
process already is, rather than fixing weak processes on its own.
</details>

<details>
<summary>What is a "bus factor" and why does it matter for hiring?</summary>

Bus factor is a rough measure of how many people could leave a project before
it stalls. A bus factor of one means a single person holds knowledge critical
to the system — architecture decisions, deployment quirks, undocumented
workarounds. It's a common flag during investor due diligence or acquisitions,
because it means the team's ability to function depends on one person staying
around indefinitely.
</details>

<details>
<summary>Should I hire a senior "star" engineer to fix a slow team?</summary>

Sometimes, but it's rarely the first fix worth trying. Teams are often slow
because of process friction — large batches of work, slow code review,
missing tests, unclear priorities — rather than a lack of raw talent. A strong
new hire dropped into a broken system usually either gets slowed down by the
same friction everyone else faces, or becomes a new single point of failure
by routing around it. Diagnosing the system first is typically cheaper than
hiring your way out of it.
</details>

<details>
<summary>What should I measure instead of lines of code or commit count?</summary>

Outcome-based metrics tend to hold up better than activity-based ones —
things like how often the team ships, how long changes take from start to
production, how often deployments fail, and how quickly the team recovers
when something breaks. Metrics like commit count or story points are easy to
inflate without actually making the product better or more stable.
</details>

---

**Sources**

- METR, ["Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), July 2025
- METR, ["We are Changing our Developer Productivity Experiment Design"](https://metr.org/blog/2026-02-24-uplift-update/), February 2026
- Google Cloud, ["Announcing the 2025 DORA Report"](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report), 2025

*This post reflects publicly available research current as of July 2026.
Given how quickly AI tools and studies in this space are evolving, check the
linked sources directly for the latest findings before citing exact figures
elsewhere.*