import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp, Zap, Clock, BarChart4, Landmark, ShieldCheck, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Sample data for charts
const leverageComparisonData = [
  { name: 'Direkte Aktie', investment: 10000, control: 10000, color: '#003366' },
  { name: 'LEAPS Call', investment: 4500, control: 10000, color: '#7e97c3' },
];

const timeDecayData = [
  { months: 12, shortTerm: 80, longTerm: 95 },
  { months: 9, shortTerm: 65, longTerm: 90 },
  { months: 6, shortTerm: 45, longTerm: 83 },
  { months: 3, shortTerm: 20, longTerm: 75 },
  { months: 1, shortTerm: 5, longTerm: 60 },
  { months: 0, shortTerm: 0, longTerm: 0 },
];

const exampleData = [
  { 
    category: 'Investitionsansatz', 
    direkterAktienkauf: 'Direkte Aktienkauf', 
    leapsCall: 'LEAPS Call (Strike 105 $, 12/2025)'
  },
  { 
    category: 'Kaufpreis (02.01.2023)', 
    direkterAktienkauf: '107,03 $ pro Aktie', 
    leapsCall: '44,57 $ pro Option'
  },
  { 
    category: 'Investitionssumme', 
    direkterAktienkauf: '10.703 $ (100 Aktien)', 
    leapsCall: '4.457 $ (100 Optionen)'
  },
  { 
    category: 'Wert am 03.07.2023/2024', 
    direkterAktienkauf: '27.879 $ (Kursanstieg auf 278,79 $ pro Aktie)', 
    leapsCall: '18.799 $ (stark im Geld)'
  },
  { 
    category: 'Rendite', 
    direkterAktienkauf: '+160,48%', 
    leapsCall: '+321,79%'
  },
  { 
    category: 'Kapitalaufwand', 
    direkterAktienkauf: 'Hoch (volle Investition gebunden)', 
    leapsCall: 'Niedrig (nur Prämie gebunden)'
  },
  { 
    category: 'Verlustpotenzial', 
    direkterAktienkauf: 'Hohe Verluste möglich, wenn Aktie stark fällt', 
    leapsCall: 'Maximaler Verlust auf Prämie begrenzt'
  },
  { 
    category: 'Hebelwirkung', 
    direkterAktienkauf: 'Keine', 
    leapsCall: 'Hohe Hebelwirkung (höheres Risiko und Potenzial)'
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // Slide 1: Title
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-primary mb-6">Optionen langfristig nutzen</h1>
      <div className="w-20 h-1 bg-accent mb-6"></div>
      <h2 className="text-2xl mb-8">LEAPS - Long-Term Equity Anticipation Securities</h2>
      <p className="text-lg max-w-2xl">Strategische Vorteile, Risikomanagement und erfolgreicher Einsatz</p>
      <div className="mt-8 text-sm text-gray-500">
        Aus Kapitel 2.4: "Optionen strategisch nutzen" von Markus Lehleiter
      </div>
    </div>,
    
    // Slide 2: What are LEAPS?
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-primary mb-6">Was sind LEAPS?</h2>
      <div className="flex flex-1 gap-8 items-center mb-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Clock className="text-primary mr-3" size={24} />
            <h3 className="text-xl font-semibold">Definition</h3>
          </div>
          <p className="mb-4">LEAPS (<b>L</b>ong-Term <b>E</b>quity <b>A</b>nticipation <b>S</b>ecurities) sind Optionen mit einer Laufzeit von mindestens einem Jahr.</p>
          <p>Die längere Laufzeit ermöglicht es, langfristige Marktbewegungen besser auszunutzen, da der Zeitwertverfall langsamer verläuft.</p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Zap className="text-primary mr-3" size={24} />
            <h3 className="text-xl font-semibold">Unterschied zu kurzfristigen Optionen</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Langsamerer Zeitwertverfall</li>
            <li>Größere Flexibilität bei der Ausstiegswahl</li>
            <li>Mehr Zeit für das Eintreffen der Markterwartung</li>
            <li>Geringere monatliche Prämie (im Verhältnis)</li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Zeitwertverfall: LEAPS vs. kurzfristige Optionen</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={timeDecayData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="months" label={{ value: 'Monate bis Verfall', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Verbleibender Zeitwert (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="shortTerm" stroke="#003366" name="Kurzfristige Option" />
            <Line type="monotone" dataKey="longTerm" stroke="#ffd700" name="LEAPS" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>,
    
    // Slide 3: Advantages and Risks
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-primary mb-6">Chancen und Risiken von LEAPS</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ShieldCheck className="text-green-600 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Vorteile</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Hebelwirkung:</b> Kontrolle größerer Positionen mit geringerem Kapitaleinsatz</li>
            <li><b>Begrenztes Risiko:</b> Maximalverlust auf die gezahlte Prämie beschränkt</li>
            <li><b>Flexibilität:</b> Für spekulative Zwecke und Portfolioabsicherung geeignet</li>
            <li><b>Kapitaleffizienz:</b> Freisetzung von Kapital für andere Investments</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-amber-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Risiken</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Höhere Prämien:</b> Längere Laufzeit bedeutet höhere absolute Kosten</li>
            <li><b>Liquiditätsrisiko:</b> Teilweise geringere Liquidität als bei kurzfristigen Optionen</li>
            <li><b>Zeitwertverfall:</b> Auch LEAPS unterliegen dem Zeitwertverfall, besonders in den letzten 6 Monaten</li>
            <li><b>Totalverlust:</b> Bei ungünstiger Marktentwicklung kann die gesamte Prämie verloren gehen</li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Hebeleffekt im Vergleich</h3>
        <div className="flex gap-8">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={leverageComparisonData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Betrag in €', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar name="Investiertes Kapital" dataKey="investment" fill="#003366" />
                <Bar name="Kontrolliertes Kapital" dataKey="control" fill="#ffd700" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-blue-50 p-4 rounded-md border-l-4 border-primary">
              <h4 className="font-bold mb-2">Höhere Kapitaleffizienz</h4>
              <p>Mit LEAPS kontrollieren Sie dasselbe Aktienvolumen mit weniger als der Hälfte des Kapitals im Vergleich zum direkten Aktienkauf.</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-md border-l-4 border-accent mt-4">
              <h4 className="font-bold mb-2">Wichtig zu beachten</h4>
              <p>Der Hebeleffekt verstärkt sowohl potenzielle Gewinne als auch Verluste.</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    
    // Slide 4: Optimal Use of LEAPS
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-primary mb-6">Umgang mit LEAPS</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Landmark className="text-primary mr-3" size={24} />
            <h3 className="text-xl font-semibold">Einsatzzwecke</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Langfristige Marktpartizipation mit reduziertem Kapital</li>
            <li>Absicherung eines bestehenden Portfolios über längere Zeiträume</li>
            <li>Strategische Positionierung für erwartete langfristige Trends</li>
            <li>Alternative zu Direktinvestitionen bei volatilen Märkten</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BarChart4 className="text-primary mr-3" size={24} />
            <h3 className="text-xl font-semibold">Kaufkriterien</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Optionen mit hohem Delta wählen (>0,70)</li>
            <li>Auf liquide, qualitativ hochwertige Basiswerte setzen</li>
            <li>Bei niedriger impliziter Volatilität kaufen</li>
            <li>Ausreichende Restlaufzeit wählen (>12 Monate)</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ArrowUp className="text-green-600 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Best Practices</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Rechtzeitiges Rollen:</b> Bei 6-9 Monaten Restlaufzeit in längerfristige LEAPS rollen</li>
            <li><b>Diversifikation:</b> Verschiedene Basiswerte und Fälligkeiten zur Risikostreuung</li>
            <li><b>Aktives Management:</b> Regelmäßige Überprüfung der Positionen</li>
            <li><b>Strategie testen:</b> Mit kleinen Positionen starten und Erfahrungen sammeln</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24">
            <div className="absolute transform rotate-45 bg-accent text-black font-bold text-xs text-center leading-5 py-1 right-[-35px] top-[32px] w-[170px]">
              WICHTIG
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Optimaler Einstiegszeitpunkt</h3>
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-primary mb-4">
            <p>Kaufen Sie LEAPS vorzugsweise in Phasen <b>niedriger impliziter Volatilität</b>, wenn die Optionspreise relativ günstig sind.</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-md border-l-4 border-accent">
            <p>Prüfen Sie den IV-Rank oder IV-Perzentil, um zu beurteilen, ob die aktuelle Volatilität im historischen Vergleich günstig ist.</p>
          </div>
        </div>
      </div>
    </div>,
    
    // Slide 5: Practical Example
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-primary mb-6">Beispiel: Vergleich von Aktienkauf und LEAPS</h2>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategorie
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Direkter Aktienkauf
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LEAPS Call-Option
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {exampleData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.direkterAktienkauf}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.leapsCall}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-xl font-semibold mb-3 text-primary">Schlüsselerkenntnisse</div>
          <ul className="list-disc pl-5 space-y-2">
            <li>LEAPS erzielten eine <span className="font-bold text-green-600">mehr als doppelt so hohe prozentuale Rendite</span> bei geringerem Kapitaleinsatz</li>
            <li>Der direkte Aktienkauf führte zu einem höheren absoluten Gewinn, band jedoch mehr Kapital</li>
            <li>LEAPS begrenzten das Verlustrisiko auf die investierte Prämie</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-xl font-semibold mb-3 text-accent">Optimalerweise anwenden wenn:</div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sie langfristig bullisch für den Basiswert sind</li>
            <li>Sie Ihr Kapital effizienter einsetzen möchten</li>
            <li>Die implizite Volatilität relativ niedrig ist</li>
            <li>Sie bereit sind, die höhere Komplexität von Optionen zu managen</li>
          </ul>
        </div>
      </div>
    </div>,
    
    // Slide 6: Conclusion
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-primary mb-6">Fazit</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg mb-4">LEAPS ermöglichen eine kapitaleffiziente Teilnahme am Markt auf längere Sicht. Sie vereinen Flexibilität, Hebelwirkung und geringeres Kapitalrisiko und eignen sich für spekulative wie absichernde Strategien.</p>
        <p className="text-lg">Um LEAPS erfolgreich zu nutzen, brauchen Sie fundierte Marktkenntnisse und sorgfältige Planung. Richtig eingesetzt, bereichern LEAPS langfristige Anlagestrategien.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-primary">Zusammenfassung</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><b>Langfristige Optionen:</b> LEAPS sind Optionen mit einer Laufzeit von mindestens einem Jahr, was den Zeitwertverfall verlangsamt und mehr Zeit für die Entwicklung von Trends gibt.</li>
          <li><b>Hebelwirkung:</b> Mit LEAPS können Anleger große Aktienpositionen kontrollieren, ohne den vollen Kaufpreis zu zahlen, was sowohl das Gewinnpotenzial als auch das Verlustrisiko erhöht.</li>
          <li><b>Flexibel einsetzbar:</b> LEAPS eignen sich sowohl für spekulative Investitionen als auch zur langfristigen Absicherung von Portfolios.</li>
          <li><b>Geringeres Kapitalrisiko:</b> Im Vergleich zum direkten Aktienkauf ist der Kapitaleinsatz geringer, da nur die Prämie gezahlt wird.</li>
          <li><b>Wichtige Kaufkriterien:</b> LEAPS sollten in Phasen niedriger Volatilität gekauft werden, um von günstigen Prämien und einem geringeren Zeitwertverfall zu profitieren.</li>
        </ul>
      </div>
    </div>
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
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Optionen strategisch nutzen</div>
          <div className="text-sm">Kapitel 2.4: LEAPS</div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
          {slides[currentSlide]}
        </div>
      </main>
      
      {/* Footer with Navigation */}
      <footer className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={prevSlide} 
            className={`flex items-center px-4 py-2 rounded ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} className="mr-1" /> Zurück
          </button>
          
          <div className="text-gray-600">
            Folie {currentSlide + 1} von {slides.length}
          </div>
          
          <button 
            onClick={nextSlide} 
            className={`flex items-center px-4 py-2 rounded ${currentSlide === slides.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
            disabled={currentSlide === slides.length - 1}
          >
            Weiter <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </footer>
      
      {/* Custom styling */}
      <style jsx global>{`
        :root {
          --primary: #003366;
          --primary-dark: #002347;
          --secondary: #7e97c3;
          --accent: #ffd700;
          --light: #ffffff;
          --dark: #333333;
        }
        
        .bg-primary {
          background-color: var(--primary);
        }
        
        .bg-secondary {
          background-color: var(--secondary);
        }
        
        .bg-accent {
          background-color: var(--accent);
        }
        
        .text-primary {
          color: var(--primary);
        }
        
        .text-secondary {
          color: var(--secondary);
        }
        
        .text-accent {
          color: var(--accent);
        }
        
        .border-primary {
          border-color: var(--primary);
        }
        
        .border-accent {
          border-color: var(--accent);
        }
      `}</style>
    </div>
  );
};

export default Presentation;