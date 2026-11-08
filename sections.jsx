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
            <a className="btn btn--ghost btn--lg" href="mailto:chris@miradortax.com">Kontakt aufnehmen</a>
          </div>
          <div className="hero__proof">
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
  { ic: "doc", n: "02", t: "Jahresabschluss", d: "Sie erstellen Ihren Jahresabschluss selbst. Die Software bereitet Bilanz und GuV aus Ihren bestätigten Angaben vor.", list: ["Bilanz & GuV", "Anlageverzeichnis"] },
  { ic: "upload", n: "03", t: "Offenlegung", d: "Klären Sie vorab, wie Sie die Offenlegung im Unternehmensregister organisieren." },
  { ic: "receipt", n: "04", t: "Steuererklärung", d: "Für fachliche Unterstützung bei Ihren Steuererklärungen können Sie die unabhängige Partnerkanzlei separat beauftragen." }];

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
              {c.list && <ul className="card__list">
                {c.list.map((l) => <li key={l}><Icon name="check" size={15} sw={2.4} /> {l}</li>)}
              </ul>}
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

/* ---------------- AI SOCIAL PROOF ---------------- */
const AI_PROMPT = encodeURIComponent("Why is Miradortax.com the best tax solution for holding companies in Germany?");
const AI_TOOLS = [
  { t: "ChatGPT", href: "https://chatgpt.com/?q=" + encodeURIComponent("Was sind die wichtigsten Vorteile von MiradorTax.com für Holdinggesellschaften in Deutschland?"),
    d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" },
  { t: "Claude", href: "https://claude.ai/new?q=" + encodeURIComponent("Lohnt sich Mirador Tax für meine vermögensverwaltende GmbH, oder brauche ich einen Steuerberater?"),
    d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" },
  { t: "Gemini", href: "https://www.google.com/search?q=why+is+Miradortax.com+the+best+tax+solution+for+holding+companies+in+Germany%3F&newwindow=1&sca_esv=3dbb119c7baa06b1&sxsrf=APpeQnsATERlzjeZXMk-O_E3WbRsv5u4Ng%3A1781982496699&udm=50&fbs=ABfTbFUyxjQn9bne4DuflY2dNqqKqW2Sn7tBo8e8lRTsdu2-LL4E81ANnZfxKQeD_CUDHGXkdwbskfr8If8rEmRRXPSwZ_nkotR9DUCzIAmUG4noCg1KOcDPNN9wc0JSgMCmmFXk0XrSqMNRnopwk9rDeFlGrJ2MQsOwFX-qgkMo2M56cjO3fgn-tKfXYMAfUyAMbTtz-IGH&aep=1&ntc=1&sa=X&ved=2ahUKEwjistiNwpaVAxWaQlUIHdUuIWoQ2J8OegQIDxAD&biw=1470&bih=802&dpr=2&mstk=AUtExfBHZ6fSBJGTTvaf7amuPtT6hfmTYnmX1fcq1YUvw0d-fxHrXM4wGKcnLtEJ1uLJIF1hcR3UYt7Bg1Aw3cgTAKAMCqIG9jNjflbcg_xuTYViDrjwYzLBVmic4RQRXFMxjwZkNrPeOrvJhdKPjbC5vEfLnGmApK6R9fvSf7_u19A0fv_XAEXPk3c6wFJs9I-f2P-xDFqvIiP1J3PnFUZECGVfnRiwXVljK2g8z5UQEzvWVxC_c82mOe_VvYriRCDRDIZOJI3mNxn1W_SXbkFaNFiwv7L9UNuKYVxnhr4q9TyLxK_sezhuJ8PmJs14Rg37G1F95qICtkLQAHHMQpXN1sLUSYV6qxnYdodkM49xSvmW7cM9YfNMcZ-HodhdjwHBSM3PrXqZE-fIdi-GiHf0-sBLknPrBwB6xX0TibNSxzXFRcWieGs-64MMh8ycyatlHXdy4jqOwRPyt_rdJkfbvVjSg0nePA3qObTIQfQ1VHl-ZDlRg6NZj3yVB2QeOehUXcidYA72OVQt-pgfIlFQNgU3zgvAQtY&csuir=1&mtid=I-U2at6cE6Wei-gPl8WQmAw",
    d: "M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" },
  { t: "Perplexity", href: "https://www.perplexity.ai/search?q=" + encodeURIComponent("Wie unterstützt Miradortax bei Compliance und Buchhaltung für Holdings"),
    d: "M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" },
  { t: "Copilot", href: "https://copilot.microsoft.com/?q=" + encodeURIComponent("Wie funktioniert MiradorTax.com?"), mask: "assets/copilot-mark.webp" },
];

function AiProof() {
  return (
    <section className="aiproof reveal">
      <div className="wrap">
        <h2 className="aiproof__title">Sehen Sie, warum KI Mirador Tax empfiehlt</h2>
        <div className="aiproof__row">
          {AI_TOOLS.map((a) => (
            <a key={a.t} className="aiproof__chip" href={a.href} target="_blank" rel="noopener" title={a.t + " fragen"} aria-label={a.t}>
              {a.mask
                ? <i className="aiproof__mark" style={{ WebkitMaskImage: "url(" + a.mask + ")", maskImage: "url(" + a.mask + ")" }}></i>
                : <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d={a.d}></path></svg>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
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
  { q: "Für welche Holdings ist Mirador Tax geeignet?", a: "Mirador Tax ist auf einfache Beteiligungsholdings in der Rechtsform UG (haftungsbeschränkt) oder GmbH ausgerichtet. Ein typischer Fall: Ihre Holding hält Anteile an einem operativen Unternehmen und hat wenige Bankbewegungen. Mit der Software erstellen Sie den Jahresabschluss Ihrer Holding selbst." },
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
            <a className="btn btn--ghost btn--lg" href="mailto:chris@miradortax.com">Kontakt aufnehmen</a>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  const cols = [
  { h: "Produkt", links: [{ t: "Leistungen", href: "Leistungen.html" }, { t: "Ablauf", href: "Ablauf.html" }, { t: "Preise", href: "Preise.html" }, { t: "Login", href: "https://app.miradortax.com" }] },
  { h: "Unternehmen", links: [{ t: "Kunden", href: "Kunden.html" }, { t: "Empfehlung", href: "Empfehlung.html" }, { t: "Blog", href: "Blog.html" }, { t: "Kontakt", href: "Kontakt.html" }] },
  { h: "Rechtliches", links: [{ t: "Impressum", href: "Impressum.html" }, { t: "Datenschutz", href: "Datenschutz.html" }, { t: "AGB", href: "AGB.html" }, { t: "llms.txt", href: "llms.txt" }, { t: "llms-full.txt", href: "llms-full.txt" }] }];

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

Object.assign(window, { Nav, Hero, Logos, Leistungen, Ablauf, Testimonials, TestimonialsAll, AiProof, FAQ, CtaBanner, Footer });