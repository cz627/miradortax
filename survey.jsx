/* survey.jsx — "Angebot anfordern" Mini-Survey mit Sofort-Angebot */
const { useState: useStateSv, useEffect: useEffectSv } = React;

const RECHTSFORMEN = [
{ v: "gmbh", t: "GmbH", d: "Gesellschaft mit beschränkter Haftung", ok: true },
{ v: "ug", t: "UG (haftungsbeschränkt)", d: "Unternehmergesellschaft", ok: true }];


/* option row with optional info tooltip (used in the Zusatzoptionen steps) */
function OptionRow({ on, t, d, price, info, onToggle }) {
  return (
    <div className={"opt opt--info" + (on ? " sel" : "")}>
      <button type="button" className="opt__hit" aria-pressed={on} onClick={onToggle}>
        <span className="opt__box"><Icon name="check" size={13} sw={3} /></span>
        <span className="opt__main">
          <span className="opt__t">{t}{price ? <em className="opt__price">{price}</em> : null}</span>
          <span className="opt__d">{d}</span>
        </span>
      </button>
      {info ? <InfoTip text={info} /> : null}
    </div>
  );
}
const Z = (k) => (typeof ZUSATZ_OPTIONS !== "undefined" ? ZUSATZ_OPTIONS.find((o) => o.key === k) : null) || {};

function Survey({ open, onClose }) {
  const [step, setStep] = useStateSv(0);
  const [mode, setMode] = useStateSv("offer"); // offer | form | done
  const [intent, setIntent] = useStateSv("register"); // register | email
  const [sending, setSending] = useStateSv(false);
  const [sendErr, setSendErr] = useStateSv("");
  const [a, setA] = useStateSv({
    rechtsform: null, beteiligungen: 2, transaktionen: 20, bilanzsumme: 100000,
    extras: [], zusatz: { einrichtung: true }, name: "", email: "", firma: ""
  });
  const set = (k, v) => setA((s) => ({ ...s, [k]: v }));
  const toggleExtra = (v) => setA((s) => {
    if (v === "none") return { ...s, extras: s.extras.includes("none") ? [] : ["none"] };
    const base = s.extras.filter((x) => x !== "none");
    return { ...s, extras: base.includes(v) ? base.filter((x) => x !== v) : [...base, v] };
  });
  const toggleZ = (k) => setA((s) => ({ ...s, zusatz: { ...s.zusatz, [k]: !s.zusatz[k] } }));

  useEffectSv(() => {if (open) {setStep(0);setMode("offer");}}, [open]);
  useEffectSv(() => {
    const esc = (e) => {if (e.key === "Escape") onClose();};
    window.addEventListener("keydown", esc);return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const rf = RECHTSFORMEN.find((x) => x.v === a.rechtsform);
  const standardEligible = rf && rf.ok;

  const TOTAL = 6; // 6 Fragen (0–5), Ergebnis = Step 6
  const next = () => setStep((s) => Math.min(s + 1, TOTAL));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // einheitliche Auswahl für das Preismodell (siehe ZUSATZ_OPTIONS)
  const sel = {
    ...a.zusatz,
    wp: a.extras.includes("wp"),
    pers: a.extras.includes("pers"),
    imm: a.extras.includes("immo"),
    referral: a.extras.includes("referral"),
  };

  const priced = computePrice({
    beteiligungen: a.beteiligungen, transaktionen: a.transaktionen, bilanzsumme: a.bilanzsumme, sel
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

  const bilLabel = a.bilanzsumme >= 5000000 ?
  "5,0 Mio. €+" :
  a.bilanzsumme >= 1000000 ? (a.bilanzsumme / 1000000).toFixed(1).replace(".", ",") + " Mio. €" : fmtEUR(a.bilanzsumme) + " €";

  const progress = Math.round(Math.min(step, TOTAL) / TOTAL * 100);
  const fill = (v, min, max) => {
    const p = Math.max(0, Math.min(100, (v - min) / (max - min) * 100));
    return { background: `linear-gradient(to right, var(--accent) ${p}%, var(--cream-3) ${p}%)` };
  };

  const openForm = (which) => {setIntent(which);setMode("form");};
  const formValid = a.email && a.name;

  // Sends a transactional e-mail FROM the Mirador Tax team (chris@miradortax.com)
  // TO the customer, via a small backend endpoint (see api/send-offer.js).
  // Configure the URL once by setting `window.MIRADOR_OFFER_ENDPOINT` (e.g. "/api/send-offer").
  // If no endpoint is configured, we fall back to the demo confirmation so the prototype still works.
  const OFFER_ENDPOINT = (typeof window !== "undefined" && window.MIRADOR_OFFER_ENDPOINT) || "";
  const sendOfferEmail = async () => {
    if (!formValid || sending) return;
    const extraLabels = { immo: "Immobilien", wp: "Wertpapierdepot", pers: "Beteiligung an Personengesellschaften", referral: "Empfehlung / Referral-Rabatt" };
    const chosenExtras = a.extras.filter((x) => x !== "none").map((x) => extraLabels[x]).filter(Boolean);
    const chosenZusatz = (typeof ADDONS !== "undefined" ? ADDONS : []).filter((o) => a.zusatz[o.key]).map((o) => o.t);
    const payload = {
      to: a.email, name: a.name, firma: a.firma,
      price: priceLabel, rechtsform: rf ? rf.t : null,
      beteiligungen: a.beteiligungen > 25 ? "25+" : a.beteiligungen,
      transaktionen: a.transaktionen >= 100 ? "100+" : a.transaktionen,
      bilanzsumme: bilLabel,
      extras: chosenExtras, zusatz: chosenZusatz,
    };

    // Demo mode: no backend wired up yet → keep the simulated confirmation.
    if (!OFFER_ENDPOINT) {
      if (typeof console !== "undefined") console.log("[Mirador] Demo-Modus (kein Endpoint gesetzt). Backend-Payload:", payload);
      setMode("done");
      return;
    }

    setSending(true); setSendErr("");
    try {
      const res = await fetch(OFFER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  return (
    <div className={"modal-scrim" + (open ? " open" : "")} onMouseDown={(e) => {if (e.target === e.currentTarget) onClose();}}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal__head">
          <img src="assets/logo-dark.png" alt="Mirador Tax" style={{ objectFit: "contain", height: "37px", width: "125px" }} />
          <span style={{ fontSize: 14, color: "var(--muted)", fontWeight: 600 }}>Angebot anfordern</span>
          <button className="modal__close" onClick={onClose} aria-label="Schließen"><Icon name="plus" size={18} sw={2} style={{ transform: "rotate(45deg)" }} /></button>
        </div>
        <div className="modal__progress"><i style={{ width: progress + "%" }}></i></div>

        <div className="modal__body">
          {/* STEP 0 — Rechtsform */}
          {step === 0 &&
          <div>
              <div className="modal__step-label">Schritt 1 von 6</div>
              <h3 className="modal__q">Welche Rechtsform hat Ihre Holding?</h3>
              <p className="modal__hint">So prüfen wir, ob wir Ihre Gesellschaft im Festpreis-Modell betreuen können.</p>
              <div className="opts">
                {RECHTSFORMEN.map((o) =>
              <button key={o.v} className={"opt" + (a.rechtsform === o.v ? " sel" : "")} onClick={() => set("rechtsform", o.v)}>
                    <span className="opt__box opt__radio"><Icon name="check" size={13} sw={3} /></span>
                    <span className="opt__main"><span className="opt__t">{o.t}</span><span className="opt__d">{o.d}</span></span>
                  </button>
              )}
              </div>
            </div>
          }

          {/* STEP 1 — Beteiligungen */}
          {step === 1 &&
          <div>
              <div className="modal__step-label">Schritt 2 von 6</div>
              <h3 className="modal__q">Wie viele Beteiligungen hält die Holding?</h3>
              <p className="modal__hint">Anzahl der Tochtergesellschaften und Beteiligungen insgesamt.</p>
              <div className="slider-q">
                <div className="slider-val">{a.beteiligungen > 25 ? "25+" : a.beteiligungen} <span>Beteiligung{a.beteiligungen === 1 ? "" : "en"}</span></div>
                <input type="range" min="1" max="26" value={a.beteiligungen} style={fill(a.beteiligungen, 1, 26)} onChange={(e) => set("beteiligungen", +e.target.value)} />
              </div>
            </div>
          }

          {/* STEP 2 — Transaktionen */}
          {step === 2 &&
          <div>
              <div className="modal__step-label">Schritt 3 von 6</div>
              <h3 className="modal__q">Wie viele Transaktionen pro Jahr?</h3>
              <p className="modal__hint">Buchungen über alle Bank- und Depotkonten – vorläufige Schätzung genügt, Abrechnung erfolgt auf Basis tatsächlicher Transaktionen.</p>
              <div className="slider-q">
                <div className="slider-val">{a.transaktionen >= 100 ? "100+" : fmtEUR(a.transaktionen)} <span>/ Jahr</span></div>
                <input type="range" min="0" max="100" step="5" value={a.transaktionen} style={fill(a.transaktionen, 0, 100)} onChange={(e) => set("transaktionen", +e.target.value)} />
              </div>
            </div>
          }

          {/* STEP 3 — Bilanzsumme */}
          {step === 3 &&
          <div>
              <div className="modal__step-label">Schritt 4 von 6</div>
              <h3 className="modal__q">Wie hoch ist die Bilanzsumme?</h3>
              <p className="modal__hint">Gesamtvermögen der Holding zum Bilanzstichtag.</p>
              <div className="slider-q">
                <div className="slider-val">{bilLabel}</div>
                <input type="range" min="1000" max="5000000" step="1000" value={a.bilanzsumme} style={fill(a.bilanzsumme, 1000, 5000000)} onChange={(e) => set("bilanzsumme", +e.target.value)} />
              </div>
            </div>
          }

          {/* STEP 4 — Zusatzpakete */}
          {step === 4 &&
          <div>
              <div className="modal__step-label">Schritt 5 von 6</div>
              <h3 className="modal__q">Gibt es Zusatzoptionen?</h3>
              <p className="modal__hint">Mehrfachauswahl möglich. Tippen Sie auf das Info-Symbol für Details.</p>
              <div className="opts">
                {[
              { v: "referral", t: "Empfehlung / Referral-Rabatt", d: "250 € Rabatt für Ihre Empfehlung", price: "−250 € einmalig", info: Z("referral").info },
              { v: "wp", t: "Wertpapierdepot", d: "Aktien, ETFs, Fonds im Holdingvermögen", price: "+500 € / Jahr", info: Z("wp").info },
              { v: "pers", t: "Beteiligung an Personengesellschaften", d: "Beteiligungen an KGs / Mitunternehmerschaften", price: "+250 € / Jahr", info: Z("pers").info },
              { v: "immo", t: "Immobilien", d: "Direkt gehaltene Immobilien / Grundstücke", price: "Sonderangebot", info: Z("imm").info },
              { v: "none", t: "Keine der genannten", d: "Rein Beteiligungen an Kapitalgesellschaften" }].
              map((o) =>
              <OptionRow key={o.v} on={a.extras.includes(o.v)} t={o.t} d={o.d} price={o.price} info={o.info} onToggle={() => toggleExtra(o.v)} />
              )}
              </div>
            </div>
          }

          {/* STEP 5 — Zusatzleistungen */}
          {step === 5 &&
          <div>
              <div className="modal__step-label">Schritt 6 von 6</div>
              <h3 className="modal__q">Benötigen Sie Zusatzleistungen?</h3>
              <p className="modal__hint">Optionale Leistungen außerhalb des Basispakets. Mehrfachauswahl möglich – Sie können dies auch leer lassen.</p>
              <div className="opts">
                {ADDONS.map((o) =>
              <OptionRow key={o.key} on={!!a.zusatz[o.key]} t={o.t}
              price={fmtEUR(o.price) + " € " + (o.once ? "einmalig" : (o.unit || "/ Jahr"))}
              d={o.d} info={o.d} onToggle={() => toggleZ(o.key)} />
              )}
              </div>
            </div>
          }

          {/* STEP 6 — Sofort-Angebot */}
          {step === 6 && mode === "offer" &&
          <div className="result-hero">
              {exact ?
            <>
                  <div className="result-badge"><Icon name="check" size={14} sw={3} /> {priced.plan}</div>
                  <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 4 }}>Ihr geschätzter Festpreis</div>
                  <div className="result-price">{fmtEUR(priced.yearly)} €<span> / Jahr</span></div>
                  <div className="result-range">entspricht ca. {fmtEUR(priced.monthly)} € / Monat{priced.onceTotal > 0 ? " · zzgl. " + fmtEUR(priced.onceTotal) + " € einmalig" : " · alles inklusive"}</div>
                </> :

            <>
                  <div className="result-badge"><Icon name="spark" size={14} sw={2} /> Individuelles Angebot</div>
                  <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 4 }}>Ihr geschätzter Festpreis</div>
                  <div className="result-price">ab 1.499 €<span> / Jahr</span></div>
                  <div className="result-range">Für Ihre Struktur kalkulieren wir den Festpreis individuell.</div>
                </>
            }

              {exact && (priced.surchargeItems.length > 0 || priced.addonItems.length > 0 || priced.discountItems.length > 0) &&
            <div className="result-list">
                  <div className="ri"><span>{priced.plan}-Paket</span><b>{fmtEUR(priced.basePrice)} €</b></div>
                  {priced.surchargeItems.map((s) => <div key={s.t} className="ri"><span>{s.t}</span><b>+{fmtEUR(s.v)} €</b></div>)}
                  {priced.addonItems.filter((x) => !x.once).map((x) => <div key={x.key} className="ri"><span>{x.t}</span><b>+{fmtEUR(x.price)} € {x.unit || "/ Jahr"}</b></div>)}
                  {priced.addonItems.filter((x) => x.once).map((x) => <div key={x.key} className="ri"><span>{x.t} (einmalig)</span><b>+{fmtEUR(x.price)} €</b></div>)}
                  {priced.discountItems.map((x) => <div key={x.t} className="ri ri--discount"><span>{x.t} (einmalig)</span><b>−{fmtEUR(x.v)} €</b></div>)}
                </div>
            }

              {hasImmo &&
            <div className="calc__notice" style={{ textAlign: "left" }}>
                  <Icon name="building" size={17} sw={2} />
                  <span><b>Immobilien noch nicht voll automatisiert.</b> Sie können Mirador Tax bereits nutzen, der Ablauf ist aber noch nicht durchgängig und ggf. etwas teurer. Wir erstellen Ihnen gern ein Sonderangebot.</span>
                </div>
            }

              <div className="result-save">
                <b>{exact ? "≈ " + fmtEUR(priced.comparison - priced.yearly) : "≈ " + fmtEUR(saveRange[0]) + "–" + fmtEUR(saveRange[1])} €</b>
                <span>Ersparnis pro Jahr gegenüber einem klassischen Steuerberater</span>
              </div>
              <div className="calc__bars" style={{ margin: "0 0 6px" }}>
                <div className="calc__bar-row">
                  <div><span>Mirador Tax</span><span>{exact ? fmtEUR(priced.yearly) + " €" : fmtEUR(priced.low) + "–" + fmtEUR(priced.high) + " €"}</span></div>
                  <div className="calc__bar"><i className="mira" style={{ width: (exact ? miraPct : rangePct) + "%" }}></i></div>
                </div>
                <div className="calc__bar-row">
                  <div><span>Klassischer Steuerberater</span><span>≈ {exact ? fmtEUR(priced.comparison) + " €" : fmtEUR(compRange[0]) + "–" + fmtEUR(compRange[1]) + " €"}</span></div>
                  <div className="calc__bar"><i className="other" style={{ width: "100%" }}></i></div>
                </div>
              </div>
            </div>
          }

          {/* STEP 6 — Kontakt erfassen (Register / per E-Mail) */}
          {step === 6 && mode === "form" &&
          <div>
              <div className="modal__step-label">{intent === "register" ? "Konto erstellen" : "Angebot per E-Mail"}</div>
              <h3 className="modal__q">{intent === "register" ? "Jetzt Zugang einrichten" : "Wohin dürfen wir Ihr Angebot senden?"}</h3>
              <p className="modal__hint">
                {intent === "register" ?
              "Wir legen Ihr Mirador-Portal an und senden Ihr Angebot direkt per E-Mail." :
              "Sie erhalten Ihr persönliches Festpreis-Angebot sofort per E-Mail zum Nachlesen."}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="field"><label>Name</label><input value={a.name} onChange={(e) => set("name", e.target.value)} placeholder="Vor- und Nachname" /></div>
                <div className="field"><label>Geschäftliche E-Mail</label><input type="email" value={a.email} onChange={(e) => set("email", e.target.value)} placeholder="name@firma.de" /></div>
                {intent === "register" &&
              <div className="field"><label>Name der Holding</label><input value={a.firma} onChange={(e) => set("firma", e.target.value)} placeholder="Beispiel Holding GmbH" /></div>
              }
              </div>
              <div className="form-summary">
                <span>Ihr Angebot</span>
                <b>{priceLabel}</b>
              </div>
              {sendErr &&
                <p style={{ margin: "14px 0 0", color: "#b4534a", fontSize: 14, fontWeight: 600 }}>{sendErr}</p>
              }
            </div>
          }

          {/* STEP 6 — Bestätigung */}
          {step === 6 && mode === "done" &&
          <div className="result-hero">
              <div className="ineligible__ic" style={{ background: "var(--accent-tint)", color: "var(--accent)" }}><Icon name="check" size={28} sw={2.4} /></div>
              <h3 className="modal__q" style={{ textAlign: "center" }}>
                {intent === "register" ? "Willkommen bei Mirador Tax!" : "Ihr Angebot ist unterwegs"}
              </h3>
              <p className="modal__hint" style={{ textAlign: "center", maxWidth: "42ch", margin: "0 auto" }}>
                {intent === "register" ?
              <>Wir richten Ihren Zugang ein. Chris aus dem Mirador-Tax-Team (chris@miradortax.com) hat Ihr Angebot ({priceLabel}) an <b>{a.email}</b> gesendet.</> :
              <>Chris aus dem Mirador-Tax-Team (chris@miradortax.com) hat Ihr Festpreis-Angebot ({priceLabel}) soeben an <b>{a.email}</b> gesendet. Bitte prüfen Sie auch Ihren Spam-Ordner.</>}
              </p>
            </div>
          }
        </div>

        {/* FOOTER controls */}
        <div className="modal__foot">
          {step < TOTAL &&
          <>
              {step > 0 && <button className="modal__back" onClick={back}>← Zurück</button>}
              <div style={{ flex: 1 }}></div>
              {step < 5 &&
            <button className="btn btn--accent" disabled={step === 0 && !a.rechtsform}
            style={{ opacity: step === 0 && !a.rechtsform ? .45 : 1 }} onClick={next}>Weiter <Arrow /></button>
            }
              {step === 5 && <button className="btn btn--accent" onClick={next}>Angebot anzeigen <Arrow /></button>}
            </>
          }

          {step === 6 && mode === "offer" &&
          <>
              <button className="modal__back" onClick={() => setStep(0)}>↺ Neu starten</button>
              <div style={{ flex: 1 }}></div>
              <button className="btn btn--accent" onClick={goRegister}>Registrieren <Arrow /></button>
            </>
          }
          {step === 6 && mode === "form" &&
          <>
              <button className="modal__back" onClick={() => setMode("offer")}>← Zurück</button>
              <div style={{ flex: 1 }}></div>
              <button className="btn btn--accent" disabled={!formValid || sending} style={{ opacity: formValid && !sending ? 1 : .45 }}
            onClick={() => {if (!formValid) return; intent === "register" ? setMode("done") : sendOfferEmail();}}>
                {sending ? "Senden …" : (intent === "register" ? "Konto erstellen" : "Angebot senden")} <Arrow />
              </button>
            </>
          }
          {step === 6 && mode === "done" &&
          <>
              <div style={{ flex: 1 }}></div>
              <button className="btn btn--accent" onClick={onClose}>Fertig</button>
            </>
          }
        </div>
      </div>
    </div>);

}

Object.assign(window, { Survey });