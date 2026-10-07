# AGENTS.md

## Project scope

This repository is the current professional portfolio website.

Treat this repository as an independent project.

Do not import assumptions, architecture, technologies, conventions, implementation details, or project state from any other repository or previous project.

The current repository is the source of truth.

---

## Primary goal

The portfolio is designed to present the developer professionally to:

- potential clients
- recruiters
- companies
- technical reviewers

The site should communicate:

- professional quality
- strong visual design
- ability to build real digital products
- technical credibility
- clarity for non-technical visitors

The portfolio should feel distinctive and polished rather than like a generic developer template.

---

## Repository-first rule

Never assume the current technology stack.

Before making technical decisions, inspect the repository.

At minimum, when relevant, inspect:

- package configuration
- project structure
- source directories
- build configuration
- installed dependencies
- existing components
- styling system
- scripts

Do not assume React, Vue, Vite, Tailwind, TypeScript, JavaScript, or any other technology unless it is confirmed by the repository.

Do not infer the current stack from older versions of the portfolio.

---

## Before every meaningful task

Read:

1. `AGENTS.md`
2. `HANDOFF.md`

Then inspect:

- `git status`
- the files relevant to the task
- recent Git history when useful

Understand the current implementation before editing it.

Do not start by rewriting an existing section.

---

## Existing design direction

This portfolio already has an established visual direction.

Do not perform a general redesign unless explicitly requested.

The visual goal is:

- modern
- professional
- visually memorable
- polished
- cinematic where appropriate
- clean
- intentional
- easy to understand

Prefer strong composition, typography, spacing and imagery over unnecessary UI decoration.

Avoid turning the site into a generic SaaS landing page.

---

## Hero

The Hero is a major visual element of the portfolio.

Current intended behavior:

- uses a visual/video background
- the background should remain visually stable while the user scrolls
- there should be a smooth visual transition toward the following content
- text must remain readable
- the Hero should create strong first-impression impact

Do not add strong parallax.

Do not make the video move aggressively in response to scrolling.

A possible future experiment is a very subtle cinematic zoom while scrolling, approximately:

`scale(1)` → `scale(1.04)`

This is only a possible future experiment.

Do not implement it unless explicitly requested.

---

## Motion

Animations should improve polish rather than call attention to themselves.

Prefer:

- subtle transitions
- restrained reveals
- controlled hover interactions
- smooth section transitions

Avoid:

- excessive parallax
- large cursor-following effects
- constant movement
- distracting animations
- effects that significantly change the existing composition

Respect `prefers-reduced-motion` if the current project supports motion.

Do not remove accessibility behavior already implemented.

---

## Light mode

The portfolio includes a light-mode experience.

Any new section or component must remain visually coherent with all currently supported themes.

When changing styles, verify:

- backgrounds
- text contrast
- borders
- icons
- buttons
- hover states
- media
- decorative effects

Do not design only for one theme.

---

## Responsive design

Every visual change must be considered for:

- desktop
- tablet
- mobile

Do not assume a desktop composition will automatically work on smaller screens.

Pay particular attention to:

- overflow
- large headings
- video/image cropping
- absolute positioning
- project screenshots
- navigation
- buttons
- spacing
- text wrapping

Mobile should remain intentionally designed.

---

## Portfolio copy

The portfolio should be understandable to people who are not developers.

Prefer explaining:

- what was built
- what problem it solves
- what the user can do with it
- why the project is useful

Technical information can support the presentation but should not dominate every section.

Do not make the page unnecessarily technical.

---

## Truthfulness

Never invent information.

Do not invent:

- clients
- companies
- sales
- users
- revenue
- metrics
- testimonials
- production usage
- project links
- repositories
- technologies
- performance results
- business results

Use only information confirmed by:

1. the repository
2. the current user request
3. the current portfolio project context

---

## Public project naming

The featured reservation project must use a generic public-facing name such as:

`Sistema de reservas para canchas`

Do not restore previous private/internal names unless explicitly requested by the user.

Do not imply that the system was sold to or commissioned by a real client unless the user explicitly confirms that this has happened.

---

## Current portfolio projects

The current Projects section contains:

- Sistema de reservas para canchas
- E-Commerce Full Stack
- AI PDF Chat

Do not remove or rename them without a user request.

Do not infer their technical implementation from other repositories.

If technical details are required, use what currently exists in the portfolio repository or ask the user.

---

## Screenshots and media

Project screenshots and visual assets are important parts of the portfolio.

Preserve their quality and intended aspect ratios.

When replacing or adjusting media:

- avoid unnecessary compression
- avoid distortion
- avoid accidental cropping
- verify responsive behavior
- verify that caching is not causing an outdated preview before changing code

Do not modify implementation solely because the browser is displaying an old cached asset.

---

## Scope control

Make the smallest coherent change that satisfies the request.

Do not:

- redesign unrelated sections
- refactor unrelated code
- rename unrelated files
- change dependencies unnecessarily
- alter working behavior without a reason
- perform cleanup unrelated to the requested task

Preserve working functionality.

---

## Dependencies

Do not add a package unless there is a clear reason.

Before adding one, verify whether the current project or browser already provides the required functionality.

Avoid large dependencies for small visual effects.

Follow the dependency conventions already present in the repository.

---

## Code quality

Follow the patterns already used by the current project.

Do not impose conventions copied from another repository.

Prefer:

- readable code
- focused components/modules
- clear naming
- minimal duplication
- maintainable implementation

Remove temporary debug code created during the task.

Do not leave unnecessary commented-out implementations.

---

## Validation

Use the scripts actually defined by the current repository.

Do not assume commands such as:

`npm run build`

`npm run test`

`npm run lint`

exist without checking the project configuration first.

After modifying code, run the relevant existing validation commands.

Never claim a validation succeeded if it was not actually executed.

For visual tasks, compilation alone is not sufficient when browser/screenshot verification is available.

---

## Git safety

Before meaningful edits, inspect:

`git status`

Respect existing user changes.

Never:

- discard user work
- force push
- rewrite history
- reset unrelated changes
- delete branches
- automatically commit or push

unless explicitly requested.

The user normally handles commit/push unless stated otherwise.

---

## Multi-agent workflow

This repository may be edited alternately by Codex and Google Antigravity.

Both agents must use the repository as the source of truth.

Persistent project rules belong in:

`AGENTS.md`

Current project state belongs in:

`HANDOFF.md`

Before working:

1. Read `AGENTS.md`.
2. Read `HANDOFF.md`.
3. Inspect `git status`.
4. Inspect the relevant source files.
5. Inspect recent commits if useful.

After a meaningful task, update `HANDOFF.md`.

Do not routinely rewrite `AGENTS.md`.

---

## HANDOFF.md responsibilities

`HANDOFF.md` is a living document.

After meaningful work, update it with:

- current task status
- what changed
- files changed
- relevant implementation decisions
- validation performed
- unresolved issues
- recommended next action

Keep it concise.

It is not intended to contain the full history of the project.

Older details that no longer help the next agent should be removed or condensed.

---

## Instruction priority

If information conflicts, follow this priority:

1. Explicit current user request
2. Current repository state
3. `AGENTS.md`
4. `HANDOFF.md`
5. Previous assumptions

Never let historical context override the current repository.

---

## Final principle

Improve the existing portfolio progressively.

Do not redesign what already works simply because another implementation is possible.