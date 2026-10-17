# Gallery

Gallery is the grid every set of cards sits in. It lays cards out in two to four columns with one fixed gap and stretches each to the height of its row, so footers and source lines align across the row.

**The consumer provides** the cards as children and, optionally, `columns` (2, 3 or 4; default 3), `ordered` for a numbered sequence, and a `className` for margins only. Render it as `<ETA.Gallery columns={3}><ETA.Card>…</ETA.Card>…</ETA.Gallery>`. Gallery supplies the list item around each child.

**When to use.** Any set of two or more cards that read as peers: stat tiles, service cards, partner or ally cards, steps. Use 2 columns for long cards, 3 by default, 4 for stat tiles.

**Do**
- Pass only cards as children: `ETA.Card`, `ETA.StatTile`, `ETA.ServiceCard` or a linked card that fills its height.
- Use `ordered` when the sequence matters.
- Pass margins such as `mt-10` through `className`.

**Do not**
- Do not wrap children in your own `<li>`; Gallery adds it.
- Do not set grid columns or gap through `className`.
- Do not mix cards and plain text in one gallery.
