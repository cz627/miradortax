/* app.jsx — assembles the page + Tweaks for whole-page exploration */
const {
  useState: useStateA,
  useEffect: useEffectA
} = React;
const ACCENTS = {
  "#2f6b4f": {
    tint: "#dfe9e2",
    soft: "#cfe2d6",
    name: "Tannengrün"
  },
  "#2a4fd0": {
    tint: "#e6ebfa",
    soft: "#cdd7f5",
    name: "Blau"
  },
  "#1b2747": {
    tint: "#e3e6ef",
    soft: "#c8cfdf",
    name: "Marine"
  },
  "#6f7155": {
    tint: "#e8e7db",
    soft: "#dad9cc",
    name: "Olive"
  }
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "split",
  "accent": "#2f6b4f",
  "surface": "cards",
  "shape": "round",
  "baseFont": 17
} /*EDITMODE-END*/;
function FloatingConsult() {
  const avatars = ["https://randomuser.me/api/portraits/men/52.jpg", "https://randomuser.me/api/portraits/men/41.jpg", "assets/expert-christopher.png"];
  const href = "https://calendar.notion.so/meet/christopher-vd1ezx1lps/cw4uci4o40";
  return /*#__PURE__*/React.createElement("a", {
    className: "fconsult",
    href: href,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Expertengespr\xE4ch buchen"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fconsult__avatars"
  }, avatars.map((a, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: a,
    alt: "",
    className: "fconsult__ava"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "fconsult__text"
  }, "Expertengespr\xE4ch buchen"));
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
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
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
    document.querySelectorAll("[data-logo]").forEach(img => {
      img.src = dark ? "assets/logo-light.png" : "assets/logo-dark.png";
    });
  }, [t]);
  const priceFrom = "499";
  const page = typeof window !== "undefined" && window.PAGE || "home";
  function renderPage() {
    switch (page) {
      case "leistungen":
        return /*#__PURE__*/React.createElement(LeistungenPage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "ablauf":
        return /*#__PURE__*/React.createElement(AblaufPage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "kunden":
        return /*#__PURE__*/React.createElement(KundenPage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "preise":
        return /*#__PURE__*/React.createElement(PreisePage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "blog":
        return /*#__PURE__*/React.createElement(BlogPage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "empfehlung":
        return /*#__PURE__*/React.createElement(EmpfehlungPage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "blogpost":
        return /*#__PURE__*/React.createElement(BlogPostPage, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        });
      case "kontakt":
        return /*#__PURE__*/React.createElement(KontaktPage, null);
      case "impressum":
        return /*#__PURE__*/React.createElement(ImpressumPage, null);
      case "datenschutz":
        return /*#__PURE__*/React.createElement(DatenschutzPage, null);
      case "agb":
        return /*#__PURE__*/React.createElement(AGBPage, null);
      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        }), /*#__PURE__*/React.createElement(Logos, null), /*#__PURE__*/React.createElement(Leistungen, null), /*#__PURE__*/React.createElement(Ablauf, null), /*#__PURE__*/React.createElement(Rechner, {
          onSurvey: openSurvey
        }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(CtaBanner, {
          onSurvey: openSurvey,
          priceFrom: priceFrom
        }));
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    onSurvey: openSurvey
  }), renderPage(), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(FloatingConsult, null), /*#__PURE__*/React.createElement(Survey, {
    open: surveyOpen,
    onClose: () => setSurveyOpen(false)
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Stil"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Akzentfarbe",
    value: t.accent,
    options: Object.keys(ACCENTS),
    onChange: v => setTweak("accent", v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Fl\xE4chen",
    value: t.surface,
    options: ["cards", "flat"],
    onChange: v => setTweak("surface", v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Ecken",
    value: t.shape,
    options: ["round", "sharp"],
    onChange: v => setTweak("shape", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Typografie"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Grundschrift",
    value: t.baseFont,
    min: 15,
    max: 19,
    step: 1,
    unit: "px",
    onChange: v => setTweak("baseFont", v)
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));