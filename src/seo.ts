import { PROJECTS } from './work'

// Everything a crawler or link preview needs that is not already the page's own
// title, description and canonical (those come from each page's <Helmet>): the
// share image, the Open Graph type, and the structured data. scripts/prerender.mjs
// writes this into each page's <head>, so it exists in the first response.

export const SITE = 'https://michaelesema.com'
const PERSON_ID = `${SITE}/#person`
const CARD = `${SITE}/michael-esema-card.png`

export type Seo = {
  type: 'website' | 'profile'
  image: string
  imageAlt: string
  jsonld: object[]
}

const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Michael Esema',
  givenName: 'Michael',
  additionalName: 'Essien',
  familyName: 'Esema',
  alternateName: ['Michael Essien Esema', 'Mike Esema'],
  jobTitle: 'Graphic and Multimedia Designer',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Graphic and Multimedia Designer',
    skills: 'Brand identity, logo design, print and editorial layout, web design, social media graphics, video editing, art direction',
  },
  description: 'Michael Esema is a graphic and multimedia designer based in the United Kingdom. He has designed brand identities, print and social content since 2018, and now also websites. He holds a BSc in Accounting, an MBA and an MSc in International Business Management.',
  knowsAbout: ['Graphic design', 'Brand identity', 'Logo design', 'Typography', 'Editorial design', 'Print design', 'Web design', 'UI design', 'Social media design', 'Video editing', 'Art direction', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Canva', 'CapCut', 'Blender'],
  url: SITE,
  image: `${SITE}/michael-esema-portrait.jpg`,
  email: 'hello@michaelesema.com',
  homeLocation: { '@type': 'Country', name: 'United Kingdom' },
  address: { '@type': 'PostalAddress', addressCountry: 'GB' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Manchester Metropolitan University', alternateName: 'MMU' },
    { '@type': 'CollegeOrUniversity', name: 'Nigerian Defence Academy', alternateName: 'NDA' },
    { '@type': 'CollegeOrUniversity', name: 'Benson Idahosa University', alternateName: 'BIU' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MSc International Business Management (Merit)', dateCreated: '2024', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Manchester Metropolitan University' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master of Business Administration (MBA)', dateCreated: '2022', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Nigerian Defence Academy' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'BSc (Hons) Accounting', dateCreated: '2018', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Benson Idahosa University' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Lean Six Sigma', dateCreated: '2025' },
  ],
  sameAs: ['https://www.linkedin.com/in/michaelesema', 'https://github.com/Thatmikee', 'https://linktr.ee/mikeyesema'],
}

// A one-person design practice. No street address is published on purpose, so this
// describes the service and where it works without claiming a shop front.
const SERVICE = {
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#service`,
  name: 'Michael Esema',
  url: SITE,
  image: CARD,
  logo: `${SITE}/logo.png`,
  email: 'hello@michaelesema.com',
  description: 'Brand identity, print and web design for small businesses.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: ['Brand identity design', 'Logo design', 'Print and editorial design', 'Web design'],
  founder: { '@id': PERSON_ID },
}

const CTX = 'https://schema.org'
const ref = { '@type': 'Person', '@id': PERSON_ID, name: 'Michael Esema', url: SITE }

const crumbs = (items: [string, string][]) => ({
  '@context': CTX,
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${path}` })),
})

const HOME: [string, string] = ['Home', '/']
const url = (path: string) => `${SITE}${path === '/' ? '/' : path}`

export function seo(path: string): Seo {
  const base = { type: 'website' as const, image: CARD, imageAlt: 'Michael Esema, graphic and multimedia designer', jsonld: [] as object[] }

  switch (path) {
    case '/':
      return {
        ...base,
        type: 'profile',
        jsonld: [
          { '@context': CTX, '@type': 'ProfilePage', url: url('/'), mainEntity: PERSON },
          { '@context': CTX, '@type': 'WebSite', name: 'Michael Esema', url: SITE, description: 'Portfolio of Michael Esema, graphic and multimedia designer.', publisher: { '@id': PERSON_ID } },
          { '@context': CTX, ...SERVICE },
        ],
      }
    case '/work':
      return {
        ...base,
        jsonld: [
          {
            '@context': CTX, '@type': 'CollectionPage', name: 'Selected work', url: url('/work'),
            mainEntity: { '@type': 'ItemList', itemListElement: PROJECTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: url(`/work/${p.slug}`), name: p.title })) },
          },
          crumbs([HOME, ['Work', '/work']]),
        ],
      }
    case '/blog':
      return { ...base, jsonld: [{ '@context': CTX, '@type': 'Blog', name: 'Michael Esema, blog', url: url('/blog'), author: ref }, crumbs([HOME, ['Blog', '/blog']])] }
    case '/about':
      return { ...base, jsonld: [{ '@context': CTX, '@type': 'AboutPage', name: 'About Michael Esema', url: url('/about'), mainEntity: ref }, crumbs([HOME, ['About', '/about']])] }
    case '/privacy':
      return { ...base, jsonld: [{ '@context': CTX, '@type': 'WebPage', name: 'Privacy and cookies', url: url('/privacy'), isPartOf: { '@type': 'WebSite', url: SITE } }, crumbs([HOME, ['Privacy and cookies', '/privacy']])] }
  }

  const slug = path.startsWith('/work/') ? path.slice('/work/'.length) : ''
  const p = PROJECTS.find(x => x.slug === slug)
  if (!p) return base
  const image = `${SITE}/og/${p.slug}.jpg`
  return {
    type: 'website',
    image,
    imageAlt: p.cover.alt,
    jsonld: [
      {
        '@context': CTX, '@type': 'CreativeWork', name: p.title, description: p.summary, url: url(path), image,
        creator: ref, genre: p.discipline, inLanguage: 'en-GB',
        isPartOf: { '@type': 'CollectionPage', name: 'Selected work', url: url('/work') },
      },
      crumbs([HOME, ['Work', '/work'], [p.title, path]]),
    ],
  }
}
