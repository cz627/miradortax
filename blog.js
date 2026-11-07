/* blog.jsx — full blog articles + single-post page (Mirador Tax) */

/* Author shown on every article */
const BLOG_AUTHOR = "Mirador Tax Redaktion";

/* Article bodies keyed by post slug. Block shapes:
   "string"               -> paragraph
   { h: "..." }           -> H2 heading
   { ul: [...] }          -> bullet list
   { callout: "..." }     -> highlighted note box
   { quote: "..." }       -> pull quote
*/
const POST_BODIES = {
  "holding-struktur-2026": {
    lede: "Mit dem Jahreswechsel treten für Holdinggesellschaften mehrere Änderungen in Kraft – von der elektronischen Übermittlung bis zu den Offenlegungsfristen. Wir fassen zusammen, worauf Geschäftsführer jetzt achten sollten.",
    body: ["Für viele Geschäftsführer einer Holding ist das Steuerjahr vor allem eines: ein wiederkehrender Pflichtblock, der erledigt werden muss. 2026 ändern sich einige Rahmenbedingungen, die den Ablauf rund um Jahresabschluss, E-Bilanz und Offenlegung betreffen. Die gute Nachricht vorweg: Wer seine Buchhaltung laufend digital führt, ist von den meisten Neuerungen kaum betroffen.", {
      h: "1. Die E-Bilanz wird zum Standard – ohne Ausnahmen"
    }, "Die elektronische Übermittlung der Bilanz an das Finanzamt ist für Kapitalgesellschaften längst Pflicht. 2026 verschärfen sich vor allem die formalen Anforderungen an die Taxonomie: Datensätze müssen vollständiger und strukturierter eingereicht werden. Für Holdings mit reiner Beteiligungsverwaltung bleibt der Aufwand überschaubar – entscheidend ist, dass die Konten sauber zugeordnet sind.", {
      h: "2. Offenlegung: kürzere Toleranz bei Fristversäumnissen"
    }, "Der Jahresabschluss muss weiterhin beim Unternehmensregister offengelegt werden. Was sich ändert, ist die Konsequenz bei Verspätung: Das Bundesamt für Justiz geht zunehmend automatisiert vor, Ordnungsgeldverfahren werden schneller eingeleitet. Eine versäumte Frist ist damit kein Kavaliersdelikt mehr, sondern führt verlässlich zu Mehrkosten.", {
      callout: "Faustregel: Der Jahresabschluss einer kleinen Holding muss spätestens zwölf Monate nach dem Bilanzstichtag offengelegt sein. Wer den 31.12. als Stichtag hat, sollte die Offenlegung also bis Ende des Folgejahres abgeschlossen haben."
    }, {
      h: "3. Mehr Automatisierung, weniger Papier"
    }, "Der Trend der Finanzverwaltung geht klar in Richtung durchgängig digitaler Prozesse. Belege in Papierform, nachträgliche Korrekturen und manuelle Nachfragen werden teurer und langsamer. Holdings, die ihre Bankkonten automatisch anbinden und Belege digital archivieren, sparen nicht nur Zeit, sondern reduzieren auch die Fehlerquote spürbar.", {
      h: "Was Sie jetzt tun sollten"
    }, {
      ul: ["Bilanzstichtag und Offenlegungsfrist im Kalender markieren – mit Vorlauf von mindestens vier Wochen.", "Kontenrahmen prüfen: Sind Beteiligungen, Darlehen und Rücklagen sauber getrennt?", "Belege fortlaufend digital erfassen statt einmal im Jahr zu sammeln.", "Frühzeitig klären, wer den Abschluss erstellt und übermittelt."]
    }, "Wer diese Punkte berücksichtigt, kommt entspannt durch das Jahr 2026 – unabhängig davon, ob die Holding aktiv investiert oder nur Beteiligungen hält."]
  },
  "offenlegung-bundesanzeiger": {
    lede: "Wenn Sie die Offenlegung für Ihre Holding-UG vorbereiten, halten Sie zuerst das Geschäftsjahr und den Stand Ihres Abschlusses fest. Die Hinweise des Unternehmensregisters helfen Ihnen beim nächsten Schritt.",
    body: [{
      h: "Gesellschaft, Geschäftsjahr und Unterlagen zuordnen"
    }, "Halten Sie fest, zu welcher Gesellschaft und welchem Geschäftsjahr der Abschluss gehört. Ordnen Sie vorhandene Unterlagen zu und notieren Sie, welche Angaben noch fehlen. So können Sie bei der Vorbereitung gezielt klären, was noch offen ist.", {
      h: "Übermittlungsweg klären"
    }, "Halten Sie fest, wer die Übermittlung übernimmt und wo Sie den zugehörigen Beleg ablegen. Für Fragen zum Umfang, zum zuständigen Offenlegungsmedium und zur Übermittlung nutzen Sie die Hinweise des Unternehmensregisters."]
  },
  "kosten-jahresabschluss": {
    lede: "Welche Angaben braucht ein Angebot für Ihre Holding? Mit einer klaren Beschreibung Ihrer Struktur können Sie Preise und Leistungsumfang nachvollziehbar vergleichen.",
    body: ["Für ein Angebot zum Jahresabschluss Ihrer Holding sollten Sie zunächst festhalten, welche Arbeiten Sie selbst erledigen und welche Leistungen Sie zusätzlich beauftragen möchten.", {
      h: "Diese Angaben helfen bei der Preisermittlung"
    }, {
      ul: ["Anzahl der Beteiligungen und Art der Geschäftsvorfälle.", "Anzahl der Transaktionen und Bilanzsumme.", "Betroffenes Geschäftsjahr und Stand Ihrer Unterlagen.", "Besondere Vorgänge, die vor einem Angebot geklärt werden müssen."]
    }, {
      h: "Leistungsumfang vor dem Preisvergleich klären"
    }, "Halten Sie bei jedem Angebot fest, welche Leistungen enthalten sind, welche Angaben Sie bereitstellen müssen und welche zusätzlichen Kosten entstehen können. Ein Preisvergleich ist erst mit einem klar beschriebenen Umfang aussagekräftig.", {
      h: "Ihre Rolle bei Mirador Tax"
    }, "Sie erstellen Ihren Jahresabschluss selbst. Mirador Tax führt Sie Schritt für Schritt durch den Prozess. Sie prüfen und bestätigen Ihre Angaben und geben diese frei.", "Vorbehaltsaufgaben übernimmt auf Wunsch die unabhängige Partnerkanzlei Bauer & Weigl Steuerberater PartG mbB auf Grundlage eines separaten Mandats.", {
      h: "Preise für Ihre Holding ansehen"
    }, "Auf unserer Preisseite finden Sie den Angebotsrechner. Halten Sie dafür die Anzahl Ihrer Beteiligungen, die Transaktionen und die Bilanzsumme bereit. Klären Sie offene Fragen zum Umfang vor einer Beauftragung."]
  },
  "beteiligungen-buchhaltung": {
    lede: "Beteiligungen sind das Herzstück jeder Holding – und gleichzeitig die häufigste Fehlerquelle in der Buchhaltung. Diese Punkte sollten Sie kennen.",
    body: ["Eine Holding lebt von ihren Beteiligungen. Umso wichtiger ist es, sie buchhalterisch sauber abzubilden. In der Praxis sehen wir immer wieder dieselben Stolperstellen – die meisten lassen sich mit etwas Systematik vermeiden.", {
      h: "Fehler 1: Anschaffungskosten unvollständig erfassen"
    }, "Eine Beteiligung wird mit ihren Anschaffungskosten aktiviert. Dazu gehören nicht nur der Kaufpreis, sondern auch Anschaffungsnebenkosten wie Notar- oder Beratungskosten. Werden diese als laufender Aufwand verbucht, stimmt der Wertansatz nicht.", {
      h: "Fehler 2: Gesellschafterdarlehen und Einlagen vermischen"
    }, "Gibt die Holding ihrer Tochter Geld, ist die Abgrenzung entscheidend: Handelt es sich um ein Darlehen (Forderung) oder um eine Einlage (Erhöhung der Beteiligung)? Beides hat unterschiedliche bilanzielle und steuerliche Folgen. Eine klare Dokumentation per Vertrag verhindert spätere Diskussionen mit dem Finanzamt.", {
      callout: "Tipp: Führen Sie für jede Beteiligung ein kleines „Dossier“ mit Kaufvertrag, Darlehensverträgen und Beschlüssen. So ist jede Buchung jederzeit nachvollziehbar."
    }, {
      h: "Fehler 3: Ausschüttungen falsch zuordnen"
    }, "Gewinnausschüttungen einer Tochter sind Beteiligungserträge – und unterliegen bei der Holding besonderen Regeln (Stichwort 95 %-Steuerbefreiung bei Kapitalgesellschaften). Werden sie falsch erfasst, verschenkt man entweder Steuervorteile oder riskiert eine Korrektur.", {
      h: "Fehler 4: Beteiligungen an Personengesellschaften ignorieren"
    }, "Hält die Holding Anteile an einer KG oder GbR, gelten andere Regeln als bei Kapitalbeteiligungen. Die steuerliche Behandlung läuft über eine gesonderte und einheitliche Feststellung. Diese Beteiligungen werden in der Buchhaltung gerne übersehen – mit unangenehmen Folgen.", {
      h: "So bleibt es sauber"
    }, {
      ul: ["Jede Beteiligung erhält ein eigenes Konto, keine Sammelkonten.", "Darlehen, Einlagen und Erträge strikt trennen.", "Verträge und Beschlüsse digital zur jeweiligen Buchung ablegen.", "Bei Personengesellschaften frühzeitig die Feststellungserklärung einplanen."]
    }, "Wer von Anfang an strukturiert bucht, spart am Jahresende viel Zeit – und hat bei Rückfragen des Finanzamts immer eine saubere Antwort parat."]
  },
  "kontoauszug-import": {
    lede: "Ab sofort liest Mirador Tax Ihre Kontoauszüge automatisch ein und kategorisiert Transaktionen vor. Das spart spürbar Zeit bei der laufenden Buchhaltung.",
    body: ["Die laufende Buchhaltung ist für viele Holdings der lästigste Teil des Jahres: Auszüge zusammensuchen, Transaktionen zuordnen, Belege abgleichen. Mit dem neuen Kontoauszug-Import im Mirador-Portal wird genau dieser Schritt deutlich einfacher.", {
      h: "Was neu ist"
    }, "Sie laden Ihre Kontoauszüge hoch – oder verbinden Ihr Konto direkt – und das Portal liest die Transaktionen automatisch ein. Jede Buchung wird einer Kategorie vorgeschlagen, sodass Sie nur noch prüfen statt manuell zu erfassen.", {
      ul: ["Automatisches Einlesen gängiger Bank- und Depotformate.", "Vorkategorisierung wiederkehrender Buchungen.", "Direkter Abgleich mit hochgeladenen Belegen.", "Transparente Übersicht über noch offene Positionen."]
    }, {
      callout: "Im Schnitt reduziert die Vorkategorisierung den manuellen Aufwand für die laufende Buchhaltung um mehr als die Hälfte."
    }, {
      h: "Warum das wichtig ist"
    }, "Je sauberer und aktueller die Buchhaltung über das Jahr läuft, desto reibungsloser ist der Jahresabschluss. Statt einmal jährlich alles aufzuarbeiten, bleibt Ihre Holding kontinuierlich auf dem aktuellen Stand – ganz ohne Mehraufwand.", {
      h: "Verfügbarkeit"
    }, "Die Funktion steht ab sofort in allen Paketen ohne Aufpreis zur Verfügung. Bestandskunden finden den Import direkt im Portal unter „Buchhaltung“."]
  },
  "steuervorteile-holding": {
    lede: "Eine vermögensverwaltende Holding kann erhebliche Steuervorteile bieten – aber nur, wenn die Struktur zum Ziel passt. Ein Überblick über Chancen und Pflichten.",
    body: ["Die vermögensverwaltende Holding ist ein beliebtes Gestaltungsmodell – häufig als „Spardose“ für Gewinne aus operativen Gesellschaften. Doch wann lohnt sie sich wirklich, und welche Pflichten kommen damit auf Sie zu?", {
      h: "Der zentrale Vorteil: günstige Thesaurierung"
    }, "Schüttet eine Tochter-Kapitalgesellschaft Gewinne an die Holding aus, sind diese auf Ebene der Holding zu rund 95 % steuerfrei. Effektiv bleiben damit etwa 1,5 % Steuerbelastung auf die Dividende. Das ist deutlich weniger als bei einer Ausschüttung direkt an eine Privatperson – ideal, wenn Gewinne reinvestiert statt entnommen werden sollen.", {
      callout: "Wichtig: Der Steuervorteil entsteht durch das Belassen der Gewinne in der Struktur. Wer das Geld kurzfristig privat braucht, profitiert kaum – dann fällt die Besteuerung bei der finalen Ausschüttung ohnehin an."
    }, {
      h: "Weitere Vorteile"
    }, {
      ul: ["Verkauf von Beteiligungen: Veräußerungsgewinne sind ebenfalls zu rund 95 % steuerfrei.", "Bündelung: Mehrere Beteiligungen lassen sich zentral und übersichtlich verwalten.", "Reinvestition: Freigewordenes Kapital kann ohne hohe Vorabbesteuerung neu angelegt werden."]
    }, {
      h: "Die Kehrseite: Pflichten und laufende Kosten"
    }, "Eine Holding ist eine eigene Kapitalgesellschaft – mit allen Pflichten. Dazu gehören laufende Buchhaltung, Jahresabschluss, E-Bilanz, Offenlegung und Steuererklärungen. Diese Pflichten bestehen unabhängig davon, wie aktiv die Holding ist.", {
      quote: "Eine Holding rechnet sich dann, wenn die Steuerersparnis die laufenden Kosten der Struktur klar übersteigt."
    }, {
      h: "Für wen lohnt es sich?"
    }, "Grundsätzlich profitieren vor allem Gesellschafter, die Gewinne langfristig reinvestieren oder Beteiligungen halten und ausbauen möchten. Wer dagegen jeden Euro sofort privat entnimmt, hat von der Struktur wenig. Eine individuelle Prüfung ist immer sinnvoll.", "Wenn die Struktur passt, sollten die laufenden Pflichten so günstig und automatisiert wie möglich erledigt werden – damit der Steuervorteil nicht von hohen Beratungskosten aufgezehrt wird. Genau dafür gibt es Mirador Tax."]
  }
};
function ArticleBlock({
  b
}) {
  if (typeof b === "string") return /*#__PURE__*/React.createElement("p", null, b);
  if (b.h) return /*#__PURE__*/React.createElement("h2", {
    className: "article__h2"
  }, b.h);
  if (b.ul) return /*#__PURE__*/React.createElement("ul", {
    className: "article__ul"
  }, b.ul.map((li, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, li)));
  if (b.callout) return /*#__PURE__*/React.createElement("div", {
    className: "article__callout"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    sw: 2.4
  }), /*#__PURE__*/React.createElement("span", null, b.callout));
  if (b.quote) return /*#__PURE__*/React.createElement("blockquote", {
    className: "article__quote"
  }, b.quote);
  return null;
}
function BlogPostPage({
  onSurvey,
  priceFrom
}) {
  const slug = typeof window !== "undefined" && window.POST_SLUG || "";
  const idx = POSTS.findIndex(p => p.slug === slug);
  const post = POSTS[idx] || POSTS[0];
  const data = typeof window !== "undefined" && window.POST_HTML && window.POST_HTML[post.slug] || POST_BODIES[post.slug] || {
    lede: post.d,
    body: []
  };
  const tint = POST_TINTS[(idx < 0 ? 0 : idx) % POST_TINTS.length];
  const related = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("article", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--article"
  }, /*#__PURE__*/React.createElement("a", {
    className: "article__back textlink",
    href: "Blog.html"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14,
    sw: 2,
    style: {
      transform: "rotate(180deg)"
    }
  }), " Zur\xFCck zum Blog"), /*#__PURE__*/React.createElement("span", {
    className: "article__tag",
    style: {
      background: tint
    }
  }, post.tag), /*#__PURE__*/React.createElement("h1", {
    className: "article__title"
  }, post.t), /*#__PURE__*/React.createElement("p", {
    className: "article__lede"
  }, data.lede), /*#__PURE__*/React.createElement("div", {
    className: "article__meta"
  }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", {
    className: "article__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, post.read, " Lesezeit"), /*#__PURE__*/React.createElement("span", {
    className: "article__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, BLOG_AUTHOR))), /*#__PURE__*/React.createElement("div", {
    className: "article__cover",
    style: {
      backgroundColor: tint,
      backgroundImage: "url(" + postImg(post.img, 1600) + ")"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--article"
  }, typeof data.body === "string" ? /*#__PURE__*/React.createElement("div", {
    className: "article__body",
    dangerouslySetInnerHTML: {
      __html: data.body
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "article__body"
  }, data.body.map((b, i) => /*#__PURE__*/React.createElement(ArticleBlock, {
    key: i,
    b: b
  }))), slug === "offenlegung-bundesanzeiger" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "https://www.unternehmensregister.de/de/so-gehts/uebermitteln"
  }, "\xDCbermittlungshinweise des Unternehmensregisters")), /*#__PURE__*/React.createElement("p", null, "Wenn Ihr Abschluss noch in Vorbereitung ist, hilft Ihnen die Checkliste beim Sortieren Ihrer Unterlagen. Mit Mirador Tax erstellen Sie Ihren Abschluss selbst. F\xFCr professionelle Leistungen k\xF6nnen Sie die unabh\xE4ngige Partnerkanzlei separat beauftragen."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "Ablauf.html#abschlussvorbereitung"
  }, "Checkliste zur Abschlussvorbereitung f\xFCr Ihre Holding-UG"))), slug === "kosten-jahresabschluss" && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "textlink",
    href: "Preise.html"
  }, "Preise und Angebotsrechner f\xFCr Ihre Holding")), /*#__PURE__*/React.createElement("div", {
    className: "article__disclaimer"
  }, "Dieser Beitrag dient der allgemeinen Information und stellt keine individuelle steuerliche Beratung dar. Mirador Tax ist keine Steuerkanzlei; Vorbehaltsaufgaben werden von Partner-Steuerberatern erbracht."))), /*#__PURE__*/React.createElement("section", {
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
  }, "Weiterlesen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Weitere Beitr\xE4ge")), /*#__PURE__*/React.createElement("div", {
    className: "posts"
  }, related.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    className: "post",
    href: "blog-" + p.slug + ".html"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post__thumb",
    style: {
      backgroundColor: POST_TINTS[POSTS.indexOf(p) % POST_TINTS.length],
      backgroundImage: "url(" + postImg(p.img, 800) + ")"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "post__tag"
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    className: "post__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "post__t"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "post__d"
  }, p.d), /*#__PURE__*/React.createElement("div", {
    className: "post__meta"
  }, p.date, " \xB7 ", p.read, " Lesezeit"))))))), /*#__PURE__*/React.createElement(CtaBanner, {
    onSurvey: onSurvey,
    priceFrom: priceFrom
  }));
}
Object.assign(window, {
  BlogPostPage
});