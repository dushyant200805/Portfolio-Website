# Dushyant Prajapat — Design System

A design system distilled from the personal portfolio of **Dushyant Prajapat**, a UI/UX
Designer & Frontend Developer based in India working globally. The aesthetic is a
**premium, dark, editorial-studio** look: near-black canvas, heavy Syne display type,
a single hot-orange accent, bento-grid layouts, blurred color "orbs", hairline borders,
and confident motion (slide-up headlines, marquee tickers, scroll reveals).

> "Mass production with artisanal-level quality. Studio creativity. Atelier precision."
> — the brand's own design philosophy.

## Sources

This system was reverse-engineered from a single attached codebase:

- **Codebase:** `Portfolio-Design/` — a static multi-page marketing/portfolio site
  (`index.html`, `work.html`, `services.html`, `about.html`, `contact.html`) built with
  **Tailwind CSS v4** + a large hand-written `css/custom.css`, vanilla JS in `js/main.js`.
- **Design tokens** were lifted verbatim from `css/custom.css` `:root` and the Tailwind
  `@theme` block in `css/input.css`.
- **Fonts:** Syne + DM Sans, loaded from Google Fonts (same as the source). No
  substitution required — these are the exact families the brand uses.
- **Links referenced in the site:** GitHub `github.com/dushyant200805`,
  LinkedIn `linkedin.com/in/dushyant-prajapat-`, Instagram `@_http.dushyant`,
  email `dush8387@gmail.com`.

There is **one product**: the portfolio/marketing website. The UI kit recreates its
core surfaces.

---

## CONTENT FUNDAMENTALS

**Voice.** First-person, confident, and craft-obsessed without arrogance. The designer
speaks as "I" ("I'm open to freelance work", "I ask hard questions early"). The reader is
"you"/"your" ("Deep dive into your goals"). Copy is short, declarative, and benefit-led.

**Tone.** Premium and editorial — closer to a design studio than a SaaS landing page. It
pairs aspirational nouns ("premium digital experiences", "aesthetic precision",
"functional elegance") with grounded, plain-spoken process talk ("clean, maintainable
code", "zero layout shifts").

**Casing.**
- **Headlines:** sentence case or stylized ALL-CAPS for the hero ("UI/UX DESIGNER & DEV").
- **Eyebrows / tags / labels:** ALL-CAPS, letter-spaced (e.g. `WHAT I DO`, `PORTFOLIO`,
  `LET'S CONNECT`). This is a defining tic — almost every section opens with a tiny
  uppercase eyebrow preceded by a short dash/rule.
- **Body:** sentence case.
- **Stats:** number + suffix, terse label below (`17+ / Projects`, `1+ / Yrs Exp`,
  `100% / Satisfaction`).

**Mechanics.**
- Em-dashes and the ampersand are stylistic signatures ("Designer & Dev", "Design & Code").
- Arrows ("→", "↗") lead list items and links.
- Contractions everywhere ("Let's talk", "I'm", "Let's work together").

**Emoji.** Used *sparingly and functionally* — a "⚡" before "Response within 24 hrs", a
"♥" in the footer ("built with ♥ in India"). Never decorative emoji spam. Prefer inline
SVG icons over emoji for UI.

**Representative copy.**
- Hero: "Crafting premium digital experiences that blend aesthetic precision with
  functional elegance. Based in India, working globally."
- Availability: "Open to Work — Accepting freelance & full-time opportunities."
- Section eyebrows: "What I do", "Selected work", "Social proof", "Let's work together".
- CTA: "Have a project in mind?" / "Start a project" / "Hire me" / "Let's talk".

---

## VISUAL FOUNDATIONS

**Overall vibe.** Dark, high-contrast, gallery-like. Lots of negative space; content
sits in a 1400px max-width column. Feels engineered and intentional, never busy.

**Color.** Near-black foundation (`#080808`) with a tight surface ramp
(`#080808 → #111 → #141414 → #1a1a1a`). Text is a 3-step grey scale
(`#f5f5f5 / #888 / #555`). One **hot orange** (`#ff5500`) is the primary accent and is
used surgically — CTAs on hover, dots, the "&", highlighted words, the loader bar.
Supporting accents (blue `#3b5bdb`, purple `#7048e8`, green `#2f9e44`, cyan `#0c8599`)
appear as **full-bleed card backgrounds** in the bento grid, not as text colors. Green is
reserved for "available/online" status.

**Type.** Two families. **Syne** (700–800, tight `-0.03em`/`-0.04em` tracking) for all
display & headings — big, fluid `clamp()` scales going up to 10rem on the hero. **DM Sans**
for body, labels and UI. Eyebrows are DM Sans, uppercase, `0.12em` tracked, in muted grey.
A signature move: outlined display text (`-webkit-text-stroke`) for one word in the hero.

**Backgrounds.** No photography-heavy hero; the canvas is solid near-black layered with:
(1) a faint **80px grid** texture at 2% white, (2) large **blurred color "orbs"**
(blue/orange radial gradients, `blur(120px)`, ~15% opacity) bleeding off-screen corners,
(3) inside cards, smaller floating orbs (`blur(60px)`) that drift on a slow loop, and
(4) subtle **noise overlays**. Project thumbnails use **diagonal gradient placeholders**
(135°, dark duotones) with a faint giant wordmark, not real images. Gradients are dark and
moody — never the clichéd blue-purple SaaS gradient.

**Motion.** Purposeful, smooth, `cubic-bezier(0.4, 0, 0.2, 1)` easing throughout.
Default UI transition `0.3s`; images & reveals `0.6–0.7s`. Signature animations:
headline rows **slide up** from a clipped mask on load (staggered); sections **reveal**
(fade + 30px rise) on scroll via IntersectionObserver; a **marquee** skill ticker scrolls
infinitely (pauses on hover); number counters tick up; status dots **pulse**; a custom
**cursor** (12px dot + 40px follower ring with `mix-blend-mode: difference`) trails the
mouse and scales up over interactive elements. No bounces, no springy overshoot.

**Hover states.** Cards: border lightens (`#222 → #2a2a2a`) **and** lift `translateY(-2px
to -4px)`. Arrows translate up-and-right (`translate(3px,-3px)`). Primary buttons invert
to orange. Outline buttons fill to `--bg-elevated`. Links get an animated underline
(width 0 → 100%). Marquee/tool chips brighten text grey → white.

**Press / active.** Minimal — the brand favors hover richness; presses rely on the same
color transitions (no shrink/scale-down convention in the source).

**Borders.** Everywhere — 1px hairlines (`#222`) define cards, sections, dividers, inputs,
chips. This is the structural backbone of the look (borders, not shadows). Hover bumps to
`#2a2a2a`. Tinted cards use a `rgba(255,255,255,0.06)` hairline.

**Shadows.** Essentially none. Depth comes from the **surface ramp + borders + blurred
orbs**, not drop shadows. (One inset hairline highlight is the only "shadow" token.)

**Transparency & blur.** `backdrop-filter: blur(20px)` on the scrolled nav and floating
glass cards over imagery. Color overlays use `rgba()` washes. Glows/orbs rely on heavy
gaussian blur.

**Corner radii.** Soft and generous: `8 / 16 / 24 / 32px` plus a `999px` full radius for
all pills, chips, buttons, dots and avatars. Cards default to **24px** (`--radius-lg`);
large feature cards go **32px**; inputs **16px**.

**Cards.** `#141414` (or a tinted/colored bg), **24px** radius, 1px `#222` border,
**32–40px** padding, `overflow: hidden` (so orbs clip), often with a label/eyebrow at
top and content pinned to the bottom via flex. No drop shadow. Hover = lift + border
lighten. The **bento grid** (12-col, 80px auto-rows) is the hero layout device.

**Layout rules.** Fixed top nav (72px) that gains a blurred background + border once
scrolled. Content centered at `max-width: 1400px`, 40px desktop / 24px mobile gutters.
Section vertical rhythm ~100px desktop. Grids with `gap` (16px bento/services, 24px work).

---

## ICONOGRAPHY

**System.** The source uses **inline hand-drawn SVG icons** in a **Feather / Lucide
style** — 24×24 viewBox, `stroke="currentColor"`, `stroke-width="2"`, `fill="none"`,
round caps/joins. They inherit text color and are used at 11–16px in UI and ~48px on
service cards (there `stroke-width:1.5`). Common glyphs: arrow-up-right (the universal
"go" affordance), clock, map-pin, globe, info-circle, grid, code (`< >`), check.

**Brand-mark glyphs.** GitHub, LinkedIn and Instagram marks are inline **filled** SVGs
(`fill="currentColor"`) — the only solid-fill icons in the set.

**Recommendation for this system:** use **[Lucide](https://lucide.dev)** from CDN — it is
a 1:1 match for the source's stroke style (2px, round caps, 24px grid). For the three
brand logos (GitHub/LinkedIn/Instagram), use **[Simple Icons](https://simpleicons.org)**
or keep the inline filled paths from the codebase. *(Substitution flag: the original
inlines its own SVG paths rather than importing a library; Lucide is the closest faithful
match and is recommended over re-inlining.)*

**Emoji.** Functional only (⚡ for speed, ♥ in footer). Not an icon system.

**Unicode glyphs.** Arrows (→, ↗) and star ratings (★★★★★) appear as text characters.

**Assets in `assets/`:**
- `favicon.svg` — the favicon (rounded-square "D" + orange dot).
- `logo-monogram.svg` — square app/monogram lockup ("D" + orange dot).
- `logo-wordmark.svg` — horizontal "Dushyant" wordmark with the trailing orange dot.

The brand's logo is a **wordmark** ("Dushyant" in Syne 800) followed by a small **orange
dot** — that dot is the recurring brand signature (also the nav logo, loader, footer).

---

## INDEX / MANIFEST

Root files:
- `styles.css` — global entry point (import this). `@import`s all tokens + base.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter wrapper.

`tokens/` — design tokens (each `@import`ed by `styles.css`):
- `fonts.css` — Syne + DM Sans `@import` from Google Fonts.
- `colors.css` — surface ramp, text, accents, semantic aliases.
- `typography.css` — families, weights, fluid type scale, leading, tracking.
- `spacing.css` — spacing, layout, radius, shadow/glow, motion tokens.
- `base.css` — resets, base element styling, signature utilities, brand keyframes.

`assets/` — `favicon.svg`, `logo-monogram.svg`, `logo-wordmark.svg`.

`components/` — reusable React primitives (see each `.prompt.md`):
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Chip`, `Eyebrow`, `Card`,
  `StatBlock`, `Avatar`, `MarqueeRow`.
- `forms/` — `Input`, `Textarea`, `Select`.

`guidelines/` — foundation specimen cards (Design System tab): colors, type, spacing,
radius, motion, iconography, logo, buttons, etc.

`ui_kits/portfolio/` — interactive recreation of the portfolio site (hero + bento home,
work, services, contact). `index.html` is the click-through demo.
