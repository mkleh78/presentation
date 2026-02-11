import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

// Styling Constants in Anlehnung an die Website
const COLORS = {
  primary: '#003366', // Dunkelblau
  secondary: '#7e97c3', // Hellblau
  accent: '#ffd700', // Goldgelb
  light: '#ffffff', // Weiß
  dark: '#333333', // Dunkelgrau
  success: '#66cc99', // Mintgrün
};

// Data for time decay charts
const generateTimeDecayData = (days) => {
  // Erstellt Datenpunkte für die Zeitwert-Verfallskurve
  const data = [];
  const totalDays = 90;
  
  for (let i = 0; i <= totalDays; i += 5) {
    let value;
    if (i === 0) {
      value = 0;
    } else if (i < 30) {
      value = Math.sqrt(i) * 0.5; // Langsamer Anstieg zu Beginn
    } else if (i < 60) {
      value = Math.sqrt(i) * 0.7; // Mittlerer Anstieg
    } else {
      value = Math.sqrt(i) * 0.9; // Steilerer Anstieg am Ende
    }
    
    data.push({
      day: i,
      zeitwert: parseFloat((value).toFixed(2)),
    });
  }
  
  // Umkehren, damit der Zeitwertverlust sichtbar wird
  return data.map(item => ({
    day: totalDays - item.day,
    zeitwert: parseFloat((5 - item.zeitwert).toFixed(2)),
  }));
};

// Data for time decay by moneyness
const generateMoneynessCurves = () => {
  const totalDays = 90;
  const data = [];
  
  for (let i = 0; i <= totalDays; i += 5) {
    // Different decay patterns based on moneyness
    let atmValue, itmValue, otmValue;
    
    if (i <= 30) {
      // Final 30 days - rapid decay for ATM, moderate for ITM/OTM
      atmValue = 5 - (5 * Math.pow((90 - i) / 90, 0.6));
      itmValue = 4 - (4 * Math.pow((90 - i) / 90, 0.85));
      otmValue = 3 - (3 * Math.pow((90 - i) / 90, 0.85));
    } else if (i <= 60) {
      // Middle period
      atmValue = 5 - (5 * Math.pow((90 - i) / 90, 1));
      itmValue = 4 - (4 * Math.pow((90 - i) / 90, 0.95));
      otmValue = 3 - (3 * Math.pow((90 - i) / 90, 0.95));
    } else {
      // Early period - slow decay
      atmValue = 5 - (5 * Math.pow((90 - i) / 90, 1.4));
      itmValue = 4 - (4 * Math.pow((90 - i) / 90, 1.2));
      otmValue = 3 - (3 * Math.pow((90 - i) / 90, 1.2));
    }
    
    data.push({
      day: totalDays - i,
      atm: parseFloat(atmValue.toFixed(2)),
      itm: parseFloat(itmValue.toFixed(2)),
      otm: parseFloat(otmValue.toFixed(2)),
    });
  }
  
  return data;
};

// Main Component
const TimeValuePresentation = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [timeDecayData, setTimeDecayData] = useState([]);
  const [moneynessCurves, setMoneynessCurves] = useState([]);
  
  useEffect(() => {
    setTimeDecayData(generateTimeDecayData());
    setMoneynessCurves(generateMoneynessCurves());
  }, []);
  
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };
  
  const renderContentSection = () => {
    switch(activeSection) {
      case 1:
        return <GrundlegendesZumZeitwert />;
      case 2:
        return <ZeitwertUndRestlaufzeit timeDecayData={timeDecayData} />;
      case 3:
        return <ZeitwertUndMoneyness moneynessCurves={moneynessCurves} />;
      case 4:
        return <WichtigeFaustregeln />;
      default:
        return <GrundlegendesZumZeitwert />;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen" style={{fontFamily: 'Roboto, sans-serif'}}>
      {/* Header */}
      <header className="bg-primary text-white p-4 shadow-md" style={{backgroundColor: COLORS.primary}}>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Optionen strategisch nutzen</h1>
          <h2 className="text-xl">Kapitel 1.4: Wichtiges zum Zeitwert von Optionen</h2>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-64 bg-gray-100 p-4" style={{backgroundColor: '#e2e2e3'}}>
          <h2 className="text-lg font-bold mb-4" style={{color: COLORS.primary}}>Inhalt</h2>
          <ul>
            <li className="mb-2">
              <button 
                onClick={() => handleSectionClick(1)}
                className={`w-full text-left p-2 rounded ${activeSection === 1 ? 'font-bold' : ''}`}
                style={{
                  backgroundColor: activeSection === 1 ? COLORS.secondary : 'transparent',
                  color: activeSection === 1 ? COLORS.light : COLORS.dark,
                  transition: 'all 0.3s'
                }}
              >
                1. Grundlegendes zum Zeitwert
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => handleSectionClick(2)}
                className={`w-full text-left p-2 rounded ${activeSection === 2 ? 'font-bold' : ''}`}
                style={{
                  backgroundColor: activeSection === 2 ? COLORS.secondary : 'transparent',
                  color: activeSection === 2 ? COLORS.light : COLORS.dark,
                  transition: 'all 0.3s'
                }}
              >
                2. Zeitwert und Restlaufzeit
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => handleSectionClick(3)}
                className={`w-full text-left p-2 rounded ${activeSection === 3 ? 'font-bold' : ''}`}
                style={{
                  backgroundColor: activeSection === 3 ? COLORS.secondary : 'transparent',
                  color: activeSection === 3 ? COLORS.light : COLORS.dark,
                  transition: 'all 0.3s'
                }}
              >
                3. Zeitwert und Moneyness
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => handleSectionClick(4)}
                className={`w-full text-left p-2 rounded ${activeSection === 4 ? 'font-bold' : ''}`}
                style={{
                  backgroundColor: activeSection === 4 ? COLORS.secondary : 'transparent',
                  color: activeSection === 4 ? COLORS.light : COLORS.dark,
                  transition: 'all 0.3s'
                }}
              >
                4. Wichtige Faustregeln
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Content Area */}
        <main className="flex-grow p-6 bg-white">
          {renderContentSection()}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-primary text-white p-4 text-center" style={{backgroundColor: COLORS.primary}}>
        <p>© 2024 Markus Lehleiter • Optionen strategisch nutzen</p>
      </footer>
    </div>
  );
};

// Content Components
const GrundlegendesZumZeitwert = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" style={{color: COLORS.primary}}>Grundlegendes zum Zeitwert</h2>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6" style={{backgroundColor: '#e2e2e3'}}>
        <h3 className="text-lg font-semibold mb-2" style={{color: COLORS.primary}}>Definition: Zeitwert einer Option</h3>
        <p>Der Zeitwert einer Option spiegelt die Wahrscheinlichkeit wider, dass sich der Kurs des Basiswerts bis zum Verfallsdatum vorteilhaft entwickelt. Er stellt den Betrag dar, den Investoren über den inneren Wert hinaus zu zahlen bereit sind.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3" style={{color: COLORS.primary}}>Komponenten des Optionspreises</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 border rounded p-4 shadow-sm">
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Innerer Wert</h4>
            <p>Der Betrag, den eine Option bei sofortiger Ausübung einbringen würde.</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Call: max(0, Kurs Basiswert - Strike)</li>
              <li>Put: max(0, Strike - Kurs Basiswert)</li>
            </ul>
          </div>
          <div className="flex-1 border rounded p-4 shadow-sm" style={{borderColor: COLORS.accent, borderWidth: '2px'}}>
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Zeitwert</h4>
            <p>Spiegelt die Wahrscheinlichkeit wider, dass die Option bis zum Verfall an Wert gewinnt.</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Optionspreis - Innerer Wert = Zeitwert</li>
              <li>Nimmt mit Annäherung an den Verfallstermin ab</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3" style={{color: COLORS.primary}}>Einflussfaktoren auf den Zeitwert</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4 shadow-sm">
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Restlaufzeit</h4>
            <p>Je länger die Restlaufzeit, desto höher der Zeitwert, da mehr Zeit für günstige Kursentwicklungen bleibt.</p>
          </div>
          <div className="border rounded p-4 shadow-sm">
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Volatilität</h4>
            <p>Höhere Volatilität erhöht den Zeitwert, da extreme Kursbewegungen wahrscheinlicher werden.</p>
          </div>
          <div className="border rounded p-4 shadow-sm">
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Moneyness</h4>
            <p>At-the-money Optionen haben den höchsten Zeitwert, da sie am sensibelsten auf Kursänderungen reagieren.</p>
          </div>
          <div className="border rounded p-4 shadow-sm">
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Zinsniveau</h4>
            <p>Beeinflusst den Zeitwert, besonders bei langfristigen Optionen (höhere Zinsen → höherer Zeitwert bei Calls).</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg" style={{backgroundColor: '#e2e2e3'}}>
        <h3 className="text-lg font-semibold mb-2" style={{color: COLORS.primary}}>Wichtig zu wissen:</h3>
        <p>Für Optionshändler ist der Zeitwert besonders bedeutsam, da er kontinuierlich abnimmt (Zeitwertverfall oder "Theta-Effekt"). Als Verkäufer von Optionen profitieren Sie von diesem Verfall, als Käufer arbeitet die Zeit gegen Sie.</p>
      </div>
    </div>
  );
};

const ZeitwertUndRestlaufzeit = ({ timeDecayData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" style={{color: COLORS.primary}}>Zeitwert und Restlaufzeit</h2>
      
      <div className="mb-6">
        <p className="mb-4">Der Zeitwert einer Option nimmt kontinuierlich ab und erreicht am Verfallstag den Wert Null. Dieser Prozess des Zeitwertverfalls beschleunigt sich, je näher das Verfallsdatum rückt – besonders in den letzten 30 Tagen.</p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6" style={{backgroundColor: '#e2e2e3'}}>
          <h3 className="text-lg font-semibold mb-2" style={{color: COLORS.primary}}>Theta-Verfall</h3>
          <p>Theta misst den täglichen Zeitwertverlust bei gleichbleibenden anderen Faktoren. Der Theta-Verfall ist nicht linear, sondern beschleunigt sich zum Verfallsdatum hin.</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4" style={{color: COLORS.primary}}>Zeitwertverfall bei ATM-Optionen</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={timeDecayData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="day" 
                label={{ value: 'Tage bis zum Verfall', position: 'insideBottomRight', offset: -5 }} 
              />
              <YAxis
                label={{ value: 'Zeitwert', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip formatter={(value) => [`${value} €`, 'Zeitwert']} />
              <Legend />
              <ReferenceLine x={30} stroke="#f00" strokeDasharray="3 3" label={{ value: 'Letzte 30 Tage', position: 'insideTopRight', fill: '#f00' }} />
              <Line 
                type="monotone" 
                dataKey="zeitwert" 
                stroke={COLORS.primary} 
                strokeWidth={3} 
                activeDot={{ r: 8 }} 
                name="Zeitwert (€)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Abbildung: Zeitwertverfall einer typischen ATM-Option über 90 Tage. Beachten Sie die Beschleunigung des Verfalls in den letzten 30 Tagen.
        </p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3" style={{color: COLORS.primary}}>Wichtige Erkenntnisse</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4 shadow-sm" style={{borderLeft: `4px solid ${COLORS.accent}`}}>
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Beschleunigter Verfall</h4>
            <p>Je näher der Verfall rückt, desto schneller verliert die Option an Zeitwert – besonders in den letzten 30 Tagen.</p>
          </div>
          <div className="border rounded p-4 shadow-sm" style={{borderLeft: `4px solid ${COLORS.accent}`}}>
            <h4 className="font-bold" style={{color: COLORS.secondary}}>Quadratwurzel-Beziehung</h4>
            <p>Der Zeitwert verhält sich ungefähr proportional zur Quadratwurzel der Restlaufzeit. Eine Vervierfachung der Laufzeit führt nur zur Verdoppelung des Zeitwerts.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg" style={{backgroundColor: '#e2e2e3'}}>
        <h3 className="text-lg font-semibold mb-2" style={{color: COLORS.primary}}>Konsequenzen für Händler:</h3>
        <ul className="list-disc pl-5">
          <li><strong>Optionsverkäufer</strong> profitieren vom beschleunigten Zeitwertverfall und sollten vorzugsweise kurzlaufende Optionen verkaufen.</li>
          <li><strong>Optionskäufer</strong> sollten den Zeitwertverfall berücksichtigen und entweder längere Laufzeiten wählen oder Positionen rechtzeitig anpassen.</li>
        </ul>
      </div>
    </div>
  );
};

const ZeitwertUndMoneyness = ({ moneynessCurves }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" style={{color: COLORS.primary}}>Zeitwert und Moneyness</h2>
      
      <div className="mb-6">
        <p className="mb-4">Die "Moneyness" einer Option (ob sie im Geld, am Geld oder aus dem Geld ist) beeinflusst maßgeblich, wie der Zeitwertverfall verläuft. ATM-Optionen haben den höchsten absoluten Zeitwert, während OTM-Optionen den höchsten prozentualen Zeitwertverlust aufweisen.</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4" style={{color: COLORS.primary}}>Zeitwertverfall nach Moneyness</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={moneynessCurves}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="day" 
                label={{ value: 'Tage bis zum Verfall', position: 'insideBottomRight', offset: -5 }} 
              />
              <YAxis
                label={{ value: 'Zeitwert', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip formatter={(value) => [`${value} €`, 'Zeitwert']} />
              <Legend />
              <ReferenceLine x={30} stroke="#f00" strokeDasharray="3 3" label={{ value: 'Letzte 30 Tage', position: 'insideTopRight', fill: '#f00' }} />
              <Line 
                type="monotone" 
                dataKey="atm" 
                stroke={COLORS.primary} 
                strokeWidth={3} 
                activeDot={{ r: 8 }} 
                name="Am Geld (ATM)"
              />
              <Line 
                type="monotone" 
                dataKey="itm" 
                stroke={COLORS.secondary} 
                strokeWidth={2} 
                activeDot={{ r: 6 }} 
                name="Im Geld (ITM)"
              />
              <Line 
                type="monotone" 
                dataKey="otm" 
                stroke={COLORS.accent} 
                strokeWidth={2} 
                activeDot={{ r: 6 }} 
                name="Aus dem Geld (OTM)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Abbildung: Vergleich des Zeitwertverfalls für verschiedene Moneyness-Zustände. ATM-Optionen haben den höchsten absoluten Zeitwert und zeigen den stärksten beschleunigten Verfall in den letzten 30 Tagen.
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3" style={{color: COLORS.primary}}>Beziehung zwischen Moneyness und Zeitwertverfall</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.primary, color: COLORS.light}}>Moneyness</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.primary, color: COLORS.light}}>Absoluter Zeitwert</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.primary, color: COLORS.light}}>Prozentualer Zeitwertverlust</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.primary, color: COLORS.light}}>Charakteristika</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border font-bold">ATM (Am Geld)</td>
                <td className="py-2 px-4 border">Höchster absoluter Zeitwert</td>
                <td className="py-2 px-4 border">Mittlerer prozentualer Verlust</td>
                <td className="py-2 px-4 border">Beschleunigter Verfall in den letzten 30 Tagen</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-bold">ITM (Im Geld)</td>
                <td className="py-2 px-4 border">Mittlerer absoluter Zeitwert</td>
                <td className="py-2 px-4 border">Niedrigster prozentualer Verlust</td>
                <td className="py-2 px-4 border">Stabilerer Wertverlauf durch hohen inneren Wert</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-bold">OTM (Aus dem Geld)</td>
                <td className="py-2 px-4 border">Niedrigster absoluter Zeitwert</td>
                <td className="py-2 px-4 border">Höchster prozentualer Verlust</td>
                <td className="py-2 px-4 border">Besteht nur aus Zeitwert, verläuft linearer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-bold">DITM (Tief im Geld)</td>
                <td className="py-2 px-4 border">Sehr geringer Zeitwert</td>
                <td className="py-2 px-4 border">Kaum relevant</td>
                <td className="py-2 px-4 border">Besteht überwiegend aus innerem Wert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg" style={{backgroundColor: '#e2e2e3'}}>
        <h3 className="text-lg font-semibold mb-2" style={{color: COLORS.primary}}>Beispiel aus dem Buch:</h3>
        <p className="mb-2">SPY ETF bei 570, 76 Tage bis zum Verfall:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.secondary, color: COLORS.light}}>Strike SPY</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.secondary, color: COLORS.light}}>Preis Option</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.secondary, color: COLORS.light}}>Delta</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.secondary, color: COLORS.light}}>Theta</th>
                <th className="py-2 px-4 border" style={{backgroundColor: COLORS.secondary, color: COLORS.light}}>Zeitwertverlust in %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">570 (ATM)</td>
                <td className="py-2 px-4 border">14,94</td>
                <td className="py-2 px-4 border">45</td>
                <td className="py-2 px-4 border">-0,09</td>
                <td className="py-2 px-4 border">-0,60%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">520 (OTM)</td>
                <td className="py-2 px-4 border">5,20</td>
                <td className="py-2 px-4 border">16</td>
                <td className="py-2 px-4 border">-0,08</td>
                <td className="py-2 px-4 border">-1,54%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">455 (Weit OTM)</td>
                <td className="py-2 px-4 border">1,875</td>
                <td className="py-2 px-4 border">5</td>
                <td className="py-2 px-4 border">-0,053</td>
                <td className="py-2 px-4 border">-2,83%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const WichtigeFaustregeln = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" style={{color: COLORS.primary}}>Wichtige Faustregeln zum Zeitwertverfall</h2>
      
      <div className="mb-6">
        <p>Der Zeitwertverfall folgt bestimmten Mustern, die Händler kennen sollten. Die folgenden Faustregeln helfen Ihnen, den Zeitwertverfall zu verstehen und strategisch zu nutzen.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="p-4 font-bold text-white" style={{backgroundColor: COLORS.primary}}>
            Regel I: Zeitwert bei ATM-Optionen am größten
          </div>
          <div className="p-4 bg-white">
            <p className="mb-2">At-the-Money (ATM) Optionen haben den höchsten Zeitwert, da sie die größte Unsicherheit über zukünftige Preisbewegungen aufweisen.</p>
            <div className="bg-gray-100 p-3 rounded mt-2" style={{backgroundColor: '#e2e2e3'}}>
              <p><strong>Warum?</strong> Bei ATM-Optionen können bereits geringe Kursbewegungen das Delta und damit das Gewinnpotenzial stark beeinflussen.</p>
            </div>
            <div className="mt-3 border-l-4 pl-3" style={{borderColor: COLORS.accent}}>
              <p>In den letzten 30 Tagen vor dem Verfall beschleunigt sich der Zeitwertverfall bei ATM-Optionen besonders stark (Theta-Effekt).</p>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="p-4 font-bold text-white" style={{backgroundColor: COLORS.primary}}>
            Regel II: Zeitwertverfall beschleunigt sich zum Laufzeitende
          </div>
          <div className="p-4 bg-white">
            <p className="mb-2">Der Zeitwertverlust einer Option verläuft nicht linear, sondern beschleunigt sich, je näher das Verfallsdatum rückt.</p>
            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <div className="flex-1 bg-gray-100 p-3 rounded" style={{backgroundColor: '#e2e2e3'}}>
                <p><strong>Frühe Phase:</strong> Langsamer Zeitwertverfall, relativ stabile Optionspreise.</p>
              </div>
              <div className="flex-1 bg-gray-100 p-3 rounded" style={{backgroundColor: '#e2e2e3'}}>
                <p><strong>Mittlere Phase:</strong> Moderater Zeitwertverfall, zunehmender Druck auf den Optionspreis.</p>
              </div>
              <div className="flex-1 bg-gray-100 p-3 rounded" style={{backgroundColor: '#e2e2e3'}}>
                <p><strong>Letzte 30 Tage:</strong> Drastisch beschleunigter Verfall, besonders bei ATM-Optionen.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="p-4 font-bold text-white" style={{backgroundColor: COLORS.primary}}>
            Regel III: Deep In the Money-Optionen haben i.d.R. einen geringen Zeitwert
          </div>
          <div className="p-4 bg-white">
            <p className="mb-2">Optionen, die tief im Geld (DITM) sind, bestehen hauptsächlich aus innerem Wert und haben nur einen geringen Zeitwertanteil.</p>
            <div className="bg-gray-100 p-3 rounded mt-2" style={{backgroundColor: '#e2e2e3'}}>
              <p><strong>Folgen:</strong> DITM-Optionen bewegen sich nahezu 1:1 mit dem Basiswert und sind weniger anfällig für Zeitwertverfall, Volatilitätsveränderungen und andere Preisschwankungen.</p>
            </div>
            <div className="mt-3 border-l-4 pl-3" style={{borderColor: COLORS.accent}}>
              <p>Der Zeitwertverfall bei DITM-Optionen verläuft gleichmäßiger und weniger abrupt, da der innere Wert bereits den Großteil des Optionspreises ausmacht.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4" style={{color: COLORS.primary}}>Strategische Nutzung des Zeitwertverfalls</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="p-3 font-bold text-white" style={{backgroundColor: COLORS.secondary}}>
              Für Optionsverkäufer
            </div>
            <div className="p-4 bg-white">
              <ul className="list-disc pl-5">
                <li className="mb-2">Verkaufen Sie kurzlaufende Optionen, um vom beschleunigten Zeitwertverfall zu profitieren.</li>
                <li className="mb-2">Nutzen Sie Phasen erhöhter Volatilität für den Einstieg, um von höheren Prämien zu profitieren.</li>
                <li className="mb-2">ATM-Optionen bieten den höchsten absoluten Zeitwertverfall.</li>
                <li>Nehmen Sie Gewinne frühzeitig mit (z.B. bei 50-80% der maximalen Prämie).</li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="p-3 font-bold text-white" style={{backgroundColor: COLORS.secondary}}>
              Für Optionskäufer
            </div>
            <div className="p-4 bg-white">
              <ul className="list-disc pl-5">
                <li className="mb-2">Wählen Sie längere Laufzeiten, um den Zeitwertverfall zu minimieren.</li>
                <li className="mb-2">Kaufen Sie in Phasen niedriger Volatilität, wenn Optionen günstiger sind.</li>
                <li className="mb-2">Ziehen Sie ITM-Optionen in Betracht, da diese weniger vom Zeitwertverfall betroffen sind.</li>
                <li>Vermeiden Sie den Kauf von Optionen mit weniger als 30 Tagen Restlaufzeit.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-100 p-4 rounded-lg" style={{backgroundColor: '#e2e2e3'}}>
        <h3 className="text-lg font-semibold mb-2" style={{color: COLORS.primary}}>Zusammenfassung:</h3>
        <ul className="list-disc pl-5">
          <li><strong>Zeitwert</strong> ist ein entscheidender Faktor im Optionshandel, der von Restlaufzeit, Volatilität und Moneyness beeinflusst wird.</li>
          <li>Der <strong>Zeitwertverfall</strong> beschleunigt sich zum Verfallsdatum hin, insbesondere in den letzten 30 Tagen.</li>
          <li><strong>ATM-Optionen</strong> haben den höchsten absoluten Zeitwert und zeigen den stärksten Theta-Effekt.</li>
          <li><strong>OTM-Optionen</strong> verlieren prozentual schneller an Wert als andere Optionen.</li>
          <li>Wer die Mechanik des Zeitwertverfalls versteht, kann sie strategisch nutzen – als Verkäufer zur Ertragsgenerierung, als Käufer durch bewusste Laufzeitwahl.</li>
        </ul>
      </div>
    </div>
  );
};

export default TimeValuePresentation;