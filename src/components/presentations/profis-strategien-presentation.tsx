import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const primaryColor = "#003366"; // Dunkelblau
  const secondaryColor = "#7e97c3"; // Hellblau
  const accentColor = "#ffd700"; // Goldgelb
  const lightColor = "#ffffff"; // Weiß
  const darkColor = "#333333"; // Dunkelgrau
  
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
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Daten für Warren Buffett's Put-Strategie
  const buffettPutData = [
    { year: 1, value: 4900, premium: 4900, profit: 0 },
    { year: 5, value: 4900, premium: 4900, profit: 2000 },
    { year: 10, value: 4900, premium: 4900, profit: 3500 },
    { year: 15, value: 4900, premium: 4900, profit: 4900 },
  ];
  
  // Daten für Mark Cuban's Collar-Strategie
  const cubanCollarData = [
    { price: 40, value: "Ausgangswert" },
    { price: 85, value: "Unterer Absicherungspunkt (Put)" },
    { price: 140, value: "Aktueller Wert" },
    { price: 205, value: "Obere Gewinnbegrenzung (Call)" },
  ];
  
  // Daten für Bill Ackman's Treasury-Wette
  const ackmanTreasuryData = [
    { month: "Jul", yield: 3.8, price: 100 },
    { month: "Aug", yield: 4.0, price: 98 },
    { month: "Sep", yield: 4.3, price: 96 },
    { month: "Okt", yield: 4.8, price: 92 },
    { month: "Nov", yield: 4.5, price: 94 },
    { month: "Dez", yield: 4.4, price: 95 },
  ];
  
  // Vergleich der Strategien
  const strategyComparisonData = [
    { 
      name: 'Buffett (Put-Verkauf)', 
      execution: 4, 
      profitPotential: 3, 
      riskLevel: 5,
      timeFrame: 5
    },
    { 
      name: 'Cuban (Collar)', 
      execution: 3, 
      profitPotential: 2, 
      riskLevel: 1,
      timeFrame: 3
    },
    { 
      name: 'Ackman (Treasury-Puts)', 
      execution: 2, 
      profitPotential: 5, 
      riskLevel: 4,
      timeFrame: 2
    },
  ];

  // Strategie-Anforderungen für Privatanleger
  const retailInvestorRequirements = [
    { name: 'Kapital', buffett: 90, cuban: 60, ackman: 70 },
    { name: 'Erfahrung', buffett: 70, cuban: 50, ackman: 80 },
    { name: 'Risikotoleranz', buffett: 80, cuban: 40, ackman: 70 },
    { name: 'Zeithorizont', buffett: 90, cuban: 60, ackman: 50 },
  ];
  
  const slides = [
    {
      title: "Strategien der Profis",
      subtitle: "Von den Großen lernen",
      content: () => (
        <div>
          <p className="intro-text">
            Erfolgreiche Investoren wie Warren Buffett, Mark Cuban und Bill Ackman 
            nutzen Optionen gezielt zur Optimierung ihrer Portfolios. In diesem Kapitel 
            werfen wir einen Blick auf ihre Strategien.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <h3><span>1</span> Gezielte Kapitalhebelwirkung</h3>
              <p>
                Profis nutzen Optionen, um mit begrenztem Kapitaleinsatz
                höhere Renditen zu erzielen und Chancen effizient zu nutzen.
              </p>
            </div>
            <div className="feature-card">
              <h3><span>2</span> Zusatzeinkünfte generieren</h3>
              <p>
                Durch den strategischen Verkauf von Optionen können
                regelmäßige Prämieneinnahmen erzielt werden.
              </p>
            </div>
            <div className="feature-card">
              <h3><span>3</span> Risikoschutz implementieren</h3>
              <p>
                Mit Optionen lassen sich Portfolios gegen unerwartete Marktbewegungen
                absichern und Risiken gezielt steuern.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Warren Buffett's Strategie",
      subtitle: "Verkauf von Puts auf unterbewertete Aktien",
      content: () => (
        <div>
          <div className="two-column">
            <div className="column">
              <p className="strategy-description">
                <strong>Während der Finanzkrise 2008</strong> setzte Warren Buffett auf langfristige 
                OTC-Put-Optionen auf Marktindizes wie S&P 500, FTSE 100 und Euro Stoxx 50.
              </p>
              <ul className="strategy-benefits">
                <li>Einnahme von 4,9 Milliarden USD an Prämien, die sofort reinvestiert wurden</li>
                <li>Europäische Optionen mit Laufzeiten von 15-20 Jahren</li>
                <li>Keine Margin-Anforderungen dank Berkshire's Kreditwürdigkeit</li>
                <li>Langfristige Flexibilität durch die lange Laufzeit</li>
              </ul>
              <div className="application-box">
                <h4>Anwendung für Privatanleger:</h4>
                <p>
                  Privatanleger können in Zeiten hoher Volatilität börsengehandelte 
                  Put-Optionen verkaufen und von langfristigen Markterholungen profitieren.
                </p>
              </div>
            </div>
            <div className="column">
              <h4 className="chart-title">Buffett's Put-Strategie: Prämieneinnahmen und Gewinnentwicklung</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={buffettPutData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Jahre', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Mio. USD', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="premium" name="Erhaltene Prämie" fill={primaryColor} />
                  <Bar dataKey="profit" name="Realisierter Gewinn" fill={accentColor} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Mark Cuban's Strategie",
      subtitle: "Absicherung mit langfristigen Optionen",
      content: () => (
        <div>
          <div className="two-column">
            <div className="column">
              <p className="strategy-description">
                Mark Cuban sicherte seine Yahoo-Aktien im Wert von 1,4 Milliarden USD mit einer 
                <strong> Options-Collar-Strategie</strong> ab, um sich vor dem Platzen der Dotcom-Blase zu schützen.
              </p>
              <ul className="strategy-benefits">
                <li>Put-Option mit Strike bei 85 USD (Absicherung nach unten)</li>
                <li>Call-Option mit Strike bei 205 USD (Begrenzung nach oben)</li>
                <li>Kostenneutrale Strategie durch Ausgleich der Prämien</li>
                <li>Rettete sein Vermögen, als Yahoo-Aktien auf 13 USD fielen</li>
              </ul>
              <div className="application-box">
                <h4>Anwendung für Privatanleger:</h4>
                <p>
                  Privatanleger können mit börsengehandelten Collar-Strategien 
                  ihre Portfolios absichern, besonders in Zeiten erhöhter Volatilität.
                </p>
              </div>
            </div>
            <div className="column">
              <h4 className="chart-title">Cuban's Collar-Strategie: Preisabsicherung</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart layout="vertical" data={cubanCollarData} margin={{ top: 20, right: 50, left: 50, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 250]} />
                  <YAxis dataKey="value" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="price" name="Aktienkurs (USD)" fill={secondaryColor} />
                </BarChart>
              </ResponsiveContainer>
              <p className="chart-caption">
                Der Collar begrenzte Cuban's Verlustpotential auf max. 55 USD pro Aktie (140→85),
                während sein Aufwärtspotential auf 65 USD pro Aktie (140→205) limitiert war.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Bill Ackman's Strategie",
      subtitle: "Anpassung Portfolio an Marktbedingungen",
      content: () => (
        <div>
          <div className="two-column">
            <div className="column">
              <p className="strategy-description">
                Im Oktober 2023 setzte Bill Ackman mit <strong>Put-Optionen auf 30-jährige US-Staatsanleihen</strong> auf 
                fallende Kurse bei steigenden Zinsen.
              </p>
              <ul className="strategy-benefits">
                <li>Gezielte Wette auf wirtschaftliche Trends und Zinserwartungen</li>
                <li>Hohe Hebelwirkung durch Einsatz von Optionen statt Direkthandel</li>
                <li>Begrenztes Risiko durch Put-Optionen (maximaler Verlust = Prämie)</li>
                <li>Starke Gewinne bei korrekter Markteinschätzung</li>
              </ul>
              <div className="application-box">
                <h4>Anwendung für Privatanleger:</h4>
                <p>
                  Privatanleger können über ETFs wie TLT (iShares 20+ Year Treasury Bond ETF) 
                  auf fallende Anleihekurse setzen, wenn sie steigende Zinsen erwarten.
                </p>
              </div>
            </div>
            <div className="column">
              <h4 className="chart-title">Ackmans Treasury-Strategie: Inverse Beziehung Rendite/Kurs</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ackmanTreasuryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" stroke={primaryColor} domain={[3.5, 5]} />
                  <YAxis yAxisId="right" orientation="right" stroke={accentColor} domain={[90, 102]} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="yield" name="Rendite (%)" stroke={primaryColor} dot={{ r: 6 }} />
                  <Line yAxisId="right" type="monotone" dataKey="price" name="Anleihekurs" stroke={accentColor} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="chart-caption">
                Steigende Renditen führen zu fallenden Anleihekursen. Put-Optionen auf Anleihen 
                profitieren von diesem inversen Zusammenhang.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Vergleich der Strategien",
      subtitle: "Eigenschaften und Anforderungen",
      content: () => (
        <div>
          <div className="two-column">
            <div className="column">
              <h4 className="chart-title">Strategie-Eigenschaften (1=niedrig, 5=hoch)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={strategyComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="execution" name="Umsetzungskomplexität" fill={primaryColor} />
                  <Bar dataKey="profitPotential" name="Gewinnpotential" fill={secondaryColor} />
                  <Bar dataKey="riskLevel" name="Risikoniveau" fill={accentColor} />
                  <Bar dataKey="timeFrame" name="Zeithorizont" fill="#66cc99" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="column">
              <h4 className="chart-title">Anforderungen für Privatanleger (%)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={retailInvestorRequirements} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="buffett" name="Buffett Strategie" fill={primaryColor} />
                  <Bar dataKey="cuban" name="Cuban Strategie" fill={secondaryColor} />
                  <Bar dataKey="ackman" name="Ackman Strategie" fill={accentColor} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="summary-box">
            <h4>Fazit für Privatanleger:</h4>
            <p>
              Auch wenn Privatanleger meist keinen Zugang zu maßgeschneiderten OTC-Optionen haben, 
              können sie mit börsengehandelten Optionen ähnliche Strategien umsetzen. Voraussetzung 
              hierfür ist ein fundiertes Verständnis von Risikomanagement und Marktmechanismen.
            </p>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="presentation">
      <div className="slide" style={{ 
        backgroundColor: currentSlide % 2 === 0 ? lightColor : '#e2e2e3',
        color: darkColor,
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        minHeight: '80vh',
        position: 'relative'
      }}>
        <div className="slide-header">
          <h2 style={{ 
            color: primaryColor, 
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>{slides[currentSlide].title}</h2>
          {slides[currentSlide].subtitle && (
            <h3 style={{ 
              color: secondaryColor, 
              textAlign: 'center', 
              marginBottom: '2rem',
              fontWeight: 500
            }}>{slides[currentSlide].subtitle}</h3>
          )}
        </div>
        
        <div className="slide-content">
          {slides[currentSlide].content()}
        </div>
        
        <div className="slide-navigation" style={{
          position: 'absolute',
          bottom: '1rem',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            style={{
              backgroundColor: primaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              opacity: currentSlide === 0 ? 0.5 : 1
            }}
          >
            &#10094;
          </button>
          
          <div className="slide-indicators" style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            {slides.map((_, index) => (
              <div 
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? primaryColor : 'rgba(0, 51, 102, 0.3)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            style={{
              backgroundColor: primaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentSlide === slides.length - 1 ? 0.5 : 1
            }}
          >
            &#10095;
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .presentation {
          font-family: 'Roboto', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        .intro-text {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-align: center;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .feature-card {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s;
          height: 100%;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .feature-card h3 {
          color: ${primaryColor};
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .feature-card h3 span {
          background-color: ${primaryColor};
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }
        
        .two-column {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .column {
          flex: 1;
        }
        
        .strategy-description {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .strategy-benefits {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }
        
        .strategy-benefits li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        
        .application-box {
          background-color: ${accentColor};
          padding: 1.5rem;
          border-radius: 10px;
          margin-top: 2rem;
        }
        
        .application-box h4 {
          margin-bottom: 0.5rem;
          color: ${darkColor};
        }
        
        .chart-title {
          text-align: center;
          margin-bottom: 1rem;
          color: ${primaryColor};
        }
        
        .chart-caption {
          font-size: 0.9rem;
          text-align: center;
          margin-top: 1rem;
          color: ${darkColor};
          font-style: italic;
        }
        
        .summary-box {
          background-color: ${secondaryColor};
          color: white;
          padding: 1.5rem;
          border-radius: 10px;
          margin-top: 2rem;
        }
        
        .summary-box h4 {
          margin-bottom: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .two-column {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Presentation;