/* pricing.jsx — shared Festpreis model used by calculator + survey
   Pakete:
     Start      €499   — max. 3 Beteiligungen · 20 Buchungen · Bilanzsumme ≤ 100 TEUR
     Wachstum   €999   — bis 10 Beteiligungen  · 40 Buchungen · Bilanzsumme ≤ 300 TEUR
     Pro        €1.499 — bis 25 Beteiligungen  · bis 100 Buchungen · Bilanzsumme ≤ 5 Mio. €
     Unlimited  — individuelles Angebot (kein garantierter Festpreis)

   Zusatzoptionen siehe ZUSATZ_OPTIONS (eine geordnete Quelle für Rechner + Survey).
*/

/* ---- single ordered source of truth for all Zusatzoptionen ----
   kind:
     "discount"  — einmaliger Rabatt (Empfehlung)
     "surcharge" — wiederkehrender Aufschlag pro Jahr
     "special"   — kein fester Preis (individuelles Sonderangebot)
     "addon"     — Zusatzleistung (once = einmalig, sonst pro Jahr)
*/
const ZUSATZ_OPTIONS = [
  {
    key: "referral", t: "Empfehlung / Referral-Rabatt", kind: "discount",
    price: -250, once: true, priceLabel: "−250 € einmalig",
    info: "Empfehlen Sie Mirador Tax weiter. Meldet sich die empfohlene Holding an und durchläuft den Prozess vollständig mit uns, erhalten Sie als empfehlende Person 250 € Rabatt.",
  },
  {
    key: "wp", t: "Wertpapierdepot", kind: "surcharge",
    price: 500, once: false, priceLabel: "+500 € / Jahr",
    info: "Falls Ihre HoldCo Aktien oder ETFs hält.",
  },
  {
    key: "pers", t: "Beteiligung an Personengesellschaften", kind: "surcharge",
    price: 250, once: false, priceLabel: "+250 € / Jahr",
    info: "Falls Sie in Fonds oder andere Kommanditbeteiligungen investiert haben – etwa Deal-by-Deal-SPVs.",
  },
  {
    key: "imm", t: "Immobilien", kind: "special",
    price: 0, once: false, priceLabel: "Sonderangebot",
    info: "Falls Ihre Holding Immobilien hält. Der Ablauf ist noch nicht voll automatisiert – wir erstellen Ihnen gern ein individuelles Sonderangebot.",
  },
  {
    key: "eroeffnung", t: "Eröffnungsbilanz", kind: "addon",
    price: 299, once: true, priceLabel: "+299 € einmalig",
    info: "Nur nötig, wenn Sie eine neue UG/GmbH gegründet haben, dies der allererste Jahresabschluss ist und zuvor keine Eröffnungsbilanz erstellt wurde.",
  },
  {
    key: "einrichtung", t: "Einrichtungsgebühr", kind: "addon",
    price: 250, once: true, priceLabel: "+250 € einmalig",
    info: "Einmalige Onboarding-Gebühr für den Wechsel von Ihrer bisherigen Kanzlei zu uns. Sie deckt den manuellen Aufwand unserer Partnerkanzlei ab und wird ohne Aufschlag 1:1 weitergegeben – einmalig, als Start einer langfristigen Zusammenarbeit.",
  },
  {
    key: "kest", t: "Kapitalertragsteuer-Anmeldung", kind: "addon",
    price: 249, once: false, unit: "pro Anmeldung", priceLabel: "+249 € pro Anmeldung",
    info: "Nur relevant, wenn Ihre HoldCo Dividenden an ihre Gesellschafter ausschüttet. Erfordert zusätzliche Steuerformulare und aktuell noch manuelle Arbeit. Keine Gebühr bei Rückzahlung oder Vergabe von Gesellschafterdarlehen.",
  },
  {
    key: "beratung", t: "Beratungspaket", kind: "addon",
    price: 450, once: false, priceLabel: "+450 € / Jahr",
    info: "Für eine Beratung mit unserer Partnerkanzlei zu steuerlichen Fragen. Bei komplexeren Fällen informiert die Kanzlei Sie vorab und rechnet zu marktüblichen Konditionen ab.",
  },
];

// Zusatzleistungen-Karten (Preise-Seite) — abgeleitet aus den Addon-Optionen
const ADDONS = ZUSATZ_OPTIONS.filter((o) => o.kind === "addon").map((o) => ({
  key: o.key, t: o.t, price: o.price, once: o.once, unit: o.unit, d: o.info,
}));

const REFERRAL_DISCOUNT = 250;

function computePrice({ beteiligungen = 2, transaktionen = 20, bilanzsumme = 100000, sel = {} } = {}) {
  let plan, basePrice, eligible = true;
  if (beteiligungen <= 3 && transaktionen <= 20 && bilanzsumme <= 100000) { plan = "Start"; basePrice = 499; }
  else if (beteiligungen <= 10 && transaktionen <= 40 && bilanzsumme <= 300000) { plan = "Wachstum"; basePrice = 999; }
  else if (beteiligungen <= 25 && transaktionen <= 100 && bilanzsumme <= 5000000) { plan = "Pro"; basePrice = 1499; }
  else { plan = "Unlimited"; basePrice = null; eligible = false; }

  const surchargeItems = [];
  let surcharge = 0;
  let addonYearly = 0, addonOnce = 0;
  const addonItems = [];
  let discountOnce = 0;
  const discountItems = [];

  ZUSATZ_OPTIONS.forEach((o) => {
    if (!sel[o.key]) return;
    if (o.kind === "surcharge") { surcharge += o.price; surchargeItems.push({ t: o.t, v: o.price }); }
    else if (o.kind === "addon") { addonItems.push(o); if (o.once) addonOnce += o.price; else addonYearly += o.price; }
    else if (o.kind === "discount") { discountOnce += Math.abs(o.price); discountItems.push({ t: o.t, v: o.price }); }
    // "special" (Immobilien): kein Preis-Effekt, nur Hinweis
  });

  const immobilien = !!sel.imm;
  const yearly = eligible ? basePrice + surcharge + addonYearly : null;
  const onceTotal = Math.max(0, addonOnce - discountOnce);
  const ref = yearly || 1999;
  const comparison = Math.round(ref * 2.4 / 50) * 50; // typ. klassischer Steuerberater
  const monthly = yearly ? Math.round(yearly / 12) : null;

  return {
    plan, basePrice, eligible,
    surcharge, surchargeItems,
    addonYearly, addonOnce, addonItems,
    discountOnce, discountItems,
    onceTotal,
    yearly, price: yearly,
    immobilien: !!immobilien,
    comparison, monthly, low: 1499, high: 2499,
  };
}

const fmtEUR = (n) => Math.abs(n).toLocaleString("de-DE");

Object.assign(window, { computePrice, fmtEUR, ADDONS, ZUSATZ_OPTIONS, REFERRAL_DISCOUNT });
