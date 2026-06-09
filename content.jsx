/* content.jsx — shared helpers, icons, portal mockup, copy */
const { useState, useEffect, useRef } = React;

/* ---- minimal line-icon set (standard UI glyphs) ---- */
const ICONS = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M20 6L9 17l-5-5",
  plus: "M12 5v14M5 12h14",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  book: "M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5z M18 3v16",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5",
  upload: "M12 16V4M7 9l5-5 5 5M5 20h14",
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  lock: "M6 11V8a6 6 0 1112 0v3M5 11h14v9H5z",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
  clock: "M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z",
  euro: "M16 8a5 5 0 00-8 1m0 6a5 5 0 008 1M4 10h7M4 14h6",
  building: "M4 21V5l8-2 8 2v16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18",
  sealcheck: "M21 12a9 9 0 11-18 0 9 9 0 0118 0M8.4 12l2.4 2.4 4.8-4.9",
  star: "M12 4l2.4 5.8 6.2.5-4.7 4.1 1.4 6.1L12 17.2 6.5 20.5l1.4-6.1-4.7-4.1 6.2-.5z",
  usercheck: "M15.5 21a6.5 6.5 0 00-13 0M9 11.5a4 4 0 100-8 4 4 0 000 8M15 13l2 2 4.5-4.5",
  shieldcheck: "M12 3l7 3v5c0 4.6-3.1 7.8-7 9-3.9-1.2-7-4.4-7-9V6l7-3zM8.8 12l2.2 2.2 4.3-4.3",
  layers: "M12 3l9 5-9 5-9-5 9-5M3 13l9 5 9-5M3 17l9 5 9-5",
  chevron: "M6 9l6 6 6-6",
  info: "M12 16v-5M12 7.5h.01M12 21a9 9 0 100-18 9 9 0 000 18z",
  gift: "M20 12v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8M2 8h20v4H2zM12 21V8M12 8S10.5 3 7.5 4.5 9 8 12 8M12 8s1.5-5 4.5-3.5S15 8 12 8",
  handshake: "M11 17l2 2a2 2 0 003-3M14 14l2.5 2.5a2 2 0 003-3l-5-5-3 1-3-3-4 4M3 12l4-4M9 14l-2 2a1.5 1.5 0 01-2-2l2-2",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M6 6l12 12M18 6L6 18",
  users: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M22 21v-2a4 4 0 00-3-3.9M16 3.1A4 4 0 0116 11",
};
function Icon({ name, size = 18, sw = 1.8, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {ICONS[name].split("M").filter(Boolean).map((d, i) => <path key={i} d={"M" + d} />)}
    </svg>
  );
}
const Arrow = ({ size = 16 }) => <Icon name="arrow" size={size} sw={2} style={{}} />;

/* ---- info tooltip / popover (hover on desktop, tap on touch) ---- */
function InfoTip({ text, label = "Mehr Informationen" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return (
    <span className={"infotip" + (open ? " is-open" : "")} ref={ref}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="infotip__btn" aria-label={label} aria-expanded={open}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((o) => !o); }}>
        <Icon name="info" size={15} sw={2} />
      </button>
      <span className="infotip__pop" role="tooltip" onClick={(e) => e.stopPropagation()}>{text}</span>
    </span>
  );
}

/* ---- placeholder image (striped + mono label) ---- */
function Ph({ label, style, className = "" }) {
  return (
    <div className={"ph " + className} style={style}>
      <span className="ph__tag">{label}</span>
    </div>
  );
}

/* ---- fake Mirador Tax portal dashboard ---- */
function PortalMockup({ accent }) {
  const nav = [
    { t: "Dashboard", ic: "chart" },
    { t: "Buchhaltung", ic: "book" },
    { t: "Jahresabschluss", ic: "doc", active: true },
    { t: "Offenlegung", ic: "upload" },
    { t: "Steuererklärung", ic: "receipt" },
  ];
  const steps = [
    { t: "Belege & Kontoauszüge", d: "Automatisch importiert", pct: "100%", done: true },
    { t: "Buchhaltung 2024", d: "Vorkontiert & geprüft", pct: "100%", done: true },
    { t: "Jahresabschluss", d: "In Bearbeitung durch Mirador", pct: "60%", active: true },
    { t: "Offenlegung Bundesanzeiger", d: "Wartet auf Freigabe", pct: "—" },
  ];
  return (
    <div className="mock">
      <div className="mock__bar">
        <span className="mock__dot"></span><span className="mock__dot"></span><span className="mock__dot"></span>
        <span className="mock__url"><Icon name="lock" size={12} sw={2} /> app.miradortax.com</span>
      </div>
      <div className="mock__body">
        <aside className="mock__side">
          <div className="mock__brand"><img src="assets/icon-dark.png" alt="" />Mirador</div>
          {nav.map((n) => (
            <div key={n.t} className={"mock__navitem" + (n.active ? " is-active" : "")}>
              <Icon name={n.ic} size={16} className="ic" /> {n.t}
            </div>
          ))}
        </aside>
        <div className="mock__main">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <div className="mock__h">Geschäftsjahr 2024</div>
              <div className="mock__sub">Holding Beispiel GmbH · HRB 12345</div>
            </div>
            <span className="mock__badge"><Icon name="clock" size={12} sw={2.2} /> Frist 31.07.</span>
          </div>
          <div className="mock__steps">
            {steps.map((s) => (
              <div key={s.t} className={"mock__step" + (s.done ? " done" : "") + (s.active ? " active" : "")}>
                <span className="mock__check"><Icon name={s.done ? "check" : s.active ? "bolt" : "lock"} size={12} sw={2.4} /></span>
                <div className="mock__step-main">
                  <div className="mock__step-t">{s.t}</div>
                  <div className="mock__step-d">{s.d}</div>
                </div>
                <span className="pct">{s.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- scroll reveal hook ---- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

Object.assign(window, { Icon, Arrow, InfoTip, Ph, PortalMockup, useReveal });
