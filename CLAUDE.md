# CLAUDE.md

Context for Claude Code working on the sydneyaiworks.com repo.

## What this repo is

The live sydneyaiworks.com website. Static, no build step, no framework, no package manager.

- Hosted on GitHub Pages from branch `main`, root directory
- Repo: https://github.com/SydneyAIWorks/SydneyAIWorks
- Domain registered with GoDaddy. DNS is a CNAME: www to sydneyaiworks.github.io
- `CNAME` in the repo root contains `sydneyaiworks.com`. **Never delete or modify this file.** Removing it breaks the custom domain.

## Current files

| File | Notes |
|---|---|
| `index.html` | 32KB. The entire site. Inline CSS and JS. |
| `CNAME` | Do not touch. |
| `Harbor_Bridge_white.png` | 1.6MB. Header logo, displayed at 70px. Needs resizing. |
| `Harbor Bridge white.png` | Byte-identical duplicate of the above. Unreferenced. Safe to delete. |
| `ScrapperWindow.png` | 322KB. Body background texture at 3% opacity. |
| `ManOnSkate.png` | 267KB. Featured card background at 13% opacity. |
| `sydney background1.jpg` | 244KB. Header background. |
| `moving-inventory-v5c.html` | 96KB. Unrelated app, publicly reachable, not linked. Decision pending. |

## Known defects

1. Favicon is broken. Line 4 of `index.html` references `harbor_bridge_white.png` in lowercase. The real file is `Harbor_Bridge_white.png`. GitHub Pages is case sensitive.
2. No SEO metadata at all. No meta description, no Open Graph, no Twitter card, no canonical, no JSON-LD.
3. The AI news section calls `api.rss2json.com` client side with no fallback, so it often renders as "Loading latest AI news...". Content is invisible to crawlers. Section is scheduled for removal.
4. Page weight is roughly 4MB of images for around 800 words of content.

## Hard rules

- **Filenames are case sensitive on GitHub Pages.** Match case exactly. Avoid spaces in new filenames.
- **Primary content must render without JavaScript.** Client-side-only content is invisible to crawlers and AI retrieval.
- **No build step, framework or dependency** without asking first. The zero-maintenance setup is deliberate.
- **Image budget:** no single image over 200KB.
- **One file at a time.** Uploads are manual through the GitHub web uploader. Never hand over multiple changed files at once.
- **Every file produced is complete and ready to upload.** No fragments or patch instructions unless explicitly asked.
- **Confirm a rollback point exists** before replacing any live file.

## Content rules

- No em dashes or en dashes. Use hyphens or rewrite.
- Australian English. Plain, direct, specific. No AI-typical phrasing.
- Apply the `ai-search-readiness` skill to all content and structure decisions.
- **Never invent a client name, metric, testimonial or project detail.** If a fact is not in `docs/SYDNEYAIWORKS_SOURCE_OF_TRUTH.md`, ask.
- Client names are not to be published. Case studies are anonymised by sector. See the source of truth for the full list.

## Two audiences

1. **Prospects** for consulting: AI governance and readiness, service delivery advisory, infrastructure project delivery. Home page serves these.
2. **Hiring managers.** Malc is job searching for Service Delivery Manager, IT Operations Manager and Head of IT roles in Sydney. The About page is the web CV and is linked from his CV and cover letters.

Do not make one page serve both.

## Source of truth

`docs/SYDNEYAIWORKS_SOURCE_OF_TRUTH.md` is the input to everything published. Items marked TO CONFIRM are real gaps. Do not fill them with assumptions.

## Deploying

If pushing locally: `git add`, `git commit`, `git push` to `main`. GitHub Pages redeploys automatically, usually within a minute.

If pushing is not set up: upload the changed file at https://github.com/SydneyAIWorks/SydneyAIWorks/upload/main. Every upload is a commit and can be reverted from the commit history.
