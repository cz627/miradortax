/* referral.jsx — Empfehlungsprogramm (Referral) page */

const REF_STEPS = [
  { n: "SCHRITT 01", t: "Empfehlen", d: "Teilen Sie Mirador Tax mit einer Holding aus Ihrem Netzwerk – am Besten verbinden Sie uns mit der Person via E-Mail." },
  { n: "SCHRITT 02", t: "Abschließen", d: "Die empfohlene Holding meldet sich an und durchläuft den Prozess vollständig mit uns – vom Onboarding bis zum fertigen Jahresabschluss." },
  { n: "SCHRITT 03", t: "Belohnt werden", d: "Sobald der Prozess abgeschlossen ist, schreiben wir Ihnen 250 € gut. Partner honorieren wir pro erfolgreich vermittelter Holding – ganz ohne Obergrenze." },
];

const REF_ELIG = [
  "Die empfohlene Holding ist Neukundin bei Mirador Tax.",
  "Sie verbinden uns direkt oder teilen uns den Namen der empfohlenen Holding vor Registrierung mit.",
  "Die Holding schließt Onboarding und ersten Jahresabschluss-Prozess vollständig mit Mirador Tax ab.",
  "Danach wird der Rabatt von 250 € der empfehlenden Person bzw. Holding gutgeschrieben.",
  "Mehrere Empfehlungen sind möglich – jede zählt einzeln.",
  "Auszahlung bzw. Gutschrift erfolgt nach Abschluss.",
];

function EmpfehlungPage({ onSurvey, priceFrom }) {
  return (
    <>
      <PageHero eyebrow="Empfehlungsprogramm"
        title={<>Holding-Steuern einfacher<br />machen – gemeinsam.</>}
        lede="Empfehlen Sie Mirador Tax weiter und werden Sie belohnt. Für Kund:innen, die jemanden kennen – und für Partner, die Holdings einen echten Mehrwert bieten möchten." />

      {/* Reward band */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="ref-reward reveal">
            <div className="ref-reward__big">250 €<small>pro erfolgreicher Empfehlung</small></div>
            <div className="ref-reward__text">
              <h3>Ein Rabatt, der sich für beide Seiten lohnt</h3>
              <p>Sie kennen eine Holding, die noch zu viel für ihren Jahresabschluss zahlt? Empfehlen Sie Mirador Tax – und sichern Sie sich 250 € Rabatt, sobald die empfohlene Holding den Prozess vollständig mit uns abgeschlossen hat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--tight" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="shead reveal">
            <div className="eyebrow">So funktioniert's</div>
            <h2 className="h2">In drei Schritten zur Empfehlung</h2>
            <p className="lede">Unkompliziert, transparent und ohne Aufwand – für Sie und die empfohlene Holding.</p>
          </div>
          <div className="ref-steps">
            {REF_STEPS.map((s) =>
              <div key={s.t} className="ref-step reveal">
                <div className="ref-step__n">{s.n}</div>
                <div className="ref-step__t">{s.t}</div>
                <div className="ref-step__d">{s.d}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Two audiences */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="shead reveal">
            <div className="eyebrow">Für wen</div>
            <h2 className="h2">Zwei Wege, eine Empfehlung</h2>
            <p className="lede">Ob Sie selbst Kund:in sind oder Holdings beruflich begleiten – Sie profitieren von jeder erfolgreichen Empfehlung.</p>
          </div>
          <div className="ref-aud">
            <div className="ref-card ref-card--accent reveal">
              <div className="ref-card__ic"><Icon name="gift" size={24} sw={1.8} /></div>
              <h3 className="ref-card__t">Für Kund:innen</h3>
              <p className="ref-card__d">Sie nutzen Mirador Tax bereits und kennen eine weitere Holding, der wir helfen können? Geben Sie die Empfehlung weiter.</p>
              <ul className="ref-card__list">
                <li><Icon name="check" size={16} sw={2.4} /> 250 € Rabatt auf Ihre nächste Rechnung</li>
                <li><Icon name="check" size={16} sw={2.4} /> Beliebig viele Empfehlungen möglich</li>
                <li><Icon name="check" size={16} sw={2.4} /> Gutschrift nach Abschluss der empfohlenen Holding</li>
              </ul>
              <button className="btn btn--accent btn--lg btn--block" onClick={onSurvey}>Jetzt empfehlen <Arrow /></button>
            </div>
            <div className="ref-card reveal">
              <div className="ref-card__ic"><Icon name="handshake" size={24} sw={1.8} /></div>
              <h3 className="ref-card__t">Für Partner</h3>
              <p className="ref-card__d">Berater:innen, Anwält:innen, Steuerprofis, Fractional CFOs oder Software-Anbieter: Empfehlen Sie Holdings eine bessere Lösung – und profitieren Sie als Partner.</p>
              <ul className="ref-card__list">
                <li><Icon name="check" size={16} sw={2.4} /> Honorierung pro vermittelter Holding</li>
                <li><Icon name="check" size={16} sw={2.4} /> Persönlicher Ansprechpartner & Material</li>
                <li><Icon name="check" size={16} sw={2.4} /> Individuelle Partnerkonditionen</li>
              </ul>
              <a className="btn btn--ghost btn--lg btn--block" href="Kontakt.html">Partner werden <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section section--tight" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="shead reveal">
            <div className="eyebrow">Teilnahmebedingungen</div>
            <h2 className="h2">Wann der Rabatt gilt</h2>
            <p className="lede">Damit Ihre Empfehlung zählt, gelten ein paar einfache Voraussetzungen.</p>
          </div>
          <ul className="ref-elig reveal">
            {REF_ELIG.map((e) =>
              <li key={e}><Icon name="check" size={17} sw={2.4} /> {e}</li>
            )}
          </ul>
          <p className="plans__note" style={{ marginTop: 26 }}>Es gelten die vollständigen Teilnahmebedingungen des Empfehlungsprogramms. Fragen? <a className="textlink" href="Kontakt.html">Sprechen Sie mit uns <Arrow size={14} /></a></p>
        </div>
      </section>

      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

Object.assign(window, { EmpfehlungPage });
