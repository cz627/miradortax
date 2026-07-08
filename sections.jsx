/* sections.jsx — page sections */
const { useState: useStateS, useEffect: useEffectS } = React;

/* ---------------- NAV ---------------- */
const NAV_LINKS = [
{ t: "Leistungen", href: "Leistungen.html", page: "leistungen" },
{ t: "Ablauf", href: "Ablauf.html", page: "ablauf" },
{ t: "Kunden", href: "Kunden.html", page: "kunden" },
{ t: "Preise", href: "Preise.html", page: "preise" }];

function Nav({ onSurvey }) {
  const [stuck, setStuck] = useStateS(false);
  const [menuOpen, setMenuOpen] = useStateS(false);
  const current = typeof window !== "undefined" && window.PAGE || "home";
  useEffectS(() => {
    const f = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", f);f();
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffectS(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={"nav" + (stuck ? " is-stuck" : "") + (menuOpen ? " nav--menu-open" : "")}>
      <div className="wrap nav__row">
        <a className="nav__brand" href="index.html"><img className="nav__logo" data-logo src="assets/logo-dark.png" alt="Mirador Tax" /></a>
        <nav className="nav__links">
          {NAV_LINKS.map((l) => <a key={l.t} className={"nav__link" + (current === l.page ? " is-active" : "")} href={l.href} style={{ fontSize: "14px" }}>{l.t}</a>)}
        </nav>
        <div className="nav__spacer"></div>
        <div className="nav__right">
          <a className="nav__login" href="https://app.miradortax.com" target="_blank" rel="noopener">Login</a>
          <button className="btn btn--ghost nav__cta" onClick={onSurvey}>Angebot anfordern</button>
          <a className="btn btn--accent nav__cta" href="https://app.miradortax.com/register" target="_blank" rel="noopener">Registrieren</a>
          <button className="nav__burger" aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <Icon name={menuOpen ? "close" : "menu"} size={22} sw={2} />
          </button>
        </div>
      </div>

      <div className={"nav__mobile" + (menuOpen ? " open" : "")}>
        <div className="nav__mobile-inner">
          {NAV_LINKS.map((l) => <a key={l.t} className={"nav__mlink" + (current === l.page ? " is-active" : "")} href={l.href} onClick={closeMenu}>{l.t}<Icon name="arrow" size={16} sw={2} /></a>)}
          <a className="nav__mlink" href="Empfehlung.html" onClick={closeMenu}>Empfehlung<Icon name="arrow" size={16} sw={2} /></a>
          <a className="nav__mlink" href="Blog.html" onClick={closeMenu}>Blog<Icon name="arrow" size={16} sw={2} /></a>
          <div className="nav__mobile-actions">
            <button className="btn btn--ghost btn--block" onClick={() => { closeMenu(); onSurvey(); }}>Angebot anfordern</button>
            <a className="btn btn--accent btn--block" href="https://app.miradortax.com/register" target="_blank" rel="noopener" onClick={closeMenu}>Registrieren <Arrow /></a>
            <a className="nav__mobile-login" href="https://app.miradortax.com" target="_blank" rel="noopener" onClick={closeMenu}>Zum Login →</a>
          </div>
        </div>
      </div>
      <div className={"nav__scrim" + (menuOpen ? " open" : "")} onClick={closeMenu}></div>
    </header>);

}

/* ---------------- HERO ---------------- */
function Hero({ onSurvey, priceFrom }) {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <div className="hero__copy-inner">
          <div className="eyebrow hero__eyebrow">FÜR HOLDINGGESELLSCHAFTEN</div>
          <h1 className="display hero__title">Holding-Steuern,<br /><em>endlich</em> erledigt.</h1>
          <p className="lede hero__lede">
            Buchhaltung, Jahresabschluss, Offenlegung und Steuererklärung – von Ihnen erstellt,
            in einem geführten Portal. Digital und zum Festpreis ab 499 €.
          </p>
          <div className="hero__actions">
            <button className="btn btn--accent btn--lg" onClick={onSurvey}>Angebot anfordern <Arrow /></button>
            <a className="btn btn--ghost btn--lg" href="https://calendar.notion.so/meet/christopher-vd1ezx1lps/cw4uci4o40" target="_blank" rel="noopener">Produkt-Demo buchen</a>
          </div>
          <div className="hero__proof">
            <div className="hero__proof-people">
              <div className="hero__avatars">
                {["https://randomuser.me/api/portraits/women/45.jpg", "https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/women/68.jpg", "https://randomuser.me/api/portraits/men/52.jpg", "images/alexander-valtingojer.jpg"].
                map((p, i) => <span key={i} style={{ backgroundImage: "url(" + p + ")" }} />)}
              </div>
              <div className="hero__proof-text">
                <div className="stars">★★★★★</div>
                <span><b>200+ Holdings</b> vertrauen auf Mirador Tax</span>
              </div>
            </div>
            <ul className="hero__checks">
              <li><span className="hero__check-ic"><Icon name="check" size={12} sw={3} /></span> Festpreis – keine Stundenabrechnung</li>
              <li><span className="hero__check-ic"><Icon name="check" size={12} sw={3} /></span> Unverbindliches Angebot in 2 Minuten</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__panel">
          <div className="mock-wrap"><PortalMockup /></div>
        </div>
        <div className="hero__pill">
          <span className="hero__pill-ava"></span>
          <span className="hero__pill-text">
            <small>Festpreis</small>
            <b>ab {priceFrom} €/Jahr</b>
          </span>
        </div>
      </div>
    </section>);

}

/* ---------------- TRUST SIGNALS ---------------- */
function Logos() {
  return (
    <section className="trust wrap">
      <div className="trust__row">
        <div className="trust__item">
          <Icon name="star" size={28} sw={1.6} />
          <span className="trust__label trust__label--brand">ELSTER</span>
        </div>
        <div className="trust__item">
          <Icon name="usercheck" size={30} sw={1.6} />
          <span className="trust__label">Entwickelt mit<br />Steuerberater:innen</span>
        </div>
        <div className="trust__item trust__google">
          <span className="trust__gtext">
            <small>Google Rating 4.9/5</small>
            <span className="trust__stars">★★★★★</span>
          </span>
        </div>
        <div className="trust__item">
          <Icon name="shieldcheck" size={30} sw={1.6} />
          <span className="trust__label">DSGVO<br />Konform</span>
        </div>
      </div>
    </section>);

}

/* ---------------- LEISTUNGEN ---------------- */
function Leistungen({ hideHead }) {
  const cards = [
  { ic: "book", n: "01", t: "Buchhaltung", d: "Kontoauszüge werden automatisch importiert; Transaktionen werden automatisch kategorisiert. Sie prüfen und bestätigen.", list: ["Bank- & Depot-Upload", "Beteiligungen & Darlehen", "Alle Beteiligungen in einer Übersicht"] },
  { ic: "doc", n: "02", t: "Jahresabschluss", d: "Bilanz, GuV und Anhang nach HGB – Software wurde von Steuerexpert:innen entwickelt, geprüft und gewartet.", list: ["Bilanz & GuV nach HGB", "E-Bilanz ans Finanzamt", "Anlageverzeichnis"] },
  { ic: "upload", n: "03", t: "Offenlegung", d: "Elektronische Einreichung beim Bundesanzeiger – mit Fristenerinnerungen, damit Sie pünktlich einreichen.", list: ["Bundesanzeiger-Einreichung", "Fristenerinnerungen"] },
  { ic: "receipt", n: "04", t: "Steuererklärung", d: "Körperschaft-, Gewerbe- und Umsatzsteuer – vollständig erstellt und elektronisch übermittelt.", list: ["KSt, GewSt & USt", "ELSTER-Übermittlung", "Ablage für Steuererklärungen"] }];

  return (
    <section className="section" id="leistungen">
      <div className="wrap">
        {!hideHead &&
        <div className="feat__head reveal">
          <div>
            <div className="eyebrow">Leistungen</div>
            <h2 className="h2" style={{ marginTop: 16 }}>Alle Pflichten Ihrer Holding.<br />In einem Portal.</h2>
          </div>
          <p className="lede" style={{ marginBottom: 4 }}>
            Mit Mirador Tax erledigen Sie den kompletten Jahreszyklus Ihrer Holding – strukturiert, geführt und zum Festpreis.
          </p>
        </div>
        }
        <div className={"feat__grid" + (hideHead ? "" : " feat__grid--row")}>
          {cards.map((c) =>
          <div key={c.t} className="card reveal">
              <div className="card__step">{c.n}</div>
              <div className="card__ic"><Icon name={c.ic} size={22} sw={1.9} /></div>
              <div className="card__t">{c.t}</div>
              <div className="card__d">{c.d}</div>
              <ul className="card__list">
                {c.list.map((l) => <li key={l}><Icon name="check" size={15} sw={2.4} /> {l}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- ABLAUF ---------------- */
function Ablauf({ hideHead }) {
  const steps = [
  { t: "Daten hochladen", d: "Laden Sie Ihre Kontoauszüge sicher auf die Plattform hoch. Die Software führt Sie Schritt für Schritt durch die Datenerfassung und prüft Ihre Angaben automatisch auf technische Vollständigkeit." },
  { t: "Erstellung der Jahresabschlüsse", d: "Auf Basis Ihrer eingegebenen Daten erstellt die Software automatisch Ihren Jahresabschluss – inklusive Bilanz, GuV und Anlagenverzeichnis. Alle Ansätze und Wahlrechte beruhen auf Ihren Angaben; Sie sehen jederzeit Status und Fortschritt." },
  { t: "Freigeben & einreichen", d: "Nach Ihrer Durchsicht & Freigabe übermitteln Sie die fertigen Jahresabschlüsse direkt an den Bundesanzeiger und die Steuererklärung an das Finanzamt – rechtssicher und fristgerecht." }];

  return (
    <section className="section section--tight" id="ablauf" style={{ background: "var(--cream-2)", backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="wrap">
        {!hideHead &&
        <div className="shead reveal">
          <div className="eyebrow">So funktioniert's</div>
          <h2 className="h2">In drei Schritten zum fertigen Abschluss</h2>
          <p className="lede">Kein Papierkram, keine Rückfragen-Schleifen. Ein klarer, geführter Prozess vom ersten Beleg bis zur Abgabe.</p>
        </div>
        }
        <div className="steps">
          {steps.map((s, i) =>
          <div key={s.t} className="step reveal" style={{ transitionDelay: i * 80 + "ms", backgroundColor: "rgb(250, 248, 249)" }}>
              <div className="step__n">{i + 1}</div>
              <div className="step__t">{s.t}</div>
              <div className="step__d">{s.d}</div>
            </div>
          )}
        </div>
        <div className="ablauf__control reveal">
          <Icon name="shieldcheck" size={26} sw={1.7} />
          <p><b>Volle Kontrolle:</b> Sie bestätigen jede Kategorisierung, beantworten alle Abschlussfragen selbst und geben jedes Dokument vor Einreichung frei. Nichts verlässt die Plattform ohne Ihre Freigabe.</p>
        </div>
      </div>
    </section>);

}

/* ---------------- TESTIMONIALS ---------------- */
const USP_DATA = [
{
  key: "einfach", label: "Einfach", icon: "spark",
  stat: { b: "2 Min.", s: "bis zum verbindlichen Festpreis-Angebot" },
  feature: {
    quote: "Vorher ewige Rückfragen-Schleifen und ständiges E-Mail-Ping-Pong. Jetzt läuft alles in einem Portal – ich lade die Daten hoch, der Rest passiert von selbst.",
    name: "Alexander Valtingojer", role: "Gründer, Valtingojer UG (haftungsbeschränkt)", ava: "#9a7b66", photo: "images/alexander-valtingojer.jpg"
  },
  cards: [
  { quote: "Der gesamte Prozess hat keine zwanzig Minuten gedauert. Bankkontoauszüge hochgeladen, fertig – ohne Steuerberater-Termin.", name: "Patrick de Castro Neuhaus", role: "Founder, PCN Ventures UG", ava: "#5f6b78", photo: "assets/patrick-pcn.png" },
  { quote: "Die Plattform ist so aufgeräumt, dass ich zum ersten Mal verstehe, was mit meiner Holding eigentlich passiert.", name: "Sandra Köhler", role: "Inhaberin, Köhler Beteiligungen", ava: "#7d8b6a", photo: "https://randomuser.me/api/portraits/women/68.jpg" }]

},
{
  key: "guenstig", label: "Günstig", icon: "shieldcheck",
  stat: { b: "− 58 %", s: "günstiger als der vorherige Steuerberater" },
  feature: {
    quote: "Mein alter Steuerberater hat nach Stunden abgerechnet – nie wusste ich vorher, was es kostet. Mit Mirador erledige ich das zum halben Preis.",
    name: "Michael Kowatschew", role: "Gründer, Kowatschew Ventures UG", ava: "#9a7b66", photo: "images/michael-kowatschew.png"
  },
  cards: [
  { quote: "Transparenter Festpreis statt Gebührenverordnung. Wir sparen jedes Jahr einen vierstelligen Betrag.", name: "Julia Vogt", role: "Geschäftsführerin, Vela Invest GmbH", ava: "#5f6b78", photo: "https://randomuser.me/api/portraits/women/29.jpg" },
  { quote: "Das günstigste Angebot am Markt – und trotzdem fühlt sich der Prozess super an.", name: "Philipp Arndt", role: "Geschäftsführer, Arndt Holding", ava: "#7d8b6a", photo: "https://randomuser.me/api/portraits/men/52.jpg" }]

},
{
  key: "zuverlaessig", label: "Zuverlässig", icon: "sealcheck",
  stat: { b: "Alle Fristen", s: "im Blick – bei jedem Jahresabschluss" },
  feature: {
    quote: "Die Offenlegung lief zum ersten Mal völlig stressfrei. Frist im Blick, ein Klick, erledigt – und bei Rückfragen antwortet immer ein freundlicher Mensch.",
    name: "Alexander U.", role: "Geschäftsführer, AU Holding GmbH", ava: "#9a7b66", photo: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  cards: [
  { quote: "Korrekt, pünktlich, kein böses Erwachen vom Finanzamt.", name: "Andreas Wolff", role: "Inhaber, Wolff Invest", ava: "#5f6b78", photo: "https://randomuser.me/api/portraits/men/76.jpg" },
  { quote: "Schnelle Reaktion, klare Antworten, nie das Gefühl, eine Nummer zu sein. Genau so stelle ich mir Betreuung vor.", name: "Miriam Falk", role: "Geschäftsführerin, Falk Beteiligungs GmbH", ava: "#7d8b6a", photo: "https://randomuser.me/api/portraits/women/56.jpg" }]

}];


function Testimonials({ hideHead }) {
  const [active, setActive] = useStateS(0);
  const d = USP_DATA[active];
  return (
    <section className="section" id="kunden">
      <div className="wrap">
        <div className={"shead reveal usp-head" + (hideHead ? " usp-head--nohead" : "")}>
          {!hideHead ?
          <div>
            <div className="eyebrow">Kundenstimmen</div>
            <h2 className="h2">Was Holdings an Mirador schätzen</h2>
          </div> : <div></div>}
          <div className="usp-toggle" role="tablist" aria-label="Vorteile">
            {USP_DATA.map((u, i) =>
            <button key={u.key} role="tab" aria-selected={active === i}
            className={"usp-tab" + (active === i ? " on" : "")} onClick={() => setActive(i)}>
                <span className="usp-tab__ic"><Icon name={u.icon} size={15} sw={2.2} /></span>
                {u.label}
              </button>
            )}
          </div>
        </div>

        <div className="tcards" key={d.key}>
          <div className="tcard tcard--feature usp-fade">
            <div className="tcard__stat tcard__stat--feature"><b>{d.stat.b}</b><span>{d.stat.s}</span></div>
            <div className="tcard__quote">{"„" + d.feature.quote + "“"}</div>
            <div className="tcard__by">
              <div className="tcard__ava" style={{ backgroundImage: "url(" + d.feature.photo + ")" }}></div>
              <div><div className="tcard__name">{d.feature.name}</div><div className="tcard__role">{d.feature.role}</div></div>
            </div>
          </div>
          {d.cards.map((c, i) =>
          <div key={i} className="tcard usp-fade" style={{ animationDelay: (i + 1) * 70 + "ms" }}>
              <div className="tcard__quote" style={{ fontSize: 17, fontWeight: 500 }}>{"„" + c.quote + "“"}</div>
              <div className="tcard__by">
                <div className="tcard__ava" style={{ backgroundImage: "url(" + c.photo + ")" }}></div>
                <div><div className="tcard__name">{c.name}</div><div className="tcard__role">{c.role}</div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- TESTIMONIALS (all, non-toggle, for Kunden page) ---------------- */
function TestimonialsAll() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        {USP_DATA.map((u, g) => {
          const all = [u.feature, ...u.cards];
          return (
            <div key={u.key} className="tgroup">
              <div className="tgroup__head">
                <span className="tgroup__index">{String(g + 1).padStart(2, "0")}</span>
                <div className="tgroup__meta">
                  <div className="tgroup__label">{u.label}</div>
                  <div className="tgroup__stat"><b>{u.stat.b}</b> {u.stat.s}</div>
                </div>
              </div>
              <div className="tgrid">
                {all.map((c, i) => {
                  return (
                    <div key={i} className="tquote">
                    <div className="tquote__mark">”</div>
                    <p className="tquote__text">{"„" + c.quote + "“"}</p>
                    <div className="tcard__by">
                      <img className="tphoto" src={c.photo} alt={c.name} loading="lazy" />
                      <div><div className="tcard__name">{c.name}</div><div className="tcard__role">{c.role}</div></div>
                    </div>
                  </div>);

                })}
              </div>
            </div>);

        })}
      </div>
    </section>);

}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useStateS(0);
  const qs = [
  { q: "Für welche Holdings ist Mirador Tax geeignet?", a: "Mirador Tax ist geeignet für vermögensverwaltende und geschäftsleitende Holdings in der Rechtsform GmbH oder UG (haftungsbeschränkt) – von der klassischen Beteiligungsholding bis zur Investment-Holding mit Wertpapierdepots. Ob Ihre Gesellschaft ins Festpreis-Modell passt, erfahren Sie in der kostenlosen Angebotsanfrage." },
  { q: "Was kostet der Festpreis genau?", a: "Der Preis richtet sich nach Anzahl der Beteiligungen, dem Transaktionsvolumen und der Bilanzsumme. Über die Angebotsanfrage erhalten Sie in 2 Minuten einen Festpreis – ohne Stundenabrechnung und ohne versteckte Kosten." },
  { q: "Ist Mirador Tax eine Steuerkanzlei?", a: "Nein. Mirador Tax ist eine Software, mit der Sie Buchhaltung, Jahresabschluss und Steuererklärungen Ihrer Holding selbst erstellen. Alle Werte, Ansätze und Wahlrechte beruhen auf Ihren eigenen Angaben und Bestätigungen; die Software verarbeitet diese automatisiert nach festen Regeln – eine individuelle steuerliche Bewertung, Empfehlung oder Beratung durch Mirador Tax findet nicht statt. Ersteller Ihrer Abschlüsse und Erklärungen sind Sie selbst. Auf Wunsch können Sie für die Übermittlung an das Finanzamt oder eine fachliche Überprüfung direkt eine unabhängige Steuerkanzlei beauftragen." },
  { q: "Wie ist das Angebot zu solchen Preisen möglich?", a: "Mirador Tax ist eine Software, keine Kanzlei: Kontoauszüge werden automatisch importiert, Transaktionen automatisch kategorisiert, und Bilanz, GuV und E-Bilanz werden nach festen Regeln aus Ihren bestätigten Angaben erzeugt. Weil keine individuelle Bearbeitung durch Berufsträger anfällt, entfällt die Abrechnung nach Stunden oder StBVV – der Festpreis deckt die Nutzung der Plattform für den kompletten Jahreszyklus ab." }];

  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <div className="reveal">
          <div className="eyebrow">FAQ</div>
          <h2 className="h2" style={{ marginTop: 16 }}>Häufige Fragen</h2>
          <p className="lede" style={{ marginTop: 14 }}>Noch Fragen? <a className="textlink" href="Kontakt.html">Sprechen Sie mit uns <Arrow size={14} /></a></p>
        </div>
        <div className="faq__list reveal">
          {qs.map((item, i) =>
          <div key={i} className={"faq__item" + (open === i ? " open" : "")}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                {item.q}<span className="faq__ic"><Icon name="plus" size={20} sw={2} /></span>
              </button>
              <div className="faq__a" style={{ maxHeight: open === i ? "300px" : "0" }}><p>{item.a}</p></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- CTA + FOOTER ---------------- */
function CtaBanner({ onSurvey, priceFrom }) {
  return (
    <section className="section" id="preise-cta">
      <div className="wrap">
        <div className="cta reveal" style={{ backgroundColor: "rgb(242, 240, 237)" }}>
          <div className="eyebrow" style={{ color: "var(--accent)", justifyContent: "center", display: "flex", marginBottom: 18 }}>Festpreis ab 499 €</div>
          <h2 className="h2">Erfahren Sie in 2 Minuten,<br />was Ihre Holding kostet.</h2>
          <p>Beantworten Sie fünf kurze Fragen und erhalten Sie sofort einen unverbindlichen Festpreis für das komplette Steuerjahr Ihrer Holding.</p>
          <div className="cta__actions">
            <button className="btn btn--accent btn--lg" onClick={onSurvey}>Angebot anfordern <Arrow /></button>
            <a className="btn btn--ghost btn--lg" href="https://calendar.notion.so/meet/christopher-vd1ezx1lps/cw4uci4o40" target="_blank" rel="noopener">Produkt-Demo buchen</a>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  const cols = [
  { h: "Produkt", links: [{ t: "Leistungen", href: "Leistungen.html" }, { t: "Ablauf", href: "Ablauf.html" }, { t: "Preise", href: "Preise.html" }, { t: "Login", href: "https://app.miradortax.com" }] },
  { h: "Unternehmen", links: [{ t: "Kunden", href: "Kunden.html" }, { t: "Empfehlung", href: "Empfehlung.html" }, { t: "Blog", href: "Blog.html" }, { t: "Kontakt", href: "Kontakt.html" }] },
  { h: "Rechtliches", links: [{ t: "Impressum", href: "Impressum.html" }, { t: "Datenschutz", href: "Datenschutz.html" }, { t: "AGB", href: "AGB.html" }] }];

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src="assets/logo-dark.png" alt="Mirador Tax" style={{ height: "53px", objectFit: "contain", width: "197px" }} />
          <p>Die Software für Buchhaltung, Jahresabschluss, Offenlegung und Steuererklärung Ihrer Holding – digital und zum Festpreis.</p>
        </div>
        {cols.map((c) =>
        <div key={c.h} className="footer__col">
            <h4>{c.h}</h4>
            {c.links.map((l) => <a key={l.t} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener" : undefined}>{l.t}</a>)}
          </div>
        )}
      </div>
      <div className="wrap footer__bottom">
        <span>© 2026 Mirador Tax. Alle Rechte vorbehalten.</span>
        <span className="footer__legalnote">Mirador Tax ist ein Softwareprodukt zur Selbsterstellung und erbringt keine Steuerberatung im Sinne des StBerG.</span>
      </div>
    </footer>);

}

Object.assign(window, { Nav, Hero, Logos, Leistungen, Ablauf, Testimonials, TestimonialsAll, FAQ, CtaBanner, Footer });