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

Stages 1–4 are implemented. Stage 4 adds the closing sequence without redesigning the approved Hero, Services, or Projects sections.

Known completed Stage 4 work includes:

- `#proceso` with a four-step connected timeline: horizontal on desktop and vertical on mobile
- compact process steps without decorative diagrams, connected by an animated cyan progress line
- `#sobre-mi` with confirmed profile copy and three factual fields
- `#contacto` with WhatsApp and email controls kept disabled until real destinations exist
- footer destinations for Email, LinkedIn, and GitHub kept visibly pending and non-navigable
- navbar navigation to `#sobre-mi` and `#contacto`
- reveal motion, stagger, no-JavaScript fallback, and `prefers-reduced-motion` support
- six Stage 4 review captures in `.impeccable/review/`

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

Stage 4 follow-up — continuous Process timeline loop.

Current status:

- implementation complete; only the Process progress animation and point feedback changed
- cyan progress now loops every 8s and pauses outside the viewport
- updated desktop and mobile loop captures generated
- browser, responsive, reduced-motion, and second-cycle validation complete
- design-system documentation updated
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

Continuous progress loop for the `#proceso` timeline.

Result:

The existing Process layout remains unchanged. Its gray base rail now carries an 8s linear cyan loop: horizontal on desktop and sequentially vertical across the three mobile segments. Each point receives a subtle cyan pulse as the progress reaches it. Text reveal still runs once and never joins the loop. A dedicated IntersectionObserver pauses the continuous animation when the timeline or browser tab is not visible. About, Contact, footer, navbar, Hero, Services, and Projects were not changed.

Files changed by the implementation:

- `index.html`
- `styles.css`
- `script.js`
- `PRODUCT.md`
- `DESIGN.md`
- `.impeccable/design.json`
- `.impeccable/surfaces/index-html.md`
- six `stage4-*.png` files in `.impeccable/review/`

Validation completed:

- desktop `1440×900`
- mobile `390×844`
- redesigned Process measures 758px tall on desktop and 1232px on mobile
- desktop and mobile progress complete one loop in 8s and visibly begin a second cycle
- points 01–04 activate near 0.3s, 2.55s, 4.9s and 7.25s in both layouts
- loop pauses outside the viewport while Process text remains visible and does not reanimate
- updated captures: `process-loop-desktop.png` and `process-loop-mobile.png`
- zero horizontal overflow in both viewports
- 4-column desktop timeline and vertical mobile timeline
- navbar anchors clear the fixed header and mobile navigation closes after selection
- all Stage 4 reveal groups become visible, including after fast scroll jumps
- reduced motion disables the loop, leaves the cyan line complete, and keeps all four points cyan
- no-JavaScript fallback leaves all reveal content visible
- integrated-browser console reports no errors
- `git diff --check` passes
- `.impeccable/design.json` parses successfully

---

# Known issues

- WhatsApp, email, LinkedIn, and GitHub destinations are still intentionally pending. Do not make their controls navigable until the user supplies real data.
- Fontshare is an external dependency; sandboxed headless validation blocked that request and used the defined fallbacks, while the integrated browser rendered without console errors.
- No confirmed Stage 4 blocking issue remains.

---

# Next recommended action

Have the user review Stage 4 and, only when explicitly requested, commit it. Do not start Stage 5 automatically. A future contact-data pass should replace the pending controls with real destinations supplied by the user.

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
