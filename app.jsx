/* app.jsx — assembles the page + Tweaks for whole-page exploration */
const { useState: useStateA, useEffect: useEffectA } = React;

const ACCENTS = {
  "#2f6b4f": { tint: "#dfe9e2", soft: "#cfe2d6", name: "Tannengrün" },
  "#2a4fd0": { tint: "#e6ebfa", soft: "#cdd7f5", name: "Blau" },
  "#1b2747": { tint: "#e3e6ef", soft: "#c8cfdf", name: "Marine" },
  "#6f7155": { tint: "#e8e7db", soft: "#dad9cc", name: "Olive" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "split",
  "accent": "#2f6b4f",
  "surface": "cards",
  "shape": "round",
  "baseFont": 17
}/*EDITMODE-END*/;

function FloatingConsult() {
  const avatars = [
    "https://randomuser.me/api/portraits/men/52.jpg",
    "https://randomuser.me/api/portraits/men/41.jpg",
    "assets/expert-christopher.png",
  ];
  const href = "https://calendar.notion.so/meet/christopher-vd1ezx1lps/cw4uci4o40";
  return (
    <a className="fconsult" href={href} target="_blank" rel="noopener" aria-label="Produkt-Demo buchen">
      <span className="fconsult__avatars">
        {avatars.map((a, i) => <img key={i} src={a} alt="" className="fconsult__ava" />)}
      </span>
      <span className="fconsult__text">Produkt-Demo buchen</span>
    </a>
  );
}

// mailto has no success/failure callback. Only offer help if the page stays active.
function MailtoFallback() {
  const [visible, setVisible] = useStateA(false);
  const [copyStatus, setCopyStatus] = useStateA("");

  useEffectA(() => {
    let timer;
    function cancel() {
      window.clearTimeout(timer);
      setVisible(false);
    }
    function onVisibilityChange() {
      if (document.visibilityState === "hidden") cancel();
    }
    function onClick(event) {
      const link = event.target.closest && event.target.closest('a[href^="mailto:"]');
      if (!link || event.defaultPrevented || event.button !== 0 ||
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
          link.getAttribute("href").split("?")[0] !== "mailto:chris@miradortax.com") return;
      cancel();
      setCopyStatus("");
      // Keep native navigation; blur/tab switching cancels this best-effort fallback.
      timer = window.setTimeout(() => {
        if (document.visibilityState === "visible" && document.hasFocus()) setVisible(true);
      }, 1800);
    }
    document.addEventListener("click", onClick);
    window.addEventListener("blur", cancel);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("click", onClick);
      window.removeEventListener("blur", cancel);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("chris@miradortax.com");
      setCopyStatus("E-Mail-Adresse kopiert.");
    } catch {
      setCopyStatus("Bitte kopieren Sie die Adresse manuell: chris@miradortax.com");
    }
  }

  if (!visible) return null;
  return (
    <aside className="email-fallback" aria-label="Hilfe zum E-Mail-Link">
      <button type="button" className="email-fallback__close" onClick={() => setVisible(false)} aria-label="Schließen">×</button>
      <p role="status">Hat sich kein E-Mail-Programm geöffnet? Kopieren Sie die Adresse und fügen Sie sie in Ihrem E-Mail-Dienst ein.</p>
      <p className="email-fallback__address">chris@miradortax.com</p>
      <button type="button" className="btn btn--ghost" onClick={copyEmail}>E-Mail-Adresse kopieren</button>
      <p role="status" aria-live="polite">{copyStatus}</p>
    </aside>
  );
}

// Example workflow for a holding UG: same step-card pattern as the Ablauf section.
function HoldingAnnualClose() {
  const steps = [
    { t: "Daten eingeben", d: "Sie geben die Daten Ihrer Holding in Mirador Tax ein." },
    { t: "Abschluss vorbereiten", d: "Die Software strukturiert Ihre Angaben und unterstützt Sie bei der Vorbereitung des Jahresabschlusses." },
    { t: "Prüfen & freigeben", d: "Sie prüfen die Ergebnisse, bestätigen Ihre Angaben und geben den Abschluss frei." }];

  return (
    <section className="section section--tight holding-close" aria-labelledby="holding-close-title">
      <div className="wrap">
        <div className="shead reveal">
          <div className="eyebrow">Beispiel Holding-UG</div>
          <h2 id="holding-close-title" className="h2">Jahresabschluss für Ihre Holding-UG</h2>
          <p className="lede">Hält Ihre UG Anteile an einem operativen Unternehmen und hat sie wenige Bankbewegungen? So läuft die Vorbereitung des Jahresabschlusses mit Mirador Tax am Beispiel einer solchen Holding ab.</p>
        </div>
        <ol className="steps holding-close__steps">
          {steps.map((s, i) =>
          <li key={s.t} className="step reveal" style={{ transitionDelay: i * 80 + "ms" }}>
              <div className="step__n" aria-hidden="true">{i + 1}</div>
              <div className="step__t">{s.t}</div>
              <div className="step__d">{s.d}</div>
            </li>
          )}
        </ol>
        <div className="ablauf__control reveal">
          <Icon name="usercheck" size={26} sw={1.7} />
          <p><b>Partnerkanzlei:</b> Für professionelle Leistungen, die ein eigenes Mandat erfordern, können Sie die unabhängige Partnerkanzlei Bauer &amp; Weigl Steuerberater PartG mbB separat beauftragen.</p>
        </div>
        <div className="holding-close__cta reveal">
          <a className="btn btn--accent" href="/Kontakt.html">Kontakt zur Eignung Ihrer Holding-UG</a>
        </div>
      </div>
    </section>);

}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [surveyOpen, setSurveyOpen] = useStateA(false);
  const openSurvey = () => setSurveyOpen(true);
  useReveal();

  // After the React page has rendered, honor a #hash in the URL (e.g. Ablauf.html#wechsel).
  // The anchor target doesn't exist when the browser first parses the hash, so we scroll once mounted.
  useEffectA(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    let tries = 0;
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (tries++ < 25) {
        setTimeout(go, 100);
      }
    };
    setTimeout(go, 180);
  }, []);

  // apply tweaks to <html>
  useEffectA(() => {
    const root = document.documentElement;
    root.setAttribute("data-hero", t.hero);
    root.setAttribute("data-surface", t.surface);
    root.setAttribute("data-shape", t.shape);
    const acc = ACCENTS[t.accent] || ACCENTS["#2f6b4f"];
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-tint", acc.tint);
    root.style.setProperty("--accent-soft", acc.soft);
    document.body.style.fontSize = t.baseFont + "px";
    // swap logos for dark hero
    const dark = t.hero === "dark";
    document.querySelectorAll("[data-logo]").forEach((img) => {
      img.src = dark ? "assets/logo-light.png" : "assets/logo-dark.png";
    });
  }, [t]);

  const priceFrom = "499";
  const page = (typeof window !== "undefined" && window.PAGE) || "home";

  function renderPage() {
    switch (page) {
      case "leistungen": return <LeistungenPage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "ablauf": return <AblaufPage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "kunden": return <KundenPage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "preise": return <PreisePage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "blog": return <BlogPage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "empfehlung": return <EmpfehlungPage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "blogpost": return <BlogPostPage onSurvey={openSurvey} priceFrom={priceFrom} />;
      case "kontakt": return <KontaktPage />;
      case "impressum": return <ImpressumPage />;
      case "datenschutz": return <DatenschutzPage />;
      case "agb": return <AGBPage />;
      default: return (
        <>
          <Hero onSurvey={openSurvey} priceFrom={priceFrom} />
          <HoldingAnnualClose />
          <Logos />
          <Leistungen />
          <Ablauf />
          <Rechner onSurvey={openSurvey} />
          <Testimonials />
          <AiProof />
          <FAQ />
          <CtaBanner onSurvey={openSurvey} priceFrom={priceFrom} />
        </>
      );
    }
  }

  return (
    <>
      <Nav onSurvey={openSurvey} />
      {renderPage()}
      <Footer />
      <MailtoFallback />
      <Survey open={surveyOpen} onClose={() => setSurveyOpen(false)} />

      <TweaksPanel>
        <TweakSection label="Stil" />
        <TweakColor label="Akzentfarbe" value={t.accent}
          options={Object.keys(ACCENTS)}
          onChange={(v) => setTweak("accent", v)} />
        <TweakRadio label="Flächen" value={t.surface}
          options={["cards", "flat"]}
          onChange={(v) => setTweak("surface", v)} />
        <TweakRadio label="Ecken" value={t.shape}
          options={["round", "sharp"]}
          onChange={(v) => setTweak("shape", v)} />
        <TweakSection label="Typografie" />
        <TweakSlider label="Grundschrift" value={t.baseFont} min={15} max={19} step={1} unit="px"
          onChange={(v) => setTweak("baseFont", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
