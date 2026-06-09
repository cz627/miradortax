/* pages.jsx — inner pages (Leistungen, Ablauf, Kunden, Preise, Blog, Kontakt) */
const { useState: useStateP } = React;

/* compact page hero used at the top of every inner page */
function PageHero({ eyebrow, title, lede }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="page-hero__title">{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
      </div>
    </section>
  );
}

/* ---------------- LEISTUNGEN PAGE ---------------- */
function SecuritySection() {
  const items = [
    { ic: "building", t: "Hosting auf deutschen Servern", d: "Unsere gesamte IT-Infrastruktur ist in Deutschland gehostet – bei zertifizierten Rechenzentren mit höchsten Sicherheitsstandards. So stellen wir sicher, dass alle Daten Ihrer Holdinggesellschaft ausschließlich innerhalb deutscher Rechtsordnung gespeichert und verarbeitet werden." },
    { ic: "lock", t: "DSGVO-konforme Prozesse", d: "Datenschutz ist integraler Bestandteil unserer täglichen Arbeit. Alle Prozesse – von der Datenübermittlung über die Belegarchivierung bis zur Mandantenkommunikation – erfüllen die Vorgaben der DSGVO. Wir erheben nur die Daten, die wir wirklich benötigen." },
  ];
  return (
    <section className="section section--tight" style={{ background: "var(--cream-2)" }}>
      <div className="wrap">
        <div className="shead reveal">
          <div className="eyebrow">Sicherheit &amp; Compliance</div>
          <h2 className="h2">Datensicherheit auf höchstem Niveau</h2>
          <p className="lede">Der Schutz Ihrer Daten hat für uns oberste Priorität.</p>
        </div>
        <div className="sec-grid">
          {items.map((it) =>
            <div key={it.t} className="sec-card reveal">
              <div className="sec-card__ic"><Icon name={it.ic} size={24} sw={1.8} /></div>
              <h3 className="sec-card__t">{it.t}</h3>
              <p className="sec-card__d">{it.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function LeistungenPage({ onSurvey, priceFrom }) {
  return (
    <>
      <PageHero eyebrow="Leistungen"
        title={<>Alle Pflichten Ihrer Holding.<br />In einem Portal.</>}
        lede="Mirador Tax übernimmt den kompletten Jahreszyklus Ihrer Holding – transparent zum Festpreis, ohne Stundenabrechnung." />
      <Leistungen hideHead />
      <SecuritySection />
      <FAQ />
      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

/* ---------------- ABLAUF PAGE ---------------- */
const WECHSEL_EMAIL = `Sehr geehrte [Name des bisherigen Steuerberaters / der Kanzlei],

ich hoffe, es geht Ihnen gut.

Ich habe mich entschieden, die Zusammenarbeit in steuerlichen Angelegenheiten meiner Holding UG zukünftig über Mirador Tax zu organisieren.

Für den elektronischen Mandantenübertrag bitte ich Sie daher, folgende Unterlagen bzw. Daten an Mirador Tax (in cc) zu übermitteln, um einen reibungslosen Übergang sicherzustellen:

- den DATEV-Datenexport der Gesellschaft für die Vorjahre,
- die Steuerbescheide des vorangegangenen Jahres.

Sobald die Daten vorliegen, wird Mirador Tax die weitere Abstimmung und Datenaufbereitung übernehmen.

Vielen Dank im Voraus für Ihre Unterstützung und die zeitnahe Übermittlung der Unterlagen.
Bei Rückfragen können Sie sich jederzeit an das Team von Mirador Tax wenden.

Viele Grüße,

[Ihr Name]`;

function WechselSection() {
  const [copied, setCopied] = useStateP(false);
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(WECHSEL_EMAIL).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2200);
    });
  };
  return (
    <section className="section section--tight" style={{ background: "var(--cream-2)" }} id="wechsel">
      <div className="wrap">
        <div className="shead reveal">
          <div className="eyebrow">Wechsel leicht gemacht</div>
          <h2 className="h2">Zu Mirador Tax wechseln – so einfach geht's</h2>
          <p className="lede">Mit unserem Umzugsservice ist der Wechsel ganz einfach. Unser Team unterstützt Sie persönlich beim Datentransfer und der Abstimmung – damit der Umstieg reibungslos erfolgt.</p>
        </div>
        <div className="wechsel">
          <div className="wechsel__text reveal">
            <p>Informieren Sie Ihre bisherige Steuerberatung darüber, dass Sie die Zusammenarbeit in steuerlichen Angelegenheiten künftig über Mirador Tax organisieren. Über unseren vorbereiteten E-Mail-Entwurf stößen Sie den Wechsel mit wenigen Klicks an – wir begleiten Sie anschließend durch den gesamten Prozess und kümmern uns um die nächsten Schritte für einen reibungslosen Übergang.</p>
            <div className="wechsel__highlight">
              <Icon name="doc" size={18} sw={2} />
              <span>Wichtig: Wir benötigen den <b>DATEV-Datenexport der Gesellschaft für die Vorjahre</b> sowie die Steuerbescheide des Vorjahres.</span>
            </div>
          </div>
          <div className="wechsel__mail reveal">
            <div className="wechsel__mail-head">
              <span>E-Mail-Entwurf an Ihre bisherige Kanzlei</span>
              <button className="wechsel__copy" onClick={copy}>{copied ? "✓ Kopiert" : "Kopieren"}</button>
            </div>
            <pre className="wechsel__mail-body">{WECHSEL_EMAIL}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function AblaufPage({ onSurvey, priceFrom }) {
  return (
    <>
      <PageHero eyebrow="So funktioniert's"
        title={<>In drei Schritten zum<br />fertigen Abschluss.</>}
        lede="Kein Papierkram, keine Rückfragen-Schleifen. Ein klarer, geführter Prozess vom ersten Beleg bis zur Abgabe." />
      <Ablauf hideHead />
      <WechselSection />
      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

/* ---------------- KUNDEN PAGE ---------------- */
function KundenPage({ onSurvey, priceFrom }) {
  return (
    <>
      <PageHero eyebrow="Kundenstimmen"
        title={<>Was Holdings an<br />Mirador schätzen.</>}
        lede="Über 500 Holdings vertrauen auf Mirador Tax – für einen einfachen, günstigen und zuverlässigen Jahresabschluss." />
      <TestimonialsAll />
      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

/* ---------------- PREISE PAGE ---------------- */
const PKG = ["Start", "Wachstum", "Pro", "Unlimited"];
const PKG_PRICE = ["499 €", "999 €", "1.499 €", "Individuell"];
const FEATURES = [
  { f: "Zugang zu Ihrem digitalen Kundenportal", v: [true, true, true, true] },
  { f: "Buchhaltung der Holding", v: [true, true, true, true] },
  { f: "Erstellung des Jahresabschlusses", v: [true, true, true, true] },
  { f: "Erstellung der E-Bilanz und Übermittlung an das Finanzamt", v: [true, true, true, true] },
  { f: "Offenlegung im Bundesanzeiger", v: [true, true, true, true] },
  { f: "Erinnerungsservice für Fristen", v: [true, true, true, true] },
  { f: "Körperschaftsteuer- und Gewerbesteuererklärungen", v: [false, true, true, true] },
  { f: "Max. Anzahl an Beteiligungen", v: ["3", "10", "25", "Unlimitiert"] },
  { f: "Max. Anzahl an Buchungen pro Jahr", v: ["20", "40", "100", "Unlimitiert"] },
  { f: "Max. Bilanzsumme", v: ["100 TEUR", "300 TEUR", "5 Mio. €", "Unlimitiert"] },
];
function Cell({ val }) {
  if (val === true) return <span className="pt__yes"><Icon name="check" size={16} sw={2.6} /></span>;
  if (val === false) return <span className="pt__no">Nein</span>;
  return <span className="pt__val">{val}</span>;
}

const PV_FEATURES = ["Buchhaltung", "Jahresabschluss inkl. E-Bilanz", "Offenlegung im Bundesanzeiger", "Steuererklärung", "Persönlicher Ansprechpartner"];
const PRICE_OVERVIEW = [
  { name: "Start", price: "499", sub: "Für Gründer, die ihre Holding schlank und kosteneffizient führen möchten. Über 500 Holdings vertrauen auf unseren Service und kommen mit dem Start Plan aus.",
    features: PV_FEATURES,
    limits: ["20 Transaktionen / Jahr", "Bis zu 3 Beteiligungen", "Bilanzsumme bis 100 TEUR"] },
  { name: "Wachstum", price: "999", sub: "Für wachsende Holdings mit steigender Zahl an Investments.",
    features: PV_FEATURES,
    limits: ["40 Transaktionen / Jahr", "Bis zu 10 Beteiligungen", "Bilanzsumme bis 300 TEUR"] },
  { name: "Pro", price: "1.499", sub: "Für komplexere Beteiligungsstrukturen.",
    features: PV_FEATURES,
    limits: ["Bis zu 100 Buchungen / Jahr", "Bis zu 25 Beteiligungen", "Bilanzsumme bis 5 Mio. €"] },
];

function PovGroup({ label, items }) {
  return (
    <div className="pov__group">
      <div className="pov__group-label">{label}</div>
      <ul className="pov__list">
        {items.map((x) => <li key={x}><Icon name="check" size={15} sw={2.6} /> {x}</li>)}
      </ul>
    </div>
  );
}

const PRICE_TESTIMONIALS = [
  { quote: "Mein alter Steuerberater hat nach Stunden abgerechnet – nie wusste ich vorher, was es kostet. Mirador macht das zum halben Preis, mit festem Betrag.", name: "Michael Kowatschew", role: "Gründer, Kowatschew Ventures UG", photo: "images/michael-kowatschew.png" },
  { quote: "Transparenter Festpreis statt Gebührenverordnung. Wir sparen jedes Jahr einen vierstelligen Betrag.", name: "Julia Vogt", role: "Geschäftsführerin, Vela Invest GmbH", photo: "https://randomuser.me/api/portraits/women/29.jpg" },
  { quote: "Das günstigste Angebot am Markt – und trotzdem fühlt sich der Prozess super an.", name: "Philipp Arndt", role: "Geschäftsführer, Arndt Holding", photo: "https://randomuser.me/api/portraits/men/52.jpg" },
];

function PreisePage({ onSurvey, priceFrom }) {
  return (
    <>
      <PageHero eyebrow="Preise"
        title={<>Bezahlen Sie nur das,<br />was Sie wirklich brauchen.</>}
        lede="Transparente Festpreise statt Stundenabrechnung nach Gebührenverordnung." />

      {/* Preisübersicht */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="poverview">
            {PRICE_OVERVIEW.map((p, i) =>
              <div key={p.name} className={"pov" + (i === 0 ? " pov--feat" : "")}>
                <div className="pov__head">
                  <div className="pov__name">{p.name}</div>
                  <div className="pov__sub">{p.sub}</div>
                </div>
                <div className="pov__price">{p.price} €<span> / Jahr</span></div>
                {i === 0 ? (
                  <div className="pov__body pov__body--cols">
                    <PovGroup label="Leistungen" items={p.features} />
                    <PovGroup label="Limits" items={p.limits} />
                  </div>
                ) : (
                  <div className="pov__body">
                    <PovGroup label="Limits" items={p.limits} />
                  </div>
                )}
                <button className="btn btn--accent btn--block btn--lg" onClick={onSurvey}>Angebot anfordern</button>
              </div>
            )}
          </div>
          <p className="price-endpreis"><Icon name="check" size={15} sw={2.6} /> Unsere Preise sind Endpreise. Aufgrund unserer steuerlichen Stellung fällt derzeit keine zusätzliche Umsatzsteuer an. Zzgl. einmaliger Einrichtungsgebühr von 250 €.</p>
        </div>
      </section>

      {/* Detaillierte Vergleichstabelle */}
      <section className="section section--tight" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="shead reveal">
            <div className="eyebrow">Im Detail</div>
            <h2 className="h2">Alle Leistungen & Grenzen im Vergleich</h2>
          </div>
          <div className="ptable-wrap">
            <table className="ptable">
              <thead>
                <tr>
                  <th className="ptable__feat">Leistung</th>
                  {PKG.map((p, i) => <th key={p}><div className="pt__name">{p}</div><div className="pt__price">{PKG_PRICE[i]}{i < 3 && <span> / Jahr</span>}</div></th>)}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row) =>
                  <tr key={row.f}>
                    <td className="ptable__feat">{row.f}</td>
                    {row.v.map((val, i) => <td key={i}><Cell val={val} /></td>)}
                  </tr>
                )}
                <tr className="ptable__cta-row">
                  <td></td>
                  {PKG.map((p, i) =>
                    <td key={p}>
                      {i < 3
                        ? <button className="btn btn--ghost btn--block" onClick={onSurvey}>Angebot</button>
                        : <a className="btn btn--ghost btn--block" href="Kontakt.html">Anfragen</a>}
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="shead reveal">
            <div className="eyebrow">Zusatzleistungen</div>
            <h2 className="h2">Optionale Leistungen</h2>
            <p className="lede">Das Basispaket umfasst alle regulären Leistungen rund um Jahresabschluss und Steuererklärung. Für folgende zusätzliche Leistungen fällt eine separate Gebühr an.</p>
          </div>
          <div className="addon-grid">
            {ADDONS.map((a) =>
              <div key={a.key} className="addon-card reveal">
                <div className="addon-card__top">
                  <h3 className="addon-card__t">{a.t}</h3>
                  <div className="addon-card__price"><span className="addon-card__amt">{fmtEUR(a.price)}&nbsp;€</span><span className="addon-card__per">{a.once ? "einmalig" : "/ Jahr"}</span></div>
                </div>
                <p className="addon-card__d">{a.d}</p>
              </div>
            )}
          </div>
          <div className="price-operator reveal">
            <p>Die Plattform wird von der <b>Ruescher Invest UG (haftungsbeschränkt)</b> betrieben. Vorbehaltsaufgaben werden von der <b>Bauer & Weigl Steuerberater PartG mbB</b> erbracht. Aktuell nicht im Leistungsumfang enthalten sind Immobilien und Kryptowährungen.</p>
            <div className="price-excl">
              <span className="price-excl__chip"><Icon name="plus" size={13} sw={2.6} style={{ transform: "rotate(45deg)" }} /> Immobilien</span>
              <span className="price-excl__chip"><Icon name="plus" size={13} sw={2.6} style={{ transform: "rotate(45deg)" }} /> Kryptowährungen</span>
            </div>
          </div>
        </div>
      </section>

      <Rechner onSurvey={onSurvey} />

      {/* Preis-Testimonials */}
      <section className="section section--tight" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="shead shead--center reveal">
            <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Günstiger als gedacht</div>
            <h2 className="h2">Holdings, die spürbar sparen</h2>
          </div>
          <div className="tgrid">
            {PRICE_TESTIMONIALS.map((c, i) =>
              <div key={i} className="tquote reveal">
                <div className="tquote__mark">”</div>
                <p className="tquote__text">{"„" + c.quote + "“"}</p>
                <div className="tcard__by">
                  <div className="tcard__ava" style={{ backgroundImage: "url(" + c.photo + ")" }}></div>
                  <div><div className="tcard__name">{c.name}</div><div className="tcard__role">{c.role}</div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <FAQ />
      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

/* ---------------- BLOG PAGE ---------------- */
const POSTS = [
  { slug: "steuerliche-fristen-fuer-holding-ugs", tag: "Gründung", t: "Steuerliche Fristen für Holding-UGs", d: "Als Geschäftsführer einer Holding-UG oder vermögensverwaltenden UG musst du zahlreiche Fristen im Blick behalten. Versäumnisse können…", date: "19. Jan. 2026", read: "5 Min.", img: "https://framerusercontent.com/images/A9cGQnyvGsvhuxkM9oIZs1gRA.png" },
  { slug: "zu-mirador-tax-wechseln-so-einfach-funktioniert-der-uebertrag", tag: "Gründung", t: "Zu Mirador Tax wechseln – so einfach funktioniert der Übertrag", d: "Der Wechsel der steuerlichen Betreuung wird oft als aufwendig wahrgenommen. In der Praxis ist er das nicht. Gerade bei Holding-UGs und…", date: "5. Jan. 2026", read: "3 Min.", img: "https://framerusercontent.com/images/tAq4oAVMUM4mZeabQZsZUoZII.png" },
  { slug: "holding-gesellschaft-gruenden-ihr-einfacher-weg-zur-vermoegensverwaltenden-gmbh-ug", tag: "Gründung", t: "Holding-Gesellschaft gründen: Ihr einfacher Weg zur vermögensverwaltenden GmbH / UG", d: "Planen Sie noch die Gründung Ihrer eigenen Holding-Gesellschaft? Nutzen Sie unsere Schritt-für-Schritt-Anleitung und kommen Sie nach der…", date: "5. Jan. 2026", read: "4 Min.", img: "https://framerusercontent.com/images/fnAB8QXbKcvg2wMZhenssIZgixQ.png" },
  { slug: "fuer-wen-eignet-es-sich-eine-holding-zu-gruenden", tag: "Gründung", t: "Für wen eignet es sich, eine Holding zu gründen?", d: "Eine Holding eignet sich für Gründer, Unternehmer und Investoren, die wachsen wollen, Risiken trennen, Steuern optimieren und einen…", date: "2. Jan. 2026", read: "4 Min.", img: "https://framerusercontent.com/images/CAYiNDRUA7B4z41mNfoIPummtsw.png" },
  { slug: "gruendungskosten-und-laufende-kosten-einer-vvug-vvgmbh", tag: "Gründung", t: "Gründungskosten und laufende Kosten einer vvUG / vvGmbH", d: "Wer eine vermögensverwaltende UG oder GmbH in Deutschland gründen möchte, beschäftigt sich früh mit steuerlichen Vorteilen. Was dabei…", date: "2. Jan. 2026", read: "6 Min.", img: "https://framerusercontent.com/images/FL935tln7tdpvFMRCqUCetEdjI.png" },
  { slug: "vermoegensverwaltende-gmbh-5-fehler-die-sie-vermeiden-sollten", tag: "Gründung", t: "Vermögens­verwaltende GmbH: 5 Fehler, die Sie vermeiden sollten", d: "Die vermögensverwaltende GmbH kann ein sehr effizientes Vehikel für langfristigen Vermögensaufbau sein. Sie ist aber kein Selbstläufer.…", date: "2. Jan. 2026", read: "6 Min.", img: "https://framerusercontent.com/images/R0tzO9XYz0rYvO7RhDDIoMpS5s.png" },
  { slug: "ab-wann-lohnt-sich-eine-holding-finanziell-kosten-steuern-und-beispielrechnungen", tag: "Gründung", t: "Ab wann lohnt sich eine Holding finanziell? Kosten, Steuern und Beispielrechnungen", d: "Eine Holding lohnt sich nicht „ab dem ersten Euro“. Sie lohnt sich dann, wenn Gewinne nicht privat verbraucht, sondern systematisch…", date: "2. Jan. 2026", read: "6 Min.", img: "https://framerusercontent.com/images/xVJkuqygxMaJIGNUzFkzZBuDwo.png" },
  { slug: "holding-gruenden-mit-ug-oder-gmbh-ablauf-unterlagen-typische-fehler", tag: "Gründung", t: "Holding gründen mit UG oder GmbH: Ablauf, Unterlagen, typische Fehler", d: "Wer eine vermögensverwaltende UG (haftungsbeschränkt) oder vermögensverwaltende GmbH gründen will, durchläuft im Kern den gleichen…", date: "2. Jan. 2026", read: "7 Min.", img: "https://framerusercontent.com/images/sq5SzQFshHKhSBwQDnQEgQfkSk.png" },
  { slug: "vor-und-nachteile-wann-ist-eine-holding-ug-sinnvoll", tag: "Kosten", t: "Vor- und Nachteile: Wann ist eine Holding-UG sinnvoll?", d: "Eine Holding-UG klingt für viele nach „Steuersparen“. In der Praxis lohnt sie sich nur in klaren Fällen. Der größte Hebel entsteht, wenn…", date: "2. Jan. 2026", read: "5 Min.", img: "https://framerusercontent.com/images/lZPS9FBrLQQWk4xbSGuPxC4r8Ns.png" },
  { slug: "holding-lohnt-sich-wenn-du-gewinne-in-der-firma-laesst-und-reinvestierst", tag: "Steuern", t: "Holding lohnt sich, wenn du Gewinne in der Firma lässt und reinvestierst", d: "Eine Holding ist keine eigene Rechtsform, sondern eine Struktur: Eine Muttergesellschaft hält Anteile an einer oder mehreren operativen…", date: "2. Jan. 2026", read: "3 Min.", img: "https://framerusercontent.com/images/VS2VvBCghUutKUGIRNdpIPKHZCQ.png" },
  { slug: "holding-struktur-2026", tag: "Steuern", t: "Holding-Struktur 2026: Was sich für Geschäftsführer ändert", d: "Ein Überblick über die wichtigsten Neuerungen bei Offenlegung, E-Bilanz und Fristen.", date: "12. Mai 2026", read: "6 Min.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=70" },
  { slug: "offenlegung-bundesanzeiger", tag: "Ratgeber", t: "Offenlegung beim Bundesanzeiger – Schritt für Schritt", d: "So reichen Sie Ihren Jahresabschluss fristgerecht und ohne Bußgeldrisiko ein.", date: "28. Apr. 2026", read: "5 Min.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=70" },
  { slug: "kosten-jahresabschluss", tag: "Kosten", t: "Was kostet ein Holding-Jahresabschluss wirklich?", d: "Stundenabrechnung vs. Festpreis – wir rechnen ein typisches Beispiel durch.", date: "9. Apr. 2026", read: "7 Min.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=70" },
  { slug: "beteiligungen-buchhaltung", tag: "Praxis", t: "Beteiligungen sauber abbilden: die häufigsten Fehler", d: "Von Darlehen bis Personengesellschaft – worauf es in der Buchhaltung ankommt.", date: "21. Mär. 2026", read: "4 Min.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=70" },
  { slug: "kontoauszug-import", tag: "Produkt", t: "Neu im Portal: automatischer Kontoauszug-Import", d: "Transaktionen werden jetzt automatisch kategorisiert – das spart spürbar Zeit.", date: "3. Mär. 2026", read: "3 Min.", img: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1600&q=70" },
  { slug: "steuervorteile-holding", tag: "Steuern", t: "Vermögensverwaltende Holding: Steuervorteile im Überblick", d: "Wann sich die Holding lohnt und welche Pflichten damit einhergehen.", date: "14. Feb. 2026", read: "8 Min.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=70" },
];
const POST_TINTS = ["#cfe2d6", "#e3e6ef", "#e8e7db", "#dfe9e2", "#e6ebfa", "#efeae0"];
const postImg = (u) => u;
function BlogPage({ onSurvey, priceFrom }) {
  return (
    <>
      <PageHero eyebrow="Blog"
        title={<>Wissen für<br />Holding-Geschäftsführer.</>}
        lede="Praxisnahe Beiträge zu Steuern, Jahresabschluss und Offenlegung – verständlich erklärt." />
      <section className="section section--tight">
        <div className="wrap">
          <div className="posts">
            {POSTS.map((p, i) =>
              <a key={p.t} className="post" href={"blog-" + p.slug + ".html"}>
                <div className="post__thumb" style={{ backgroundColor: POST_TINTS[i % POST_TINTS.length], backgroundImage: "url(" + postImg(p.img, 800) + ")" }}>
                  <span className="post__tag">{p.tag}</span>
                </div>
                <div className="post__body">
                  <h3 className="post__t">{p.t}</h3>
                  <p className="post__d">{p.d}</p>
                  <div className="post__meta">{p.date} · {p.read} Lesezeit</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>
      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

/* ---------------- KONTAKT PAGE ---------------- */
function KontaktPage() {
  return (
    <>
      <PageHero eyebrow="Kontakt"
        title="Sprechen Sie mit uns."
        lede="Ob Erstgespräch, individuelles Angebot oder Frage zur Plattform – wir melden uns innerhalb eines Werktags." />
      <section className="section section--tight">
        <div className="wrap kontakt">
          <div className="kontakt__info">
            <div className="kontakt__row">
              <div className="kontakt__ic"><Icon name="euro" size={20} sw={1.9} /></div>
              <div><div className="kontakt__h">Angebot anfordern</div><div className="kontakt__d">In 2 Minuten zum unverbindlichen Festpreis – direkt über unseren Rechner.</div><a className="textlink" href="Preise.html">Zum Preisrechner <Arrow size={14} /></a></div>
            </div>
            <div className="kontakt__row">
              <div className="kontakt__ic"><Icon name="doc" size={20} sw={1.9} /></div>
              <div><div className="kontakt__h">E-Mail</div><div className="kontakt__d"><a className="textlink" href="mailto:chris@miradortax.com">chris@miradortax.com</a></div></div>
            </div>
            <div className="kontakt__row">
              <div className="kontakt__ic"><Icon name="building" size={20} sw={1.9} /></div>
              <div><div className="kontakt__h">Anschrift</div><div className="kontakt__d">Mirador Tax · Ruescher Invest UG (haftungsbeschränkt)<br />Holunderweg 17<br />21220 Seevetal, Deutschland</div></div>
            </div>
          </div>
          <div className="kontakt__form">
            <h3 className="kontakt__form-h">Schreiben Sie uns direkt</h3>
            <p className="kontakt__d" style={{ marginBottom: 22 }}>Senden Sie uns eine E-Mail mit Ihrem Anliegen – wir antworten innerhalb eines Werktags. Für ein unverbindliches Festpreis-Angebot nutzen Sie am schnellsten unseren Rechner.</p>
            <a className="btn btn--accent btn--lg btn--block" href="mailto:chris@miradortax.com?subject=Anfrage%20Mirador%20Tax">E-Mail schreiben <Arrow /></a>
            <a className="btn btn--ghost btn--lg btn--block" href="Preise.html" style={{ marginTop: 12 }}>Zum Preisrechner <Arrow /></a>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageHero, LeistungenPage, AblaufPage, KundenPage, PreisePage, BlogPage, KontaktPage });
