ET Advisory (ETA) helps founders and asset owners close capital raises, with a focus on real-world asset tokenization. The look is confident, bright and precise: warm paper, near-black ink, one Royal Blue accent, heavy Inter headlines. Tokenization is the instrument; the deliverable is a closed raise or a growth-exit strategy, and the design should read that way.

## Principles

- **One accent.** `accent` (Royal Blue) is the only brand hue on marketing and proposal surfaces. Fills, big numerals and links at 24px and up use `accent`; text under 24px uses `accent-strong`; a fill behind white text under 24px (buttons) uses `accent-fill`.
- **Gold pairs with silver, not with blue.** `gold` appears only for bullion and ceremonial moments (the gold Badge tone, the ceremonial gold mark on `band-dark`); text on a gold fill is `on-gold`. Do not place it beside `accent` (decision recorded 2026-10-06).
- **The mark is blue, lit from the left.** The proposed mark (2026-10-09) colors its three faces `mark-facet-light`, `mark-facet-mid` and `mark-facet-deep`, and nothing else uses those three. `letter-e`, `letter-t` and `letter-a` are legacy: the new mark does not use them; keep them for older material until the logo is ratified.
- **Paper, not white.** Backgrounds are `paper`; cards are `card`; bands are `surface`; rules are `line`. Always set a section background explicitly.
- **Seven module hues belong to ERA.** Do not import them into client-facing ETA collateral.

## Content fundamentals

- Sentence case, a period on headlines, no emoji, no exclamation marks, no first-person singular. Em dashes are allowed in the source voice; this team avoids them in deck copy.
- Fixed calls to action: Initiate Contact, Explore our services, Get started, Learn About ETA, Continue.
- Lead with the claim, then the proof. A header is an argument, not a headcount.

## Visual foundations

- **Type.** `Inter` for everything (800 to 900 on headlines, 600 on labels). `Instrument Serif` appears only inside the mark. `IBM Plex Mono` carries identifiers and figures.
- **Slides.** 1920x1080, `margin-slide` 128px, eyebrow in `slide-label` uppercase with wide tracking, `slide-cover` or `slide-title` headline, 24px footer row at 64px from the bottom in `ink-faint`.
- **Statement slides** use `paper` inverted: set the section on the dark theme (`paper` dark, `ink` dark). One per deck section at most.
- **Radius.** `radius-lg` cards, `radius-md` buttons, `radius-pill` badges and tags.
- **Photography.** Only the four real team photos (Abi, Erik, Ryan, Tyler): square, `object-fit: cover`, hairline border. No stock imagery.
- **Open decisions.** Base spacing unit (4px here, 8px in the Style Guide), whether Instrument Serif and IBM Plex Mono are adopted, and ratifying the proposed logo below. `on-accent` on `accent` is 4.44:1 in the light theme (the ratified pair), so use it at 24px and up or bold; under 24px put `on-accent` on `accent-fill` (4.63:1).

## Components

The components are live React parts in the `ETA` namespace (`components/bundle.js`, styled by `components/bundle.css`, typed in `components/index.d.ts`): `ETA.Logo`, `ETA.Button`, `ETA.Badge`, `ETA.StatusChip`, `ETA.StatTile` with `ETA.StatRow`, `ETA.ServiceCard` with `ETA.ServiceRow`, `ETA.Eyebrow` and `ETA.SectionHeading`. Use them rather than re-creating their markup. `Cover` shows the palette. `Button` has seven variants (`primary`, `secondary`, `outline`, `ghost`, `link`, `inverse`, `onDark`) at 32, 40 and 48px. `Badge` (neutral, accent, gold) and `StatusChip` carry tone with a word. `StatTile` is a big numeral over a label and source. `ServiceCard` is always exactly three, numbered 01 to 03. `Eyebrow` and `SectionHeading` open every section. `Logo` draws the proposed mark and lockups from tokens, so it switches theme on its own. `BrandApplications` is a static reference layout, not a component: business card, email signature, social avatar and banner.

## Logo (proposed 2026-10-09, pending ratification)

**The idea.** A tetrahedron seen from above and slightly to the right: three faces meeting at one apex. It resolves the triangle direction already under review (the flat net versus the dimensional tetrahedron) in favor of the dimensional one, and it carries the firm's argument: three faces, the asset, the instrument and the raise, fold into one solid, and the apex is the close. The faces are separated by a narrow channel, so the mark still reads in one color, at 16px and on a fax.

**Parts.** The mark; the `ETA` wordmark, drawn geometric caps matched to Inter at 800 to 900 (paths, not live type); and the descriptor `ET ADVISORY`, monoline caps tracked to the exact width of the wordmark. All three are outlined vectors, so no file depends on a font.

**Lockups.** Horizontal is primary: mark on the left, `ETA` top-aligned to the upper third, descriptor on the mark's baseline. Stacked is for square and centered spaces (business card front, title slides). The mark alone is for app icons, favicons, avatars and anything under 160px wide.

**Color.**
- On `paper`, `surface` or `card`: faces `mark-facet-light`, `mark-facet-mid`, `mark-facet-deep`; type in `ink`.
- On `band-dark` or a dark photo: faces `mark-reversed-light`, `mark-reversed-mid`, `mark-reversed-deep`; type in `on-band-dark`.
- One color: all `ink`, all `on-band-dark`, or all `on-accent` on an `accent` fill. The channels carry the form.
- Ceremonial: `gold-light`, `gold`, `gold-deep` on `band-dark` only, for bullion clients and seals. Never beside blue.

**Clear space and size.** Clear space x = one third of the mark's height on every side. Minimum: horizontal lockup 160px or 40mm wide, stacked 72px, mark 16px (one color under 24px).

**Do not** recolor the faces (not with the letter colors, not gold beside blue), rotate or flip it, stretch it, add shadows, outlines or gradients, close the channels, set the name in live type beside the mark, or place the full-color mark on `accent`.

**Files** are in the Logos asset group: `eta-lockup-horizontal`, `-reversed`, `-mono-ink`; `eta-lockup-stacked`, `-reversed`; `eta-wordmark`; `eta-mark`, `-reversed`, `-mono-ink`, `-mono-white`, `-ceremonial-gold`; `eta-app-icon` (SVG and 512px PNG). Use SVG everywhere a vector is accepted.

## Iconography

The source system uses Lucide (0.474.0, stroke 2, `currentColor`) through an `Icon` component. No icon files ship in this system; add Lucide icons at `currentColor` when needed. Use no emoji.
