# ServiceCard

ServiceCard presents one of ETA's three offerings as a numbered card; the row is always exactly three, numbered 01 to 03.

**The consumer provides** the number (01, 02 or 03), a short title and one sentence. Render the set as `<ETA.ServiceRow />`, which always draws exactly three cards numbered 01 to 03 with the canonical offerings; pass `items` (exactly three `{title, description}`) only to reword them. `ETA.ServiceCard` renders one card.

**When to use.** To show the offerings: entity architecture, capital formation, go-to-market activation. Nothing else belongs in this component.

**Do**
- Keep the order of the numbers and the order of the offerings.
- Keep each description to one sentence in `ink-muted`.

**Do not**
- Do not render two or four cards, and do not renumber them.
- Do not add an accent stripe or a colored left border to the card.
- Do not use gold on these cards.
