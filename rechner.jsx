/* rechner.jsx — Preis-/Ersparnis-Rechner */
const { useState: useStateR } = React;

function Rechner({ onSurvey }) {
  const [bet, setBet] = useStateR(2);
  const [tx, setTx] = useStateR(20);
  const [bil, setBil] = useStateR(100000);
  const [sel, setSel] = useStateR({});
  const [showDetails, setShowDetails] = useStateR(false);
  const toggleSel = (k) => setSel((s) => ({ ...s, [k]: !s[k] }));

  const r = computePrice({ beteiligungen: bet, transaktionen: tx, bilanzsumme: bil, sel });

  // "ab 1.499 €" nur noch bei gesprengtem Tarifrahmen (Unlimited) – nicht mehr bei Zusatzpaketen
  const maxedOut = bet >= 26 || tx >= 100 || bil >= 5000000;
  const showFrom = maxedOut || !r.eligible;

  const miraPct = r.yearly ? Math.round(r.yearly / r.comparison * 100) : 60;
  const savings = r.yearly ? r.comparison - r.yearly : null;

  const compRange = [Math.round(r.low * 2.4 / 50) * 50, Math.round(r.high * 2.4 / 50) * 50];
  const saveRange = [Math.round((compRange[0] - r.low) / 100) * 100, Math.round((compRange[1] - r.high) / 100) * 100];
  const rangePct = Math.round((r.low + r.high) / 2 / ((compRange[0] + compRange[1]) / 2) * 100);

  const bilLabel = bil >= 5000000 ? "5,0 Mio. €+" :
  bil >= 1000000 ? (bil / 1000000).toFixed(1).replace(".", ",") + " Mio. €" : fmtEUR(bil) + " €";

  const fill = (v, min, max) => {
    const p = Math.max(0, Math.min(100, (v - min) / (max - min) * 100));
    return { background: `linear-gradient(to right, var(--accent) ${p}%, rgba(20,18,10,.16) ${p}%)` };
  };

  const totalAddons = Object.values(sel).filter(Boolean).length;
  const showBreakdown = r.surchargeItems.length > 0 || r.addonItems.length > 0 || r.discountItems.length > 0;

  return (
    <section className="section" id="preise">
      <div className="wrap">
        <div className="shead shead--center reveal" style={{ marginBottom: 36 }}>
          <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Preisrechner</div>
          <h2 className="h2">Was kostet Ihre Holding bei Mirador?</h2>
          <p className="lede">Berechnen Sie Ihren Festpreis – und sehen Sie, wie viel Sie gegenüber einem klassischen Steuerberater sparen.</p>
        </div>

        <div className="calc reveal">
          <div className="calc__panel">
            <div className="calc__intro">Konfigurieren Sie Ihre Holding</div>
            <div className="calc__field">
              <label>Anzahl Beteiligungen <b>{bet > 25 ? "25+" : bet}</b></label>
              <input type="range" min="1" max="26" value={bet} style={fill(bet, 1, 26)} onChange={(e) => setBet(+e.target.value)} />
            </div>
            <div className="calc__field">
              <label>Transaktionen pro Jahr <b>{tx >= 100 ? "100+" : fmtEUR(tx)}</b></label>
              <input type="range" min="0" max="100" step="5" value={tx} style={fill(tx, 0, 100)} onChange={(e) => setTx(+e.target.value)} />
            </div>
            <div className="calc__field">
              <label>Bilanzsumme <b>{bilLabel}</b></label>
              <input type="range" min="1000" max="5000000" step="1000" value={bil} style={fill(bil, 1000, 5000000)} onChange={(e) => setBil(+e.target.value)} />
            </div>
            <div className="calc__field calc__field--last">
              <label>Zusatzoptionen <span className="calc__hint">optional</span></label>
              <div className={"calc__addons" + (showDetails ? " open" : "")}>
                <button type="button" className="calc__addons-head" onClick={() => setShowDetails((s) => !s)}>
                  <Icon name="layers" size={16} sw={1.8} />
                  Alle Zusatzoptionen
                  <span className="calc__addons-sub">{totalAddons} ausgewählt</span>
                  <span className="calc__addons-chev"><Icon name="chevron" size={16} sw={2} style={{ transition: "transform .25s ease", transform: showDetails ? "rotate(180deg)" : "none" }} /></span>
                </button>
                <div className="calc__addons-body">
                  {ZUSATZ_OPTIONS.map((o) => {
                    const on = !!sel[o.key];
                    return (
                      <div key={o.key} className={"calc__check" + (on ? " on" : "") + (o.kind === "discount" ? " calc__check--gift" : "")}>
                        <button type="button" className="calc__check-hit" aria-pressed={on} onClick={() => toggleSel(o.key)}>
                          <span className="calc__check-box"><Icon name={o.kind === "discount" ? "gift" : "check"} size={13} sw={3} /></span>
                          <span className="calc__check-main"><span>{o.t}</span><span className="calc__check-price">{o.priceLabel}</span></span>
                        </button>
                        <InfoTip text={o.info} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="calc__result">
            {showFrom ?
            <>
                <div className="calc__plan-badge calc__plan-badge--ind"><Icon name="spark" size={13} sw={2} /> Individuelles Angebot · Unlimited</div>
                <div className="calc__price">ab 1.499 €<span> / Jahr</span></div>
                <div className="calc__monthly">ab <b>{fmtEUR(Math.round(1499 / 12))} € / Monat</b> · individuell kalkuliert</div>
                <div className="calc__save">
                  <b>≈ {fmtEUR(saveRange[0])}–{fmtEUR(saveRange[1])} €</b>
                  <span>typische Ersparnis pro Jahr ggü.<br />klassischer Steuerberatung*</span>
                </div>
                <div className="calc__bars">
                  <div className="calc__bar-row">
                    <div><span>Mirador Tax</span><span>{fmtEUR(r.low)}–{fmtEUR(r.high)} €</span></div>
                    <div className="calc__bar"><i className="mira" style={{ width: rangePct + "%" }}></i></div>
                  </div>
                  <div className="calc__bar-row">
                    <div><span>Klassische Steuerberatung</span><span>≈ {fmtEUR(compRange[0])}–{fmtEUR(compRange[1])} €</span></div>
                    <div className="calc__bar"><i className="other" style={{ width: "100%" }}></i></div>
                  </div>
                </div>
                <a className="btn btn--accent btn--block btn--lg" href="mailto:angebot@miradortax.de?subject=Angebotsanfrage%20Holding">Persönliches Angebot anfragen <Arrow /></a>
                <p className="calc__fineprint">Antwort innerhalb eines Werktags · ohne Pauschal-Grenzen</p>
              </> :

            <>
                <div className="calc__plan-badge"><Icon name="check" size={13} sw={3} /> {r.plan}</div>
                <div className="calc__price">{fmtEUR(r.yearly)} €<span> / Jahr</span></div>
                <div className="calc__monthly">entspricht ca. <b>{fmtEUR(r.monthly)} € / Monat</b>{!showBreakdown && " · alles inklusive"}</div>

                {showBreakdown &&
              <div className="calc__breakdown">
                    <div className="calc__bd-row"><span>{r.plan}-Paket</span><b>{fmtEUR(r.basePrice)} €</b></div>
                    {r.surchargeItems.map((s) => <div key={s.t} className="calc__bd-row"><span>{s.t}</span><b>+{fmtEUR(s.v)} €</b></div>)}
                    {r.addonItems.filter((a) => !a.once).map((a) => <div key={a.key} className="calc__bd-row"><span>{a.t}</span><b>+{fmtEUR(a.price)} €</b></div>)}
                    {r.addonItems.filter((a) => a.once).map((a) => <div key={a.key} className="calc__bd-row calc__bd-row--once"><span>{a.t} <em>einmalig</em></span><b>+{fmtEUR(a.price)} €</b></div>)}
                    {r.discountItems.map((d) => <div key={d.t} className="calc__bd-row calc__bd-row--discount"><span>{d.t} <em>einmalig</em></span><b>−{fmtEUR(d.v)} €</b></div>)}
                  </div>
              }

                {sel.imm &&
              <div className="calc__notice">
                    <Icon name="building" size={17} sw={2} />
                    <span><b>Immobilien noch nicht voll automatisiert.</b> Sie können Mirador Tax bereits nutzen, der Ablauf ist aber noch nicht durchgängig automatisiert und ggf. etwas teurer. Wir erstellen Ihnen gern ein <a href="Kontakt.html">Sonderangebot</a>.</span>
                  </div>
              }

                <div className="calc__save">
                  <b>≈ {fmtEUR(savings)} €</b>
                  <span>Ersparnis pro Jahr ggü.<br />klassischer Steuerberatung*</span>
                </div>
                <div className="calc__bars">
                  <div className="calc__bar-row">
                    <div><span>Mirador Tax</span><span>{fmtEUR(r.yearly)} €</span></div>
                    <div className="calc__bar"><i className="mira" style={{ width: miraPct + "%" }}></i></div>
                  </div>
                  <div className="calc__bar-row">
                    <div><span>Klassische Steuerberatung</span><span>≈ {fmtEUR(r.comparison)} €</span></div>
                    <div className="calc__bar"><i className="other" style={{ width: "100%" }}></i></div>
                  </div>
                </div>

                {(r.onceTotal > 0 || r.discountOnce > 0) &&
                  <p className="calc__once-note">
                    {r.onceTotal > 0
                      ? "zzgl. " + fmtEUR(r.onceTotal) + " € einmalig (Einrichtung / Eröffnungsbilanz" + (r.discountOnce > 0 ? ", abzgl. Empfehlungs-Rabatt" : "") + ")"
                      : "inkl. " + fmtEUR(r.discountOnce) + " € Empfehlungs-Rabatt (einmalig)"}
                  </p>
                }

                <button className="btn btn--accent btn--block btn--lg" onClick={onSurvey}>Unverbindliches Angebot anfordern <Arrow /></button>
                <p className="calc__fineprint">Unverbindlich · keine Stundenabrechnung · keine versteckten Kosten</p>
              </>
            }
          </div>
        </div>
        <p className="calc__footnote reveal">* Referenzwert auf Basis der Mittelgebühren nach StBVV für eine vergleichbare Holding. Mirador Tax ist eine Software zur Selbsterstellung und ersetzt keine individuelle Steuerberatung.</p>
      </div>
    </section>);

}

Object.assign(window, { Rechner });
