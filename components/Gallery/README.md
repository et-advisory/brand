# Gallery

Gallery is the grid every set of cards sits in. It lays cards out in two to four columns with one fixed gap and stretches each to the height of its row, so footers and source lines align across the row.

**The consumer provides** the cards as children and, optionally, `columns` (2, 3 or 4; any other value falls back to 3), `ordered` for a numbered sequence, a `className` for margins only, and attributes such as `id` or `aria-label`, which go on the list. Render it as `<ETA.Gallery columns={3}><ETA.Card>…</ETA.Card>…</ETA.Gallery>`. Gallery supplies the list item around each child, so do not add your own `<li>`.

**When to use.** Any set of two or more cards that read as peers: partner or ally cards, case studies, steps. Use 2 columns for long cards, 3 by default and 4 for short ones. Stat tiles go in `ETA.StatRow` and the three offerings in `ETA.ServiceRow`.

**Do**
- Pass only cards as children: `ETA.Card`, `ETA.ServiceCard` or a linked card that fills its height.
- Use `ordered` when the sequence matters.

**Do not**
- Do not set grid columns or gap through `className`.
- Do not mix cards and plain text in one gallery.
