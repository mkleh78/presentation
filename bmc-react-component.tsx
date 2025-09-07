import React from 'react';
import { 
  Users, 
  Target, 
  Key, 
  Gem, 
  Heart, 
  Megaphone, 
  UserCheck, 
  Wallet, 
  TrendingUp 
} from 'lucide-react';

const BusinessModelCanvas = () => {
  const canvasData = {
    partners: {
      title: "Key Partners",
      icon: Users,
      items: [
        "IHK Berlin (Data & Multipliers)",
        "Startup Advisory Services",
        "Women's Networks",
        "Spielfeld Digital Hub",
        "HoFT Partners"
      ]
    },
    activities: {
      title: "Key Activities",
      icon: Target,
      items: [
        "High-Quality Content Creation",
        "Digital Tools (Calculators, Score)",
        "Community Events & Workshops",
        "Data Analysis & Evaluation"
      ]
    },
    resources: {
      title: "Key Resources",
      icon: Key,
      items: [
        "Financial Expertise for Self-Employed",
        "Digital Platform & Tools",
        "IHK Database (70% Solo Entrepreneurs)",
        "Berlin Network"
      ]
    },
    value: {
      title: "Value Propositions",
      icon: Gem,
      items: [
        "Professional and Time-Saving Digital Offering",
        "Learning Through Role Models",
        "5-Minute Checkup & Online Tools",
        "Community & Peer Exchange"
      ],
      highlight: true
    },
    relationships: {
      title: "Customer Relationships",
      icon: Heart,
      items: [
        "Direct Communication",
        "Self-Service Online Tools",
        "Community Events",
        "Mentoring"
      ]
    },
    channels: {
      title: "Channels",
      icon: Megaphone,
      items: [
        "Website & Online Tools",
        "Events & Workshops",
        "Partner Networks",
        "LinkedIn",
        "Social Media / Advertising"
      ]
    },
    segments: {
      title: "Customer Segments",
      icon: UserCheck,
      items: [
        "Solo Entrepreneurs Berlin (28-58 years)",
        "75% Main, 25% Side Business",
        "Focus: Charlottenburg, Mitte, Prenzlauer Berg",
        "Types: Solopreneurs, Entrepreneurs, Capital Investors"
      ]
    },
    costs: {
      title: "Cost Structure",
      icon: Wallet,
      items: [
        "Personnel",
        "Technology & Platform",
        "Marketing & Events"
      ]
    },
    revenue: {
      title: "Revenue Streams",
      icon: TrendingUp,
      items: [
        "Subscription Fees (from 2026)",
        "Premium Services",
        "Data Insights (potential)",
        "Event Sponsoring",
        "Potential Additional Funding"
      ]
    }
  };

  const Section = ({ data, className = "" }) => {
    const Icon = data.icon;
    
    return (
      <div className={`
        bg-white rounded-lg p-6 h-full border border-gray-200
        ${data.highlight ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'} 
        transition-all duration-200 ${className}
      `}>
        <div className="flex items-center mb-4">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center mr-3
            ${data.highlight ? 'bg-blue-100' : 'bg-gray-100'}
          `}>
            <Icon size={20} className={data.highlight ? 'text-blue-600' : 'text-gray-700'} />
          </div>
          <h3 className="font-semibold text-gray-900 text-lg">{data.title}</h3>
        </div>
        <ul className="space-y-2">
          {data.items.map((item, index) => (
            <li key={index} className="text-sm text-gray-600 leading-relaxed flex items-start">
              <span className="text-gray-400 mr-2 mt-0.5 text-xs">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Business Model Canvas</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <p className="text-lg">vorsorge.berlin</p>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Retirement Planning for Freelancers in Berlin</p>
        </div>

        {/* Canvas Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-10 lg:grid-rows-6 gap-4 mb-10">
          {/* Row 1-2: Partners */}
          <div className="col-span-2 row-span-2">
            <Section data={canvasData.partners} className="h-full" />
          </div>
          
          {/* Row 1: Activities */}
          <div className="col-span-2 row-span-1">
            <Section data={canvasData.activities} />
          </div>
          
          {/* Row 1-2: Value Proposition */}
          <div className="col-span-2 row-span-2">
            <Section data={canvasData.value} className="h-full" />
          </div>
          
          {/* Row 1: Customer Relationships */}
          <div className="col-span-2 row-span-1">
            <Section data={canvasData.relationships} />
          </div>
          
          {/* Row 1-2: Customer Segments */}
          <div className="col-span-2 row-span-2">
            <Section data={canvasData.segments} className="h-full" />
          </div>
          
          {/* Row 2: Key Resources */}
          <div className="col-start-3 col-span-2 row-start-2">
            <Section data={canvasData.resources} />
          </div>
          
          {/* Row 2: Channels */}
          <div className="col-start-7 col-span-2 row-start-2">
            <Section data={canvasData.channels} />
          </div>
          
          {/* Row 3: Cost Structure */}
          <div className="col-span-5 row-start-3">
            <Section data={canvasData.costs} />
          </div>
          
          {/* Row 3: Revenue Streams */}
          <div className="col-span-5 row-start-3">
            <Section data={canvasData.revenue} />
          </div>
        </div>

        {/* Canvas Grid - Mobile/Tablet */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Section data={canvasData.value} />
          <Section data={canvasData.segments} />
          <Section data={canvasData.partners} />
          <Section data={canvasData.activities} />
          <Section data={canvasData.resources} />
          <Section data={canvasData.relationships} />
          <Section data={canvasData.channels} />
          <Section data={canvasData.costs} />
          <Section data={canvasData.revenue} />
        </div>

        {/* Strategic Summary */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Strategic Core Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Market Potential</h4>
              <p className="text-gray-300 text-sm">70% of Berlin IHK members are solo entrepreneurs without systematic retirement planning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Gem size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Differentiation</h4>
              <p className="text-gray-300 text-sm">Independent consulting combined with digital tools and community building</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Scaling</h4>
              <p className="text-gray-300 text-sm">Data-driven growth through IHK partnership and Financial Wellbeing Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;