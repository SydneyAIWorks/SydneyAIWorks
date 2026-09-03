# Map data schema

`data.js` exports two globals used by `ai-data-centre-watch.html`.

| Field | Type | Notes |
|---|---|---|
| `id` | string | unique, kebab-case, stable once published |
| `name` | string | developer + project name where known |
| `location` | string | street address or suburb, plus LGA if useful |
| `state` | string | NSW, VIC, QLD, WA, SA, TAS, ACT, NT |
| `lat`, `lng` | number | approximate; street level if an address is known |
| `status` | string | operating, building, approved, proposed, contested, cancelled |
| `capacity_mw` | number or null | planned or actual IT/power capacity |
| `developer` | string | "Not confirmed" if unknown |
| `summary` | string | what it is, scale, planning reference, key dates |
| `community` | string | opposition, submissions, petitions, council or EPA positions |
| `sources` | array of `{label, url}` | real URLs only; label includes outlet and date |
| `confidence` | string | high (2+ sources), medium (1), low (needs verification) |
| `updated` | string | YYYY-MM-DD the entry was last checked |

Status guidance: use `contested` when there is documented organised opposition or a regulator objection and no decision yet. Once a decision is made, move to `approved` or `cancelled` and keep the opposition in `community`.
