/* pages.jsx — inner pages (Leistungen, Ablauf, Kunden, Preise, Blog, Kontakt) */
const {
  useState: useStateP
} = React;

/* compact page hero used at the top of every inner page */
function PageHero({
  eyebrow,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "page-hero__lede"
  }, lede)));
}

/* ---------------- LEISTUNGEN PAGE ---------------- */
function SecuritySection() {
  const items = [{
    ic: "building",
    t: "Hosting auf deutschen Servern",
    d: "Unsere gesamte IT-Infrastruktur ist in Deutschland gehostet – bei zertifizierten Rechenzentren mit höchsten Sicherheitsstandards. So stellen wir sicher, dass alle Daten Ihrer Holdinggesellschaft ausschließlich innerhalb deutscher Rechtsordnung gespeichert und verarbeitet werden."
  }, {
    ic: "lock",
    t: "DSGVO-konforme Prozesse",
    d: "Datenschutz ist integraler Bestandteil unserer täglichen Arbeit. Alle Prozesse – von der Datenübermittlung über die Belegarchivierung bis zur Mandantenkommunikation – erfüllen die Vorgaben der DSGVO. Wir erheben nur die Daten, die wir wirklich benötigen."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    style: {
      background: "var(--cream-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Sicherheit & Compliance"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Datensicherheit auf h\xF6chstem Niveau"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Der Schutz Ihrer Daten hat f\xFCr uns oberste Priorit\xE4t.")), /*#__PURE__*/React.createElement("div", {
    className: "sec-grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    className: "sec-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-card__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.ic,
    size: 24,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sec-card__t"
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "sec-card__d"
  }, it.d))))));
}
function LeistungenPage({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Leistungen",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Alle Pflichten Ihrer Holding.", /*#__PURE__*/React.createElement("br", null), "In einem Portal."),
    lede: "Mit Mirador Tax erledigen Sie den kompletten Jahreszyklus Ihrer Holding \u2013 strukturiert, gef\xFChrt und zum Festpreis."
  }), /*#__PURE__*/React.createElement(Leistungen, {
    hideHead: true
  }), /*#__PURE__*/React.createElement(SecuritySection, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}

/* ---------------- ABLAUF PAGE ---------------- */
const WECHSEL_EMAIL = `Sehr geehrte/r [Name des bisherigen Steuerberaters / der Kanzlei],

ich habe mich entschieden, Buchhaltung, Jahresabschluss und Steuererklärungen meiner Holding UG künftig selbst mit einer Software zu erstellen.

Ich bedanke mich für die bisherige Zusammenarbeit und bitte Sie im Zuge der Beendigung des Mandats um Übermittlung des DATEV-Datenexports der Gesellschaft für die Vorjahre.

Bitte senden Sie die Unterlagen an [E-Mail-Adresse des Nutzers]. Für Ihre zeitnahe Unterstützung danke ich Ihnen im Voraus.

Viele Grüße,
[Ihr Name]`;
function WechselSection() {
  const [copied, setCopied] = useStateP(false);
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(WECHSEL_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    style: {
      background: "var(--cream-2)"
    },
    id: "wechsel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Wechsel leicht gemacht"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Zu Mirador Tax wechseln \u2013 so einfach geht's"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Der Wechsel ist unkompliziert: Sie fordern Ihre Unterlagen bei Ihrer bisherigen Kanzlei an und importieren sie in die Plattform \u2013 unser Support-Team unterst\xFCtzt Sie bei allen technischen Fragen rund um die Daten\xFCbernahme.")), /*#__PURE__*/React.createElement("div", {
    className: "wechsel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wechsel__text reveal"
  }, /*#__PURE__*/React.createElement("p", null, "Informieren Sie Ihre bisherige Steuerberatung dar\xFCber, dass Sie Buchhaltung, Jahresabschluss und Steuererkl\xE4rungen Ihrer Holding k\xFCnftig selbst mit Mirador Tax erstellen, und fordern Sie Ihre Unterlagen an. Unser vorbereiteter E-Mail-Entwurf macht das mit wenigen Klicks m\xF6glich \u2013 die gef\xFChrte Daten\xFCbernahme in der Plattform \xFCbernimmt den Rest."), /*#__PURE__*/React.createElement("div", {
    className: "wechsel__highlight"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "doc",
    size: 18,
    sw: 2
  }), /*#__PURE__*/React.createElement("span", null, "Wichtig: F\xFCr die Daten\xFCbernahme ben\xF6tigen Sie den ", /*#__PURE__*/React.createElement("b", null, "DATEV-Datenexport der Gesellschaft f\xFCr die Vorjahre"), " sowie die Steuerbescheide des Vorjahres."))), /*#__PURE__*/React.createElement("div", {
    className: "wechsel__mail reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wechsel__mail-head"
  }, /*#__PURE__*/React.createElement("span", null, "E-Mail-Entwurf an Ihre bisherige Kanzlei"), /*#__PURE__*/React.createElement("button", {
    className: "wechsel__copy",
    onClick: copy
  }, copied ? "✓ Kopiert" : "Kopieren")), /*#__PURE__*/React.createElement("pre", {
    className: "wechsel__mail-body"
  }, WECHSEL_EMAIL)))));
}
function AblaufPage({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "So funktioniert's",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "In drei Schritten zum", /*#__PURE__*/React.createElement("br", null), "fertigen Abschluss."),
    lede: "Kein Papierkram, keine R\xFCckfragen-Schleifen. Ein klarer, gef\xFChrter Prozess vom ersten Beleg bis zur Abgabe."
  }), /*#__PURE__*/React.createElement(Ablauf, {
    hideHead: true
  }), /*#__PURE__*/React.createElement(WechselSection, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}

/* ---------------- KUNDEN PAGE ---------------- */
function KundenPage({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Kundenstimmen",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Was Holdings an", /*#__PURE__*/React.createElement("br", null), "Mirador sch\xE4tzen."),
    lede: "\xDCber 200 Holdings vertrauen auf Mirador Tax \u2013 f\xFCr einen einfachen, g\xFCnstigen und zuverl\xE4ssigen Jahresabschluss."
  }), /*#__PURE__*/React.createElement(TestimonialsAll, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}

/* ---------------- PREISE PAGE ---------------- */
const PKG = ["Holding S", "Holding M", "Holding L", "Unlimited"];
const PKG_PRICE = ["499 €", "999 €", "1.499 €", "Individuell"];
const FEATURES = [{
  f: "Zugang zu Ihrem digitalen Kundenportal",
  v: [true, true, true, true]
}, {
  f: "Buchhaltung: automatischer Import & Kategorisierung",
  v: [true, true, true, true]
}, {
  f: "Jahresabschluss: automatische Erstellung aus Ihren Daten",
  v: [true, true, true, true]
}, {
  f: "E-Bilanz: automatische Erstellung, Übermittlung per ELSTER",
  v: [true, true, true, true]
}, {
  f: "Offenlegung im Bundesanzeiger",
  v: [true, true, true, true]
}, {
  f: "Erinnerungsservice für Fristen",
  v: [true, true, true, true]
}, {
  f: "Körperschaftsteuer- und Gewerbesteuererklärungen",
  v: [true, true, true, true]
}, {
  f: "Max. Anzahl an Beteiligungen",
  v: ["3", "10", "25", "Unlimitiert"]
}, {
  f: "Max. Anzahl an Buchungen pro Jahr",
  v: ["20", "40", "100", "Unlimitiert"]
}, {
  f: "Max. Bilanzsumme",
  v: ["100 TEUR", "300 TEUR", "5 Mio. €", "Unlimitiert"]
}];
function Cell({
  val
}) {
  if (val === true) return /*#__PURE__*/React.createElement("span", {
    className: "pt__yes"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.6
  }));
  if (val === false) return /*#__PURE__*/React.createElement("span", {
    className: "pt__no"
  }, "Nein");
  return /*#__PURE__*/React.createElement("span", {
    className: "pt__val"
  }, val);
}
const PV_FEATURES = ["Buchhaltung", "Jahresabschluss inkl. E-Bilanz", "Offenlegung im Bundesanzeiger", "Steuererklärung", "Persönlicher Support"];
const PRICE_OVERVIEW = [{
  name: "Holding S",
  price: "499",
  sub: "Für Gründer, die ihre Holding schlank und kosteneffizient führen möchten. Über 200 Holdings vertrauen auf unser Produkt und kommen mit Holding S aus.",
  features: PV_FEATURES,
  limits: ["20 Transaktionen / Jahr", "Bis zu 3 Beteiligungen", "Bilanzsumme bis 100 TEUR"]
}, {
  name: "Holding M",
  price: "999",
  sub: "Für wachsende Holdings mit steigender Zahl an Investments.",
  features: PV_FEATURES,
  limits: ["40 Transaktionen / Jahr", "Bis zu 10 Beteiligungen", "Bilanzsumme bis 300 TEUR"]
}, {
  name: "Holding L",
  price: "1.499",
  sub: "Für komplexere Beteiligungsstrukturen.",
  features: PV_FEATURES,
  limits: ["Bis zu 100 Buchungen / Jahr", "Bis zu 25 Beteiligungen", "Bilanzsumme bis 5 Mio. €"]
}];
function PovGroup({
  label,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pov__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pov__group-label"
  }, label), /*#__PURE__*/React.createElement("ul", {
    className: "pov__list"
  }, items.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    sw: 2.6
  }), " ", x))));
}
const PRICE_TESTIMONIALS = [{
  quote: "Mein alter Steuerberater hat nach Stunden abgerechnet – nie wusste ich vorher, was es kostet. Mit Mirador erledige ich das zum halben Preis.",
  name: "Michael Kowatschew",
  role: "Gründer, Kowatschew Ventures UG",
  photo: "images/michael-kowatschew.png"
}, {
  quote: "Transparenter Festpreis statt Gebührenverordnung. Wir sparen jedes Jahr einen vierstelligen Betrag.",
  name: "Julia Vogt",
  role: "Geschäftsführerin, Vela Invest GmbH",
  photo: "https://randomuser.me/api/portraits/women/29.jpg"
}, {
  quote: "Das günstigste Angebot am Markt – und trotzdem fühlt sich der Prozess super an.",
  name: "Philipp Arndt",
  role: "Geschäftsführer, Arndt Holding",
  photo: "https://randomuser.me/api/portraits/men/52.jpg"
}];
function PreisePage({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Preise",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Bezahlen Sie nur das,", /*#__PURE__*/React.createElement("br", null), "was Sie wirklich brauchen."),
    lede: "Transparente Festpreise statt Stundenabrechnung nach Geb\xFChrenverordnung."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "poverview"
  }, PRICE_OVERVIEW.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "pov" + (i === 0 ? " pov--feat" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pov__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pov__name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "pov__sub"
  }, p.sub)), /*#__PURE__*/React.createElement("div", {
    className: "pov__price"
  }, p.price, " \u20AC", /*#__PURE__*/React.createElement("span", null, " / Jahr")), i === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pov__body pov__body--cols"
  }, /*#__PURE__*/React.createElement(PovGroup, {
    label: "Leistungen",
    items: p.features
  }), /*#__PURE__*/React.createElement(PovGroup, {
    label: "Limits",
    items: p.limits
  })) : /*#__PURE__*/React.createElement("div", {
    className: "pov__body"
  }, /*#__PURE__*/React.createElement(PovGroup, {
    label: "Limits",
    items: p.limits
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent btn--block btn--lg",
    onClick: onSurvey
  }, "Angebot anfordern")))), /*#__PURE__*/React.createElement("p", {
    className: "price-endpreis"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    sw: 2.6
  }), " Umsatzsteuerbefreit nach \xA7 19 UStG (Kleinunternehmerregelung)."), /*#__PURE__*/React.createElement("p", {
    className: "price-endpreis price-endpreis--note"
  }, "Die Plattform wird von der Ruescher Invest UG (haftungsbeschr\xE4nkt) betrieben. Auf Wunsch beauftragen Sie f\xFCr \xDCbermittlung oder fachliche \xDCberpr\xFCfung direkt die unabh\xE4ngige Bauer & Weigl Steuerberater PartG mbB."))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    style: {
      background: "var(--cream-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Im Detail"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Alle Leistungen & Grenzen im Vergleich")), /*#__PURE__*/React.createElement("div", {
    className: "ptable-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "ptable"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "ptable__feat"
  }, "Leistung"), PKG.map((p, i) => /*#__PURE__*/React.createElement("th", {
    key: p
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt__name"
  }, p), /*#__PURE__*/React.createElement("div", {
    className: "pt__price"
  }, PKG_PRICE[i], i < 3 && /*#__PURE__*/React.createElement("span", null, " / Jahr")))))), /*#__PURE__*/React.createElement("tbody", null, FEATURES.map(row => /*#__PURE__*/React.createElement("tr", {
    key: row.f
  }, /*#__PURE__*/React.createElement("td", {
    className: "ptable__feat"
  }, row.f), row.v.map((val, i) => /*#__PURE__*/React.createElement("td", {
    key: i
  }, /*#__PURE__*/React.createElement(Cell, {
    val: val
  }))))), /*#__PURE__*/React.createElement("tr", {
    className: "ptable__cta-row"
  }, /*#__PURE__*/React.createElement("td", null), PKG.map((p, i) => /*#__PURE__*/React.createElement("td", {
    key: p
  }, i < 3 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    onClick: onSurvey
  }, "Angebot") : /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--block",
    href: "Kontakt.html"
  }, "Anfragen"))))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Zusatzleistungen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Optionale Leistungen"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Das Basispaket umfasst alle regul\xE4ren Leistungen rund um Jahresabschluss und Steuererkl\xE4rung. F\xFCr folgende zus\xE4tzliche Leistungen f\xE4llt eine separate Geb\xFChr an.")), /*#__PURE__*/React.createElement("div", {
    className: "addon-grid"
  }, ADDONS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.key,
    className: "addon-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "addon-card__top"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "addon-card__t"
  }, a.t), /*#__PURE__*/React.createElement("div", {
    className: "addon-card__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addon-card__amt"
  }, fmtEUR(a.price), "\xA0\u20AC"), /*#__PURE__*/React.createElement("span", {
    className: "addon-card__per"
  }, a.once ? "einmalig" : a.unit || "/ Jahr"))), /*#__PURE__*/React.createElement("p", {
    className: "addon-card__d"
  }, a.d)))), /*#__PURE__*/React.createElement("div", {
    className: "price-operator reveal"
  }, /*#__PURE__*/React.createElement("p", null, "Betrieben von der ", /*#__PURE__*/React.createElement("b", null, "Ruescher Invest UG (haftungsbeschr\xE4nkt)"), ". Mirador Tax ist eine Software zur Selbsterstellung. Optionale Zusatzleistungen mit Vorbehaltsaufgaben (Beratung, KapESt-Anmeldung, \xDCbermittlung) erbringt die unabh\xE4ngige ", /*#__PURE__*/React.createElement("b", null, "Bauer & Weigl Steuerberater PartG mbB"), " im direkten Mandat."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14
    }
  }, "Aktuell nicht im Leistungsumfang enthalten sind Immobilien und Kryptow\xE4hrungen."), /*#__PURE__*/React.createElement("div", {
    className: "price-excl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-excl__chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13,
    sw: 2.6,
    style: {
      transform: "rotate(45deg)"
    }
  }), " Immobilien"), /*#__PURE__*/React.createElement("span", {
    className: "price-excl__chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13,
    sw: 2.6,
    style: {
      transform: "rotate(45deg)"
    }
  }), " Kryptow\xE4hrungen"))))), /*#__PURE__*/React.createElement(Rechner, {
    onSurvey: onSurvey
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    style: {
      background: "var(--cream-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead shead--center reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: "center",
      display: "flex"
    }
  }, "G\xFCnstiger als gedacht"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Holdings, die sp\xFCrbar sparen")), /*#__PURE__*/React.createElement("div", {
    className: "tgrid"
  }, PRICE_TESTIMONIALS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tquote reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tquote__mark"
  }, "\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "tquote__text"
  }, "„" + c.quote + "“"), /*#__PURE__*/React.createElement("div", {
    className: "tcard__by"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__ava",
    style: {
      backgroundImage: "url(" + c.photo + ")"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "tcard__role"
  }, c.role)))))))), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}

/* ---------------- BLOG PAGE ---------------- */
const POSTS = [{
  slug: "steuerliche-fristen-fuer-holding-ugs",
  tag: "Gründung",
  t: "Steuerliche Fristen für Holding-UGs",
  d: "Als Geschäftsführer einer Holding-UG oder vermögensverwaltenden UG musst du zahlreiche Fristen im Blick behalten. Versäumnisse können…",
  date: "19. Jan. 2026",
  read: "5 Min.",
  img: "https://framerusercontent.com/images/A9cGQnyvGsvhuxkM9oIZs1gRA.png"
}, {
  slug: "zu-mirador-tax-wechseln-so-einfach-funktioniert-der-uebertrag",
  tag: "Gründung",
  t: "Zu Mirador Tax wechseln – so einfach funktioniert der Übertrag",
  d: "Der Wechsel der steuerlichen Betreuung wird oft als aufwendig wahrgenommen. In der Praxis ist er das nicht. Gerade bei Holding-UGs und…",
  date: "5. Jan. 2026",
  read: "3 Min.",
  img: "https://framerusercontent.com/images/tAq4oAVMUM4mZeabQZsZUoZII.png"
}, {
  slug: "holding-gesellschaft-gruenden-ihr-einfacher-weg-zur-vermoegensverwaltenden-gmbh-ug",
  tag: "Gründung",
  t: "Holding-Gesellschaft gründen: Ihr einfacher Weg zur vermögensverwaltenden GmbH / UG",
  d: "Planen Sie noch die Gründung Ihrer eigenen Holding-Gesellschaft? Nutzen Sie unsere Schritt-für-Schritt-Anleitung und kommen Sie nach der…",
  date: "5. Jan. 2026",
  read: "4 Min.",
  img: "https://framerusercontent.com/images/fnAB8QXbKcvg2wMZhenssIZgixQ.png"
}, {
  slug: "fuer-wen-eignet-es-sich-eine-holding-zu-gruenden",
  tag: "Gründung",
  t: "Für wen eignet es sich, eine Holding zu gründen?",
  d: "Eine Holding eignet sich für Gründer, Unternehmer und Investoren, die wachsen wollen, Risiken trennen, Steuern optimieren und einen…",
  date: "2. Jan. 2026",
  read: "4 Min.",
  img: "https://framerusercontent.com/images/CAYiNDRUA7B4z41mNfoIPummtsw.png"
}, {
  slug: "gruendungskosten-und-laufende-kosten-einer-vvug-vvgmbh",
  tag: "Gründung",
  t: "Gründungskosten und laufende Kosten einer vvUG / vvGmbH",
  d: "Wer eine vermögensverwaltende UG oder GmbH in Deutschland gründen möchte, beschäftigt sich früh mit steuerlichen Vorteilen. Was dabei…",
  date: "2. Jan. 2026",
  read: "6 Min.",
  img: "https://framerusercontent.com/images/FL935tln7tdpvFMRCqUCetEdjI.png"
}, {
  slug: "vermoegensverwaltende-gmbh-5-fehler-die-sie-vermeiden-sollten",
  tag: "Gründung",
  t: "Vermögens­verwaltende GmbH: 5 Fehler, die Sie vermeiden sollten",
  d: "Die vermögensverwaltende GmbH kann ein sehr effizientes Vehikel für langfristigen Vermögensaufbau sein. Sie ist aber kein Selbstläufer.…",
  date: "2. Jan. 2026",
  read: "6 Min.",
  img: "https://framerusercontent.com/images/R0tzO9XYz0rYvO7RhDDIoMpS5s.png"
}, {
  slug: "ab-wann-lohnt-sich-eine-holding-finanziell-kosten-steuern-und-beispielrechnungen",
  tag: "Gründung",
  t: "Ab wann lohnt sich eine Holding finanziell? Kosten, Steuern und Beispielrechnungen",
  d: "Eine Holding lohnt sich nicht „ab dem ersten Euro“. Sie lohnt sich dann, wenn Gewinne nicht privat verbraucht, sondern systematisch…",
  date: "2. Jan. 2026",
  read: "6 Min.",
  img: "https://framerusercontent.com/images/xVJkuqygxMaJIGNUzFkzZBuDwo.png"
}, {
  slug: "holding-gruenden-mit-ug-oder-gmbh-ablauf-unterlagen-typische-fehler",
  tag: "Gründung",
  t: "Holding gründen mit UG oder GmbH: Ablauf, Unterlagen, typische Fehler",
  d: "Wer eine vermögensverwaltende UG (haftungsbeschränkt) oder vermögensverwaltende GmbH gründen will, durchläuft im Kern den gleichen…",
  date: "2. Jan. 2026",
  read: "7 Min.",
  img: "https://framerusercontent.com/images/sq5SzQFshHKhSBwQDnQEgQfkSk.png"
}, {
  slug: "vor-und-nachteile-wann-ist-eine-holding-ug-sinnvoll",
  tag: "Kosten",
  t: "Vor- und Nachteile: Wann ist eine Holding-UG sinnvoll?",
  d: "Eine Holding-UG klingt für viele nach „Steuersparen“. In der Praxis lohnt sie sich nur in klaren Fällen. Der größte Hebel entsteht, wenn…",
  date: "2. Jan. 2026",
  read: "5 Min.",
  img: "https://framerusercontent.com/images/lZPS9FBrLQQWk4xbSGuPxC4r8Ns.png"
}, {
  slug: "holding-lohnt-sich-wenn-du-gewinne-in-der-firma-laesst-und-reinvestierst",
  tag: "Steuern",
  t: "Holding lohnt sich, wenn du Gewinne in der Firma lässt und reinvestierst",
  d: "Eine Holding ist keine eigene Rechtsform, sondern eine Struktur: Eine Muttergesellschaft hält Anteile an einer oder mehreren operativen…",
  date: "2. Jan. 2026",
  read: "3 Min.",
  img: "https://framerusercontent.com/images/VS2VvBCghUutKUGIRNdpIPKHZCQ.png"
}, {
  slug: "holding-struktur-2026",
  tag: "Steuern",
  t: "Holding-Struktur 2026: Was sich für Geschäftsführer ändert",
  d: "Ein Überblick über die wichtigsten Neuerungen bei Offenlegung, E-Bilanz und Fristen.",
  date: "12. Mai 2026",
  read: "6 Min.",
  img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=70"
}, {
  slug: "offenlegung-bundesanzeiger",
  tag: "Ratgeber",
  t: "Offenlegung beim Bundesanzeiger – Schritt für Schritt",
  d: "So reichen Sie Ihren Jahresabschluss fristgerecht und ohne Bußgeldrisiko ein.",
  date: "28. Apr. 2026",
  read: "5 Min.",
  img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=70"
}, {
  slug: "kosten-jahresabschluss",
  tag: "Kosten",
  t: "Was kostet ein Holding-Jahresabschluss wirklich?",
  d: "Stundenabrechnung vs. Festpreis – wir rechnen ein typisches Beispiel durch.",
  date: "9. Apr. 2026",
  read: "7 Min.",
  img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=70"
}, {
  slug: "beteiligungen-buchhaltung",
  tag: "Praxis",
  t: "Beteiligungen sauber abbilden: die häufigsten Fehler",
  d: "Von Darlehen bis Personengesellschaft – worauf es in der Buchhaltung ankommt.",
  date: "21. Mär. 2026",
  read: "4 Min.",
  img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=70"
}, {
  slug: "kontoauszug-import",
  tag: "Produkt",
  t: "Neu im Portal: automatischer Kontoauszug-Import",
  d: "Transaktionen werden jetzt automatisch kategorisiert – das spart spürbar Zeit.",
  date: "3. Mär. 2026",
  read: "3 Min.",
  img: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1600&q=70"
}, {
  slug: "steuervorteile-holding",
  tag: "Steuern",
  t: "Vermögensverwaltende Holding: Steuervorteile im Überblick",
  d: "Wann sich die Holding lohnt und welche Pflichten damit einhergehen.",
  date: "14. Feb. 2026",
  read: "8 Min.",
  img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=70"
}];
const POST_TINTS = ["#cfe2d6", "#e3e6ef", "#e8e7db", "#dfe9e2", "#e6ebfa", "#efeae0"];
const postImg = u => u;
function BlogPage({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Blog",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Wissen f\xFCr", /*#__PURE__*/React.createElement("br", null), "Holding-Gesch\xE4ftsf\xFChrer."),
    lede: "Praxisnahe Beitr\xE4ge zu Steuern, Jahresabschluss und Offenlegung \u2013 verst\xE4ndlich erkl\xE4rt."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "posts"
  }, POSTS.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.t,
    className: "post",
    href: "blog-" + p.slug + ".html"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post__thumb",
    style: {
      backgroundColor: POST_TINTS[i % POST_TINTS.length],
      backgroundImage: "url(" + postImg(p.img, 800) + ")"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "post__tag"
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    className: "post__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "post__t"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "post__d"
  }, p.d), /*#__PURE__*/React.createElement("div", {
    className: "post__meta"
  }, p.date, " \xB7 ", p.read, " Lesezeit"))))))), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}

/* ---------------- KONTAKT PAGE ---------------- */
function KontaktPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit uns.",
    lede: "Ob Erstgespr\xE4ch, individuelles Angebot oder Frage zur Plattform \u2013 wir melden uns innerhalb eines Werktags."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap kontakt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "euro",
    size: 20,
    sw: 1.9
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__h"
  }, "Angebot anfordern"), /*#__PURE__*/React.createElement("div", {
    className: "kontakt__d"
  }, "In 2 Minuten zum unverbindlichen Festpreis \u2013 direkt \xFCber unseren Rechner."), /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "Preise.html"
  }, "Zum Preisrechner ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    className: "kontakt__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "doc",
    size: 20,
    sw: 1.9
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__h"
  }, "E-Mail"), /*#__PURE__*/React.createElement("div", {
    className: "kontakt__d"
  }, /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "mailto:chris@miradortax.com"
  }, "chris@miradortax.com")))), /*#__PURE__*/React.createElement("div", {
    className: "kontakt__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 20,
    sw: 1.9
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kontakt__h"
  }, "Anschrift"), /*#__PURE__*/React.createElement("div", {
    className: "kontakt__d"
  }, "Mirador Tax \xB7 Ruescher Invest UG (haftungsbeschr\xE4nkt)", /*#__PURE__*/React.createElement("br", null), "Holunderweg 17", /*#__PURE__*/React.createElement("br", null), "21220 Seevetal, Deutschland")))), /*#__PURE__*/React.createElement("div", {
    className: "kontakt__form"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "kontakt__form-h"
  }, "Schreiben Sie uns direkt"), /*#__PURE__*/React.createElement("p", {
    className: "kontakt__d",
    style: {
      marginBottom: 22
    }
  }, "Senden Sie uns eine E-Mail mit Ihrem Anliegen \u2013 wir antworten innerhalb eines Werktags. F\xFCr ein unverbindliches Festpreis-Angebot nutzen Sie am schnellsten unseren Rechner."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--accent btn--lg btn--block",
    href: "mailto:chris@miradortax.com?subject=Anfrage%20Mirador%20Tax"
  }, "E-Mail schreiben ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--lg btn--block",
    href: "Preise.html",
    style: {
      marginTop: 12
    }
  }, "Zum Preisrechner ", /*#__PURE__*/React.createElement(Arrow, null))))));
}
Object.assign(window, {
  PageHero,
  LeistungenPage,
  AblaufPage,
  KundenPage,
  PreisePage,
  BlogPage,
  KontaktPage
});