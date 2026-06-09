/* referral.jsx — Empfehlungsprogramm (Referral) page */

const REF_STEPS = [{
  n: "SCHRITT 01",
  t: "Empfehlen",
  d: "Teilen Sie Mirador Tax mit einer Holding aus Ihrem Netzwerk – am Besten verbinden Sie uns mit der Person via E-Mail."
}, {
  n: "SCHRITT 02",
  t: "Abschließen",
  d: "Die empfohlene Holding meldet sich an und durchläuft den Prozess vollständig mit uns – vom Onboarding bis zum fertigen Jahresabschluss."
}, {
  n: "SCHRITT 03",
  t: "Belohnt werden",
  d: "Sobald der Prozess abgeschlossen ist, schreiben wir Ihnen 250 € gut. Partner honorieren wir pro erfolgreich vermittelter Holding – ganz ohne Obergrenze."
}];
const REF_ELIG = ["Die empfohlene Holding ist Neukundin bei Mirador Tax.", "Sie verbinden uns direkt oder teilen uns den Namen der empfohlenen Holding vor Registrierung mit.", "Die Holding schließt Onboarding und ersten Jahresabschluss-Prozess vollständig mit Mirador Tax ab.", "Danach wird der Rabatt von 250 € der empfehlenden Person bzw. Holding gutgeschrieben.", "Mehrere Empfehlungen sind möglich – jede zählt einzeln.", "Auszahlung bzw. Gutschrift erfolgt nach Abschluss."];
function EmpfehlungPage({
  onSurvey,
  priceFrom
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Empfehlungsprogramm",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Holding-Steuern einfacher", /*#__PURE__*/React.createElement("br", null), "machen \u2013 gemeinsam."),
    lede: "Empfehlen Sie Mirador Tax weiter und werden Sie belohnt. F\xFCr Kund:innen, die jemanden kennen \u2013 und f\xFCr Partner, die Holdings einen echten Mehrwert bieten m\xF6chten."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-reward reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-reward__big"
  }, "250 \u20AC", /*#__PURE__*/React.createElement("small", null, "pro erfolgreicher Empfehlung")), /*#__PURE__*/React.createElement("div", {
    className: "ref-reward__text"
  }, /*#__PURE__*/React.createElement("h3", null, "Ein Rabatt, der sich f\xFCr beide Seiten lohnt"), /*#__PURE__*/React.createElement("p", null, "Sie kennen eine Holding, die noch zu viel f\xFCr ihren Jahresabschluss zahlt? Empfehlen Sie Mirador Tax \u2013 und sichern Sie sich 250 \u20AC Rabatt, sobald die empfohlene Holding den Prozess vollst\xE4ndig mit uns abgeschlossen hat."))))), /*#__PURE__*/React.createElement("section", {
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
  }, "So funktioniert's"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "In drei Schritten zur Empfehlung"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Unkompliziert, transparent und ohne Aufwand \u2013 f\xFCr Sie und die empfohlene Holding.")), /*#__PURE__*/React.createElement("div", {
    className: "ref-steps"
  }, REF_STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "ref-step reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-step__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "ref-step__t"
  }, s.t), /*#__PURE__*/React.createElement("div", {
    className: "ref-step__d"
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "F\xFCr wen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Zwei Wege, eine Empfehlung"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Ob Sie selbst Kund:in sind oder Holdings beruflich begleiten \u2013 Sie profitieren von jeder erfolgreichen Empfehlung.")), /*#__PURE__*/React.createElement("div", {
    className: "ref-aud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-card ref-card--accent reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-card__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 24,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ref-card__t"
  }, "F\xFCr Kund:innen"), /*#__PURE__*/React.createElement("p", {
    className: "ref-card__d"
  }, "Sie nutzen Mirador Tax bereits und kennen eine weitere Holding, der wir helfen k\xF6nnen? Geben Sie die Empfehlung weiter."), /*#__PURE__*/React.createElement("ul", {
    className: "ref-card__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.4
  }), " 250 \u20AC Rabatt auf Ihre n\xE4chste Rechnung"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.4
  }), " Beliebig viele Empfehlungen m\xF6glich"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.4
  }), " Gutschrift nach Abschluss der empfohlenen Holding")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent btn--lg btn--block",
    onClick: onSurvey
  }, "Jetzt empfehlen ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("div", {
    className: "ref-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ref-card__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "handshake",
    size: 24,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ref-card__t"
  }, "F\xFCr Partner"), /*#__PURE__*/React.createElement("p", {
    className: "ref-card__d"
  }, "Berater:innen, Anw\xE4lt:innen, Steuerprofis, Fractional CFOs oder Software-Anbieter: Empfehlen Sie Holdings eine bessere L\xF6sung \u2013 und profitieren Sie als Partner."), /*#__PURE__*/React.createElement("ul", {
    className: "ref-card__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.4
  }), " Honorierung pro vermittelter Holding"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.4
  }), " Pers\xF6nlicher Ansprechpartner & Material"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    sw: 2.4
  }), " Individuelle Partnerkonditionen")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--ghost btn--lg btn--block",
    href: "Kontakt.html"
  }, "Partner werden ", /*#__PURE__*/React.createElement(Arrow, null)))))), /*#__PURE__*/React.createElement("section", {
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
  }, "Teilnahmebedingungen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Wann der Rabatt gilt"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Damit Ihre Empfehlung z\xE4hlt, gelten ein paar einfache Voraussetzungen.")), /*#__PURE__*/React.createElement("ul", {
    className: "ref-elig reveal"
  }, REF_ELIG.map(e => /*#__PURE__*/React.createElement("li", {
    key: e
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    sw: 2.4
  }), " ", e))), /*#__PURE__*/React.createElement("p", {
    className: "plans__note",
    style: {
      marginTop: 26
    }
  }, "Es gelten die vollst\xE4ndigen Teilnahmebedingungen des Empfehlungsprogramms. Fragen? ", /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "Kontakt.html"
  }, "Sprechen Sie mit uns ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}
Object.assign(window, {
  EmpfehlungPage
});