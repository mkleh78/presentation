import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ReferenceLine } from 'recharts';

const OptionsGrundbegriffe = () => {
  // Daten für Zeitwertverfall
  const zeitwertData = [
    { name: '360 Tage', atm: 30, otm: 15, itm: 10 },
    { name: '270 Tage', atm: 25, otm: 12, itm: 8 },
    { name: '180 Tage', atm: 22, otm: 10, itm: 7 },
    { name: '90 Tage', atm: 16, otm: 8, itm: 5 },
    { name: '60 Tage', atm: 13, otm: 6, itm: 4 },
    { name: '30 Tage', atm: 9, otm: 4, itm: 2 },
    { name: '14 Tage', atm: 5, otm: 2, itm: 1 },
    { name: '7 Tage', atm: 2, otm: 1, itm: 0.5 },
    { name: '1 Tag', atm: 0.5, otm: 0.2, itm: 0.1 }
  ];
  
  // Daten für Payoff-Diagramm Long Call
  const longCallData = [
    { price: 40, value: -3 },
    { price: 45, value: -3 },
    { price: 50, value: -3 },
    { price: 55, value: -3 },
    { price: 57, value: -1 },
    { price: 58, value: 0 },
    { price: 60, value: 2 },
    { price: 65, value: 7 },
    { price: 70, value: 12 },
    { price: 75, value: 17 }
  ];
  
  // Daten für Payoff-Diagramm Long Put
  const longPutData = [
    { price: 40, value: 12 },
    { price: 45, value: 7 },
    { price: 50, value: 2 },
    { price: 52, value: 0 },
    { price: 55, value: -3 },
    { price: 60, value: -3 },
    { price: 65, value: -3 },
    { price: 70, value: -3 },
    { price: 75, value: -3 }
  ];
  
  // Daten für Volatilitätsvergleich
  const volatilityData = [
    { date: 'Jan', volatil: 35, stabil: 12 },
    { date: 'Feb', volatil: 60, stabil: 14 },
    { date: 'Mär', volatil: 25, stabil: 11 },
    { date: 'Apr', volatil: 75, stabil: 13 },
    { date: 'Mai', volatil: 30, stabil: 15 },
    { date: 'Jun', volatil: 55, stabil: 12 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header mit Navigation */}
      <header className="bg-blue-900 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Optionen strategisch nutzen</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors">Grundlagen</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Strategien</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Risikosteuerung</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Backtest</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Kapitel 1.1: Grundbegriffe und Konzepte des Optionshandels</h2>
          <p className="text-xl mb-8">Verstehen Sie die wichtigsten Grundlagen für Ihren erfolgreichen Einstieg in den Optionshandel</p>
        </div>
      </section>

      {/* Fünf Gründe Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-12 tracking-wider">Fünf Gründe, warum Optionen Mehrwert stiften</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-4">
                <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
                Absicherungsmöglichkeit
              </h3>
              <p>Optionen bieten eine wirksame Möglichkeit, Ihr Portfolio abzusichern – ähnlich wie eine Versicherung. Besonders in unsicheren Zeiten oder bei Marktschwankungen können Sie Ihr Risiko gezielt reduzieren.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-4">
                <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
                Maximale Flexibilität
              </h3>
              <p>Optionen ermöglichen flexible Reaktionen auf verschiedene Marktlagen. Egal ob Seitwärtsbewegungen oder steigende Volatilität – Optionen eröffnen Ihnen Gewinnchancen in allen Marktphasen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-4">
                <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">3</span>
                Hebelwirkung für Kapitaleffizienz
              </h3>
              <p>Mit Optionen können Sie größere Marktpositionen mit kleinerem Kapitaleinsatz kontrollieren. Das kann Ihre Renditemöglichkeiten steigern, erfordert jedoch ein striktes Risikomanagement.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-4">
                <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">4</span>
                Regelmäßige Einnahmen durch Prämien
              </h3>
              <p>Durch den Verkauf von Optionen lassen sich regelmäßige Prämieneinnahmen generieren. Diese Einnahmestrategien können Sie mit Dividenden kombinieren und damit stabile Renditen erzielen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-2 transition-transform">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-4">
                <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">5</span>
                Zusätzliche Diversifikation
              </h3>
              <p>Optionen tragen dazu bei, das Risiko besser zu streuen, besonders bei kleineren Depots. Sie schaffen zusätzliche Diversifikationsmöglichkeiten durch verschiedene, oft unkorrelierte Instrumente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Was sind Optionen */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-8 tracking-wider">Was sind Optionen?</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <p className="mb-4">Optionen sind Termingeschäfte, die sich auf die zukünftige Lieferung eines Basiswerts beziehen. Eine Option gibt dem Käufer das <strong>Recht, aber nicht die Pflicht</strong>, einen bestimmten Basiswert zu einem festgelegten Preis innerhalb einer bestimmten Frist zu kaufen oder zu verkaufen.</p>
              <p>Für dieses Recht zahlt der Käufer eine Prämie an den Verkäufer (Stillhalter), der sich im Gegenzug verpflichtet, den Basiswert zu liefern oder abzunehmen.</p>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Optionskontrakt auf einen Blick</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Basiswert:</strong> Die zu Grunde liegende Aktie, der Index oder Rohstoff</li>
                <li><strong>Basispreis (Strike):</strong> Preis, zu dem der Basiswert gekauft/verkauft werden kann</li>
                <li><strong>Fälligkeit:</strong> Zeitpunkt oder Zeitraum, in dem das Recht ausgeübt werden kann</li>
                <li><strong>Kontraktgröße:</strong> Menge des Basiswerts (typisch: 100 Aktien)</li>
                <li><strong>Prämie:</strong> Preis, den der Käufer für das Recht bezahlt</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Call-Option</h3>
              <p className="mb-4">Gibt dem Käufer das Recht, den Basiswert zu einem festgelegten Preis zu <strong>kaufen</strong>.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Long Call (Käufer): Recht zum Kauf des Basiswerts</li>
                <li>Short Call (Verkäufer): Pflicht zum Verkauf des Basiswerts</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Put-Option</h3>
              <p className="mb-4">Gibt dem Käufer das Recht, den Basiswert zu einem festgelegten Preis zu <strong>verkaufen</strong>.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Long Put (Käufer): Recht zum Verkauf des Basiswerts</li>
                <li>Short Put (Verkäufer): Pflicht zum Kauf des Basiswerts</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm">
            <p className="font-semibold">Wichtig: Die Bezeichnungen "Long" und "Short" beziehen sich auf die Position im Optionskontrakt, nicht auf die Marktrichtung.</p>
          </div>
        </div>
      </section>

      {/* Payoff-Diagramme */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-12 tracking-wider">Payoff-Diagramme für Gewinn- und Verlustprofil</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Long Call (Kaufoption)</h3>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={longCallData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" label={{ value: 'Aktienkurs', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Gewinn/Verlust', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`${value} €`, 'Gewinn/Verlust']} />
                    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
                    <CartesianGrid stroke="#ccc" />
                    <ReferenceLine y={0} stroke="#000" strokeDasharray="3 3" />
                    <ReferenceLine x={55} stroke="#ff0000" strokeDasharray="3 3" label={{ value: 'Strike', position: 'top' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <ul className="list-disc pl-5">
                  <li>Strike-Preis: 55 €</li>
                  <li>Prämie: 3 € pro Aktie</li>
                  <li>Break-Even: 58 € (Strike + Prämie)</li>
                  <li>Max. Verlust: begrenzt auf gezahlte Prämie</li>
                  <li>Max. Gewinn: theoretisch unbegrenzt</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Long Put (Verkaufsoption)</h3>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={longPutData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" label={{ value: 'Aktienkurs', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Gewinn/Verlust', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`${value} €`, 'Gewinn/Verlust']} />
                    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
                    <CartesianGrid stroke="#ccc" />
                    <ReferenceLine y={0} stroke="#000" strokeDasharray="3 3" />
                    <ReferenceLine x={55} stroke="#ff0000" strokeDasharray="3 3" label={{ value: 'Strike', position: 'top' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <ul className="list-disc pl-5">
                  <li>Strike-Preis: 55 €</li>
                  <li>Prämie: 3 € pro Aktie</li>
                  <li>Break-Even: 52 € (Strike - Prämie)</li>
                  <li>Max. Verlust: begrenzt auf gezahlte Prämie</li>
                  <li>Max. Gewinn: begrenzt auf (Strike - 0 - Prämie)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich mit Versicherungen */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-12 tracking-wider">Vergleich von Optionen mit Versicherungen</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mb-12">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Autoversicherung</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optionsverkäufer</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Verkauft Versicherung gegen eine Prämie</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Verkauft Optionen und bekommt eine Prämie</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Wenn kein Schaden eintritt, kassiert die Versicherung die Prämie</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Wenn Marktrisiko nicht eintritt, wird Prämie vereinnahmt</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Wenn ein Schaden eintritt, erhält die Versicherung trotzdem die Prämie</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Wenn Position verliert, wird trotzdem Prämie als Puffer vereinnahmt</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Hohe Gewinnwahrscheinlichkeit</td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">Hohe Gewinnwahrscheinlichkeit</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="mb-2">Optionen und Versicherungen haben mehrere Analogien:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Beim Kauf einer Put-Option sichert der Anleger sein Portfolio gegen Verluste ab, ähnlich einer Versicherungspolice.</li>
              <li>Der Käufer zahlt eine Prämie, um sich gegen ein unerwünschtes Ereignis abzusichern.</li>
              <li>Der Verkäufer sammelt Prämien und hofft, dass das versicherte Ereignis nicht eintritt.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grundbegriffe */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-12 tracking-wider">Grundbegriffe und Konzepte, die Sie kennen sollten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Ausübungsarten</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Europäische Optionen</h4>
                  <p>Können nur am Fälligkeitstag ausgeübt werden. Werden häufig bei Indizes verwendet.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Amerikanische Optionen</h4>
                  <p>Können jederzeit bis zum Ablaufdatum ausgeübt werden. Üblich bei Einzelaktien.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Moneyness einer Option</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Call-Option</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Put-Option</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">In the Money (ITM)</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Marktpreis &gt; Basispreis</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Marktpreis &lt; Basispreis</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">At the Money (ATM)</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Marktpreis = Basispreis</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Marktpreis = Basispreis</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Out of the Money (OTM)</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Marktpreis &lt; Basispreis</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Marktpreis &gt; Basispreis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Innerer Wert und Zeitwert</h3>
              <p className="mb-4">Die Optionsprämie setzt sich aus zwei Komponenten zusammen:</p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold">Innerer Wert</h4>
                  <p>Betrag, um den die Option im Geld liegt. Kann nie negativ sein.</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li><strong>Call:</strong> Max(0, Kurs - Basispreis)</li>
                    <li><strong>Put:</strong> Max(0, Basispreis - Kurs)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold">Zeitwert</h4>
                  <p>Differenz zwischen Optionspreis und innerem Wert. Spiegelt die Chance auf günstige Kursentwicklung wider.</p>
                  <p className="mt-1"><strong>Zeitwert = Optionspreis - Innerer Wert</strong></p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Zeitwertverfall</h3>
              <p className="mb-4">Der Zeitwert einer Option nimmt mit zunehmender Nähe zum Verfallsdatum ab (Theta-Effekt).</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={zeitwertData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="atm" name="ATM Option" stroke="#2563eb" strokeWidth={2} />
                    <Line type="monotone" dataKey="otm" name="OTM Option" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="itm" name="ITM Option" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Volatilität</h3>
              <p className="mb-4">Beschreibt die Schwankungsbreite des Basiswerts über einen bestimmten Zeitraum.</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={volatilityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="volatil" name="Volatiler Titel" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="stabil" name="Stabiler Titel" stroke="#2563eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm italic">Höhere Volatilität bedeutet größere Schwankungen und höhere Optionsprämien.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Liquidität und Open Interest</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Liquidität</h4>
                  <p>Beschreibt, wie leicht eine Option zu einem fairen Preis gehandelt werden kann.</p>
                  <p className="text-sm mt-1"><strong>Bid-Ask-Spread:</strong> Je enger der Spread, desto liquider der Markt.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Open Interest</h4>
                  <p>Anzahl der offenen Kontrakte, die noch nicht geschlossen oder ausgeübt wurden.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Volumen</h4>
                  <p>Anzahl der an einem Tag gehandelten Kontrakte. Indikator für aktuelle Marktaktivität.</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 text-sm">
                  <p>Hohe Liquidität, hohes Open Interest und hohes Volumen sind wichtige Faktoren für einen erfolgreichen Optionshandel!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optionen vs. Optionsscheine */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-12 tracking-wider">Oft verwechselt: Optionen und Optionsscheine</h2>
          
          <div className="overflow-hidden shadow-md rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kriterium</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optionen</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optionsscheine</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Preisfindung</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">transparent</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">weniger transparent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Emittentenrisiko</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">nein</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ja</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Standardisierung</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">hoch</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">geringer</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Handelsplattform</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Terminbörse</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">börslich und außerbörslich</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stillhalterposition möglich</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ja</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">nein</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p>Optionen werden an Terminbörsen gehandelt, haben standardisierte Bedingungen, keine Emittentenrisiken und ermöglichen Stillhalterpositionen. Optionsscheine hingegen werden von Banken emittiert, tragen Emittentenrisiko und sind weniger transparent in der Preisbildung. Für die meisten Strategien in diesem Buch werden börsengehandelte Optionen empfohlen.</p>
          </div>
        </div>
      </section>

      {/* Fazit und Zusammenfassung */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center uppercase mb-8 tracking-wider">Fazit</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <p className="mb-4">Optionen sind vielseitige Finanzinstrumente, die sowohl zur Absicherung als auch zur Spekulation eingesetzt werden können. Sie bieten Investoren flexible Möglichkeiten, auf zukünftige Preisbewegungen zu reagieren, und erlauben es, Risiken gezielt zu managen.</p>
            <p>Es ist wichtig, dass Sie die grundlegenden Begriffe und Konzepte des Optionshandels verstehen, bevor Sie aktiv handeln.</p>
          </div>
          
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Zusammenfassung</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-3">
              <li>Optionen sind Termingeschäfte und bieten das Recht, aber nicht die Verpflichtung, einen Basiswert zu kaufen oder zu verkaufen.</li>
              <li>Es gibt zwei Hauptarten von Optionen: Call-Optionen (Kaufrecht) und Put-Optionen (Verkaufsrecht).</li>
              <li>Ein Optionskontrakt umfasst wesentliche Parameter wie Laufzeit, Basispreis, Basiswert, Prämie und Optionstyp (Call/Put).</li>
              <li>Unterschiede zwischen Optionen und Optionsscheinen sind insbesondere in den Bereichen Emittentenrisiko, Preisbildung, Liquidität und Flexibilität wichtig.</li>
              <li>Amerikanische Optionen können jederzeit bis zum Verfallsdatum, europäische nur am Verfallstag ausgeübt werden.</li>
              <li>Moneyness beschreibt das Verhältnis des aktuellen Marktpreises des Basiswerts zum Ausübungspreis einer Option.</li>
              <li>Die Optionsprämie setzt sich aus dem inneren Wert und dem Zeitwert zusammen, wobei letzterer maßgeblich durch verbleibende Laufzeit und Volatilität bestimmt wird.</li>
            </ul>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center shadow-md">
              Nächstes Kapitel: Basiswissen zur Preisbildung
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bonus-Material Banner */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2 text-center">BONUS: Exklusive Templates und Checklisten</h3>
            <p className="text-center mb-4">Registrieren Sie sich für kostenloses Bonusmaterial, das Ihnen hilft, die Inhalte des Buches noch effektiver umzusetzen.</p>
            <div className="text-center">
              <a href="https://www.just-options.de" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block">
                Bonus-Material sichern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center mb-6">
            <div className="text-2xl font-bold mb-4 md:mb-0 md:mr-8">Optionen strategisch nutzen</div>
            <ul className="flex flex-wrap justify-center space-x-6">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Das Buch</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Autor</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="flex justify-center space-x-6 my-4">
            <a href="#" className="text-white hover:text-yellow-400 text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 text-xl">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
          
          <div className="text-center text-sm mt-6">
            &copy; 2024 Markus Lehleiter. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OptionsGrundbegriffe;