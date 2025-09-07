import React, { useState } from 'react';

const MDWImplementationGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [freedomNumber, setFreedomNumber] = useState('');
  const [selectedBusinessIdea, setSelectedBusinessIdea] = useState('');
  const [completedSteps, setCompletedSteps] = useState({
    dollarsChallenge: false,
    askSomeoneForBusinessIdea: false,
    defineYourTarget: false,
    solveYourOwnProblems: false,
    checkBestsellers: false,
    checkMarketplaces: false,
    searchEngineQueries: false,
    oneMinuteBusinessModel: false,
    dreamTenList: false,
    getThreeCustomers: false,
    defineUniqueAngle: false,
    choosePlatform: false,
    createLeadMagnet: false,
    setupAutoresponder: false,
    createMarketingList: false,
    doubleDownMarketing: false,
    askCustomerForFeedback: false,
    setupYearlyGoals: false,
    colorCalendar: false,
    findAccountabilityBuddy: false
  });
  
  const [dreamTen, setDreamTen] = useState([
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
    { name: '', company: '', phone: '', email: '', contacted: false, followUpDate: '', notes: '' },
  ]);
  
  const [businessIdeas, setBusinessIdeas] = useState({
    solveOwnProblems: ['', '', ''],
    bestsellers: ['', ''],
    marketplaces: [''],
    searchQueries: ['', ''],
    fromFriends: ['']
  });
  
  const [oneMinuteModel, setOneMinuteModel] = useState({
    price: '',
    cost: '',
    profit: '',
    targetProfit: 1000000,
    salesNeeded: 0
  });
  
  const [uniqueAngle, setUniqueAngle] = useState({
    whoAreYou: '',
    whyListen: '',
    passionate: '',
    doForPeople: ''
  });
  
  const [contentCircle, setContentCircle] = useState({
    coreCircle: '',
    mediumCircle: '',
    largeCircle: ''
  });
  
  const [marketingExperiments, setMarketingExperiments] = useState([
    { strategy: '', expectedSales: '', actualSales: '' },
    { strategy: '', expectedSales: '', actualSales: '' },
    { strategy: '', expectedSales: '', actualSales: '' },
    { strategy: '', expectedSales: '', actualSales: '' },
    { strategy: '', expectedSales: '', actualSales: '' }
  ]);
  
  const [yearlyGoals, setYearlyGoals] = useState({
    work: [''],
    health: [''],
    personal: [''],
    travel: ['']
  });
  
  const toggleComplete = (step) => {
    setCompletedSteps({
      ...completedSteps,
      [step]: !completedSteps[step]
    });
  };
  
  const updateDreamTen = (index, field, value) => {
    const updatedDreamTen = [...dreamTen];
    updatedDreamTen[index] = {
      ...updatedDreamTen[index],
      [field]: value
    };
    setDreamTen(updatedDreamTen);
  };
  
  const updateBusinessIdeas = (category, index, value) => {
    const updatedIdeas = {...businessIdeas};
    updatedIdeas[category][index] = value;
    setBusinessIdeas(updatedIdeas);
  };
  
  const updateMarketingExperiment = (index, field, value) => {
    const updatedExperiments = [...marketingExperiments];
    updatedExperiments[index] = {
      ...updatedExperiments[index],
      [field]: value
    };
    setMarketingExperiments(updatedExperiments);
  };
  
  const updateOneMinuteModel = () => {
    const profit = oneMinuteModel.price - oneMinuteModel.cost;
    const salesNeeded = oneMinuteModel.targetProfit / profit;
    
    setOneMinuteModel({
      ...oneMinuteModel,
      profit,
      salesNeeded: isNaN(salesNeeded) ? 0 : Math.ceil(salesNeeded)
    });
  };
  
  const updateYearlyGoals = (category, index, value) => {
    const updatedGoals = {...yearlyGoals};
    if (index >= updatedGoals[category].length) {
      updatedGoals[category].push(value);
    } else {
      updatedGoals[category][index] = value;
    }
    setYearlyGoals(updatedGoals);
  };
  
  const addYearlyGoal = (category) => {
    const updatedGoals = {...yearlyGoals};
    updatedGoals[category].push('');
    setYearlyGoals(updatedGoals);
  };
  
  const calculateProgress = () => {
    const totalSteps = Object.keys(completedSteps).length;
    const completedCount = Object.values(completedSteps).filter(Boolean).length;
    return Math.floor((completedCount / totalSteps) * 100);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Million Dollar Weekend Implementation Guide
      </h1>
      
      <div className="mb-8 bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Progress: {calculateProgress()}%</span>
          <span className="font-semibold">{Object.values(completedSteps).filter(Boolean).length}/{Object.keys(completedSteps).length} Steps</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div 
            className="bg-blue-600 h-4 rounded-full" 
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-t-lg mr-1 ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('phase1')}
          className={`px-4 py-2 rounded-t-lg mr-1 ${activeTab === 'phase1' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          1. Start It
        </button>
        <button 
          onClick={() => setActiveTab('phase2')}
          className={`px-4 py-2 rounded-t-lg mr-1 ${activeTab === 'phase2' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          2. Build It
        </button>
        <button 
          onClick={() => setActiveTab('phase3')}
          className={`px-4 py-2 rounded-t-lg mr-1 ${activeTab === 'phase3' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          3. Grow It
        </button>
        <button 
          onClick={() => setActiveTab('phase4')}
          className={`px-4 py-2 rounded-t-lg mr-1 ${activeTab === 'phase4' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          4. Systems & Routines
        </button>
      </div>
      
      <div className="p-4 border rounded-lg">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">The Million Dollar Weekend Process</h2>
            <p className="mb-4">
              This implementation guide will help you apply Noah Kagan's Million Dollar Weekend framework to start, 
              validate, and grow your business. The process is divided into four key phases:
            </p>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Phase 1: START IT (Day 1-3)</h3>
              <p className="mb-2">Overcome mental barriers to starting and build your "Creator's Courage."</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Adopt the "NOW, Not How" mindset</li>
                <li>Calculate your Freedom Number</li>
                <li>Develop your "Ask Muscle"</li>
                <li>Embrace rejection as positive</li>
              </ul>
            </div>
            
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Phase 2: BUILD IT (Day 4-5, The Weekend)</h3>
              <p className="mb-2">Execute the Million Dollar Weekend process to find, test, and validate your business idea.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Generate profitable business ideas</li>
                <li>Use the One-Minute Business Model to evaluate opportunities</li>
                <li>Validate your business by getting real customers in 48 hours</li>
              </ul>
            </div>
            
            <div className="mb-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">Phase 3: GROW IT (Week 2+)</h3>
              <p className="mb-2">Build systems to scale your validated business idea.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Build an audience on social media</li>
                <li>Create an email list to convert audience to customers</li>
                <li>Implement Experiment-Based Marketing</li>
              </ul>
            </div>
            
            <div className="mb-6 p-4 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-orange-800">Phase 4: SYSTEMS & ROUTINES (Ongoing)</h3>
              <p className="mb-2">Design your life and business for long-term success.</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Define your Dream Year</li>
                <li>Create goal-oriented routines</li>
                <li>Build a supportive network</li>
                <li>Use the Law of 100 to develop consistency</li>
              </ul>
            </div>
            
            <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-300">
              <h3 className="text-xl font-semibold mb-2">Timeline Overview</h3>
              <ul className="list-none pl-6 mb-4">
                <li><strong>Days 1-3:</strong> Complete Phase 1 exercises to build Creator's Courage</li>
                <li><strong>Days 4-5 (The Weekend):</strong> Execute Phase 2 to validate your business idea</li>
                <li><strong>Week 2:</strong> Begin Phase 3 to create growth systems</li>
                <li><strong>Ongoing:</strong> Implement Phase 4 systems and routines</li>
              </ul>
            </div>
            
            <p className="font-semibold text-lg">
              Ready to begin your Million Dollar Weekend journey? Let's get started!
            </p>
          </div>
        )}
        
        {activeTab === 'phase1' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Phase 1: START IT</h2>
            <p className="mb-4">
              In this phase, you'll overcome the mental barriers to starting and develop your "Creator's Courage."
              Complete these steps over the next 3 days before your main weekend work.
            </p>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 1: Calculate Your Freedom Number</h3>
              <p className="mb-4">
                Your Freedom Number is the monthly amount you need to feel financially free. This will be your initial target.
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Your Freedom Number Calculator</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 font-medium">Housing</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="$" id="housing" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Food & Travel</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="$" id="foodTravel" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Savings & Investment</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="$" id="savings" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Other Expenses</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="$" id="other" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded mr-4"
                    onClick={() => {
                      const housing = parseFloat(document.getElementById('housing').value) || 0;
                      const foodTravel = parseFloat(document.getElementById('foodTravel').value) || 0;
                      const savings = parseFloat(document.getElementById('savings').value) || 0;
                      const other = parseFloat(document.getElementById('other').value) || 0;
                      const total = housing + foodTravel + savings + other;
                      setFreedomNumber(total.toString());
                    }}
                  >
                    Calculate
                  </button>
                  <div className="text-xl font-bold">
                    {freedomNumber && `Your Freedom Number: $${freedomNumber}`}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mt-2">
                <input 
                  type="checkbox" 
                  id="freedom-number-complete" 
                  className="h-5 w-5 text-blue-600"
                  checked={Boolean(freedomNumber)}
                  onChange={() => {}}
                />
                <label htmlFor="freedom-number-complete" className="ml-2">
                  Freedom Number Calculated
                </label>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 2: Complete The Dollar Challenge</h3>
              <p className="mb-4">
                Ask someone for a $1 investment in you and your future business. This symbolic exercise helps you experience the power of starting and asking.
              </p>
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Dollar Challenge Script</h4>
                <div className="bg-gray-100 p-3 rounded mb-4">
                  <p className="italic">
                    "Hey [first name], I'm reading this book Million Dollar Weekend and they told me I need to get $1 from someone. You're the first person I thought of, and it would mean a lot to have your support. Can you send me $1 right now? [your name]"
                  </p>
                </div>
                <p className="text-sm">
                  Send this to a friend, family member, or colleague. Document who you asked and the result below.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 font-medium">Who did you ask?</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Result</label>
                    <select className="w-full p-2 border rounded">
                      <option value="">Select result</option>
                      <option value="yes">They invested $1</option>
                      <option value="no">They declined</option>
                      <option value="pending">Still waiting for response</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="dollar-challenge-complete" 
                  className="h-5 w-5 text-blue-600"
                  checked={completedSteps.dollarsChallenge}
                  onChange={() => toggleComplete('dollarsChallenge')}
                />
                <label htmlFor="dollar-challenge-complete" className="ml-2">
                  Dollar Challenge Completed
                </label>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 3: NOW, Not How Challenge</h3>
              <p className="mb-4">
                Ask someone you respect for a business idea. This exercise helps you build the habit of taking immediate action instead of overthinking.
              </p>
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">NOW, Not How Script</h4>
                <div className="bg-gray-100 p-3 rounded mb-4">
                  <p className="italic">
                    "Hey [first name], I'm trying to come up with some business ideas right now. You know me well, so I was wondering what kind of business you think I'd be good at? [your name]"
                  </p>
                </div>
                <p className="text-sm">
                  Send this message as a text (preferred) or email to someone you respect. Document who you asked and the idea they gave you.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 font-medium">Who did you ask?</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Business idea they suggested</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="Idea"
                      value={businessIdeas.fromFriends[0]}
                      onChange={(e) => updateBusinessIdeas('fromFriends', 0, e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="now-not-how-complete" 
                  className="h-5 w-5 text-blue-600"
                  checked={completedSteps.askSomeoneForBusinessIdea}
                  onChange={() => toggleComplete('askSomeoneForBusinessIdea')}
                />
                <label htmlFor="now-not-how-complete" className="ml-2">
                  NOW, Not How Challenge Completed
                </label>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 4: The Coffee Challenge</h3>
              <p className="mb-4">
                Go to any coffee shop and ask for 10% off your order. This builds your "Ask Muscle" and helps you overcome the fear of rejection.
              </p>
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Coffee Challenge Script</h4>
                <div className="bg-gray-100 p-3 rounded mb-4">
                  <p className="italic">
                    "Hi, how's it going? I'd like a [your drink]. Can I get 10% off? [Make the statement clear, with a smile, and don't say anything afterwards.]"
                  </p>
                  <p className="italic mt-2">
                    If they ask why: "I'm taking a business course and this is one of the assignments. :)"
                  </p>
                </div>
                <p className="text-sm mb-3">
                  Visit a coffee shop or any store, make a purchase, and ask for 10% off. Document your experience.
                </p>
                <div>
                  <label className="block mb-1 font-medium">How did it feel? What happened?</label>
                  <textarea className="w-full p-2 border rounded h-20" placeholder="Describe your experience"></textarea>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="coffee-challenge-complete" 
                  className="h-5 w-5 text-blue-600"
                  checked={completedSteps.defineYourTarget}
                  onChange={() => toggleComplete('defineYourTarget')}
                />
                <label htmlFor="coffee-challenge-complete" className="ml-2">
                  Coffee Challenge Completed
                </label>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={() => setActiveTab('overview')}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back to Overview
              </button>
              <button 
                onClick={() => setActiveTab('phase2')}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next: Build It
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'phase2' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-800">Phase 2: BUILD IT (The Weekend)</h2>
            <p className="mb-4">
              Now comes the core of your Million Dollar Weekend: a 48-hour sprint to find, validate, and launch your business idea. 
              This is where you'll put your "Creator's Courage" into practice.
            </p>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 1: Generate Business Ideas</h3>
              <p className="mb-4">
                Using the Customer First Approach, generate at least 10 potential business ideas from the following sources:
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">A. Solve Your Own Problems</h4>
                <p className="text-sm mb-3">
                  What problems in your life would you pay to have solved? List three ideas:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  {[0, 1, 2].map((index) => (
                    <input 
                      key={`own-problem-${index}`}
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder={`Idea ${index + 1}`}
                      value={businessIdeas.solveOwnProblems[index]}
                      onChange={(e) => updateBusinessIdeas('solveOwnProblems', index, e.target.value)}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="solve-problems-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.solveYourOwnProblems}
                    onChange={() => toggleComplete('solveYourOwnProblems')}
                  />
                  <label htmlFor="solve-problems-complete" className="ml-2">
                    Completed
                  </label>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">B. Bestsellers Are Your Best Friends</h4>
                <p className="text-sm mb-3">
                  What products are already selling well that you could accessorize or provide a service for?
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  {[0, 1].map((index) => (
                    <input 
                      key={`bestseller-${index}`}
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder={`Idea ${index + 1}`}
                      value={businessIdeas.bestsellers[index]}
                      onChange={(e) => updateBusinessIdeas('bestsellers', index, e.target.value)}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="bestsellers-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.checkBestsellers}
                    onChange={() => toggleComplete('checkBestsellers')}
                  />
                  <label htmlFor="bestsellers-complete" className="ml-2">
                    Completed
                  </label>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">C. Marketplaces</h4>
                <p className="text-sm mb-3">
                  Visit marketplaces like Etsy, Facebook Marketplace, or Craigslist to find what people are actively looking to buy.
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="Idea based on marketplace research"
                    value={businessIdeas.marketplaces[0]}
                    onChange={(e) => updateBusinessIdeas('marketplaces', 0, e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="marketplaces-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.checkMarketplaces}
                    onChange={() => toggleComplete('checkMarketplaces')}
                  />
                  <label htmlFor="marketplaces-complete" className="ml-2">
                    Completed
                  </label>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">D. Search Engine Queries</h4>
                <p className="text-sm mb-3">
                  Use search engines and Reddit forums to find what problems people are actively trying to solve.
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  {[0, 1].map((index) => (
                    <input 
                      key={`search-query-${index}`}
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder={`Idea ${index + 1}`}
                      value={businessIdeas.searchQueries[index]}
                      onChange={(e) => updateBusinessIdeas('searchQueries', index, e.target.value)}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="search-queries-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.searchEngineQueries}
                    onChange={() => toggleComplete('searchEngineQueries')}
                  />
                  <label htmlFor="search-queries-complete" className="ml-2">
                    Completed
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Select Your Top Business Idea</h4>
                <p className="text-sm mb-3">
                  From all your ideas (including the one from the NOW, Not How challenge), select the one you're most excited about:
                </p>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded mb-3" 
                  placeholder="Your selected business idea"
                  value={selectedBusinessIdea}
                  onChange={(e) => setSelectedBusinessIdea(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 2: One-Minute Business Model</h3>
              <p className="mb-4">
                Determine if your idea has million-dollar potential by creating a simple One-Minute Business Model.
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">A. Market Research</h4>
                <p className="text-sm mb-3">
                  Check if your market is growing using Google Trends and Facebook Ads to determine potential customer size.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Google Trends Result</label>
                    <select className="w-full p-2 border rounded">
                      <option value="">Select trend</option>
                      <option value="growing">Growing</option>
                      <option value="flat">Flat</option>
                      <option value="declining">Declining</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Market Size (potential customers)</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="Estimated number of customers" />
                  </div>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">B. Calculate Your Profit</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 font-medium">Price ($)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      placeholder="$ per unit/service"
                      value={oneMinuteModel.price}
                      onChange={(e) => {
                        setOneMinuteModel({
                          ...oneMinuteModel,
                          price: parseFloat(e.target.value) || ''
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Cost ($)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      placeholder="$ cost per unit/service"
                      value={oneMinuteModel.cost}
                      onChange={(e) => {
                        setOneMinuteModel({
                          ...oneMinuteModel,
                          cost: parseFloat(e.target.value) || ''
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Target Profit ($)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      placeholder="e.g., 1000000"
                      value={oneMinuteModel.targetProfit}
                      onChange={(e) => {
                        setOneMinuteModel({
                          ...oneMinuteModel,
                          targetProfit: parseFloat(e.target.value) || 1000000
                        });
                      }}
                    />
                  </div>
                  <div className="flex items-end">
                    <button 
                      className="px-4 py-2 bg-green-600 text-white rounded mb-1"
                      onClick={updateOneMinuteModel}
                    >
                      Calculate
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-3 rounded">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium">Profit per unit/service</label>
                      <div className="p-2 bg-white rounded border font-bold">
                        ${oneMinuteModel.profit || '0'}
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Sales needed for target profit</label>
                      <div className="p-2 bg-white rounded border font-bold">
                        {oneMinuteModel.salesNeeded.toLocaleString()} units/services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="business-model-complete" 
                  className="h-5 w-5 text-blue-600"
                  checked={completedSteps.oneMinuteBusinessModel}
                  onChange={() => toggleComplete('oneMinuteBusinessModel')}
                />
                <label htmlFor="business-model-complete" className="ml-2">
                  One-Minute Business Model Completed
                </label>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 3: The 48-Hour Money Challenge</h3>
              <p className="mb-4">
                Validate your business by getting at least three paying customers within 48 hours. Follow these steps:
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">A. Create Your Dream Ten List</h4>
                <p className="text-sm mb-3">
                  List 10 potential customers in your zone of influence who might be interested in your offering:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dreamTen.map((contact, index) => (
                        <tr key={`dream-ten-${index}`}>
                          <td className="p-2">{index + 1}</td>
                          <td className="p-2">
                            <input 
                              type="text" 
                              className="w-full p-1 border rounded text-sm" 
                              placeholder="Name"
                              value={contact.name}
                              onChange={(e) => updateDreamTen(index, 'name', e.target.value)}
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text" 
                              className="w-full p-1 border rounded text-sm" 
                              placeholder="Company"
                              value={contact.company}
                              onChange={(e) => updateDreamTen(index, 'company', e.target.value)}
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text" 
                              className="w-full p-1 border rounded text-sm" 
                              placeholder="Email/Phone"
                              value={contact.email}
                              onChange={(e) => updateDreamTen(index, 'email', e.target.value)}
                            />
                          </td>
                          <td className="p-2">
                            <select 
                              className="w-full p-1 border rounded text-sm"
                              value={contact.contacted ? "contacted" : ""}
                              onChange={(e) => updateDreamTen(index, 'contacted', e.target.value === "contacted")}
                            >
                              <option value="">Not contacted</option>
                              <option value="contacted">Contacted</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center mt-3">
                  <input 
                    type="checkbox" 
                    id="dream-ten-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.dreamTenList}
                    onChange={() => toggleComplete('dreamTenList')}
                  />
                  <label htmlFor="dream-ten-complete" className="ml-2">
                    Dream Ten List Completed
                  </label>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">B. Validation Scripts</h4>
                <p className="text-sm mb-3">
                  Use these templates to reach out to your potential customers:
                </p>
                <div className="mb-3">
                  <h5 className="font-medium mb-1">Direct Message Script</h5>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="italic">
                      "Hey [name]! I just wanted to let you know that I'm starting [description of your business]. 
                      I remember you really liked [relevant topic]. Awesome! I'm working on a new project with [product/service]. 
                      Think you'll love it. You down to be my first customer, only $[price]?"
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <h5 className="font-medium mb-1">Email Script</h5>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="italic">
                      "Subject: Quick question about [topic]<br /><br />
                      Hey [name],<br /><br />
                      Hope things have been amazing with you.<br /><br />
                      I'm working on a new [product/service] that helps people [benefit].<br /><br />
                      For $[price], I can [specific offer]. Sound good?<br /><br />
                      [Your name]"
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Rejection Follow-up Questions</h5>
                  <div className="bg-gray-100 p-3 rounded">
                    <ol className="list-decimal pl-5">
                      <li className="italic">"Why not?"</li>
                      <li className="italic">"Who is one person you know who would really like this?"</li>
                      <li className="italic">"What would make this a no-brainer for you?"</li>
                      <li className="italic">"What would you pay for that?"</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">C. Track Your First Three Customers</h4>
                <p className="text-sm mb-3">
                  Your goal is to find three paying customers in 48 hours. Track your progress:
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-3 border rounded">
                    <h5 className="font-medium mb-2">Customer #1</h5>
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Name" />
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Amount paid" />
                    <select className="w-full p-2 border rounded">
                      <option value="">Status</option>
                      <option value="contacted">Contacted</option>
                      <option value="interested">Interested</option>
                      <option value="paid">Paid</option>
                      <option value="declined">Declined</option>
                    </select>
                  </div>
                  <div className="p-3 border rounded">
                    <h5 className="font-medium mb-2">Customer #2</h5>
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Name" />
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Amount paid" />
                    <select className="w-full p-2 border rounded">
                      <option value="">Status</option>
                      <option value="contacted">Contacted</option>
                      <option value="interested">Interested</option>
                      <option value="paid">Paid</option>
                      <option value="declined">Declined</option>
                    </select>
                  </div>
                  <div className="p-3 border rounded">
                    <h5 className="font-medium mb-2">Customer #3</h5>
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Name" />
                    <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Amount paid" />
                    <select className="w-full p-2 border rounded">
                      <option value="">Status</option>
                      <option value="contacted">Contacted</option>
                      <option value="interested">Interested</option>
                      <option value="paid">Paid</option>
                      <option value="declined">Declined</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="three-customers-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.getThreeCustomers}
                    onChange={() => toggleComplete('getThreeCustomers')}
                  />
                  <label htmlFor="three-customers-complete" className="ml-2">
                    Got Three Paying Customers
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={() => setActiveTab('phase1')}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back to Start It
              </button>
              <button 
                onClick={() => setActiveTab('phase3')}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Next: Grow It
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'phase3' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Phase 3: GROW IT</h2>
            <p className="mb-4">
              Now that you've validated your business idea, it's time to build systems to grow your audience 
              and turn them into paying customers.
            </p>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 1: Build Your Audience</h3>
              <p className="mb-4">
                Create content that attracts your ideal customers and builds your audience.
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">A. Define Your Unique Angle</h4>
                <p className="text-sm mb-3">
                  Define what makes you unique and how you'll help your audience:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Who are you?</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="I am..."
                      value={uniqueAngle.whoAreYou}
                      onChange={(e) => setUniqueAngle({...uniqueAngle, whoAreYou: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Why should people listen to you?</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="Your credentials/experience"
                      value={uniqueAngle.whyListen}
                      onChange={(e) => setUniqueAngle({...uniqueAngle, whyListen: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">What are you passionate about?</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="Your passion related to your business"
                      value={uniqueAngle.passionate}
                      onChange={(e) => setUniqueAngle({...uniqueAngle, passionate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">What will you do for people?</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="How you'll help your audience"
                      value={uniqueAngle.doForPeople}
                      onChange={(e) => setUniqueAngle({...uniqueAngle, doForPeople: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="unique-angle-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.defineUniqueAngle}
                    onChange={() => toggleComplete('defineUniqueAngle')}
                  />
                  <label htmlFor="unique-angle-complete" className="ml-2">
                    Unique Angle Defined
                  </label>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">B. Choose Your Platform</h4>
                <p className="text-sm mb-3">
                  Select one platform where your ideal customers spend time and you enjoy creating content:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <select 
                    className="w-full p-2 border rounded"
                    onChange={(e) => {
                      // Implementation for platform selection
                    }}
                  >
                    <option value="">Select your primary platform</option>
                    <option value="youtube">YouTube</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="twitter">Twitter</option>
                    <option value="facebook">Facebook</option>
                    <option value="blog">Blog</option>
                    <option value="podcast">Podcast</option>
                    <option value="other">Other</option>
                  </select>
                  <div>
                    <label className="block mb-1 font-medium">Why this platform is best for your audience:</label>
                    <textarea 
                      className="w-full p-2 border rounded h-20" 
                      placeholder="Explain why this platform is ideal for reaching your target audience"
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="platform-chosen-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.choosePlatform}
                    onChange={() => toggleComplete('choosePlatform')}
                  />
                  <label htmlFor="platform-chosen-complete" className="ml-2">
                    Platform Selected
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">C. Create Your Content Circle Framework</h4>
                <p className="text-sm mb-3">
                  Define your content strategy using concentric circles, starting with a very specific audience:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Core Circle (Narrow focus)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="Specific outcome + specific audience"
                      value={contentCircle.coreCircle}
                      onChange={(e) => setContentCircle({...contentCircle, coreCircle: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">Example: "How to clean your evaporative cooler + in the Southwest USA"</p>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Medium Circle (Broader focus)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="Related outcome + broader audience"
                      value={contentCircle.mediumCircle}
                      onChange={(e) => setContentCircle({...contentCircle, mediumCircle: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">Example: "How to choose laundry detergents + for new homeowners"</p>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Large Circle (Broadest focus)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder="General outcome + general audience"
                      value={contentCircle.largeCircle}
                      onChange={(e) => setContentCircle({...contentCircle, largeCircle: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">Example: "The ten best vacuums + for a family"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 2: Build Your Email List</h3>
              <p className="mb-4">
                Create a system to capture email addresses and turn subscribers into customers.
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">A. Create a Lead Magnet</h4>
                <p className="text-sm mb-3">
                  Design a valuable free resource to incentivize email sign-ups:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Lead Magnet Type</label>
                    <select className="w-full p-2 border rounded">
                      <option value="">Select lead magnet type</option>
                      <option value="checklist">Checklist</option>
                      <option value="template">Template</option>
                      <option value="guide">Guide or eBook</option>
                      <option value="video">Free Video Training</option>
                      <option value="tool">Tool or Calculator</option>
                      <option value="discount">Discount or Coupon</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Lead Magnet Title</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Title of your lead magnet" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Value Proposition</label>
                    <textarea 
                      className="w-full p-2 border rounded h-20" 
                      placeholder="What problem does it solve? Why should people want it?"
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="lead-magnet-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.createLeadMagnet}
                    onChange={() => toggleComplete('createLeadMagnet')}
                  />
                  <label htmlFor="lead-magnet-complete" className="ml-2">
                    Lead Magnet Created
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">B. Set Up Your Autoresponder Sequence</h4>
                <p className="text-sm mb-3">
                  Create a sequence of emails to automatically send to new subscribers:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div className="p-3 bg-gray-100 rounded">
                    <h5 className="font-medium mb-1">Email #1: Welcome Email</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <input type="text" className="w-full p-2 border rounded" placeholder="Subject line" />
                      <textarea 
                        className="w-full p-2 border rounded h-20" 
                        placeholder="Welcome message and introduction"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded">
                    <h5 className="font-medium mb-1">Email #2: Connection Email</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <input type="text" className="w-full p-2 border rounded" placeholder="Subject line" />
                      <textarea 
                        className="w-full p-2 border rounded h-20" 
                        placeholder="Invite them to connect with you on social media"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded">
                    <h5 className="font-medium mb-1">Email #3: Content Email</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <input type="text" className="w-full p-2 border rounded" placeholder="Subject line" />
                      <textarea 
                        className="w-full p-2 border rounded h-20" 
                        placeholder="Share valuable content related to your business"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="autoresponder-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.setupAutoresponder}
                    onChange={() => toggleComplete('setupAutoresponder')}
                  />
                  <label htmlFor="autoresponder-complete" className="ml-2">
                    Autoresponder Setup Complete
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 3: Create Your Growth Machine</h3>
              <p className="mb-4">
                Develop a system for testing and scaling your marketing efforts.
              </p>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">A. Create Your Marketing Experiment List</h4>
                <p className="text-sm mb-3">
                  List 5 different marketing strategies you'll test, along with expected results:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marketing Strategy</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Sales</th>
                        <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Sales</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {marketingExperiments.map((experiment, index) => (
                        <tr key={`experiment-${index}`}>
                          <td className="p-2">{index + 1}</td>
                          <td className="p-2">
                            <input 
                              type="text" 
                              className="w-full p-1 border rounded text-sm" 
                              placeholder="Strategy description"
                              value={experiment.strategy}
                              onChange={(e) => updateMarketingExperiment(index, 'strategy', e.target.value)}
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text" 
                              className="w-full p-1 border rounded text-sm" 
                              placeholder="Expected"
                              value={experiment.expectedSales}
                              onChange={(e) => updateMarketingExperiment(index, 'expectedSales', e.target.value)}
                            />
                          </td>
                          <td className="p-2">
                            <input 
                              type="text" 
                              className="w-full p-1 border rounded text-sm" 
                              placeholder="Actual"
                              value={experiment.actualSales}
                              onChange={(e) => updateMarketingExperiment(index, 'actualSales', e.target.value)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center mt-3">
                  <input 
                    type="checkbox" 
                    id="marketing-list-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.createMarketingList}
                    onChange={() => toggleComplete('createMarketingList')}
                  />
                  <label htmlFor="marketing-list-complete" className="ml-2">
                    Marketing Experiment List Created
                  </label>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">B. Double Down on What Works</h4>
                <p className="text-sm mb-3">
                  After testing your marketing experiments, identify which strategies to scale:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Top Performing Strategy</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Your most effective strategy" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">How will you double down on this strategy?</label>
                    <textarea 
                      className="w-full p-2 border rounded h-20" 
                      placeholder="Specific steps to scale this marketing channel"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Strategies to Eliminate</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Strategies that didn't work" />
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="double-down-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.doubleDownMarketing}
                    onChange={() => toggleComplete('doubleDownMarketing')}
                  />
                  <label htmlFor="double-down-complete" className="ml-2">
                    Double Down Strategy Defined
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">C. Make Your First 100 Customers Happier</h4>
                <p className="text-sm mb-3">
                  Develop a strategy to delight your existing customers:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Customer Delight Strategy</label>
                    <textarea 
                      className="w-full p-2 border rounded h-20" 
                      placeholder="How will you exceed expectations for your customers?"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Customer Feedback Question</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      placeholder='Ask: "What is one thing we can do today that will make you twice as happy with us?"'
                      value="What is one thing we can do today that will make you twice as happy with us?"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="customer-feedback-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.askCustomerForFeedback}
                    onChange={() => toggleComplete('askCustomerForFeedback')}
                  />
                  <label htmlFor="customer-feedback-complete" className="ml-2">
                    Asked Customer for Feedback
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={() => setActiveTab('phase2')}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back to Build It
              </button>
              <button 
                onClick={() => setActiveTab('phase4')}
                className="px-4 py-2 bg-purple-600 text-white rounded"
              >
                Next: Systems & Routines
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'phase4' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-800">Phase 4: SYSTEMS & ROUTINES</h2>
            <p className="mb-4">
              Design systems and routines to ensure long-term success and create the life you want.
            </p>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 1: Define Your Dream Year</h3>
              <p className="mb-4">
                Imagine your best year ever and organize it into goals across different life areas.
              </p>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Create Your Yearly Goals</h4>
                <p className="text-sm mb-3">
                  Set specific goals in each of these four categories:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <h5 className="font-medium mb-2 text-blue-800">Work Goals</h5>
                    {yearlyGoals.work.map((goal, index) => (
                      <div key={`work-${index}`} className="mb-2 flex">
                        <input 
                          type="text" 
                          className="flex-grow p-2 border rounded" 
                          placeholder="Work goal"
                          value={goal}
                          onChange={(e) => updateYearlyGoals('work', index, e.target.value)}
                        />
                        {index === yearlyGoals.work.length - 1 && (
                          <button 
                            className="ml-2 px-2 py-1 bg-blue-600 text-white rounded"
                            onClick={() => addYearlyGoal('work')}
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <h5 className="font-medium mb-2 text-green-800">Health Goals</h5>
                    {yearlyGoals.health.map((goal, index) => (
                      <div key={`health-${index}`} className="mb-2 flex">
                        <input 
                          type="text" 
                          className="flex-grow p-2 border rounded" 
                          placeholder="Health goal"
                          value={goal}
                          onChange={(e) => updateYearlyGoals('health', index, e.target.value)}
                        />
                        {index === yearlyGoals.health.length - 1 && (
                          <button 
                            className="ml-2 px-2 py-1 bg-green-600 text-white rounded"
                            onClick={() => addYearlyGoal('health')}
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <h5 className="font-medium mb-2 text-purple-800">Personal Goals</h5>
                    {yearlyGoals.personal.map((goal, index) => (
                      <div key={`personal-${index}`} className="mb-2 flex">
                        <input 
                          type="text" 
                          className="flex-grow p-2 border rounded" 
                          placeholder="Personal goal"
                          value={goal}
                          onChange={(e) => updateYearlyGoals('personal', index, e.target.value)}
                        />
                        {index === yearlyGoals.personal.length - 1 && (
                          <button 
                            className="ml-2 px-2 py-1 bg-purple-600 text-white rounded"
                            onClick={() => addYearlyGoal('personal')}
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-yellow-50 rounded">
                    <h5 className="font-medium mb-2 text-yellow-800">Travel Goals</h5>
                    {yearlyGoals.travel.map((goal, index) => (
                      <div key={`travel-${index}`} className="mb-2 flex">
                        <input 
                          type="text" 
                          className="flex-grow p-2 border rounded" 
                          placeholder="Travel goal"
                          value={goal}
                          onChange={(e) => updateYearlyGoals('travel', index, e.target.value)}
                        />
                        {index === yearlyGoals.travel.length - 1 && (
                          <button 
                            className="ml-2 px-2 py-1 bg-yellow-600 text-white rounded"
                            onClick={() => addYearlyGoal('travel')}
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="yearly-goals-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.setupYearlyGoals}
                    onChange={() => toggleComplete('setupYearlyGoals')}
                  />
                  <label htmlFor="yearly-goals-complete" className="ml-2">
                    Yearly Goals Defined
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 2: Color Your Calendar</h3>
              <p className="mb-4">
                Create a system to prioritize your time according to your goals.
              </p>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Calendar System Setup</h4>
                <p className="text-sm mb-3">
                  Follow these steps to color-code your calendar:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="p-3 border rounded">
                    <h5 className="font-medium mb-2">1. Category & Color Code</h5>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                        <span>Work</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 mr-2"></div>
                        <span>Health</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-purple-500 mr-2"></div>
                        <span>Personal</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
                        <span>Travel</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border rounded">
                    <h5 className="font-medium mb-2">2. Weekly Priority Blocks</h5>
                    <p className="text-sm mb-2">
                      List your key weekly activities that need to be scheduled:
                    </p>
                    <textarea 
                      className="w-full p-2 border rounded h-32" 
                      placeholder="Example: 
Monday 9am-12pm: Focus on YouTube content (Work)
Tuesday 7am-8am: Exercise (Health)
Wednesday 2pm-4pm: Learning new skills (Personal)"
                    ></textarea>
                  </div>
                </div>
                <div className="p-3 border rounded mb-3">
                  <h5 className="font-medium mb-2">3. Sunday Accountability Review</h5>
                  <p className="text-sm mb-2">
                    Each Sunday, review your previous week and plan the next week:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block mb-1 font-medium">What did you accomplish last week?</label>
                      <textarea 
                        className="w-full p-2 border rounded h-20" 
                        placeholder="List completed tasks and progress on goals"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">What are your priorities for next week?</label>
                      <textarea 
                        className="w-full p-2 border rounded h-20" 
                        placeholder="List your top priorities for the coming week"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="color-calendar-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.colorCalendar}
                    onChange={() => toggleComplete('colorCalendar')}
                  />
                  <label htmlFor="color-calendar-complete" className="ml-2">
                    Calendar System Setup Complete
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 3: Build Your Support Network</h3>
              <p className="mb-4">
                Create a network of people who will support your entrepreneurial journey.
              </p>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Find an Accountability Buddy</h4>
                <p className="text-sm mb-3">
                  Identify someone who will hold you accountable to your goals:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Accountability Buddy Name</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Why this person will be a good accountability partner</label>
                    <textarea 
                      className="w-full p-2 border rounded h-20" 
                      placeholder="Explain why this person is a good match"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Weekly Accountability Email Template</label>
                    <textarea 
                      className="w-full p-2 border rounded h-32" 
                      placeholder="Create a template for your weekly accountability email. Include sections for:
1. What you accomplished last week
2. What you didn't accomplish and why
3. Your goals for the coming week
4. Any support you need"
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="accountability-buddy-complete" 
                    className="h-5 w-5 text-blue-600"
                    checked={completedSteps.findAccountabilityBuddy}
                    onChange={() => toggleComplete('findAccountabilityBuddy')}
                  />
                  <label htmlFor="accountability-buddy-complete" className="ml-2">
                    Accountability Buddy Selected
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Step 4: Apply the Law of 100</h3>
              <p className="mb-4">
                Commit to doing something 100 times before you even think about quitting.
              </p>
              
              <div className="p-4 bg-white rounded border">
                <h4 className="font-semibold mb-2">Your Law of 100 Commitment</h4>
                <p className="text-sm mb-3">
                  Choose one activity that you'll commit to doing 100 times:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-3">
                  <div>
                    <label className="block mb-1 font-medium">Activity</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="What will you do 100 times?" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Frequency</label>
                    <select className="w-full p-2 border rounded">
                      <option value="">How often?</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Why this activity is important</label>
                    <textarea 
                      className="w-full p-2 border rounded h-20" 
                      placeholder="Explain why this activity will help you reach your goals"
                    ></textarea>
                  </div>
                </div>
                <div className="p-3 bg-gray-100 rounded">
                  <h5 className="font-medium mb-2">Law of 100 Tracker</h5>
                  <p className="text-sm mb-2">
                    Use this to track your progress (check off each repetition):
                  </p>
                  <div className="grid grid-cols-10 gap-2">
                    {Array(100).fill().map((_, i) => (
                      <div 
                        key={`tracker-${i+1}`} 
                        className="w-8 h-8 flex items-center justify-center border rounded cursor-pointer hover:bg-gray-200"
                        onClick={(e) => {
                          e.currentTarget.classList.toggle('bg-blue-600');
                          e.currentTarget.classList.toggle('text-white');
                        }}
                      >
                        {i+1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">Congratulations!</h3>
              <p className="mb-4 text-center">
                You've completed the Million Dollar Weekend Implementation Guide. Remember Noah Kagan's advice:
              </p>
              <blockquote className="p-4 italic text-center border-l-4 border-blue-500 bg-white mb-4">
                "Achieving your dreams comes down to one question: How many times are you willing to get back up after falling down? Entrepreneurship is nothing more than the ability to come up with ideas and the courage to try them out."
              </blockquote>
              <p className="text-center font-medium">
                Don't stop here! Keep experimenting, keep learning, and keep growing your business.
              </p>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={() => setActiveTab('phase3')}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back to Grow It
              </button>
              <button 
                onClick={() => setActiveTab('overview')}
                className="px-4 py-2 bg-orange-600 text-white rounded"
              >
                Back to Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MDWImplementationGuide;
