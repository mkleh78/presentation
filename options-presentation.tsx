import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, DollarSign, TrendingUp, Shield, BarChart3 } from 'lucide-react';

const SlidePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Grundbegriffe und zentrale Konzepte",
      subtitle: "Kapitel 1.1 aus \"Optionen strategisch nutzen\"",
      content: (
        <div className="flex flex-col items-center gap-6">
          <img src="/api/placeholder/180/180" alt="Buchcover" className="rounded-full shadow-lg object-cover" />
          <div className="text-center">
            <p className="text-lg mb-4">Markus Lehleiter</p>
            <p className="text-sm text-gray-600">Investmentexperte mit über 20 Jahren Erfahrung</p>
          </div>
        </div>
      )
    },
    {
      title: "Warum Optionen Mehrwert stiften",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <Shield className="text-blue-600" size={24} />,
              title: "Absicherungsmöglichkeit",
              description: "Reduziert Risiken im Portfolio wie eine Versicherung"
            },
            {
              icon: <TrendingUp className="text-blue-600" size={24} />,
              title: "Maximale Flexibilität",
              description: "Ermöglicht Erfolg in unterschiedlichen Marktphasen"
            },
            {
              icon: <DollarSign className="text-blue-600" size={24} />,
              title: "Hebelwirkung für Kapitaleffizienz",
              description: "Kontrolliert größere Marktpositionen mit geringerem Kapital"
            },
            {
              icon: <BarChart3 className="text-blue-600" size={24} />,
              title: "Regelmäßige Einnahmen",
              description: "Generiert stabile Prämieneinnahmen durch den Verkauf von Optionen"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start gap-3">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Was sind Optionen?",
      content: (
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">Optionen sind Termingeschäfte, die sich auf die zukünftige Lieferung eines Basiswerts beziehen. Eine Option gibt dem Käufer das <span className="font-semibold text-blue-600">Recht, aber nicht die Verpflichtung</span>, einen Basiswert zu kaufen oder zu verkaufen.</p>
            
            <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600 mb-4">
              <p className="font-semibold">Eine Option ist ein Vertrag zwischen zwei Parteien:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Bestimmte Menge (Kontraktgröße)</li>
                <li>eines Basiswerts (Underlying)</li>
                <li>zu einem festgelegten Preis (Basispreis/Strike)</li>
                <li>innerhalb einer bestimmten Frist (bis zur Fälligkeit)</li>
                <li>zu kaufen (Call-Option) oder zu verkaufen (Put-Option)</li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600 italic">Der Käufer zahlt eine Prämie an den Verkäufer (Stillhalter), der sich verpflichtet, den Basiswert zu liefern oder abzunehmen.</p>
          </div>
        </div>
      )
    },
    {
      title: "Optionskontrakt auf einem Bierdeckel",
      content: (
        <div className="flex justify-center">
          <div className="bg-yellow-100 w-full max-w-md h-64 rounded-lg shadow-lg flex flex-col justify-center items-center transform -rotate-3 border-2 border-yellow-600 p-4 text-center">
            <div className="text-sm text-gray-700 mb-2">Ein Optionskontrakt ist ein:</div>
            <div className="text-lg font-bold mb-1">RECHT</div>
            <div className="text-sm mb-1">(aber keine Pflicht)</div>
            <div className="text-lg font-bold mb-1">100 APPLE-AKTIEN</div>
            <div className="text-sm mb-1">zu kaufen oder zu verkaufen</div>
            <div className="text-lg font-bold mb-1">ZU 150 USD</div>
            <div className="text-sm mb-1">bis zum</div>
            <div className="text-lg font-bold">15. JUNI 2025</div>
          </div>
        </div>
      )
    },
    {
      title: "Call- und Put-Optionen",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-green-500">
            <h3 className="font-bold text-xl mb-3 text-green-600">Call-Option</h3>
            <p className="mb-3">Das <span className="font-semibold">Recht zum Kauf</span> des Basiswertes zum festgelegten Strike-Preis.</p>
            <div className="bg-gray-100 p-3 rounded mb-3">
              <h4 className="font-semibold">Käufer (Long Call)</h4>
              <p className="text-sm">Zahlt Prämie und erhält das Recht zu kaufen</p>
              <p className="text-sm text-green-600">Profitiert von steigenden Kursen</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <h4 className="font-semibold">Verkäufer (Short Call)</h4>
              <p className="text-sm">Erhält Prämie und übernimmt die Pflicht zu verkaufen</p>
              <p className="text-sm text-green-600">Profitiert von seitwärts/leicht fallenden Kursen</p>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-red-500">
            <h3 className="font-bold text-xl mb-3 text-red-600">Put-Option</h3>
            <p className="mb-3">Das <span className="font-semibold">Recht zum Verkauf</span> des Basiswertes zum festgelegten Strike-Preis.</p>
            <div className="bg-gray-100 p-3 rounded mb-3">
              <h4 className="font-semibold">Käufer (Long Put)</h4>
              <p className="text-sm">Zahlt Prämie und erhält das Recht zu verkaufen</p>
              <p className="text-sm text-red-600">Profitiert von fallenden Kursen</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <h4 className="font-semibold">Verkäufer (Short Put)</h4>
              <p className="text-sm">Erhält Prämie und übernimmt die Pflicht zu kaufen</p>
              <p className="text-sm text-red-600">Profitiert von seitwärts/leicht steigenden Kursen</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Payoff-Diagramme",
      content: (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="font-semibold text-center mb-3">Long Call</h3>
            <div className="bg-white p-3 rounded-lg shadow-md h-64 flex items-center justify-center">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Coordinate axes */}
                <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="1.5" />
                <line x1="50" y1="30" x2="50" y2="150" stroke="black" strokeWidth="1.5" />
                
                {/* X-axis labels */}
                <text x="250" y="170" textAnchor="middle" fontSize="12">Aktienkurs</text>
                <text x="50" y="170" textAnchor="middle" fontSize="10">0</text>
                <text x="150" y="170" textAnchor="middle" fontSize="10">Strike (55€)</text>
                
                {/* Y-axis labels */}
                <text x="30" y="30" textAnchor="end" fontSize="10">Gewinn</text>
                <text x="30" y="150" textAnchor="end" fontSize="10">0</text>
                <text x="30" y="110" textAnchor="end" fontSize="10">-3€</text>
                
                {/* Breakeven point */}
                <text x="180" y="170" textAnchor="middle" fontSize="10">Break-even (58€)</text>
                <line x1="180" y1="150" x2="180" y2="145" stroke="gray" strokeDasharray="2,2" />
                
                {/* Payoff line */}
                <line x1="50" y1="110" x2="150" y2="110" stroke="blue" strokeWidth="2" />
                <line x1="150" y1="110" x2="250" y2="50" stroke="blue" strokeWidth="2" />
                
                {/* Strike point */}
                <line x1="150" y1="110" x2="150" y2="150" stroke="gray" strokeDasharray="2,2" />

                {/* Additional annotations */}
                <text x="200" y="75" textAnchor="middle" fontSize="10" fill="blue">Unbegrenztes Gewinnpotential</text>
                <text x="100" y="125" textAnchor="middle" fontSize="10" fill="red">Verlust begrenzt auf Prämie</text>
              </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-center mb-3">Long Put</h3>
            <div className="bg-white p-3 rounded-lg shadow-md h-64 flex items-center justify-center">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Coordinate axes */}
                <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="1.5" />
                <line x1="50" y1="30" x2="50" y2="150" stroke="black" strokeWidth="1.5" />
                
                {/* X-axis labels */}
                <text x="250" y="170" textAnchor="middle" fontSize="12">Aktienkurs</text>
                <text x="50" y="170" textAnchor="middle" fontSize="10">0</text>
                <text x="150" y="170" textAnchor="middle" fontSize="10">Strike (55€)</text>
                
                {/* Y-axis labels */}
                <text x="30" y="30" textAnchor="end" fontSize="10">Gewinn</text>
                <text x="30" y="150" textAnchor="end" fontSize="10">0</text>
                <text x="30" y="110" textAnchor="end" fontSize="10">-3€</text>
                
                {/* Breakeven point */}
                <text x="120" y="170" textAnchor="middle" fontSize="10">Break-even (52€)</text>
                <line x1="120" y1="150" x2="120" y2="145" stroke="gray" strokeDasharray="2,2" />
                
                {/* Payoff line */}
                <line x1="150" y1="110" x2="250" y2="110" stroke="red" strokeWidth="2" />
                <line x1="50" y1="50" x2="150" y2="110" stroke="red" strokeWidth="2" />
                
                {/* Strike point */}
                <line x1="150" y1="110" x2="150" y2="150" stroke="gray" strokeDasharray="2,2" />

                {/* Additional annotations */}
                <text x="70" y="75" textAnchor="middle" fontSize="10" fill="red">Hoher Gewinn bei Kursverfall</text>
                <text x="200" y="125" textAnchor="middle" fontSize="10" fill="red">Verlust begrenzt auf Prämie</text>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Optionen als Versicherung",
      content: (
        <div className="flex flex-col gap-6">
          <p className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600">
            Optionen haben viele Ähnlichkeiten mit Versicherungen. Sie schützen vor unerwünschten Ereignissen und kosten eine Prämie.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left">Autoversicherung</th>
                  <th className="p-3 text-left">Optionsverkäufer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Verkauft Versicherung gegen eine Prämie</td>
                  <td className="p-3">Verkauft Optionen und bekommt eine Prämie</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Wenn kein Schaden eintritt, kassiert die Versicherung die Prämie</td>
                  <td className="p-3">Wenn Marktrisiko nicht eintritt, wird Prämie vereinnahmt</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wenn ein Schaden eintritt, erhält die Versicherung trotzdem die Prämie</td>
                  <td className="p-3">Wenn Position verliert, wird trotzdem Prämie als Puffer vereinnahmt</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3">Hohe Gewinnwahrscheinlichkeit</td>
                  <td className="p-3">Hohe Gewinnwahrscheinlichkeit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            Der Verkäufer (Stillhalter) einer Option übernimmt die Rolle des Versicherers und erhält dafür eine Prämie. Der Käufer der Option zahlt diese Prämie für Absicherung oder Chancen.
          </p>
        </div>
      )
    },
    {
      title: "Beispiel für Optionskontrakte",
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Parameter</th>
                <th className="p-3 text-left">Call-Option (6 Monate)</th>
                <th className="p-3 text-left">Put-Option (3 Monate)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="p-3 font-semibold">Basiswert</td>
                <td className="p-3">100 Aktien</td>
                <td className="p-3">100 Aktien</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3 font-semibold">Strike-Preis</td>
                <td className="p-3">50 EUR pro Aktie</td>
                <td className="p-3">50 EUR pro Aktie</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Laufzeit</td>
                <td className="p-3">6 Monate</td>
                <td className="p-3">3 Monate</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3 font-semibold">Recht des Käufers</td>
                <td className="p-3">Kaufen zu 50 EUR</td>
                <td className="p-3">Verkaufen zu 50 EUR</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Optionspreis</td>
                <td className="p-3">2,5 EUR</td>
                <td className="p-3">1,5 EUR</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3 font-semibold">Prämie pro Kontrakt</td>
                <td className="p-3">250 EUR</td>
                <td className="p-3">150 EUR</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Erwartung des Käufers</td>
                <td className="p-3">Kurs steigt</td>
                <td className="p-3">Kurs fällt</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3 font-semibold">Max. Gewinn des Käufers</td>
                <td className="p-3">Unbegrenzt</td>
                <td className="p-3">4850 EUR</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Max. Verlust des Käufers</td>
                <td className="p-3">250 EUR (Prämie)</td>
                <td className="p-3">150 EUR (Prämie)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "Optionen vs. Optionsscheine",
      content: (
        <div className="flex flex-col gap-6">
          <p className="mb-4">Optionen und Optionsscheine werden oft verwechselt, obwohl wichtige Unterschiede bestehen:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left">Kriterium</th>
                  <th className="p-3 text-left">Optionen</th>
                  <th className="p-3 text-left">Optionsscheine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Preisfindung</td>
                  <td className="p-3 text-green-600">transparent</td>
                  <td className="p-3 text-orange-600">weniger transparent</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 font-semibold">Emittentenrisiko</td>
                  <td className="p-3 text-green-600">nein</td>
                  <td className="p-3 text-orange-600">ja</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Standardisierung</td>
                  <td className="p-3 text-green-600">hoch</td>
                  <td className="p-3 text-orange-600">geringer</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 font-semibold">Handelsplattform</td>
                  <td className="p-3">Terminbörse</td>
                  <td className="p-3">börslich und außerbörslich</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Stillhalterposition möglich</td>
                  <td className="p-3 text-green-600">ja</td>
                  <td className="p-3 text-orange-600">nein</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            Optionen bieten durch ihre Transparenz, das fehlende Emittentenrisiko und die Möglichkeit, als Stillhalter zu agieren, deutliche Vorteile gegenüber Optionsscheinen.
          </p>
        </div>
      )
    },
    {
      title: "Zusammenfassung",
      content: (
        <div className="flex flex-col gap-6">
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600">
            <p className="font-semibold mb-2">Die wichtigsten Punkte aus diesem Kapitel:</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">Optionen sind Termingeschäfte und bieten das Recht, aber nicht die Verpflichtung, einen Basiswert zu kaufen oder zu verkaufen</li>
              <li className="mb-2">Es gibt Call-Optionen (Kaufrecht) und Put-Optionen (Verkaufsrecht)</li>
              <li className="mb-2">Ein Optionskontrakt umfasst wesentliche Parameter wie Laufzeit, Basispreis, Basiswert, Prämie und Optionstyp</li>
              <li className="mb-2">Amerikanische Optionen können jederzeit bis zum Verfallsdatum, europäische nur am Verfallstag ausgeübt werden</li>
              <li className="mb-2">Die Optionsprämie setzt sich aus innerem Wert und Zeitwert zusammen</li>
              <li>Optionen bieten Vorteile gegenüber Optionsscheinen (keine Emittentenrisiken, Stillhalterposition möglich)</li>
            </ul>
          </div>
          
          <p className="font-medium">
            Mit diesen Grundlagen sind Sie gut vorbereitet, um in die weiteren Kapitel einzusteigen und Optionen strategisch für Ihre Geldanlage zu nutzen.
          </p>
        </div>
      )
    }
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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden bg-white">
        {/* Header */}
        <div className="bg-blue-700 text-white p-6">
          <h1 className="text-2xl font-bold">Optionen strategisch nutzen</h1>
          <p className="opacity-80">Kapitel 1.1 - Grundbegriffe und zentrale Konzepte</p>
        </div>
        
        {/* Slide content */}
        <div className="p-6 md:p-10 min-h-96">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">{slides[currentSlide].title}</h2>
          {slides[currentSlide].subtitle && (
            <h3 className="text-xl text-gray-600 mb-6">{slides[currentSlide].subtitle}</h3>
          )}
          
          <div className="mt-4">
            {slides[currentSlide].content}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            <ArrowLeft size={16} />
            Zurück
          </button>
          
          <div className="text-gray-500">
            Folie {currentSlide + 1} von {slides.length}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded ${currentSlide === slides.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Weiter
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidePresentation;