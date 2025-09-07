import React, { useState } from 'react';
import { Layers, BarChart2, Shield, BookOpen, TrendingUp, Menu, X, AlertTriangle, DollarSign, Award } from 'lucide-react';

export default function OptionsTraderPro() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleSidebar}
          className="p-2 bg-blue-600 text-white rounded-md"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transform transition-transform duration-300 fixed lg:relative z-40 h-full w-64 bg-gray-800 text-white shadow-lg`}>
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Optionshändler Pro</h1>
          <p className="text-sm text-gray-400">Dein Weg zum nächsten Level</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <Layers className="mr-3" size={18} />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('strategies')}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === 'strategies' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <TrendingUp className="mr-3" size={18} />
                Fortg. Strategien
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('risk')}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === 'risk' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <Shield className="mr-3" size={18} />
                Risikomanagement
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === 'analytics' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <BarChart2 className="mr-3" size={18} />
                Performance-Analyse
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === 'education' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                <BookOpen className="mr-3" size={18} />
                Weiterbildung
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 lg:p-8">
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'strategies' && <StrategiesTab />}
        {activeTab === 'risk' && <RiskTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
        {activeTab === 'education' && <EducationTab />}
      </div>
    </div>
  );
}

function DashboardTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="text-blue-600 mr-3" size={24} />
            <h3 className="text-lg font-semibold">Markttrends</h3>
          </div>
          <p className="text-gray-600 mb-4">Aktuelle Volatilitätsindizes und Markttrends für informierte Entscheidungen.</p>
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="font-medium">VIX:</span>
              <span className="text-red-600 font-bold">18.75 (+1.2%)</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">SKEW:</span>
              <span className="text-green-600 font-bold">135.8 (-0.5%)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Put/Call Ratio:</span>
              <span className="font-bold">0.85</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-amber-500 mr-3" size={24} />
            <h3 className="text-lg font-semibold">Risiko-Überwachung</h3>
          </div>
          <p className="text-gray-600 mb-4">Überwache deine aktuellen Positionen und Portfoliorisiken.</p>
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Portfolio Delta:</span>
              <span className="font-bold">+0.35</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Portfolio Theta:</span>
              <span className="text-green-600 font-bold">+€215/Tag</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Margin verwendet:</span>
              <span className="font-bold">42%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <DollarSign className="text-green-600 mr-3" size={24} />
            <h3 className="text-lg font-semibold">P&L Tracking</h3>
          </div>
          <p className="text-gray-600 mb-4">Verfolge deine täglichen und monatlichen Gewinne und Verluste.</p>
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Heute:</span>
              <span className="text-green-600 font-bold">+€450 (+1.2%)</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Diese Woche:</span>
              <span className="text-green-600 font-bold">+€1,875 (+4.3%)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Dieser Monat:</span>
              <span className="text-green-600 font-bold">+€5,340 (+9.8%)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Nächste Schritte für professionelles Niveau</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
              <Award className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-medium">Entwickle ein algorithmisches Trading-System</h4>
              <p className="text-gray-600">Implementiere und teste eine Reihe von algorithmischen Optionsstrategien für konsistente Ergebnisse.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
              <Award className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-medium">Erweitere dein Volatilitätsverständnis</h4>
              <p className="text-gray-600">Vertiefe dein Wissen über Volatilitätsoberflächen und Termstrukturen für bessere Preisfindung.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
              <Award className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-medium">Optimiere dein Kapitalmanagement</h4>
              <p className="text-gray-600">Implementiere fortgeschrittene Techniken zur Optimierung des Kapitaleinsatzes und der Positionsgrößenbestimmung.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StrategiesTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Fortgeschrittene Strategien</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Volatilitäts-basierte Strategien</h3>
        <p className="text-gray-600 mb-4">
          Professionelle Händler nutzen Volatilitätsunterschiede für konsistente Erträge.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium mb-2">Volatilitäts-Arbitrage</h4>
            <p className="text-gray-600 mb-2">
              Identifiziere und nutze Diskrepanzen zwischen implizierter und erwarteter realisierter Volatilität.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Long Vega bei unterbewerteter Volatilität</li>
              <li>Short Vega bei überbewerteter Volatilität</li>
              <li>Delta-Hedging zur Isolierung der Volatilitätskomponente</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium mb-2">Dispersion Trading</h4>
            <p className="text-gray-600 mb-2">
              Nutze Unterschiede zwischen Index- und Einzelaktien-Volatilitäten.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Short Index-Volatilität / Long Einzelaktien-Volatilität</li>
              <li>Korrelationsdynamik verstehen und modellieren</li>
              <li>Kapitaleffizientes Portfolio-Design</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium mb-2">Volatilitäts-Term-Struktur-Strategien</h4>
            <p className="text-gray-600 mb-2">
              Nutze die Dynamik der Volatilitätskurve über verschiedene Laufzeiten.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Calendar Spreads zur Monetarisierung steiler Kurven</li>
              <li>Diagonal Spreads für Richtungs- und Volatilitätsansichten</li>
              <li>Anpassung an Volatilitätsregime-Wechsel</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Komplexe Positionsmanagement-Techniken</h3>
        <p className="text-gray-600 mb-4">
          Professionelle Händler wissen genau, wann und wie sie Positionen anpassen sollten.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-medium mb-2">Dynamisches Delta-Hedging</h4>
            <p className="text-gray-600 mb-2">
              Implementiere fortgeschrittene Hedging-Techniken für bessere Risikokontrolle.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Gamma-basierte Anpassung der Hedging-Frequenz</li>
              <li>Kostenoptimierung durch optimale Hedging-Zeitpunkte</li>
              <li>Cross-Asset-Hedging für Kapitaleffizienz</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-medium mb-2">Adjustierung komplexer Spreads</h4>
            <p className="text-gray-600 mb-2">
              Lerne, mehrbeinige Strategien gezielt anzupassen, um Risiko und Rendite zu optimieren.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Roll-Techniken für Zeitspreads und vertikale Spreads</li>
              <li>Anpassung auf Basis von Greeks-Veränderungen</li>
              <li>Umwandlung von Strategien basierend auf neuen Marktbedingungen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Professionelles Risikomanagement</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Position Sizing & Kapitalallokation</h3>
          <p className="text-gray-600 mb-4">
            Professionelle Händler nutzen mathematische Modelle zur Optimierung ihrer Positionsgrößen.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-medium">Kelly-Kriterium und Fraktionale Kelly-Strategien</h4>
              <p className="text-gray-600">
                Optimiere deine Positionsgrößen basierend auf erwarteter Rendite und Risiko.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-medium">Risk-of-Ruin Analyse</h4>
              <p className="text-gray-600">
                Berechne und minimiere die Wahrscheinlichkeit eines signifikanten Kapitalverlusts.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-medium">Korrelationsbasierte Portfolioallokation</h4>
              <p className="text-gray-600">
                Berücksichtige Korrelationen zwischen Strategien für bessere Diversifikation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Stress-Testing & Tail Risk Management</h3>
          <p className="text-gray-600 mb-4">
            Schütze dein Portfolio vor extremen Marktereignissen.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-medium">Value-at-Risk (VaR) & Conditional VaR</h4>
              <p className="text-gray-600">
                Implementiere fortgeschrittene Methoden zur Quantifizierung von Extremrisiken.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-medium">Volatilitäts-Regime-basierte Szenarien</h4>
              <p className="text-gray-600">
                Analysiere, wie sich dein Portfolio unter verschiedenen Volatilitätsregimen verhält.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-medium">Tail-Hedging-Strategien</h4>
              <p className="text-gray-600">
                Implementiere kosteneffiziente Absicherungen gegen Marktcrashs und extreme Bewegungen.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Greeks-basiertes Risikomanagement</h3>
        <p className="text-gray-600 mb-4">
          Professionelle Händler verstehen und managen komplexe Optionsrisiken.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Greek</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risiko</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Management-Techniken</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Delta</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Direktionales Risiko</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <ul className="list-disc list-inside">
                    <li>Dynamisches Delta-Hedging</li>
                    <li>Delta-neutrale Spreads</li>
                    <li>Portfolio-Delta-Limits</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Gamma</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Konvexitätsrisiko</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <ul className="list-disc list-inside">
                    <li>Gamma-Skalierung bei Volatilitätsänderungen</li>
                    <li>Gamma-Hedging über verschiedene Strikes</li>
                    <li>Zeitbasierte Gamma-Anpassungen</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Vega</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Volatilitätsrisiko</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <ul className="list-disc list-inside">
                    <li>Vega-Limits pro Laufzeit</li>
                    <li>Vega-Neutralisierung mit unterschiedlichen Instrumenten</li>
                    <li>Skew-basierte Vega-Anpassung</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Theta</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Zeitwertverlust</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <ul className="list-disc list-inside">
                    <li>Theta/Gamma-Verhältnis-Optimierung</li>
                    <li>Kalenderbasierte Theta-Harvesting</li>
                    <li>Laufzeitdiversifikation</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Performance-Analyse</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Leistungsmessung & Benchmarking</h3>
        <p className="text-gray-600 mb-4">
          Professionelle Händler nutzen detaillierte Metriken, um ihre Performance zu analysieren und zu verbessern.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Sharpe Ratio</h4>
            <div className="text-2xl font-bold text-blue-600">1.85</div>
            <p className="text-sm text-gray-600">Verhältnis von Überrendite zu Volatilität</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Sortino Ratio</h4>
            <div className="text-2xl font-bold text-blue-600">2.12</div>
            <p className="text-sm text-gray-600">Berücksichtigt nur negative Volatilität</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Max Drawdown</h4>
            <div className="text-2xl font-bold text-red-600">-12.4%</div>
            <p className="text-sm text-gray-600">Maximaler Verlust vom Höchststand</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Win/Loss Ratio</h4>
            <div className="text-2xl font-bold text-green-600">68%</div>
            <p className="text-sm text-gray-600">Prozentsatz erfolgreicher Trades</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Profit Faktor</h4>
            <div className="text-2xl font-bold text-green-600">2.35</div>
            <p className="text-sm text-gray-600">Verhältnis von Bruttogewinnen zu -verlusten</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Performance Attribution</h3>
        <p className="text-gray-600 mb-4">
          Verstehe die genauen Faktoren, die deine Gewinne und Verluste beeinflussen.
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Ertrags-Aufschlüsselung nach Strategietyp</h4>
            <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div className="bg-blue-500 h-full w-3/12" title="Volatilitäts-Arbitrage: 25%"></div>
                <div className="bg-green-500 h-full w-5/12" title="Credit Spreads: 42%"></div>
                <div className="bg-purple-500 h-full w-2/12" title="Direktionales Trading: 17%"></div>
                <div className="bg-yellow-500 h-full w-2/12" title="Andere: 16%"></div>
              </div>
            </div>
            <div className="flex flex-wrap mt-2 text-sm">
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span>Volatilitäts-Arbitrage (25%)</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <span>Credit Spreads (42%)</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                <span>Direktionales Trading (17%)</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                <span>Andere (16%)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">P&L-Aufschlüsselung nach Greek-Komponenten</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Delta P&L:</span>
                  <span className="text-sm font-bold text-red-600">-€2,450</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Gamma P&L:</span>
                  <span className="text-sm font-bold text-green-600">+€4,320</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Theta P&L:</span>
                  <span className="text-sm font-bold text-green-600">+€8,760</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Vega P&L:</span>
                  <span className="text-sm font-bold text-red-600">-€1,350</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Rho P&L:</span>
                  <span className="text-sm font-bold text-red-600">-€420</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Gesamt P&L:</span>
                  <span className="text-sm font-bold text-green-600">+€8,860</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Psychologische Performance-Analyse</h3>
        <p className="text-gray-600 mb-4">
          Die Mentalität eines professionellen Händlers verstehen und entwickeln.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-500 pl-4 py-2">
            <h4 className="font-medium">Emotionales Trading-Tagebuch</h4>
            <p className="text-gray-600">
              Dokumentiere und analysiere emotionale Zustände bei Trading-Entscheidungen.
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-500 pl-4 py-2">
            <h4 className="font-medium">Kognitive Verzerrungen identifizieren</h4>
            <p className="text-gray-600">
              Erkenne und überwinde häufige kognitive Verzerrungen im Trading.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>Verlustaversion</li>
              <li>Bestätigungsfehler</li>
              <li>Selbstüberschätzung</li>
              <li>Herdenverhalten</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-indigo-500 pl-4 py-2">
            <h4 className="font-medium">Entscheidungsqualität vs. Ergebnis</h4>
            <p className="text-gray-600">
              Bewerte die Qualität deiner Entscheidungen unabhängig von kurzfristigen Ergebnissen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Professionelle Weiterbildung</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Fortgeschrittene Optionstheorie</h3>
        <p className="text-gray-600 mb-4">
          Vertiefte theoretische Konzepte für professionelle Optionshändler.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-medium mb-2">Stochastische Volatilitätsmodelle</h4>
            <p className="text-gray-600 mb-2">
              Erweitern Sie Ihr Verständnis über das Black-Scholes-Modell hinaus mit fortgeschrittenen Modellen.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Heston-Modell und seine Anwendungen</li>
              <li>SABR-Modell für Zinsderivate</li>
              <li>Lokale Volatilitätsmodelle</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-medium mb-2">Dynamisches Hedging & Replikation</h4>
            <p className="text-gray-600 mb-2">
              Verstehen Sie die Theorie hinter effektivem Risikomanagement.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Optimale Hedging-Frequenz</li>
              <li>Transaction-Cost-adjusted Delta-Hedging</li>
              <li>Cross-Gamma-Effekte im Portfolio</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-medium mb-2">Implizite vs. Realisierte Volatilität</h4>
            <p className="text-gray-600 mb-2">
              Tieferes Verständnis der Beziehung zwischen Markterwartungen und tatsächlichen Ergebnissen.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Prognosemodelle für realisierte Volatilität</li>
              <li>Volatilitätsrisikoprämie und ihre Implikationen</li>
              <li>Volatilitätsoberflächen in verschiedenen Marktphasen</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Weiterentwicklung zum Market Maker</h3>
        <p className="text-gray-600 mb-4">
          Konzepte und Techniken, die von professionellen Market Makern verwendet werden.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-medium mb-2">Market Making & Liquiditätsbereitstellung</h4>
            <p className="text-gray-600 mb-2">
              Verstehe, wie professionelle Market Maker arbeiten und Geld verdienen.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Bid-Ask-Spread-Management</li>
              <li>Dynamische Preisanpassung basierend auf Inventar</li>
              <li>Latenz-sensitive Strategien</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-medium mb-2">Market Microstructure & Order Book Dynamics</h4>
            <p className="text-gray-600 mb-2">
              Tieferes Verständnis der Marktmikrostruktur für effektiveres Trading.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Order Book Imbalance und Preisentwicklung</li>
              <li>Optimierung von Limit Orders vs. Market Orders</li>
              <li>Liquiditätsanalyse in Echtzeit</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Technische Fähigkeiten für den professionellen Handel</h3>
        <p className="text-gray-600 mb-4">
          Entwickeln Sie die technischen Fähigkeiten, die erfolgreiche Optionshändler auszeichnen.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-gray-500 pl-4">
            <h4 className="font-medium mb-2">Quantitative Analyse & Programmierung</h4>
            <p className="text-gray-600 mb-2">
              Technische Fähigkeiten für datengestütztes Trading.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Python für Options-Backtesting und Analyse</li>
              <li>R für statistische Modellierung</li>
              <li>SQL für Datenanalyse großer Datensätze</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-gray-500 pl-4">
            <h4 className="font-medium mb-2">Automatisierung & Algorithmisches Trading</h4>
            <p className="text-gray-600 mb-2">
              Entwicklung und Implementation von Trading-Systemen.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>API-Integration mit Brokern</li>
              <li>Entwicklung von Trading-Algorithmen</li>
              <li>Risikomanagement für automatisierte Systeme</li>
              <li>Execution Algorithmen für effiziente Order-Ausführung</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-gray-500 pl-4">
            <h4 className="font-medium mb-2">Fortgeschrittene Datenanalyse</h4>
            <p className="text-gray-600 mb-2">
              Gewinnen Sie Einblicke aus komplexen Marktdaten.
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Machine Learning für Optionspreis-Anomalien</li>
              <li>Zeitreihenanalyse für Volatilitätsprognosen</li>
              <li>Alternative Datenquellen für Handelsvorteile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
