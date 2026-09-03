// Australian AI Data Centre Watch - project data
// Edit this file to add or update projects. index.html reads it on load.
//
// status: operating | building | approved | proposed | contested | cancelled
// confidence: high = confirmed in two or more named sources; medium = single
//             named source; low = needs verification
// Coordinates are approximate (street / site level), not exact parcels.

const LAST_UPDATED = "2026-09-03";

const PROJECTS = [
  {
    id: "hazelmere-mandoon-bilya",
    name: "GreenSquareDC Hazelmere (Mandoon Bilya)",
    location: "Lots 14 and 15 Stirling Crescent, Hazelmere, City of Swan",
    state: "WA",
    lat: -31.913, lng: 116.005,
    status: "cancelled",
    capacity_mw: 120,
    developer: "GreenSquareDC",
    summary: "120 MW hyperscale proposal about 40 m from Mandoon Bilya (Helena River), next to a conservation wetland, two Aboriginal heritage sites and a primary school. Application withdrawn on 14 May 2026, days before the Development Assessment Panel was due to decide.",
    community: "Almost 1,900 public submissions to the City of Swan. Save Mandoon Bilya campaign led by Bibbul Ngarma Aboriginal Association with Trillion Trees, Guildford Association and Midland Society. Council voted 11-2 to oppose at the DAP.",
    sources: [
      { label: "Echo Newspaper, 21 May 2026", url: "https://echonewspaper.com.au/news/hazelmere-data-centre-application-withdrawn/" },
      { label: "National Indigenous Times, 15 May 2026", url: "https://nit.com.au/15-05-2026/24288/locals-save-mandoon-bilya-from-massive-ai-data-centre" },
      { label: "Trillion Trees campaign page", url: "https://trilliontrees.org.au/news/community-campaign" },
      { label: "The Conversation, Aug 2026", url: "https://theconversation.com/the-fight-over-ai-data-centres-is-becoming-australias-next-indigenous-policy-challenge-289623" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "syncline-plumpton",
    name: "Syncline Energy Victorian AI Hub",
    location: "Plumpton, City of Melton, outer western Melbourne",
    state: "VIC",
    lat: -37.688, lng: 144.668,
    status: "contested",
    capacity_mw: 2400,
    developer: "Syncline Energy",
    summary: "350 hectare precinct (about 175 MCG fields) with two data centres and up to 2.4 GW of power, co-located with the state-backed Melbourne Renewable Energy Hub battery where five transmission lines meet. Would open in phases to full capacity by 2035 and use on-site gas turbines to buffer the grid. The largest data centre precinct publicly proposed in Australia.",
    community: "Intense resident opposition and a petition. Federal MPs Sam Rae and Alice Jordan-Baird have called for transparency and consultation. Greenpeace Australia is seeking a moratorium on data centre construction nationally.",
    sources: [
      { label: "Star Weekly Melton, 22 Jun 2026", url: "https://meltonmoorabool.starweekly.com.au/news/date-centre-petition/" },
      { label: "Energy Magazine, 15 Jun 2026", url: "https://www.energymagazine.com.au/how-australia-can-power-its-ballooning-data-centre-fleet/" },
      { label: "Green Left, 10 Jun 2026", url: "https://www.greenleft.org.au/2026/1455/news/communities-speak-out-against-vast-ai-data-centre-expansion" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "zerra-campbellfield",
    name: "Zerra DC Project Dune (former Ford factory)",
    location: "300-340 Barry Road, Campbellfield, City of Hume",
    state: "VIC",
    lat: -37.681, lng: 144.958,
    status: "contested",
    capacity_mw: 336,
    developer: "Zerra DC (Singapore)",
    summary: "$1.1 billion, six-building campus on 22 hectares of the former Ford Broadmeadows plant, with later stages within 250 m of homes. Up to 336 MW and about 7 million litres of stored diesel. Lodged April 2026 under the state Development Facilitation Program; planning minister yet to decide.",
    community: "EPA Victoria lodged its first-ever formal objection to a data centre, citing noise and cumulative impacts. Hume City Council has asked the minister to reject it in its current form. Residents' change.org petition. Fire Rescue Victoria has separately called for more oversight of diesel and battery storage at data centres.",
    sources: [
      { label: "ABC News, 26 Aug 2026", url: "https://www.abc.net.au/news/2026-08-26/proposal-to-turn-former-ford-factory-into-giant-data-centre/107075906" },
      { label: "Star Weekly Northern, 31 Aug 2026", url: "https://northern.starweekly.com.au/news/reject-data-centre-council/" },
      { label: "realestatesource, Aug 2026", url: "https://www.realestatesource.com.au/epa-lodges-first-data-centre-objection/" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "firmus-bell-bay",
    name: "Firmus Technologies Bell Bay AI factory",
    location: "Long Reach, former Gunns pulp mill site, George Town municipality",
    state: "TAS",
    lat: -41.105, lng: 146.895,
    status: "approved",
    capacity_mw: 288,
    developer: "Firmus Technologies",
    summary: "288 MW facility with two data halls and 276 backup diesel generators in the Bell Bay Advanced Manufacturing Zone. George Town Council approved it 6-1 on 25 August 2026 with conditions, including a noise survey within 60 days of operating and a corrected bushfire plan. Second of three Firmus sites planned for northern Tasmania.",
    community: "349 submissions and an e-petition of close to 6,000 signatures against. Councillors said their hands were tied by the planning scheme. A separate petition to state parliament seeking a moratorium on uncompleted AI facilities passed 9,000 signatures.",
    sources: [
      { label: "ABC News, 25 Aug 2026", url: "https://www.abc.net.au/news/2026-08-25/firmus-ai-bell-bay-receives-george-town-council-approval/107074336" },
      { label: "Pulse Tasmania, Aug 2026", url: "https://pulsetasmania.com.au/news/george-town-council-approves-288-megawatt-ai-data-centre-at-bell-bay/" },
      { label: "Canberra Times / AAP, Aug 2026", url: "https://www.canberratimes.com.au/story/9337393/ai-data-centre-approved-despite-community-concerns/" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "firmus-launceston",
    name: "Firmus Technologies St Leonards (Launceston)",
    location: "St Leonards, near Launceston",
    state: "TAS",
    lat: -41.45, lng: 147.20,
    status: "building",
    capacity_mw: 104,
    developer: "Firmus Technologies",
    summary: "104 MW facility under construction, Firmus's first Tasmanian site.",
    community: "No specific opposition recorded.",
    sources: [
      { label: "Canberra Times / AAP, Aug 2026", url: "https://www.canberratimes.com.au/story/9337393/ai-data-centre-approved-despite-community-concerns/" }
    ],
    confidence: "medium",
    updated: "2026-09-03"
  },
  {
    id: "firmus-wesley-vale",
    name: "Firmus Technologies Wesley Vale",
    location: "Wesley Vale, north-west Tasmania",
    state: "TAS",
    lat: -41.16, lng: 146.43,
    status: "proposed",
    capacity_mw: 52,
    developer: "Firmus Technologies",
    summary: "52 MW third site in Firmus's Project Southgate plan for Tasmania.",
    community: "No specific opposition recorded yet.",
    sources: [
      { label: "Canberra Times / AAP, Aug 2026", url: "https://www.canberratimes.com.au/story/9337393/ai-data-centre-approved-despite-community-concerns/" },
      { label: "The Urban Developer, Jun 2026", url: "https://www.theurbandeveloper.com/articles/firmus-technologies-ai-factory-bell-bay-gunns-pulp-mill-tasmania" }
    ],
    confidence: "medium",
    updated: "2026-09-03"
  },
  {
    id: "goodman-project-mars",
    name: "Goodman Project Mars",
    location: "12 Mars Road, Lane Cove West Business Park",
    state: "NSW",
    lat: -33.813, lng: 151.150,
    status: "contested",
    capacity_mw: 90,
    developer: "Goodman Group",
    summary: "$1.2 billion, 90 MW data centre replacing four warehouses. State Significant Development SSD-82052708, on public exhibition. The EIS proposes a 28.3 m building against an 18 m local height limit and 49 rooftop diesel generators. One of five data centres approved or proposed in the precinct, which borders homes, a primary school and Blackman Park.",
    community: "Strong local opposition, including a Stop Project Mars campaign backed by Greens MLC Abigail Boyd. Lane Cove Council flagged the height breach. Councils are not the consent authority for SSDs, so can only make submissions.",
    sources: [
      { label: "NSW Planning Portal, SSD-82052708", url: "https://www.planningportal.nsw.gov.au/major-projects/projects/project-mars-data-centre" },
      { label: "DCD, Jul 2026", url: "https://www.datacenterdynamics.com/en/news/goodman-files-to-develop-90mw-data-center-campus-in-sydney-australia/" },
      { label: "Stop Project Mars (Abigail Boyd MP)", url: "https://www.abigailboyd.org/project_mars_datacentre" },
      { label: "ABC News, 17 Aug 2026", url: "https://www.abc.net.au/news/2026-08-17/data-centres-fast-tracked-under-new-nsw-scheme/107043984" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "mamre-road-kemps-creek",
    name: "Mamre Road Data Centre Campus (AirTrunk SYD4)",
    location: "706-752 Mamre Road, Kemps Creek, Western Sydney",
    state: "NSW",
    lat: -33.873, lng: 150.785,
    status: "contested",
    capacity_mw: 1200,
    developer: "ISPT / IFM Investors (site), AirTrunk (conditional buyer)",
    summary: "1.2 GW campus on a 52 hectare site: six four-storey buildings, 26 data hall shells, roughly 850 diesel generators and 22.4 million litres of water a year. Reported cost $5 billion to $9 billion. SSD-92743706, on exhibition. Would be Australia's first data centre over 1 GW.",
    community: "Penrith City Council objected on scale grounds and called for a moratorium. NSW EPA flagged significant air quality and noise impacts given three schools nearby. Mamre Anglican School and Catholic Schools Parramatta lodged submissions. Western Sydney 'Stop the Slop' campaign active.",
    sources: [
      { label: "ACS Information Age, 30 Apr 2026", url: "https://ia.acs.org.au/article/2026/concern-over-australia-s-most-power-hungry-data-centre.html" },
      { label: "ITK Research, May 2026", url: "https://itkservices3.com/background/data_centres_australia_community" },
      { label: "NSW Planning Portal, SSD-92743706", url: "https://www.planningportal.nsw.gov.au/major-projects/projects/mamre-road-data-centre-campus" },
      { label: "DCD, Jul 2026", url: "https://www.datacenterdynamics.com/en/news/airtrunk-set-to-buy-planned-1gw-data-center-site-in-western-sydney-australia/" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "nextdc-s7-eastern-creek",
    name: "NEXTDC S7 sovereign AI campus (OpenAI anchor)",
    location: "Eastern Creek, south of Honeycomb Drive, Western Sydney",
    state: "NSW",
    lat: -33.795, lng: 150.855,
    status: "proposed",
    capacity_mw: 550,
    developer: "NEXTDC, OpenAI as initial customer under MoU",
    summary: "$7 billion hyperscale AI campus and GPU supercluster on a 25.5 hectare site bought in October 2024 for $353 million. Planning application lodged March 2026 (DCD reports up to 612 MW; NEXTDC says 550+ MW). Nine buildings across three blocks plus a substation. First phase targeted for the second half of 2027, pending approvals.",
    community: "No specific opposition recorded. Federal government publicly backed the deal.",
    sources: [
      { label: "DCD, 2 Jul 2026", url: "https://www.datacenterdynamics.com/en/news/australian-stargate-data-center-in-sydney-will-offer-612mw-of-capacity/" },
      { label: "iTnews, Dec 2025", url: "https://www.itnews.com.au/news/nextdc-to-build-ai-campus-and-gpu-supercluster-in-sydney-622380" },
      { label: "Minister Charlton media release, 5 Dec 2025", url: "https://www.minister.industry.gov.au/ministers/charlton/media-releases/7-billion-infrastructure-deal-boost-ai-australia" }
    ],
    confidence: "high",
    updated: "2026-09-03"
  },
  {
    id: "goodman-project-atlas",
    name: "Goodman Project Atlas",
    location: "Eastern Creek, Western Sydney",
    state: "NSW",
    lat: -33.80, lng: 150.86,
    status: "proposed",
    capacity_mw: 500,
    developer: "Goodman Group",
    summary: "Three-storey facility of about 99,000 sqm with up to 500 MW, filed January 2026. Reported investment up to $5 billion. Exact street address not confirmed.",
    community: "No specific opposition recorded.",
    sources: [
      { label: "DCD, 2 Jul 2026", url: "https://www.datacenterdynamics.com/en/news/australian-stargate-data-center-in-sydney-will-offer-612mw-of-capacity/" }
    ],
    confidence: "medium",
    updated: "2026-09-03"
  }
];
