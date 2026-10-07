# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated/inferred for the current build: plain semantic HTML, CSS, and minimal vanilla JavaScript. The workspace contains no application scaffold or package manifest, and Stages 1–3 require no framework or third-party dependency.

## Users

The primary audience is non-technical business owners and clients evaluating custom websites, management systems, and digital solutions. Recruiters and companies are a secondary audience evaluating the developer's professional capability.

## Product Purpose

Present development services as complete, trustworthy business solutions rather than as a technical CV. Success means a visitor quickly understands the offer, trusts the quality of execution, and chooses to start a project conversation or inspect relevant work.

## Positioning

The portfolio sells tailored digital products that simplify real business processes and support growth; technology is supporting evidence, not the central sales message.

## Operating Context

Visitors evaluate the portfolio on desktop, notebook, tablet, and mobile, often from the first viewport. The Hero is the principal first impression and must make the service proposition and actions immediately legible over a supplied cinematic video.

## Capabilities and Constraints

- Stages 1–3: global visual base, Hero, transition statement, Services, Projects, navigation, CTAs, restrained reveal motion, responsive behavior, accessibility, reduced-motion support, and basic scrolled navbar state.
- Stage 4 remains out of scope: Process, About, and Contact sections must not be implemented in this stage.
- Stage 3 is a local extension of the existing surface direction contract (`fb07d1ed`); it does not redefine the Hero, Services, or the established identity.
- Services contains three alternating editorial chapters with clearly labeled temporary visual slots; these are replacement scaffolds, not project proof.
- Projects contains one featured case and two secondary project summaries. Its three abstract visuals are clearly labeled replacement scaffolds; no final raster imagery was added.
- Primary CTA continues to target the future `#contacto` section. The secondary Hero CTA and the navigation link target the implemented `#proyectos` section.
- Project CTAs preserve the label `Ver proyecto →` but have no destination yet; they expose the visible state `Próximamente` and must not imply active navigation until real URLs exist.
- No WebGL, 3D, parallax, scroll zoom, heavy animation library, or costly scroll listener.
- No invented project claims, clients, links, or final imagery.

## Brand Commitments

- Voice: professional, clear, business-oriented, confident, and non-technical.
- Identity: dark, cinematic, premium, technological, editorial, modern, and restrained.
- Brand mark in navigation: `L` only.
- Required Hero headline: `Desarrollá el sistema que tu negocio necesita.`
- Required Hero copy and CTA labels are defined in `PORTFOLIO_REDESIGN_PLAN.md`.
- Color and typography commitments are defined by the supplied master specification.

## Evidence on Hand

- Definitive Hero asset: `1080p.mp4` at the repository root.
- No final imagery for Services or Projects is available; the current six visual slots are dependency-free HTML/CSS placeholders intended to be replaced (three service slots and three project slots).
- Real contact URLs and social links are not yet available and must not be invented.

## Product Principles

- Lead with real business problems and outcomes; let technology support the promise.
- Earn trust through clarity, restraint, polish, and complete-product thinking.
- Keep the first viewport fast, legible, and decisive across devices.
- Preserve factual honesty: do not fabricate projects, clients, proof, or contact data.
- Introduce future sections only in their explicitly authorized implementation stage.

## Accessibility & Inclusion

Use semantic HTML, keyboard-visible focus, adequate contrast, identifiable links, responsive layouts without horizontal overflow, and `prefers-reduced-motion` behavior.
