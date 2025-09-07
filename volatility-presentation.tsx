import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, LineChart, TrendingUp, TrendingDown, Calendar, Info, AlertTriangle } from 'lucide-react';

// Custom Chart Components
const VolatilityChart = () => (
  <svg width="100%" height="220" viewBox="0 0 600 220">
    <path d="M0,100 Q150,180 300,100 T600,100" stroke="#003366" strokeWidth="3" fill="none" />
    <path d="M0,100 Q75,30 150,100 Q225,170 300,100 Q375,30 450,100 Q525,170 600,100" 
      stroke="#e53e3e" strokeWidth="3" fill="none" strokeDasharray="5,5" />
    <text x="150" y="20" fill="#e53e3e" fontSize="14">Hohe Volatilität</text>
    <text x="400" y="20" fill="#003366" fontSize="14">Niedrige Volatilität</text>
    <line x1="0" y1="100" x2="600" y2="100" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
  </svg>
);

const VolatilitySmileChart = () => (
  <svg width="100%" height="220" viewBox="0 0 600 220">
    <path d="M50,170 Q300,20 550,170" stroke="#003366" strokeWidth="3" fill="none" />
    <line x1="50" y1="200" x2="550" y2="200" stroke="#666" strokeWidth="2" />
    <line x1="300" y1="50" x2="300" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
    <text x="310" y="215" fill="#666" fontSize="12">ATM</text>
    <text x="100" y="215" fill="#666" fontSize="12">OTM Puts</text>
    <text x="450" y="215" fill="#666" fontSize="12">OTM Calls</text>
    <text x="20" y="100" fill="#666" fontSize="12" transform="rotate(90 20,100)">Implizite Volatilität</text>
    <text x="290" y="30" fill="#003366" fontSize="14">Volatilitäts-Smile</text>
  </svg>
);

const VolatilitySkewChart = () => (
  <svg width="100%" height="220" viewBox="0 0 600 220">
    <path d="M50,120 Q200,50 300,80 T550,170" stroke="#003366" strokeWidth="3" fill="none" />
    <line x1="50" y1="200" x2="550" y2="200" stroke="#666" strokeWidth="2" />
    <line x1="300" y1="50" x2="300" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
    <text x="310" y="215" fill="#666" fontSize="12">ATM</text>
    <text x="100" y="215" fill="#666" fontSize="12">OTM Puts</text>
    <text x="450" y="215" fill="#666" fontSize="12">OTM Calls</text>
    <text x="20" y="100" fill="#666" fontSize="12" transform="rotate(90 20,100)">Implizite Volatilität</text>
    <text x="290" y="30" fill="#003366" fontSize="14">Volatilitäts-Skew</text>
  </svg>
);

const VixTermStructureChart = () => (
  <svg width="100%" height="220" viewBox="0 0 600 220">
    <path d="M50,170 C150,140 250,130 550,50" stroke="#003366" strokeWidth="3" fill="none" />
    <path d="M50,100 C200,120 300,130 550,170" stroke="#e53e3e" strokeWidth="3" fill="none" strokeDasharray="5,5" />
    <line x1="50" y1="200" x2="550" y2="200" stroke="#666" strokeWidth="2" />
    <text x="300" y="215" fill="#666" fontSize="12">Laufzeit</text>
    <text x="20" y="100" fill="#666" fontSize="12" transform="rotate(90 20,100)">Volatilität</text>
    <text x="100" y="90" fill="#e53e3e" fontSize="12">Backwardation</text>
    <text x="400" y="90" fill="#003366" fontSize="12">Contango</text>
  </svg>
);

const VolatilityCrushChart = () => (
  <svg width="100%" height="220" viewBox="0 0 600 220">
    <path d="M50,150 L200,130 L300,50 L350,170 L550,160" stroke="#003366" strokeWidth="3" fill="none" />
    <line x1="50" y1="200" x2="550" y2="200" stroke="#666" strokeWidth="2" />
    <line x1="300" y1="30" x2="300" y2="200" stroke="#e53e3e" strokeWidth="2" strokeDasharray="5,5" />
    <text x="270" y="215" fill="#e53e3e" fontSize="12">Earnings</text>
    <text x="20" y="100" fill="#666" fontSize="12" transform="rotate(90 20,100)">Implizite Volatilität</text>
    <text x="310" y="80" fill="#003366" fontSize="14">IV-Crush</text>
  </svg>
);

const IVRankChart = () => (
  <svg width="100%" height="220" viewBox="0 0 600 220">
    <rect x="50" y="50" width="500" height="120" fill="#f0f0f0" stroke="#ccc" />
    <line x1="50" y1="170" x2="550" y2="170" stroke="#666" strokeWidth="2" />
    <line x1="50" y1="50" x2="550" y2="50" stroke="#666" strokeWidth="2" />
    <line x1="50" y1="110" x2="550" y2="110" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
    <path d="M50,150 L100,140 L200,120 L300,100 L400,70 L500,90 L550,80" stroke="#003366" strokeWidth="3" fill="none" />
    <circle cx="400" cy="70" r="6" fill="#e53e3e" />
    <text x="30" y="50" fill="#666" fontSize="12">IV Hoch</text>
    <text x="30" y="170" fill="#666" fontSize="12">IV Tief</text>
    <text x="390" y="60" fill="#e53e3e" fontSize="12">Aktuell</text>
    <text x="390" y="40" fill="#e53e3e" fontSize="12">IV-Rank: 80</text>
  </svg>
);

// Presentation Component
const VolatilityPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Volatilität verstehen",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Volatilität ist ein zentraler Faktor im Optionshandel und beschreibt die Schwankungsintensität eines Basiswertes. 
            Sie beeinflusst maßgeblich die Preisbildung bei Optionen.
          </p>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 flex items-center">
              <Info className="w-5 h-5 mr-2" /> Kernpunkte:
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>Höhere Volatilität = höhere Optionsprämien</li>
              <li>Zentral für die Bewertung von Risiko und Chancen</li>
              <li>Direkte Auswirkung auf den Zeitwert von Optionen</li>
              <li>Bestimmt maßgeblich die Preise von Optionen</li>
            </ul>
          </div>
          <VolatilityChart />
        </div>
      )
    },
    {
      title: "Historische vs. Implizite Volatilität",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-primary mb-2 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2" /> Historische Volatilität
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Basiert auf vergangenen Kursschwankungen</li>
                <li>Vergangenheitsbezogen</li>
                <li>Berechnet durch Standardabweichung der Kursrenditen</li>
                <li>Zeigt, wie stark der Kurs in der Vergangenheit schwankte</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" /> Implizite Volatilität (IV)
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Im Optionspreis enthalten und vom Markt erwartet</li>
                <li>Zukunftsbezogen</li>
                <li>Abgeleitet aus aktuellen Optionspreisen</li>
                <li>Zeigt, welche Schwankungen der Markt erwartet</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="max-w-xl border-t-2 border-gray-300 w-full text-center pt-4">
              <p className="text-sm text-gray-600 italic">
                "Die historische Volatilität sagt, wie es war; die implizite Volatilität, wie es sein könnte."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Volatilitäts-Kontraktionen und -Expansionen",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Die Volatilität verhält sich zyklisch – auf Phasen hoher Volatilität folgen typischerweise Phasen niedriger Volatilität und umgekehrt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Volatilitäts-Expansion</h3>
              <ul className="space-y-1 list-disc pl-5">
                <li>Starker Anstieg der impliziten Volatilität</li>
                <li>Oft durch Unsicherheit oder Marktereignisse ausgelöst</li>
                <li>Optionsprämien steigen</li>
                <li>Ideal für Optionsverkäufer</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Volatilitäts-Kontraktion</h3>
              <ul className="space-y-1 list-disc pl-5">
                <li>Rückgang der impliziten Volatilität</li>
                <li>Markt beruhigt sich</li>
                <li>Optionsprämien fallen</li>
                <li>Ideal für vorherige Optionskäufer</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" /> Wichtig für Händler:
            </h3>
            <p className="mt-1">
              Extreme Volatilitätsausschläge bei Aktien sind meist kurzlebig und kehren dann zur Normalität zurück. Bei Rohstoffen halten sie hingegen oft länger an.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Volatilitäts-Smile und Skew",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Volatilitäts-Smile</h3>
              <p>Der Volatilitäts-Smile zeigt, dass die implizite Volatilität bei Optionen, die weit im oder aus dem Geld liegen, höher ist als bei ATM-Optionen.</p>
              <VolatilitySmileChart />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-primary mb-2">Volatilitäts-Skew</h3>
              <p>Der Skew zeigt eine asymmetrische Verteilung der Volatilität. Bei Aktien ist die IV für Puts oft höher als für Calls, was die Markterwartung für größere Abschwünge reflektiert.</p>
              <VolatilitySkewChart />
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <p className="text-sm">
              <strong>Hinweis:</strong> Der Skew bei Aktien (höhere Put-IV) reflektiert die Absicherung gegen Crashes, während ein symmetrischer Smile (z.B. bei Forex) gleichmäßige Erwartungen in beide Richtungen zeigt.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Volatilität vor Earnings",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Vor wichtigen Ereignissen wie Quartalsberichten steigt die implizite Volatilität typischerweise stark an – und fällt nach dem Ereignis ebenso schnell wieder ab (IV-Crush).
          </p>
          <VolatilityCrushChart />
          <div className="bg-white p-4 rounded-lg border border-gray-300 mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Beispiel: Typischer IV-Verlauf vor/nach Earnings</h3>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Datum</th>
                  <th className="p-2 text-left">Aktienkurs</th>
                  <th className="p-2 text-left">Implizite Volatilität</th>
                  <th className="p-2 text-left">Anmerkung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-t">1 Woche vor Earnings</td>
                  <td className="p-2 border-t">$100</td>
                  <td className="p-2 border-t">80%</td>
                  <td className="p-2 border-t">Ansteigende IV</td>
                </tr>
                <tr>
                  <td className="p-2 border-t">1 Tag vor Earnings</td>
                  <td className="p-2 border-t">$102</td>
                  <td className="p-2 border-t">85%</td>
                  <td className="p-2 border-t">Höhepunkt der IV</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-2 border-t">Nach Earnings</td>
                  <td className="p-2 border-t">$105</td>
                  <td className="p-2 border-t">40%</td>
                  <td className="p-2 border-t font-semibold text-red-700">IV-Crush!</td>
                </tr>
                <tr>
                  <td className="p-2 border-t">1 Woche nach Earnings</td>
                  <td className="p-2 border-t">$107</td>
                  <td className="p-2 border-t">35%</td>
                  <td className="p-2 border-t">Normalisierung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "Wichtige Aspekte der Volatilität",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <Calendar className="w-5 h-5 mr-2" /> IV nach Fälligkeit
              </h3>
              <p>Die implizite Volatilität variiert je nach Laufzeit der Optionen:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Kurzfristige Optionen: Oft höhere IV durch unmittelbare Ereignisse</li>
                <li>Langfristige Optionen: Tendenziell niedrigere IV bei normalen Marktbedingungen</li>
              </ul>
              <VixTermStructureChart />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <LineChart className="w-5 h-5 mr-2" /> Märkte und Volatilität
              </h3>
              <p className="mb-2">Zwischen Marktrichtung und Volatilität besteht eine inverse Beziehung:</p>
              <ul className="space-y-1 list-disc pl-5">
                <li><strong>Steigende Märkte:</strong> Volatilität sinkt typischerweise</li>
                <li><strong>Fallende Märkte:</strong> Volatilität steigt oft stark an</li>
                <li>Der VIX wird deshalb auch als "Angstbarometer" bezeichnet</li>
              </ul>
              <div className="mt-3 p-2 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-sm italic">
                  "Wenn alle entspannt sind, ist die Volatilität niedrig. Wenn Panik ausbricht, explodiert sie."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Volatilität einschätzen: IV-Rank und IV-Perzentil",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Um zu beurteilen, ob die aktuelle Volatilität hoch oder niedrig ist, nutzen Optionshändler verschiedene Messgrößen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">IV-Rank (52 Wochen)</h3>
              <p>Zeigt, wo die aktuelle IV innerhalb der Spannbreite der letzten 52 Wochen liegt.</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li><strong>IV-Rank 0:</strong> Niedrigste IV des Jahres</li>
                <li><strong>IV-Rank 50:</strong> In der Mitte der Jahresspanne</li>
                <li><strong>IV-Rank 100:</strong> Höchste IV des Jahres</li>
              </ul>
              <div className="mt-3 p-2 bg-gray-100 rounded">
                <p className="text-sm">
                  Fokussiert auf die <strong>Extremwerte</strong> der letzten 52 Wochen
                </p>
              </div>
              <IVRankChart />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">IV-Perzentil (52 Wochen)</h3>
              <p>Zeigt den Prozentsatz der Tage in den letzten 52 Wochen, an denen die IV niedriger war.</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li><strong>IV-Perzentil 20%:</strong> IV war an 20% der Tage niedriger</li>
                <li><strong>IV-Perzentil 50%:</strong> IV war an 50% der Tage niedriger</li>
                <li><strong>IV-Perzentil 80%:</strong> IV war an 80% der Tage niedriger</li>
              </ul>
              <div className="mt-3 p-2 bg-gray-100 rounded">
                <p className="text-sm">
                  Fokussiert auf die <strong>zeitliche Verteilung</strong> der IV im letzten Jahr
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" /> Wichtig:
            </h3>
            <p>
              IV-Rank und IV-Perzentil sind unterschiedliche Maße! Bei extremen Ausreißern im letzten Jahr kann ein IV-Rank von 50 und ein IV-Perzentil von 90 gleichzeitig auftreten.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Weitere wichtige Volatilitätsindikatoren",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" /> VIX (Volatilitätsindex)
              </h3>
              <p>Der "Angstbarometer" des Marktes:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Misst erwartete Volatilität des S&P 500</li>
                <li><strong>VIX &lt; 20:</strong> Niedrige Volatilität/Ruhige Märkte</li>
                <li><strong>VIX 20-30:</strong> Erhöhte Volatilität</li>
                <li><strong>VIX &gt; 30:</strong> Hohe Volatilität/Unruhige Märkte</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <LineChart className="w-5 h-5 mr-2" /> IV/HV-Verhältnis
              </h3>
              <p>Vergleicht die implizite mit der historischen Volatilität:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li><strong>IV/HV &gt; 1:</strong> Markt erwartet höhere Volatilität als in der Vergangenheit</li>
                <li><strong>IV/HV = 1:</strong> Erwartungen entsprechen der Vergangenheit</li>
                <li><strong>IV/HV &lt; 1:</strong> Markt erwartet niedrigere Volatilität als in der Vergangenheit</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-300 mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Beispiel: Volatilitätsindikatoren im Überblick</h3>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Indikator</th>
                  <th className="p-2 text-left">Aktueller Wert</th>
                  <th className="p-2 text-left">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-t">VIX</td>
                  <td className="p-2 border-t">22%</td>
                  <td className="p-2 border-t">Leicht erhöhte Marktvolatilität</td>
                </tr>
                <tr>
                  <td className="p-2 border-t">IV-Rank</td>
                  <td className="p-2 border-t">75</td>
                  <td className="p-2 border-t">Volatilität im oberen Quartil des Jahres</td>
                </tr>
                <tr>
                  <td className="p-2 border-t">IV-Perzentil</td>
                  <td className="p-2 border-t">80%</td>
                  <td className="p-2 border-t">IV an 80% der Handelstage niedriger</td>
                </tr>
                <tr>
                  <td className="p-2 border-t">IV/HV-Verhältnis</td>
                  <td className="p-2 border-t">1,2</td>
                  <td className="p-2 border-t">Erwartete Volatilität über historischem Durchschnitt</td>
                </tr>
              </tbody>
            </table>
          </div>
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Optionen strategisch nutzen</h1>
          <div className="text-sm mt-1">Kapitel 1.3: Volatilität verstehen</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Slide Header */}
          <div className="bg-primary text-white p-4">
            <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
          </div>

          {/* Slide Content */}
          <div className="p-6">
            {slides[currentSlide].content}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
            <div>
              <button 
                onClick={prevSlide} 
                disabled={currentSlide === 0}
                className={`flex items-center px-4 py-2 rounded-md ${currentSlide === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-primary text-white hover:bg-blue-700'}`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Folie {currentSlide + 1} von {slides.length}
            </div>
            <div>
              <button 
                onClick={nextSlide} 
                disabled={currentSlide === slides.length - 1}
                className={`flex items-center px-4 py-2 rounded-md ${currentSlide === slides.length - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-primary text-white hover:bg-blue-700'}`}
              >
                Weiter
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Thumbnails */}
        <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-2">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer p-2 text-xs text-center rounded border ${index === currentSlide ? 'border-primary bg-blue-50 text-primary' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center text-sm">
          © 2024 Markus Lehleiter | Optionen strategisch nutzen
        </div>
      </div>
    </div>
  );
};

export default VolatilityPresentation;