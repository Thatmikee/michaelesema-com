import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence',
  alternativeHeadline: 'Removing the Commercial Incentive for Retail Theft Through Forensic Marking and Real-Time Marketplace Flagging',
  description: 'A scholarly examination of Economic Sterilisation: the doctrine that stolen goods, once forensically marked and flagged across digital marketplaces, have no resale value and therefore no theft value. First published by Michael Esema, Mykei Securities Ltd, 2025.',
  author: {
    '@type': 'Person',
    '@id': 'https://michaelesema.com/#person',
    name: 'Michael Esema',
    additionalName: 'Essien',
    url: 'https://michaelesema.com',
    jobTitle: 'Founder & CEO, Mykei Securities Ltd',
  },
  datePublished: '2025',
  dateModified: '2026-04-14',
  publisher: { '@type': 'Organization', name: 'Mykei Securities Ltd', url: 'https://mykei.io' },
  url: 'https://michaelesema.com/thesis',
  keywords: 'Economic Sterilisation, retail crime, forensic marking, synthetic DNA, ADN-1, Mykei Securities',
}

const GOLD = '#C9A227'
const INK  = '#1A1A1A'
const MUTED = '#6B6B6B'
const BORDER = '#E8E8E8'
const BG_WARM = '#F8F8F8'

export default function ThesisPage() {
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    document.title = 'Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence | Michael Esema'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    scriptRef.current = script
    return () => { if (scriptRef.current) { document.head.removeChild(scriptRef.current); scriptRef.current = null } }
  }, [])

  const body: React.CSSProperties = {
    fontFamily: "'Outfit', sans-serif", fontSize: 17, lineHeight: 1.9,
    color: MUTED, marginBottom: 24,
  }
  const h2: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif", fontSize: 26, fontWeight: 700,
    color: INK, marginTop: 56, marginBottom: 16, letterSpacing: '-0.01em',
  }
  const h3: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 600,
    fontStyle: 'italic', color: INK, marginTop: 32, marginBottom: 12,
  }

  return (
    <>
      <Nav />

      {/* ── Header — white ── */}
      <section style={{
        background: '#FFFFFF',
        borderBottom: `1px solid ${BORDER}`,
        paddingTop: 140, paddingBottom: 72,
        paddingLeft: 24, paddingRight: 24,
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: GOLD, marginBottom: 28 }}
          >
            Working Paper · Mykei Securities Ltd · 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 700, fontStyle: 'italic', lineHeight: 1.25, color: INK, marginBottom: 20 }}
          >
            Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, lineHeight: 1.6, color: MUTED, marginBottom: 32 }}
          >
            Removing the Commercial Incentive for Retail Theft Through Forensic Marking and Real-Time Marketplace Flagging
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.24 }}
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: MUTED, marginBottom: 4 }}>
            Michael Esema, Inventor of the ADN-1 &nbsp;|&nbsp; Mykei Securities Ltd, Manchester
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.28 }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#88887F', marginBottom: 48 }}>
            First published 2025. Revised April 2026.
          </motion.div>

          {/* Abstract */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }}
            style={{ background: BG_WARM, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${GOLD}`,
              borderRadius: 4, padding: '28px 32px' }}
          >
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: GOLD, marginBottom: 14 }}>Abstract</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.85, color: MUTED, margin: 0 }}>
              The doctrine of Economic Sterilisation proposes that retail theft is better addressed as a commercial problem than a security one. By rendering stolen goods forensically marked, cloud-logged, and marketplace-flagged, the resale value of those goods is eliminated before a buyer can be found. Where conventional retail security targets the act of theft, Economic Sterilisation targets its economic precondition. This paper defines the doctrine, situates it within existing retail crime literature, examines the technology and infrastructure of the ADN-1 implementation, presents evidence from global forensic marking programmes, and models adoption effects across the UK independent retail sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body — warm white ── */}
      <section style={{ background: BG_WARM, paddingTop: 72, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
        <article style={{ maxWidth: 760, margin: '0 auto' }}>

          <h2 style={h2}>1. Introduction</h2>
          <p style={body}>
            UK retail theft reached £1.8bn in annual shrinkage in 2024, according to the British Retail Consortium's Retail Crime Survey. The BRC recorded a 27% increase in retail shrinkage between 2022 and 2024. The Association of Convenience Stores (ACS) Crime Report 2024 documents that the average independent convenience store absorbs a theft loss of approximately £4,600 per year. Despite decades of sustained investment in deterrence infrastructure, the trend is unambiguously upward.
          </p>
          <p style={body}>
            The central argument of this paper is that deterrence-based security has reached a structural ceiling. Investment in deterrence raises the perceived cost of theft at the margin; it does not alter the underlying economics that make theft rational for organised actors. A shoplifter who expects to sell a swept beauty shelf for £300 on a digital resale platform within 24 hours is not primarily deterred by a CCTV camera, particularly where prosecution rates for retail theft remain low and resale platforms provide near-frictionless conversion of stolen goods to cash.
          </p>
          <p style={body}>
            This paper argues that retail theft is not primarily a security failure. It is a market failure. Stolen goods command market prices on digital resale platforms, creating a functioning secondary economy for criminal actors. The solution is not better deterrence but market destruction: the systematic elimination of resale value at the point of theft through forensic marking, cloud registration, and automated marketplace flagging. This is the doctrine of Economic Sterilisation.
          </p>

          <h2 style={h2}>2. The Global Evidence Base</h2>
          <h3 style={h3}>2.1 United Kingdom</h3>
          <p style={body}>
            The BRC Retail Crime Survey 2024 records £4.2bn in total retail theft losses across the UK, inclusive of shrinkage from customer theft, staff theft, and supply chain fraud. Customer theft alone accounts for 56% of this figure. The BRC notes that incidents involving violence or abuse against retail workers rose 50% year-on-year in 2023/24. The Met Police's Operation Opal, a national intelligence unit targeting organised retail crime (ORC), has documented ORC networks operating across 15 or more UK cities simultaneously, using coordinated sweep-and-sell operations with defined logistics infrastructure.
          </p>
          <h3 style={h3}>2.2 United States</h3>
          <p style={body}>
            The National Retail Federation's 2024 Retail Security Survey places US retail shrinkage at $112.1 billion annually. ORC alone accounts for $45 billion of this figure. The NRF documents that 98% of retailers experienced ORC activity in the preceding 12 months. California's AB 331 (2023) established a Retail Theft Task Force specifically in response to coordinated sweep events at high-profile retailers including Target and Nordstrom. LAPD data from 2023 identified 64 distinct ORC networks operating within Los Angeles County, each with structured hierarchy, defined territories, and identified resale infrastructure.
          </p>
          <h3 style={h3}>2.3 European Union</h3>
          <p style={body}>
            EuroCommerce estimates European retail shrinkage at approximately €25 billion per year across EU member states. The European Crime Prevention Network (EUCPN) 2023 Thematic Paper on ORC identifies resale platform proliferation as the primary driver of increased ORC activity post-2020. Vinted, which operates across 20+ European markets, reported over 100 million registered users in 2024. Cross-border ORC operations routinely exploit national jurisdiction gaps: goods stolen in Germany are listed on French or Dutch platforms to reduce detection probability. Europol's 2024 EU Serious and Organised Crime Threat Assessment (SOCTA) names ORC a Tier 2 organised crime priority for the first time.
          </p>
          <h3 style={h3}>2.4 Australia</h3>
          <p style={body}>
            The Australian Retailers Association (ARA) 2024 Retail Crime Report documents AU$9 billion in annual retail theft losses. The Australian Federal Police identified a 35% increase in ORC activity in the 2022-24 period, attributing the increase to the rapid expansion of Facebook Marketplace and Gumtree as resale channels. The ARA has formally lobbied the Australian Competition and Consumer Commission (ACCC) to mandate resale platform identity verification, citing the direct link between anonymous resale infrastructure and ORC growth.
          </p>
          <h3 style={h3}>2.5 The Common Thread: Resale Infrastructure</h3>
          <p style={body}>
            Across all jurisdictions, the consistent and accelerating factor is the growth of accessible, near-anonymous digital resale infrastructure. eBay, Vinted, Facebook Marketplace, Gumtree, Depop, TikTok Shop, and Instagram Shops collectively represent a liquid secondary market for any stolen product with retail demand. The criminal economics are straightforward: theft cost is approximately zero for an organised actor; resale yield is 40-70% of retail value; the transaction is completed within 24 to 48 hours. Economic Sterilisation is the only proposed intervention that operates at the resale layer rather than the theft layer.
          </p>

          <h2 style={h2}>3. Literature Review and Prior Art</h2>
          <p style={body}>
            Existing approaches to retail crime prevention group into four categories. Electronic Article Surveillance (EAS) remains the dominant deployed technology in UK and US retail. Its limitations are well-documented: tags are defeated with commercially available tools, and the technology does not address goods that exit without triggering an alarm. CCTV and AI-enhanced video analytics provide evidence but not prevention. Despite the UK holding one of the highest CCTV densities globally, BRC data shows no correlation between camera density and theft rate reduction. Security personnel provide deterrence signal but are unaffordable for the sub-100 sqm independent store, which represents the majority of UK convenience retail.
          </p>
          <p style={body}>
            Fourth, forensic property marking. SelectaDNA and comparable providers have offered commercial forensic tagging solutions for over a decade. The Metropolitan Police's Operation Opal has incorporated DNA-tagging into targeted interventions with documented deterrence effects. The core innovation in Economic Sterilisation is not forensic marking per se. It is the integration of marking, cloud registration, and automated marketplace flagging as an autonomous, event-driven system accessible to a single-unit independent retailer without specialist security infrastructure.
          </p>
          <p style={body}>
            Clarke's Situational Crime Prevention theory (1980, revised 2008) provides the theoretical ancestor. Clarke argues that crime is rational and opportunity-driven, and that reducing the expected reward of crime is as effective as increasing its expected cost. Economic Sterilisation applies this principle at the revenue layer: it does not raise the cost of stealing; it eliminates the reward.
          </p>
          <p style={body}>
            Felson and Cohen's Routine Activity Theory (1979) identifies three necessary conditions for crime: a motivated offender, a suitable target, and the absence of a capable guardian. Economic Sterilisation modifies the third condition at scale: it creates a guardian that operates continuously, autonomously, and without physical presence, generating forensic evidence and marketplace flags as the guardianship mechanism.
          </p>

          <h2 style={h2}>4. The Doctrine Defined</h2>
          <h3 style={h3}>4.1 Etymology and First Use</h3>
          <p style={body}>
            The term Economic Sterilisation was coined by Michael Esema, founder of Mykei Securities Ltd, Manchester, in 2025. It describes the deliberate elimination of the economic value of stolen goods through technical means, such that the goods become commercially inert: unsellable on any regulated or semi-regulated marketplace, and traceable to a specific theft event via forensic evidence. The Wiktionary entry for "economic sterilisation" was published 30 March 2026, establishing the dated public record.
          </p>
          <p style={body}>
            The term draws on the biological analogy of sterilisation as the removal of reproductive capacity. A sterile organism cannot propagate. A sterilised stolen good cannot generate revenue. The doctrine holds that if the revenue expectation of theft is driven to zero, the rational incentive for organised retail crime collapses, particularly for ORC actors who operate at scale and depend on reliable resale margins.
          </p>
          <h3 style={h3}>4.2 The Three Pillars</h3>
          <p style={body}>
            <strong>Pillar One: Forensic Marking.</strong> SelectaDNA-class synthetic markers are dispersed onto goods and persons at the moment of a confirmed theft event. The markers bind irreversibly to skin, fabric, and packaging. They are detectable under UV light at trace quantities and carry a batch-unique reference code.
          </p>
          <p style={body}>
            <strong>Pillar Two: Cloud Logging.</strong> At the moment of marker deployment, an event is published to AWS IoT Core via TLS 1.3 MQTT. The event record includes a UTC timestamp, device identifier, location reference, and the batch-unique forensic code. This record is written to the Toxic Inventory Registry (TIR): immutable, timestamped, constituting a forensic chain of custody from the moment of marking.
          </p>
          <p style={body}>
            <strong>Pillar Three: Marketplace Flagging.</strong> The forensic reference code is cross-referenced in real time against listings on eBay, Vinted, and Facebook Marketplace. Matching listings are flagged or removed. This is the TESS (Theft Economic Sterilisation System) classification: a framework for flagging goods as economically sterilised across digital sales infrastructure.
          </p>
          <h3 style={h3}>4.3 Doctrine vs. Implementation</h3>
          <p style={body}>
            The doctrine of Economic Sterilisation is the conceptual framework. The ADN-1 is the first hardware implementation. Other implementations are possible: fixed retail installations, vehicle-mounted units for logistics security, software-only integrations for retailers with existing forensic marking infrastructure. The doctrine is the thesis. The ADN-1 is the proof of concept.
          </p>

          <h2 style={h2}>5. Technical Implementation: The ADN-1</h2>
          <h3 style={h3}>5.1 Hardware Specification</h3>
          <p style={body}>
            The ADN-1 is a self-contained forensic event device built for shelf-edge deployment. The core microcontroller is an ESP32-S3 dual-core processor. Detection uses dual VL53L0X Time-of-Flight laser sensors firing 30 readings per second at 940nm. On confirmed detection, a piezoelectric atomiser disperses the synthetic DNA compound within 50 milliseconds. The enclosure is a custom 140x32x28mm PETG shell for low-profile mounting. No camera. No biometrics. GDPR compliant by architecture.
          </p>
          <h3 style={h3}>5.2 Kinetic Signature Algorithm</h3>
          <p style={body}>
            The detection algorithm identifies bulk-sweep theft through kinetic signature analysis: the velocity, distance, and trajectory profile of multiple objects leaving a shelf face in rapid lateral succession. This profile is categorically distinguishable from normal browsing or staff restocking. Classification occurs entirely on-device in under 50 milliseconds. The dual-trigger requirement eliminates single-sensor false positives. Sensitivity is configurable per deployment to account for shelf geometry and foot traffic patterns.
          </p>
          <h3 style={h3}>5.3 Cloud Architecture</h3>
          <p style={body}>
            On confirmed detection, the ADN-1 publishes a cryptographically signed JSON Forensic Event Package to AWS IoT Core (eu-north-1) via TLS 1.3. The payload includes device ID, UTC timestamp, location metadata, and the batch-unique forensic mist reference code. The event is AES-256-GCM encrypted at the edge, row-level secured per retailer in the TIR, and legally admissible in UK courts as an immutable audit record. Total cloud round-trip from trigger to TIR write is under 800 milliseconds.
          </p>
          <h3 style={h3}>5.4 Patent</h3>
          <p style={body}>
            The ADN-1 system is protected under Patent No. 2606630.8, comprising 17 claims, filed 23 March 2026 with the UK Intellectual Property Office. Claims cover the dual time-of-flight kinetic signature detection method, the triggered forensic dispersal mechanism, the integration of forensic marking with cloud event publishing, and the Toxic Inventory Registry architecture.
          </p>

          <h2 style={h2}>6. Economic Analysis</h2>
          <h3 style={h3}>6.1 The Resale Economy of Retail Theft</h3>
          <p style={body}>
            ORC actors treat stolen goods as inventory with predictable margins. A swept beauty shelf yields £200 to £500 of goods at retail value, resellable at 40 to 60% of RRP on eBay or Vinted within 24 hours. At scale, ORC operations function with inventory management, route optimisation, and resale logistics comparable to a legitimate small distribution business. BRC data suggests ORC accounts for approximately 65% of all retail theft incidents by value.
          </p>
          <p style={body}>
            Economic Sterilisation attacks this model at the revenue line. If a forensically marked product cannot be sold on any regulated marketplace without triggering a TIR match alert, the expected resale yield falls toward zero. For ORC actors operating on thin logistical margins, this is a structural business model failure.
          </p>
          <h3 style={h3}>6.2 Unit Economics for Independent Retailers</h3>
          <p style={body}>
            The ADN-1 is offered at £149 one-time setup plus £40 per month. Break-even requires prevention or sterilisation of one bulk-sweep event per month, representing £200 to £800 in retail value. A single prevented event generates a 5 to 20 times return on monthly cost. The ACS-reported average of £4,600 annual theft loss implies 12.6 prevented sweep events required to recover the full annual subscription, against a background of significantly higher event frequency.
          </p>
          <h3 style={h3}>6.3 Network Effects and Geographic Threshold</h3>
          <p style={body}>
            The marginal expected return for a theft actor targeting a given high street decreases as ADN-1 adoption density increases. An ORC team across a six-store run faces escalating probability that any given store is protected, and a corresponding increase in the probability that marked goods in their inventory will trigger marketplace flags. The geographic inflection point is estimated at 20 to 25% store density within a defined retail catchment. Above this threshold, the expected revenue yield from targeting that area falls below the operational cost of a theft run.
          </p>
          <h3 style={h3}>6.4 Historical Analogy: Burglar Alarm Adoption</h3>
          <p style={body}>
            Residential burglar alarm adoption in the UK followed a recognisable S-curve. Once adoption reached approximately 30% penetration within a defined street or estate, crime displacement to unalarmed streets accelerated sharply. The mechanism is identical: criminal actors are economic agents who allocate effort toward lower-cost targets. Dense geographic adoption creates a zone of effective immunity. The doctrine does not require universal adoption. It requires threshold adoption in any given geography.
          </p>

          <h2 style={h2}>7. Policy Implications</h2>
          <h3 style={h3}>7.1 The Case for Public-Private Partnership</h3>
          <p style={body}>
            The externality structure of Economic Sterilisation creates a policy case for subsidised adoption. Each additional ADN-1 deployment reduces the expected yield from targeting the surrounding retail cluster, generating a positive externality for neighbouring unprotected stores. Where individual retailers face a cost-benefit calculation that is marginal, collective adoption delivers disproportionate geographic impact. Business Improvement Districts (BIDs), local authorities, and national retail security programmes (including the Home Office-backed Retail Crime Action Plan) represent natural institutional partners for subsidised deployment programmes.
          </p>
          <h3 style={h3}>7.2 Marketplace Platform Accountability</h3>
          <p style={body}>
            The Online Safety Act 2023 imposes due diligence obligations on platforms hosting illegal content. There is a credible legal argument that a marketplace platform that knowingly hosts listings for forensically flagged stolen goods is in breach of its OSA obligations. The Toxic Inventory Registry provides the technical infrastructure for TIR-to-platform API integration to constitute an automated compliance mechanism. This creates a path to statutory mandate: platforms that integrate TIR queries into their listing acceptance pipelines gain compliance cover; those that do not face liability exposure. This represents the policy frontier for Economic Sterilisation at scale.
          </p>
          <h3 style={h3}>7.3 International Framework</h3>
          <p style={body}>
            Europol's SOCTA 2024 designation of ORC as a Tier 2 organised crime priority creates the mandate for a pan-European equivalent of the Toxic Inventory Registry. A shared EU-level forensic goods database, with standardised API integration for Vinted, eBay Europe, and Facebook Marketplace, would close the cross-border jurisdiction gap that ORC networks currently exploit. The architecture for this system already exists in the ADN-1/TIR infrastructure. The policy conversation is about mandate, not technology.
          </p>

          <h2 style={h2}>8. Ethical and Legal Considerations</h2>
          <p style={body}>
            The ADN-1 collects no personal data. It does not use cameras, biometric sensors, or any technology capable of identifying individuals. The forensic marker contacts whoever is present in the sweep zone at the moment of a confirmed detection event. This is analogous to a dye-pack, which has established legal precedent in UK and European retail security law. The marker is non-toxic, COSHH-compliant, and detectable only under UV light.
          </p>
          <p style={body}>
            The system is compliant with UK GDPR by design. The TIR records a timestamped event associated with a device and location, not with an individual. No personally identifiable information is captured, transmitted, or stored at any stage of the event pipeline. Any subsequent identification of a marked individual is the responsibility of law enforcement operating under existing investigative powers.
          </p>
          <p style={body}>
            On proportionality: the forensic evidence standard established by an ADN-1 event is superior to most prosecution-grade CCTV evidence currently used in UK retail theft cases, which frequently depends on human identification from video footage of variable quality. The TIR record is immutable, timestamped, and algorithmically generated, removing the subjective identification step from the evidential chain.
          </p>

          <h2 style={h2}>9. Conclusion</h2>
          <p style={body}>
            Economic Sterilisation is a structural intervention at the incentive layer of retail crime rather than the act layer. Deterrence-based security addresses the cost side of the criminal decision function. Economic Sterilisation addresses the revenue side. By eliminating the resale value of stolen goods through forensic marking and cloud-backed marketplace flagging, the doctrine renders theft economically inert before a buyer can be found.
          </p>
          <p style={body}>
            The global evidence base, spanning the UK, US, EU, and Australia, confirms a common structural driver: the growth of accessible digital resale infrastructure has outpaced every existing intervention. The problem is not more thieves. It is a better market for stolen goods. Economic Sterilisation is the only proposed doctrine that operates on that market directly.
          </p>
          <p style={body}>
            The doctrine is original, coined by Michael Esema in 2025. It is patented under Patent No. 2606630.8. It is commercially live in the Greater Manchester Alpha Pilot entering deployment in Q2 2026. The ADN-1 is the first hardware implementation, purpose-engineered for the independent retailer. The implications extend to logistics, pharmaceutical supply chains, and any market in which stolen goods command reliable resale value.
          </p>

          {/* References */}
          <div style={{ marginTop: 64, paddingTop: 40, borderTop: `1px solid ${BORDER}` }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: INK, marginBottom: 24, marginTop: 0 }}>
              References
            </h2>
            <ol style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.85, color: MUTED, paddingLeft: 20 }}>
              <li style={{ marginBottom: 12 }}>Association of Convenience Stores. (2024). <em>ACS Crime Report 2024</em>. ACS.</li>
              <li style={{ marginBottom: 12 }}>Australian Retailers Association. (2024). <em>Retail Crime Report 2024</em>. ARA.</li>
              <li style={{ marginBottom: 12 }}>British Retail Consortium. (2024). <em>BRC Retail Crime Survey 2024</em>. London: BRC.</li>
              <li style={{ marginBottom: 12 }}>Clarke, R. V. (2008). Situational crime prevention. In R. Wortley & L. Mazerolle (Eds.), <em>Environmental Criminology and Crime Analysis</em>. Willan Publishing.</li>
              <li style={{ marginBottom: 12 }}>Esema, M. (2025). <em>Economic Sterilisation: Working Paper</em>. Mykei Securities Ltd, Manchester.</li>
              <li style={{ marginBottom: 12 }}>Esema, M. (2026). Economic sterilisation. <em>Wiktionary</em>. Published 30 March 2026.</li>
              <li style={{ marginBottom: 12 }}>EuroCommerce. (2024). <em>European Retail Crime Report 2024</em>. Brussels: EuroCommerce.</li>
              <li style={{ marginBottom: 12 }}>European Crime Prevention Network. (2023). <em>Thematic Paper: Organised Retail Crime</em>. EUCPN Secretariat.</li>
              <li style={{ marginBottom: 12 }}>Europol. (2024). <em>EU Serious and Organised Crime Threat Assessment (SOCTA) 2024</em>. The Hague: Europol.</li>
              <li style={{ marginBottom: 12 }}>Felson, M. & Cohen, L. E. (1979). Social change and crime rate trends. <em>American Sociological Review, 44</em>(4), 588–608.</li>
              <li style={{ marginBottom: 12 }}>National Retail Federation. (2024). <em>Retail Security Survey 2024</em>. NRF Foundation.</li>
              <li style={{ marginBottom: 12 }}>Patent No. 2606630.8. (2026). Filed 23 March 2026. UK Intellectual Property Office.</li>
              <li style={{ marginBottom: 12 }}>SelectaDNA. (2024). <em>Forensic DNA marking: technical specification and prosecution record</em>. SelectaDNA Group.</li>
            </ol>
          </div>

          {/* Cite as */}
          <div style={{ marginTop: 48, padding: '20px 24px', background: 'rgba(184,150,46,0.07)', borderLeft: `3px solid ${GOLD}`, borderRadius: 4 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#88887F', margin: 0, lineHeight: 1.7 }}>
              Cite as: Esema, M. (2025). Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence. Mykei Securities Ltd. Available at: https://michaelesema.com/thesis
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </>
  )
}
