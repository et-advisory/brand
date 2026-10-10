# Badge

Badge is a small pill that tags an item with a short word, in three tones: `neutral`, `accent` and `gold`.

**The consumer provides** the label text (one to three words) and the tone. Render it as `<ETA.Badge tone="accent">Proposal sent</ETA.Badge>`.

**When to use.** To tag a category or instrument (for example Ounce-Backed) on a card, table row or heading. Use StatusChip, not Badge, for a state that moves (done, pending, blocked).

**Do**
- Use `gold` only for bullion and ceremonial moments; its label text is `on-gold`, which is dark in both themes.
- Keep the label in sentence case.

**Do not**
- Do not rely on color alone; the word carries the meaning.
- Do not put a `gold` Badge next to `accent` fills or buttons (rule recorded 2026-10-06).
- Do not use more than two Badges on one item.
