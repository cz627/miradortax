/* legal.jsx — Impressum, Datenschutz, AGB (Inhalte vom Kunden) */

function LegalPage({ title, stand, children }) {
  return (
    <section className="legal">
      <div className="wrap legal__wrap">
        <h1 className="legal__title">{title}</h1>
        {stand && <div className="legal__stand">{stand}</div>}
        <div className="legal__body">{children}</div>
      </div>
    </section>
  );
}
const LH = ({ children }) => <h2 className="legal__h">{children}</h2>;
const LS = ({ children }) => <h3 className="legal__sh">{children}</h3>;
const LP = ({ children }) => <p className="legal__p">{children}</p>;
const LUL = ({ items }) => <ul className="legal__ul">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;

/* ---------------- IMPRESSUM ---------------- */
function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <LP>Angaben gemäß § 5 TMG, § 18 Abs. 2 MStV</LP>

      <LH>Anbieter und Verantwortlicher</LH>
      <LP>Verantwortlich i. S. v. § 18 Abs. 2 MStV:</LP>
      <LP>
        Mirador Tax<br />
        Ruescher Invest UG (haftungsbeschränkt)<br />
        Holunderweg 17<br />
        21220 Seevetal, Deutschland
      </LP>
      <LP>
        Handelsregister: Amtsgericht Lüneburg, HRB 211349<br />
        Geschäftsführer: Marlon Rüscher<br />
        EUID: DEP2507<br />
        Steuernummer: 50/202/00286
      </LP>
      <LP>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Marlon Rüscher, Anschrift wie oben.</LP>

      <LH>Kontakt</LH>
      <LP>
        E‑Mail: chris@miradortax.com<br />
        Web: www.miradortax.de
      </LP>

      <LH>Unternehmensgegenstand</LH>
      <LP>Gegenstand des Unternehmens ist die Bereitstellung eines Software-Portals (Mirador Tax) für Geschäftsführer von Holdinggesellschaften. Über dieses Portal können unternehmensbezogene Daten erfasst und in standardisierte Dokumente (z. B. Bilanz-Entwurf, GuV-Entwurf, Anhang-Entwurf) aufbereitet werden. Zudem unterstützt das Portal bei der organisatorischen Vorbereitung gesetzlicher Pflichten der Holding-UG (z. B. Offenlegung von Jahresabschlüssen, Einhaltung von Abgabefristen). Mirador Tax erbringt selbst keine steuerliche oder rechtliche Beratung und übernimmt keine steuerberatende Tätigkeit im Sinne des Steuerberatungsgesetzes. Das Unternehmen vermittelt bei Bedarf Kontakte zu externen Steuerberatern oder Wirtschaftsprüfern, ist jedoch an etwaigen Beratungsverträgen nicht beteiligt.</LP>

      <LH>Haftung für Inhalte</LH>
      <LP>Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</LP>
      <LP>Insbesondere werden bestimmte Dokumente und Auswertungen (wie z. B. Jahresabschlüsse) auf unserer Plattform automatisch auf Grundlage der vom Nutzer eingegebenen Daten erzeugt. Mirador Tax übernimmt keine Haftung für die sachliche Richtigkeit oder Vollständigkeit dieser nutzerseitig bereitgestellten Inhalte und der daraus automatisiert erstellten Dokumente. Die Verantwortung für die Überprüfung, Freigabe und fristgerechte Übermittlung dieser Inhalte an Behörden (etwa Finanzamt oder Bundesanzeiger) liegt ausschließlich beim Nutzer selbst.</LP>
      <LP>Bei Bekanntwerden von entsprechenden Rechtsverletzungen oder Fehlern werden wir diese Inhalte umgehend entfernen bzw. korrigieren.</LP>

      <LH>Haftung für Links</LH>
      <LP>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die externen Seiten wurden zum Zeitpunkt der Verlinkung nach bestem Wissen auf mögliche Rechtsverstöße überprüft – rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Sobald uns Rechtsverletzungen auf verlinkten Seiten bekannt werden, entfernen wir derartige Links umgehend.</LP>

      <LH>Urheberrecht</LH>
      <LP>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</LP>

      <LH>Alternative Streitbeilegung</LH>
      <LP>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: https://ec.europa.eu/consumers/odr.</LP>
      <LP>Wir sind grundsätzlich bereit (nicht verpflichtet), an einem außergerichtlichen Schlichtungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</LP>
    </LegalPage>
  );
}

/* ---------------- DATENSCHUTZ ---------------- */
function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" stand="Stand: 07.07.2026">
      <LH>1. Verantwortlicher</LH>
      <LP>1.1 Verantwortliche Stelle im Sinne des Datenschutzrechts (insbesondere DSGVO) ist:<br />
        Marlon Rüscher<br />
        Holunderweg 17, D-21220 Seevetal<br />
        E-Mail: marlon@miradortax.com</LP>

      <LH>2. Erfassung allgemeiner Informationen beim Besuch unserer Website</LH>
      <LP>2.1 Beim Zugriff auf unsere Webseite werden automatisch Informationen allgemeiner Natur erfasst (z. B. Browsertyp, Betriebssystem, IP-Adresse, Domainname Ihres Internet Service Providers).</LP>
      <LP>2.2 Diese Informationen sind technisch notwendig, um die von Ihnen angeforderten Inhalte korrekt bereitzustellen und fallen bei der Nutzung des Internets zwangsläufig an. Eine Zuordnung dieser Daten zu einer bestimmten Person findet nicht statt.</LP>

      <LH>3. Erhebung und Verarbeitung personenbezogener Daten</LH>
      <LP>Wir erheben personenbezogene Daten nur, wenn Sie uns diese von sich aus mitteilen – etwa bei Registrierung auf unserer Plattform, bei der Buchung unserer Dienstleistungen oder wenn Sie mit uns in Kontakt treten (z. B. per Kontaktformular oder E‑Mail). Folgende personenbezogene Daten können je nach Aktion erhoben werden:</LP>
      <LP><b>Registrierung auf der Plattform:</b> Name des Unternehmens und des Geschäftsführers, Anschrift, E‑Mail-Adresse, ggf. Telefonnummer (sofern freiwillig angegeben), sowie Zugangsdaten (Benutzername, Passwort). Diese Daten verwenden wir, um Ihr Nutzerkonto einzurichten und zu verwalten, sowie um Ihnen Zugang zu unseren Services zu ermöglichen.</LP>
      <LP><b>Nutzung der Plattform:</b> Alle geschäftlichen Daten, finanzielle Kennzahlen und Dokumente, die Sie in Mirador Tax eingeben oder hochladen (z. B. Buchhaltungsdaten, Belege, Jahresabschluss-Entwürfe), werden von uns gespeichert, um die Funktionen der Software zu erbringen. Wir behandeln diese Unternehmensdaten selbstverständlich vertraulich und nutzen sie ausschließlich zur Bereitstellung der vertraglichen Leistung.</LP>
      <LP><b>Kontaktaufnahme:</b> Wenn Sie per E‑Mail oder über ein Kontaktformular Anfragen an uns stellen, speichern und verwenden wir die von Ihnen gemachten Angaben (z. B. Name, E‑Mail-Adresse, Anfrageinhalt), um Ihre Anfrage zu bearbeiten und zu beantworten.</LP>
      <LP>Wir verwenden Ihre personenbezogenen Daten jeweils ausschließlich für den angegebenen Zweck und im Rahmen der gesetzlichen Bestimmungen. Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur in folgenden Fällen: (a) wenn dies zur Vertragserfüllung erforderlich ist (z. B. Übermittlung von Abschlussdaten an eine von Ihnen ausgewählte Steuerkanzlei), (b) wenn wir gesetzlich dazu verpflichtet sind, oder (c) falls Sie ausdrücklich eingewilligt haben. In allen anderen Fällen werden Ihre Daten nicht an Dritte weitergegeben.</LP>

      <LH>4. Cookies</LH>
      <LP>4.1 Unsere Webseite verwendet „Cookies“ – kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, um bestimmte Funktionen der Webseite zu ermöglichen oder zu verbessern.</LP>
      <LP>4.2 Sie können das Setzen von Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern. Allerdings kann dies zu Funktionseinschränkungen führen.</LP>
      <LP>4.3 Über Art und Zweck der eingesetzten Cookies werden Sie ggf. in unserem Cookie-Banner oder einer separaten Cookie-Richtlinie informiert.</LP>

      <LH>5. Rechtsgrundlage</LH>
      <LP>Wir verarbeiten personenbezogene Daten auf Grundlage der DSGVO. Je nach Art der Verarbeitung stützen wir uns auf unterschiedliche Rechtsgrundlagen:</LP>
      <LP><b>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):</b> Wenn die Verarbeitung Ihrer Daten für die Erfüllung eines Vertrags, dessen Vertragspartei Sie sind, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist (z. B. Datenverarbeitung im Rahmen der Nutzung der Mirador Tax Software oder bei Registrierung).</LP>
      <LP><b>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</b> Soweit Sie uns eine ausdrückliche Einwilligung zur Verarbeitung Ihrer Daten erteilt haben, verarbeiten wir die Daten im Umfang und zu den Zwecken, die in der Einwilligungserklärung genannt sind (z. B. Zusendung eines Newsletters oder das Setzen optionaler Analyse-/Marketing-Cookies). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (siehe Punkt 7.3 unten).</LP>
      <LP><b>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</b> Wir verarbeiten einige Daten, weil wir dazu gesetzlich verpflichtet sind – etwa aufgrund handels- und steuerrechtlicher Aufbewahrungspflichten. In solchen Fällen beschränkt sich die Verarbeitung auf das erforderliche Minimum.</LP>
      <LP><b>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):</b> Soweit erforderlich, verarbeiten wir Daten zur Wahrung berechtigter Interessen von uns oder Dritten. Dabei achten wir darauf, kein überwiegendes schutzwürdiges Interesse Ihrerseits entgegenstehen zu lassen. Ein berechtigtes Interesse liegt z. B. vor bei der Gewährleistung der IT-Sicherheit und des Betriebs unserer Website (z. B. Logfiles), bei der Verbesserung unserer Services oder zur Geltendmachung rechtlicher Ansprüche.</LP>

      <LH>6. Speicherdauer und Löschung</LH>
      <LP>Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist, bzw. wie es die vom Gesetzgeber vorgesehenen vielfältigen Aufbewahrungsfristen vorsehen. Konkret bedeutet das:</LP>
      <LP><b>Nutzungs- und Vertragsdaten:</b> Daten, die Sie im Rahmen der Registrierung und Nutzung der Plattform bereitstellen, speichern wir für die Dauer des Nutzungsvertrags. Nach Vertragsende werden Ihre Daten gelöscht oder gesperrt, sobald sie für die Abwicklung des Vertrags nicht mehr benötigt werden. Gesetzliche Aufbewahrungsfristen (z. B. 6 Jahre für geschäftliche Korrespondenz, 10 Jahre für steuerrelevante Unterlagen gemäß AO/HGB) bleiben unberührt – Daten, die darunter fallen, werden für die Dauer der Frist archiviert und dann gelöscht.</LP>
      <LP><b>Log- und technische Daten:</b> Server-Logdaten (siehe Punkt 2) werden aus Sicherheitsgründen (z. B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für kurze Zeit gespeichert und anschließend automatisch gelöscht. Standardmäßig werden solche Logfiles spätestens nach 7 Tagen anonymisiert oder gelöscht, sofern keine außergewöhnlichen Ereignisse vorliegen, die eine längere Speicherung erforderlich machen (z. B. ein Angriff auf unsere Systeme).</LP>
      <LP><b>Kontaktdaten bei Anfragen:</b> Angaben, die Sie uns im Rahmen von Kontaktanfragen geben, speichern wir so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist. Sobald Ihre Anfrage vollständig erledigt ist und keine weitere Notwendigkeit zur Speicherung besteht, werden die Daten gelöscht.</LP>
      <LP><b>Newsletter-Daten:</b> Wenn Sie sich für einen Newsletter angemeldet haben, speichern wir Ihre E‑Mail-Adresse und ggf. weitere freiwillige Angaben so lange, bis Sie Ihre Einwilligung widerrufen und sich vom Newsletter abmelden.</LP>
      <LP>Nach Ablauf der jeweiligen Speicherfristen werden die entsprechenden Daten routinemäßig gelöscht oder – falls eine Löschung nicht möglich ist – gesperrt.</LP>

      <LH>7. Betroffenenrechte</LH>
      <LP>7.1 Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.</LP>
      <LP>7.2 Sie haben das Recht auf Berichtigung, Löschung („Recht auf Vergessenwerden“), Einschränkung der Verarbeitung sowie Widerspruch gegen die Verarbeitung.</LP>
      <LP>7.3 Darüber hinaus können Sie Ihre Einwilligung zur Datenverarbeitung jederzeit mit Wirkung für die Zukunft widerrufen.</LP>
      <LP>7.4 Bitte wenden Sie sich in diesen Fällen an den unter Punkt 1.1 genannten Verantwortlichen.</LP>

      <LH>8. Datensicherheit</LH>
      <LP>Mirador Tax verwendet technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten vor zufälliger oder vorsätzlicher Manipulation, Verlust, Zerstörung oder dem unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Die Übertragung sensibler Informationen (z. B. Login-Daten) erfolgt verschlüsselt (SSL-/TLS-Verschlüsselung). Bitte beachten Sie, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E‑Mail) Sicherheitslücken aufweisen kann; ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</LP>

      <LH>9. Änderungen dieser Datenschutzerklärung</LH>
      <LP>Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren oder zu ändern, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen darin umzusetzen.</LP>
    </LegalPage>
  );
}

/* ---------------- AGB ---------------- */
function AGBPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen (AGB)" stand="Stand: 08.07.2026">
      <LH>1. Geltungsbereich</LH>
      <LP>1.1. Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die Sie mit der Ruescher Invest UG (haftungsbeschränkt), Holunderweg 17, 21220 Seevetal, Deutschland, eingetragen im Handelsregister des Amtsgerichts Lüneburg unter HRB 211349 (nachfolgend „Anbieter“ oder „Mirador Tax“), über die Webseite bzw. Online-Plattform Mirador Tax (miradortax.com / app.miradortax.com) abschließen.</LP>
      <LP>1.2. Nutzerkreis; Vertragspartner: Vertragspartner des Anbieters wird die jeweilige Gesellschaft (insbesondere Holding-UG (haftungsbeschränkt) oder GmbH) mit Sitz in Deutschland, vertreten durch ihre vertretungsberechtigten Personen (nachfolgend „Nutzer“). Mirador Tax richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB; eine Nutzung durch Verbraucher im Sinne des § 13 BGB ist ausgeschlossen. Die handelnde Person sichert bei Registrierung und Beauftragung zu, zur Vertretung der Gesellschaft berechtigt zu sein. Die Plattform und ihre Funktionen sind auf die Erfüllung deutscher steuerlicher und handelsrechtlicher Pflichten ausgelegt.</LP>
      <LP>1.3. Abweichende oder entgegenstehende Geschäftsbedingungen des Nutzers finden keine Anwendung, es sei denn, der Anbieter hat ihrer Geltung ausdrücklich schriftlich zugestimmt.</LP>

      <LH>2. Leistungen und Leistungsumfang</LH>
      <LP>2.1. Digitaler Service: Mirador Tax betreibt eine Online-Plattform als digitaler Technologiedienstleister. Über diese Plattform stellen wir Ihnen Software-Funktionen zur Verfügung, mit denen Sie Ihre unternehmensbezogenen Daten einfach erfassen, verwalten und für steuerrelevante Zwecke aufbereiten können. Insbesondere ermöglicht Mirador Tax die automatische Erstellung von Dokumenten – etwa Entwürfen von Jahresabschlüssen (Bilanz, GuV, Anhang) – auf Basis Ihrer Eingaben. Außerdem unterstützen wir Sie durch technische Funktionen bei der Vorbereitung der gesetzlichen Pflichten Ihrer Gesellschaft (z. B. Erinnerungen an Offenlegungspflichten und Fristen nach deutschem Recht).</LP>
      <LP>2.2. Keine Steuer- oder Rechtsberatung: Mirador Tax erbringt selbst keine Steuerberatung oder Rechtsberatung. Eine individuelle steuerliche oder rechtliche Beratung erfolgt – sofern von Ihnen gewünscht – ausschließlich durch eigenständige, unabhängige Steuerberater, Rechtsanwälte oder Wirtschaftsprüfer, mit denen Sie bei Bedarf separat einen Vertrag abschließen. Mirador Tax übernimmt keinerlei steuerberatende Tätigkeit im Sinne des Steuerberatungsgesetzes und gibt keine konkreten Handlungsempfehlungen für Einzelfälle. Sämtliche Informationen und Auswertungen auf der Plattform sind allgemeiner Natur und ersetzen keine professionelle Beratung.</LP>
      <LP>2.3. Vermittlung externer Berater: Verträge über steuerliche oder rechtliche Beratungs- und sonstige Vorbehaltsleistungen im Sinne des StBerG (z. B. fachliche Überprüfung, Erstellung von Steueranmeldungen wie der Kapitalertragsteuer-Anmeldung, Übermittlung von Steuererklärungen und E-Bilanzen an die Finanzverwaltung) kommen ausschließlich zwischen Ihnen und der jeweiligen externen Kanzlei zustande. Solche Leistungen werden als optionale Zusatzpakete angeboten und sind nicht Bestandteil des Leistungsumfangs des Anbieters; der Anbieter tritt insoweit lediglich als Vermittlungs- und Kommunikationsplattform auf. Wir sind an solchen Verträgen weder als Vertragspartei noch als Vertreter beteiligt. Nach Abschluss eines Nutzungsvertrags über unsere Plattform können Sie bei Bedarf Angebote von kooperierenden Steuerkanzleien einholen. Nehmen Sie ein solches Angebot an, kommt der Vertrag direkt zwischen Ihnen und der ausgewählten Kanzlei zustande. Mirador Tax übermittelt in diesem Fall Ihre Annahmeerklärung an den Berater und stellt technische Kommunikations- und Datenräume für den Austausch von Unterlagen bereit.</LP>
      <LP>2.4. Inhaltliche Eigenverantwortung des Nutzers: Alle inhaltlichen Angaben, die über die Mirador Tax Plattform verarbeitet werden (z. B. von Ihnen eingegebene Zahlen, Klassifizierungen von Geschäftsvorfällen, steuerliche Einordnungen), werden von Ihnen selbst eingegeben und von Ihnen final überprüft sowie freigegeben. Sie sind dafür verantwortlich, dass diese Angaben richtig, vollständig und aktuell sind. Der Anbieter schuldet nicht die inhaltliche Überprüfung oder Richtigkeit Ihrer Eingaben. Sie bleiben allein verantwortlich für die sachliche Korrektheit der Daten sowie für die fristgerechte Erstellung und Übermittlung Ihrer Steuererklärungen, Jahresabschlüsse oder sonstigen Meldungen an Behörden (z. B. Finanzamt oder Unternehmensregister). Mirador Tax stellt Ihnen lediglich die technischen Werkzeuge zur Verfügung und ersetzt weder einen Steuerberater noch einen Wirtschaftsprüfer.</LP>
      <LP>2.5. Hinweis auf externe Beratung: Wenn Sie individuelle Fragen zur steuerlichen oder rechtlichen Beurteilung Ihrer Situation haben, sollten Sie einen zugelassenen Steuerberater, Rechtsanwalt oder Wirtschaftsprüfer hinzuziehen. Gern unterstützen wir Sie auf Wunsch bei der Kontaktaufnahme zu einer geeigneten Kanzlei. Ein eventuelles Mandatsverhältnis kommt dabei ausschließlich zwischen Ihnen und der von Ihnen beauftragten Kanzlei zustande – nicht mit Mirador Tax.</LP>
      <LP>2.6. Support und Helpdesk: Der Anbieter stellt einen Support- und Helpdesk-Service für technische oder anwendungsbezogene Fragen zur Nutzung der Plattform bereit. Bei Problemen oder Fragen können Sie sich beispielsweise per E-Mail oder über bereitgestellte Support-Funktionen an uns wenden. Unser Support umfasst ausschließlich die Unterstützung bei der Nutzung der Plattform und stellt keine steuerliche oder rechtliche Beratung dar.</LP>
      <LP>2.7. Übermittlung und Einreichung: Soweit die Plattform eine technische Übermittlungsfunktion bereitstellt (z. B. Einreichung der Hinterlegung des Jahresabschlusses beim Unternehmensregister), erfolgt diese ausschließlich auf Ihre Veranlassung und nach Ihrer ausdrücklichen Freigabe als technische Datenübermittlung in Ihrem Namen und für Ihre Rechnung. Die Übermittlung von Steuererklärungen und E-Bilanzen an die Finanzverwaltung erfolgt entweder durch Sie selbst über eine Schnittstelle oder durch eine von Ihnen unmittelbar beauftragte oder bevollmächtigte Steuerkanzlei. Der Anbieter übermittelt keine Steuererklärungen oder E-Bilanzen im eigenen Namen an die Finanzverwaltung.</LP>

      <LH>3. Registrierung & Nutzerkonto</LH>
      <LP>3.1. Registrierung: Für die Nutzung der Plattform ist eine Registrierung erforderlich. Sie sind verpflichtet, alle im Registrierungsprozess abgefragten Angaben wahrheitsgemäß, genau und vollständig anzugeben und diese Daten bei Bedarf aktuell zu halten. Wir behalten uns vor, einen Nachweis über die Unternehmereigenschaft oder die Vertretungsberechtigung sowie weitere Informationen zur Verifizierung zu verlangen, bevor wir Ihr Konto freischalten.</LP>
      <LP>3.2. Nutzerkonto: Ihr Nutzerkonto ist personalisiert und nicht übertragbar. Zugangsdaten (insbesondere Ihr Passwort) sind vertraulich zu behandeln und vor dem Zugriff Dritter zu schützen. Sie tragen die Verantwortung für alle Handlungen, die unter Verwendung Ihrer Zugangsdaten bzw. über Ihr Nutzerkonto vorgenommen werden. Sollten Ihnen Anzeichen eines Missbrauchs Ihres Kontos bekannt werden, haben Sie uns umgehend zu informieren.</LP>

      <LH>4. Preise und Zahlungsbedingungen</LH>
      <LP>4.1. Preise: Sämtliche Preise für die Nutzung von Mirador Tax und optionale Zusatzmodule werden auf unserer Website ausgewiesen. Alle Preisangaben verstehen sich in Euro. Der Anbieter weist derzeit gemäß § 19 UStG (Kleinunternehmerregelung) keine Umsatzsteuer aus. Sollte die Kleinunternehmerregelung künftig keine Anwendung mehr finden, verstehen sich die ausgewiesenen Preise zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer; hierauf wird auf der Preisseite hingewiesen. Maßgeblich sind die zum Zeitpunkt der Beauftragung der jeweiligen Leistung ausgewiesenen Preise.</LP>
      <LP>4.2. Zahlungsweise: Als Zahlungsmethode wird ausschließlich Banküberweisung akzeptiert. Rechnungen sind, sofern nicht anders angegeben, binnen 14 Tagen ab Rechnungsdatum ohne Abzug zu bezahlen.</LP>
      <LP>4.3. Preisstruktur: Für die Nutzung der Plattform können einmalige und laufende Entgelte anfallen. Insbesondere wird eine einmalige Einrichtungsgebühr für die technische Ersteinrichtung Ihrer Gesellschaft auf der Plattform und die Freischaltung Ihres Zugangs erhoben. Darüber hinaus fällt pro Geschäftsjahr ein Nutzungsentgelt für die Nutzung der Plattform zur Erstellung Ihres Jahresabschlusses und Ihrer Steuererklärungen an. Optionale Zusatzmodule werden zu den auf der Preisseite ausgewiesenen Entgelten berechnet; mit der Beauftragung eines Zusatzmoduls erklären Sie sich mit dem jeweils ausgewiesenen Entgelt einverstanden. Leistungen unabhängiger Steuerkanzleien (Ziffer 2.3) werden von diesen unmittelbar mit Ihnen vereinbart und abgerechnet und sind nicht Bestandteil der Entgelte des Anbieters. Die konkreten aktuellen Entgelte und Leistungsumfänge ergeben sich aus der Preisseite unserer Website.</LP>
      <LP>4.4. Entstehung des Nutzungsentgelts: Das Nutzungsentgelt entsteht, sobald Sie die Dateneingabe im Portal vollständig durchgeführt, die Abschlussfragen beantwortet und den Vorgang durch Klick auf die Schaltfläche „Kostenpflichtig abschließen“ verbindlich abgeschlossen haben. Mit diesem Klick beauftragen Sie verbindlich und zahlungspflichtig die Nutzung des Mirador-Tax-Softwarepakets für das betreffende Geschäftsjahr zum ausgewiesenen Gesamtpreis. Die Plattform generiert auf Basis Ihrer eingegebenen und bestätigten Daten die Entwürfe Ihrer Jahresabschluss-Dokumente (insbesondere Jahresabschluss, E-Bilanz und Steuererklärungen) und stellt sie Ihnen zur Prüfung und Freigabe bereit. Vor dem Klick werden Sie im Portal ausdrücklich auf die Zahlungspflicht hingewiesen und bestätigen diese sowie die Geltung dieser AGB durch gesonderte Checkboxen. Auf die spätere Freigabe, Genehmigung oder Verwendung der generierten Entwürfe kommt es für die Entgeltpflicht nicht an; ebenso wenig entfällt das Entgelt, wenn Sie den Jahresabschluss anderweitig erstellen oder erstellen lassen oder von einer Weiterverwendung absehen.</LP>
      <LP>4.5. Vorleistung; Zurückbehaltung; Verzug: Die Generierung und Bereitstellung der Jahresabschluss-Dokumente für ein Geschäftsjahr erfolgt nach vollständigem Zahlungseingang des hierfür geschuldeten Nutzungsentgelts. Bis zur vollständigen Bezahlung fälliger Entgelte ist der Anbieter berechtigt, seine Leistungen zurückzubehalten oder den Zugang zu bestimmten Funktionen der Plattform zu sperren; bereits generierte und von Ihnen freigegebene Dokumente vergangener Geschäftsjahre bleiben hiervon unberührt. Gerät der Nutzer in Zahlungsverzug, ist der Anbieter nach Mahnung mit angemessener Nachfrist berechtigt, den Vertrag außerordentlich zu kündigen.</LP>
      <LP>4.6. Kostenfreiheit bis zur Beauftragung: Die Registrierung und die Nutzung der Plattform bis zum Klick auf „Kostenpflichtig abschließen“ sind unentgeltlich. Das Nutzungsentgelt entsteht ausschließlich mit der verbindlichen Beauftragung gemäß Ziffer 4.4.</LP>
      <LP>4.7. Aufrechnung; Zurückbehaltung: Der Nutzer kann gegen Forderungen des Anbieters nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen. Ein Zurückbehaltungsrecht steht dem Nutzer nur wegen Gegenansprüchen aus demselben Vertragsverhältnis zu.</LP>

      <LH>5. Bereitstellung der Leistungen; Verfügbarkeit und Weiterentwicklung</LH>
      <LP>5.1. Digitale Inhalte: Der Zugang zur Plattform wird nach Abschluss der Registrierung und Freischaltung Ihres Nutzerkontos bereitgestellt. Die Generierung und Bereitstellung der Jahresabschluss-Dokumente für ein Geschäftsjahr erfolgt nach verbindlicher Beauftragung (Ziffer 4.4) und vollständigem Zahlungseingang des Nutzungsentgelts (Ziffer 4.5). Die Dokumente werden Ihnen elektronisch über Ihr Nutzerkonto zur Prüfung und Freigabe bereitgestellt.</LP>
      <LP>5.2. Vermittlung von Beratungsangeboten: Nach Abschluss des Nutzungsvertrags über unsere Plattform erhalten Sie auf Wunsch unverbindliche Angebote von kooperierenden Steuerberatern oder Kanzleien. Entscheiden Sie sich, ein solches Angebot anzunehmen, kommt der entsprechende Vertrag ausschließlich zwischen Ihnen und dem ausgewählten Berater zustande. Mirador Tax hat auf die inhaltliche Ausgestaltung dieser Angebote keinen Einfluss.</LP>
      <LP>5.3. Rolle von Mirador bei Beratungsverträgen: Nehmen Sie ein Angebot eines externen Beraters an, leitet Mirador Tax Ihre Annahmeerklärung an den jeweiligen Berater weiter. Zudem stellen wir Ihnen und dem Berater für die Zusammenarbeit technische Kommunikationsmöglichkeiten und geschützte Datenräume auf unserer Plattform bereit. Mirador Tax übernimmt jedoch keine Verantwortung für die tatsächliche Durchführung oder Qualität der Beratungsleistungen und haftet nicht für etwaige Fehler der externen Berater.</LP>
      <LP>5.4. Verfügbarkeit: Der Anbieter ist um eine hohe Verfügbarkeit der Plattform bemüht. Ein Anspruch auf ununterbrochene Verfügbarkeit besteht nicht. Wartungsarbeiten werden, soweit möglich, vorab angekündigt und außerhalb üblicher Geschäftszeiten durchgeführt.</LP>
      <LP>5.5. Weiterentwicklung: Der Anbieter ist berechtigt, die Plattform weiterzuentwickeln, Funktionen zu ändern oder durch gleichwertige Funktionen zu ersetzen, soweit der vertraglich vereinbarte Leistungskern hierdurch nicht wesentlich beeinträchtigt wird. Änderungen, die der Anpassung an geänderte Rechtslagen, amtliche Formulare oder technische Schnittstellen dienen, gelten nicht als Leistungsänderung.</LP>
      <LP>5.6. Amtliche Formate: Die Plattform bildet die amtlichen Formulare, Taxonomien und technischen Schnittstellen (z. B. E-Bilanz-Taxonomie, ELSTER-Formate) in der jeweils zum Zeitpunkt der Dokumentgenerierung implementierten Fassung ab.</LP>

      <LH>6. Nutzungsrechte</LH>
      <LP>6.1. Nutzungsrecht an der Plattform: Der Anbieter räumt dem Nutzer für die Dauer des Nutzungsvertrags das einfache, nicht ausschließliche, nicht übertragbare und nicht unterlizenzierbare Recht ein, die Plattform für eigene Zwecke der Gesellschaft im vertraglich vereinbarten Umfang zu nutzen. Eine darüber hinausgehende Nutzung, insbesondere die Nutzung für Dritte oder die Erbringung von Dienstleistungen für Dritte mittels der Plattform, ist unzulässig.</LP>
      <LP>6.2. Rechte an Daten und Dokumenten: Sämtliche Rechte an den vom Nutzer eingegebenen Daten sowie an den auf deren Grundlage generierten Dokumenten (insbesondere Jahresabschlüsse, E-Bilanzen, Steuererklärungen) stehen dem Nutzer zu. Der Nutzer ist Ersteller dieser Dokumente; der Anbieter erwirbt an ihnen keine über die technische Verarbeitung und Speicherung hinausgehenden Rechte.</LP>
      <LP>6.3. Rechte des Anbieters: Alle Rechte an der Plattform, der zugrunde liegenden Software, den Datenbanken und den vom Anbieter bereitgestellten Inhalten verbleiben beim Anbieter bzw. seinen Lizenzgebern.</LP>

      <LH>7. Mitwirkungspflichten des Nutzers</LH>
      <LP>7.1. Mitwirkung: Der Nutzer wirkt an der Vertragsdurchführung mit, insbesondere durch vollständige, richtige und zeitnahe Dateneingabe, die Beantwortung der Abschlussfragen, die Prüfung und Freigabe der generierten Dokumente sowie die Beantwortung technischer Rückfragen des Anbieters.</LP>
      <LP>7.2. Folgen unterlassener Mitwirkung: Verzögerungen, die auf unterlassene, unvollständige oder verspätete Mitwirkung des Nutzers zurückzuführen sind, gehen nicht zu Lasten des Anbieters. Gesetzliche Abgabe-, Zahlungs- und Offenlegungsfristen der Gesellschaft bleiben von der Nutzung der Plattform unberührt und sind vom Nutzer eigenverantwortlich zu überwachen und einzuhalten; die Erinnerungsfunktionen der Plattform (Ziffer 2.1) sind eine unverbindliche Unterstützungsleistung.</LP>

      <LH>8. Datenschutz und Auftragsverarbeitung</LH>
      <LP>8.1. Datenschutz: Der Anbieter verarbeitet personenbezogene Daten im Einklang mit den anwendbaren Datenschutzvorschriften. Einzelheiten ergeben sich aus der Datenschutzerklärung unter https://miradortax.com/Datenschutz.html.</LP>
      <LP>8.2. Auftragsverarbeitung: Soweit der Anbieter personenbezogene Daten im Auftrag des Nutzers verarbeitet, gilt die Vereinbarung zur Auftragsverarbeitung gemäß Art. 28 DSGVO, die mit Abschluss des Nutzungsvertrags Vertragsbestandteil wird.</LP>
      <LP>8.3. Weitergabe an Steuerkanzleien: Eine Übermittlung von Daten und Dokumenten des Nutzers an eine vom Nutzer beauftragte Steuerkanzlei (Ziffer 2.3) erfolgt ausschließlich auf Grundlage der ausdrücklichen Einwilligung bzw. Weisung des Nutzers.</LP>

      <LH>9. Datenexport, Datenlöschung, Aufbewahrung</LH>
      <LP>9.1. Datenexport: Der Nutzer kann seine auf der Plattform gespeicherten Daten und die generierten Dokumente während der Vertragslaufzeit jederzeit in gängigen Formaten (insbesondere PDF, CSV sowie DATEV-kompatibler Buchungsexport) exportieren.</LP>
      <LP>9.2. Bereitstellung nach Vertragsende: Nach Beendigung des Nutzungsvertrags hält der Anbieter die Daten und Dokumente des Nutzers für einen Zeitraum von 90 Tagen zum Export bereit. Nach Ablauf dieses Zeitraums werden die Daten gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten des Anbieters entgegenstehen. Der Nutzer ist für die rechtzeitige Sicherung seiner Daten vor Ablauf des Bereitstellungszeitraums selbst verantwortlich; der Anbieter weist ihn bei Vertragsbeendigung in Textform auf den Ablauf hin.</LP>
      <LP>9.3. Keine revisionssichere Archivierung: Die Plattform dient nicht als revisionssicheres Archiv im Sinne der GoBD. Die Erfüllung der gesetzlichen Aufbewahrungspflichten (insbesondere § 257 HGB, § 147 AO) obliegt allein dem Nutzer. Der Nutzer hat die generierten Dokumente und zugrunde liegenden Unterlagen eigenverantwortlich und gesetzeskonform aufzubewahren.</LP>

      <LH>10. Laufzeit & Kündigung</LH>
      <LP>10.1. Vertragslaufzeit: Der Nutzungsvertrag über Mirador Tax wird auf unbestimmte Zeit geschlossen und beginnt mit der Freischaltung Ihres Zugangs.</LP>
      <LP>10.2. Ordentliche Kündigung: Beide Parteien können den Nutzungsvertrag jederzeit in Textform (z. B. per E-Mail) mit einer Frist von zwei Monaten zum Monatsende kündigen. Die Kündigung des Nutzungsvertrags lässt bereits verbindlich beauftragte Geschäftsjahre (Ziffer 4.4) und die hierfür entstandenen Entgelte unberührt; die zugehörigen Leistungen werden noch vollständig erbracht.</LP>
      <LP>10.3. Außerordentliche Kündigung: Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Parteien unberührt. Ein wichtiger Grund liegt für den Anbieter insbesondere dann vor, wenn der Nutzer schwerwiegend oder wiederholt gegen diese AGB verstößt, falsche Angaben gemacht hat oder mit fälligen Zahlungen trotz Mahnung in Verzug ist.</LP>

      <LH>11. Haftung</LH>
      <LP>11.1. Unbeschränkte Haftung: Wir haften unbegrenzt für Schäden, die vorsätzlich oder grob fahrlässig durch uns oder unsere gesetzlichen Vertreter oder Erfüllungsgehilfen verursacht wurden. Unbeschränkt haften wir auch bei der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung von uns oder unseren gesetzlichen Vertretern oder Erfüllungsgehilfen beruht.</LP>
      <LP>11.2. Beschränkte Haftung: Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (sogenannten Kardinalpflichten) haften wir begrenzt auf den vertragstypisch vorhersehbaren Schaden. Wesentliche Vertragspflichten sind solche Pflichten, die die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglichen und auf deren Erfüllung Sie regelmäßig vertrauen dürfen.</LP>
      <LP>11.3. Haftungsausschluss: Eine weitergehende Haftung von Mirador Tax – gleich aus welchem Rechtsgrund – ist ausgeschlossen, sofern nicht gesetzlich eine zwingende Haftung vorgeschrieben ist. Insbesondere haften wir nicht für:</LP>
      <LUL items={[
        "mittelbare oder indirekte Schäden sowie Folgeschäden, die nicht am Vertragssubjekt selbst entstanden sind,",
        "entgangenen Gewinn, Umsatzeinbußen oder sonstige rein finanzielle Verluste,",
        "Datenverluste (außer falls wir diese vorsätzlich oder grob fahrlässig verursacht haben), oder",
        "Schäden aus höherer Gewalt oder außerhalb unseres Einflussbereichs (z. B. Ausfälle von Drittanbietern, technische Infrastruktur des Nutzers oder behördliche Eingriffe).",
      ]} />
      <LP>Soweit unsere Haftung ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung unserer gesetzlichen Vertreter, Mitarbeiter und Erfüllungsgehilfen.</LP>
      <LP>11.4. Haftung für Nutzerinhalte: Mirador Tax übernimmt keine Haftung für die Inhalte, Zahlenwerke oder Dokumente, die Sie selbst auf der Plattform eingeben, erstellen oder generieren. Sie sind verpflichtet, die von der Software automatisiert erstellten Auswertungen (insbesondere Entwürfe von Jahresabschlüssen) auf Plausibilität und Richtigkeit zu prüfen. Für Fehler, Unvollständigkeiten oder Versäumnisse bei der Eingabe Ihrer Daten – und die daraus resultierenden Folgen, wie fehlerhafte Jahresabschlüsse oder Fristversäumnisse gegenüber Behörden – haftet Mirador Tax nicht.</LP>
      <LP>11.5. Keine Haftung für externe Beratung: Soweit Sie Beratungsleistungen externer Steuerberater oder Kanzleien in Anspruch nehmen, übernimmt Mirador Tax hierfür keine Haftung. Etwaige Haftungsansprüche im Zusammenhang mit solchen Verträgen sind direkt gegenüber dem jeweiligen Berater geltend zu machen.</LP>

      <LH>12. Änderung der AGB</LH>
      <LP>12.1. Mirador Tax behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern oder zu ergänzen, sofern hierfür ein triftiger Grund besteht (z. B. Gesetzesänderungen, Erweiterung der Leistungen, Änderung der Rechtsprechung oder der Marktgegebenheiten). Über geplante Änderungen der AGB werden wir Sie spätestens sechs Wochen vor deren Inkrafttreten in Textform (z. B. per E-Mail) informieren. Wenn Sie den Änderungen nicht binnen vier Wochen ab Zugang der Änderungsmitteilung widersprechen, gelten die neuen AGB ab dem angekündigten Zeitpunkt als akzeptiert.</LP>
      <LP>12.2. Widersprechen Sie fristgerecht den Änderungen, hat jede Partei das Recht, den Nutzungsvertrag noch vor Inkrafttreten der Änderung mit Wirkung zu diesem Zeitpunkt zu kündigen. Andere Kündigungsrechte bleiben unberührt. Im Falle einer Kündigung aufgrund eines AGB-Widerspruchs werden bereits gezahlte Entgelte, die auf die Zeit nach Vertragsende entfallen, anteilig erstattet.</LP>

      <LH>13. Schlussbestimmungen</LH>
      <LP>13.1. Anwendbares Recht: Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).</LP>
      <LP>13.2. Gerichtsstand: Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Sitz des Anbieters.</LP>
      <LP>13.3. Textform: Änderungen und Ergänzungen des Vertrags bedürfen der Textform. Dies gilt auch für die Aufhebung dieses Textformerfordernisses.</LP>
      <LP>13.4. Salvatorische Klausel: Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt die gesetzliche Regelung.</LP>
    </LegalPage>
  );
}

Object.assign(window, { LegalPage, ImpressumPage, DatenschutzPage, AGBPage });
