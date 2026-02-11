import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const OptionsStrategiesPresentation = () => {
  const [activeSection, setActiveSection] = useState('risk');
  
  // Data for visualizations
  const riskReturnData = [
    { name: 'Definiertes Risiko', riskScore: 30, returnScore: 50, color: '#7e97c3' },
    { name: 'Undefiniertes Risiko', riskScore: 80, returnScore: 70, color: '#003366' },
  ];
  
  const successRateData = [
    { name: 'Optionskäufer', value: 30, color: '#7e97c3' },
    { name: 'Stillhalter', value: 70, color: '#003366' },
  ];
  
  const directionalData = [
    { name: 'Bull Call Spread', upMarket: 85, downMarket: 15, sidewaysMarket: 55 },
    { name: 'Bear Put Spread', upMarket: 15, downMarket: 85, sidewaysMarket: 50 },
    { name: 'Iron Condor', upMarket: 40, downMarket: 40, sidewaysMarket: 90 },
    { name: 'Calendar Spread', upMarket: 50, downMarket: 50, sidewaysMarket: 80 },
  ];
  
  const COLORS = ['#003366', '#7e97c3', '#ffd700', '#e2e2e3'];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero section */}
      <div className="bg-gray-800 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-wider">Grundlagen erfolgreicher Optionsstrategien</h1>
          <p className="text-xl">Kapitel 2.1 aus "Optionen strategisch nutzen" von Markus Lehleiter</p>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex overflow-x-auto py-4 space-x-6">
            <button 
              onClick={() => setActiveSection('risk')}
              className={`px-4 py-2 font-medium rounded ${activeSection === 'risk' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Risikoklassifikation
            </button>
            <button 
              onClick={() => setActiveSection('buyerSeller')}
              className={`px-4 py-2 font-medium rounded ${activeSection === 'buyerSeller' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Stillhalter vs. Käufer
            </button>
            <button 
              onClick={() => setActiveSection('direction')}
              className={`px-4 py-2 font-medium rounded ${activeSection === 'direction' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Markterwartung
            </button>
            <button 
              onClick={() => setActiveSection('purpose')}
              className={`px-4 py-2 font-medium rounded ${activeSection === 'purpose' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Zweck
            </button>
            <button 
              onClick={() => setActiveSection('tips')}
              className={`px-4 py-2 font-medium rounded ${activeSection === 'tips' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Erfolgstipps
            </button>
          </nav>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        
        {/* Risk Classification */}
        {activeSection === 'risk' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Einteilung von Strategien nach Risiko</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Risiko-Rendite-Verhältnis</h3>
                  <p className="mb-4">Das Risikoprofil ist die Grundlage jeder Optionsstrategie. Es gibt zwei Hauptkategorien:</p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-blue-900 mb-2">Strategien mit definiertem Risiko</h4>
                    <p>Diese Strategien begrenzen den maximalen Verlust im Voraus und geben Ihnen volle Risikokontrolle. Typische Beispiele sind Spreads, bei denen der gleichzeitige Kauf und Verkauf von Optionen das Risiko deckelt.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Strategien mit undefiniertem Risiko</h4>
                    <p>Hierzu zählt der Verkauf ungedeckter Optionen, insbesondere ungedeckter Calls, bei denen theoretisch unbegrenzte Verluste entstehen können, wenn sich der Markt gegen die Position bewegt.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Vergleich Risiko-Ertrag</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={riskReturnData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip formatter={(value) => [`${value}/100`, '']} />
                        <Legend />
                        <Bar dataKey="riskScore" name="Risiko" fill="#003366" />
                        <Bar dataKey="returnScore" name="Ertragspotenzial" fill="#ffd700" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Wichtig:</strong> Risiken müssen klar definiert und stets im Verhältnis zum Portfoliorisiko stehen. Im Optionshandel ist es unerlässlich, das Verlustpotenzial im Voraus zu kennen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Stillhalter vs. Käufer */}
        {activeSection === 'buyerSeller' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Einteilung in Stillhalter- und Käufer-Strategien</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Unterschiedliche Ansätze</h3>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-blue-900 mb-2">Kauf von Optionen</h4>
                    <p className="mb-2">Käufer setzen auf eine Marktbewegung in die erwartete Richtung. Das Risiko beschränkt sich auf die gezahlte Prämie, während der Gewinn nicht begrenzt ist.</p>
                    <p>Die Zeit läuft gegen den Käufer, insbesondere bei kurzlaufenden Optionen.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Verkauf von Optionen</h4>
                    <p className="mb-2">Der Verkäufer (Stillhalter) profitiert von der erhaltenen Prämie, wenn die Option wertlos verfällt. Der Gewinn ist auf die Prämie begrenzt, das Risiko unbegrenzt.</p>
                    <p>Die Zeit läuft für den Verkäufer, der vom Zeitwertverfall profitiert.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Erfolgswahrscheinlichkeit</h3>
                  <div className="h-72 flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={successRateData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {successRateData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Erfolgswahrscheinlichkeit']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Wichtig:</strong> Zeit spielt bei Optionen eine entscheidende Rolle. Der Zeitwertverfall ist der Schlüssel zum Erfolg für Stillhalter, während Käufer auf schnelle Marktbewegungen setzen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Market Direction */}
        {activeSection === 'direction' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Einteilung nach Markterwartung</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Direktional vs. Marktneutral</h3>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-blue-900 mb-2">Direktionale Strategien</h4>
                    <p>Diese Strategien setzen auf eine klare Marktrichtung. Typische Beispiele sind der Kauf von Call-Optionen bei steigenden Kursen oder Put-Optionen bei fallenden Kursen. Direktionale Strategien sind nur profitabel, wenn die Einschätzung der Marktbewegung stimmt.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Marktneutrale Strategien</h4>
                    <p>Diese Strategien zielen darauf ab, unabhängig von der Richtung des Marktes Gewinne zu erzielen. Dabei liegt der Fokus weniger auf der Marktentwicklung, sondern vielmehr auf Faktoren wie Volatilität und Zeitwertverfall.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Strategieperformance nach Markttyp</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={directionalData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Erfolgsrate']} />
                        <Legend />
                        <Bar dataKey="upMarket" name="Steigender Markt" fill="#003366" />
                        <Bar dataKey="downMarket" name="Fallender Markt" fill="#7e97c3" />
                        <Bar dataKey="sidewaysMarket" name="Seitwärtsmarkt" fill="#ffd700" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Wichtig:</strong> Treffen Sie Ihre Strategieauswahl auf Basis klarer Markt- und Volatilitätserwartungen. Direktionale Strategien eignen sich in Märkten mit klarem Trend, während marktneutrale Strategien bei seitwärts tendierenden Märkten effektiv sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Purpose */}
        {activeSection === 'purpose' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Einteilung von Strategien nach Zweck</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Einkommensstrategien</h3>
                </div>
                <p className="mb-4">Zielen auf regelmäßige Prämieneinnahmen durch den Verkauf von Optionen ab.</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Zeitwertverfall als zentraler Faktor</li>
                  <li>Covered Calls</li>
                  <li>Cash Secured Puts</li>
                </ul>
                <p className="text-sm text-gray-600">Idealer Markt: Seitwärts oder leicht steigend</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Absicherungsstrategien</h3>
                </div>
                <p className="mb-4">Dienen dem Schutz eines Portfolios vor Verlusten.</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Protective Puts</li>
                  <li>Collars</li>
                  <li>Risikominimierung</li>
                </ul>
                <p className="text-sm text-gray-600">Idealer Markt: Unsicher oder fallend</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Spezielle Marktchancen</h3>
                </div>
                <p className="mb-4">Nutzen spezifische Marktereignisse wie Earnings für Gewinne.</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Short Strangles</li>
                  <li>Volatilitäts-Crush</li>
                  <li>Ereignisgetriebene Strategien</li>
                </ul>
                <p className="text-sm text-gray-600">Idealer Markt: Ereignisreich mit hoher Volatilität</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Wichtig zu beachten:</h3>
              <p>Jede Strategie sollte klar nach dem gewünschten Zweck ausgewählt werden. Einkommensstrategien profitieren vom Zeitwertverfall, Absicherungsstrategien schützen vor Verlusten in volatilen Märkten, und Strategien zur Nutzung von Marktereignissen erfordern genaue Timing-Überlegungen sowie ein Verständnis der erwarteten Volatilität.</p>
            </div>
          </div>
        )}
        
        {/* Tips for Success */}
        {activeSection === 'tips' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Grundlegende Tipps für den erfolgreichen Optionshandel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Qualität statt Quantität</h3>
                </div>
                <p>Im Optionshandel zählt die Qualität der Entscheidungen mehr als die Anzahl der Trades. Handeln Sie nur mit fair bewerteten und liquiden Basiswerten und wählen Sie den Strike-Preis so, dass Sie den Basiswert im Falle einer Andienung auch tatsächlich zu diesem Preis besitzen möchten.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Langfristigen Aufwärtstrend nutzen</h3>
                </div>
                <p>Aktienmärkte steigen tendenziell über längere Zeiträume. Diese positive Tendenz können Sie strategisch nutzen, indem Sie sich in den meisten Marktphasen eher Long positionieren, so dass Sie an Aufwärtsbewegungen partizipieren.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Realistische Ziele setzen</h3>
                </div>
                <p>Streben Sie nicht nach einer 100%igen Gewinnrate. Auch wenn der Verkauf von Optionen weit außerhalb des Geldes eine hohe Trefferquote verspricht, kann der Gewinn gering sein und das Risiko eines hohen Verlustes bei einem Extremereignis nicht rechtfertigen. Am Ende zählt die Profitabilität und nicht die Gewinnrate.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Verluste akzeptieren</h3>
                </div>
                <p>Vermeiden Sie übermäßige Anpassungen verlierender Positionen. Akzeptieren Sie Verluste und machen Sie weiter. Um langfristig profitabel zu sein, müssen Sie Verluste begrenzen. Die Akzeptanz von Verlusten ist ein wichtiger Bestandteil des langfristigen Erfolgs.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Trading-Journal führen</h3>
                </div>
                <p>Dokumentieren Sie Ihre Trades. So können Sie Ihre Strategien analysieren, Muster erkennen und kontinuierlich verbessern. Auch für steuerliche Zwecke kann ein Trading-Journal von Vorteil sein.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg shadow mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Fazit</h3>
              <p>Im Optionshandel zählt nicht die Anzahl der Strategien, sondern die präzise Anwendung der richtigen Strategien. Ein fundiertes Verständnis des Risikoprofils, der Markterwartungen und des Zwecks der einzelnen Strategien ist entscheidend. Definieren Sie Ihre Strategien klar und führen Sie diese präzise aus. Disziplin und striktes Risikomanagement sind essenziell für langfristigen Erfolg im Optionshandel.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionsStrategiesPresentation;