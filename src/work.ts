export type Shot = { src: string; alt: string; ratio: string; fit?: 'contain'; span?: 2 }

export type Project = {
  slug: string
  channel: 'magenta' | 'cyan' | 'gold'
  title: string
  discipline: string
  years: string
  role: string
  summary: string
  body: string[]
  cover: Shot
  shots: Shot[]
  link?: { href: string; label: string }
}

export const PROJECTS: Project[] = [
  {
    slug: 'sarah-bellus',
    channel: 'magenta',
    title: 'Sarah Bellus',
    discipline: 'Brand identity, print, website',
    years: '2026',
    role: 'Designer',
    summary: 'An identity for a Nigerian caterer in the UK, carried from the logo to the menu and the website.',
    body: [
      'Sarah cooks to order for weddings, naming ceremonies, birthdays and church events. She needed a name people could trust before they tasted anything, and a mark that still read on a phone screen and on a sticker the size of a coin.',
      'I drew the SiB monogram with a serving spoon standing in for the dot of the i. The palette is aubergine and cream with a single orange, taken from the colour of jollof. The same mark then went onto the printed menu, the food photos and a one-page website with an enquiry form.',
    ],
    cover: { src: '/work/sb-screen.jpg', alt: 'The Sarah Bellus website: a welcome line, an enquiry button and a plate of jollof rice', ratio: '16 / 9' },
    shots: [
      { src: '/work/sarahbellus-logo-on-aubergine.jpg', alt: 'The SiB monogram in cream on aubergine', ratio: '1 / 1' },
      { src: '/work/sarahbellus-menu-poster.jpg', alt: 'The printed Sarah Bellus menu', ratio: '4 / 5' },
      { src: '/work/sb-services.jpg', alt: 'The services section of the Sarah Bellus website', ratio: '16 / 10' },
      { src: '/work/sarahbellus-logo-on-bone.jpg', alt: 'The SiB monogram in aubergine on cream', ratio: '1 / 1' },
      { src: '/work/sarahbellus-efo-riro.jpg', alt: 'A bowl of efo riro marked with the SiB logo', ratio: '4 / 5' },
      { src: '/work/sb-menu.jpg', alt: 'The menu section of the Sarah Bellus website', ratio: '16 / 10' },
      { src: '/work/sb-about.jpg', alt: 'The about and enquiry form section of the Sarah Bellus website', ratio: '16 / 10' },
      { src: '/work/sb-mobile.jpg', alt: 'The Sarah Bellus website on a phone', ratio: '4 / 5', fit: 'contain' },
    ],
    link: { href: 'https://sarahbellus.com', label: 'sarahbellus.com' },
  },
  {
    slug: 'silent-party-9ja',
    channel: 'gold',
    title: 'Silent Party 9ja',
    discipline: 'Event branding, social, website',
    years: '2018 to 2023, and 2026',
    role: 'Design lead',
    summary: 'Design lead for a silent-disco events brand in Nigeria, part-time for five years, and now its new booking site.',
    body: [
      'Silent Party 9ja runs headphone parties: three DJs, three channels, and every guest picks their own. I led design for the brand part-time from 2018 to February 2023, working with the team on event flyers and social posts. That work belongs to the brand and is published on its Instagram.',
      'In 2026 I began a new identity and booking site for them. Each channel owns one colour and only one is ever live at a time, so the page changes colour as you turn the dial. It is in development.',
    ],
    cover: { src: '/work/sp9ja-screen.jpg', alt: 'The new Silent Party 9ja site: the loudest night you will never hear', ratio: '16 / 9' },
    shots: [
      { src: '/work/sp-card.jpg', alt: 'The Silent Party 9ja share card: plug in, tune the room', ratio: '1200 / 630' },
      { src: '/work/sp-how.jpg', alt: 'The how-it-works section: a party you wear on your head', ratio: '16 / 10' },
      { src: '/work/sp-mobile.jpg', alt: 'The Silent Party 9ja site on a phone', ratio: '4 / 5', fit: 'contain' },
    ],
    link: { href: 'https://www.instagram.com/silentparty9ja/', label: 'Silent Party 9ja on Instagram' },
  },
  {
    slug: 'bs-hive',
    channel: 'magenta',
    title: "B's Hive Hotels & Suites",
    discipline: 'Logo and stationery',
    years: '2019 to 2023',
    role: 'Designer, alongside Head Accountant',
    summary: 'The logo and letterhead for a hotel in Abuja, designed while I was running its accounts.',
    body: [
      "I joined B's Hive in Abuja as Head Accountant in 2019 and ended up responsible for how the hotel looked as well as how it balanced. I designed the logo, a B and an H locked into one block in the hotel's red and blue, and the letterhead that carried it, with the monogram repeated as a watermark.",
      'I also made the promotions and social posts for the hotel and its lounge during those years.',
    ],
    cover: { src: '/work/bshive-logo.jpg', alt: "The B's Hive Hotels and Suites logo: a red and blue BH monogram above the name", ratio: '16 / 9', fit: 'contain' },
    shots: [
      { src: '/work/bshive-letterhead.jpg', alt: "The B's Hive letterhead with logo, watermark and address footer", ratio: '210 / 297', fit: 'contain', span: 2 },
    ],
  },
  {
    slug: 'the-signal',
    channel: 'cyan',
    title: 'The Signal',
    discipline: 'Editorial design',
    years: '2026',
    role: 'Designer and editor',
    summary: 'A masthead, issue system and data figures for a publication on retail crime.',
    body: [
      'The Signal reviews retail security claims against the evidence. The design had to look like something that checks its facts: a white ground, one red, a newspaper masthead, numbered issues, and figures drawn from the sourced data in each piece.',
      'It also carries a corrections policy that stays on the record, which shaped the layout as much as the type did.',
    ],
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
    channel: 'cyan',
    title: 'Mykei Securities',
    discipline: 'Company identity and website',
    years: '2026',
    role: 'Founder and designer',
    summary: 'Brand and website for a security start-up I founded.',
    body: [
      'Mykei is a security start-up I founded. I designed its identity and its website, and set a rule that every colour on the site comes from one file, after an early version drifted into five slightly different golds.',
      'The result is nine colours, all checked for contrast, used the same way on every page.',
    ],
    cover: { src: '/work/mykei-securities-site.png', alt: 'The mykei.io homepage', ratio: '16 / 9' },
    shots: [
      { src: '/work/mykei-band.jpg', alt: 'A white and a dark band from the mykei.io homepage', ratio: '16 / 10' },
    ],
    link: { href: 'https://mykei.io', label: 'mykei.io' },
  },
]

export const bySlug = (slug?: string) => PROJECTS.find(p => p.slug === slug)
