// Australian AI Data Centre Watch - project data
// Edit this file to add or update projects. index.html reads it on load.
//
// status: operating | building | approved | proposed | contested | cancelled
// confidence: high = confirmed in two or more named sources; medium = single
//             named source; low = needs verification
// Coordinates are approximate (street / site level), not exact parcels.

const LAST_UPDATED = "2026-09-05";

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
    community: "349 submissions and an e-petition of close to 6,000 signatures against. Councillors said their hands were tied by the planning scheme. A separate petition to state parliament seeking a moratorium on uncompleted AI facilities passed 9,000 signatures. Some residents are planning a legal appeal against the council decision.",
    sources: [
      { label: "ABC News, 25 Aug 2026", url: "https://www.abc.net.au/news/2026-08-25/firmus-ai-bell-bay-receives-george-town-council-approval/107074336" },
      { label: "Pulse Tasmania, Aug 2026", url: "https://pulsetasmania.com.au/news/george-town-council-approves-288-megawatt-ai-data-centre-at-bell-bay/" },
      { label: "Canberra Times / AAP, Aug 2026", url: "https://www.canberratimes.com.au/story/9337393/ai-data-centre-approved-despite-community-concerns/" },
      { label: "ABC News, 30 Aug 2026", url: "https://www.abc.net.au/news/2026-08-30/ai-data-centre-tasmania-firmus-technology-george-town/107089468" }
    ],
    confidence: "high",
    updated: "2026-09-05"
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
    summary: "52 MW third site in Firmus's Project Southgate plan for Tasmania. A development application has been submitted. Latrobe Council is separately seeking to have the application declared a major project, which would require assessment by the state planning commission rather than the local council.",
    community: "No formal opposition group recorded yet. Latrobe Council's push for major project status signals concern about the local planning process being adequate for a facility of this type.",
    sources: [
      { label: "Canberra Times / AAP, Aug 2026", url: "https://www.canberratimes.com.au/story/9337393/ai-data-centre-approved-despite-community-concerns/" },
      { label: "The Urban Developer, Jun 2026", url: "https://www.theurbandeveloper.com/articles/firmus-technologies-ai-factory-bell-bay-gunns-pulp-mill-tasmania" },
      { label: "ABC News, 30 Aug 2026", url: "https://www.abc.net.au/news/2026-08-30/ai-data-centre-tasmania-firmus-technology-george-town/107089468" }
    ],
    confidence: "medium",
    updated: "2026-09-05"
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
  },
  {
    id: "airtrunk-mel2-mickleham",
    name: "AirTrunk MEL2 Mickleham",
    location: "45 Donnybrook Road, Mickleham, City of Hume",
    state: "VIC",
    lat: -37.553, lng: 144.900,
    status: "proposed",
    capacity_mw: 354,
    developer: "AirTrunk (Blackstone-owned)",
    summary: "Seven-building hyperscale campus on 67 hectares of former pastoral land, 45 km north of Melbourne's CBD. AirTrunk acquired the site from the McMullin family for approximately $350 million and lodged planning application PA2604506 with the Victorian Department of Transport and Planning on 1 July 2026 under the Development Facilitation Program. Over 354 MW capacity across seven parcels. Requires a planning scheme amendment to permit a utility installation on land currently zoned farming. Would lift AirTrunk's total Melbourne deployable capacity to over 630 MW and total Australian capacity to over 1.2 GW across five campuses.",
    community: "No formal community opposition recorded at time of writing. The site is immediately east of the Mickleham Animal and Human Quarantine facilities. Application is still being assessed by the Department of Transport and Planning.",
    sources: [
      { label: "AirTrunk press release, Jan 2026", url: "https://airtrunk.com/airtrunk-expands-australian-platform-with-a-second-hyperscale-data-centre-campus-in-melbourne/" },
      { label: "The Urban Developer, Jul 2026", url: "https://www.theurbandeveloper.com/articles/airtrunk-blackstone-mickleham-north-melbourne-data-centre-plans-donnybrook-road" },
      { label: "Planning Victoria permit register, PA2604506", url: "https://www.planning.vic.gov.au/planning-approvals/ministerial-permits-register/ministerial-permits/fb678cb2-1784-4883-932a-4fdca25a480a" },
      { label: "realestatesource, Jul 2026", url: "https://www.realestatesource.com.au/data-centre-giant-buys-350m-melbourne-site/" }
    ],
    confidence: "high",
    updated: "2026-09-05"
  },
  {
    id: "cloud-carrier-moss-vale",
    name: "Southern Highlands Data Campus (Cloud Carrier)",
    location: "30 Douglas Road, Moss Vale, Wingecarribee Shire",
    state: "NSW",
    lat: -34.553, lng: 150.405,
    status: "contested",
    capacity_mw: 673,
    developer: "Cloud Carrier / Nakar Property / Square Energy",
    summary: "A data centre campus with an operating small facility and two more planned, to be powered by 21 gas generation halls with combined capacity of up to 703 MW — among the three largest reciprocating gas engine power stations proposed anywhere on Earth. The 67-hectare site is less than 5 km from Moss Vale's town centre and 500 m from the nearest homes. Exhaust stacks would reach 23.5 m. State Significant Development SSD-102795459 before the NSW Planning Portal. A smaller 16 MW gas plant component is currently before the NSW Land and Environment Court after a council deemed refusal. The broader 673 MW SSD was lodged after the smaller proposal attracted sustained opposition.",
    community: "Strong and growing local opposition. Around 400 people packed Moss Vale Services Club on 9 August 2026 for a public forum organised by Stop the Gas Plant: Southern Highlands. Federal Member for Whitlam Carol Berry said she had not spoken to a single supporter of the project. NSW Greens Senator David Shoebridge and Wingecarribee Shire Councillor Heather Champion were among speakers. The Australian Conservation Foundation has an investigator active on the case. Wingecarribee Council previously stopped a coal mine on the same site in 2021.",
    sources: [
      { label: "ABC News, 26 May 2026", url: "https://www.abc.net.au/news/2026-05-26/moss-vale-locals-oppose-plans-gas-powered-data-centres/106718446" },
      { label: "RenewEconomy, 20 May 2026", url: "https://reneweconomy.com.au/protests-called-as-data-centre-developer-super-sizes-plans-for-fossil-gas-generation-in-southern-highlands/" },
      { label: "Southern Highland News, Aug 2026", url: "https://www.southernhighlandnews.com.au/story/9331709/nsw-state-government-unveils-data-centre-cost-recovery-policy/" },
      { label: "Wingecarribee Council project page", url: "https://www.wsc.nsw.gov.au/Plan-and-Build/Community-Interest-Items/Southern-Highlands-Data-Campus-Power-Station-Proposal" },
      { label: "NSW Planning Portal, SSD-102795459", url: "https://www.planningportal.nsw.gov.au/major-projects/projects/southern-highland-data-campus-power-station" }
    ],
    confidence: "high",
    updated: "2026-09-05"
  },
  {
    id: "nextdc-m3-west-footscray",
    name: "NEXTDC M3 Expansion, West Footscray",
    location: "1 Paramount Road, West Footscray, City of Maribyrnong",
    state: "VIC",
    lat: -37.801, lng: 144.876,
    status: "building",
    capacity_mw: 133,
    developer: "NEXTDC",
    summary: "Expansion of the existing NEXTDC M3 data centre campus, growing from the current 225 MW to approximately 358 MW across the Paramount Road and Indwe Street addresses. Ministerial permit PA2604231 was approved by the Victorian Planning Minister under the Development Facilitation Program. The existing M3 facility, originally approved by Maribyrnong City Council in 2021 at 13.5 MW, has expanded incrementally to 225 MW — seventeen times the originally approved capacity — with 40 confirmed diesel generators on site. The approved expansion would bring generators to more than 100 and cover 10 hectares in a residential neighbourhood. Residents have no right of appeal to VCAT against ministerial decisions.",
    community: "Intense resident opposition. Citizens of Tottenham produced a 37,289-word submission in 31 days despite no formal right of objection under the ministerial fast-track process. The expansion application opened for public notice with only 14 days for submissions, much of it falling across Easter. Hundreds of residents protested on 9 August alongside the adjacent Perri Melbourne Data Centre site. Residents report childhood asthma rates more than 50% above the state average in the local government area. Residents describe the facility as 'Mordor'. The Age and Herald Sun both covered the story in March–April 2026.",
    sources: [
      { label: "The Westsider, Jun 2026", url: "https://thewestsider.com.au/how-west-footscray-residents-were-hoodwinked-and-ended-up-in-a-living-nightmare/" },
      { label: "ABC News, Jun 2026", url: "https://www.abc.net.au/news/2026-06-09/firefighter-concern-over-data-centres-in-melbourne-west/106762858" },
      { label: "Planning Victoria, PA2604231", url: "https://www.planning.vic.gov.au/planning-approvals/ministerial-permits-register/ministerial-permits/ef7039bf-cd0b-f111-8407-7c1e5262e60a" },
      { label: "Green Left, Aug 2026", url: "https://www.greenleft.org.au/2026/1460/news/protesters-call-moratorium-data-centre-construction" },
      { label: "Change.org petition, Citizens of Tottenham", url: "https://www.change.org/p/object-the-expansion-of-nextdc-data-centre-in-west-footscray" }
    ],
    confidence: "high",
    updated: "2026-09-05"
  },
  {
    id: "perri-melbourne-dc",
    name: "Perri Melbourne Data Centre, West Footscray",
    location: "1 McArthur Street / 63 Sunshine Road, West Footscray, City of Maribyrnong",
    state: "VIC",
    lat: -37.803, lng: 144.874,
    status: "approved",
    capacity_mw: null,
    developer: "Perri Projects (Central Godown Pty Ltd / Albert Kennedy Pty Ltd)",
    summary: "Four-storey data centre on 2.72 hectares adjacent to the heritage-listed Goldsbrough Mort woolstore building, approved through Victoria's Development Facilitation Program. Located 10 metres from residential dwellings. Sits in the same West Footscray/Tottenham precinct as NEXTDC M3, roughly 300 m away. WorkSafe Victoria lodged concerns in December 2024 about proximity to housing, then amended its position to a conditional approval requiring Fire Rescue Victoria consultation and a fire safety study — advice FRV members described to the ABC as unenforceable.",
    community: "Hundreds of residents protested on 9 August 2026 alongside the NEXTDC M3 site, organised by Borderlands Cooperative and Citizens of Tottenham. SBS reported on 1 September 2026 that a local resident described the community as having been 'sold down the river'. Residents emphasise the cumulative effect of two large data centre facilities on the same street in a neighbourhood of terrace houses and flats.",
    sources: [
      { label: "DCD, Jul 2026", url: "https://www.datacenterdynamics.com/en/news/data-center-planned-for-former-woolstore-in-west-melbourne-australia/" },
      { label: "ABC News, Jun 2026", url: "https://www.abc.net.au/news/2026-06-09/firefighter-concern-over-data-centres-in-melbourne-west/106762858" },
      { label: "SBS News, Sep 2026", url: "https://www.sbs.com.au/news/article/data-centre-rules-homes-schools-existing-residents/g0u6j2i43" }
    ],
    confidence: "medium",
    updated: "2026-09-05"
  },
  {
    id: "zerra-western-downs-qld",
    name: "Western Downs Digital Park (Zerra DC)",
    location: "1933 Dalby-Kogan Road, near Kogan, Western Downs Region",
    state: "QLD",
    lat: -27.000, lng: 150.650,
    status: "proposed",
    capacity_mw: 1440,
    developer: "Zerra DC (Singapore, subsidiary of AGP Sustainable Real Assets)",
    summary: "Four-phase data centre campus totalling 1.44 GW on 725.5 hectares of cattle grazing land 37 km north-west of Dalby and approximately 250 km north-west of Brisbane, estimated build cost $31.9 billion. Development application lodged with Western Downs Regional Council by project company WDDP Pty Ltd in August 2026. Each of the four 360 MW buildings would be 36,000 sqm. The site neighbours the 24,000-head Wambo Cattle Company feedlot, close to the Braemar and Darling Downs energy infrastructure corridor. Phase 1 includes a 540 MVA substation and battery-backed power conditioning system. Zerra proposes 100% air cooling with rainwater harvesting. Same developer as the contested Campbellfield (Project Dune) campus in Victoria.",
    community: "Western Downs mayor Andrew Smith flagged community concerns about water, power and the agricultural character of the site as the project entered consultation: 'those questions around water are very real and the applicant will need to deal with those.' Application is at early DA stage; no formal opposition group identified yet, but regional community consultation is opening.",
    sources: [
      { label: "ABC News, 24 Aug 2026", url: "https://www.abc.net.au/news/2026-08-24/plans-for-australia-largest-data-centre-in-regional-queensland/107071624" },
      { label: "DCD, Aug 2026", url: "https://www.datacenterdynamics.com/en/news/zerra-dc-files-plans-for-large-data-center-campus-in-queensland-australia/" },
      { label: "The Urban Developer, Sep 2026", url: "https://www.theurbandeveloper.com/articles/zerra-dc-data-centre-dalby-queensland" },
      { label: "Mingtiandi, Aug 2026", url: "https://www.mingtiandi.com/real-estate/data-centres/agps-zerra-files-plan-for-10-4b-queensland-data-centre-campus/" }
    ],
    confidence: "high",
    updated: "2026-09-05"
  },
  {
    id: "iren-bundey-sa",
    name: "IREN Bundey Data Centre Campus",
    location: "Near Bundey, Mid North SA (approx. 125 km north-east of Adelaide)",
    state: "SA",
    lat: -33.890, lng: 139.300,
    status: "proposed",
    capacity_mw: 800,
    developer: "IREN Limited (NASDAQ: IREN, formerly Iris Energy)",
    summary: "IREN's first announced Australian data centre campus: 800 MW near Bundey, South Australia, with energisation expected from 2028. A transmission connection agreement signed on 3 June 2026 secures four 330 kV feeder exits at the utility substation — sufficient for up to 800 MW without network upgrades and estimated investment of approximately $10 billion. The site sits within ElectraNet's proposed Northern Transmission Project (NTx) corridor. No development application has been lodged yet. IREN is pivoting from cryptocurrency mining to AI cloud infrastructure.",
    community: "No community opposition recorded at time of writing. The project has the public backing of SA Premier Peter Malinauskas. Community consultation would follow any DA lodgement.",
    sources: [
      { label: "IREN Globe Newswire, 3 Jun 2026", url: "https://iren.gcs-web.com/news-releases/news-release-details/iren-announces-first-australian-data-center-campus-800mw-south" },
      { label: "DCD, Jun 2026", url: "https://www.datacenterdynamics.com/en/news/iren-targets-australia-for-800mw-data-center-campus/" },
      { label: "w.media, Jun 2026", url: "https://w.media/iren-targets-bundey-transmission-hub-for-800mw-australian-data-centre-campus/" }
    ],
    confidence: "high",
    updated: "2026-09-05"
  }
];
