import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const BitcoinCharts = () => {
  const [activeChart, setActiveChart] = useState(1);

  const navButtons = [];
  for (let i = 1; i <= 6; i++) {
    navButtons.push(
      <button 
        key={i} 
        className={`px-3 py-2 m-1 rounded ${activeChart === i ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => setActiveChart(i)}
      >
        {i === 6 ? "Q&A" : `Chapter ${i}`}
      </button>
    );
  }

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  // Chapter 1: What's Wrong with Money Today?
  const problemsWithMoney = [
    { name: 'Currency Devaluation', value: 90, description: 'Loss of purchasing power over time through inflation' },
    { name: 'Restricted Transfers', value: 85, description: 'Limitations on moving money across borders' },
    { name: 'Financial Centralization', value: 80, description: 'Vulnerability from single points of failure' },
    { name: 'Loss of Privacy', value: 95, description: 'Surveillance of all digital financial activity' },
    { name: 'Access Barriers', value: 75, description: '2 billion people lack bank accounts or formal ID' }
  ];

  // Chapter 2: What is Bitcoin?
  const bitcoinComponents = [
    { name: 'Decentralized Network', value: 100, description: 'No central authority or single point of failure' },
    { name: 'Proof-of-Work Mining', value: 90, description: 'Secures network through computational work' },
    { name: 'Blockchain Ledger', value: 95, description: 'Public, immutable record of all transactions' },
    { name: 'Fixed Supply (21M)', value: 100, description: 'Protection against arbitrary inflation' },
    { name: 'Digital Signatures', value: 85, description: 'Cryptographic ownership verification' },
    { name: 'Open Source Code', value: 80, description: 'Transparent, community-maintained software' }
  ];

  // Chapter 3: Bitcoin's Price and Volatility
  const priceFactors = [
    { name: 'Long-Term', factors: [
      { name: 'Fixed Supply', value: 40, description: 'Limited to 21 million coins' },
      { name: 'Growing Adoption', value: 35, description: 'Increasing user base worldwide' },
      { name: 'Store of Value Use', value: 25, description: 'Protection against inflation' }
    ]},
    { name: 'Medium-Term', factors: [
      { name: 'Mining Costs', value: 30, description: 'Electricity and equipment expenses' },
      { name: 'Institutional Buying', value: 35, description: 'Corporate and fund investments' },
      { name: 'Halving Events', value: 35, description: 'Reward reductions every 4 years' }
    ]},
    { name: 'Short-Term', factors: [
      { name: 'Speculation', value: 45, description: 'Trading and market sentiment' },
      { name: 'News Events', value: 30, description: 'Media coverage and announcements' },
      { name: 'Market Manipulation', value: 25, description: 'Whale activity and exchange actions' }
    ]}
  ];

  // Bitcoin price over time (logarithmic)
  const bitcoinPriceHistory = [
    { year: 2010, price: 0.1 },
    { year: 2011, price: 10 },
    { year: 2012, price: 13 },
    { year: 2013, price: 100 },
    { year: 2014, price: 300 },
    { year: 2015, price: 250 },
    { year: 2016, price: 450 },
    { year: 2017, price: 20000 },
    { year: 2018, price: 3500 },
    { year: 2019, price: 11000 }
  ];

  // Chapter 4: Why Bitcoin Matters for Human Rights
  const humanRightsApplications = [
    { name: 'Banking the Unbanked', value: 85, description: 'Providing financial services to 2B+ people without bank accounts' },
    { name: 'Hyperinflation Protection', value: 95, description: 'Hedge against currency devaluation in countries like Venezuela (400,000%)' },
    { name: 'Refugee Asset Transport', value: 80, description: 'Ability to carry wealth across borders without confiscation' },
    { name: 'Censorship Resistance', value: 90, description: 'Transactions cannot be blocked by authoritarian regimes' },
    { name: 'Financial Privacy', value: 75, description: 'Protection against surveillance capitalism and state monitoring' }
  ];

  // Chapter 5: A Tale of Two Futures
  const twoFutures = [
    { 
      name: 'Dystopian Future', 
      aspects: [
        { aspect: 'Financial Control', score: 90, description: 'Governments and corporations control money' },
        { aspect: 'Privacy Erosion', score: 95, description: 'Complete surveillance of all transactions' },
        { aspect: 'Wealth Inequality', score: 85, description: 'Cantillon Effect benefits elites' },
        { aspect: 'Political Oppression', score: 80, description: 'Dissent suppressed via financial censorship' },
        { aspect: 'Prolonged Wars', score: 75, description: 'Easy money printing finances extended conflicts' }
      ]
    },
    { 
      name: 'Bitcoin Future', 
      aspects: [
        { aspect: 'Financial Control', score: 15, description: 'Individuals control their own money' },
        { aspect: 'Privacy Erosion', score: 20, description: 'Private transactions remain possible' },
        { aspect: 'Wealth Inequality', score: 30, description: 'More equitable financial opportunity' },
        { aspect: 'Political Oppression', score: 25, description: 'Financial censorship more difficult' },
        { aspect: 'Prolonged Wars', score: 35, description: 'Wars harder to finance without money printing' }
      ]
    }
  ];

  // Bitcoin adoption phases from Chapter 5
  const adoptionPhases = [
    { 
      name: 'Store of Value', 
      description: 'Protection against currency devaluation', 
      progress: 65,
      examples: [
        'Hedge against inflation',
        'Long-term savings',
        'Institutional investment',
        'Personal wealth preservation'
      ]
    },
    { 
      name: 'Medium of Exchange', 
      description: 'Used for everyday transactions', 
      progress: 30,
      examples: [
        'Merchant acceptance',
        'Lightning Network payments',
        'Cross-border remittances',
        'Online marketplace adoption'
      ]
    },
    { 
      name: 'Unit of Account', 
      description: 'Prices quoted directly in Bitcoin', 
      progress: 5,
      examples: [
        'Bitcoin-denominated salaries',
        'Bitcoin-denominated prices',
        'Bitcoin as global reserve',
        'Bitcoin financial system'
      ]
    }
  ];

  // Chapter 6: Bitcoin Q&A
  const bitcoinQA = [
    {
      category: 'Technology',
      questions: [
        { question: 'Who controls Bitcoin?', answer: 'No central authority - distributed network of nodes, miners, and developers' },
        { question: 'How reliable is Bitcoin?', answer: '99.98% uptime since 2009 launch' },
        { question: 'Is Bitcoin private?', answer: 'Pseudonymous by default, can be private with proper techniques' },
        { question: 'Will quantum computers break Bitcoin?', answer: 'Extremely unlikely, quantum-safe cryptography can be implemented' },
        { question: 'How does Bitcoin scale?', answer: 'Lightning Network enables millions of transactions per second' }
      ]
    },
    {
      category: 'Economics',
      questions: [
        { question: 'What backs Bitcoin\'s value?', answer: 'Scarcity, utility, network effects, energy cost, and market demand' },
        { question: 'Is Bitcoin too volatile?', answer: 'Volatility decreasing over time, natural for emerging money' },
        { question: 'Is Bitcoin a bubble?', answer: 'Has experienced multiple boom-bust cycles but consistently recovers' },
        { question: 'Is there wealth inequality?', answer: 'Early adopters gained more, but more accessible than traditional assets' },
        { question: 'Can 21M bitcoins serve everyone?', answer: 'Each bitcoin divisible to 100M units (satoshis), providing ample supply' }
      ]
    },
    {
      category: 'Environment',
      questions: [
        { question: 'Is Bitcoin bad for environment?', answer: '~75% of mining uses renewable energy sources' },
        { question: 'Does mining waste energy?', answer: 'Utilizes excess energy and incentivizes renewable development' },
        { question: 'How much energy does it use?', answer: 'Less than traditional banking and gold mining' }
      ]
    },
    {
      category: 'Regulation',
      questions: [
        { question: 'Can governments ban Bitcoin?', answer: 'Cannot be effectively banned due to decentralization' },
        { question: 'Is Bitcoin legal?', answer: 'Legal in most countries with varying regulatory approaches' },
        { question: 'Do criminals use Bitcoin?', answer: 'Any technology can be misused, but traditional banking handles far more criminal funds' }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Key Insights from "The Little Bitcoin Book"</h1>
      
      <div className="mb-4 flex flex-wrap justify-center">
        {navButtons}
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-4">
        {activeChart === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Chapter 1: What's Wrong with Money Today?</h2>
            <p className="mb-4 text-center text-gray-600">Major problems with the current monetary system</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={problemsWithMoney}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value, name, props) => [value, props.payload.description]} />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" name="Severity Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm">
                Chapter 1 examines how today's money is broken in multiple ways. Currency devaluation erodes savings (like the Philippine peso losing 80% of its value), governments restrict transfers (like China limiting currency conversion to $50,000/year), centralized systems create vulnerability, privacy is lost through surveillance capitalism, and 2 billion people remain unbanked.
              </p>
            </div>
          </div>
        )}
        
        {activeChart === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Chapter 2: What is Bitcoin?</h2>
            <p className="mb-4 text-center text-gray-600">Essential components that make Bitcoin revolutionary</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={730} height={300} data={bitcoinComponents}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Strength" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip formatter={(value, name, props) => [value, props.payload.description]} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm">
                Chapter 2 explains Bitcoin as the world's first form of decentralized digital scarcity. Created by Satoshi Nakamoto after the 2008 financial crisis, Bitcoin combines proof-of-work mining, a blockchain ledger, a fixed supply of 21 million coins, and digital signatures to create a system without central control. Bitcoin solves the fundamental issue of digital scarcity that no previous system could achieve.
              </p>
            </div>
          </div>
        )}
        
        {activeChart === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Chapter 3: Bitcoin's Price and Volatility</h2>
            <p className="mb-4 text-center text-gray-600">Factors influencing Bitcoin's price across different timeframes</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-80">
              {priceFactors.map((timeframe, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded shadow">
                  <h3 className="font-bold text-center mb-2">{timeframe.name}</h3>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={timeframe.factors}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {timeframe.factors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name, props) => [value, props.payload.description]} />
                  </PieChart>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm">
                Chapter 3 examines Bitcoin's price volatility at different time scales. Long-term, the price is driven by fixed supply and growing adoption. Medium-term factors include mining costs, institutional buying, and halving events (which reduce the mining reward by half every four years). Short-term volatility is driven by speculation, news events, and market manipulation, especially since Bitcoin markets operate 24/7 with global access.
              </p>
            </div>
          </div>
        )}
        
        {activeChart === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Chapter 4: Why Bitcoin Matters for Human Rights</h2>
            <p className="mb-4 text-center text-gray-600">Bitcoin as a tool for human rights worldwide</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={humanRightsApplications}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value, name, props) => [value, props.payload.description]} />
                  <Legend />
                  <Bar dataKey="value" fill="#ef4444" name="Impact Potential" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm">
                Chapter 4 explores how Bitcoin empowers people living under oppression and financial exclusion. In Venezuela, citizens use Bitcoin to escape 400,000% hyperinflation. In Afghanistan, women prohibited from having bank accounts can receive payment in Bitcoin. For refugees, Bitcoin allows carrying wealth across borders without confiscation. The Lightning Network enhances privacy, providing protection against government surveillance, while enabling instantaneous, low-cost payments.
              </p>
            </div>
          </div>
        )}
        
        {activeChart === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Chapter 5: A Tale of Two Futures</h2>
            <p className="mb-4 text-center text-gray-600">Contrasting potential futures with and without Bitcoin</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[].concat(...twoFutures.map(future => 
                    future.aspects.map(aspect => ({
                      aspect: aspect.aspect,
                      [future.name]: aspect.score
                    }))
                  ))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="aspect" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Dystopian Future" fill="#ef4444" />
                  <Bar dataKey="Bitcoin Future" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 p-4 bg-gray-100 rounded">
              <p className="text-sm">
                Chapter 5 presents two possible futures. In the dystopian scenario, corporations and governments control money completely, enabling surveillance, censorship, and oppression. In the Bitcoin-based future, individuals control their own money, preserving privacy, freedom, and opportunity. The chapter describes how Bitcoin adoption will likely evolve through three phases: first as a Store of Value (already happening), then as a Medium of Exchange, and finally as a Unit of Account where goods and services are priced directly in Bitcoin.
              </p>
            </div>
          </div>
        )}
        
        {activeChart === 6 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Bitcoin Q&A: Addressing Common Questions</h2>
            <p className="mb-4 text-center text-gray-600">Responses to frequent questions and criticisms about Bitcoin</p>
            <div className="h-80 overflow-y-auto">
              {bitcoinQA.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h3 className="font-bold text-lg text-center mb-3">{category.category} Questions</h3>
                  <div className="space-y-3">
                    {category.questions.map((qa, qaIndex) => (
                      <div key={qaIndex} className="bg-gray-50 p-3 rounded shadow">
                        <p className="font-semibold text-blue-700">{qa.question}</p>
                        <p className="text-sm">{qa.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm">
                The Q&A section addresses common questions and criticisms about Bitcoin. It confirms Bitcoin is not controlled by any single entity but rather by a network of validators, miners, and developers. It explains that mining primarily uses renewable energy, Bitcoin cannot be effectively banned by governments, and its privacy features are continually improving. It also addresses concerns about volatility, scalability, and security against potential threats like quantum computing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BitcoinCharts;