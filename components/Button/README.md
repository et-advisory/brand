# Button

Button is the action control in seven variants (`primary`, `secondary`, `outline`, `ghost`, `link`, `inverse`, `onDark`) and three heights (32, 40, 48px).

**The consumer provides** a label from the fixed call-to-action vocabulary (Initiate Contact, Explore our services, Get started, Learn About ETA, Continue) and an `href` or click handler. Render it as `ETA.Button` with `variant`, `size` (32, 40 or 48) and either `href` (renders an `a`) or `onClick`; for example `<ETA.Button variant="primary" size={48} href="/contact">Initiate Contact</ETA.Button>`.

**When to use.** One `primary` per view. `secondary` and `outline` for the next-best action, `ghost` in toolbars, `link` inside running text, `inverse` where the page already carries a lot of Emerald, `onDark` only on an `band-dark` ground.

**Do**
- Use `accent-strong` for text-only variants; `primary` fills with `accent-fill` (Emerald) under `on-accent` text (6.91:1).
- Use the 48px size at 16px bold for hero calls to action.
- Keep the label in sentence case with no emoji and no exclamation mark.

**Do not**
- Do not place a `gold` fill beside a button; gold never pairs with the three-color brand.
- Fill buttons with `accent-fill`. Since Brand Evolution 12 it equals `accent` (Emerald, 6.91:1 under white), so either token passes; the buttons keep `accent-fill` so components do not change.
- Do not use `onDark` on `paper`; its border and label are `on-band-dark`.
- Radius is `radius-md` (the token note says Buttons). The Investor Pitch Template uses pill-shaped calls to action; which is right is an open question.
