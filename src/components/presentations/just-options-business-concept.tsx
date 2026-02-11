import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, BookOpen, Users, Video, Mail, TrendingUp, Euro, Target, CheckCircle, AlertCircle, DollarSign, ChevronRight } from 'lucide-react';

const BusinessDevelopmentConcept = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState(12);

  // Farben aus dem Website-Design
  const colors = {
    primary: '#003366',
    secondary: '#7e97c3',
    accent: '#ffd700',
    light: '#ffffff',
    dark: '#333333',
    success: '#66cc99',
    textGray: '#555555',
    black: '#000000',
    bgGray: '#e2e2e3'
  };

  // Monatliche Umsatzentwicklung
  const revenueProjection = [
    { month: 'Jetzt', total: 300, book: 300, course: 0, community: 0, consulting: 0, affiliate: 0 },
    { month: 'Monat 1', total: 450, book: 350, course: 0, community: 0, consulting: 0, affiliate: 100 },
    { month: 'Monat 2', total: 750, book: 400, course: 0, community: 200, consulting: 0, affiliate: 150 },
    { month: 'Monat 3', total: 1200, book: 450, course: 300, community: 250, consulting: 0, affiliate: 200 },
    { month: 'Monat 4', total: 1800, book: 500, course: 600, community: 400, consulting: 100, affiliate: 200 },
    { month: 'Monat 5', total: 2400, book: 550, course: 900, community: 600, consulting: 150, affiliate: 200 },
    { month: 'Monat 6', total: 3000, book: 600, course: 1200, community: 800, consulting: 200, affiliate: 200 },
    { month: 'Monat 8', total: 3800, book: 650, course: 1500, community: 1000, consulting: 400, affiliate: 250 },
    { month: 'Monat 10', total: 4500, book: 700, course: 1800, community: 1200, consulting: 500, affiliate: 300 },
    { month: 'Monat 12', total: 5000, book: 750, course: 2000, community: 1400, consulting: 600, affiliate: 250 }
  ];

  // Einnahmequellen-Verteilung bei 5000€/Monat
  const revenueStreams = [
    { name: 'Online-Kurse', value: 2000, color: colors.accent },
    { name: 'Community/Mitgliedschaft', value: 1400, color: colors.primary },
    { name: 'Buchverkäufe', value: 750, color: colors.secondary },
    { name: '1:1 Consulting', value: 600, color: colors.success },
    { name: 'Affiliate & Partner', value: 250, color: colors.dark }
  ];

  // Implementierungs-Roadmap
  const roadmap = [
    {
      phase: 'Phase 1: Grundlagen (Monat 1-2)',
      tasks: [
        { task: 'Buch-SEO optimieren (Keywords, Beschreibung)', done: false, priority: 'hoch' },
        { task: 'Email-Liste aufbauen mit Lead-Magnet', done: false, priority: 'hoch' },
        { task: 'Affiliate-Links zu Brokern einbauen', done: false, priority: 'mittel' },
        { task: 'YouTube-Kanal starten', done: false, priority: 'hoch' }
      ]
    },
    {
      phase: 'Phase 2: Community (Monat 2-3)',
      tasks: [
        { task: 'Telegram/Discord-Gruppe gründen', done: false, priority: 'hoch' },
        { task: 'Basis-Mitgliedschaft einführen (19€/Monat)', done: false, priority: 'hoch' },
        { task: 'Wöchentliche Marktanalysen anbieten', done: false, priority: 'mittel' },
        { task: 'Newsletter mit Premium-Option', done: false, priority: 'mittel' }
      ]
    },
    {
      phase: 'Phase 3: Kurse (Monat 3-4)',
      tasks: [
        { task: 'Basis-Videokurs erstellen (97€)', done: false, priority: 'hoch' },
        { task: 'Premium-Kurs mit Live-Sessions (297€)', done: false, priority: 'mittel' },
        { task: 'Verkaufswebinar entwickeln', done: false, priority: 'hoch' },
        { task: 'Upsell-Funnel aufbauen', done: false, priority: 'mittel' }
      ]
    },
    {
      phase: 'Phase 4: Skalierung (Monat 5-12)',
      tasks: [
        { task: '1:1 Coaching anbieten (150€/Stunde)', done: false, priority: 'niedrig' },
        { task: 'Zweites Buch/Workbook veröffentlichen', done: false, priority: 'mittel' },
        { task: 'Partnerschaften mit Finanzportalen', done: false, priority: 'mittel' },
        { task: 'Trading-Tools/Calculator entwickeln', done: false, priority: 'niedrig' }
      ]
    }
  ];

  // Produktstrategie
  const productStrategy = [
    {
      product: 'Buch-Optimierung',
      current: '300€/Monat',
      target: '750€/Monat',
      actions: ['SEO-Optimierung', 'Bundle mit Workbook', 'Hörbuch-Version', 'Internationale Märkte']
    },
    {
      product: 'Online-Kurse',
      current: '0€/Monat',
      target: '2000€/Monat',
      actions: ['Basis-Kurs (97€)', 'Premium-Kurs (297€)', 'Mastermind (997€)', 'Corporate Training']
    },
    {
      product: 'Community',
      current: '0€/Monat',
      target: '1400€/Monat',
      actions: ['Basis (19€/Mo)', 'Premium (49€/Mo)', 'VIP (99€/Mo)', 'Lifetime-Angebote']
    },
    {
      product: 'Consulting',
      current: '0€/Monat',
      target: '600€/Monat',
      actions: ['1:1 Sessions', 'Gruppen-Coaching', 'Portfolio-Reviews', 'Strategy Calls']
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'hoch': return '#ef4444';
      case 'mittel': return colors.accent;
      case 'niedrig': return colors.success;
      default: return colors.textGray;
    }
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', minHeight: '100vh', backgroundColor: colors.bgGray }}>
      {/* Header */}
      <div style={{ backgroundColor: colors.primary, color: 'white', padding: '2rem 0', textAlign: 'center', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Just-Options.de Geschäftsmodell-Entwicklung
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Euro style={{ width: '24px', height: '24px', color: colors.accent }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>Ziel: 5.000€/Monat</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar style={{ width: '20px', height: '20px' }} />
            <span>Zeitrahmen: 12 Monate</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ backgroundColor: colors.light, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0' }}>
          {['overview', 'roadmap', 'products', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '1.2rem',
                backgroundColor: activeTab === tab ? colors.accent : 'transparent',
                color: activeTab === tab ? colors.black : colors.dark,
                border: 'none',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s',
                borderBottom: activeTab === tab ? `3px solid ${colors.primary}` : '3px solid transparent'
              }}
            >
              {tab === 'overview' && 'ÜBERSICHT'}
              {tab === 'roadmap' && 'ROADMAP'}
              {tab === 'products' && 'PRODUKTE'}
              {tab === 'analytics' && 'ANALYSEN'}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 3rem' }}>
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
            {/* Umsatzprojektion */}
            <div style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem' }}>
              <h2 style={{ color: colors.primary, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', fontSize: '1.5rem' }}>
                <TrendingUp style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Umsatzprojektion (12 Monate)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueProjection}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" style={{ fontSize: '0.85rem' }} />
                  <YAxis style={{ fontSize: '0.85rem' }} />
                  <Tooltip formatter={(value) => `${value}€`} contentStyle={{ backgroundColor: colors.light, border: `1px solid ${colors.primary}` }} />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke={colors.primary} strokeWidth={3} name="Gesamtumsatz" />
                  <Line type="monotone" dataKey="course" stroke={colors.accent} strokeWidth={2} name="Kurse" />
                  <Line type="monotone" dataKey="community" stroke={colors.secondary} strokeWidth={2} name="Community" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Einnahmequellen bei 5000€ */}
            <div style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem' }}>
              <h2 style={{ color: colors.primary, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', fontSize: '1.5rem' }}>
                Einnahmequellen-Verteilung (Ziel)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueStreams}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}€`}
                  >
                    {revenueStreams.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: colors.light, border: `1px solid ${colors.primary}` }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Stats */}
            <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              <div style={{ backgroundColor: colors.primary, color: 'white', borderRadius: '10px', padding: '2rem', textAlign: 'center', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '500' }}>AKTUELL</h3>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>300€</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>pro Monat</p>
              </div>
              <div style={{ backgroundColor: colors.accent, color: colors.black, borderRadius: '10px', padding: '2rem', textAlign: 'center', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '500' }}>ZIEL</h3>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>5.000€</p>
                <p style={{ fontSize: '0.9rem' }}>pro Monat</p>
              </div>
              <div style={{ backgroundColor: colors.success, color: 'white', borderRadius: '10px', padding: '2rem', textAlign: 'center', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '500' }}>WACHSTUM</h3>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>16,7x</p>
                <p style={{ fontSize: '0.9rem' }}>Multiplikator</p>
              </div>
              <div style={{ backgroundColor: colors.secondary, color: 'white', borderRadius: '10px', padding: '2rem', textAlign: 'center', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '500' }}>PRODUKTE</h3>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>5</p>
                <p style={{ fontSize: '0.9rem' }}>Einnahmequellen</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {roadmap.map((phase, phaseIndex) => (
              <div key={phaseIndex} style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem' }}>
                <h3 style={{ color: colors.primary, fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {phase.phase}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '1rem', 
                      backgroundColor: colors.bgGray, 
                      borderRadius: '5px',
                      borderLeft: `4px solid ${getPriorityColor(task.priority)}`
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {task.done ? (
                          <CheckCircle style={{ width: '20px', height: '20px', color: colors.success }} />
                        ) : (
                          <AlertCircle style={{ width: '20px', height: '20px', color: colors.textGray }} />
                        )}
                        <span style={{ fontWeight: '500' }}>{task.task}</span>
                      </div>
                      <span style={{ 
                        color: getPriorityColor(task.priority), 
                        fontWeight: 'bold', 
                        fontSize: '0.9rem',
                        textTransform: 'uppercase'
                      }}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'products' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {productStrategy.map((product, index) => (
              <div key={index} style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem' }}>
                <h3 style={{ color: colors.primary, fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {product.product}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div>
                    <p style={{ color: colors.textGray, fontSize: '0.9rem' }}>Aktuell</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444' }}>{product.current}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: colors.textGray, fontSize: '0.9rem' }}>Ziel</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: colors.success }}>{product.target}</p>
                  </div>
                </div>
                <div style={{ borderTop: `1px solid ${colors.bgGray}`, paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600', color: colors.dark, marginBottom: '0.5rem' }}>MASSNAHMEN:</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {product.actions.map((action, actionIndex) => (
                      <li key={actionIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', color: colors.textGray }}>
                        <ChevronRight style={{ width: '16px', height: '16px', color: colors.accent }} />
                        <span style={{ fontSize: '0.9rem' }}>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Conversion Funnel */}
            <div style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem' }}>
              <h2 style={{ color: colors.primary, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', fontSize: '1.5rem' }}>
                CONVERSION FUNNEL
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: colors.primary, color: 'white', padding: '1.5rem', borderRadius: '5px', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                  <span style={{ fontWeight: '600' }}>WEBSITE-BESUCHER</span>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', marginLeft: '2rem' }}>10.000/Mo</span>
                </div>
                <div style={{ width: '0', height: '0', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderTop: `40px solid ${colors.primary}` }} />
                
                <div style={{ backgroundColor: colors.secondary, color: 'white', padding: '1.5rem', borderRadius: '5px', width: '80%', maxWidth: '480px', textAlign: 'center' }}>
                  <span style={{ fontWeight: '600' }}>EMAIL-ABONNENTEN</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '2rem' }}>2.000 (20%)</span>
                </div>
                <div style={{ width: '0', height: '0', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderTop: `40px solid ${colors.secondary}` }} />
                
                <div style={{ backgroundColor: colors.accent, color: colors.black, padding: '1.5rem', borderRadius: '5px', width: '60%', maxWidth: '360px', textAlign: 'center' }}>
                  <span style={{ fontWeight: '600' }}>ZAHLENDE KUNDEN</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '2rem' }}>200 (10%)</span>
                </div>
                <div style={{ width: '0', height: '0', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderTop: `40px solid ${colors.accent}` }} />
                
                <div style={{ backgroundColor: colors.success, color: 'white', padding: '1.5rem', borderRadius: '5px', width: '40%', maxWidth: '240px', textAlign: 'center' }}>
                  <span style={{ fontWeight: '600' }}>PREMIUM-KUNDEN</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '2rem' }}>50 (25%)</span>
                </div>
              </div>
            </div>

            {/* KPIs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: colors.textGray, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Durchschnittlicher Warenkorbwert
                </h3>
                <p style={{ fontSize: '3rem', fontWeight: 'bold', color: colors.primary }}>125€</p>
                <p style={{ color: colors.textGray, marginTop: '0.5rem' }}>Ziel: 250€</p>
              </div>
              <div style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: colors.textGray, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Customer Lifetime Value
                </h3>
                <p style={{ fontSize: '3rem', fontWeight: 'bold', color: colors.accent }}>450€</p>
                <p style={{ color: colors.textGray, marginTop: '0.5rem' }}>Ziel: 1.200€</p>
              </div>
              <div style={{ backgroundColor: colors.light, borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: colors.textGray, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Wiederkehrende Einnahmen
                </h3>
                <p style={{ fontSize: '3rem', fontWeight: 'bold', color: colors.success }}>28%</p>
                <p style={{ color: colors.textGray, marginTop: '0.5rem' }}>Ziel: 60%</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div style={{ backgroundColor: colors.primary, color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Bereit für die Umsetzung?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Mit diesem strukturierten Plan erreichen Sie Ihr Ziel von 5.000€ monatlich innerhalb von 12 Monaten.
        </p>
        <button style={{
          backgroundColor: colors.accent,
          color: colors.black,
          border: `2px solid ${colors.accent}`,
          padding: '0.8rem 1.8rem',
          borderRadius: '5px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontSize: '1rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}>
          JETZT STARTEN
        </button>
      </div>
    </div>
  );
};

export default BusinessDevelopmentConcept;