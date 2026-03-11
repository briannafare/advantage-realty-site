# Advantage Realty — Design System v2

**Version:** v2 (March 2026)
**Reference sites:** Rillo (section rhythm, color ratios, button patterns), CryptSeekers (data viz, badge pills, hero layout)

---

## Brand & Visual Direction

- **Light-first.** ~65% of the site is white/off-white. Dark green is an accent, not wallpaper.
- **Tone:** Expert without cold. Warm, accessible, modern. Not corporate. Local authority with personality.
- **Pop-on-pop:** Orange pops on white. Lime pops on dark. Blue surfaces the data section.

### Section Color Rhythm (homepage scroll order)
```
NAV (white) → HERO (white) → LOGOS (white) → FEATURE (lime-tint) → TEAM (white) →
DARK SECTION (green-800, max 1) → SOCIAL/TESTIMONIALS (white) → DATA (blue-surface) →
CTA BLOCK (near-black #141414) → FOOTER (green-800)
```

**White sections:** NAV, HERO, LOGOS, TEAM CARDS, TESTIMONIALS
**Tint sections:** lime-tint for feature area, blue-surface for market data
**Dark sections:** ONE dark green mid-page, ONE dark rounded CTA block, footer

---

## Colors

### CSS Custom Properties
```css
:root {
  --green-800: #1D3B22;
  --green-700: #2A5430;
  --lime:      #C9E83A;
  --lime-tint: #F0F7DC;
  --orange:    #E8622A;
  --orange-hover: #D4551F;
  --orange-tint:  #FDF0EB;
  --blue:         #5BB5D8;
  --blue-surface: #EBF6FC;
  --blue-border:  #C4E4F2;
  --bg:       #F8F6F1;
  --surface:  #FFFFFF;
  --surf2:    #F2F0EA;
  --border:   #E0DDD6;
  --t1: #141414;  /* Near black — body text, outlined button fill */
  --t2: #505050;  /* Secondary text */
  --t3: #909090;  /* Tertiary text, labels, hints */
}
```

### Neutrals (65% of every page)
| Token | Hex | Role |
|-------|-----|------|
| White | `#FFFFFF` | Nav, cards, most sections |
| Off-White (bg) | `#F8F6F1` | Page background. Warm, not clinical. |
| Surface Alt | `#F2F0EA` | Alternating section bg, code, pills |
| Border | `#E0DDD6` | All borders, dividers, inputs |
| Near Black | `#141414` | Body text, outlined button fill, dark CTA block |

### Forest Green (brand anchor, sparse)
| Token | Hex | Role |
|-------|-----|------|
| Green 800 | `#1D3B22` | ONE mid-page section bg. Footer. Nav "Get Started" button. |
| Green 700 | `#2A5430` | Input focus border. Italic accent word color on light bg. |

### Orange (primary CTA on light bg)
| Token | Hex | Role |
|-------|-----|------|
| Orange | `#E8622A` | Primary button fill on light bg. Never on dark. Max 1 per section. |
| Orange Hover | `#D4551F` | Hover state for orange button. |
| Orange Tint | `#FDF0EB` | Pill badge bg, subtle alert |

### Lime (dark sections only)
| Token | Hex | Role |
|-------|-----|------|
| Lime | `#C9E83A` | Italic word on dark bg. Stat numbers on dark. Logo apex. |
| Lime Tint | `#F0F7DC` | ONE section bg (feature area). Eyebrow badge bg. |

### Blue (data section only)
| Token | Hex | Role |
|-------|-----|------|
| Blue | `#5BB5D8` | Chart line, milestone dots, info badges. Never a button. |
| Blue Surface | `#EBF6FC` | Market data section bg. |
| Blue Border | `#C4E4F2` | Borders in blue section. |

### Color Rules
- **Orange on light only.** Never on dark backgrounds. One CTA per section.
- **Lime on dark only.** Never a button on white. Only in dark sections.
- **Blue is data-only.** Never decorative outside data section. Never mix blue + orange same section.
- **Green 800 fill buttons NAV ONLY.** Never as in-page fill button on light background.

---

## Typography

### Font Stack
```
--fD: 'Plus Jakarta Sans', sans-serif  (Display/Headings)
--fB: 'Instrument Sans', sans-serif    (Body)
--fI: 'Fraunces', serif                (Italic Accent)
```

### Google Fonts Import
```
Plus Jakarta Sans: weights 400, 500, 600, 700, 800 (+ italic 400)
Instrument Sans: weights 400, 500, 600
Fraunces: italic only, weights 300, 400, optical-size 9-144
```

### Type Scale
| Level | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| Hero | Plus Jakarta Sans | clamp(40px, 7vw, 76px) | 800 | 1.0 | -0.025em |
| H1 | Plus Jakarta Sans | clamp(32px, 5vw, 52px) | 800 | 1.05 | -0.022em |
| H2 | Plus Jakarta Sans | clamp(24px, 3.5vw, 38px) | 700 | 1.1 | -0.018em |
| H3 | Plus Jakarta Sans | clamp(17px, 2.2vw, 22px) | 700 | 1.2 | -0.012em |
| Body Large | Instrument Sans | 18px | 400 | 1.75 | — |
| Body | Instrument Sans | 15px | 400 | 1.7 | — |
| Label | Instrument Sans | 10px | 600 | — | 0.18em, uppercase |

### Italic Accent Rule (from Rillo)
- Every H1 or H2 gets **exactly one** Fraunces italic word.
- That word is the **emotional payload**: *Advantage, Win, Actually, Value, Commitment, Freedom, Empower*
- Never a location name, preposition, or generic noun.
- **On light bg:** renders in `#2A5430` (green-700)
- **On dark bg:** renders in `#C9E83A` (lime)
- Set `font-optical-sizing: auto` for script-like quality at large sizes.

---

## Buttons

### On White/Off-White (most of the site)

**Primary (Orange filled pill)**
```
bg: #E8622A, color: #fff
hover: bg #D4551F + scale(1.02)
border-radius: 9999px (full pill)
font: Plus Jakarta Sans 700, 13px
padding: 11px 22px
Use: hero CTA, section primary action
```

**Secondary (Outlined dark)**
```
bg: transparent, border: 1.5px solid #141414, color: #141414
hover: bg #141414, color: #fff
Use: second option alongside orange
```

**Soft CTA (Circle-Arrow — Rillo signature)**
```
No border, text + dark arrow circle (38x38px, bg #141414)
hover: circle slides right 4px
Use: inline "see more", section soft links
```

### On Dark Green Section (max 1 mid-page)
**Circle-Arrow (ghost ring)**
```
No bg, color: #fff, circle: 38x38px, border 2px rgba(255,255,255,.4)
hover: border-color #fff
Use: primary CTA in dark section. NOT lime-filled.
```

### Dark Rounded CTA Block (near footer, #141414)
**Small Outline White**
```
bg: transparent, border: 1.5px solid rgba(255,255,255,.5), color: #fff
hover: border-color #fff, bg rgba(255,255,255,.1)
Use: "Schedule" button in dark CTA block
```

### Nav Only
**Dark fill button**
```
bg: #141414, color: #fff
hover: bg #2a2a2a
Use: "Get Started" in nav ONLY. Never in-page on light bg.
```

**Lime fill button (sparingly)**
```
bg: #C9E83A, color: #1D3B22
hover: bg #B6D82A + scale(1.02)
Use: CTA in dark sections where circle-arrow doesn't suffice
```

### Pill Tags
```
font: Instrument Sans 500, 11px
border-radius: 9999px (full)
Variants: default (white bg), dark (#141414), lime-tint, orange-tint, blue
```

### Badge Pills
```
Same as CryptSeekers "Welcome" pill above H1
Display: inline-flex, gap 7px, items-center
Has colored dot (7x7px) + text
border-radius: 9999px
```

---

## Border Radii
```
--rF: 9999px  (full pill — buttons, badges, tags)
--rL: 22px    (large — cards, panels, sections)
--rM: 14px    (medium — inputs, chips, swatches)
--rS: 8px     (small — code, notes)
```

---

## Forms

```
border: 1.5px solid #E0DDD6
border-radius: 14px
padding: 10px 14px
font: Instrument Sans 14px
focus: border #2A5430, box-shadow 0 0 0 3px rgba(42,84,48,.10)
error: border #E8622A, box-shadow 0 0 0 3px rgba(232,98,42,.12)
label: 11px / 600 / ls .06em
hint: 11px / #909090
```

---

## Data Visualization (Portland Market)

CryptSeekers-style:
- Light blue surface card (`#EBF6FC`)
- Animated bezier wave SVG timeline
- Numbered dots at milestones
- Staggered event cards below
- Stat counter row at bottom

**SVG Path:** Cubic bezier S-curve
**Line:** stroke `#5BB5D8`, strokeWidth 3, fill none
**Dots:** fill `#fff`, stroke `#5BB5D8`, r 8
**Cards:** white bg, border `#C4E4F2`, border-radius 12px
**Stats:** Plus Jakarta Sans 800, 26px, color `#5BB5D8`

---

## Key Corrections from v1

| Area | v1 (wrong) | v2 (correct) |
|------|-----------|--------------|
| Display font | Syne | Plus Jakarta Sans 800 |
| Italic accent | Instrument Serif | Fraunces italic 300 |
| Hero background | Dark green overlay | WHITE background, lime tint panel right |
| Color ratio | ~50/50 dark/light | ~65% white/off-white |
| Primary CTA on light | Dark green fill | Orange fill (#E8622A) |
| CTA inside dark | Lime fill everywhere | Circle-arrow ghost button |
| Dark green nav button | Used everywhere | NAV ONLY |
| Data viz | Basic SVG line chart | CryptSeekers bezier wave timeline |
