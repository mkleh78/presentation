import React from 'react';
import { Shield, TrendingUp, BarChart4 } from 'lucide-react';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const ConsolidatedNeedsChart = () => {
  // Headers for the table
  const headers = [
    { id: 'category', label: 'Bedarfsfeld' },
    { id: 'young', label: 'Junge Erwachsene (18–30)' },
    { id: 'family', label: 'Familien & Mittleres Erwachsenenalter (30–44)' },
    { id: 'middle', label: 'Middle Age (45–65)' },
    { id: 'senior', label: 'Senioren (65+)' }
  ];
  
  // Data for the consolidated needs categories
  const consolidatedData = [
    {
      category: 'Finanzielle Basis & Sicherheit',
      description: 'Liquidität + Absicherung',
      icon: <Shield size={24} />,
      color: 'bg-blue-100',
      borderColor: 'border-blue-300',
      young: 'Budgeting-Apps, Basisversicherungen, dynamische Kredite',
      family: 'Budget-Optimierung, Familienabsicherung, Notfallfonds',
      middle: 'Finanzüberwachung, Berufsunfähigkeitsversicherung',
      senior: 'Rentenrechner, Pflegeversicherung, Gesundheitskosten'
    },
    {
      category: 'Vermögensaufbau & Wachstum',
      description: 'Teile von Vorsorge + Vermögen',
      icon: <TrendingUp size={24} />,
      color: 'bg-green-100',
      borderColor: 'border-green-300',
      young: 'Investment-Apps, Robo-Advisors, erste Sparpläne',
      family: 'Automatisierte Sparstrategien, diversifizierte Anlagen',
      middle: 'Strategische Investments, optimierte Anlagestrategien',
      senior: 'Vermögenserhaltende Strategien, risikoaverse Anlagen'
    },
    {
      category: 'Langfristige Planung & Vermögenssicherung',
      description: 'Immobilie + Teile von Vorsorge + Teile von Vermögen',
      icon: <BarChart4 size={24} />,
      color: 'bg-purple-100',
      borderColor: 'border-purple-300',
      young: 'Frühe Altersvorsorge, erste Vermögensbildung',
      family: 'Immobilienerwerb, Familienplanung, Ausbildungssparen',
      middle: 'Immobilieninvestitionen, Ruhestandsplanung, Steueroptimierung',
      senior: 'Nachlassplanung, Vermögensübertragung, Entnahmestrategien'
    }
  ];

  // Category details to show in the cards
  const categoryDetails = [
    {
      category: 'Finanzielle Basis & Sicherheit',
      elements: [
        'Tägliches Finanzmanagement',
        'Notfallfonds für unerwartete Ausgaben',
        'Grundlegende Absicherungen',
        'Schuldenmanagement und Kreditoptimierung'
      ],
      goal: 'Finanzielle Stabilität im Alltag und Schutz vor unvorhergesehenen Risiken',
      color: 'bg-blue-50',
      borderColor: 'border-blue-300',
      icon: <Shield size={32} className="text-blue-500" />
    },
    {
      category: 'Vermögensaufbau & Wachstum',
      elements: [
        'Kurz- und mittelfristiges Sparen',
        'Investitionsstrategien (Aktien, ETFs, Fonds)',
        'Diversifikation des Portfolios',
        'Digitale Investment-Tools und Robo-Advisors'
      ],
      goal: 'Kapitalbildung und -steigerung durch verschiedene Anlageklassen',
      color: 'bg-green-50',
      borderColor: 'border-green-300',
      icon: <TrendingUp size={32} className="text-green-500" />
    },
    {
      category: 'Langfristige Planung & Vermögenssicherung',
      elements: [
        'Altersvorsorge (staatlich, betrieblich, privat)',
        'Immobilienerwerb und -finanzierung',
        'Vermögensübertragung und Nachlassplanung',
        'Steueroptimierungsstrategien'
      ],
      goal: 'Langfristige finanzielle Unabhängigkeit und generationenübergreifende Planung',
      color: 'bg-purple-50',
      borderColor: 'border-purple-300',
      icon: <BarChart4 size={32} className="text-purple-500" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Konsolidierte Bedarfsfelder für Financial Wellbeing</h1>
        <p className="text-gray-500">House of Finance and Tech Berlin</p>
      </div>

      {/* Category Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categoryDetails.map((detail, index) => (
          <Card key={index} className={`border-2 ${detail.borderColor}`}>
            <CardHeader className={`${detail.color}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white">
                  {detail.icon}
                </div>
                <CardTitle className="text-lg">{detail.category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 mb-2">UMFASST:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {detail.elements.map((element, i) => (
                      <li key={i} className="text-sm">{element}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 mb-2">ZIEL:</h4>
                  <p className="text-sm border-l-2 pl-3 py-1 border-gray-300 bg-gray-50">{detail.goal}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lifecycle Solutions Table */}
      <Card className="w-full">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-center">Maßgeschneiderte Lösungen nach Bedarfsfeldern & Lebensphase</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {headers.map((header) => (
                    <th key={header.id} className="p-3 border text-left font-bold">
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {consolidatedData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`p-3 border ${row.color}`}>
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-white rounded-full">
                          {row.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{row.category}</div>
                          <div className="text-xs text-gray-500">{row.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 border text-sm">{row.young}</td>
                    <td className="p-3 border text-sm">{row.family}</td>
                    <td className="p-3 border text-sm">{row.middle}</td>
                    <td className="p-3 border text-sm">{row.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Diagram showing the consolidation */}
      <Card className="w-full">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-center">Von 5 zu 3 Bedarfsfeldern: Die Konsolidierung</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            {/* Original Categories */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-center mb-4">Ursprüngliche Bedarfsfelder</h3>
              <div className="space-y-2">
                <div className="bg-blue-100 p-3 rounded border border-blue-200">Liquidität</div>
                <div className="bg-green-100 p-3 rounded border border-green-200">Absicherung</div>
                <div className="bg-purple-100 p-3 rounded border border-purple-200">Vorsorge</div>
                <div className="bg-yellow-100 p-3 rounded border border-yellow-200">Immobilie</div>
                <div className="bg-red-100 p-3 rounded border border-red-200">Vermögen</div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex items-center justify-center">
              <div className="text-4xl">→</div>
            </div>

            {/* New Categories */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-center mb-4">Konsolidierte Bedarfsfelder</h3>
              <div className="space-y-4">
                <div className="bg-blue-100 p-3 rounded border border-blue-200 relative">
                  <div className="font-semibold">Finanzielle Basis & Sicherheit</div>
                  <div className="text-xs text-gray-600 mt-1">Zusammenführung von Liquidität + Absicherung</div>
                </div>
                <div className="bg-green-100 p-3 rounded border border-green-200 relative">
                  <div className="font-semibold">Vermögensaufbau & Wachstum</div>
                  <div className="text-xs text-gray-600 mt-1">Teile von Vorsorge + Vermögen</div>
                </div>
                <div className="bg-purple-100 p-3 rounded border border-purple-200 relative">
                  <div className="font-semibold">Altersvorsorge und Vermögenssicherung</div>
                  <div className="text-xs text-gray-600 mt-1">Immobilie + Teile von Vorsorge + Teile von Vermögen</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-center mb-2">Vorteile der Konsolidierung</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-sm text-sm">
                <span className="font-semibold">Ganzheitlicher Ansatz:</span> Logischer Lebenszyklus von der Basis über den Aufbau bis zur Sicherung
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-sm">
                <span className="font-semibold">Klarere Priorisierung:</span> Leichtere Identifikation des Einstiegspunkts je nach individueller Situation
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-sm">
                <span className="font-semibold">Produktorientierung:</span> Strukturierte Angebote entlang dieser drei Kategorien
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-500 mt-8 pt-4 border-t">
        <p>© 2025 House of Finance and Tech Berlin GmbH</p>
      </div>
    </div>
  );
};

export default ConsolidatedNeedsChart;
