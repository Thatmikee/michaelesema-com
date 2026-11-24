export type Shot = { src: string; alt: string; ratio: string; fit?: 'contain'; span?: 2 }

// A brand world gives a case study its own ground and its own board sequence,
// the way the client's identity would. Every colour pair is checked for WCAG AA
// where it is chosen, so the page file never declares a colour of its own.
export type Theme = { ground: string; ink: string; accent: string; onAccent: string }

export type Board =
  | { kind: 'full'; shot: Shot }
  | { kind: 'pair'; shots: [Shot, Shot]; ratio: string; caption?: string }
  | { kind: 'palette'; swatches: { name: string; hex: string; text: string }[] }
  | { kind: 'video'; src: string; poster: string; alt: string; caption: string }
  | { kind: 'band'; text: string }

export type World = { theme: Theme; statement: string; boards: Board[] }

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
  world?: World
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
    years: '2018 to 2023, and 2026',
    role: 'Design lead',
    summary: 'Design lead, part-time, for a silent-disco events brand in Nigeria from 2018 to 2023, and now its new booking site.',
    brief: 'Lead design for Silent Party 9ja, a silent-disco events brand in Nigeria, part-time from 2018 to February 2023, then design a new identity and booking site in 2026.',
    challenge: 'Silent Party 9ja runs headphone parties: three DJs, three channels, and every guest picks their own. The new site has to show that choice.',
    audience: 'Partygoers, and the people booking a party.',
    made: [
      'Visual identity and promotional materials, 2018 to 2023. This work belongs to the brand and is published on its Instagram.',
      'A new identity and booking site, 2026, in development.',
    ],
    process: 'Each channel owns one colour and only one is ever live at a time, so the page changes colour as you turn the dial.',
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
    summary: 'Brand and website for a security start-up I founded.',
    brief: 'Design the identity and the website for Mykei Securities, a security technology start-up I founded.',
    challenge: 'An early version of the site drifted into five slightly different golds.',
    made: [
      'The company identity',
      'The website at mykei.io',
      'One colour file that every page imports',
    ],
    process: 'I set a rule that every colour on the site comes from one file.',
    outcome: 'Nine colours, all checked for contrast, used the same way on every page.',
    cover: { src: '/work/mykei-securities-site.png', alt: 'The mykei.io homepage', ratio: '16 / 9' },
    shots: [
      { src: '/work/mykei-band.jpg', alt: 'A white and a dark band from the mykei.io homepage', ratio: '16 / 10' },
    ],
    link: { href: 'https://mykei.io', label: 'mykei.io' },
  },
]

export const bySlug = (slug?: string) => PROJECTS.find(p => p.slug === slug)
