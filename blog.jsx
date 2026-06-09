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
    body: [
      "Für viele Geschäftsführer einer Holding ist das Steuerjahr vor allem eines: ein wiederkehrender Pflichtblock, der erledigt werden muss. 2026 ändern sich einige Rahmenbedingungen, die den Ablauf rund um Jahresabschluss, E-Bilanz und Offenlegung betreffen. Die gute Nachricht vorweg: Wer seine Buchhaltung laufend digital führt, ist von den meisten Neuerungen kaum betroffen.",
      { h: "1. Die E-Bilanz wird zum Standard – ohne Ausnahmen" },
      "Die elektronische Übermittlung der Bilanz an das Finanzamt ist für Kapitalgesellschaften längst Pflicht. 2026 verschärfen sich vor allem die formalen Anforderungen an die Taxonomie: Datensätze müssen vollständiger und strukturierter eingereicht werden. Für Holdings mit reiner Beteiligungsverwaltung bleibt der Aufwand überschaubar – entscheidend ist, dass die Konten sauber zugeordnet sind.",
      { h: "2. Offenlegung: kürzere Toleranz bei Fristversäumnissen" },
      "Der Jahresabschluss muss weiterhin beim Unternehmensregister offengelegt werden. Was sich ändert, ist die Konsequenz bei Verspätung: Das Bundesamt für Justiz geht zunehmend automatisiert vor, Ordnungsgeldverfahren werden schneller eingeleitet. Eine versäumte Frist ist damit kein Kavaliersdelikt mehr, sondern führt verlässlich zu Mehrkosten.",
      { callout: "Faustregel: Der Jahresabschluss einer kleinen Holding muss spätestens zwölf Monate nach dem Bilanzstichtag offengelegt sein. Wer den 31.12. als Stichtag hat, sollte die Offenlegung also bis Ende des Folgejahres abgeschlossen haben." },
      { h: "3. Mehr Automatisierung, weniger Papier" },
      "Der Trend der Finanzverwaltung geht klar in Richtung durchgängig digitaler Prozesse. Belege in Papierform, nachträgliche Korrekturen und manuelle Nachfragen werden teurer und langsamer. Holdings, die ihre Bankkonten automatisch anbinden und Belege digital archivieren, sparen nicht nur Zeit, sondern reduzieren auch die Fehlerquote spürbar.",
      { h: "Was Sie jetzt tun sollten" },
      { ul: [
        "Bilanzstichtag und Offenlegungsfrist im Kalender markieren – mit Vorlauf von mindestens vier Wochen.",
        "Kontenrahmen prüfen: Sind Beteiligungen, Darlehen und Rücklagen sauber getrennt?",
        "Belege fortlaufend digital erfassen statt einmal im Jahr zu sammeln.",
        "Frühzeitig klären, wer den Abschluss erstellt und übermittelt.",
      ] },
      "Wer diese Punkte berücksichtigt, kommt entspannt durch das Jahr 2026 – unabhängig davon, ob die Holding aktiv investiert oder nur Beteiligungen hält.",
    ],
  },

  "offenlegung-bundesanzeiger": {
    lede: "Die Offenlegung des Jahresabschlusses ist Pflicht – und mit der richtigen Vorbereitung in wenigen Schritten erledigt. So vermeiden Sie Bußgelder und unnötigen Stress.",
    body: [
      "Jede Kapitalgesellschaft – also auch jede Holding in der Rechtsform GmbH oder UG (haftungsbeschränkt) – muss ihren Jahresabschluss offenlegen. Seit der Umstellung läuft die Einreichung über das Unternehmensregister, die Veröffentlichung erfolgt im Bundesanzeiger. Klingt bürokratisch, ist aber gut planbar.",
      { h: "Schritt 1: Den richtigen Umfang bestimmen" },
      "Wie viel offengelegt werden muss, hängt von der Größenklasse ab. Die meisten Holdings gelten als „klein“ oder sogar „Kleinst“-Kapitalgesellschaft und profitieren von erheblichen Erleichterungen: Häufig genügt eine verkürzte Bilanz, eine Gewinn- und Verlustrechnung ist nicht erforderlich.",
      { ul: [
        "Kleinstkapitalgesellschaft: hinterlegte Bilanz, keine Veröffentlichungspflicht der GuV.",
        "Kleine Kapitalgesellschaft: verkürzte Bilanz und Anhang, keine GuV-Offenlegung.",
        "Mittelgroß / groß: deutlich umfangreichere Pflichten.",
      ] },
      { h: "Schritt 2: Daten vorbereiten" },
      "Für die Offenlegung benötigen Sie den festgestellten Jahresabschluss im richtigen Format. Wichtig ist, dass die Zahlen mit der eingereichten E-Bilanz übereinstimmen. Abweichungen führen zu Rückfragen und verzögern die Veröffentlichung.",
      { h: "Schritt 3: Frist im Blick behalten" },
      { callout: "Die Offenlegung muss spätestens zwölf Monate nach dem Abschlussstichtag erfolgen. Versäumnisse werden vom Bundesamt für Justiz mit Ordnungsgeld geahndet – beginnend bei 2.500 € und bei wiederholter Säumnis steigend." },
      "Genau hier entstehen die meisten vermeidbaren Kosten. Ein einfacher Erinnerungsservice oder ein Dienstleister, der die Frist automatisch überwacht, ist die günstigste Versicherung gegen Bußgelder.",
      { h: "Schritt 4: Einreichen und archivieren" },
      "Nach der Übermittlung erhalten Sie eine Bestätigung. Bewahren Sie diese zusammen mit dem offengelegten Abschluss auf – sie ist Ihr Nachweis, dass die Pflicht fristgerecht erfüllt wurde.",
      "Bei Mirador Tax ist die Offenlegung im Bundesanzeiger fester Bestandteil jedes Pakets. Sie müssen sich um Format, Frist und Übermittlung nicht selbst kümmern.",
    ],
  },

  "kosten-jahresabschluss": {
    lede: "Steuerberater rechnen klassisch nach Gebührenverordnung und Stunden ab – das macht Kosten schwer planbar. Wir rechnen ein typisches Beispiel durch und vergleichen es mit dem Festpreis-Modell.",
    body: [
      "„Was kostet mich der Jahresabschluss?“ ist eine der häufigsten Fragen von Holding-Geschäftsführern – und gleichzeitig die, auf die es selten eine klare Antwort gibt. Der Grund liegt im klassischen Abrechnungsmodell.",
      { h: "Die Gebührenverordnung als Black Box" },
      "Steuerberater rechnen in der Regel nach der Steuerberatervergütungsverordnung (StBVV) ab. Die Gebühr richtet sich nach einem „Gegenstandswert“ – häufig der Bilanzsumme – und einem Gebührensatz innerhalb eines Rahmens. Das Ergebnis: Zwei Holdings mit identischem Aufwand können sehr unterschiedliche Rechnungen erhalten, allein weil die Bilanzsumme höher ist.",
      { h: "Ein typisches Beispiel" },
      "Nehmen wir eine vermögensverwaltende Holding mit drei Beteiligungen, rund 20 Buchungen im Jahr und einer Bilanzsumme von 300.000 €. Bei klassischer Abrechnung kommen schnell folgende Posten zusammen:",
      { ul: [
        "Buchführung: laufende Gebühr nach Tabelle.",
        "Jahresabschluss (Bilanz + Anhang): Gebühr nach Bilanzsumme.",
        "Steuererklärungen (KSt, GewSt): jeweils eigener Gegenstandswert.",
        "Auslagen, Nebenkosten, ggf. Beratungsgespräche nach Zeit.",
      ] },
      { callout: "In der Praxis landen vergleichbare Holdings bei klassischer Abrechnung häufig im Bereich von 2.000 – 3.500 € pro Jahr – ohne dass im Vorfeld feststand, wo genau die Rechnung landet." },
      { h: "Festpreis: dieselbe Leistung, planbar kalkuliert" },
      "Im Festpreis-Modell wird nicht die Bilanzsumme „bestraft“, sondern die tatsächliche Komplexität bepreist: Anzahl der Beteiligungen, Transaktionen und die Bilanzsumme bestimmen das passende Paket. Für das obige Beispiel liegt der Festpreis deutlich darunter – und steht vor Beauftragung fest.",
      { quote: "Der größte Unterschied ist nicht nur der Preis, sondern die Planbarkeit. Sie wissen vorher, was es kostet." },
      { h: "Warum ist das günstiger möglich?" },
      "Der Hebel ist Automatisierung. Kontoauszüge werden automatisch eingelesen und kategorisiert, Belege digital archiviert, Standardprozesse software-gestützt abgewickelt. Die fachliche Prüfung und Erstellung erfolgt weiterhin durch erfahrene Steuerberater – nur der manuelle Aufwand drumherum entfällt.",
      "Unterm Strich gilt: Bei klar strukturierten Holdings ist der Festpreis fast immer die günstigere und transparentere Wahl. Den genauen Betrag für Ihre Struktur ermitteln Sie in zwei Minuten über unsere Angebotsanfrage.",
    ],
  },

  "beteiligungen-buchhaltung": {
    lede: "Beteiligungen sind das Herzstück jeder Holding – und gleichzeitig die häufigste Fehlerquelle in der Buchhaltung. Diese Punkte sollten Sie kennen.",
    body: [
      "Eine Holding lebt von ihren Beteiligungen. Umso wichtiger ist es, sie buchhalterisch sauber abzubilden. In der Praxis sehen wir immer wieder dieselben Stolperstellen – die meisten lassen sich mit etwas Systematik vermeiden.",
      { h: "Fehler 1: Anschaffungskosten unvollständig erfassen" },
      "Eine Beteiligung wird mit ihren Anschaffungskosten aktiviert. Dazu gehören nicht nur der Kaufpreis, sondern auch Anschaffungsnebenkosten wie Notar- oder Beratungskosten. Werden diese als laufender Aufwand verbucht, stimmt der Wertansatz nicht.",
      { h: "Fehler 2: Gesellschafterdarlehen und Einlagen vermischen" },
      "Gibt die Holding ihrer Tochter Geld, ist die Abgrenzung entscheidend: Handelt es sich um ein Darlehen (Forderung) oder um eine Einlage (Erhöhung der Beteiligung)? Beides hat unterschiedliche bilanzielle und steuerliche Folgen. Eine klare Dokumentation per Vertrag verhindert spätere Diskussionen mit dem Finanzamt.",
      { callout: "Tipp: Führen Sie für jede Beteiligung ein kleines „Dossier“ mit Kaufvertrag, Darlehensverträgen und Beschlüssen. So ist jede Buchung jederzeit nachvollziehbar." },
      { h: "Fehler 3: Ausschüttungen falsch zuordnen" },
      "Gewinnausschüttungen einer Tochter sind Beteiligungserträge – und unterliegen bei der Holding besonderen Regeln (Stichwort 95 %-Steuerbefreiung bei Kapitalgesellschaften). Werden sie falsch erfasst, verschenkt man entweder Steuervorteile oder riskiert eine Korrektur.",
      { h: "Fehler 4: Beteiligungen an Personengesellschaften ignorieren" },
      "Hält die Holding Anteile an einer KG oder GbR, gelten andere Regeln als bei Kapitalbeteiligungen. Die steuerliche Behandlung läuft über eine gesonderte und einheitliche Feststellung. Diese Beteiligungen werden in der Buchhaltung gerne übersehen – mit unangenehmen Folgen.",
      { h: "So bleibt es sauber" },
      { ul: [
        "Jede Beteiligung erhält ein eigenes Konto, keine Sammelkonten.",
        "Darlehen, Einlagen und Erträge strikt trennen.",
        "Verträge und Beschlüsse digital zur jeweiligen Buchung ablegen.",
        "Bei Personengesellschaften frühzeitig die Feststellungserklärung einplanen.",
      ] },
      "Wer von Anfang an strukturiert bucht, spart am Jahresende viel Zeit – und hat bei Rückfragen des Finanzamts immer eine saubere Antwort parat.",
    ],
  },

  "kontoauszug-import": {
    lede: "Ab sofort liest Mirador Tax Ihre Kontoauszüge automatisch ein und kategorisiert Transaktionen vor. Das spart spürbar Zeit bei der laufenden Buchhaltung.",
    body: [
      "Die laufende Buchhaltung ist für viele Holdings der lästigste Teil des Jahres: Auszüge zusammensuchen, Transaktionen zuordnen, Belege abgleichen. Mit dem neuen Kontoauszug-Import im Mirador-Portal wird genau dieser Schritt deutlich einfacher.",
      { h: "Was neu ist" },
      "Sie laden Ihre Kontoauszüge hoch – oder verbinden Ihr Konto direkt – und das Portal liest die Transaktionen automatisch ein. Jede Buchung wird einer Kategorie vorgeschlagen, sodass Sie nur noch prüfen statt manuell zu erfassen.",
      { ul: [
        "Automatisches Einlesen gängiger Bank- und Depotformate.",
        "Vorkategorisierung wiederkehrender Buchungen.",
        "Direkter Abgleich mit hochgeladenen Belegen.",
        "Transparente Übersicht über noch offene Positionen.",
      ] },
      { callout: "Im Schnitt reduziert die Vorkategorisierung den manuellen Aufwand für die laufende Buchhaltung um mehr als die Hälfte." },
      { h: "Warum das wichtig ist" },
      "Je sauberer und aktueller die Buchhaltung über das Jahr läuft, desto reibungsloser ist der Jahresabschluss. Statt einmal jährlich alles aufzuarbeiten, bleibt Ihre Holding kontinuierlich auf dem aktuellen Stand – ganz ohne Mehraufwand.",
      { h: "Verfügbarkeit" },
      "Die Funktion steht ab sofort in allen Paketen ohne Aufpreis zur Verfügung. Bestandskunden finden den Import direkt im Portal unter „Buchhaltung“.",
    ],
  },

  "steuervorteile-holding": {
    lede: "Eine vermögensverwaltende Holding kann erhebliche Steuervorteile bieten – aber nur, wenn die Struktur zum Ziel passt. Ein Überblick über Chancen und Pflichten.",
    body: [
      "Die vermögensverwaltende Holding ist ein beliebtes Gestaltungsmodell – häufig als „Spardose“ für Gewinne aus operativen Gesellschaften. Doch wann lohnt sie sich wirklich, und welche Pflichten kommen damit auf Sie zu?",
      { h: "Der zentrale Vorteil: günstige Thesaurierung" },
      "Schüttet eine Tochter-Kapitalgesellschaft Gewinne an die Holding aus, sind diese auf Ebene der Holding zu rund 95 % steuerfrei. Effektiv bleiben damit etwa 1,5 % Steuerbelastung auf die Dividende. Das ist deutlich weniger als bei einer Ausschüttung direkt an eine Privatperson – ideal, wenn Gewinne reinvestiert statt entnommen werden sollen.",
      { callout: "Wichtig: Der Steuervorteil entsteht durch das Belassen der Gewinne in der Struktur. Wer das Geld kurzfristig privat braucht, profitiert kaum – dann fällt die Besteuerung bei der finalen Ausschüttung ohnehin an." },
      { h: "Weitere Vorteile" },
      { ul: [
        "Verkauf von Beteiligungen: Veräußerungsgewinne sind ebenfalls zu rund 95 % steuerfrei.",
        "Bündelung: Mehrere Beteiligungen lassen sich zentral und übersichtlich verwalten.",
        "Reinvestition: Freigewordenes Kapital kann ohne hohe Vorabbesteuerung neu angelegt werden.",
      ] },
      { h: "Die Kehrseite: Pflichten und laufende Kosten" },
      "Eine Holding ist eine eigene Kapitalgesellschaft – mit allen Pflichten. Dazu gehören laufende Buchhaltung, Jahresabschluss, E-Bilanz, Offenlegung und Steuererklärungen. Diese Pflichten bestehen unabhängig davon, wie aktiv die Holding ist.",
      { quote: "Eine Holding rechnet sich dann, wenn die Steuerersparnis die laufenden Kosten der Struktur klar übersteigt." },
      { h: "Für wen lohnt es sich?" },
      "Grundsätzlich profitieren vor allem Gesellschafter, die Gewinne langfristig reinvestieren oder Beteiligungen halten und ausbauen möchten. Wer dagegen jeden Euro sofort privat entnimmt, hat von der Struktur wenig. Eine individuelle Prüfung ist immer sinnvoll.",
      "Wenn die Struktur passt, sollten die laufenden Pflichten so günstig und automatisiert wie möglich erledigt werden – damit der Steuervorteil nicht von hohen Beratungskosten aufgezehrt wird. Genau dafür gibt es Mirador Tax.",
    ],
  },
};

function ArticleBlock({ b }) {
  if (typeof b === "string") return <p>{b}</p>;
  if (b.h) return <h2 className="article__h2">{b.h}</h2>;
  if (b.ul) return <ul className="article__ul">{b.ul.map((li, i) => <li key={i}>{li}</li>)}</ul>;
  if (b.callout) return <div className="article__callout"><Icon name="check" size={18} sw={2.4} /><span>{b.callout}</span></div>;
  if (b.quote) return <blockquote className="article__quote">{b.quote}</blockquote>;
  return null;
}

function BlogPostPage({ onSurvey, priceFrom }) {
  const slug = (typeof window !== "undefined" && window.POST_SLUG) || "";
  const idx = POSTS.findIndex((p) => p.slug === slug);
  const post = POSTS[idx] || POSTS[0];
  const data = (typeof window !== "undefined" && window.POST_HTML && window.POST_HTML[post.slug]) || POST_BODIES[post.slug] || { lede: post.d, body: [] };
  const tint = POST_TINTS[(idx < 0 ? 0 : idx) % POST_TINTS.length];
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="article">
        <div className="wrap wrap--article">
          <a className="article__back textlink" href="Blog.html"><Icon name="arrow" size={14} sw={2} style={{ transform: "rotate(180deg)" }} /> Zurück zum Blog</a>
          <span className="article__tag" style={{ background: tint }}>{post.tag}</span>
          <h1 className="article__title">{post.t}</h1>
          <p className="article__lede">{data.lede}</p>
          <div className="article__meta">
            <span>{post.date}</span>
            <span className="article__dot">·</span>
            <span>{post.read} Lesezeit</span>
            <span className="article__dot">·</span>
            <span>{BLOG_AUTHOR}</span>
          </div>
        </div>
        <div className="article__cover" style={{ backgroundColor: tint, backgroundImage: "url(" + postImg(post.img, 1600) + ")" }}></div>
        <div className="wrap wrap--article">
          {typeof data.body === "string"
            ? <div className="article__body" dangerouslySetInnerHTML={{ __html: data.body }}></div>
            : <div className="article__body">{data.body.map((b, i) => <ArticleBlock key={i} b={b} />)}</div>}

          <div className="article__disclaimer">
            Dieser Beitrag dient der allgemeinen Information und stellt keine individuelle steuerliche Beratung dar.
            Mirador Tax ist keine Steuerkanzlei; Vorbehaltsaufgaben werden von Partner-Steuerberatern erbracht.
          </div>
        </div>
      </article>

      <section className="section section--tight" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <div className="shead reveal"><div className="eyebrow">Weiterlesen</div><h2 className="h2">Weitere Beiträge</h2></div>
          <div className="posts">
            {related.map((p, i) =>
              <a key={p.slug} className="post" href={"blog-" + p.slug + ".html"}>
                <div className="post__thumb" style={{ backgroundColor: POST_TINTS[POSTS.indexOf(p) % POST_TINTS.length], backgroundImage: "url(" + postImg(p.img, 800) + ")" }}>
                  <span className="post__tag">{p.tag}</span>
                </div>
                <div className="post__body">
                  <h3 className="post__t">{p.t}</h3>
                  <p className="post__d">{p.d}</p>
                  <div className="post__meta">{p.date} · {p.read} Lesezeit</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      <CtaBanner onSurvey={onSurvey} priceFrom={priceFrom} />
    </>
  );
}

Object.assign(window, { BlogPostPage });
