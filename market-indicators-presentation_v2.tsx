import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle, BarChart2, Activity, DollarSign, Volume2 } from 'lucide-react';

// Mock data for charts
const marketTrendData = [
  { name: 'Jan', spx: 4400, ma21: 4380, ma200: 4200 },
  { name: 'Feb', spx: 4500, ma21: 4450, ma200: 4250 },
  { name: 'Mar', spx: 4450, ma21: 4460, ma200: 4300 },
  { name: 'Apr', spx: 4600, ma21: 4520, ma200: 4320 },
  { name: 'Mai', spx: 4700, ma21: 4620, ma200: 4350 },
  { name: 'Jun', spx: 4650, ma21: 4660, ma200: 4380 },
  { name: 'Jul', spx: 4800, ma21: 4700, ma200: 4420 },
  { name: 'Aug', spx: 4900, ma21: 4820, ma200: 4450 },
  { name: 'Sep', spx: 4850, ma21: 4850, ma200: 4480 },
  { name: 'Okt', spx: 4750, ma21: 4820, ma200: 4500 },
  { name: 'Nov', spx: 4850, ma21: 4800, ma200: 4550 },
  { name: 'Dez', spx: 4950, ma21: 4870, ma200: 4600 },
];

const vixData = [
  { name: 'Jan', vix: 18, contango: 21 },
  { name: 'Feb', vix: 22, contango: 24 },
  { name: 'Mar', vix: 28, contango: 26 },
  { name: 'Apr', vix: 24, contango: 23 },
  { name: 'Mai', vix: 19, contango: 22 },
  { name: 'Jun', vix: 15, contango: 18 },
  { name: 'Jul', vix: 14, contango: 17 },
  { name: 'Aug', vix: 17, contango: 19 },
  { name: 'Sep', vix: 25, contango: 22 },
  { name: 'Okt', vix: 35, contango: 28 },
  { name: 'Nov', vix: 27, contango: 25 },
  { name: 'Dez', vix: 21, contango: 24 },
];

const putCallData = [
  { name: 'Jan', ratio: 0.85, neutral: 1 },
  { name: 'Feb', ratio: 0.92, neutral: 1 },
  { name: 'Mar', ratio: 1.1, neutral: 1 },
  { name: 'Apr', ratio: 1.05, neutral: 1 },
  { name: 'Mai', ratio: 0.95, neutral: 1 },
  { name: 'Jun', ratio: 0.88, neutral: 1 },
  { name: 'Jul', ratio: 0.78, neutral: 1 },
  { name: 'Aug', ratio: 0.82, neutral: 1 },
  { name: 'Sep', ratio: 1.15, neutral: 1 },
  { name: 'Okt', ratio: 1.25, neutral: 1 },
  { name: 'Nov', ratio: 1.08, neutral: 1 },
  { name: 'Dez', ratio: 0.98, neutral: 1 },
];

const marketBreadthData = [
  { name: 'Jan', advances: 2800, declines: 2200 },
  { name: 'Feb', advances: 3000, declines: 2000 },
  { name: 'Mar', advances: 2500, declines: 2500 },
  { name: 'Apr', advances: 3200, declines: 1800 },
  { name: 'Mai', advances: 3400, declines: 1600 },
  { name: 'Jun', advances: 2700, declines: 2300 },
  { name: 'Jul', advances: 3500, declines: 1500 },
  { name: 'Aug', advances: 3600, declines: 1400 },
  { name: 'Sep', advances: 2100, declines: 2900 },
  { name: 'Okt', advances: 1800, declines: 3200 },
  { name: 'Nov', advances: 2600, declines: 2400 },
  { name: 'Dez', advances: 3100, declines: 1900 },
];

const fearGreedLevels = [
  { value: 0, label: "Extreme Angst" },
  { value: 25, label: "Angst" },
  { value: 50, label: "Neutral" },
  { value: 75, label: "Gier" },
  { value: 100, label: "Extreme Gier" }
];

// Component for Fear and Greed Index
const FearGreedGauge = ({ value }) => {
  // Calculate position on the gauge (0-100)
  const position = Math.min(Math.max(value, 0), 100);
  
  // Determine color based on position
  let color;
  if (position <= 25) color = "#ff4d4d"; // Red for fear
  else if (position <= 45) color = "#ffa64d"; // Orange for mild fear
  else if (position <= 55) color = "#ffff4d"; // Yellow for neutral
  else if (position <= 75) color = "#4dff4d"; // Light green for greed
  else color = "#00cc00"; // Green for extreme greed
  
  // Find the current level label
  const getCurrentLevel = () => {
    for (let i = fearGreedLevels.length - 1; i >= 0; i--) {
      if (position >= fearGreedLevels[i].value) {
        return fearGreedLevels[i].label;
      }
    }
    return fearGreedLevels[0].label;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow">
      <div className="text-center mb-2 font-bold">Fear & Greed Index: {position}</div>
      <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div 
          className="absolute h-full rounded-full transition-all duration-500 ease-in-out"
          style={{ 
            width: `${position}%`, 
            backgroundColor: color 
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        <span>Extreme Angst</span>
        <span>Neutral</span>
        <span>Extreme Gier</span>
      </div>
      <div className="text-center mt-2 font-medium">
        Aktueller Status: <span style={{color}}>{getCurrentLevel()}</span>
      </div>
    </div>
  );
};

// Main Presentation Component
const MarketIndicatorsPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Der Markttrend als Schlüsselindikator",
      content: (
        <div className="space-y-4">
          <p className="mb-4">Der Markttrend ist eine der wichtigsten Einflussgrößen für den Erfolg einer Handelsstrategie. In diesem Diagramm sehen Sie, wie gleitende Durchschnitte (21-Tage und 200-Tage) helfen können, den übergeordneten Trend zu identifizieren.</p>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="spx" stroke="#003366" name="S&P 500" strokeWidth={2} />
                <Line type="monotone" dataKey="ma21" stroke="#ffd700" name="21-Tage-MA" strokeWidth={2} />
                <Line type="monotone" dataKey="ma200" stroke="#7e97c3" name="200-Tage-MA" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Schlüsselerkenntnisse:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Wenn Kurs > 200-Tage-MA: Langfristiger Aufwärtstrend</li>
              <li>Wenn Kurs > 21-Tage-MA: Kurzfristiger Aufwärtstrend</li>
              <li>Die Kreuzung der gleitenden Durchschnitte kann wichtige Signale liefern</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Warum viele Nachrichten irrelevant sind",
      content: (
        <div className="space-y-4">
          <p>Im Zeitalter der Informationsflut ist es entscheidend, relevante Informationen zu filtern. Nicht alle Nachrichten haben einen nachhaltigen Einfluss auf die Märkte.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-700 flex items-center mb-2">
                <AlertTriangle size={20} className="mr-2" /> Zu vermeiden
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span> 
                  <span>Tägliches Nachrichtenrauschen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span> 
                  <span>Sensationsjournalismus und Clickbait</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span> 
                  <span>Kurzfristige Marktschwankungen überbewerten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span> 
                  <span>Zu viele Informationsquellen gleichzeitig</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-700 flex items-center mb-2">
                <TrendingUp size={20} className="mr-2" /> Zu fokussieren
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  <span>Wirtschaftsdaten mit Makrobedeutung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  <span>Zentralbankentscheidungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  <span>Langfristige Markttrends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  <span>Ausgewählte, vertrauenswürdige Quellen</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <p className="font-semibold text-blue-800">Fazit:</p>
            <p className="mt-1">Fokussieren Sie sich auf relevante, fundamentale Marktdaten und Ereignisse, die tatsächlich einen Einfluss auf Ihre Strategien haben können.</p>
          </div>
        </div>
      )
    },
    {
      title: "Der Einfluss wichtiger Ereignisse",
      content: (
        <div className="space-y-4">
          <p>Bestimmte Ereignisse haben einen tiefgreifenden Einfluss auf die Märkte und verdienen besondere Aufmerksamkeit.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <DollarSign size={20} className="mr-2" /> Zinsentscheidungen
              </h3>
              <p>Entscheidungen von Zentralbanken wie der Fed oder EZB beeinflussen das gesamte Wirtschaftssystem. Zinserhöhungen bremsen die Nachfrage, während Zinssenkungen die Konjunktur beleben.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <BarChart2 size={20} className="mr-2" /> Wirtschaftsdaten
              </h3>
              <p>BIP, Arbeitslosenquote und Inflation zeigen die wirtschaftliche Gesundheit an. Positive Daten führen oft zu steigenden Kursen, negative können zu erhöhter Volatilität führen.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <Activity size={20} className="mr-2" /> Quartalsberichte
              </h3>
              <p>Earnings von großen Unternehmen können den Gesamtmarkt beeinflussen. Überraschungen in den Gewinnzahlen können zu erheblichen Preisbewegungen führen.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <AlertTriangle size={20} className="mr-2" /> Unerwartete Ereignisse
              </h3>
              <p>Geopolitische Schocks, Naturkatastrophen oder unerwartete Krisen können zu plötzlichen Marktbewegungen führen und die Volatilität erhöhen.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "VIX und Laufzeitenstruktur",
      content: (
        <div className="space-y-4">
          <p>Der Volatilitätsindex (VIX), oft als „Angstbarometer" bezeichnet, misst die erwartete Volatilität des S&P 500 in den nächsten 30 Tagen. Die Laufzeitenstruktur gibt zusätzliche Hinweise auf Markterwartungen.</p>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vixData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[10, 40]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="vix" stroke="#ff4d4d" name="VIX" strokeWidth={2} />
                <Line type="monotone" dataKey="contango" stroke="#4d4dff" name="VIX Futures (2 Monate)" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-800">Ruhephase (&lt;18,5)</h3>
              <p className="text-sm mt-1">Niedrige Volatilität, ruhige Marktphase. Optionen sind günstiger.</p>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h3 className="font-semibold text-yellow-800">Expansion (&gt;18,5)</h3>
              <p className="text-sm mt-1">Erhöhte Unsicherheit im Markt. Optionen werden teurer.</p>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-800">Kontraktion</h3>
              <p className="text-sm mt-1">Rückgang auf Durchschnittswert. Volatilitäts-Crush nach Ereignissen.</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <p className="font-semibold">Contango vs. Backwardation:</p>
            <ul className="list-disc pl-5 mt-2">
              <li><span className="font-medium">Contango:</span> Futures-Kurve steigt an (Normalzustand)</li>
              <li><span className="font-medium">Backwardation:</span> Futures-Kurve fällt ab (Krisensignal)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Put/Call-Ratio",
      content: (
        <div className="space-y-4">
          <p>Die Put/Call-Ratio vergleicht die Anzahl der gehandelten Put-Optionen mit der Anzahl der gehandelten Call-Optionen und wird als wichtiger Indikator zur Einschätzung des Marktsentiments verwendet.</p>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={putCallData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0.6, 1.4]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ratio" stroke="#003366" name="Put/Call-Ratio" strokeWidth={2} />
                <Line type="monotone" dataKey="neutral" stroke="#cccccc" name="Neutral" strokeWidth={1} strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800">≤ 0,7 - Bullisch</h3>
              <p className="text-sm mt-1">Mehr Call-Optionen als Put-Optionen. Optimismus im Markt - potentielles Kontra-Indiz.</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800">~ 1,0 - Neutral</h3>
              <p className="text-sm mt-1">Ausgeglichenes Verhältnis zwischen Bullen und Bären. Markt in Balance.</p>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800">≥ 1,2 - Bärisch</h3>
              <p className="text-sm mt-1">Mehr Put-Optionen als Call-Optionen. Pessimismus im Markt - potentielles Kontra-Indiz.</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Kontra-Indikator:</p>
            <p className="mt-1">Die Put/Call-Ratio kann als Kontra-Indikator dienen. Extreme Werte deuten oft auf Übertreibungen hin, die eine Trendumkehr signalisieren können.</p>
          </div>
        </div>
      )
    },
    {
      title: "Fear & Greed Index",
      content: (
        <div className="space-y-4">
          <p>Der Fear & Greed Index kombiniert verschiedene Marktindikatoren, um das allgemeine Sentiment als „Angst" oder „Gier" zu klassifizieren. Dieser Index hilft dabei, extreme Marktbedingungen zu erkennen.</p>
          
          <div className="my-8">
            <FearGreedGauge value={35} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-red-50 p-3 rounded-lg">
              <h3 className="font-semibold text-red-800">Hohe Angst (unter 30)</h3>
              <p className="text-sm mt-1">Anleger sind ängstlich; der Markt könnte überverkauft sein. Potenzielle Kaufgelegenheit.</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-800">Neutraler Bereich (30-70)</h3>
              <p className="text-sm mt-1">Ausgeglichenes Sentiment. Keine extremen Marktbedingungen.</p>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h3 className="font-semibold text-yellow-800">Hohe Gier (über 70)</h3>
              <p className="text-sm mt-1">Anleger sind gierig; der Markt könnte überkauft sein. Potenzielle Verkaufsgelegenheit.</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <p className="font-semibold">Anwendung:</p>
            <p className="mt-1">Der Fear & Greed Index eignet sich besonders als Kontra-Indikator. Extreme Werte können auf bevorstehende Trendwenden hindeuten.</p>
          </div>
        </div>
      )
    },
    {
      title: "Marktbreite (A/D)",
      content: (
        <div className="space-y-4">
          <p>Die Marktbreite, oft als Advance/Decline (A/D) Line bezeichnet, misst das Verhältnis der Anzahl steigender zu fallender Aktien. Sie ist ein wichtiger Indikator für die Marktgesundheit.</p>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketBreadthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="advances" fill="#4dff4d" name="Steigende Aktien" />
                <Bar dataKey="declines" fill="#ff4d4d" name="Fallende Aktien" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-800">Positive A/D-Line</h3>
              <p className="text-sm mt-1">Mehr steigende als fallende Aktien. Signalisiert einen gesunden Aufwärtstrend mit breiter Beteiligung.</p>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg">
              <h3 className="font-semibold text-red-800">Negative A/D-Line</h3>
              <p className="text-sm mt-1">Mehr fallende als steigende Aktien. Zeigt Schwäche im Markt und einen möglichen Abwärtsdruck.</p>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h3 className="font-semibold text-yellow-800">Divergenz</h3>
              <p className="text-sm mt-1">Wenn Markt steigt, aber A/D-Line fällt oder stagniert. Warnsignal für eine mögliche Trendumkehr.</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <p className="font-semibold">Anwendung:</p>
            <p className="mt-1">Die Marktbreite hilft, die "Qualität" einer Marktbewegung zu beurteilen. Ein Anstieg, der von wenigen Aktien getragen wird, ist weniger nachhaltig als einer mit breiter Beteiligung.</p>
          </div>
        </div>
      )
    },
    {
      title: "Kapitalflüsse und Volumenanalyse",
      content: (
        <div className="space-y-4">
          <p>Die Analyse von Kapitalflüssen und Handelsvolumen zeigt die Stärke und Überzeugung hinter Marktbewegungen. Sie reflektiert das Engagement der Marktteilnehmer.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <TrendingUp size={20} className="mr-2" /> Steigende Kurse bei steigendem Volumen
              </h3>
              <div className="flex items-center">
                <div className="w-24 h-12 bg-green-100 flex flex-col justify-center items-center rounded mr-4">
                  <div className="w-4 h-6 bg-green-500"></div>
                  <div className="w-16 h-2 bg-green-300 mt-1"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">Bullisches Signal: Starker Kaufdruck unterstützt den Aufwärtstrend. Gesunde Marktsituation mit breiter Beteiligung.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <TrendingUp size={20} className="mr-2" /> Steigende Kurse bei fallendem Volumen
              </h3>
              <div className="flex items-center">
                <div className="w-24 h-12 bg-yellow-100 flex flex-col justify-center items-center rounded mr-4">
                  <div className="w-4 h-6 bg-green-500"></div>
                  <div className="w-8 h-2 bg-green-300 mt-1"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">Warnsignal: Aufwärtstrend könnte schwächer werden. Weniger Marktteilnehmer unterstützen die Bewegung.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <TrendingDown size={20} className="mr-2" /> Fallende Kurse bei steigendem Volumen
              </h3>
              <div className="flex items-center">
                <div className="w-24 h-12 bg-red-100 flex flex-col justify-center items-center rounded mr-4">
                  <div className="w-4 h-6 bg-red-500"></div>
                  <div className="w-16 h-2 bg-red-300 mt-1"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">Bärisches Signal: Starker Verkaufsdruck signalisiert einen intakten Abwärtstrend. Anleger verlassen aktiv den Markt.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 flex items-center mb-3">
                <TrendingDown size={20} className="mr-2" /> Fallende Kurse bei fallendem Volumen
              </h3>
              <div className="flex items-center">
                <div className="w-24 h-12 bg-gray-100 flex flex-col justify-center items-center rounded mr-4">
                  <div className="w-4 h-6 bg-red-500"></div>
                  <div className="w-8 h-2 bg-red-300 mt-1"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm">Potenzielles Umkehrsignal: Abwärtstrend könnte sich abschwächen. Verkaufsdruck lässt nach.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <p className="font-semibold">Anwendung:</p>
            <p className="mt-1">Volumen bestätigt oder widerlegt Preisbewegungen. Achten Sie besonders auf Divergenzen zwischen Preis und Volumen, die oft Trendwenden signalisieren.</p>
          </div>
        </div>
      )
    },
    {
      title: "Was Sie aus Optionsmärkten ablesen können",
      content: (
        <div className="space-y-4">
          <p>Optionsmärkte bieten eine Fülle an Informationen, die weit über die bloßen Preisbewegungen hinausgehen. Durch die Analyse bestimmter Parameter können Sie wertvolle Einblicke in die Markterwartungen gewinnen.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 mb-3">Open Interest (OI)</h3>
              <p className="text-sm">Zeigt die Zahl offener Optionen, die weder geschlossen noch ausgeübt wurden. Ein steigendes OI deutet auf zunehmendes Interesse und Liquidität hin.</p>
              <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
                <p className="font-medium">Anwendung:</p>
                <p>Hohe OI-Werte an bestimmten Strike-Preisen können wichtige Unterstützungs- und Widerstandsniveaus signalisieren.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 mb-3">Volatility Smile</h3>
              <p className="text-sm">Zeigt, dass die implizite Volatilität je nach Strike-Preis variiert und grafisch einem Lächeln ähnelt. Ein steiler Smile signalisiert Erwartung stärkerer Preisbewegungen.</p>
              <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
                <p className="font-medium">Anwendung:</p>
                <p>Hilft zu verstehen, wie der Markt die Wahrscheinlichkeit extremer Ereignisse einschätzt.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-blue-800 mb-3">Skew Index</h3>
              <p className="text-sm">Misst die Differenz in der impliziten Volatilität zwischen OTM-Put- und OTM-Call-Optionen. Ein hoher Skew signalisiert Angst vor Kursrückgängen.</p>
              <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
                <p className="font-medium">Anwendung:</p>
                <p>Kann als Frühwarnsystem für Marktängste oder bevorstehende Korrekturen dienen.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p className="font-semibold">Das Wichtigste im Überblick:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Optionsmärkte bieten oft frühe Hinweise auf bevorstehende Marktbewegungen</li>
              <li>Die implizite Volatilität spiegelt die Markterwartungen wider</li>
              <li>Strike-Preise mit hohem Open Interest können wichtige Preisniveaus anzeigen</li>
              <li>Der Volatilitäts-Skew kann Marktängste frühzeitig signalisieren</li>
            </ul>
          </div>
        </div>
      )
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };
  
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-blue-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Kapitel 3.1: Marktindikatoren intelligent nutzen</h1>
          <p className="text-blue-200">Optionen strategisch nutzen | Markus Lehleiter</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 h-2 w-full">
            <div 
              className="bg-yellow-500 h-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Slide Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">{slides[currentSlide].title}</h2>
            {slides[currentSlide].content}
          </div>
          
          {/* Navigation */}
          <div className="bg-gray-50 px-8 py-4 flex justify-between items-center">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded flex items-center ${
                currentSlide === 0 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-900 text-white hover:bg-blue-800'
              }`}
            >
              <ArrowRight className="transform rotate-180 mr-2" size={16} />
              Zurück
            </button>
            
            <div className="text-gray-500">
              Folie {currentSlide + 1} von {slides.length}
            </div>
            
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded flex items-center ${
                currentSlide === slides.length - 1 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-900 text-white hover:bg-blue-800'
              }`}
            >
              Weiter
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 py-3 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          © 2024 Markus Lehleiter | Optionen strategisch nutzen
        </div>
      </div>
    </div>
  );
};

export default MarketIndicatorsPresentation;