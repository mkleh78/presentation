import React from 'react';

const FinancialWellbeingTable = () => {
  // Daten für etablierte Unternehmen im Financial Wellbeing-Bereich
  const companies = [
    {
      name: "Bank of America",
      location: "USA",
      description: "Bietet Tools wie Life Plan® zur Zielplanung und Finanzcoaching für Kunden sowie die Better Money Habits Plattform mit umfassenden Bildungsressourcen.",
      valueAdd: "Fördert langfristige Sparziele und Schuldenmanagement durch personalisierte Dashboards und bietet Werkzeuge zur Verwaltung von Finanzen, Sparen und Investieren.",
      website: "bankofamerica.com"
    },
    {
      name: "JPMorgan Chase",
      location: "USA",
      description: "Chase Financial Goals-Feature mit Budget-Tracking und KI-basierten Insights sowie Financial Health Pulse Umfrage und Bildungsressourcen.",
      valueAdd: "Kombiniert Banking mit Bildungsinhalten und automatisierten Sparstrategien. Hilft Kunden, ihr finanzielles Wohlbefinden zu messen und zu verbessern.",
      website: "chase.com"
    },
    {
      name: "BBVA",
      location: "Spanien",
      description: "BBVA Valora: Tool zur Analyse von Finanzentscheidungen (z.B. Immobilienkauf).",
      valueAdd: "Stärkt finanzielle Entscheidungskompetenz durch interaktive Szenario-Simulationen.",
      website: "bbva.com"
    },
    {
      name: "DBS Bank",
      location: "Singapur",
      description: "DBS NAV Planner: KI-gestützte Plattform für ganzheitliche Finanzplanung und DBS Financial Learning Portal für finanzielle Bildung.",
      valueAdd: "Integriert Vermögen, Schulden und Lebensziele in Echtzeit-Analysen. Bildet Kunden über verschiedene finanzielle Themen.",
      website: "dbs.com.sg"
    },
    {
      name: "Commonwealth Bank of Australia",
      location: "Australien",
      description: "Benefits finder: Identifiziert staatliche Förderungen für finanziell Benachteiligte.",
      valueAdd: "Verbessert finanzielle Inklusion durch Zugang zu vergessenen Förderungen.",
      website: "commbank.com.au"
    },
    {
      name: "ING",
      location: "Niederlande",
      description: "ING Money Insights: Automatisierte Ausgabenanalyse und Spar-Tipps.",
      valueAdd: "Reduziert finanzielle Stressfaktoren durch klare Visualisierung von Cashflows.",
      website: "ing.com"
    },
    {
      name: "Unicredit",
      location: "Italien",
      description: "You & Unicredit: Personalisierte Finanzplanung mit Fokus auf Lebensphasen.",
      valueAdd: "Unterstützt Kunden bei Übergängen (z.B. Elternschaft, Ruhestand) durch maßgeschneiderte Lösungen.",
      website: "unicreditgroup.eu"
    },
    {
      name: "UBS",
      location: "Schweiz",
      description: "UBS Advice Connect: Digitales Beratungstool für Vermögensaufbau und Altersvorsorge.",
      valueAdd: "Fokussiert auf langfristige finanzielle Sicherheit und Risikominimierung.",
      website: "ubs.com"
    },
    {
      name: "Allianz",
      location: "Deutschland",
      description: "Allianz Financial Wellbeing Index: Plattform zur Selbsteinschätzung der finanziellen Gesundheit.",
      valueAdd: "Bietet Benchmarking und Handlungsempfehlungen für Privatkunden und Unternehmen.",
      website: "allianz.com"
    },
    {
      name: "AXA",
      location: "Frankreich",
      description: "AXA Mind Health Report: Kombiniert psychische und finanzielle Gesundheit in Beratungsansätzen.",
      valueAdd: "Erkennt Zusammenhänge zwischen Stress und Finanzentscheidungen.",
      website: "axa.com"
    },
    {
      name: "Legal & General",
      location: "UK",
      description: "Lifetime Mortgage-Tools und Bildungsprogramme für Altersvorsorge.",
      valueAdd: "Adressiert Altersarmut durch Aufklärung und flexible Entnahmemodelle.",
      website: "legalandgeneral.com"
    },
    {
      name: "UOB",
      location: "Singapur",
      description: "UOB Mighty: App mit Sparzielen, Cashback und Nachhaltigkeits-Bonusprogrammen.",
      valueAdd: "Motiviert zu verantwortungsvollem Konsum und belohnt nachhaltiges Verhalten.",
      website: "uobgroup.com"
    },
    {
      name: "Standard Chartered",
      location: "UK",
      description: "GoalSave: Flexibles Sparkonto mit Zinsbonus bei Zielerreichung.",
      valueAdd: "Verbindet Sparen mit Gamification und langfristiger Motivation.",
      website: "sc.com"
    },
    {
      name: "Nordea",
      location: "Schweden",
      description: "Nordea Financial Health Check: Digitaler Check-up mit Handlungsempfehlungen.",
      valueAdd: "Identifiziert individuelle Risiken (z.B. Überschuldung) und bietet Lösungen.",
      website: "nordea.com"
    },
    {
      name: "Rabobank",
      location: "Niederlande",
      description: "Grip App: Vernetzt Konten, analysiert Ausgaben und bietet CO2-Fußabdruck-Tracking.",
      valueAdd: "Verbindet finanzielle Stabilität mit Nachhaltigkeit als Teil des Wellbeing-Ansatzes.",
      website: "rabobank.com"
    },
    {
      name: "BlackRock",
      location: "USA",
      description: "Future Financial: Kostenlose Tools und Kurse zur finanziellen Bildung.",
      valueAdd: "Demystifiziert Investieren und Altersvorsorge für breite Bevölkerungsgruppen.",
      website: "blackrock.com"
    },
    {
      name: "Vanguard",
      location: "USA",
      description: "Vanguard Personal Advisor Services: Robo-Advisor mit Fokus auf langfristiger Planung und kostengünstige Investmentfonds.",
      valueAdd: "Senkt Einstiegshürden für professionelle Vermögensverwaltung mit niedrigen Gebühren und bietet Bildungsinhalte für informierte Investitionsentscheidungen.",
      website: "vanguard.com"
    },
    {
      name: "Fidelity Investments",
      location: "USA",
      description: "Fidelity Bloom: App mit psychologischen Tricks zur Sparmotivation sowie umfassende Bildungsressourcen zu Investitionen und persönlichen Finanzen.",
      valueAdd: "Nutzt Verhaltensökonomie, um impulsive Ausgaben zu reduzieren und befähigt Kunden, informierte Investitionsentscheidungen zu treffen.",
      website: "fidelity.com"
    },
    {
      name: "Credit Suisse",
      location: "Schweiz",
      description: "CS Financial Empowerment Program: Bildungsinitiativen für finanzielle Grundkompetenzen.",
      valueAdd: "Zielgruppe: Frauen, Jugendliche und Migranten in Schwellenländern.",
      website: "credit-suisse.com"
    },
    {
      name: "NatWest Group",
      location: "UK",
      description: "Money Sense Programm für Schulen und Gemeinschaften.",
      valueAdd: "Fördert die Finanzbildung unter Jugendlichen und Gemeindemitgliedern.",
      website: "natwestgroup.com"
    },
    {
      name: "Lloyds Bank",
      location: "UK",
      description: "Money for Life Programm, das auf verschiedene Lebensphasen zugeschnitten ist.",
      valueAdd: "Bietet phasenbezogene finanzielle Anleitung, um Kunden in jeder Lebensphase zu unterstützen.",
      website: "lloydsbank.com"
    },
    {
      name: "ANZ Bank",
      location: "Australien",
      description: "Financial Wellbeing Hub mit Ressourcen und Werkzeugen.",
      valueAdd: "Hilft Kunden, ihre Finanzen effektiv zu verwalten.",
      website: "anz.com.au"
    },
    {
      name: "Northwestern Mutual",
      location: "USA",
      description: "Umfassende Finanzplanungsdienste, einschließlich Versicherung, Investitionen und Rentenplanung.",
      valueAdd: "Unterstützt Kunden bei der Planung für Versicherung, Investitionen und Ruhestand.",
      website: "northwesternmutual.com"
    },
    {
      name: "Prudential Financial",
      location: "USA",
      description: "Finanzielle Produkte und Dienstleistungen mit einem Fokus auf finanzielles Wohlbefinden.",
      valueAdd: "Hilft Kunden durch verschiedene Produkte und Bildungsressourcen, ihre finanziellen Ziele zu erreichen.",
      website: "prudential.com"
    }
  ];

  // Gruppieren nach geografischen Regionen für bessere Organisation
  const regions = {
    "Nordamerika": companies.filter(c => c.location === "USA" || c.location === "Kanada"),
    "Europa": companies.filter(c => ["UK", "Spanien", "Niederlande", "Italien", "Schweiz", "Deutschland", "Frankreich", "Schweden"].includes(c.location)),
    "Asien-Pazifik": companies.filter(c => ["Singapur", "Australien"].includes(c.location))
  };

  // Farbcodes für Regionen
  const regionColors = {
    "Nordamerika": "bg-blue-50 border-blue-200",
    "Europa": "bg-green-50 border-green-200",
    "Asien-Pazifik": "bg-purple-50 border-purple-200"
  };

  return (
    <div className="mb-6 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">Etablierte Unternehmen im Bereich Financial Wellbeing</h1>
      
      <div className="mb-4 flex flex-wrap gap-3 justify-center">
        {Object.keys(regions).map(region => (
          <div key={region} className={`px-3 py-1 rounded-full ${regionColors[region].split(' ')[0]} border ${regionColors[region].split(' ')[1]} text-sm font-medium`}>
            {region}: {regions[region].length} Unternehmen
          </div>
        ))}
      </div>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4 text-left">Unternehmen</th>
              <th className="py-3 px-4 text-left">Standort</th>
              <th className="py-3 px-4 text-left">Beschreibung</th>
              <th className="py-3 px-4 text-left">Mehrwert im Financial Wellbeing</th>
              <th className="py-3 px-4 text-left">Website</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(regions).map(region => (
              <React.Fragment key={region}>
                <tr className={`${regionColors[region]}`}>
                  <td colSpan={5} className="py-2 px-4 font-bold">{region}</td>
                </tr>
                {regions[region].map((company, index) => (
                  <tr key={company.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 border-b border-gray-200'}>
                    <td className="py-3 px-4 font-medium">{company.name}</td>
                    <td className="py-3 px-4">{company.location}</td>
                    <td className="py-3 px-4">{company.description}</td>
                    <td className="py-3 px-4">{company.valueAdd}</td>
                    <td className="py-3 px-4">
                      <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:text-blue-800 hover:underline">
                        {company.website}
                      </a>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Hinweise:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Die Tabelle zeigt etablierte Finanzinstitutionen, die spezifische Programme zur Förderung des Financial Wellbeing anbieten.</li>
          <li>Der Fokus liegt auf Lösungen, die über traditionelle Bankdienstleistungen hinausgehen und gezielt finanzielle Gesundheit fördern.</li>
          <li>Viele dieser Unternehmen bieten digitale Tools, Bildungsressourcen und personalisierte Beratung an.</li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialWellbeingTable;
