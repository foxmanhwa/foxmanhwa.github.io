---
name: Milo54
description: A personal site that feels like a friend's room — scrapbook-pink, handcrafted, quietly ambitious.
colors:
  scandalous-rose: "#ff2d78"
  blossom-parchment: "#fff8f8"
  rose-whisper: "#fff0f5"
  pressed-petal: "#f7cad6"
  blush-mid: "#ffb3cc"
  deep-navy: "#1a1a2e"
  ink-black: "#111111"
  ash-gray: "#777777"
  parchment-card: "#FFFFFFD9"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "96px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  headline:
    fontFamily: "'Patrick Hand', cursive"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.4
  title:
    fontFamily: "'Nunito', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "'Nunito', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Patrick Hand', cursive"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "normal"
rounded:
  micro: "6px"
  chip: "12px"
  cover: "10px"
  card: "18px"
  button: "20px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "36px"
  hero: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.blossom-parchment}"
    rounded: "{rounded.button}"
    padding: "8px 18px"
  button-primary-hover:
    backgroundColor: "#333333"
  pill-tag:
    backgroundColor: "{colors.rose-whisper}"
    textColor: "{colors.scandalous-rose}"
    rounded: "{rounded.button}"
    padding: "4px 12px"
  card-default:
    backgroundColor: "{colors.parchment-card}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  like-item:
    backgroundColor: "{colors.rose-whisper}"
    rounded: "{rounded.chip}"
    padding: "12px 8px"
  like-item-hover:
    backgroundColor: "#ffd6e7"
---

# Design System: Milo54

## 1. Overview

**Creative North Star: "The Scrapbook Session"**

This is a personal space decorated by a specific human at a specific point in time. Every element should feel placed rather than laid out: slightly rotated photos, overlapping tape strips, chibi illustrations peeking from card edges, a grid-paper backdrop that reads "notebook" before anything is read. The craft is in the deliberate imperfection. If it looks like a template was used, something is wrong.

The palette is dominated by a vivid rose with soft pink-tinted surfaces. This is not "pink because cute." It is a calling card. The same rose appears on every accent, every label, every hover state. Its consistency is what makes the whole page feel like it belongs to one person. Against the barely-pink parchment background and frosted-paper card surfaces, it creates warmth without sweetness. The single exception is the deep-navy used behind cover thumbnails — the only cold surface in the system, there to make the images pop.

Typography mixes a dramatic serif for the one display moment (the 96px hero name), a handwritten sans for labels and annotations, and a clean humanist sans for body copy. The pairing reads immediately as personal-and-built, not polished-and-produced. Playfair Display at line-height 0.9 creates mass. Patrick Hand at 13px on a pill tag creates intimacy. Nunito at 14px runs everything in between.

This system explicitly rejects: slick SaaS portfolio energy (dark-mode glass cards, hero metrics, "I build scalable solutions" copy, identical icon-heading-text grids), anime fan wiki density (information-first layouts, joyless tables, zero spatial personality), and corporate clean (white space for its own sake, neutral type stacks, LinkedIn-header energy). If a new element could appear unchanged on any of those surfaces, it does not belong here.

**Key Characteristics:**
- Rose as identity, not accent — Scandalous Rose appears on 40-60% of interactive surfaces
- Every neutral tinted toward rose — Blossom Parchment, Rose Whisper, Pressed Petal, none are true white or gray
- Handcrafted markers — washi tape, chibi illustrations, and notebook rings are structural, not decorative
- Gentle asymmetry — hero image rotates -1deg, tape strips -2 to -8deg; nothing sits perfectly flat
- Frosted-paper cards — translucent `rgba(255,255,255,0.85)` over grid-paper background; translucency is subtle, not dramatic

## 2. Colors: The Scandalous Rose Palette

One dominant hue family (rose to parchment) with a single cold-surface exception for media thumbnails.

### Primary

- **Scandalous Rose** (`#ff2d78` / `oklch(60% 0.28 355)`): The load-bearing color. Card titles, section labels, nav active states, progress fills, the hero "54" numeral, the scroll-to-top glow. Not an accent — a voice. If it appears on fewer than 30% of meaningful surfaces, the identity collapses.

### Secondary

- **Blush Mid** (`#ffb3cc` / `oklch(82% 0.10 355)`): The gradient counterpart. Used as the light terminus of progress bar fills (`linear-gradient(90deg, #ff2d78, #ffb3cc)`) and shadow tints. Never used alone as a full-opacity surface.

### Neutral

- **Blossom Parchment** (`#fff8f8` / `oklch(99% 0.005 350)`): Page background. Barely pink — one step from white, but that step matters. Layered with the `rgba(255,192,203,0.07)` grid-line overlay to read as notebook paper.
- **Rose Whisper** (`#fff0f5` / `oklch(97% 0.015 355)`): Light surface for chips, like-items, social circles, and hover states. Perceptibly a pale blush, distinctly not white.
- **Pressed Petal** (`#f7cad6` / `oklch(88% 0.055 355)`): The universal border and divider. Card borders (1.5px), nav bottom border, stat-row dividers. All borders in the system use this value. No gray borders.
- **Parchment Card** (`rgba(255,255,255,0.85)` / `#FFFFFFD9`): Card surface. Frosted-paper translucency over the grid-paper background. Do not increase to full opacity — the slight grid bleed-through is the effect.
- **Ash Gray** (`#777777` / `oklch(52% 0.003 0)`): Secondary text: nav links at rest, chapter/episode labels, dates, metadata. Minimum 14px at this value for WCAG AA compliance.
- **Ink Black** (`#111111` / `oklch(10% 0.003 0)`): Primary text and button fill. Not pure black — chroma 0.003 keeps it adjacent to warm without reading as colored.
- **Deep Navy** (`#1a1a2e` / `oklch(16% 0.04 260)`): Cover placeholder backgrounds and project thumbnails only. The only cold-hue surface in the system. Its darkness makes cover images pop against the warm palette.

**The Parchment Rule.** No surface is pure white (`#ffffff`) or pure black (`#000000`). Every neutral is tinted toward rose. If a surface reads as "clean" or "neutral," it does not belong.

**The One Rose Rule.** Scandalous Rose is the only hue used for labels, card titles, interactive states, and decorative accents. Introducing a second accent color — teal, purple, any blue — breaks the single-voice identity.

## 3. Typography

**Display Font:** Playfair Display (Georgia, serif fallback)
**Body Font:** Nunito (system-ui, sans-serif fallback)
**Handwritten Label Font:** Patrick Hand (cursive fallback)

**Character:** Display serif gives the hero name theatrical weight — the kind of type that belongs on a printed cover, not a startup landing page. Patrick Hand introduces a personal handwritten register for labels and annotations, the visual equivalent of someone's actual handwriting. Nunito bridges them: warm humanist geometry, legible at small sizes. Together they read as "person who takes aesthetics seriously but not themselves."

### Hierarchy

- **Display** (Playfair Display 700, 96px, line-height 0.9): Hero name (Milo54) only. The condensed line-height creates mass. Responsive: 56px at mobile breakpoint.
- **Headline** (Patrick Hand 400, 20px, line-height 1.4): Card titles and hero subtitle. The handwritten register; weight comes from letterform character, not font-weight.
- **Title** (Nunito 700, 18px, line-height 1.4): Currently-section card headers, sub-labels inside cards.
- **Body** (Nunito 400, 14px, line-height 1.6): All running copy — about text, project descriptions, guestbook entries, bio. Line length should not exceed 65ch in containers wide enough to allow it.
- **Label** (Patrick Hand 400, 13px): Pill tags, section labels, "why I built it:" annotations, music ticker, percentage readouts. The smallest use of the handwritten font; Patrick Hand is designed for small sizes.

**The Three-Font Rule.** This system uses exactly three typefaces. Adding a fourth (a monospace stack, a second serif, a display slab) dissolves the handcrafted identity. Every typographic need is covered by Playfair Display, Patrick Hand, and Nunito.

**The Hierarchy Rule.** Display (96px) to body (14px) is a 6.9x scale jump. This is intentional — the name should feel massive. Do not compress the display size in the name of "consistency." The contrast IS the point.

## 4. Elevation

Ambient-layered, not flat. Shadows are pink-tinted and diffuse — they lift cards gently above the grid-paper without hard architectural separation. The goal is "paper resting on a desk," not "floating glass panel" and not "completely flat."

### Shadow Vocabulary

- **Card ambient** (`0 4px 16px rgba(255,143,177,0.10)`): Standard resting shadow on all `.card` surfaces. Barely perceptible — its pink tint is what matters. A neutral gray shadow here reads as corporate.
- **Scrapbook photo** (`0 20px 50px rgba(0,0,0,0.15)`): Hero image only, paired with `transform: rotate(-1deg)`. Deeper and more dramatic to evoke a photograph placed on a surface. The only neutral-gray shadow in the system, justified by the naturalistic "photograph" metaphor.
- **Rose glow** (`0 4px 14px rgba(255,45,120,0.35)`): Scroll-to-top fixed button. Vivid colored glow for a high-contrast persistent element.
- **Lift hover** (`0 8px 20px rgba(255,45,120,0.15)`): Like-item hover state. Pink-tinted uplift; stronger than card ambient, warmer than rose glow.

**The Pink Shadow Rule.** Content shadows are never neutral gray. Every ambient shadow is tinted toward rose. If a shadow reads as gray over a warm surface, it is wrong.

**The Flat-By-Default Rule.** Shadows appear on surfaces, not on inline elements, text, or decorative images. Chibi illustrations, washi tape, and sticker decorations have no shadows.

## 5. Components

### Buttons

The only call-to-action element. Should feel like a sticker printed and placed, not a form widget.

- **Shape:** Full pill (20px radius). No square or slightly-rounded variants.
- **Primary (btn-black):** Ink Black background (`#111`), Blossom Parchment text, Nunito 600 13px, padding 8px 18px. The sole high-contrast dark element on a pink-light page. Its darkness creates visual anchor.
- **Hover:** Background lightens to `#333333`. Transition 0.15s ease.
- **Focus:** `outline: 2px solid #ff2d78; outline-offset: 2px` on `:focus-visible`. Required for WCAG AA.

### Pill Tags / Chips

Read-only annotation labels, not interactive filters.

- **Style:** Rose Whisper background, Scandalous Rose text, Pressed Petal border (1px), 20px radius, Patrick Hand 13px, padding 4px 12px.
- **No hover state.** These are labels, not affordances.

### Cards

The primary container. Cards use frosted-paper translucency — present as a surface without dominating the background.

- **Corner Style:** 18px radius. Generous enough to read as soft, not so large it reads as a bubble.
- **Background:** `rgba(255,255,255,0.85)`. The grid-paper background bleeds through slightly. Never increase to full opacity.
- **Shadow:** Card ambient (`0 4px 16px rgba(255,143,177,0.10)`).
- **Border:** Pressed Petal, 1.5px. Slightly heavier than hairline to register as deliberate framing.
- **Internal Padding:** xl (36px) standard. Hero card: hero (48px). Currently cards: lg (28px). Section grids: 32px gap. Rhythm through variation, not uniformity.
- **`overflow: visible` is required on any card carrying absolutely-positioned chibi illustrations or washi tape.** The decorations spilling past card edges is not a side effect — it is the effect.

### Washi Tape and Decorations (Signature Component)

The scrapbook layer. What makes the page feel placed by a human.

- **Card-tape:** `washi-tape-sheet.png` cropped to 120px wide, 24px tall; `top: -10px; left: 30px`; `transform: rotate(-1.5deg)`; `opacity: 0.85`; `z-index: 5`. Applied to hero, projects, and guestbook cards.
- **Washi-img:** Smaller 80px x 20px strip for secondary cards. Same image, `-2deg` rotation.
- **Chibi illustrations:** `position: absolute; z-index: 10; height: 70px`. Positioned to bleed past card bottom edges (`bottom: -8px`). The z-index 10 is load-bearing — it must exceed the card's stacking context so the illustration appears above adjacent cards in a grid.
- **Notebook rings:** 12 rings, `position: fixed; left: 12px`, full viewport height, `justify-content: space-around`. 20px circles, 3px Pressed Petal border, white fill. `pointer-events: none; aria-hidden="true"`.

### Like Items

Emoji-labeled tiles in a 4-column grid. The hover lift is their defining behavior.

- **Style:** Rose Whisper background, Pressed Petal border (1px), 12px radius, centered 24px emoji + 11px label.
- **Hover:** Deepen to `#ffd6e7`, lift `translateY(-4px)`, apply Lift hover shadow. Transition `all 0.2s ease`. Do not animate layout properties.
- **Focus:** Pressed Petal outline, offset 2px.

### Progress Bars

Appear in Currently cards to indicate reading/watching progress.

- **Track:** 5px tall, `#f0e0e8`, border-radius 3px.
- **Fill:** `linear-gradient(90deg, #ff2d78, #ffb3cc)`. Left-to-right gradient reads as energy building.
- **Percentage label:** Scandalous Rose, 11px Patrick Hand, right-aligned in a flex row alongside the title. Paired with the fill width for consistent data.

### Navigation

- **Style:** Sticky top, 48px tall, `rgba(255,255,255,0.97)` (near-opaque), 1px Pressed Petal bottom border. `z-index: 200`.
- **Links:** Nunito 14px, Ash Gray at rest. Scandalous Rose + 2px Scandalous Rose underline on hover and active. Active state maintained by IntersectionObserver.
- **Mobile:** Links and music ticker hidden below 768px; hamburger replaces them. Mobile menu is a full-width drop panel below the nav bar.

## 6. Do's and Don'ts

### Do:

- **Do** tint every neutral toward rose. If a neutral reads as gray or pure white, add a trace of pink chroma.
- **Do** set `overflow: visible` on any card that carries a chibi or washi tape decoration. The spill-over is structural.
- **Do** vary card padding by context: 48px hero, 36px standard, 28px dense. Rhythm through variation.
- **Do** rotate all decorative overlays slightly. Tape: -2 to -8 degrees. Hero image: -1 degree. Nothing sits flat.
- **Do** use Scandalous Rose on every interactive label, title, and accent. Its frequency is its identity — rarity would break the system.
- **Do** mark decorative images `aria-hidden="true"` and provide `onerror` fallbacks. Both WCAG AA and visual integrity require it.
- **Do** respect `prefers-reduced-motion`: disable `transform`, `transition`, and all animation for users who request it.
- **Do** maintain WCAG AA contrast on all text: body copy against Parchment Card, Ash Gray labels at minimum 14px, interactive focus rings in Scandalous Rose.

### Don't:

- **Don't** use glassmorphism as decoration. Backdrop-filter blur is prohibited. The card translucency comes from `rgba` background only — the blur effect is not used.
- **Don't** build slick SaaS portfolio elements: no dark mode by default, no hero metrics (big number + small label + gradient accent), no identical icon-heading-text card grids, no "I build scalable solutions" copy.
- **Don't** design like an anime fan wiki: no information-dense tables, no joyless functional layouts, no content-first-personality-never approach.
- **Don't** go corporate clean: no pure white (`#ffffff`) surfaces, no neutral gray type stacks, no white-space-as-design-strategy.
- **Don't** use neutral gray shadows on content surfaces. Every ambient shadow is pink-tinted. `rgba(0,0,0,x)` is reserved for the hero scrapbook photo effect only.
- **Don't** add a fourth typeface. Playfair Display, Patrick Hand, and Nunito are the complete vocabulary.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on any card, list item, or callout. Use full Pressed Petal borders or Rose Whisper background tints.
- **Don't** use gradient text (`background-clip: text`). Emphasis through weight, size, or Scandalous Rose solid color only.
- **Don't** compress the hero display size below 96px on desktop. The 6.9x scale contrast between display and body is intentional. Reducing it collapses the visual hierarchy.
