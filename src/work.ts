export type Shot = { src: string; alt: string; ratio: string; fit?: 'contain'; span?: 2 }

// A brand world gives a case study its own ground and its own board sequence,
// the way the client's identity would. Every colour pair is checked for WCAG AA
// where it is chosen, so the page file never declares a colour of its own.
export type Theme = { ground: string; ink: string; accent: string; onAccent: string }

export type Board =
  | { kind: 'full'; shot: Shot }
  | { kind: 'pair'; shots: [Shot, Shot]; ratio: string; caption?: string }
  | { kind: 'palette'; swatches: { name: string; hex: string; text: string }[] }
  | { kind: 'flyers'; shots: Shot[]; caption: string }
  | { kind: 'video'; src: string; poster: string; alt: string; caption: string }
  | { kind: 'band'; text: string }

// hero is 'scene' when the picture is a generated scene (title laid over it, and the
// page says it is a mock-up) and 'screen' for a plain screenshot (title stacked below).
export type World = { theme: Theme; statement: string; hero: 'scene' | 'screen'; boards: Board[] }

// Every field after `role` is optional on purpose: a case study shows only what
// is true and sourced. Nothing here is filled in to make a page look complete.
export type Project = {
  slug: string
  home: boolean
  title: string
  discipline: string
  years: string
  role: string
  summary: string
  brief: string
  challenge: string
  audience?: string
  made: string[]
  process?: string
  outcome?: string
  world: World
  cover: Shot
  shots: Shot[]
  link?: { href: string; label: string }
}

export const PROJECTS: Project[] = [
  {
    slug: 'sarah-bellus',
    home: true,
    title: 'Sarah Bellus',
    discipline: 'Brand identity, print, website',
    years: '2026',
    role: 'Designer',
    summary: 'An identity for a Nigerian caterer in the UK, carried from the logo to the menu and the website.',
    brief: 'Create an identity for Sarah Bellus, a Nigerian caterer in the UK who cooks to order, and carry it from the logo to the printed menu and a one-page website.',
    challenge: 'She needed a name people could trust before they tasted anything, and a mark that still read on a phone screen and on a sticker the size of a coin.',
    audience: 'People in the UK booking food for weddings, naming ceremonies, birthdays and church events.',
    made: [
      'The SiB monogram, in two colourways',
      'A printed menu',
      'Food photography treated with the mark',
      'A one-page website with an enquiry form',
    ],
    process: 'A serving spoon stands in for the dot of the i. The palette is aubergine and cream with a single orange, taken from the colour of jollof. The same mark then went onto the menu, the food photos and the website.',
    // Colours are sampled from Sarah's own logo files. Verified contrast:
    // bone on aubergine 16.26, aubergine on orange 5.84, orange on aubergine 5.84.
    // Orange on bone is 2.78 and fails, so it is only ever used as a fill.
    world: {
      theme: { ground: '#1A0F1F', ink: '#F6EEF0', accent: '#E86B42', onAccent: '#1A0F1F' },
      statement: 'A name people can trust before they taste anything.',
      hero: 'scene',
      boards: [
        { kind: 'pair', ratio: '1 / 1', shots: [
          { src: '/work/sarahbellus-logo-on-aubergine.jpg', alt: 'The SiB monogram in cream on aubergine', ratio: '1 / 1' },
          { src: '/work/sarahbellus-logo-on-bone.jpg', alt: 'The SiB monogram in aubergine on cream', ratio: '1 / 1' },
        ] },
        { kind: 'palette', swatches: [
          { name: 'Aubergine', hex: '#1A0F1F', text: '#F6EEF0' },
          { name: 'Bone', hex: '#F6EEF0', text: '#1A0F1F' },
          { name: 'Orange', hex: '#E86B42', text: '#1A0F1F' },
        ] },
        { kind: 'pair', ratio: '1 / 1', caption: 'Mock-ups: the mark is mine, the box and the bag are generated.', shots: [
          { src: '/work/sb-box.jpg', alt: 'Mock-up of a takeaway box with the SiB mark on a coin-sized round sticker', ratio: '1 / 1' },
          { src: '/work/sb-bag.jpg', alt: 'Mock-up of a kraft carrier bag with the SiB mark printed on the front', ratio: '1 / 1' },
        ] },
        { kind: 'video', src: '/work/sb-live.mp4', poster: '/work/sb-live-poster.jpg', alt: 'A recording of sarahbellus.com scrolling from the welcome line, through the services, to the enquiry form', caption: 'sarahbellus.com, recorded live.' },
        { kind: 'pair', ratio: '4 / 5', shots: [
          { src: '/work/sarahbellus-menu-poster.jpg', alt: 'The printed Sarah Bellus menu', ratio: '4 / 5' },
          { src: '/work/sarahbellus-efo-riro.jpg', alt: 'A bowl of efo riro marked with the SiB logo', ratio: '4 / 5' },
        ] },
        { kind: 'band', text: 'Cooked to order for weddings, naming ceremonies, birthdays and church events.' },
        { kind: 'pair', ratio: '1 / 1', shots: [
          { src: '/work/sb-services.jpg', alt: 'The services section of the Sarah Bellus website', ratio: '16 / 10' },
          { src: '/work/sb-mobile.jpg', alt: 'The Sarah Bellus website on a phone', ratio: '4 / 5', fit: 'contain' },
        ] },
      ],
    },
    cover: { src: '/work/sarahbellus-scene.jpg', alt: 'The Sarah Bellus menu and logo card laid on a table beside a plate of jollof rice', ratio: '16 / 10' },
    shots: [
      { src: '/work/sb-screen.jpg', alt: 'The Sarah Bellus website: a welcome line, an enquiry button and a plate of jollof rice', ratio: '16 / 10', span: 2 },
      { src: '/work/sarahbellus-logo-on-aubergine.jpg', alt: 'The SiB monogram in cream on aubergine', ratio: '1 / 1' },
      { src: '/work/sarahbellus-menu-poster.jpg', alt: 'The printed Sarah Bellus menu', ratio: '4 / 5' },
      { src: '/work/sb-services.jpg', alt: 'The services section of the Sarah Bellus website', ratio: '16 / 10' },
      { src: '/work/sarahbellus-logo-on-bone.jpg', alt: 'The SiB monogram in aubergine on cream', ratio: '1 / 1' },
      { src: '/work/sarahbellus-efo-riro.jpg', alt: 'A bowl of efo riro marked with the SiB logo', ratio: '4 / 5' },
      { src: '/work/sb-mobile.jpg', alt: 'The Sarah Bellus website on a phone', ratio: '4 / 5', fit: 'contain' },
    ],
    link: { href: 'https://sarahbellus.com', label: 'sarahbellus.com' },
  },
  {
    slug: 'silent-party-9ja',
    home: true,
    title: 'Silent Party 9ja',
    discipline: 'Event branding, promotional materials, website',
    years: '2018 to now',
    role: 'Design lead, then occasional designer',
    summary: 'Design lead, part-time, for a silent-disco events brand in Nigeria from 2018, and still designing for them now and then, including its new booking site.',
    brief: 'Lead design for Silent Party 9ja, a silent-disco events brand in Nigeria: part-time design lead from 2018 to February 2023, and I still design for the brand now and then. In 2026 I began a new identity and booking site.',
    challenge: 'Silent Party 9ja runs headphone parties: three DJs, three channels, and every guest picks their own. The new site has to show that choice.',
    audience: 'Partygoers, and the people booking a party.',
    made: [
      'Visual identity and promotional materials, from 2018 as design lead, part-time, and since February 2023 as an occasional designer. This work belongs to the brand and is published on its Instagram.',
      'A new identity and booking site, 2026, in development.',
    ],
    process: 'Each channel owns one colour and only one is ever live at a time, so the page changes colour as you turn the dial.',
    // Colours sampled from the brand's own site screens. Pink on ground 4.94,
    // ink on ground 16.97. The site gives each channel one colour; pink is shown here.
    world: {
      theme: { ground: '#140B11', ink: '#F2F0EA', accent: '#EC2D93', onAccent: '#140B11' },
      statement: 'Three DJs, three channels, and every guest picks their own.',
      hero: 'scene',
      boards: [
        { kind: 'pair', ratio: '16 / 10', shots: [
          { src: '/work/sp-how.jpg', alt: 'The how-it-works section: a party you wear on your head', ratio: '16 / 10' },
          { src: '/work/sp-mobile.jpg', alt: 'The Silent Party 9ja site on a phone', ratio: '4 / 5', fit: 'contain' },
        ] },
        { kind: 'flyers', caption: 'Silent Cinema, 20 August 2022, and Silent Disco, 13 September 2025, for Silent Party 9ja. The brand owns this work.', shots: [
          { src: '/work/sp-silent-cinema-2022.jpg', alt: 'Silent Cinema, Silent Party flyer dated 20 August 2022: glowing white lettering over a red cinema with popcorn and sponsor logos', ratio: '1 / 1' },
          { src: '/work/sp-silent-disco-2025.jpg', alt: 'Silent Disco, an all headphones party, 13 September 2025: bold white lettering in a frame over dark teal swirls, gold inflatable rings and a pink and purple headphone', ratio: '1 / 1' },
        ] },
        { kind: 'band', text: 'The page changes colour as you turn the dial.' },
      ],
    },
    cover: { src: '/work/sp-board.jpg', alt: 'The new Silent Party 9ja site on a tablet and a phone, lit in pink', ratio: '16 / 10' },
    shots: [
      { src: '/work/sp-how.jpg', alt: 'The how-it-works section: a party you wear on your head', ratio: '16 / 10' },
      { src: '/work/sp-mobile.jpg', alt: 'The Silent Party 9ja site on a phone', ratio: '4 / 5', fit: 'contain' },
    ],
    link: { href: 'https://www.instagram.com/silentparty9ja/', label: 'Silent Party 9ja on Instagram' },
  },
  {
    slug: 'bs-hive',
    home: true,
    title: "B's Hive Hotels & Suites",
    discipline: 'Brand identity, stationery, merchandise, promotions',
    years: '2019 to 2023',
    role: 'Designer, alongside Head Accountant',
    summary: 'The logo for a hotel in Abuja, and everything it was printed on, designed while I was running its accounts.',
    brief: "Design the logo for B's Hive Hotels & Suites in Abuja, and everything it was printed on, while running the hotel's accounts.",
    challenge: 'One mark had to work on a letterhead, as a watermark, and on small objects such as pens and mugs.',
    audience: 'Hotel guests, and the managers, investors and partners who received its documents.',
    made: [
      "The logo: a B and an H locked into one block, in the hotel's red and blue",
      'A letterhead with the monogram repeated as a watermark',
      'Notebooks, jotters, pens, mugs and flasks',
      'Promotions and social posts for the hotel and its lounge',
      'Event flyers, seasonal campaign assets and digital signage, 2020 to 2023',
    ],
    process: 'For printed pieces I wrote the briefs for outside print vendors, checked proofs and delivered final files to budget and deadline.',
    // Blue and red are sampled from the logo on the letterhead. Blue on white 7.05,
    // red on white 4.6, white on red 4.6. White on blue is 7.05.
    world: {
      theme: { ground: '#FFFFFF', ink: '#0F1630', accent: '#CF434C', onAccent: '#FFFFFF' },
      statement: 'One mark that had to work on a letterhead and on a mug.',
      hero: 'scene',
      boards: [
        { kind: 'palette', swatches: [
          { name: 'Blue', hex: '#3C559D', text: '#FFFFFF' },
          { name: 'Red', hex: '#CF434C', text: '#FFFFFF' },
        ] },
        { kind: 'flyers', caption: 'Flyers and posts for the hotel and its lounge, 2020 to 2023. Shown from saved screenshots.', shots: [
          { src: '/work/bsh-silent-cinema.jpg', alt: "Silent Cinema flyer for B's Hive, 22 April 2022: gold lettering over red curtains, popcorn and a film reel", ratio: '1100 / 1177' },
          { src: '/work/bsh-abuja-silent-party.jpg', alt: "Flyer for the Abuja Silent Party, B's Hive Hotels with Silent Party 9ja: silver DJ headphones over layered triangles in pink and blue", ratio: '1100 / 1268' },
          { src: '/work/bsh-lounge-karaoke.jpg', alt: "B's Hive Lounge karaoke nights flyer on a blue striped ground with an orange panel and a microphone", ratio: '1100 / 1353' },
          { src: '/work/bsh-womens-day.jpg', alt: "International Women's Day post for B's Hive in blue and red, with three women embracing", ratio: '1100 / 1108' },
          { src: '/work/bsh-fathers-day.jpg', alt: "Father's Day post for B's Hive: a continuous blue line drawing of a father with a child on his shoulders", ratio: '1100 / 1088' },
          { src: '/work/bsh-playroom-karaoke.jpg', alt: "Karaoke Night flyer for Playroom at B's Hive Hotel: silver lettering on a purple city-night ground with a black disc and dice", ratio: '1100 / 1358' },
          { src: '/work/bsh-epl-weekend.jpg', alt: "B's Hive flyer, Watch the EPL live in HD every weekend: seven footballers on a blue sunburst ground with bold white and yellow lettering", ratio: '1100 / 775' },
        ] },
        { kind: 'pair', ratio: '4 / 5', shots: [
          { src: '/work/bshive-letterhead.jpg', alt: "The B's Hive letterhead with logo, watermark and address footer", ratio: '210 / 297', fit: 'contain' },
          { src: '/work/bshive-board.jpg', alt: "Mock-up of the B's Hive letterhead on a stone desk beside a room key and a pen", ratio: '4 / 5' },
        ] },
        { kind: 'band', text: 'Letterhead, notebooks, jotters, pens, mugs and flasks.' },
      ],
    },
    cover: { src: '/work/bshive-merch.jpg', alt: "The B's Hive logo on a notebook, a mug, a flask and a jotter", ratio: '3 / 2' },
    shots: [
      { src: '/work/bshive-board.jpg', alt: "The B's Hive letterhead on a stone desk beside a room key and a pen", ratio: '16 / 10', span: 2 },
      { src: '/work/bshive-letterhead.jpg', alt: "The B's Hive letterhead with logo, watermark and address footer", ratio: '210 / 297', fit: 'contain', span: 2 },
    ],
  },
  {
    slug: 'the-signal',
    home: true,
    title: 'The Signal',
    discipline: 'Publication design, data figures',
    years: '2026',
    role: 'Designer and editor',
    summary: 'A masthead, issue system and data figures for a publication on retail crime.',
    brief: 'Design the masthead, issue system and data figures for The Signal, a publication that reviews retail security claims against the evidence.',
    challenge: 'It had to look like something that checks its facts, and it carries a corrections policy that stays on the record.',
    made: [
      'A newspaper masthead',
      'Numbered issues, with a back-of-book index',
      'Figures drawn from the sourced data in each piece',
    ],
    process: 'A white ground, one red and a newspaper masthead keep it looking like a record. The corrections policy shaped the layout as much as the type did.',
    // Tokens are The Signal's own, measured in signalRed.ts: ink on white 18.58,
    // red on white 5.33, white on red 5.33.
    world: {
      theme: { ground: '#FFFFFF', ink: '#111318', accent: '#D8001F', onAccent: '#FFFFFF' },
      statement: 'It had to look like something that checks its facts.',
      hero: 'screen',
      boards: [
        { kind: 'palette', swatches: [
          { name: 'Ground', hex: '#FFFFFF', text: '#111318' },
          { name: 'Ink', hex: '#111318', text: '#FFFFFF' },
          { name: 'Red', hex: '#D8001F', text: '#FFFFFF' },
        ] },
        { kind: 'video', src: '/work/signal-live.mp4', poster: '/work/signal-live-poster.jpg', alt: 'A recording of mykei.io/signal scrolling from the red masthead through the cover story and the article columns', caption: 'mykei.io/signal, recorded live.' },
        { kind: 'pair', ratio: '16 / 10', shots: [
          { src: '/work/signal-well.jpg', alt: 'The Signal article grid, set in columns like a newspaper', ratio: '16 / 10' },
          { src: '/work/signal-index.jpg', alt: 'The Signal back-of-book index of every issue', ratio: '16 / 10' },
        ] },
        { kind: 'band', text: 'Corrections stay on the record.' },
      ],
    },
    cover: { src: '/work/signal-screen.jpg', alt: 'The Signal front page with a red masthead and cover story', ratio: '16 / 9' },
    shots: [
      { src: '/work/signal-well.jpg', alt: 'The Signal article grid, set in columns like a newspaper', ratio: '16 / 10' },
      { src: '/work/signal-index.jpg', alt: 'The Signal back-of-book index of every issue', ratio: '16 / 10' },
      { src: '/work/signal-mobile.jpg', alt: 'The Signal on a phone', ratio: '4 / 5', fit: 'contain' },
    ],
    link: { href: 'https://mykei.io/signal', label: 'mykei.io/signal' },
  },
  {
    slug: 'mykei',
    home: false,
    title: 'Mykei Securities',
    discipline: 'Brand identity, website',
    years: '2026',
    role: 'Founder and designer',
    summary: 'Brand identity and website for Mykei Securities, a security technology start-up I founded.',
    brief: 'Design the identity and the website for Mykei Securities, a security technology start-up I founded.',
    challenge: 'An early version of the site drifted into five slightly different golds.',
    made: [
      'The company identity',
      'The website at mykei.io',
      'One colour file that every page imports',
    ],
    process: 'I set a rule that every colour on the site comes from one file.',
    outcome: 'Every colour is checked for contrast and used the same way on every page.',
    // Tokens are the Signal red edition's own, measured in signalRed.ts: ink on
    // white 18.58, red on white 5.33, white on red 5.33. No colour count is claimed here.
    world: {
      theme: { ground: '#FFFFFF', ink: '#111318', accent: '#D8001F', onAccent: '#FFFFFF' },
      statement: 'Every colour on the site comes from one file.',
      hero: 'screen',
      boards: [
        { kind: 'video', src: '/work/mykei-live.mp4', poster: '/work/mykei-live-poster.jpg', alt: 'A recording of mykei.io scrolling through the homepage: the problem statement, the explanation of the device and the three parts working together', caption: 'mykei.io, recorded live.' },
        { kind: 'band', text: 'One colour file. Every page imports it.' },
        { kind: 'full', shot: { src: '/work/mykei-band.jpg', alt: 'A white and a dark band from the mykei.io homepage', ratio: '16 / 10' } },
      ],
    },
    cover: { src: '/work/mykei-securities-site.png', alt: 'The mykei.io homepage', ratio: '16 / 9' },
    shots: [
      { src: '/work/mykei-band.jpg', alt: 'A white and a dark band from the mykei.io homepage', ratio: '16 / 10' },
    ],
  },
]

export const bySlug = (slug?: string) => PROJECTS.find(p => p.slug === slug)
