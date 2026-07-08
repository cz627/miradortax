/* rechner.jsx — Preis-/Ersparnis-Rechner */
const {
  useState: useStateR
} = React;
function Rechner({
  onSurvey
}) {
  const [bet, setBet] = useStateR(2);
  const [tx, setTx] = useStateR(20);
  const [bil, setBil] = useStateR(100000);
  const [sel, setSel] = useStateR({});
  const [showDetails, setShowDetails] = useStateR(false);
  const toggleSel = k => setSel(s => ({
    ...s,
    [k]: !s[k]
  }));
  const r = computePrice({
    beteiligungen: bet,
    transaktionen: tx,
    bilanzsumme: bil,
    sel
  });

  // "ab 1.499 €" nur noch bei gesprengtem Tarifrahmen (Unlimited) – nicht mehr bei Zusatzpaketen
  const maxedOut = bet >= 26 || tx >= 100 || bil >= 5000000;
  const showFrom = maxedOut || !r.eligible;
  const miraPct = r.yearly ? Math.round(r.yearly / r.comparison * 100) : 60;
  const savings = r.yearly ? r.comparison - r.yearly : null;
  const compRange = [Math.round(r.low * 2.4 / 50) * 50, Math.round(r.high * 2.4 / 50) * 50];
  const saveRange = [Math.round((compRange[0] - r.low) / 100) * 100, Math.round((compRange[1] - r.high) / 100) * 100];
  const rangePct = Math.round((r.low + r.high) / 2 / ((compRange[0] + compRange[1]) / 2) * 100);
  const bilLabel = bil >= 5000000 ? "5,0 Mio. €+" : bil >= 1000000 ? (bil / 1000000).toFixed(1).replace(".", ",") + " Mio. €" : fmtEUR(bil) + " €";
  const fill = (v, min, max) => {
    const p = Math.max(0, Math.min(100, (v - min) / (max - min) * 100));
    return {
      background: `linear-gradient(to right, var(--accent) ${p}%, rgba(20,18,10,.16) ${p}%)`
    };
  };
  const totalAddons = Object.values(sel).filter(Boolean).length;
  const showBreakdown = r.surchargeItems.length > 0 || r.addonItems.length > 0 || r.discountItems.length > 0;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "preise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead shead--center reveal",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: "center",
      display: "flex"
    }
  }, "Preisrechner"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Was kostet Ihre Holding bei Mirador?"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Berechnen Sie Ihren Festpreis \u2013 und sehen Sie, wie viel Sie gegen\xFCber einem klassischen Steuerberater sparen.")), /*#__PURE__*/React.createElement("div", {
    className: "calc reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc__intro"
  }, "Konfigurieren Sie Ihre Holding"), /*#__PURE__*/React.createElement("div", {
    className: "calc__field"
  }, /*#__PURE__*/React.createElement("label", null, "Anzahl Beteiligungen ", /*#__PURE__*/React.createElement("b", null, bet > 25 ? "25+" : bet)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "26",
    value: bet,
    style: fill(bet, 1, 26),
    onChange: e => setBet(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "calc__field"
  }, /*#__PURE__*/React.createElement("label", null, "Transaktionen pro Jahr ", /*#__PURE__*/React.createElement("b", null, tx >= 100 ? "100+" : fmtEUR(tx))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: tx,
    style: fill(tx, 0, 100),
    onChange: e => setTx(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "calc__field"
  }, /*#__PURE__*/React.createElement("label", null, "Bilanzsumme ", /*#__PURE__*/React.createElement("b", null, bilLabel)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1000",
    max: "5000000",
    step: "1000",
    value: bil,
    style: fill(bil, 1000, 5000000),
    onChange: e => setBil(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "calc__field calc__field--last"
  }, /*#__PURE__*/React.createElement("label", null, "Zusatzoptionen ", /*#__PURE__*/React.createElement("span", {
    className: "calc__hint"
  }, "optional")), /*#__PURE__*/React.createElement("div", {
    className: "calc__addons" + (showDetails ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "calc__addons-head",
    onClick: () => setShowDetails(s => !s)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 16,
    sw: 1.8
  }), "Alle Zusatzoptionen", /*#__PURE__*/React.createElement("span", {
    className: "calc__addons-sub"
  }, totalAddons, " ausgew\xE4hlt"), /*#__PURE__*/React.createElement("span", {
    className: "calc__addons-chev"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16,
    sw: 2,
    style: {
      transition: "transform .25s ease",
      transform: showDetails ? "rotate(180deg)" : "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "calc__addons-body"
  }, ZUSATZ_OPTIONS.map(o => {
    const on = !!sel[o.key];
    return /*#__PURE__*/React.createElement("div", {
      key: o.key,
      className: "calc__check" + (on ? " on" : "") + (o.kind === "discount" ? " calc__check--gift" : "")
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "calc__check-hit",
      "aria-pressed": on,
      onClick: () => toggleSel(o.key)
    }, /*#__PURE__*/React.createElement("span", {
      className: "calc__check-box"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: o.kind === "discount" ? "gift" : "check",
      size: 13,
      sw: 3
    })), /*#__PURE__*/React.createElement("span", {
      className: "calc__check-main"
    }, /*#__PURE__*/React.createElement("span", null, o.t), /*#__PURE__*/React.createElement("span", {
      className: "calc__check-price"
    }, o.priceLabel))), /*#__PURE__*/React.createElement(InfoTip, {
      text: o.info
    }));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "calc__result"
  }, showFrom ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "calc__plan-badge calc__plan-badge--ind"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spark",
    size: 13,
    sw: 2
  }), " Individuelles Angebot \xB7 Unlimited"), /*#__PURE__*/React.createElement("div", {
    className: "calc__price"
  }, "ab 1.499 \u20AC", /*#__PURE__*/React.createElement("span", null, " / Jahr")), /*#__PURE__*/React.createElement("div", {
    className: "calc__monthly"
  }, "ab ", /*#__PURE__*/React.createElement("b", null, fmtEUR(Math.round(1499 / 12)), " \u20AC / Monat"), " \xB7 individuell kalkuliert"), /*#__PURE__*/React.createElement("div", {
    className: "calc__save"
  }, /*#__PURE__*/React.createElement("b", null, "\u2248 ", fmtEUR(saveRange[0]), "\u2013", fmtEUR(saveRange[1]), " \u20AC"), /*#__PURE__*/React.createElement("span", null, "typische Ersparnis pro Jahr gg\xFC.", /*#__PURE__*/React.createElement("br", null), "klassischer Steuerberatung*")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc__bar-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Mirador Tax"), /*#__PURE__*/React.createElement("span", null, fmtEUR(r.low), "\u2013", fmtEUR(r.high), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mira",
    style: {
      width: rangePct + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Klassische Steuerberatung"), /*#__PURE__*/React.createElement("span", null, "\u2248 ", fmtEUR(compRange[0]), "\u2013", fmtEUR(compRange[1]), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "other",
    style: {
      width: "100%"
    }
  })))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--accent btn--block btn--lg",
    href: "mailto:angebot@miradortax.de?subject=Angebotsanfrage%20Holding"
  }, "Pers\xF6nliches Angebot anfragen ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("p", {
    className: "calc__fineprint"
  }, "Antwort innerhalb eines Werktags \xB7 ohne Pauschal-Grenzen")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "calc__plan-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    sw: 3
  }), " ", r.plan), /*#__PURE__*/React.createElement("div", {
    className: "calc__price"
  }, fmtEUR(r.yearly), " \u20AC", /*#__PURE__*/React.createElement("span", null, " / Jahr")), /*#__PURE__*/React.createElement("div", {
    className: "calc__monthly"
  }, "entspricht ca. ", /*#__PURE__*/React.createElement("b", null, fmtEUR(r.monthly), " \u20AC / Monat"), !showBreakdown && " · alles inklusive"), showBreakdown && /*#__PURE__*/React.createElement("div", {
    className: "calc__breakdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc__bd-row"
  }, /*#__PURE__*/React.createElement("span", null, r.plan, "-Paket"), /*#__PURE__*/React.createElement("b", null, fmtEUR(r.basePrice), " \u20AC")), r.surchargeItems.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "calc__bd-row"
  }, /*#__PURE__*/React.createElement("span", null, s.t), /*#__PURE__*/React.createElement("b", null, "+", fmtEUR(s.v), " \u20AC"))), r.addonItems.filter(a => !a.once).map(a => /*#__PURE__*/React.createElement("div", {
    key: a.key,
    className: "calc__bd-row"
  }, /*#__PURE__*/React.createElement("span", null, a.t), /*#__PURE__*/React.createElement("b", null, "+", fmtEUR(a.price), " \u20AC"))), r.addonItems.filter(a => a.once).map(a => /*#__PURE__*/React.createElement("div", {
    key: a.key,
    className: "calc__bd-row calc__bd-row--once"
  }, /*#__PURE__*/React.createElement("span", null, a.t, " ", /*#__PURE__*/React.createElement("em", null, "einmalig")), /*#__PURE__*/React.createElement("b", null, "+", fmtEUR(a.price), " \u20AC"))), r.discountItems.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.t,
    className: "calc__bd-row calc__bd-row--discount"
  }, /*#__PURE__*/React.createElement("span", null, d.t, " ", /*#__PURE__*/React.createElement("em", null, "einmalig")), /*#__PURE__*/React.createElement("b", null, "\u2212", fmtEUR(d.v), " \u20AC")))), sel.imm && /*#__PURE__*/React.createElement("div", {
    className: "calc__notice"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 17,
    sw: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Immobilien noch nicht voll automatisiert."), " Sie k\xF6nnen Mirador Tax bereits nutzen, der Ablauf ist aber noch nicht durchg\xE4ngig automatisiert und ggf. etwas teurer. Wir erstellen Ihnen gern ein ", /*#__PURE__*/React.createElement("a", {
    href: "Kontakt.html"
  }, "Sonderangebot"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "calc__save"
  }, /*#__PURE__*/React.createElement("b", null, "\u2248 ", fmtEUR(savings), " \u20AC"), /*#__PURE__*/React.createElement("span", null, "Ersparnis pro Jahr gg\xFC.", /*#__PURE__*/React.createElement("br", null), "klassischer Steuerberatung*")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc__bar-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Mirador Tax"), /*#__PURE__*/React.createElement("span", null, fmtEUR(r.yearly), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mira",
    style: {
      width: miraPct + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Klassische Steuerberatung"), /*#__PURE__*/React.createElement("span", null, "\u2248 ", fmtEUR(r.comparison), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "other",
    style: {
      width: "100%"
    }
  })))), (r.onceTotal > 0 || r.discountOnce > 0) && /*#__PURE__*/React.createElement("p", {
    className: "calc__once-note"
  }, r.onceTotal > 0 ? "zzgl. " + fmtEUR(r.onceTotal) + " € einmalig (Einrichtung / Eröffnungsbilanz" + (r.discountOnce > 0 ? ", abzgl. Empfehlungs-Rabatt" : "") + ")" : "inkl. " + fmtEUR(r.discountOnce) + " € Empfehlungs-Rabatt (einmalig)"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent btn--block btn--lg",
    onClick: onSurvey
  }, "Unverbindliches Angebot anfordern ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("p", {
    className: "calc__fineprint"
  }, "Unverbindlich \xB7 keine Stundenabrechnung \xB7 keine versteckten Kosten")))), /*#__PURE__*/React.createElement("p", {
    className: "calc__footnote reveal"
  }, "* Referenzwert auf Basis der Mittelgeb\xFChren nach StBVV f\xFCr eine vergleichbare Holding. Mirador Tax ist eine Software zur Selbsterstellung und ersetzt keine individuelle Steuerberatung.")));
}
Object.assign(window, {
  Rechner
});