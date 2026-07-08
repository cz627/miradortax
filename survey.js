/* survey.jsx — "Angebot anfordern" Mini-Survey mit Sofort-Angebot */
const {
  useState: useStateSv,
  useEffect: useEffectSv
} = React;
const RECHTSFORMEN = [{
  v: "gmbh",
  t: "GmbH",
  d: "Gesellschaft mit beschränkter Haftung",
  ok: true
}, {
  v: "ug",
  t: "UG (haftungsbeschränkt)",
  d: "Unternehmergesellschaft",
  ok: true
}];

/* option row with optional info tooltip (used in the Zusatzoptionen steps) */
function OptionRow({
  on,
  t,
  d,
  price,
  info,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "opt opt--info" + (on ? " sel" : "")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "opt__hit",
    "aria-pressed": on,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    sw: 3
  })), /*#__PURE__*/React.createElement("span", {
    className: "opt__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__t"
  }, t, price ? /*#__PURE__*/React.createElement("em", {
    className: "opt__price"
  }, price) : null), /*#__PURE__*/React.createElement("span", {
    className: "opt__d"
  }, d))), info ? /*#__PURE__*/React.createElement(InfoTip, {
    text: info
  }) : null);
}
const Z = k => (typeof ZUSATZ_OPTIONS !== "undefined" ? ZUSATZ_OPTIONS.find(o => o.key === k) : null) || {};
function Survey({
  open,
  onClose
}) {
  const [step, setStep] = useStateSv(0);
  const [mode, setMode] = useStateSv("offer"); // offer | form | done
  const [intent, setIntent] = useStateSv("register"); // register | email
  const [sending, setSending] = useStateSv(false);
  const [sendErr, setSendErr] = useStateSv("");
  const [a, setA] = useStateSv({
    rechtsform: null,
    beteiligungen: 2,
    transaktionen: 20,
    bilanzsumme: 100000,
    extras: [],
    zusatz: {
      einrichtung: true
    },
    name: "",
    email: "",
    firma: ""
  });
  const set = (k, v) => setA(s => ({
    ...s,
    [k]: v
  }));
  const toggleExtra = v => setA(s => {
    if (v === "none") return {
      ...s,
      extras: s.extras.includes("none") ? [] : ["none"]
    };
    const base = s.extras.filter(x => x !== "none");
    return {
      ...s,
      extras: base.includes(v) ? base.filter(x => x !== v) : [...base, v]
    };
  });
  const toggleZ = k => setA(s => ({
    ...s,
    zusatz: {
      ...s.zusatz,
      [k]: !s.zusatz[k]
    }
  }));
  useEffectSv(() => {
    if (open) {
      setStep(0);
      setMode("offer");
    }
  }, [open]);
  useEffectSv(() => {
    const esc = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);
  const rf = RECHTSFORMEN.find(x => x.v === a.rechtsform);
  const standardEligible = rf && rf.ok;
  const TOTAL = 6; // 6 Fragen (0–5), Ergebnis = Step 6
  const next = () => setStep(s => Math.min(s + 1, TOTAL));
  const back = () => setStep(s => Math.max(s - 1, 0));

  // einheitliche Auswahl für das Preismodell (siehe ZUSATZ_OPTIONS)
  const sel = {
    ...a.zusatz,
    wp: a.extras.includes("wp"),
    pers: a.extras.includes("pers"),
    imm: a.extras.includes("immo"),
    referral: a.extras.includes("referral")
  };
  const priced = computePrice({
    beteiligungen: a.beteiligungen,
    transaktionen: a.transaktionen,
    bilanzsumme: a.bilanzsumme,
    sel
  });
  const maxedOut = a.beteiligungen >= 26 || a.transaktionen >= 100 || a.bilanzsumme >= 5000000;
  // exakter Festpreis bei zulässiger Rechtsform und im Tarifrahmen – Zusatzpakete fließen als Aufschlag ein
  const exact = standardEligible && priced.eligible && !maxedOut;
  const hasImmo = a.extras.includes("immo");
  const compRange = [Math.round(priced.low * 2.4 / 50) * 50, Math.round(priced.high * 2.4 / 50) * 50];
  const saveRange = [Math.round((compRange[0] - priced.low) / 100) * 100, Math.round((compRange[1] - priced.high) / 100) * 100];
  const rangePct = Math.round((priced.low + priced.high) / 2 / ((compRange[0] + compRange[1]) / 2) * 100);
  const miraPct = priced.yearly ? Math.round(priced.yearly / priced.comparison * 100) : rangePct;
  const priceLabel = exact ? fmtEUR(priced.yearly) + " € / Jahr" : "ab 1.499 € / Jahr";
  const bilLabel = a.bilanzsumme >= 5000000 ? "5,0 Mio. €+" : a.bilanzsumme >= 1000000 ? (a.bilanzsumme / 1000000).toFixed(1).replace(".", ",") + " Mio. €" : fmtEUR(a.bilanzsumme) + " €";
  const progress = Math.round(Math.min(step, TOTAL) / TOTAL * 100);
  const fill = (v, min, max) => {
    const p = Math.max(0, Math.min(100, (v - min) / (max - min) * 100));
    return {
      background: `linear-gradient(to right, var(--accent) ${p}%, var(--cream-3) ${p}%)`
    };
  };
  const openForm = which => {
    setIntent(which);
    setMode("form");
  };
  const formValid = a.email && a.name;

  // Sends a transactional e-mail FROM the Mirador Tax team (chris@miradortax.com)
  // TO the customer, via a small backend endpoint (see api/send-offer.js).
  // Configure the URL once by setting `window.MIRADOR_OFFER_ENDPOINT` (e.g. "/api/send-offer").
  // If no endpoint is configured, we fall back to the demo confirmation so the prototype still works.
  const OFFER_ENDPOINT = typeof window !== "undefined" && window.MIRADOR_OFFER_ENDPOINT || "";
  const sendOfferEmail = async () => {
    if (!formValid || sending) return;
    const extraLabels = {
      immo: "Immobilien",
      wp: "Wertpapierdepot",
      pers: "Beteiligung an Personengesellschaften",
      referral: "Empfehlung / Referral-Rabatt"
    };
    const chosenExtras = a.extras.filter(x => x !== "none").map(x => extraLabels[x]).filter(Boolean);
    const chosenZusatz = (typeof ADDONS !== "undefined" ? ADDONS : []).filter(o => a.zusatz[o.key]).map(o => o.t);
    const payload = {
      to: a.email,
      name: a.name,
      firma: a.firma,
      price: priceLabel,
      rechtsform: rf ? rf.t : null,
      beteiligungen: a.beteiligungen > 25 ? "25+" : a.beteiligungen,
      transaktionen: a.transaktionen >= 100 ? "100+" : a.transaktionen,
      bilanzsumme: bilLabel,
      extras: chosenExtras,
      zusatz: chosenZusatz
    };

    // Demo mode: no backend wired up yet → keep the simulated confirmation.
    if (!OFFER_ENDPOINT) {
      if (typeof console !== "undefined") console.log("[Mirador] Demo-Modus (kein Endpoint gesetzt). Backend-Payload:", payload);
      setMode("done");
      return;
    }
    setSending(true);
    setSendErr("");
    try {
      const res = await fetch(OFFER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setMode("done");
    } catch (err) {
      setSendErr("Senden fehlgeschlagen. Bitte prüfen Sie Ihre Eingabe und versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };
  const goRegister = () => window.open("https://app.miradortax.com/register", "_blank", "noopener");
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim" + (open ? " open" : ""),
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__head"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-dark.png",
    alt: "Mirador Tax",
    style: {
      objectFit: "contain",
      height: "37px",
      width: "125px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      fontWeight: 600
    }
  }, "Angebot anfordern"), /*#__PURE__*/React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Schlie\xDFen"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    sw: 2,
    style: {
      transform: "rotate(45deg)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal__progress"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: progress + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, "Schritt 1 von 6"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, "Welche Rechtsform hat Ihre Holding?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, "Pr\xFCfen Sie, ob Ihre Gesellschaft f\xFCr das Festpreis-Modell geeignet ist."), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, RECHTSFORMEN.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.v,
    className: "opt" + (a.rechtsform === o.v ? " sel" : ""),
    onClick: () => set("rechtsform", o.v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__box opt__radio"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    sw: 3
  })), /*#__PURE__*/React.createElement("span", {
    className: "opt__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__t"
  }, o.t), /*#__PURE__*/React.createElement("span", {
    className: "opt__d"
  }, o.d)))))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, "Schritt 2 von 6"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, "Wie viele Beteiligungen h\xE4lt die Holding?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, "Anzahl der Tochtergesellschaften und Beteiligungen insgesamt."), /*#__PURE__*/React.createElement("div", {
    className: "slider-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-val"
  }, a.beteiligungen > 25 ? "25+" : a.beteiligungen, " ", /*#__PURE__*/React.createElement("span", null, "Beteiligung", a.beteiligungen === 1 ? "" : "en")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "26",
    value: a.beteiligungen,
    style: fill(a.beteiligungen, 1, 26),
    onChange: e => set("beteiligungen", +e.target.value)
  }))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, "Schritt 3 von 6"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, "Wie viele Transaktionen pro Jahr?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, "Buchungen \xFCber alle Bank- und Depotkonten \u2013 vorl\xE4ufige Sch\xE4tzung gen\xFCgt, Abrechnung erfolgt auf Basis tats\xE4chlicher Transaktionen."), /*#__PURE__*/React.createElement("div", {
    className: "slider-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-val"
  }, a.transaktionen >= 100 ? "100+" : fmtEUR(a.transaktionen), " ", /*#__PURE__*/React.createElement("span", null, "/ Jahr")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: a.transaktionen,
    style: fill(a.transaktionen, 0, 100),
    onChange: e => set("transaktionen", +e.target.value)
  }))), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, "Schritt 4 von 6"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, "Wie hoch ist die Bilanzsumme?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, "Gesamtverm\xF6gen der Holding zum Bilanzstichtag."), /*#__PURE__*/React.createElement("div", {
    className: "slider-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-val"
  }, bilLabel), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1000",
    max: "5000000",
    step: "1000",
    value: a.bilanzsumme,
    style: fill(a.bilanzsumme, 1000, 5000000),
    onChange: e => set("bilanzsumme", +e.target.value)
  }))), step === 4 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, "Schritt 5 von 6"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, "Gibt es Zusatzoptionen?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, "Mehrfachauswahl m\xF6glich. Tippen Sie auf das Info-Symbol f\xFCr Details."), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, [{
    v: "referral",
    t: "Empfehlung / Referral-Rabatt",
    d: "250 € Rabatt für Ihre Empfehlung",
    price: "−250 € einmalig",
    info: Z("referral").info
  }, {
    v: "wp",
    t: "Wertpapierdepot",
    d: "Aktien, ETFs, Fonds im Holdingvermögen",
    price: "+500 € / Jahr",
    info: Z("wp").info
  }, {
    v: "pers",
    t: "Beteiligung an Personengesellschaften",
    d: "Beteiligungen an KGs / Mitunternehmerschaften",
    price: "+250 € / Jahr",
    info: Z("pers").info
  }, {
    v: "immo",
    t: "Immobilien",
    d: "Direkt gehaltene Immobilien / Grundstücke",
    price: "Sonderangebot",
    info: Z("imm").info
  }, {
    v: "none",
    t: "Keine der genannten",
    d: "Rein Beteiligungen an Kapitalgesellschaften"
  }].map(o => /*#__PURE__*/React.createElement(OptionRow, {
    key: o.v,
    on: a.extras.includes(o.v),
    t: o.t,
    d: o.d,
    price: o.price,
    info: o.info,
    onToggle: () => toggleExtra(o.v)
  })))), step === 5 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, "Schritt 6 von 6"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, "Ben\xF6tigen Sie Zusatzleistungen?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, "Optionale Leistungen au\xDFerhalb des Basispakets. Mehrfachauswahl m\xF6glich \u2013 Sie k\xF6nnen dies auch leer lassen."), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ADDONS.map(o => /*#__PURE__*/React.createElement(OptionRow, {
    key: o.key,
    on: !!a.zusatz[o.key],
    t: o.t,
    price: fmtEUR(o.price) + " € " + (o.once ? "einmalig" : o.unit || "/ Jahr"),
    d: o.d,
    info: o.d,
    onToggle: () => toggleZ(o.key)
  })))), step === 6 && mode === "offer" && /*#__PURE__*/React.createElement("div", {
    className: "result-hero"
  }, exact ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "result-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    sw: 3
  }), " ", priced.plan), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      marginBottom: 4
    }
  }, "Ihr gesch\xE4tzter Festpreis"), /*#__PURE__*/React.createElement("div", {
    className: "result-price"
  }, fmtEUR(priced.yearly), " \u20AC", /*#__PURE__*/React.createElement("span", null, " / Jahr")), /*#__PURE__*/React.createElement("div", {
    className: "result-range"
  }, "entspricht ca. ", fmtEUR(priced.monthly), " \u20AC / Monat", priced.onceTotal > 0 ? " · zzgl. " + fmtEUR(priced.onceTotal) + " € einmalig" : " · alles inklusive")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "result-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spark",
    size: 14,
    sw: 2
  }), " Individuelles Angebot"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      marginBottom: 4
    }
  }, "Ihr gesch\xE4tzter Festpreis"), /*#__PURE__*/React.createElement("div", {
    className: "result-price"
  }, "ab 1.499 \u20AC", /*#__PURE__*/React.createElement("span", null, " / Jahr")), /*#__PURE__*/React.createElement("div", {
    className: "result-range"
  }, "F\xFCr Ihre Struktur kalkulieren wir den Festpreis individuell.")), exact && (priced.surchargeItems.length > 0 || priced.addonItems.length > 0 || priced.discountItems.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "result-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ri"
  }, /*#__PURE__*/React.createElement("span", null, priced.plan, "-Paket"), /*#__PURE__*/React.createElement("b", null, fmtEUR(priced.basePrice), " \u20AC")), priced.surchargeItems.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "ri"
  }, /*#__PURE__*/React.createElement("span", null, s.t), /*#__PURE__*/React.createElement("b", null, "+", fmtEUR(s.v), " \u20AC"))), priced.addonItems.filter(x => !x.once).map(x => /*#__PURE__*/React.createElement("div", {
    key: x.key,
    className: "ri"
  }, /*#__PURE__*/React.createElement("span", null, x.t), /*#__PURE__*/React.createElement("b", null, "+", fmtEUR(x.price), " \u20AC ", x.unit || "/ Jahr"))), priced.addonItems.filter(x => x.once).map(x => /*#__PURE__*/React.createElement("div", {
    key: x.key,
    className: "ri"
  }, /*#__PURE__*/React.createElement("span", null, x.t, " (einmalig)"), /*#__PURE__*/React.createElement("b", null, "+", fmtEUR(x.price), " \u20AC"))), priced.discountItems.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.t,
    className: "ri ri--discount"
  }, /*#__PURE__*/React.createElement("span", null, x.t, " (einmalig)"), /*#__PURE__*/React.createElement("b", null, "\u2212", fmtEUR(x.v), " \u20AC")))), hasImmo && /*#__PURE__*/React.createElement("div", {
    className: "calc__notice",
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 17,
    sw: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Immobilien noch nicht voll automatisiert."), " Sie k\xF6nnen Mirador Tax bereits nutzen, der Ablauf ist aber noch nicht durchg\xE4ngig und ggf. etwas teurer. Wir erstellen Ihnen gern ein Sonderangebot.")), /*#__PURE__*/React.createElement("div", {
    className: "result-save"
  }, /*#__PURE__*/React.createElement("b", null, exact ? "≈ " + fmtEUR(priced.comparison - priced.yearly) : "≈ " + fmtEUR(saveRange[0]) + "–" + fmtEUR(saveRange[1]), " \u20AC"), /*#__PURE__*/React.createElement("span", null, "Ersparnis pro Jahr gg\xFC. klassischer Steuerberatung*")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bars",
    style: {
      margin: "0 0 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc__bar-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Mirador Tax"), /*#__PURE__*/React.createElement("span", null, exact ? fmtEUR(priced.yearly) + " €" : fmtEUR(priced.low) + "–" + fmtEUR(priced.high) + " €")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mira",
    style: {
      width: (exact ? miraPct : rangePct) + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Klassische Steuerberatung"), /*#__PURE__*/React.createElement("span", null, "\u2248 ", exact ? fmtEUR(priced.comparison) + " €" : fmtEUR(compRange[0]) + "–" + fmtEUR(compRange[1]) + " €")), /*#__PURE__*/React.createElement("div", {
    className: "calc__bar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "other",
    style: {
      width: "100%"
    }
  })))), /*#__PURE__*/React.createElement("p", {
    className: "calc__footnote"
  }, "* Referenzwert auf Basis der Mittelgeb\xFChren nach StBVV f\xFCr eine vergleichbare Holding. Mirador Tax ist eine Software zur Selbsterstellung und ersetzt keine individuelle Steuerberatung.")), step === 6 && mode === "form" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal__step-label"
  }, intent === "register" ? "Konto erstellen" : "Angebot per E-Mail"), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q"
  }, intent === "register" ? "Jetzt Zugang einrichten" : "Wohin dürfen wir Ihr Angebot senden?"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint"
  }, intent === "register" ? "Wir legen Ihr Mirador-Portal an und senden Ihr Angebot direkt per E-Mail." : "Sie erhalten Ihr persönliches Festpreis-Angebot sofort per E-Mail zum Nachlesen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    value: a.name,
    onChange: e => set("name", e.target.value),
    placeholder: "Vor- und Nachname"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Gesch\xE4ftliche E-Mail"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: a.email,
    onChange: e => set("email", e.target.value),
    placeholder: "name@firma.de"
  })), intent === "register" && /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Name der Holding"), /*#__PURE__*/React.createElement("input", {
    value: a.firma,
    onChange: e => set("firma", e.target.value),
    placeholder: "Beispiel Holding GmbH"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-summary"
  }, /*#__PURE__*/React.createElement("span", null, "Ihr Angebot"), /*#__PURE__*/React.createElement("b", null, priceLabel)), sendErr && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      color: "#b4534a",
      fontSize: 14,
      fontWeight: 600
    }
  }, sendErr)), step === 6 && mode === "done" && /*#__PURE__*/React.createElement("div", {
    className: "result-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ineligible__ic",
    style: {
      background: "var(--accent-tint)",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28,
    sw: 2.4
  })), /*#__PURE__*/React.createElement("h3", {
    className: "modal__q",
    style: {
      textAlign: "center"
    }
  }, intent === "register" ? "Willkommen bei Mirador Tax!" : "Ihr Angebot ist unterwegs"), /*#__PURE__*/React.createElement("p", {
    className: "modal__hint",
    style: {
      textAlign: "center",
      maxWidth: "42ch",
      margin: "0 auto"
    }
  }, intent === "register" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Wir richten Ihren Zugang ein. Chris aus dem Mirador-Tax-Team (chris@miradortax.com) hat Ihr Angebot (", priceLabel, ") an ", /*#__PURE__*/React.createElement("b", null, a.email), " gesendet.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Chris aus dem Mirador-Tax-Team (chris@miradortax.com) hat Ihr Festpreis-Angebot (", priceLabel, ") soeben an ", /*#__PURE__*/React.createElement("b", null, a.email), " gesendet. Bitte pr\xFCfen Sie auch Ihren Spam-Ordner.")))), /*#__PURE__*/React.createElement("div", {
    className: "modal__foot"
  }, step < TOTAL && /*#__PURE__*/React.createElement(React.Fragment, null, step > 0 && /*#__PURE__*/React.createElement("button", {
    className: "modal__back",
    onClick: back
  }, "\u2190 Zur\xFCck"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), step < 5 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent",
    disabled: step === 0 && !a.rechtsform,
    style: {
      opacity: step === 0 && !a.rechtsform ? .45 : 1
    },
    onClick: next
  }, "Weiter ", /*#__PURE__*/React.createElement(Arrow, null)), step === 5 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent",
    onClick: next
  }, "Angebot anzeigen ", /*#__PURE__*/React.createElement(Arrow, null))), step === 6 && mode === "offer" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "modal__back",
    onClick: () => setStep(0)
  }, "\u21BA Neu starten"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent",
    onClick: goRegister
  }, "Registrieren ", /*#__PURE__*/React.createElement(Arrow, null))), step === 6 && mode === "form" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "modal__back",
    onClick: () => setMode("offer")
  }, "\u2190 Zur\xFCck"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent",
    disabled: !formValid || sending,
    style: {
      opacity: formValid && !sending ? 1 : .45
    },
    onClick: () => {
      if (!formValid) return;
      intent === "register" ? setMode("done") : sendOfferEmail();
    }
  }, sending ? "Senden …" : intent === "register" ? "Konto erstellen" : "Angebot senden", " ", /*#__PURE__*/React.createElement(Arrow, null))), step === 6 && mode === "done" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent",
    onClick: onClose
  }, "Fertig")))));
}
Object.assign(window, {
  Survey
});