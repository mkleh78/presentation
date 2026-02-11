import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

// Main Presentation Component
export default function OptionenEinstiegPraesentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Color palette based on the website
  const colors = {
    primary: '#003366',
    secondary: '#7e97c3',
    accent: '#ffd700',
    light: '#ffffff',
    dark: '#333333',
    success: '#66cc99',
    warning: '#ff9900',
    danger: '#ff5555'
  };
  
  // Data for charts
  const startkapitalData = [
    { name: 'Klein', kapital: 5000, fill: colors.secondary },
    { name: 'Empfohlen', kapital: 10000, fill: colors.primary },
    { name: 'Komfortabel', kapital: 25000, fill: colors.success }
  ];
  
  const zeitaufwandData = [
    { name: 'Minimum', stunden: 2, fill: colors.secondary },
    { name: 'Durchschnitt', stunden: 5, fill: colors.primary },
    { name: 'Aktiv', stunden: 10, fill: colors.success }
  ];
  
  const accountTypesData = [
    { name: 'Cash Account', value: 35 },
    { name: 'Margin Account', value: 65 }
  ];
  
  const ACCOUNT_COLORS = [colors.secondary, colors.primary];
  
  // Function to navigate between slides
  const navigate = (direction) => {
    if (direction === 'next' && activeSlide < 9) {
      setActiveSlide(activeSlide + 1);
    } else if (direction === 'prev' && activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };
  
  // Slide content
  const slides = [
    // Slide 1: Introduction
    {
      title: "Häufige Fragen zum Einstieg",
      content: (
        <div className="slide-content">
          <p className="lead-text">
            Der Einstieg in den Optionshandel wirft viele Fragen auf. Diese Präsentation gibt Ihnen einen Überblick über die wichtigsten Aspekte, die Sie beachten sollten.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3><span>1</span> Startkapital</h3>
              <p>Wie viel Geld benötige ich?</p>
            </div>
            <div className="feature-card">
              <h3><span>2</span> Zeitaufwand</h3>
              <p>Wie viel Zeit sollte ich einplanen?</p>
            </div>
            <div className="feature-card">
              <h3><span>3</span> Broker & Konto</h3>
              <p>Welchen Broker wählen und wie ein Konto eröffnen?</p>
            </div>
            <div className="feature-card">
              <h3><span>4</span> Kosten & Steuern</h3>
              <p>Welche Kosten entstehen und wie werden Gewinne versteuert?</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: Startkapital
    {
      title: "1. Wie viel Geld benötige ich?",
      content: (
        <div className="slide-content">
          <div className="text-chart-split">
            <div className="text-section">
              <p>Für einen strategischen Einstieg in den Optionshandel sind <strong>mindestens 5.000 bis 10.000 Euro</strong> als Startkapital empfehlenswert.</p>
              <ul className="bullet-list">
                <li>Ermöglicht sinnvolle Positionsgrößen</li>
                <li>Erlaubt risikobegrenzte Strategien wie Bull Put Spreads</li>
                <li>Dieses Geld sollte nicht für den täglichen Lebensunterhalt benötigt werden</li>
                <li>Eine Begrenzung des Risikos ist wichtig für langfristigen Erfolg</li>
              </ul>
            </div>
            <div className="chart-section">
              <h4>Empfohlenes Startkapital</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={startkapitalData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Euro', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value} €`, 'Kapital']} />
                  <Bar dataKey="kapital" name="Startkapital (€)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="info-box">
            <p><strong>Tipp:</strong> Starten Sie mit einem kleinen Teil Ihres Anlagekapitals und steigern Sie die Positionsgrößen mit zunehmender Erfahrung.</p>
          </div>
        </div>
      )
    },
    
    // Slide 3: Zeitaufwand
    {
      title: "2. Wie viel Zeit benötige ich?",
      content: (
        <div className="slide-content">
          <div className="text-chart-split">
            <div className="text-section">
              <p>Der Zeitaufwand variiert je nach Handelsansatz:</p>
              <ul className="bullet-list">
                <li><strong>Passive Strategien</strong> (z.B. Covered Calls): oft ausreichend, Positionen monatlich zu überprüfen</li>
                <li><strong>Aktiver Handel</strong>: realistisch mindestens 2-3 Stunden pro Woche für Positionsüberwachung, Marktanalysen und Anpassungen</li>
                <li>Entscheidend ist ein <strong>Handelsansatz, der zu Ihrem Zeitrahmen und Ihren Zielen passt</strong></li>
              </ul>
            </div>
            <div className="chart-section">
              <h4>Wöchentlicher Zeitaufwand</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={zeitaufwandData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Stunden/Woche', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value} Stunden`, 'Zeitaufwand']} />
                  <Bar dataKey="stunden" name="Stunden pro Woche" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="info-box">
            <p><strong>Wichtig:</strong> Einarbeitungszeit zu Beginn ist höher. Mit einem guten System können Sie später Zeit sparen.</p>
          </div>
        </div>
      )
    },
    
    // Slide 4: Broker Wahl
    {
      title: "3. Welchen Broker wählen?",
      content: (
        <div className="slide-content">
          <p>Für regelmäßigen Optionshandel sind diese Faktoren entscheidend:</p>
          
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Kriterium</div>
              <div className="header-cell">Wichtigkeit</div>
              <div className="header-cell">Empfehlung</div>
            </div>
            <div className="table-row">
              <div className="cell">Gebührenstruktur</div>
              <div className="cell"><span className="importance high">Hoch</span></div>
              <div className="cell">Niedrige Gebühren pro Kontrakt, transparente Kostenstruktur</div>
            </div>
            <div className="table-row">
              <div className="cell">Plattform & Tools</div>
              <div className="cell"><span className="importance high">Hoch</span></div>
              <div className="cell">Umfangreiche Analysetools, benutzerfreundliche Oberfläche</div>
            </div>
            <div className="table-row">
              <div className="cell">Basiswährung</div>
              <div className="cell"><span className="importance high">Hoch</span></div>
              <div className="cell">Euro als Basiswährung für deutsche Kunden (Steuervereinfachung)</div>
            </div>
            <div className="table-row">
              <div className="cell">Support</div>
              <div className="cell"><span className="importance medium">Mittel</span></div>
              <div className="cell">Deutscher Support hilfreich, aber nicht zwingend</div>
            </div>
            <div className="table-row">
              <div className="cell">Schulungsmaterial</div>
              <div className="cell"><span className="importance medium">Mittel</span></div>
              <div className="cell">Umfangreiche Bildungsressourcen für Einsteiger</div>
            </div>
          </div>
          
          <div className="info-box">
            <p><strong>Empfehlung:</strong> Interactive Brokers (oder deutsche Reseller) bieten niedrige Gebühren, zuverlässige Plattformen und umfangreiche Analysetools.</p>
          </div>
        </div>
      )
    },
    
    // Slide 5: Konto eröffnen
    {
      title: "4. Wie eröffne ich ein Konto?",
      content: (
        <div className="slide-content">
          <div className="process-flow">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Antragsformular ausfüllen</h4>
                <p>Persönliche Daten, finanzielle Situation und Handelserfahrung angeben</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Identitätsverifizierung</h4>
                <p>Gültigen Ausweis und Wohnsitznachweis bereitstellen (oft per Video-Ident-Verfahren)</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Handelsfreigaben</h4>
                <p>Je nach Erfahrung und Risikobereitschaft werden verschiedene Handelsfreigaben erteilt</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Kontoeinstellungen</h4>
                <p>Handelslimits, Sicherheitseinstellungen und Basiswährung festlegen</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Einzahlung</h4>
                <p>Konto mit Guthaben aufladen (Banküberweisungen, Kreditkartenzahlungen etc.)</p>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <p><strong>Tipp:</strong> Nutzen Sie ein Demo-Konto, um die Plattform, Orderarten und Marktmechanismen kennenzulernen, bevor Sie echtes Geld einsetzen.</p>
          </div>
        </div>
      )
    },
    
    // Slide 6: Cash vs. Margin Konto
    {
      title: "5. Unterschied zwischen Cash- und Marginkonto?",
      content: (
        <div className="slide-content">
          <div className="text-chart-split">
            <div className="text-section">
              <div className="comparison-table">
                <div className="table-header">
                  <div className="header-cell">Kriterium</div>
                  <div className="header-cell">Cash-Konto</div>
                  <div className="header-cell">Margin-Konto</div>
                </div>
                <div className="table-row">
                  <div className="cell">Handelskapazität</div>
                  <div className="cell">Nur mit eigenem Kapital</div>
                  <div className="cell">Mit geliehenem Kapital möglich</div>
                </div>
                <div className="table-row">
                  <div className="cell">Hebelwirkung</div>
                  <div className="cell">Nein</div>
                  <div className="cell">Ja, erhöhte Kaufkraft</div>
                </div>
                <div className="table-row">
                  <div className="cell">Short-Selling</div>
                  <div className="cell">Nicht möglich</div>
                  <div className="cell">Möglich</div>
                </div>
                <div className="table-row">
                  <div className="cell">Margin Calls</div>
                  <div className="cell">Keine</div>
                  <div className="cell">Möglich bei Verlusten</div>
                </div>
                <div className="table-row">
                  <div className="cell">Risiko</div>
                  <div className="cell">Geringer</div>
                  <div className="cell">Höher durch Hebelwirkung</div>
                </div>
              </div>
            </div>
            <div className="chart-section">
              <h4>Verbreitung der Kontotypen</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={accountTypesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {accountTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={ACCOUNT_COLORS[index % ACCOUNT_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Anteil']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="info-box">
            <p><strong>Empfehlung:</strong> Für Einsteiger ist ein Cash-Konto empfehlenswert, um Risiken zu minimieren. Mit zunehmender Erfahrung kann ein Margin-Konto Vorteile bieten.</p>
          </div>
        </div>
      )
    },
    
    // Slide 7: Handel testen
    {
      title: "6. Wie kann ich den Handel testen, ohne Geld einzusetzen?",
      content: (
        <div className="slide-content">
          <div className="info-card">
            <h3>Demokonto (Paper Trading)</h3>
            <p>Ein Demokonto ermöglicht es Ihnen, mit virtuellem Geld zu handeln, ohne echtes Kapital zu riskieren.</p>
            
            <h4>Vorteile des Paper Tradings:</h4>
            <ul className="bullet-list">
              <li>Kennenlernen der Handelsplattform und ihrer Funktionen</li>
              <li>Erproben verschiedener Ordertypen und deren Ausführung</li>
              <li>Testen von Strategien unter realistischen Marktbedingungen</li>
              <li>Verständnis für Preisbewegungen und Marktdynamiken entwickeln</li>
              <li>Psychologische Vorbereitung auf den echten Handel</li>
            </ul>
            
            <h4>Einschränkungen zu beachten:</h4>
            <ul className="bullet-list">
              <li>Keine emotionalen Aspekte wie bei echtem Geldverlust</li>
              <li>Manchmal idealisierte Ausführungsbedingungen</li>
              <li>Kann zu übermäßigem Selbstvertrauen führen</li>
            </ul>
          </div>
          
          <div className="info-box">
            <p><strong>Empfehlung:</strong> Broker wie Interactive Brokers und tastyworks bieten gute Paper Trading-Optionen. Testen Sie mindestens 20-30 Trades, bevor Sie mit echtem Geld handeln.</p>
          </div>
        </div>
      )
    },
    
    // Slide 8: Kosten
    {
      title: "7. Welche Kosten fallen an?",
      content: (
        <div className="slide-content">
          <div className="cost-breakdown">
            <div className="cost-category">
              <h4>Brokergebühren</h4>
              <div className="cost-item">
                <span className="cost-name">Kommission pro Kontrakt</span>
                <span className="cost-value">0,65 € - 1,50 €</span>
              </div>
              <div className="cost-item">
                <span className="cost-name">Minimumgebühr pro Order</span>
                <span className="cost-value">1,00 € - 3,00 €</span>
              </div>
              <div className="cost-item">
                <span className="cost-name">Ausübungsgebühr</span>
                <span className="cost-value">5,00 € - 15,00 €</span>
              </div>
            </div>
            
            <div className="cost-category">
              <h4>Börsengebühren</h4>
              <div className="cost-item">
                <span className="cost-name">Clearing-Gebühren</span>
                <span className="cost-value">0,01 € - 0,10 € pro Kontrakt</span>
              </div>
              <div className="cost-item">
                <span className="cost-name">Regulierungsgebühren</span>
                <span className="cost-value">0,01 € - 0,05 € pro Kontrakt</span>
              </div>
            </div>
            
            <div className="cost-category">
              <h4>Marginkosten</h4>
              <div className="cost-item">
                <span className="cost-name">Margin-Zinssatz</span>
                <span className="cost-value">2,5% - 8,0% p.a.</span>
              </div>
              <div className="cost-item">
                <span className="cost-name">Hard-to-Borrow Gebühren</span>
                <span className="cost-value">Variabel</span>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <p><strong>Wichtig:</strong> Die Kosten variieren stark je nach Broker und Handelsvolumen. Vergleichen Sie die Gebührenstrukturen verschiedener Anbieter und berücksichtigen Sie die Kosten bei der Berechnung Ihrer potenziellen Rendite.</p>
          </div>
        </div>
      )
    },
    
    // Slide 9: Steuern
    {
      title: "8. Wie werden Gewinne aus dem Optionshandel versteuert?",
      content: (
        <div className="slide-content">
          <div className="tax-info">
            <h4>Besteuerung in Deutschland</h4>
            <p>In Deutschland unterliegen Gewinne aus dem Optionshandel der Abgeltungssteuer:</p>
            
            <div className="tax-details">
              <div className="tax-item">
                <span className="tax-name">Abgeltungssteuer</span>
                <span className="tax-value">25%</span>
              </div>
              <div className="tax-item">
                <span className="tax-name">Solidaritätszuschlag</span>
                <span className="tax-value">5,5% der Abgeltungssteuer</span>
              </div>
              <div className="tax-item">
                <span className="tax-name">Kirchensteuer (falls zutreffend)</span>
                <span className="tax-value">8% oder 9% der Abgeltungssteuer</span>
              </div>
              <div className="tax-item">
                <span className="tax-name">Verlustverrechnungsgrenze</span>
                <span className="tax-value">Abgeschafft (rückwirkend bis 2020)</span>
              </div>
            </div>
            
            <h4>Wichtige Hinweise zur Versteuerung:</h4>
            <ul className="bullet-list">
              <li>Die Verlustverrechnungsgrenze von 20.000 € für Termingeschäfte wurde mit dem Jahressteuergesetz 2024 abgeschafft</li>
              <li>Neuregelung ist rückwirkend bis 2020 gültig</li>
              <li>Uneingeschränkte Verrechnung von Verlusten aus Termingeschäften mit Gewinnen möglich</li>
              <li>Dokumentieren Sie alle Transaktionen sorgfältig für die Steuererklärung</li>
              <li>Provisionen und Aufwendungen für Optionsrückkauf können als Kosten geltend gemacht werden</li>
            </ul>
          </div>
          
          <div className="info-box warning">
            <p><strong>Hinweis:</strong> Die Steuergesetze können sich ändern. Konsultieren Sie bei Unsicherheiten einen Steuerberater, der mit Optionshandel vertraut ist.</p>
          </div>
        </div>
      )
    },
    
    // Slide 10: Schneller Einstieg
    {
      title: "9. Einstieg in den Optionshandel - Fahrplan",
      content: (
        <div className="slide-content">
          <div className="roadmap">
            <div className="roadmap-step">
              <div className="roadmap-number">1</div>
              <div className="roadmap-details">
                <h4>Grundlagen verstehen</h4>
                <p>Lernen Sie die wichtigsten Begriffe und Konzepte des Optionshandels kennen.</p>
              </div>
            </div>
            
            <div className="roadmap-step">
              <div className="roadmap-number">2</div>
              <div className="roadmap-details">
                <h4>Demo-Konto nutzen</h4>
                <p>Üben Sie mit einem Paper-Trading-Konto, um die Plattform kennenzulernen.</p>
              </div>
            </div>
            
            <div className="roadmap-step">
              <div className="roadmap-number">3</div>
              <div className="roadmap-details">
                <h4>Mit kleinem Kapital starten</h4>
                <p>Beginnen Sie mit 5.000-10.000 € und risikobegrenzten Strategien.</p>
              </div>
            </div>
            
            <div className="roadmap-step">
              <div className="roadmap-number">4</div>
              <div className="roadmap-details">
                <h4>Einfache Strategien einsetzen</h4>
                <p>Starten Sie mit Bull Put Spreads oder ähnlichen definierten Risiko-Strategien.</p>
              </div>
            </div>
            
            <div className="roadmap-step">
              <div className="roadmap-number">5</div>
              <div className="roadmap-details">
                <h4>Risiko- und Money Management</h4>
                <p>Setzen Sie klare Regeln für Verlustbegrenzung und behalten Sie die Positionsgröße im Auge.</p>
              </div>
            </div>
            
            <div className="roadmap-step">
              <div className="roadmap-number">6</div>
              <div className="roadmap-details">
                <h4>Handelsplan erstellen</h4>
                <p>Entwickeln Sie einen klaren Plan mit definierten Zielen und Strategien.</p>
              </div>
            </div>
            
            <div className="roadmap-step">
              <div className="roadmap-number">7</div>
              <div className="roadmap-details">
                <h4>Trading-Journal führen</h4>
                <p>Dokumentieren Sie jeden Trade, um aus Erfolgen und Fehlern zu lernen.</p>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <p><strong>Tipp:</strong> Für schnelleren Erfolg kann es hilfreich sein, einen Mentor zu finden oder auf bewährte Kurse und Lernmaterialien zurückzugreifen.</p>
          </div>
        </div>
      )
    }
  ];
  
  // Render function
  return (
    <div className="options-presentation">
      <div className="presentation-header">
        <h1>{slides[activeSlide].title}</h1>
        <div className="subtitle">Optionen strategisch nutzen | Markus Lehleiter</div>
      </div>
      
      <div className="presentation-content">
        {slides[activeSlide].content}
      </div>
      
      <div className="navigation-controls">
        <button 
          className={`nav-button ${activeSlide === 0 ? 'disabled' : ''}`} 
          onClick={() => navigate('prev')}
          disabled={activeSlide === 0}
        >
          &#10094; Zurück
        </button>
        
        <div className="slide-indicator">
          {activeSlide + 1} / {slides.length}
        </div>
        
        <button 
          className={`nav-button ${activeSlide === slides.length - 1 ? 'disabled' : ''}`} 
          onClick={() => navigate('next')}
          disabled={activeSlide === slides.length - 1}
        >
          Weiter &#10095;
        </button>
      </div>
      
      <div className="slide-dots">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${activeSlide === index ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
      
      <style jsx>{`
        .options-presentation {
          font-family: 'Roboto', sans-serif;
          max-width: 100%;
          background-color: #f5f5f7;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          min-height: 600px;
          display: flex;
          flex-direction: column;
        }
        
        .presentation-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        h1 {
          color: #003366;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .subtitle {
          color: #7e97c3;
          font-size: 1rem;
        }
        
        .presentation-content {
          flex-grow: 1;
          overflow-y: auto;
          padding: 1rem 0;
        }
        
        .slide-content {
          max-width: 100%;
        }
        
        .lead-text {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .feature-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
        }
        
        .feature-card h3 {
          color: #003366;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          font-size: 1.1rem;
        }
        
        .feature-card h3 span {
          background-color: #003366;
          color: white;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;
          flex-shrink: 0;
          font-size: 0.9rem;
        }
        
        .text-chart-split {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .text-section {
          flex: 1;
          min-width: 300px;
        }
        
        .chart-section {
          flex: 1;
          min-width: 300px;
        }
        
        .chart-section h4 {
          text-align: center;
          margin-bottom: 1rem;
          color: #003366;
        }
        
        .bullet-list {
          list-style-type: none;
          padding-left: 1.5rem;
        }
        
        .bullet-list li {
          position: relative;
          margin-bottom: 0.7rem;
        }
        
        .bullet-list li:before {
          content: "•";
          color: #ffd700;
          font-weight: bold;
          position: absolute;
          left: -1.5rem;
        }
        
        .info-box {
          background-color: rgba(0, 51, 102, 0.1);
          border-left: 4px solid #003366;
          padding: 1rem;
          border-radius: 5px;
          margin-top: 1.5rem;
        }
        
        .info-box.warning {
          background-color: rgba(255, 153, 0, 0.1);
          border-left: 4px solid #ff9900;
        }
        
        .info-box p {
          margin: 0;
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          overflow: hidden;
        }
        
        .table-header {
          display: flex;
          background-color: #003366;
          color: white;
          font-weight: bold;
        }
        
        .header-cell {
          flex: 1;
          padding: 0.75rem;
          text-align: center;
        }
        
        .table-row {
          display: flex;
        }
        
        .table-row:nth-child(even) {
          background-color: rgba(126, 151, 195, 0.1);
        }
        
        .cell {
          flex: 1;
          padding: 0.75rem;
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .importance {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        
        .importance.high {
          background-color: rgba(102, 204, 153, 0.2);
          color: #66cc99;
        }
        
        .importance.medium {
          background-color: rgba(255, 217, 0, 0.2);
          color: #d4b100;
        }
        
        .importance.low {
          background-color: rgba(255, 85, 85, 0.2);
          color: #ff5555;
        }
        
        .process-flow {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .process-step {
          display: flex;
          align-items: flex-start;
          background-color: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }
        
        .step-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          background-color: #003366;
          color: white;
          font-weight: bold;
          border-radius: 50%;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .step-content {
          flex-grow: 1;
        }
        
        .step-content h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #003366;
        }
        
        .info-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          margin-bottom: 1.5rem;
        }
        
        .info-card h3 {
          color: #003366;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .info-card h4 {
          color: #7e97c3;
          margin: 1.5rem 0 0.5rem;
          font-size: 1.1rem;
        }
        
        .cost-breakdown {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        
        .cost-category {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }
        
        .cost-category h4 {
          color: #003366;
          margin-top: 0;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .cost-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.7rem;
        }
        
        .cost-name {
          color: #555;
        }
        
        .cost-value {
          font-weight: bold;
          color: #333;
        }
        
        .tax-info {
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .tax-info h4 {
          color: #003366;
          margin-top: 0;
          margin-bottom: 1rem;
        }
        
        .tax-details {
          margin: 1.5rem 0;
          background-color: rgba(0, 51, 102, 0.05);
          padding: 1rem;
          border-radius: 8px;
        }
        
        .tax-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.7rem;
        }
        
        .tax-name {
          color: #555;
        }
        
        .tax-value {
          font-weight: bold;
          color: #333;
        }
        
        .roadmap {
          margin: 1.5rem 0;
        }
        
        .roadmap-step {
          display: flex;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }
        
        .roadmap-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #003366;
          color: white;
          font-weight: bold;
          border-radius: 50%;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .roadmap-details {
          background-color: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          flex-grow: 1;
        }
        
        .roadmap-details h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #003366;
        }
        
        .navigation-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .nav-button {
          background-color: #003366;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s;
        }
        
        .nav-button:hover:not(.disabled) {
          background-color: #002244;
        }
        
        .nav-button.disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        
        .slide-indicator {
          font-size: 1rem;
          color: #555;
        }
        
        .slide-dots {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          gap: 0.5rem;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          background-color: rgba(0, 51, 102, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .dot.active {
          background-color: #003366;
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .options-presentation {
            padding: 1rem;
          }
          
          h1 {
            font-size: 1.5rem;
          }
          
          .text-chart-split {
            flex-direction: column;
            gap: 1rem;
          }
          
          .process-step, .roadmap-step {
            flex-direction: column;
          }
          
          .step-number, .roadmap-number {
            margin-bottom: 0.5rem;
            margin-right: 0;
            align-self: center;
          }
          
          .navigation-controls {
            flex-wrap: wrap;
          }
          
          .slide-indicator {
            order: -1;
            width: 100%;
            text-align: center;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
