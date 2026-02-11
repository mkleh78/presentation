import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, DollarSign, Calendar, LineChart as LineChartIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend, LineChart, Line } from 'recharts';

// Data for visualizations
const shortStrangleData = [
  { name: 'Gewinnrate', value: 74 },
  { name: 'Verlustrate', value: 26 },
];

const shortPutData = [
  { name: 'Gewinnrate', value: 81 },
  { name: 'Verlustrate', value: 19 },
];

const strategiesData = [
  { name: 'Short Strangle', gewinnrate: 74, durchGewinn: 24.23, maxVerlust: 771.5, tageImTrade: 18.3 },
  { name: 'Short Put', gewinnrate: 81, durchGewinn: 26.24, maxVerlust: 767, tageImTrade: 12.8 },
];

const earningsVolatilityData = [
  { datum: '-7d', iv: 55 },
  { datum: '-5d', iv: 65 },
  { datum: '-3d', iv: 75 },
  { datum: '-1d', iv: 85 },
  { datum: 'Earnings', iv: 90 },
  { datum: '+1d', iv: 40 },
  { datum: '+3d', iv: 35 },
  { datum: '+5d', iv: 32 },
];

const calendarSpreadData = [
  { strike: 485, kurz: 6.2, lang: 10.5 },
  { strike: 490, kurz: 5.4, lang: 9.8 },
  { strike: 495, kurz: 4.7, lang: 9.1 },
  { strike: 500, kurz: 4.1, lang: 8.4 },
  { strike: 505, kurz: 3.5, lang: 7.8 },
  { strike: 510, kurz: 3.0, lang: 7.2 },
  { strike: 515, kurz: 2.5, lang: 6.7 },
];

const payoffData = [
  { kurs: 70, gewinn: -400 },
  { kurs: 80, gewinn: -300 },
  { kurs: 90, gewinn: -100 },
  { kurs: 95, gewinn: 100 },
  { kurs: 100, gewinn: 200 },
  { kurs: 105, gewinn: 100 },
  { kurs: 110, gewinn: -100 },
  { kurs: 120, gewinn: -300 },
  { kurs: 130, gewinn: -400 },
];

const COLORS = ['#ffd700', '#7e97c3', '#003366', '#66cc99'];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // Slide 1: Introduction
    {
      title: "Weiterführende Strategien zur Chancennutzung",
      content: () => (
        <div className="slide-content">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Kapitel 2.3</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-700 mb-4">
                Fortgeschrittene Optionsstrategien ermöglichen Ihnen, gezielt in verschiedenen Marktszenarien zu profitieren. In diesem Kapitel lernen Sie:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Einkommensstrategien auf Indizes</li>
                <li>Earnings-Trades auf Einzeltitel</li>
                <li>Spezialisierte Volatilitätsstrategien</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Diese Ansätze erfordern fundierte Marktkenntnisse sowie diszipliniertes Risikomanagement.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-blue-300 rounded-full flex items-center justify-center">
                    <BarChart3 size={80} color="#003366" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: Income Strategies on Indices
    {
      title: "Einkommensstrategien auf Indizes",
      content: () => (
        <div className="slide-content">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Short Strangle auf SPY ETF</h3>
              <p className="text-gray-700 mb-4">
                Eine neutrale Strategie, bei der eine OTM-Put- und eine OTM-Call-Option verkauft werden. Profitiert von Seitwärtsmärkten und Zeitwertverfall.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <h4 className="font-medium text-gray-800">Parameter:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Laufzeit: 60 Tage</li>
                  <li>Delta Put/Call: 20</li>
                  <li>Stop-Loss: 60% der Prämie</li>
                  <li>Take-Profit: 30% der Prämie</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800">Ergebnisse (Backtest):</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li><span className="font-medium">Gewinnrate:</span> 74%</li>
                  <li><span className="font-medium">Ø Gewinn/Trade:</span> 24,23$</li>
                  <li><span className="font-medium">Ø Tage im Trade:</span> 18,3</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={shortStrangleData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {shortStrangleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800">Payoff-Diagramm:</h4>
                <div className="h-40 mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={payoffData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="kurs" label={{ value: 'Kurs', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Gewinn/Verlust', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Area type="monotone" dataKey="gewinn" stroke="#003366" fill="#7e97c3" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 3: Short Put Strategy
    {
      title: "Short Put-Strategie auf SPY ETF",
      content: () => (
        <div className="slide-content">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Short Put als Einkommensstrategie</h3>
              <p className="text-gray-700 mb-4">
                Eine bullishe Einkommensstrategie, bei der eine Put-Option verkauft wird. Sie profitieren, wenn die Option wertlos verfällt.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <h4 className="font-medium text-gray-800">Parameter:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Laufzeit: 45 Tage</li>
                  <li>Delta: 16</li>
                  <li>Stop-Loss: 150% der Prämie</li>
                  <li>Take-Profit: 80% der Prämie</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800">Ergebnisse (Backtest):</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li><span className="font-medium">Gewinnrate:</span> 83%</li>
                  <li><span className="font-medium">Ø Prämie/Trade:</span> 117,44$</li>
                  <li><span className="font-medium">Ø Profit/Trade:</span> 29,50$</li>
                  <li><span className="font-medium">Ø Tage im Trade:</span> 21,7</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={shortPutData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {shortPutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800">Strategie-Vergleich:</h4>
                <div className="h-40 mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={strategiesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="gewinnrate" fill="#ffd700" name="Gewinnrate (%)" />
                      <Bar dataKey="tageImTrade" fill="#003366" name="Ø Tage im Trade" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: Earnings Strategies
    {
      title: "Earnings-Strategien auf Einzeltitel",
      content: () => (
        <div className="slide-content">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Volatilitäts-Crush nach Earnings nutzen</h3>
              <p className="text-gray-700 mb-4">
                Earnings-Strategien profitieren von hoher impliziter Volatilität vor Veröffentlichung der Quartalsergebnisse und dem anschließenden Volatilitäts-Crush.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <h4 className="font-medium text-gray-800">Beispiel-Trade:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Short Strangle einen Tag vor Earnings</li>
                  <li>Strike-Preise: Am Rand des Expected Move</li>
                  <li>Kurs der Aktie: 100$</li>
                  <li>Expected Move: 5$</li>
                  <li>Strikes: Call 105$, Put 95$</li>
                  <li>Prämie: 6$ gesamt (3$ Call, 3$ Put)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800">Risikomanagement:</h4>
                <p className="text-gray-700">
                  Bei größeren Kursbewegungen kann ein Iron Condor das Risiko begrenzen. Dieser kombiniert einen Bull Put Spread mit einem Bear Call Spread.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-2">Volatilitätsverlauf bei Earnings</h4>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={earningsVolatilityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="datum" />
                    <YAxis label={{ value: 'Implizite Volatilität (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="iv" stroke="#003366" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">Vor- und Nachteile</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-600">Vorteile</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Hohe Prämien durch erhöhte IV</li>
                      <li>Volatilitäts-Crush nach Earnings</li>
                      <li>Schneller Zeitwertverfall</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-600">Nachteile</h5>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Starke Kursbewegungen möglich</li>
                      <li>Gap-Risiko über Nacht</li>
                      <li>Verluste bei überraschenden News</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: Calendar Spreads
    {
      title: "Spezialisierte Volatilitätsstrategien",
      content: () => (
        <div className="slide-content">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Calendar Spreads</h3>
              <p className="text-gray-700 mb-4">
                Ein Calendar Spread kombiniert den Verkauf einer kurzfristigen Option mit dem Kauf einer längerfristigen Option mit demselben Strike-Preis.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <h4 className="font-medium text-gray-800">Funktionsweise:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Profitiert vom schnelleren Zeitwertverfall der kurzfristigen Option</li>
                  <li>Nutzt Unterschiede in der Laufzeitenstruktur der Volatilität</li>
                  <li>Begrenztes Risiko bei moderaten Kursbewegungen</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800">Marktszenarien:</h4>
                <p className="text-gray-700">
                  <span className="font-medium text-green-600">Ideal:</span> Seitwärtsmärkte mit fallender Volatilität
                </p>
                <p className="text-gray-700">
                  <span className="font-medium text-red-600">Ungünstig:</span> Starke Kursausschläge oder Volatilitätsanstiege
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-2">Prämienunterschiede nach Laufzeit</h4>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={calendarSpreadData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="strike" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kurz" name="Kurzfristige Option" fill="#7e97c3" />
                    <Bar dataKey="lang" name="Langfristige Option" fill="#003366" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">Beispiel Calendar Spread</h4>
                <div className="text-gray-700">
                  <p><span className="font-medium">Aktie:</span> XYZ bei 100$</p>
                  <p><span className="font-medium">Short Call:</span> 30 Tage Laufzeit, Strike 100$, IV 25%</p>
                  <p><span className="font-medium">Long Call:</span> 60 Tage Laufzeit, Strike 100$, IV 20%</p>
                  <p><span className="font-medium">Nettokosten:</span> 2$ pro Aktie</p>
                  <p className="mt-2"><span className="font-medium">Erwartung:</span> Aktie bleibt nahe 100$, kurzfristige IV sinkt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Summary
    {
      title: "Übersicht und Fazit",
      content: () => (
        <div className="slide-content">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Strategien im Vergleich</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b text-left">Strategie</th>
                      <th className="py-2 px-4 border-b text-left">Szenario</th>
                      <th className="py-2 px-4 border-b text-left">Vorteile</th>
                      <th className="py-2 px-4 border-b text-left">Nachteile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b font-medium">Short Strangle</td>
                      <td className="py-2 px-4 border-b">Seitwärtsmärkte</td>
                      <td className="py-2 px-4 border-b">Doppelte Prämieneinnahme, hohe Gewinnwahrscheinlichkeit</td>
                      <td className="py-2 px-4 border-b">Unbegrenzte Verluste bei starken Bewegungen</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b font-medium">Short Put</td>
                      <td className="py-2 px-4 border-b">Leicht steigende Märkte</td>
                      <td className="py-2 px-4 border-b">Geringeres Risiko, partizipiert am Indexwachstum</td>
                      <td className="py-2 px-4 border-b">Hohes Verlustpotenzial bei stark fallenden Märkten</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b font-medium">Earnings-Trade</td>
                      <td className="py-2 px-4 border-b">Geringe Bewegung und Vola-Rückgang</td>
                      <td className="py-2 px-4 border-b">Profitiert bei Vola-Rückgang, vergleichsweise hohe Prämie</td>
                      <td className="py-2 px-4 border-b">Hohe Verluste bei starken Bewegungen</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b font-medium">Calendar Spreads</td>
                      <td className="py-2 px-4 border-b">Nutzung von Volatilitäts-Differenzen</td>
                      <td className="py-2 px-4 border-b">Profitiert vom Vola-Rückgang am kurzen Ende</td>
                      <td className="py-2 px-4 border-b">Verluste bei kurzfristigem Vola-Anstieg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Fazit</h3>
            <p className="text-gray-700">
              Fortgeschrittene Optionsstrategien bieten Anlegern vielfältige Chancen, von unterschiedlichen Marktszenarien zu profitieren. Sie nutzen dabei vor allem den Zeitwertverfall (Theta) und Volatilitätsdifferenzen, um gezielt Prämien zu generieren und Risiken zu steuern.
            </p>
            <div className="mt-4 bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2">Zusammenfassung der wichtigsten Punkte</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Einkommensstrategien auf Indizes ermöglichen kontinuierliche Erträge bei limitiertem Marktrisiko, erfordern aber konsequentes Risikomanagement.</li>
                <li>Earnings-Strategien profitieren von der typischerweise hohen impliziten Volatilität vor Earnings und dem anschließenden schnellen Rückgang.</li>
                <li>Calendar Spreads nutzen unterschiedliche Zeitwertverfälle und Volatilitätsdifferenzen zwischen Optionen verschiedener Fälligkeiten.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <TrendingUp size={20} className="text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Optionen strategisch nutzen</h1>
              <p className="text-sm">Markus Lehleiter</p>
            </div>
          </div>
          <div className="text-sm">
            Kapitel 2.3 | Slide {currentSlide + 1} von {slides.length}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col p-6 overflow-auto">
        <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col flex-grow">
          {/* Slide Title */}
          <div className="bg-blue-800 text-white py-3 px-6">
            <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
          </div>
          
          {/* Slide Content */}
          <div className="p-6 flex-grow overflow-auto">
            {slides[currentSlide].content()}
          </div>
          
          {/* Navigation */}
          <div className="bg-gray-100 py-3 px-6 flex justify-between items-center">
            <button 
              onClick={goToPrevSlide} 
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'bg-blue-800 text-white hover:bg-blue-700'}`}
            >
              <ChevronLeft size={18} />
              <span>Zurück</span>
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-800' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNextSlide} 
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${currentSlide === slides.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'bg-blue-800 text-white hover:bg-blue-700'}`}
            >
              <span>Weiter</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 py-3 px-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © 2025 Lehleiter Investment Training. Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  );
};

export default Presentation;