# Sydney AI Works — Project Status

## Last updated: 2026-09-05

## Live URLs
- Main site: https://sydneyaiworks.com
- Data Centre Watch: https://sydneyaiworks.com/datacentre-watch/
- ISO 42001 Assessment: https://sydneyaiworks.com/iso42001-readiness-assessment.html

## Repo
github.com/SydneyAIWorks/SydneyAIWorks — deploys on push to main (GitHub Pages)

## Local path
/home/powerpc/projects/Sydneyaiworks/

## Completed
- Data Centre Watch map live with 16 verified projects (up from 10)
- Site nav added to datacentre-watch and iso42001 pages
- Branded header (bridge image, logo, nav links) on datacentre-watch and iso42001
- Homepage card (Public Resource) and nav item linking to Data Centre Watch
- Research session 2026-09-05: full state-by-state pipeline scan via RenewMap public
  pages + primary source verification for all new entries

## Data Centre Watch — dataset as at 2026-09-05

### NSW (5 entries)
- Goodman Project Mars, Lane Cove West — contested
- Mamre Road / AirTrunk SYD4, Kemps Creek — contested
- NEXTDC S7 / OpenAI, Eastern Creek — proposed
- Goodman Project Atlas, Eastern Creek — proposed
- Southern Highlands Data Campus (Cloud Carrier), Moss Vale — contested ★ new

### VIC (5 entries)
- Syncline Energy Victorian AI Hub, Plumpton — contested
- Zerra DC Project Dune (Ford factory), Campbellfield — contested
- AirTrunk MEL2, Mickleham — proposed ★ new
- NEXTDC M3 Expansion, West Footscray — building ★ new
- Perri Melbourne Data Centre, West Footscray — approved ★ new

### TAS (3 entries)
- Firmus Bell Bay — approved (updated: residents planning appeal noted)
- Firmus St Leonards — building
- Firmus Wesley Vale — proposed (updated: DA submitted; Latrobe Council seeking major project status)

### WA (1 entry)
- GreenSquareDC Hazelmere (Mandoon Bilya) — cancelled

### QLD (1 entry)
- Western Downs Digital Park (Zerra DC), near Kogan — proposed ★ new

### SA (1 entry)
- IREN Bundey Data Centre Campus — proposed ★ new

## Known gaps / on hold
- Mayfield Energy Precinct (NSW, 1,000 MW): developer not named in any primary
  source found; hold until attributed
- SA Royal Commission into AI: wait for confirmed Terms of Reference (~late Sep 2026)
- Perri Melbourne DC capacity_mw: set to null (renders as "capacity not stated");
  update if MW figure becomes public
- Bundey SA coordinates (-33.890, 139.300): confirmed from Wikipedia locality article
  (33°53′S 139°18′E); no further verification needed

## Next
- Verify Bundey SA coordinates locally before next push
- Weekly refresh setup in n8n (manual rounds first)
- Watch for: Mayfield Energy Precinct developer attribution; SA Royal Commission ToR;
  Western Downs community opposition developing; Firmus Wesley Vale Latrobe Council
  decision; Perri Melbourne capacity disclosure
