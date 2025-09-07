import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// Main presentation component
export default function StrategieStellschrauben() {
  const [activeTab, setActiveTab] = useState('edge');
  
  // Color scheme from website
  const colors = {
    primary: '#003366',    // Dark blue
    secondary: '#7e97c3',  // Light blue
    accent: '#ffd700',     // Gold
    light: '#ffffff',      // White
    dark: '#333333',       // Dark gray
    success: '#66cc99',    // Mint green
  };
  
  // Data for charts
  const sellOptionsData = [
    { name: 'Januar', gewinnrate: 78, profit: 1650 },
    { name: 'Februar', gewinnrate: 82, profit: 1840 },
    { name: 'März', gewinnrate: 65, profit: 980 },
    { name: 'April', gewinnrate: 76, profit: 1520 },
    { name: 'Mai', gewinnrate: 83, profit: 1980 },
    { name: 'Juni', gewinnrate: 79, profit: 1720 }
  ];
  
  const buyOptionsData = [
    { name: 'Januar', gewinnrate: 32, profit: 2200 },
    { name: 'Februar', gewinnrate: 41, profit: 3100 },
    { name: 'März', gewinnrate: 28, profit: 1800 },
    { name: 'April', gewinnrate: 35, profit: 2500 },
    { name: 'Mai', gewinnrate: 25, profit: 1600 },
    { name: 'Juni', gewinnrate: 38, profit: 2850 }
  ];
  
  const crvComparisonData = [
    { name: '0.5', erfolgschance: 85 },
    { name: '1.0', erfolgschance: 55 },
    { name: '1.5', erfolgschance: 45 },
    { name: '2.0', erfolgschance: 38 },
    { name: '3.0', erfolgschance: 28 },
    { name: '5.0', erfolgschance: 18 }
  ];
  
  const timeValueData = [
    { name: '60 Tage', verkauf: 65, kauf: 35 },
    { name: '45 Tage', verkauf: 72, kauf: 28 },
    { name: '30 Tage', verkauf: 80, kauf: 20 },
    { name: '15 Tage', verkauf: 88, kauf: 12 },
    { name: '7 Tage', verkauf: 93, kauf: 7 },
    { name: '1 Tag', verkauf: 98, kauf: 2 }
  ];
  
  const strategiesData = [
    { name: 'Delta niedrig (0.16)', value: 68 },
    { name: 'Kurze Laufzeit', value: 75 },
    { name: 'Hohe Volatilität', value: 82 },
    { name: 'Stop-Loss', value: 50 },
    { name: 'Profit Takes', value: 65 }
  ];
  
  const COLORS = [colors.accent, colors.secondary, colors.primary, colors.success, '#ff8042'];
  
  // Tab content rendering
  const renderTabContent = () => {
    switch(activeTab) {
      case 'edge':
        return (
          <div className="tab-content">
            <h3 className="section-title">Bedeutung eines Vorteils (Edge) im Optionshandel</h3>
            <div className="content-grid">
              <div className="text-section">
                <p>Im Optionshandel ist es von entscheidender Bedeutung, einen systematischen Vorteil – den sogenannten Edge – zu entwickeln. Dieser kann auf einem tiefen Marktverständnis, spezialisierten Strategien oder der Ausnutzung von Marktineffizienzen beruhen.</p>
                <p>Gleichzeitig ist <strong>Geduld ein wesentlicher Faktor</strong>, da sich der Wert von Optionsstrategien häufig erst im Laufe der Zeit entfaltet. Der langfristige Erfolg hängt maßgeblich davon ab, einen klaren statistischen Vorteil zu haben und diesen konsequent zu nutzen.</p>
                <div className="key-bullet-points">
                  <div className="bullet-point">
                    <span className="bullet-number">01</span>
                    <p>Ein Edge kann in einer höheren Gewinnwahrscheinlichkeit als der vom Markt eingepreisten liegen</p>
                  </div>
                  <div className="bullet-point">
                    <span className="bullet-number">02</span>
                    <p>Durch Backtesting können Sie feststellen, ob Ihre Strategie einen echten Vorteil bietet</p>
                  </div>
                  <div className="bullet-point">
                    <span className="bullet-number">03</span>
                    <p>Geduld ist notwendig, um Ihren statistischen Edge über viele Trades hinweg wirken zu lassen</p>
                  </div>
                </div>
              </div>
              <div className="chart-section">
                <h4>Gewinnraten und Profite: Verkauf vs. Kauf von Optionen</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { name: 'Optionsverkauf', gewinnrate: 75, profit: 1500 },
                      { name: 'Optionskauf', gewinnrate: 35, profit: 2500 }
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke={colors.primary} />
                    <YAxis yAxisId="right" orientation="right" stroke={colors.accent} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="gewinnrate" name="Gewinnrate %" fill={colors.primary} />
                    <Bar yAxisId="right" dataKey="profit" name="Ø Profit (€)" fill={colors.accent} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="chart-caption">Vergleich von Gewinnrate und Durchschnittsgewinn: Optionsverkauf hat typischerweise eine höhere Erfolgsquote, während Optionskauf höhere potenzielle Gewinne bietet.</p>
              </div>
            </div>
          </div>
        );
      
      case 'chances':
        return (
          <div className="tab-content">
            <h3 className="section-title">Chancen bei der Strategieauswahl verbessern</h3>
            <div className="content-grid">
              <div className="text-section">
                <p>Zwei Schlüsselprinzipien zur Verbesserung Ihrer Gewinnchancen im Optionshandel sind das <strong>Erhöhen der Erfolgswahrscheinlichkeit</strong> und das <strong>Begrenzen von Verlusten</strong>.</p>
                <p>Das <strong>Chancen-Risiko-Verhältnis (CRV)</strong> ist ein zentrales Element jeder Handelsstrategie. Es beschreibt das Verhältnis zwischen potenziellem Gewinn und eingegangenem Risiko. Ein ausgewogenes CRV ist entscheidend für den langfristigen Erfolg.</p>
                <div className="example-box">
                  <h4>Beispiel: Bull Put Spread</h4>
                  <ul className="example-details">
                    <li><strong>Kurs des Basiswerts:</strong> 89,80 $</li>
                    <li><strong>Strikes:</strong> 91 $ Put (verkauft), 87 $ Put (gekauft)</li>
                    <li><strong>Optionsprämien (Netto):</strong> 203 $</li>
                    <li><strong>Break-Even:</strong> 88,97 $</li>
                    <li><strong>Maximaler Gewinn:</strong> 203 $</li>
                    <li><strong>Maximaler Verlust:</strong> 197 $</li>
                    <li><strong>Gewinnwahrscheinlichkeit:</strong> 53 %</li>
                    <li><strong>CRV:</strong> 1,03</li>
                  </ul>
                </div>
              </div>
              <div className="chart-section">
                <h4>Zusammenhang: CRV und Erfolgswahrscheinlichkeit</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={crvComparisonData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: 'CRV (Chancen-Risiko-Verhältnis)', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Erfolgswahrscheinlichkeit (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="erfolgschance" name="Erfolgswahrscheinlichkeit" stroke={colors.accent} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="chart-caption">Je höher das CRV, desto niedriger ist typischerweise die Erfolgswahrscheinlichkeit. Ein ausgewogenes Verhältnis ist für den langfristigen Erfolg entscheidend.</p>
              </div>
            </div>
          </div>
        );
        
      case 'selling':
        return (
          <div className="tab-content">
            <h3 className="section-title">Chancen beim Verkauf von Optionen erhöhen</h3>
            <div className="content-grid">
              <div className="text-section">
                <p>Optionsverkäufer erzielen kleine, regelmäßige Gewinne durch Prämien und kontrollieren das Risiko größerer Verluste durch Verlustbegrenzung bzw. Absicherung.</p>
                <p>Der Schlüssel liegt in einem <strong>asymmetrischen Risiko-Ertrags-Profil</strong>: Während das Gewinnpotenzial durch die eingenommene Prämie begrenzt ist, besteht ein Risiko, wenn sich der Markt stark gegen die verkaufte Option bewegt.</p>
                <div className="strategy-box">
                  <h4>Erfolgsstrategien beim Optionsverkauf:</h4>
                  <ul>
                    <li><strong>Niedriges Delta (z.B. 0,16)</strong> - Optionen sind weniger empfindlich auf Kursbewegungen</li>
                    <li><strong>Kurze Laufzeiten</strong> - Schnellerer Zeitwertverfall (Theta) bringt schnellere Gewinne</li>
                    <li><strong>Verkauf bei hoher Volatilität</strong> - Höhere Prämien bei erhöhter Unsicherheit</li>
                    <li><strong>Stop-Loss Orders</strong> - Schützen vor unerwarteten Marktbewegungen</li>
                    <li><strong>Profit Takes (50-80% der Prämie)</strong> - Gewinne frühzeitig sichern</li>
                  </ul>
                </div>
              </div>
              <div className="chart-section">
                <h4>Effektivität verschiedener Verkaufsstrategien</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={strategiesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {strategiesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Erfolgsrate']} />
                  </PieChart>
                </ResponsiveContainer>
                <p className="chart-caption">Vergleich der Effektivität verschiedener Strategien beim Verkauf von Optionen, gemessen an typischen Erfolgsraten.</p>
              </div>
            </div>
          </div>
        );
        
      case 'buying':
        return (
          <div className="tab-content">
            <h3 className="section-title">Chancen beim Kauf von Optionen erhöhen</h3>
            <div className="content-grid">
              <div className="text-section">
                <p>Im Optionshandel setzen Käufer oft auf kleine Investitionen, um hohe Gewinne zu erzielen. Der Schlüssel liegt im <strong>asymmetrischen Risiko-Ertrags-Profil</strong>: Das Verlustrisiko beschränkt sich auf die gezahlte Prämie, während das Gewinnpotenzial bei starken Marktbewegungen nahezu unbegrenzt ist.</p>
                <div className="strategy-box">
                  <h4>Erfolgsstrategien beim Optionskauf:</h4>
                  <ul>
                    <li><strong>Hohes Delta (z.B. 0,80 oder höher)</strong> - Stärkere Reaktion auf Kursbewegungen</li>
                    <li><strong>Deep In the money-Optionen</strong> - Minimieren das Risiko des Zeitwertverfalls</li>
                    <li><strong>Längere Laufzeiten</strong> - Mehr Zeit für die erwartete Marktbewegung</li>
                    <li><strong>Kauf bei niedriger Volatilität</strong> - Günstigere Prämien, Chance auf steigende Volatilität</li>
                    <li><strong>Trailing Orders</strong> - Gewinne sichern, wenn der Markt sich dreht</li>
                  </ul>
                </div>
              </div>
              <div className="chart-section">
                <h4>Zeitwertverfall und Erfolgschancen</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={timeValueData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="verkauf" name="Vorteil Verkauf %" stackId="a" fill={colors.primary} />
                    <Bar dataKey="kauf" name="Vorteil Kauf %" stackId="a" fill={colors.accent} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="chart-caption">Je näher am Verfallsdatum, desto größer der Vorteil für Optionsverkäufer durch Zeitwertverfall. Käufer profitieren von längeren Laufzeiten.</p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  // Main component render
  return (
    <div className="presentation-container">
      <header className="presentation-header">
        <h1>Wichtige Stellschrauben für Ihre Strategien</h1>
        <p className="subtitle">Optimieren Sie Ihre Optionsstrategien für höhere Erfolgswahrscheinlichkeit</p>
      </header>
      
      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'edge' ? 'active' : ''}`}
            onClick={() => setActiveTab('edge')}
          >
            Edge & Geduld
          </button>
          <button 
            className={`tab-button ${activeTab === 'chances' ? 'active' : ''}`}
            onClick={() => setActiveTab('chances')}
          >
            Chancen verbessern
          </button>
          <button 
            className={`tab-button ${activeTab === 'selling' ? 'active' : ''}`}
            onClick={() => setActiveTab('selling')}
          >
            Optionen verkaufen
          </button>
          <button 
            className={`tab-button ${activeTab === 'buying' ? 'active' : ''}`}
            onClick={() => setActiveTab('buying')}
          >
            Optionen kaufen
          </button>
        </div>
        
        <div className="tab-content-container">
          {renderTabContent()}
        </div>
      </div>
      
      <div className="summary-box">
        <h3>Fazit</h3>
        <p>Langfristiger Erfolg im Optionshandel erfordert mehr als nur einen systematischen Vorteil (Edge). Geduld, Disziplin und die konsequente Anwendung Ihrer Strategie sind entscheidend, da der Nutzen oft erst nach vielen Trades sichtbar wird. Backtesting, Risikokontrolle und ein ausgewogenes Chancen-Risiko-Verhältnis helfen, Gewinnchancen zu maximieren und Verluste zu minimieren.</p>
      </div>
      
      <style jsx>{`
        .presentation-container {
          font-family: 'Roboto', sans-serif;
          color: ${colors.dark};
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .presentation-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .presentation-header h1 {
          color: ${colors.primary};
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .subtitle {
          color: ${colors.secondary};
          font-size: 1.2rem;
          margin-top: 0;
        }
        
        .tabs-container {
          margin-bottom: 2rem;
        }
        
        .tabs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .tab-button {
          flex: 1;
          padding: 12px 15px;
          background-color: #e2e2e3;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s;
          min-width: 150px;
          color: ${colors.primary};
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.9rem;
        }
        
        .tab-button:hover {
          background-color: ${colors.secondary};
          color: white;
        }
        
        .tab-button.active {
          background-color: ${colors.primary};
          color: white;
        }
        
        .tab-content-container {
          background-color: white;
          padding: 2rem;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .section-title {
          color: ${colors.primary};
          margin-bottom: 1.5rem;
          font-weight: 600;
          border-left: 4px solid ${colors.accent};
          padding-left: 10px;
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .text-section p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .key-bullet-points {
          margin-top: 1.5rem;
        }
        
        .bullet-point {
          display: flex;
          margin-bottom: 1rem;
          align-items: flex-start;
        }
        
        .bullet-number {
          background-color: ${colors.primary};
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.8rem;
          font-size: 0.8rem;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .bullet-point p {
          margin: 0;
          padding-top: 5px;
        }
        
        .chart-section {
          display: flex;
          flex-direction: column;
        }
        
        .chart-section h4 {
          text-align: center;
          margin-bottom: 1rem;
          color: ${colors.secondary};
        }
        
        .chart-caption {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.9rem;
          color: ${colors.dark};
          font-style: italic;
        }
        
        .example-box {
          background-color: #f8f9fa;
          padding: 1.5rem;
          border-radius: 5px;
          border-left: 4px solid ${colors.accent};
          margin-top: 1.5rem;
        }
        
        .example-box h4 {
          margin-top: 0;
          color: ${colors.primary};
          margin-bottom: 1rem;
        }
        
        .example-details {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .example-details li {
          margin-bottom: 0.5rem;
          padding-left: 5px;
        }
        
        .strategy-box {
          background-color: #f8f9fa;
          padding: 1.5rem;
          border-radius: 5px;
          border-left: 4px solid ${colors.primary};
          margin-top: 1.5rem;
        }
        
        .strategy-box h4 {
          margin-top: 0;
          color: ${colors.primary};
          margin-bottom: 1rem;
        }
        
        .strategy-box ul {
          padding-left: 20px;
        }
        
        .strategy-box li {
          margin-bottom: 0.7rem;
        }
        
        .summary-box {
          background-color: ${colors.primary};
          color: white;
          padding: 2rem;
          border-radius: 5px;
          margin-top: 2rem;
        }
        
        .summary-box h3 {
          color: ${colors.accent};
          margin-top: 0;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          
          .tabs {
            flex-direction: column;
          }
          
          .tab-button {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
