# HANDOFF.md

## Purpose

This file contains the current working state of the professional portfolio project.

It is intended to allow Codex and Google Antigravity to alternate work without losing relevant context.

Read `AGENTS.md` before this file.

The repository remains the source of truth.

---

# Project

Professional developer portfolio website.

Main goals:

- attract potential clients
- present real development projects
- support job opportunities
- demonstrate professional frontend/product quality
- remain understandable to non-technical visitors

The site should make a strong visual first impression while maintaining clarity and professionalism.

---

# Technology stack

Do not assume the stack from this document.

The current stack must be determined from the repository.

Before technical work, inspect:

- package configuration
- project structure
- source files
- dependencies
- build configuration

This is intentional to prevent context from older portfolio versions or unrelated projects from being reused incorrectly.

---

# Current design direction

The portfolio already has an established design.

Do not perform a general redesign without explicit user approval.

Current direction:

- visually impactful
- polished
- modern
- professional
- cinematic where appropriate
- strong visual hierarchy
- controlled motion
- designed for clients as well as recruiters

The site should not become excessively technical or look like a generic developer template.

---

# Hero

The Hero currently uses a video/visual background.

Important decision:

The Hero background should remain visually stable during normal page scrolling.

Do not introduce strong parallax.

The transition from the Hero into the following content should feel smooth.

Possible future experiment:

A very subtle cinematic zoom during scroll could be tested later, roughly:

`scale(1)` → `scale(1.04)`

This is not currently a requested implementation.

Do not add it automatically.

---

# Light mode

The portfolio has a light-mode design.

Any future visual change must preserve the quality of both existing themes.

Do not treat light mode as an automatic color inversion of the dark design.

---

# Responsive behavior

Desktop and mobile presentations both matter.

Future work must preserve:

- responsive layouts
- readable typography
- appropriate media cropping
- usable navigation
- project presentation
- reasonable motion behavior

---

# Projects section

The Projects section currently exists and is connected to the site's navigation.

Current projects shown include:

## Sistema de reservas para canchas

This is the main featured case study.

Public naming should remain generic.

Do not restore previous private/internal project names.

Do not claim that the project has been sold to a real client unless the user explicitly confirms this in the future.

## E-Commerce Full Stack

Included as one of the portfolio projects.

Do not infer implementation details from the separate E-Commerce repository.

Only describe what is confirmed by the portfolio repository or by the user in this project.

## AI PDF Chat

Included as one of the portfolio projects.

Do not infer implementation details from the separate AI PDF Chat repository.

Only describe what is confirmed by the portfolio repository or by the user in this project.

---

# Important project decisions

The following decisions are currently active:

- The portfolio should appeal to clients as well as recruiters.
- The site should not be unnecessarily technical.
- The existing design direction should be improved incrementally rather than replaced.
- The Hero video should remain visually stable during normal scroll.
- Strong parallax should not be introduced.
- A subtle cinematic Hero zoom may be tested later, but only when explicitly requested.
- Light mode must be preserved.
- Responsive/mobile quality must be preserved.
- Project information must remain truthful.
- Do not invent clients, metrics, links, testimonials or commercial results.
- The reservation project should use a generic public-facing name.
- Do not mix technical context from other repositories into this portfolio.

---

# Current implementation milestone

Stages 1–4 are implemented. Stage 4.5 establishes GSAP as the animation system for complex sequences and migrates only the approved `#proceso` timeline. Hero, Services, Projects, About, Contact, navbar, and footer have not been migrated or redesigned.

Known completed Stage 4 work includes:

- `#proceso` with a four-step connected timeline: horizontal on desktop and vertical on mobile
- compact process steps without decorative diagrams, connected by an animated cyan progress line
- `#sobre-mi` with confirmed profile copy and three factual fields
- `#contacto` with WhatsApp and email controls kept disabled until real destinations exist
- footer destinations for Email, LinkedIn, and GitHub kept visibly pending and non-navigable
- navbar navigation to `#sobre-mi` and `#contacto`
- reveal motion, stagger, no-JavaScript fallback, and `prefers-reduced-motion` support
- six Stage 4 review captures in `.impeccable/review/`
- GSAP `3.15.0` loaded from a pinned jsDelivr URL before the local page and animation scripts
- `animations.js` as the isolated owner of the Process sequence and shared motion-preference state
- one synchronized 8-second GSAP timeline for Process, with cumulative step activation and responsive horizontal/vertical progress
- viewport pause/resume without duplicate timeline instances and a fully static reduced-motion state

No Stage 5 work has been started.

---

# Previous screenshot issue

During visual verification, some project screenshots initially appeared incorrect/outdated.

The cause was browser cache.

After refreshing/clearing the cached version, the screenshots displayed correctly.

Important lesson:

If an asset appears outdated, verify browser caching before modifying the implementation.

---

# Current Git state

Unknown from this document.

Always inspect it directly with:

`git status`

When useful, also inspect recent commits.

Do not trust this file for the current branch, commit hash, or uncommitted changes.

---

# Active task

Current task:

Stage 4.5 — Integrate GSAP and migrate the `#proceso` animation.

Current status:

- GSAP `3.15.0` is integrated through a version-pinned CDN script
- the previous Process CSS keyframes and Process-specific JavaScript class toggling were removed
- `animations.js` creates exactly one repeating 8-second GSAP timeline
- the sequence activates 01, advances to 02, then 03 and 04 cumulatively, holds briefly, resets, and repeats
- progress is horizontal on desktop and vertical through the three connecting segments on mobile
- the timeline pauses while `#proceso` is outside the viewport or the page is hidden, then resumes without creating another instance
- `prefers-reduced-motion` prevents timeline creation and shows the complete progress line with all four steps in a readable static state
- two complete cycles, reset, pause/resume, reduced motion, console, clipping, and horizontal overflow were validated at 1440x900 and 390x844
- awaiting user review and an explicit future commit request

---
# Multi-agent workflow

Expected workflow:

Codex
→ completes task
→ updates `HANDOFF.md`
→ user commits/pushes
→ Antigravity opens the same repository
→ reads `AGENTS.md`
→ reads `HANDOFF.md`
→ checks Git state
→ continues work

The same process works in reverse when returning to Codex.

Agents should not work simultaneously on conflicting changes in the same branch.

---

# Last completed product work

Task:

Stage 4.5 — Integrate GSAP as the primary system for complex animations and migrate only `#proceso`.

Result:

Added a pinned GSAP runtime and isolated the complex Process animation in `animations.js`. A single responsive GSAP timeline now owns line progression, cumulative point/number activation, the completion hold, reset, and loop. It pauses outside the viewport and respects a centralized reduced-motion preference. The previously approved layout, typography, colors, timing, number glow fix, content, and all other sections remain untouched.

Files changed:

- `animations.js` — new isolated motion module; creates and manages the Process GSAP timeline
- `index.html` — loads pinned GSAP `3.15.0`, then the existing script and `animations.js`; stylesheet cache buster updated
- `script.js` — removed only the obsolete Process loop observer/class toggling
- `styles.css` — exposes GSAP-controlled progress variables and removes the obsolete Process loop keyframes/selectors while retaining layout and static fallbacks
- `proceso-loop-desktop.png` — updated desktop validation capture at the fully completed timeline state
- `proceso-loop-mobile.png` — updated mobile validation capture at the fully completed timeline state
- `handoff.md` — documents the Stage 4.5 implementation and verification

Validation completed:

- desktop `1440×900` and mobile `390×844`
- GSAP runtime `3.15.0`; Process timeline duration `8s`; repeat `-1`; exactly one named instance
- sampled both full cycles at 0.4s, 2.6s, 4.9s, 7.25s, and 7.9s: cumulative activation and reset matched in both cycles
- desktop horizontal and mobile vertical progress values matched the active step at every sample
- offscreen pause produced zero timeline drift; returning to the section resumed progression
- reduced motion created no timeline and rendered full progress with four visible steps
- horizontal overflow: `0px` in both viewports; timeline reveal mask remains disabled so the glow is not clipped
- no GSAP load failures, JavaScript exceptions, or browser console errors

---
# Known issues

- WhatsApp, email, LinkedIn, and GitHub destinations are still intentionally pending. Do not make their controls navigable until the user supplies real data.
- Fontshare is an external dependency; sandboxed headless validation blocked that request and used the defined fallbacks, while the integrated browser rendered without console errors.
- GSAP is currently an external runtime dependency served from the pinned jsDelivr URL. If it cannot load, the CSS defaults leave the Process line and steps fully visible and readable, but the loop is unavailable.
- No confirmed Stage 4 blocking issue remains.

---

# Next recommended action

Have the user review Stage 4.5 and, only when explicitly requested, commit it. Keep simple entrance effects in CSS; reserve `animations.js` and GSAP timelines for future sequences that genuinely need orchestration. Do not start Stage 5 automatically. A future contact-data pass should replace the pending controls with real destinations supplied by the user.

---

# Handoff update template

## Last completed task

Task:

Result:

## Files modified

-

## Important implementation decisions

-

## Validation

Build:

Lint:

Tests:

Browser / visual verification:

## Known issues

-

## Next recommended step

-
