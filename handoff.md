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

Stage 4 follow-up — Synchronized step numbers in the process timeline loop (unified 8s global cycle).

Current status:

- implementation complete and rigorously verified in real browser across two full consecutive cycles
- four step numbers (01, 02, 03, 04) share the exact same 8s global cycle without individual animation delays
- per-step keyframes (`process-number-n1`, `process-number-n2`, `process-number-n3`, `process-number-n4`) encode the activation window:
  - 01 lights up at ~0% (1.5%)
  - 02 lights up at ~29.3% (2347ms)
  - 03 lights up at ~58.7% (4693ms)
  - 04 lights up at ~88% (7040ms)
- all reached numbers stay illuminated through 94% of the cycle, creating a premium accumulated progress stepper effect
- between 97% and 100%, all numbers reset together to gray (#76767c) simultaneously with the progress line and dots
- cycle 2 starts with all numbers cleanly reset; zero lingering illumination from earlier cycles
- works on both desktop horizontal and mobile vertical layouts
- `prefers-reduced-motion: reduce` displays numbers statically in light readable tone (#e8e8e6)
- screenshots generated: `proceso-loop-desktop.png` and `proceso-loop-mobile.png`
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

Process timeline number illumination — shared 8s global cycle synchronization across all steps.

Result:

Replaced the offset `animation-delay` implementation with 4 dedicated keyframes (`process-number-n1`, `process-number-n2`, `process-number-n3`, `process-number-n4`), all running on the exact same 8s linear infinite loop without individual delays. Step 01 illuminates at ~0%, Step 02 at ~29.3%, Step 03 at ~58.7%, and Step 04 at ~88%. All numbers remain illuminated until 94% of the shared cycle, then smoothly transition back to baseline gray (#76767c) together between 97% and 100%. At the start of cycle 2, all numbers are verified dark and Step 01 starts the sequence afresh. Validated across two consecutive cycles on desktop (1440x900) and mobile (390x844) via automated browser inspection. Layout, copy, typography, Hero, Services, Projects, About, Contact, navbar, and footer remain completely untouched.

Files changed:

- `styles.css` — added `process-number-n1` through `n4` keyframes, connected via `:nth-child(1..4)`, unified reset timing (97%-100%), pause support on `is-loop-paused`, reduced-motion fallback; removed obsolete mobile delayed rule
- `index.html` — stylesheet cache buster updated to `?v=4-process-numsync`
- `proceso-loop-desktop.png` — capture showing active timeline on desktop (1440x900)
- `proceso-loop-mobile.png` — capture showing active timeline on mobile (390x844)

Validation completed:

- Real Chrome (Chrome 156 headless via CDP) tested across two full consecutive cycles (16s total)
- Cycle 1 Web Animations API measurement:
  - t=500ms (6.3%): 01:LIT | 02:dark | 03:dark | 04:dark
  - t=2366ms (29.6%): 01:LIT | 02:LIT | 03:dark | 04:dark
  - t=4866ms (60.8%): 01:LIT | 02:LIT | 03:LIT | 04:dark
  - t=7149ms (89.4%): 01:LIT | 02:LIT | 03:LIT | 04:LIT (all 4 illuminated)
  - t=7883ms (98.5%): 01:dark | 02:dark | 03:dark | 04:dark (clean reset)
- Cycle 2 Web Animations API measurement:
  - t=300ms (3.8%): 01:LIT | 02:dark | 03:dark | 04:dark (clean restart)
  - t=2366ms (29.6%): 01:LIT | 02:LIT | 03:dark | 04:dark
  - t=4866ms (60.8%): 01:LIT | 02:LIT | 03:LIT | 04:dark
  - t=7149ms (89.4%): 01:LIT | 02:LIT | 03:LIT | 04:LIT (all 4 illuminated)
  - t=7783ms (97.3%): 01:dark | 02:dark | 03:dark | 04:dark (clean reset)
- CSS brace balance: 407 opens = 407 closes
- Desktop viewport (1440x900) & Mobile viewport (390x844) verified
- Reduced-motion mode preserves full readability with static styling

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
