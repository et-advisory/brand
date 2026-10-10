# StatusChip

StatusChip shows the state of an item as a dot plus a word, in five tones: `neutral`, `info`, `success`, `pending` and `danger`.

**The consumer provides** the status word and the tone. Markup is `<span class="chip chip-<tone>">`; the dot is drawn by the stylesheet.

**When to use.** For deal, task and document state in tables and cards. The state must be one that can change; use Badge for a fixed category.

**Do**
- Always keep the word; the dot is a reinforcement, never the only signal.
- Map `success` to done or signed, `pending` to waiting on someone, `danger` to blocked or failed.

**Do not**
- Do not invent new tones. The source system has eight tone pairs (neutral, info, pending, warn, agreed, success, danger, done); only the three status colors and the accent have tokens here, so `warn`, `agreed` and `done` fold into `pending` and `success` until they are tokenized.
- Do not put chips on a colored fill; they sit on `paper`, `surface` or `card`.
