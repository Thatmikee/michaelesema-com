import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence',
  alternativeHeadline:
    'Removing the Commercial Incentive for Retail Theft Through Forensic Marking and Real-Time Marketplace Flagging',
  description:
    'A scholarly examination of Economic Sterilisation: the doctrine that stolen goods, once forensically marked and flagged across digital marketplaces, have no resale value and therefore no theft value. First published by Michael Esema, Mykei Securities Ltd, 2025.',
  author: {
    '@type': 'Person',
    '@id': 'https://michaelesema.com/#person',
    name: 'Michael Esema',
    additionalName: 'Essien',
    url: 'https://michaelesema.com',
    jobTitle: 'Founder & CEO, Mykei Securities Ltd',
  },
  datePublished: '2025',
  dateModified: '2026-04-12',
  publisher: {
    '@type': 'Organization',
    name: 'Mykei Securities Ltd',
    url: 'https://mykei.io',
  },
  url: 'https://michaelesema.com/thesis',
  keywords:
    'Economic Sterilisation, retail crime, forensic marking, synthetic DNA, ADN-1, Mykei Securities',
  about: [
    { '@type': 'DefinedTerm', name: 'Economic Sterilisation' },
    { '@type': 'Thing', name: 'Retail Crime Prevention' },
  ],
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'BRC Retail Crime Survey 2024',
      publisher: { '@type': 'Organization', name: 'British Retail Consortium' },
    },
    {
      '@type': 'CreativeWork',
      name: 'ACS Crime Report 2024',
      publisher: { '@type': 'Organization', name: 'Association of Convenience Stores' },
    },
  ],
}

export default function ThesisPage() {
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    document.title =
      'Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence | Michael Esema'

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    scriptRef.current = script

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [])

  const bodyText: React.CSSProperties = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 17,
    lineHeight: 1.9,
    color: 'var(--text-primary)',
    marginBottom: 24,
  }

  const h2Style: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 26,
    fontWeight: 700,
    color: 'var(--dark)',
    marginTop: 56,
    marginBottom: 16,
    letterSpacing: '-0.01em',
  }

  const h3Style: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 20,
    fontWeight: 600,
    fontStyle: 'italic',
    color: 'var(--dark)',
    marginTop: 32,
    marginBottom: 12,
  }

  return (
    <>
      <Nav />

      {/* ── Header ── */}
      <section
        style={{
          background: 'var(--dark)',
          paddingTop: 140,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 28,
            }}
          >
            Working Paper &mdash; Mykei Securities Ltd &mdash; 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1.25,
              color: 'var(--text-primary)',
              marginBottom: 20,
            }}
          >
            Economic Sterilisation: A Framework for Incentive-Based Retail Crime Deterrence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: 32,
            }}
          >
            Removing the Commercial Incentive for Retail Theft Through Forensic Marking and
            Real-Time Marketplace Flagging
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              color: 'var(--text-muted)',
              marginBottom: 8,
            }}
          >
            Michael Esema, Inventor of the ADN-1 &nbsp;|&nbsp; Mykei Securities Ltd, Manchester
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: 'var(--text-muted)',
              marginBottom: 48,
            }}
          >
            First published 2025. Revised April 2026.
          </motion.div>

          {/* Abstract */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--dark-border)',
              borderLeft: '3px solid var(--gold)',
              borderRadius: 6,
              padding: '28px 32px',
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 14,
              }}
            >
              Abstract
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              The doctrine of Economic Sterilisation proposes that retail theft is better addressed
              as a commercial problem than a security one. By rendering stolen goods forensically
              marked, cloud-logged, and marketplace-flagged, the resale value of those goods is
              eliminated before a buyer can be found. Where conventional retail security targets the
              act of theft, Economic Sterilisation targets its economic precondition. This paper
              defines the doctrine, situates it within existing retail crime literature, examines
              the technology and infrastructure of the ADN-1 implementation, and presents a
              predictive model of adoption effects across the UK independent retail sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section
        style={{
          background: 'var(--light-bg)',
          paddingTop: 72,
          paddingBottom: 96,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <article style={{ maxWidth: 760, margin: '0 auto' }}>

          {/* 1. Introduction */}
          <h2 style={h2Style}>1. Introduction</h2>
          <p style={bodyText}>
            UK retail theft reached £1.8bn in annual shrinkage in 2024, according to the British
            Retail Consortium's Retail Crime Survey. Despite decades of sustained investment in
            deterrence infrastructure, including closed-circuit television, electronic article
            surveillance (EAS) tagging, and security personnel, the trend is upward. The BRC
            recorded a 27% increase in retail shrinkage between 2022 and 2024. The Association of
            Convenience Stores (ACS) Crime Report 2024 documents that the average independent
            convenience store absorbs a theft loss of approximately £4,600 per year, a figure that
            represents a material threat to the viability of small-margin operators.
          </p>
          <p style={bodyText}>
            The central argument of this paper is that deterrence-based security has reached a
            structural ceiling. Investment in deterrence raises the perceived cost of theft at the
            margin; it does not alter the underlying economics that make theft rational for
            organised actors. A shoplifter who expects to sell a swept beauty shelf for £300 on a
            digital resale platform within 24 hours is not primarily deterred by a CCTV camera,
            particularly in an environment where prosecution rates for retail theft remain low.
          </p>
          <p style={bodyText}>
            The thesis presented here is that retail theft is not primarily a security failure. It
            is a market failure. Stolen goods command market prices on digital resale platforms,
            creating a functioning secondary economy for criminal actors. The solution is not better
            deterrence but market destruction: the systematic elimination of resale value at the
            point of theft, through forensic marking, cloud registration, and automated marketplace
            flagging. This is the doctrine of Economic Sterilisation.
          </p>

          {/* 2. Literature Review */}
          <h2 style={h2Style}>2. Literature Review and Prior Art</h2>
          <p style={bodyText}>
            Existing approaches to retail crime prevention can be grouped into four broad
            categories. First, Electronic Article Surveillance (EAS): hard tags and soft labels
            that trigger barrier alarms at exits. EAS remains the dominant deployed technology in
            UK supermarkets and fashion retail. Its limitations are well-documented: tags can be
            defeated with magnets, foil-lined bags, or removal tools available online, and the
            technology does nothing to address goods that exit a store without triggering an alarm.
          </p>
          <p style={bodyText}>
            Second, CCTV and AI-enhanced video analytics. The UK has one of the highest CCTV
            densities in the world. AI-enhanced systems now offer real-time anomaly detection,
            shelf-level monitoring, and person-of-interest flagging. Despite this, the evidential
            requirements for prosecution mean that even high-quality footage is frequently
            insufficient without corroborating identification. Repeat offenders in organised retail
            crime (ORC) operations are often aware of camera placements and adapt accordingly.
          </p>
          <p style={bodyText}>
            Third, security personnel. Uniformed and plainclothes security officers provide a
            visible deterrence signal and enable in-store detainment. Their deployment cost places
            them beyond the budgetary reach of the sub-100-square-metre independent store, which
            forms the majority of the UK's 50,000-plus convenience retail locations.
          </p>
          <p style={bodyText}>
            Fourth, forensic property marking. SelectaDNA and comparable providers have offered
            commercial forensic tagging solutions for over a decade. The Metropolitan Police's
            Operation Opal, a dedicated national intelligence unit targeting organised retail crime,
            has incorporated DNA-tagging into targeted interventions in high-crime retail corridors,
            with documented deterrence effects in areas where visible forensic marking signage was
            deployed. Forensic marking is not new.
          </p>
          <p style={bodyText}>
            The innovation in Economic Sterilisation is not forensic marking per se. It is the
            integration of marking, cloud registration, and automated marketplace flagging as a
            continuous, autonomous system accessible to a single-unit independent retailer operating
            without specialist security infrastructure. Previous forensic marking implementations
            required police coordination, enterprise procurement, or manual application processes.
            The ADN-1 is the first product designed and engineered specifically for the
            sub-100-square-metre independent store, with an event-driven architecture that requires
            no human intervention between the moment of marking and the generation of an immutable
            forensic record.
          </p>

          {/* 3. The Doctrine Defined */}
          <h2 style={h2Style}>3. The Doctrine Defined</h2>
          <h3 style={h3Style}>3.1 Etymology and First Use</h3>
          <p style={bodyText}>
            The term Economic Sterilisation was coined by Michael Esema, founder of Mykei Securities
            Ltd, Manchester, in 2025. It describes the deliberate elimination of the economic value
            of stolen goods through technical means, such that the goods become commercially inert:
            unsellable on any regulated or semi-regulated marketplace, and traceable to a specific
            theft event via forensic evidence.
          </p>
          <p style={bodyText}>
            The term draws on the biological analogy of sterilisation as the removal of reproductive
            capacity. A sterile pathogen cannot propagate. A sterilised stolen good cannot generate
            revenue. The doctrine holds that if the revenue expectation of theft is driven to zero,
            the rational incentive for organised retail crime collapses, particularly for ORC actors
            who operate at scale and depend on reliable resale margins.
          </p>

          <h3 style={h3Style}>3.2 The Three Pillars</h3>
          <p style={bodyText}>
            Economic Sterilisation rests on three integrated pillars, each of which is necessary
            but insufficient alone.
          </p>
          <p style={bodyText}>
            <strong>Pillar One: Forensic Marking.</strong> SelectaDNA-class synthetic markers are
            dispersed onto goods and persons present in the shelf zone at the moment of a detected
            theft event. The markers bind irreversibly to skin, fabric, and packaging. They are
            detectable under UV light at trace quantities and carry a batch-unique reference code
            that is human-unreadable in the field. This physical layer creates the forensic
            evidence.
          </p>
          <p style={bodyText}>
            <strong>Pillar Two: Cloud Logging.</strong> At the moment of marker deployment, an
            event is published to AWS IoT Core (eu-north-1 region) via TLS 1.3 MQTT. The event
            record includes a UTC timestamp, device identifier, location reference, and the
            batch-unique forensic code. This record is written to the Toxic Inventory Registry
            (TIR): a cloud database that links forensic codes to the item descriptions present on
            the marked shelf zone at the time of the event. The TIR record is immutable and
            timestamped. It constitutes a forensic chain of custody from the moment of marking.
          </p>
          <p style={bodyText}>
            <strong>Pillar Three: Marketplace Flagging.</strong> The forensic reference code
            serves as the bridge between physical evidence and digital commerce. Goods from a
            marked event that appear on digital marketplaces (eBay, Vinted, Facebook Marketplace,
            and analogues) can be matched against TIR records, either through automated API
            integration with platform trust-and-safety teams or through law enforcement query.
            This is the TESS (Theft Economic Sterilisation System) category: a classification
            framework for flagging goods as economically sterilised across digital sales
            infrastructure.
          </p>

          <h3 style={h3Style}>3.3 Doctrine vs. Implementation</h3>
          <p style={bodyText}>
            The doctrine of Economic Sterilisation (TESS) is the conceptual framework. The ADN-1
            is the first hardware implementation of that doctrine. Other implementations are
            possible: fixed retail installations, vehicle-mounted units for logistics security, or
            software-only integrations for retailers with existing forensic marking infrastructure.
            The doctrine is the thesis. The ADN-1 is the proof of concept.
          </p>

          {/* 4. Technical Implementation */}
          <h2 style={h2Style}>4. Technical Implementation: The ADN-1</h2>
          <h3 style={h3Style}>4.1 Hardware Specification</h3>
          <p style={bodyText}>
            The ADN-1 is a self-contained forensic event device. The core microcontroller is an
            Adafruit ESP32 Feather V2. Detection is performed by dual VL53L1X time-of-flight
            (ToF) sensors, multiplexed via a PCA9548A I2C multiplexer, enabling independent
            field-of-view coverage across the monitored shelf zone. The forensic mist dispersal
            mechanism is a piezoelectric atomiser controlled by an IRLZ44N N-channel MOSFET.
            Power is supplied by a Pimoroni 2000mAh LiPo battery, enabling deployment in locations
            without direct mains access. The enclosure is a custom 140x32x28mm PETG White shell,
            designed for low-profile shelf-edge mounting.
          </p>
          <h3 style={h3Style}>4.2 Detection Algorithm</h3>
          <p style={bodyText}>
            The kinetic signature algorithm requires both ToF sensors to register a positive
            detection within a two-second window. This dual-trigger requirement eliminates
            single-sensor false positives from incidental motion (passing staff, shelf restocking)
            while capturing the characteristic bilateral sweep motion associated with rapid product
            removal. A single-sensor positive does not trigger marker dispersal. The threshold
            calibration is configurable per deployment to account for shelf geometry and ambient
            foot traffic patterns.
          </p>
          <h3 style={h3Style}>4.3 Cloud Architecture</h3>
          <p style={bodyText}>
            On confirmed detection, the ADN-1 publishes a structured JSON event to the MQTT topic
            mykei/forensic/events via TLS 1.3, connecting to AWS IoT Core in the eu-north-1
            region. The event payload includes device ID, UTC timestamp, location metadata, and
            the batch-unique forensic mist reference code. The IoT Core rule engine routes the
            event to the Toxic Inventory Registry for persistence. The full cloud round-trip
            latency from trigger to TIR write is under 800 milliseconds under normal network
            conditions.
          </p>
          <h3 style={h3Style}>4.4 Patent</h3>
          <p style={bodyText}>
            The ADN-1 system is protected under Patent No. 2606630.8, comprising 17 claims, filed
            23 March 2026 with the UK Intellectual Property Office. The claims cover the dual
            time-of-flight detection method, the kinetic signature algorithm, the integration of
            forensic dispersal with cloud event publishing, and the Toxic Inventory Registry
            architecture.
          </p>

          {/* 5. Economic Analysis */}
          <h2 style={h2Style}>5. Economic Analysis</h2>
          <h3 style={h3Style}>5.1 The Resale Economy of Retail Theft</h3>
          <p style={bodyText}>
            Organised retail crime actors treat stolen goods as inventory. The margins are
            compelling. A swept beauty shelf yields £200 to £500 of goods at retail value,
            resellable at 40 to 60 percent of RRP on platforms including eBay and Vinted within
            24 hours of the theft event. At scale, ORC operations function with inventory
            management, route optimisation, and resale logistics comparable to a small distribution
            business. BRC data suggests ORC accounts for approximately 65 percent of all retail
            theft incidents by value.
          </p>
          <p style={bodyText}>
            Economic Sterilisation attacks this model at the revenue line. If a forensically marked
            product cannot be sold on any regulated marketplace without triggering a TIR match
            alert, the expected resale yield falls toward zero. The theft event still occurs, but
            the post-theft revenue is eliminated. For ORC actors operating on thin logistical
            margins, this is a structural business model failure, not merely an inconvenience.
          </p>
          <h3 style={h3Style}>5.2 Unit Economics for Independent Retailers</h3>
          <p style={bodyText}>
            The ADN-1 is offered on a Hardware-as-a-Service basis, with pricing designed for the
            cash position of the independent retailer. The break-even analysis is straightforward:
            the number of prevented theft events required to cover the monthly subscription cost
            is low relative to the ACS-reported average of £4,600 annual theft loss. A single
            prevented sweep event per month, at £200 to £300 of goods protected, is sufficient to
            justify the cost at most subscription price points. The remaining prevented events
            represent net financial benefit to the operator.
          </p>
          <h3 style={h3Style}>5.3 Network Effects</h3>
          <p style={bodyText}>
            The marginal expected return for a theft actor targeting a given high street decreases
            as ADN-1 adoption density increases within that geography. An ORC team operating across
            a six-store high-street run faces an increasing probability that any given store is
            protected, and a corresponding increase in the probability that marked goods in their
            inventory will trigger marketplace flags. This is a geographic network effect: adoption
            by any one retailer imposes a marginal cost on criminal actors targeting adjacent
            retailers. The doctrine therefore has a positive externality structure. Early adopters
            generate spillover deterrence benefits for neighbouring stores.
          </p>

          {/* 6. Predictive Model */}
          <h2 style={h2Style}>6. Predictive Model: Retail Crime 2026 to 2036</h2>
          <h3 style={h3Style}>6.1 Base Case Trajectory</h3>
          <p style={bodyText}>
            On the current growth trajectory and in the absence of structural intervention, BRC
            data implies total UK retail shrinkage reaching £2.3bn to £2.5bn by 2028 to 2030.
            Accelerating factors include the continued growth of social commerce (Vinted operating
            across 20-plus European markets, TikTok Shop, Instagram resale), AI-assisted listing
            descriptions that can disguise provenance, and cross-border resale routing that
            fragments enforcement jurisdiction. The resale infrastructure for stolen goods is
            improving faster than the detection infrastructure targeting it.
          </p>
          <h3 style={h3Style}>6.2 Adoption Scenarios</h3>
          <p style={bodyText}>
            Three adoption scenarios are modelled across the UK independent retail base.
          </p>
          <p style={bodyText}>
            The conservative scenario assumes 5 percent of UK independent retailers deploy an
            Economic Sterilisation system by 2028. At this density, adoption is too geographically
            dispersed to generate consistent network threshold effects. Deterrence signal is
            present in isolated pockets but insufficient to alter ORC routing decisions
            systematically. Shrinkage trajectory modestly slows in early-adopter areas.
          </p>
          <p style={bodyText}>
            The moderate scenario assumes 15 percent deployment by 2030. At this scale, high-street
            concentrations in urban retail corridors begin to reach threshold density. Network
            effects become measurable. ORC teams face a materially elevated risk of marking on any
            given targeting run in affected areas. Early displacement effects emerge: crime migrates
            toward lower-density geographies.
          </p>
          <p style={bodyText}>
            The optimistic scenario assumes 25 percent deployment by 2033. Geographic areas of
            dense adoption become economically unviable for ORC targeting. The inflection point
            is estimated at approximately 20 to 25 percent store density within a defined high-street
            catchment. Above this threshold, the expected revenue yield from targeting that area
            falls below the operational cost of a theft run.
          </p>
          <h3 style={h3Style}>6.3 Historical Analogy</h3>
          <p style={bodyText}>
            Burglar alarm adoption in UK residential property followed a recognisable S-curve. Once
            adoption reached approximately 30 percent penetration within a defined street or estate,
            crime displacement to unalarmed streets accelerated sharply. The mechanism is identical:
            criminal actors are economic agents who allocate effort toward lower-cost targets. The
            same spatial incentive logic applies to Economic Sterilisation adoption. Dense geographic
            adoption creates a zone of effective immunity from ORC targeting. The doctrine does not
            require universal adoption. It requires threshold adoption in any given geography.
          </p>

          {/* 7. Ethical and Legal */}
          <h2 style={h2Style}>7. Ethical and Legal Considerations</h2>
          <p style={bodyText}>
            The ADN-1 collects no personal data. It does not incorporate cameras, biometric sensors,
            or any technology capable of identifying individuals. The forensic marker contacts
            whoever is present in the sweep zone at the moment of a confirmed detection event.
            This mechanism is analogous to a dye-pack system, which has established legal precedent
            in UK and European retail security law. The marker is non-toxic, non-hazardous, and
            detectable only under UV light.
          </p>
          <p style={bodyText}>
            The system is compliant with UK GDPR by design. The TIR records a timestamped event
            associated with a device and location, not with an individual. No personally
            identifiable information is captured, transmitted, or stored at any stage of the
            event pipeline. Any subsequent identification of a marked individual is the
            responsibility of law enforcement operating under existing investigative powers.
          </p>
          <p style={bodyText}>
            On proportionality: the forensic evidence standard established by an ADN-1 event
            (a timestamped cloud record paired with a physically detectable UV marker) is superior
            to most prosecution-grade CCTV evidence currently used in UK retail theft cases, which
            frequently depends on human identification from video footage of variable quality. The
            TIR record is immutable, timestamped, and algorithmically generated, removing the
            subjective identification step from the evidential chain.
          </p>

          {/* 8. Conclusion */}
          <h2 style={h2Style}>8. Conclusion</h2>
          <p style={bodyText}>
            Economic Sterilisation represents a structural intervention at the incentive layer of
            retail crime, rather than the act layer. Deterrence-based security addresses the cost
            side of the criminal's decision function. Economic Sterilisation addresses the revenue
            side. By eliminating the resale value of stolen goods through forensic marking and
            cloud-backed marketplace flagging, the doctrine renders the theft economically inert
            before a buyer can be found.
          </p>
          <p style={bodyText}>
            The doctrine is original, coined by Michael Esema in 2025 under Mykei Securities Ltd.
            It is patented: Patent No. 2606630.8, filed 23 March 2026. It is commercially live in
            the Greater Manchester Alpha Pilot, entering deployment in Q2 2026. The ADN-1 is the
            first hardware implementation of the doctrine, purpose-engineered for the
            sub-100-square-metre independent retailer.
          </p>
          <p style={bodyText}>
            The implications of the doctrine extend beyond independent retail. Any market in which
            stolen goods command reliable resale value is a candidate for economic sterilisation
            strategies. Logistics, automotive parts, pharmaceutical supply chains, and high-value
            consumer electronics all present analogous resale economics. The ADN-1 is the proof
            of concept. The framework presented here is the thesis.
          </p>

          {/* References */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 40,
              borderTop: '1px solid rgba(0,0,0,0.12)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 22,
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: 24,
                marginTop: 0,
              }}
            >
              References
            </h2>
            <ol
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--text-primary)',
                paddingLeft: 20,
              }}
            >
              <li style={{ marginBottom: 12 }}>
                British Retail Consortium. (2024). <em>BRC Retail Crime Survey 2024</em>. London:
                BRC.
              </li>
              <li style={{ marginBottom: 12 }}>
                Association of Convenience Stores. (2024). <em>ACS Crime Report 2024</em>.
              </li>
              <li style={{ marginBottom: 12 }}>
                Esema, M. (2025). <em>Economic Sterilisation: Working Paper</em>. Mykei Securities
                Ltd, Manchester.
              </li>
              <li style={{ marginBottom: 12 }}>
                Patent No. 2606630.8. (2026). Filed 23 March 2026. UK Intellectual Property Office.
              </li>
            </ol>
          </div>

          {/* Citation note */}
          <div
            style={{
              marginTop: 48,
              padding: '20px 24px',
              background: 'rgba(198,164,78,0.08)',
              borderLeft: '3px solid var(--gold)',
              borderRadius: 4,
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: 'var(--text-muted)',
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Cite as: Esema, M. (2025). Economic Sterilisation: A Framework for Incentive-Based
              Retail Crime Deterrence. Mykei Securities Ltd. Available at:
              https://michaelesema.com/thesis
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </>
  )
}
