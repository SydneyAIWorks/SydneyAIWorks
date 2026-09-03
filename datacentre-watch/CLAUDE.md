# AI Data Centre Watch Australia

Self-contained interactive map living in `datacentre-watch/` inside the Sydney AI Works site repo. Published by GitHub Pages at https://sydneyaiworks.com/datacentre-watch/ on push. Deliberately isolated from the rest of the site: nothing outside this folder depends on it, and it can be deleted with `git rm -r datacentre-watch`.

## Files
- `index.html` - the page. Plain HTML, CSS and vanilla JS. Leaflet from cdnjs, tiles from CARTO, Public Sans from Google Fonts. No build step.
- `data.js` - all project data: `LAST_UPDATED` and the `PROJECTS` array. Schema in `docs/data-schema.md`.
- `scripts/validate-data.js` - run after any data change: `node scripts/validate-data.js` (from this folder).
- `docs/update-process.md` - the weekly refresh routine.

## Rules
- Do not edit files outside this folder unless Malc explicitly asks (for example adding a homepage link). Show the diff first.
- No invented facts. Every entry needs at least one real source URL. Unsourced claims are left out or marked `confidence: "low"` with a note on what needs verifying.
- Allowed `status`: operating, building, approved, proposed, contested, cancelled.
- Allowed `confidence`: high (2+ named sources), medium (1), low (needs verification).
- Coordinates are street or suburb level, never more precise than the source supports.
- Bump `LAST_UPDATED` and the entry's `updated` field whenever an entry changes, then run the validator.
- Australian English spelling.

## Preview
From the repo root: `python3 -m http.server 8080`, then open http://localhost:8080/datacentre-watch/
