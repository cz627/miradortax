/* sections.jsx — page sections */
const {
  useState: useStateS,
  useEffect: useEffectS
} = React;

/* ---------------- NAV ---------------- */
const NAV_LINKS = [{
  t: "Leistungen",
  href: "Leistungen.html",
  page: "leistungen"
}, {
  t: "Ablauf",
  href: "Ablauf.html",
  page: "ablauf"
}, {
  t: "Kunden",
  href: "Kunden.html",
  page: "kunden"
}, {
  t: "Preise",
  href: "Preise.html",
  page: "preise"
}];
function Nav({
  onSurvey
}) {
  const [stuck, setStuck] = useStateS(false);
  const [menuOpen, setMenuOpen] = useStateS(false);
  const current = typeof window !== "undefined" && window.PAGE || "home";
  useEffectS(() => {
    const f = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", f);
    f();
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffectS(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (stuck ? " is-stuck" : "") + (menuOpen ? " nav--menu-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav__logo",
    "data-logo": true,
    src: "assets/logo-dark.png",
    alt: "Mirador Tax"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.t,
    className: "nav__link" + (current === l.page ? " is-active" : ""),
    href: l.href,
    style: {
      fontSize: "14px"
    }
  }, l.t))), /*#__PURE__*/React.createElement("div", {
    className: "nav__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__switch",
    href: "Ablauf.html#wechsel"
  }, "Zu Mirador wechseln"), /*#__PURE__*/React.createElement("a", {
    className: "nav__login",
    href: "https://app.miradortax.com",
    target: "_blank",
    rel: "noopener"
  }, "Login"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent nav__cta",
    onClick: onSurvey
  }, "Angebot anfordern"), /*#__PURE__*/React.createElement("button", {
    className: "nav__burger",
    "aria-label": menuOpen ? "Menü schließen" : "Menü öffnen",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menuOpen ? "close" : "menu",
    size: 22,
    sw: 2
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nav__mobile" + (menuOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__mobile-inner"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.t,
    className: "nav__mlink" + (current === l.page ? " is-active" : ""),
    href: l.href,
    onClick: closeMenu
  }, l.t, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16,
    sw: 2
  }))), /*#__PURE__*/React.createElement("a", {
    className: "nav__mlink",
    href: "Empfehlung.html",
    onClick: closeMenu
  }, "Empfehlung", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16,
    sw: 2
  })), /*#__PURE__*/React.createElement("a", {
    className: "nav__mlink",
    href: "Blog.html",
    onClick: closeMenu
  }, "Blog", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav__mobile-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--block",
    href: "Ablauf.html#wechsel",
    onClick: closeMenu
  }, "Zu Mirador wechseln"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent btn--block",
    onClick: () => {
      closeMenu();
      onSurvey();
    }
  }, "Angebot anfordern ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "nav__mobile-login",
    href: "https://app.miradortax.com",
    target: "_blank",
    rel: "noopener",
    onClick: closeMenu
  }, "Zum Login \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "nav__scrim" + (menuOpen ? " open" : ""),
    onClick: closeMenu
  }));
}

/* ---------------- HERO ---------------- */
function Hero({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero__eyebrow"
  }, "F\xDCR HOLDINGGESELLSCHAFTEN"), /*#__PURE__*/React.createElement("h1", {
    className: "display hero__title"
  }, "Holding-Steuern,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "endlich"), " erledigt."), /*#__PURE__*/React.createElement("p", {
    className: "lede hero__lede"
  }, "Buchhaltung, Jahresabschluss, Offenlegung und Steuererkl\xE4rung \u2013 strukturiert in einem Portal. Digital und zum g\xFCnstigsten Festpreis Deutschlands."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent btn--lg",
    onClick: onSurvey
  }, "Angebot anfordern ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--lg",
    href: "https://calendar.notion.so/meet/christopher-vd1ezx1lps/cw4uci4o40",
    target: "_blank",
    rel: "noopener"
  }, "Erstgespr\xE4ch buchen")), /*#__PURE__*/React.createElement("div", {
    className: "hero__proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__proof-people"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__avatars"
  }, ["https://randomuser.me/api/portraits/women/45.jpg", "https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/women/68.jpg", "https://randomuser.me/api/portraits/men/52.jpg", "images/alexander-valtingojer.jpg"].map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      backgroundImage: "url(" + p + ")"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__proof-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "500+ Holdings"), " vertrauen auf Mirador Tax"))), /*#__PURE__*/React.createElement("ul", {
    className: "hero__checks"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "hero__check-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    sw: 3
  })), " Festpreis \u2013 keine Stundenabrechnung"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "hero__check-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    sw: 3
  })), " Unverbindliches Angebot in 2 Minuten"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero__visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-wrap"
  }, /*#__PURE__*/React.createElement(PortalMockup, null))), /*#__PURE__*/React.createElement("div", {
    className: "hero__pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__pill-ava"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero__pill-text"
  }, /*#__PURE__*/React.createElement("small", null, "Festpreis"), /*#__PURE__*/React.createElement("b", null, "ab ", priceFrom, "\xA0\u20AC/Jahr")))));
}

/* ---------------- TRUST SIGNALS ---------------- */
function Logos() {
  return /*#__PURE__*/React.createElement("section", {
    className: "trust wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sealcheck",
    size: 30,
    sw: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    className: "trust__label"
  }, "Mit Zufriedenheits-", /*#__PURE__*/React.createElement("br", null), "garantie")), /*#__PURE__*/React.createElement("div", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 28,
    sw: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    className: "trust__label trust__label--brand"
  }, "ELSTER")), /*#__PURE__*/React.createElement("div", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "usercheck",
    size: 30,
    sw: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    className: "trust__label"
  }, "Gepr\xFCfte", /*#__PURE__*/React.createElement("br", null), "Steuerberater:innen")), /*#__PURE__*/React.createElement("div", {
    className: "trust__item trust__google"
  }, /*#__PURE__*/React.createElement("span", {
    className: "trust__gtext"
  }, /*#__PURE__*/React.createElement("small", null, "Google Rating 5/5"), /*#__PURE__*/React.createElement("span", {
    className: "trust__stars"
  }, "\u2605\u2605\u2605\u2605\u2605"))), /*#__PURE__*/React.createElement("div", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldcheck",
    size: 30,
    sw: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    className: "trust__label"
  }, "DSGVO", /*#__PURE__*/React.createElement("br", null), "Konform"))));
}

/* ---------------- LEISTUNGEN ---------------- */
function Leistungen({
  hideHead
}) {
  const cards = [{
    ic: "book",
    n: "01",
    t: "Buchhaltung",
    d: "Laufende Finanzbuchhaltung für Ihre Holding – Kontoauszüge werden automatisch importiert; Transaktionen werden automatisch kategorisiert.",
    list: ["Bank- & Depot-Upload", "Beteiligungen & Darlehen", "Alle Beteiligungen in einer Übersicht"]
  }, {
    ic: "doc",
    n: "02",
    t: "Jahresabschluss",
    d: "Bilanz, GuV und Anhang nach HGB – Software wurde von Steuerexpert:innen entwickelt, geprüft und gewartet.",
    list: ["Bilanz & GuV nach HGB", "E-Bilanz ans Finanzamt", "Anhang & Anlageverzeichnis"]
  }, {
    ic: "upload",
    n: "03",
    t: "Offenlegung",
    d: "Elektronische Einreichung beim Bundesanzeiger – pünktlich und ohne Bußgeldrisiko.",
    list: ["Bundesanzeiger-Einreichung", "Größenklassen-Prüfung", "Fristenüberwachung"]
  }, {
    ic: "receipt",
    n: "04",
    t: "Steuererklärung",
    d: "Körperschaft-, Gewerbe- und Umsatzsteuer – vollständig erstellt und elektronisch übermittelt.",
    list: ["KSt, GewSt & USt", "ELSTER-Übermittlung", "Bescheidprüfung inklusive"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "leistungen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, !hideHead && /*#__PURE__*/React.createElement("div", {
    className: "feat__head reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Leistungen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 16
    }
  }, "Alle Pflichten Ihrer Holding.", /*#__PURE__*/React.createElement("br", null), "In einem Portal.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 4
    }
  }, "Mirador Tax \xFCbernimmt den kompletten Jahreszyklus Ihrer Holding \u2013 transparent zum Festpreis.")), /*#__PURE__*/React.createElement("div", {
    className: "feat__grid" + (hideHead ? "" : " feat__grid--row")
  }, cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    className: "card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__step"
  }, c.n), /*#__PURE__*/React.createElement("div", {
    className: "card__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.ic,
    size: 22,
    sw: 1.9
  })), /*#__PURE__*/React.createElement("div", {
    className: "card__t"
  }, c.t), /*#__PURE__*/React.createElement("div", {
    className: "card__d"
  }, c.d), /*#__PURE__*/React.createElement("ul", {
    className: "card__list"
  }, c.list.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    sw: 2.4
  }), " ", l))))))));
}

/* ---------------- ABLAUF ---------------- */
function Ablauf({
  hideHead
}) {
  const steps = [{
    t: "Daten hochladen",
    d: "Laden Sie Ihre Kontoauszüge sicher auf unsere Plattform hoch. Mirador Tax führt Sie Schritt für Schritt durch die Datenerfassung und prüft die Vollständigkeit der Angaben."
  }, {
    t: "Erstellung der Jahresabschlüsse",
    d: "Auf Basis Ihrer Daten erstellt Mirador Tax automatisch Ihren Jahresabschluss – inklusive Bilanz, GuV und Anlagenverzeichnis. Sie sehen jederzeit den aktuellen Status & Fortschritt."
  }, {
    t: "Freigeben & einreichen",
    d: "Nach Ihrer Freigabe übermittelt Mirador Tax die fertigen Jahresabschlüsse direkt an den Bundesanzeiger und die Steuererklärung an das Finanzamt – rechtssicher und fristgerecht."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    id: "ablauf",
    style: {
      background: "var(--cream-2)",
      backgroundColor: "rgb(255, 255, 255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, !hideHead && /*#__PURE__*/React.createElement("div", {
    className: "shead reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "So funktioniert's"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "In drei Schritten zum fertigen Abschluss"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Kein Papierkram, keine R\xFCckfragen-Schleifen. Ein klarer, gef\xFChrter Prozess vom ersten Beleg bis zur Abgabe.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "step reveal",
    style: {
      transitionDelay: i * 80 + "ms",
      backgroundColor: "rgb(250, 248, 249)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__n"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "step__t"
  }, s.t), /*#__PURE__*/React.createElement("div", {
    className: "step__d"
  }, s.d))))));
}

/* ---------------- TESTIMONIALS ---------------- */
const USP_DATA = [{
  key: "einfach",
  label: "Einfach",
  icon: "spark",
  stat: {
    b: "2 Min.",
    s: "bis zum verbindlichen Festpreis-Angebot"
  },
  feature: {
    quote: "Vorher ewige Rückfragen-Schleifen und ständiges E-Mail-Ping-Pong. Jetzt läuft alles in einem Portal – ich lade die Daten hoch, der Rest passiert von selbst.",
    name: "Alexander Valtingojer",
    role: "Gründer, Valtingojer UG (haftungsbeschränkt)",
    ava: "#9a7b66",
    photo: "images/alexander-valtingojer.jpg"
  },
  cards: [{
    quote: "Der gesamte Prozess hat keine zwanzig Minuten gedauert. Bankkontoauszüge hochgeladen, fertig – ohne Steuerberater-Termin.",
    name: "Patrick de Castro Neuhaus",
    role: "Founder, PCN Ventures UG",
    ava: "#5f6b78",
    photo: "assets/patrick-pcn.png"
  }, {
    quote: "Die Plattform ist so aufgeräumt, dass ich zum ersten Mal verstehe, was mit meiner Holding eigentlich passiert.",
    name: "Sandra Köhler",
    role: "Inhaberin, Köhler Beteiligungen",
    ava: "#7d8b6a",
    photo: "https://randomuser.me/api/portraits/women/68.jpg"
  }]
}, {
  key: "guenstig",
  label: "Günstig",
  icon: "shieldcheck",
  stat: {
    b: "− 58 %",
    s: "günstiger als der vorherige Steuerberater"
  },
  feature: {
    quote: "Mein alter Steuerberater hat nach Stunden abgerechnet – nie wusste ich vorher, was es kostet. Mirador macht das zum halben Preis, mit festem Betrag.",
    name: "Michael Kowatschew",
    role: "Gründer, Kowatschew Ventures UG",
    ava: "#9a7b66",
    photo: "images/michael-kowatschew.png"
  },
  cards: [{
    quote: "Transparenter Festpreis statt Gebührenverordnung. Wir sparen jedes Jahr einen vierstelligen Betrag.",
    name: "Julia Vogt",
    role: "Geschäftsführerin, Vela Invest GmbH",
    ava: "#5f6b78",
    photo: "https://randomuser.me/api/portraits/women/29.jpg"
  }, {
    quote: "Das günstigste Angebot am Markt – und trotzdem fühlt sich der Prozess super an.",
    name: "Philipp Arndt",
    role: "Geschäftsführer, Arndt Holding",
    ava: "#7d8b6a",
    photo: "https://randomuser.me/api/portraits/men/52.jpg"
  }]
}, {
  key: "zuverlaessig",
  label: "Zuverlässig",
  icon: "sealcheck",
  stat: {
    b: "100 %",
    s: "Fristen eingehalten – jeden Jahresabschluss"
  },
  feature: {
    quote: "Die Offenlegung lief zum ersten Mal völlig stressfrei. Frist im Blick, ein Klick, erledigt – und bei Rückfragen antwortet immer ein freundlicher Mensch.",
    name: "Dr. Katrin Bähr",
    role: "Geschäftsführerin, Bähr Family Office",
    ava: "#9a7b66",
    photo: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  cards: [{
    quote: "Korrekt, pünktlich, kein böses Erwachen vom Finanzamt.",
    name: "Andreas Wolff",
    role: "Inhaber, Wolff Invest",
    ava: "#5f6b78",
    photo: "https://randomuser.me/api/portraits/men/76.jpg"
  }, {
    quote: "Schnelle Reaktion, klare Antworten, nie das Gefühl, eine Nummer zu sein. Genau so stelle ich mir Betreuung vor.",
    name: "Miriam Falk",
    role: "Geschäftsführerin, Falk Beteiligungs GmbH",
    ava: "#7d8b6a",
    photo: "https://randomuser.me/api/portraits/women/56.jpg"
  }]
}];
function Testimonials({
  hideHead
}) {
  const [active, setActive] = useStateS(0);
  const d = USP_DATA[active];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "kunden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal usp-head" + (hideHead ? " usp-head--nohead" : "")
  }, !hideHead ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Kundenstimmen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Was Holdings an Mirador sch\xE4tzen")) : /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "usp-toggle",
    role: "tablist",
    "aria-label": "Vorteile"
  }, USP_DATA.map((u, i) => /*#__PURE__*/React.createElement("button", {
    key: u.key,
    role: "tab",
    "aria-selected": active === i,
    className: "usp-tab" + (active === i ? " on" : ""),
    onClick: () => setActive(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "usp-tab__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: u.icon,
    size: 15,
    sw: 2.2
  })), u.label)))), /*#__PURE__*/React.createElement("div", {
    className: "tcards",
    key: d.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard tcard--feature usp-fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__stat tcard__stat--feature"
  }, /*#__PURE__*/React.createElement("b", null, d.stat.b), /*#__PURE__*/React.createElement("span", null, d.stat.s)), /*#__PURE__*/React.createElement("div", {
    className: "tcard__quote"
  }, "„" + d.feature.quote + "“"), /*#__PURE__*/React.createElement("div", {
    className: "tcard__by"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__ava",
    style: {
      backgroundImage: "url(" + d.feature.photo + ")"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, d.feature.name), /*#__PURE__*/React.createElement("div", {
    className: "tcard__role"
  }, d.feature.role)))), d.cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tcard usp-fade",
    style: {
      animationDelay: (i + 1) * 70 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__quote",
    style: {
      fontSize: 17,
      fontWeight: 500
    }
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
  }, c.role))))))));
}

/* ---------------- TESTIMONIALS (all, non-toggle, for Kunden page) ---------------- */
function TestimonialsAll() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, USP_DATA.map((u, g) => {
    const all = [u.feature, ...u.cards];
    return /*#__PURE__*/React.createElement("div", {
      key: u.key,
      className: "tgroup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tgroup__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tgroup__index"
    }, String(g + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      className: "tgroup__meta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tgroup__label"
    }, u.label), /*#__PURE__*/React.createElement("div", {
      className: "tgroup__stat"
    }, /*#__PURE__*/React.createElement("b", null, u.stat.b), " ", u.stat.s))), /*#__PURE__*/React.createElement("div", {
      className: "tgrid"
    }, all.map((c, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "tquote"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tquote__mark"
      }, "\u201D"), /*#__PURE__*/React.createElement("p", {
        className: "tquote__text"
      }, "„" + c.quote + "“"), /*#__PURE__*/React.createElement("div", {
        className: "tcard__by"
      }, /*#__PURE__*/React.createElement("img", {
        className: "tphoto",
        src: c.photo,
        alt: c.name,
        loading: "lazy"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "tcard__name"
      }, c.name), /*#__PURE__*/React.createElement("div", {
        className: "tcard__role"
      }, c.role))));
    })));
  })));
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useStateS(0);
  const qs = [{
    q: "Für welche Holdings ist Mirador Tax geeignet?",
    a: "Wir betreuen vermögensverwaltende und geschäftsleitende Holdings in der Rechtsform GmbH oder UG (haftungsbeschränkt). Ob klassische Beteiligungsholding, Family Office oder Investment-Holding mit Wertpapierdepots – wir prüfen Ihre Eignung in der kostenlosen Angebotsanfrage."
  }, {
    q: "Was kostet der Festpreis genau?",
    a: "Der Preis richtet sich nach Anzahl der Beteiligungen, dem Transaktionsvolumen und der Bilanzsumme. Über die Angebotsanfrage erhalten Sie in 2 Minuten einen Festpreis – ohne Stundenabrechnung und ohne versteckte Kosten."
  }, {
    q: "Übernehmen Sie meine bestehende Buchhaltung?",
    a: "Ja. Wir übernehmen Ihre laufende Buchhaltung nahtlos, importieren historische Daten und stellen den Wechsel von Ihrem bisherigen Steuerberater für Sie sicher."
  }, {
    q: "Ist Mirador Tax eine Steuerkanzlei?",
    a: "Nein, wir selbst sind keine Steuerkanzlei. Wir arbeiten jedoch eng mit erfahrenen Steuerberatern und Partnerkanzleien zusammen, um sicherzustellen, dass dein Jahresabschluss nach geltendem Recht professionell erstellt und eingereicht wird. Wir geben keine individuelle steuerliche Beratung."
  }, {
    q: "Wie ist das Angebot zu solchen Preisen möglich?",
    a: "Wir kombinieren spezialisierte Expertise mit moderner Technologie. Durch den gezielten Einsatz digitaler Lösungen optimieren wir jeden Schritt – von der Sortierung und Verbuchung deiner Geschäftsvorfälle (z.B. Kontoauszüge) über die Vorbereitung der Buchhaltungsunterlagen bis hin zur Erstellung von Bilanz und Gewinn- und Verlustrechnung (GuV) sowie der Übermittlung der E-Bilanz an das Finanzamt. Diese Automatisierung ermöglicht es uns, Prozesse effizienter zu gestalten, Fehler zu minimieren und dir einen reibungslosen, kostengünstigen Jahresabschluss anzubieten – ohne Abstriche bei Qualität oder Rechtssicherheit."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 16
    }
  }, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 14
    }
  }, "Noch Fragen? ", /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "Kontakt.html"
  }, "Sprechen Sie mit uns ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    className: "faq__list reveal"
  }, qs.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "faq__item" + (open === i ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq__q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, item.q, /*#__PURE__*/React.createElement("span", {
    className: "faq__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20,
    sw: 2
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq__a",
    style: {
      maxHeight: open === i ? "300px" : "0"
    }
  }, /*#__PURE__*/React.createElement("p", null, item.a)))))));
}

/* ---------------- CTA + FOOTER ---------------- */
function CtaBanner({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "preise-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta reveal",
    style: {
      backgroundColor: "rgb(242, 240, 237)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--accent)",
      justifyContent: "center",
      display: "flex",
      marginBottom: 18
    }
  }, "Festpreis ab 499 \u20AC"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Erfahren Sie in 2 Minuten,", /*#__PURE__*/React.createElement("br", null), "was Ihre Holding kostet."), /*#__PURE__*/React.createElement("p", null, "Beantworten Sie f\xFCnf kurze Fragen und erhalten Sie sofort einen unverbindlichen Festpreis f\xFCr das komplette Steuerjahr Ihrer Holding."), /*#__PURE__*/React.createElement("div", {
    className: "cta__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent btn--lg",
    onClick: onSurvey
  }, "Angebot anfordern ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--lg",
    href: "https://calendar.notion.so/meet/christopher-vd1ezx1lps/cw4uci4o40",
    target: "_blank",
    rel: "noopener"
  }, "Erstgespr\xE4ch buchen")))));
}
function Footer() {
  const cols = [{
    h: "Produkt",
    links: [{
      t: "Leistungen",
      href: "Leistungen.html"
    }, {
      t: "Ablauf",
      href: "Ablauf.html"
    }, {
      t: "Preise",
      href: "Preise.html"
    }, {
      t: "Login",
      href: "https://app.miradortax.com"
    }]
  }, {
    h: "Unternehmen",
    links: [{
      t: "Kunden",
      href: "Kunden.html"
    }, {
      t: "Empfehlung",
      href: "Empfehlung.html"
    }, {
      t: "Blog",
      href: "Blog.html"
    }, {
      t: "Kontakt",
      href: "Kontakt.html"
    }]
  }, {
    h: "Rechtliches",
    links: [{
      t: "Impressum",
      href: "Impressum.html"
    }, {
      t: "Datenschutz",
      href: "Datenschutz.html"
    }, {
      t: "AGB",
      href: "AGB.html"
    }]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-dark.png",
    alt: "Mirador Tax",
    style: {
      height: "53px",
      objectFit: "contain",
      width: "197px"
    }
  }), /*#__PURE__*/React.createElement("p", null, "Buchhaltung, Jahresabschluss, Offenlegung und Steuererkl\xE4rung f\xFCr Holdinggesellschaften in Deutschland \u2013 digital und zum Festpreis.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.t,
    href: l.href,
    target: l.href.startsWith("http") ? "_blank" : undefined,
    rel: l.href.startsWith("http") ? "noopener" : undefined
  }, l.t))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mirador Tax. Alle Rechte vorbehalten."), /*#__PURE__*/React.createElement("span", null, "Made in Germany \xB7 Daten gehostet in der EU")));
}
Object.assign(window, {
  Nav,
  Hero,
  Logos,
  Leistungen,
  Ablauf,
  Testimonials,
  TestimonialsAll,
  FAQ,
  CtaBanner,
  Footer
});