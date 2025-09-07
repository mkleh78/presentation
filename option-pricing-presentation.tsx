import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart4, Clock, DollarSign, Percent, TrendingUp, Calculator, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data for price change with volatility
const volatilityData = [
  { volatility: 10, optionPrice: 2.3 },
  { volatility: 20, optionPrice: 4.6 },
  { volatility: 30, optionPrice: 6.9 },
  { volatility: 40, optionPrice: 9.2 },
  { volatility: 50, optionPrice: 11.5 },
];

// Sample data for price change with time decay
const timeDecayData = [
  { days: 90, callPrice: 8.5, putPrice: 7.2 },
  { days: 60, callPrice: 7.0, putPrice: 5.8 },
  { days: 30, callPrice: 5.1, putPrice: 3.9 },
  { days: 14, callPrice: 3.2, putPrice: 2.1 },
  { days: 7, callPrice: 1.8, putPrice: 0.9 },
  { days: 1, callPrice: 0.5, putPrice: 0.2 },
];

// Sample data for interest rate impact
const interestRateData = [
  { rate: 1, callPrice: 4.11, putPrice: 3.86 },
  { rate: 2, callPrice: 4.27, putPrice: 3.69 },
  { rate: 3, callPrice: 4.44, putPrice: 3.53 },
  { rate: 4, callPrice: 4.52, putPrice: 3.45 },
  { rate: 5, callPrice: 4.61, putPrice: 3.37 },
];

const OptionPricingPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // Slide 1: Introduction
    {
      title: "Basiswissen zur Preisbildung bei Optionen",
      content: (
        <div className="space-y-6">
          <p className="text-lg">Kapitel 1.2 aus "Optionen strategisch nutzen" von Markus Lehleiter</p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="font-medium text-blue-800">In diesem Kapitel lernen Sie:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Welche Faktoren den Preis einer Option beeinflussen</li>
              <li>Grundlagen des Black-Scholes-Modells</li>
              <li>Praktische Faustregeln für die Preisbildung</li>
              <li>Wie Sie gute Preise für Optionen erhalten</li>
              <li>Welche Tools Ihnen bei der Preisanalyse helfen</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 2: Key Factors Influencing Option Prices
    {
      title: "Einflussfaktoren auf den Optionspreis",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <DollarSign size={36} className="text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Basiswertpreis</h3>
              <p className="text-center">Der aktuelle Preis des zugrundeliegenden Wertpapiers</p>
              <div className="mt-2 text-sm text-blue-800">
                <p>Call ↑ wenn Preis ↑</p>
                <p>Put ↓ wenn Preis ↑</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <TrendingUp size={36} className="text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Strike-Preis</h3>
              <p className="text-center">Der festgelegte Ausübungspreis der Option</p>
              <div className="mt-2 text-sm text-blue-800">
                <p>Call ↓ wenn Strike ↑</p>
                <p>Put ↑ wenn Strike ↑</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <BarChart4 size={36} className="text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Volatilität</h3>
              <p className="text-center">Die Schwankungsbreite des Basiswerts</p>
              <div className="mt-2 text-sm text-blue-800">
                <p>Call ↑ wenn Volatilität ↑</p>
                <p>Put ↑ wenn Volatilität ↑</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <Clock size={36} className="text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Restlaufzeit</h3>
              <p className="text-center">Die verbleibende Zeit bis zum Verfallsdatum</p>
              <div className="mt-2 text-sm text-blue-800">
                <p>Call ↑ wenn Laufzeit ↑</p>
                <p>Put ↑ wenn Laufzeit ↑</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <Percent size={36} className="text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Zinsniveau</h3>
              <p className="text-center">Der risikofreie Marktzins</p>
              <div className="mt-2 text-sm text-blue-800">
                <p>Call ↑ wenn Zinsen ↑</p>
                <p>Put ↓ wenn Zinsen ↑</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <Zap size={36} className="text-blue-600 mb-2" />
              <h3 className="font-bold text-lg mb-2">Dividenden</h3>
              <p className="text-center">Erwartete Dividendenzahlungen</p>
              <div className="mt-2 text-sm text-blue-800">
                <p>Call ↓ bei Dividenden</p>
                <p>Put ↑ bei Dividenden</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 3: Volatility Impact Chart
    {
      title: "Einfluss der Volatilität auf den Optionspreis",
      content: (
        <div className="space-y-6">
          <p className="mb-4">Höhere Volatilität = höhere Optionspreise, da größere Kursbewegungen wahrscheinlicher werden.</p>
          <div className="bg-white p-4 rounded-lg shadow-md h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={volatilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="volatility" label={{ value: 'Volatilität (%)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Optionspreis (€)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value} €`, 'Optionspreis']} />
                <Line type="monotone" dataKey="optionPrice" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-800">Faustregel:</p>
            <p>Bei einer Verdopplung der impliziten Volatilität verdoppelt sich näherungsweise auch der Preis einer ATM-Option.</p>
          </div>
        </div>
      )
    },
    
    // Slide 4: Time Decay Chart
    {
      title: "Zeitwertverfall von Optionen",
      content: (
        <div className="space-y-6">
          <p className="mb-4">Der Zeitwert einer Option nimmt mit abnehmender Restlaufzeit ab, besonders stark in den letzten Wochen.</p>
          <div className="bg-white p-4 rounded-lg shadow-md h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeDecayData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="days" label={{ value: 'Tage bis zum Verfall', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Optionspreis (€)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value} €`, 'Preis']} />
                <Legend verticalAlign="top" />
                <Line type="monotone" dataKey="callPrice" name="Call-Preis" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="putPrice" name="Put-Preis" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-800">Faustregel:</p>
            <p>Der Zeitwert einer Option wächst in etwa proportional zur Quadratwurzel der verbleibenden Laufzeit.</p>
          </div>
        </div>
      )
    },
    
    // Slide 5: Interest Rate Impact
    {
      title: "Einfluss des Zinsniveaus",
      content: (
        <div className="space-y-6">
          <p className="mb-4">Höhere Zinsen steigern tendenziell die Preise von Call-Optionen und senken die Preise von Put-Optionen.</p>
          <div className="bg-white p-4 rounded-lg shadow-md h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={interestRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rate" label={{ value: 'Zinssatz (%)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Optionspreis (€)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value} €`, 'Preis']} />
                <Legend verticalAlign="top" />
                <Line type="monotone" dataKey="callPrice" name="Call-Preis" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="putPrice" name="Put-Preis" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-800">Faustregel:</p>
            <p>Die Zinseffekte sind bei langfristigen Optionen deutlich stärker ausgeprägt als bei kurzfristigen.</p>
          </div>
        </div>
      )
    },
    
    // Slide 6: Black-Scholes Model
    {
      title: "Das Black-Scholes-Modell",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">Das Black-Scholes-Modell ist die bekannteste Methode zur Optionspreisberechnung.</p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold mb-2">Eingabefaktoren:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Aktueller Kurs des Basiswerts (S)</li>
                  <li>Strike-Preis (K)</li>
                  <li>Restlaufzeit (T)</li>
                  <li>Volatilität (σ)</li>
                  <li>Risikofreier Zinssatz (r)</li>
                </ul>
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold mb-2">Vereinfachte Annahmen:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Konstante Volatilität</li>
                  <li>Keine Dividenden</li>
                  <li>Keine Transaktionskosten</li>
                  <li>Konstanter Zinssatz</li>
                  <li>Europäische Optionen</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-blue-800">Beispiel-Input:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Aktienkurs: 100 €</li>
                  <li>Strike-Preis: 105 €</li>
                  <li>Zeit bis Verfall: 0,5 Jahre</li>
                  <li>Volatilität: 20%</li>
                  <li>Zinssatz: 5%</li>
                </ul>
                <p className="mt-4 font-medium text-blue-800">Call-Preis nach Black-Scholes:</p>
                <p className="mt-2 text-center font-bold text-2xl">4,58 €</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1 flex items-center justify-center">
                <Calculator size={80} className="text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 7: Getting Good Prices
    {
      title: "Wie man gute Preise für Optionen erhält",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Faktoren für gute Preise</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <span className="font-medium">Hohe Liquidität:</span>
                  <p className="text-sm">Viele aktive Markteilnehmer sorgen für enge Spreads und faire Preise.</p>
                </li>
                <li>
                  <span className="font-medium">ATM-Optionen:</span>
                  <p className="text-sm">Optionen nahe am Geld (ATM) haben oft höhere Liquidität und engere Spreads.</p>
                </li>
                <li>
                  <span className="font-medium">Monatliche Optionen:</span>
                  <p className="text-sm">Monatliche Verfallstermine haben meist mehr Handelsvolumen als wöchentliche.</p>
                </li>
                <li>
                  <span className="font-medium">Bekannte Basiswerte:</span>
                  <p className="text-sm">Optionen auf große, bekannte Aktien und Indizes haben bessere Liquidität.</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="font-bold text-lg mb-3">Bid-Ask-Spread</h3>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded mb-2">
                  <span className="font-medium">Bid:</span>
                  <span>2,30 €</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded mb-2">
                  <span className="font-medium">Ask:</span>
                  <span>2,45 €</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="font-medium">Spread:</span>
                  <span>0,15 € (6,5%)</span>
                </div>
                <p className="text-sm mt-3">Ein enger Spread deutet auf gute Liquidität hin.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-medium">Tipp:</p>
                <p className="text-sm">Verwenden Sie Limit-Orders statt Market-Orders, um Kontrolle über den Ausführungspreis zu haben.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Tools for Option Analysis
    {
      title: "Tools für die Optionsanalyse",
      content: (
        <div className="space-y-6">
          <p className="mb-4">Um fundierte Entscheidungen im Optionshandel zu treffen, gibt es nützliche Analyse-Tools:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Interactive Brokers - Szenario Tools</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>In der Trader Workstation (TWS) integriert</li>
                <li>Simuliert verschiedene Marktszenarien</li>
                <li>Analysiert Risiken und potenzielle Gewinne/Verluste</li>
                <li>Visualisiert Payoff-Diagramme</li>
                <li>Für viele Strategien gut geeignet</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm">Vorteil: Direkter Zugang aus der Handelsplattform</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">OptionStrat</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Intuitive, visuelle Benutzeroberfläche</li>
                <li>Detaillierte Gewinn- und Verlustdiagramme</li>
                <li>Flexible Parametereinstellungen</li>
                <li>Möglichkeit, komplexe Strategien zu planen</li>
                <li>Kostenlose Basisversion verfügbar</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm">Vorteil: Einfacher zu bedienen, gute Visualisierungen</p>
              </div>
            </div>
          </div>
          <p className="bg-yellow-50 p-4 rounded-lg">
            Diese Tools tragen dazu bei, fundierte Entscheidungen im Optionshandel zu treffen und das Risikomanagement zu verbessern.
          </p>
        </div>
      )
    },
    
    // Slide 9: Three Simple Rules for Option Pricing
    {
      title: "Drei Faustregeln für die Preisbildung",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
              <h3 className="font-bold text-lg mb-3 text-center">Regel I</h3>
              <div className="flex-1 flex items-center justify-center mb-4">
                <BarChart4 size={48} className="text-blue-500" />
              </div>
              <p className="text-center">Der Optionspreis steigt annähernd proportional zur impliziten Volatilität.</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm">Bei einer Verdopplung der IV verdoppelt sich näherungsweise auch der Preis einer ATM-Option.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
              <h3 className="font-bold text-lg mb-3 text-center">Regel II</h3>
              <div className="flex-1 flex items-center justify-center mb-4">
                <Clock size={48} className="text-blue-500" />
              </div>
              <p className="text-center">Der Zeitwert einer Option steigt proportional zur Quadratwurzel der Restlaufzeit.</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm">Bei einer Vervierfachung der Laufzeit verdoppelt sich näherungsweise der Zeitwert.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
              <h3 className="font-bold text-lg mb-3 text-center">Regel III</h3>
              <div className="flex-1 flex items-center justify-center mb-4">
                <Percent size={48} className="text-blue-500" />
              </div>
              <p className="text-center">Höhere Zinsen erhöhen die Preise von Calls.</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm">Für Puts gilt das Gegenteil: Höhere Zinsen senken tendenziell den Preis von Put-Optionen.</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="font-medium">Diese Faustregeln helfen Ihnen, schnelle Einschätzungen zur Preisbildung vorzunehmen.</p>
          </div>
        </div>
      )
    },
    
    // Slide 10: Conclusion
    {
      title: "Fazit",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Zusammenfassung</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Der Preis einer Option wird von mehreren Faktoren beeinflusst: Basiswertpreis, Strike-Preis, Volatilität, Restlaufzeit, Zinsniveau und Dividenden.</li>
              <li>Das Black-Scholes-Modell bietet eine theoretische Grundlage für die Berechnung von Optionspreisen.</li>
              <li>Für gute Preise sind Liquidität, enge Spreads und die Wahl des richtigen Zeitpunkts entscheidend.</li>
              <li>Drei Faustregeln helfen bei der schnellen Einschätzung von Preisbewegungen: Volatilitätseinfluss, Zeitwertverfall und Zinseffekte.</li>
              <li>Tools wie die Szenarien-Analyse von Interactive Brokers oder OptionStrat unterstützen bei der Beurteilung von Optionsstrategien.</li>
            </ul>
          </div>
          <p className="text-center text-lg font-medium">
            Mit diesem Grundwissen können Sie Optionspreise besser verstehen und fundierte Handelsentscheidungen treffen.
          </p>
        </div>
      )
    },
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-800">{slides[currentSlide].title}</h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto mt-4"></div>
        </header>
        
        <main className="mb-8">
          {slides[currentSlide].content}
        </main>
        
        <footer className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
          >
            <ArrowLeft className="mr-2" size={20} />
            Zurück
          </button>
          
          <span className="text-gray-500">
            Folie {currentSlide + 1} von {slides.length}
          </span>
          
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${currentSlide === slides.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
          >
            Weiter
            <ArrowRight className="ml-2" size={20} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default OptionPricingPresentation;