import React, { useState } from 'react';
import { 
  ChevronRight, ChevronLeft, Coins, Users, Globe, CloudLightning, 
  Lightbulb, UserPlus, Info, ArrowRight, TrendingUp, AlertTriangle,
  ThumbsUp, Zap, Clock, Book, Target, Award, Check, Eye, Search, Star
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Komponente für einen Kraft-Abschnitt
  const ForceCard = ({ icon, title, color, children }) => {
    const Icon = icon;
    return (
      <div className={`p-4 rounded-lg shadow-md mb-4 border-l-4 ${color}`}>
        <div className="flex items-center mb-2">
          <Icon className="mr-2" size={24} />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="text-sm">{children}</div>
      </div>
    );
  };

  // Komponente für eine Handlungsanweisung
  const ActionCard = ({ title, description }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-blue-500">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    );
  };

  const slides = [
    // Folie 1: Einführung
    <div className="max-w-4xl mx-auto p-4" key="intro">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Die 5 (6) großen Kräfte nach Ray Dalio</h1>
        <p className="text-lg mb-6">Die treibenden Faktoren für Geschichte, Wirtschaft und globale Zyklen</p>
        
        <svg 
          viewBox="0 0 800 400"
          className="w-full max-w-lg h-auto mx-auto rounded-lg shadow-lg bg-white p-2"
        >
          {/* Hintergrundkreis */}
          <circle cx="400" cy="200" r="180" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Zentrum - "Big Cycle" */}
          <circle cx="400" cy="200" r="70" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
          <text x="400" y="190" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Der große</text>
          <text x="400" y="215" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Zyklus</text>
          
          {/* Kraft 1: Geld, Kredit, Schulden */}
          <circle cx="400" cy="60" r="50" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" />
          <text x="400" y="50" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1. Schulden</text>
          <text x="400" y="70" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">& Wirtschaft</text>
          <line x1="400" y1="120" x2="400" y2="270" stroke="#2563eb" strokeWidth="2" opacity="0.5" />
          
          {/* Kraft 2: Interne Konflikte */}
          <circle cx="260" cy="110" r="50" fill="#f87171" stroke="#dc2626" strokeWidth="2" />
          <text x="260" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2. Interne</text>
          <text x="260" y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Konflikte</text>
          <line x1="310" y1="140" x2="370" y2="170" stroke="#dc2626" strokeWidth="2" opacity="0.5" />
          
          {/* Kraft 3: Weltordnung */}
          <circle cx="190" cy="270" r="50" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
          <text x="190" y="260" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3. Welt-</text>
          <text x="190" y="280" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ordnung</text>
          <line x1="240" y1="250" x2="340" y2="220" stroke="#16a34a" strokeWidth="2" opacity="0.5" />
          
          {/* Kraft 4: Naturereignisse */}
          <circle cx="310" cy="340" r="50" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" />
          <text x="310" y="330" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4. Natur-</text>
          <text x="310" y="350" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ereignisse</text>
          <line x1="350" y1="310" x2="380" y2="260" stroke="#7e22ce" strokeWidth="2" opacity="0.5" />
          
          {/* Kraft 5: Technologie */}
          <circle cx="540" cy="340" r="50" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <text x="540" y="330" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">5. Tech-</text>
          <text x="540" y="350" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">nologie</text>
          <line x1="500" y1="310" x2="420" y2="260" stroke="#ca8a04" strokeWidth="2" opacity="0.5" />
          
          {/* Kraft 6: Demografie */}
          <circle cx="610" cy="200" r="50" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
          <text x="610" y="190" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">6. Demo-</text>
          <text x="610" y="210" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">grafie</text>
          <line x1="560" y1="200" x2="470" y2="200" stroke="#64748b" strokeWidth="2" opacity="0.5" />
          
          {/* Pfeile für "Headwinds" und "Tailwinds" */}
          <path d="M230,200 Q300,140 400,140" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
          <text x="290" y="150" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold" transform="rotate(-20, 290, 150)">Gegenwinde</text>
          
          <path d="M570,200 Q490,260 400,260" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="5,5" />
          <text x="490" y="250" textAnchor="middle" fill="#22c55e" fontSize="14" fontWeight="bold" transform="rotate(15, 490, 250)">Rückenwind</text>
          
          {/* Ray Dalio Titel */}
          <text x="400" y="380" textAnchor="middle" fill="#334155" fontSize="16" fontWeight="bold">Die 5 (6) großen Kräfte nach Ray Dalio</text>
        </svg>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Info size={20} className="mr-2 text-blue-500" />
            Ray Dalio: Eine kurze Einführung
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Award className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
              <span>Gründer von Bridgewater Associates, dem weltweit größten Hedgefonds</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
              <span>Globaler Makro-Investor seit über 50 Jahren mit außergewöhnlichem Erfolg</span>
            </li>
            <li className="flex items-start">
              <Book className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
              <span>Autor von "Principles", "The Changing World Order" und "How Countries Go Broke: The Big Cycle"</span>
            </li>
            <li className="flex items-start">
              <Eye className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
              <span>Studierte historische Zyklen und Muster, die sich über Jahrhunderte hinweg wiederholen</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Target size={20} className="mr-2 text-blue-500" />
            Dalios Perspektive
          </h2>
          <p className="mb-4">
            Dalios Ansatz basiert auf dem Studium von Systemen und Zyklen, die er selbst nicht erlebt hat, die aber in der Geschichte wiederkehrend auftreten. Sein Ziel ist es, die zugrundeliegenden "Mechanismen" und "Ursache-Wirkungs-Beziehungen" zu verstehen.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="italic text-sm">
              "Die menschliche Natur wird die größte Kraft sein - alles hängt davon ab, wie wir miteinander umgehen."
              <span className="block text-right mt-2">— Ray Dalio</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Die sechs großen Kräfte im Überblick</h2>
        <p className="mb-4">
          Ray Dalio identifizierte zunächst fünf, später sechs grundlegende Kräfte, die seiner Meinung nach die Geschichte und alle großen Entwicklungen antreiben. Diese Kräfte interagieren miteinander und formen zusammen die Zukunft von Nationen, Wirtschaften und Gesellschaften.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToSlide(3)}>
            <Coins size={24} className="mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold text-sm">1. Schulden & Wirtschaft</h3>
          </div>
          <div className="bg-red-50 p-3 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToSlide(4)}>
            <Users size={24} className="mx-auto mb-2 text-red-600" />
            <h3 className="font-bold text-sm">2. Interne Konflikte</h3>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToSlide(5)}>
            <Globe size={24} className="mx-auto mb-2 text-green-600" />
            <h3 className="font-bold text-sm">3. Weltordnung</h3>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToSlide(6)}>
            <CloudLightning size={24} className="mx-auto mb-2 text-purple-600" />
            <h3 className="font-bold text-sm">4. Naturereignisse</h3>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToSlide(7)}>
            <Lightbulb size={24} className="mx-auto mb-2 text-yellow-600" />
            <h3 className="font-bold text-sm">5. Technologie</h3>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => goToSlide(8)}>
            <UserPlus size={24} className="mx-auto mb-2 text-gray-600" />
            <h3 className="font-bold text-sm">6. Demografie</h3>
          </div>
        </div>
      </div>
    </div>,

    // Folie 2: Der große Zyklus
    <div className="max-w-4xl mx-auto p-4" key="big-cycle">
      <h1 className="text-3xl font-bold mb-6 text-center">Der "Big Cycle" - 80-Jahre-Zyklus</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Clock size={20} className="mr-2 text-blue-500" />
            Was ist der "Große Zyklus"?
          </h2>
          <p className="mb-4">
            Viele von Dalios identifizierten Kräften wirken in Zyklen, die sich etwa alle 80 Jahre wiederholen. Dies wird als "Big Cycle" bezeichnet und umfasst typischerweise die ersten drei Kräfte:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Geld-, Kredit-, Schulden- und Wirtschaftszyklus</li>
            <li>Interne Konflikte und politische Ordnung</li>
            <li>Internationale Weltordnung</li>
          </ul>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm">
              Ein solcher Zyklus erstreckt sich über die Lebensspanne eines Menschen, weshalb die Lektionen oft nicht von Generation zu Generation weitergegeben werden.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <ArrowRight size={20} className="mr-2 text-blue-500" />
            Typischer Verlauf des Zyklus
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Neue Ordnung:</strong> 
              <span className="text-sm block">Nach einem Krieg oder einer Krise setzt der Gewinner die Regeln, schafft eine neue monetäre Ordnung und reduziert Schulden.</span>
            </li>
            <li>
              <strong>Aufbauphase:</strong> 
              <span className="text-sm block">Stabilität und Wachstum mit "hartem Geld". Schulden wachsen, aber langsamer als Einkommen.</span>
            </li>
            <li>
              <strong>Reifephase:</strong> 
              <span className="text-sm block">Schulden wachsen schneller als Einkommen. Blasen entstehen, Ungleichheit wächst, politische Spannungen nehmen zu.</span>
            </li>
            <li>
              <strong>Höhepunkt und Umkehrung:</strong> 
              <span className="text-sm block">Schuldenrückzahlungen übersteigen Einkommen. Wirtschaftliche und politische Krisen entstehen.</span>
            </li>
            <li>
              <strong>Konflikt und Zusammenbruch:</strong> 
              <span className="text-sm block">Interne Konflikte, internationale Spannungen, Kriege oder Revolutionen führen zum Ende des Zyklus.</span>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Target size={20} className="mr-2 text-blue-500" />
          Wo stehen wir heute im Zyklus?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              Laut Dalio befinden wir uns aktuell bei etwa <strong>65-70% des laufenden Wirtschaftszyklus</strong> - nahe am "Höhepunkt und Umkehrung". Die Parallelen zu den 1930er Jahren sind bemerkenswert, mit hohen Schulden, wachsender Ungleichheit und zunehmenden politischen Spannungen.
            </p>
            <p className="mb-4">
              Historisch gesehen sind dies Zeiten großer Veränderung und Unsicherheit, in denen bestehende Ordnungen in Frage gestellt werden und neue entstehen.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex">
                <AlertTriangle size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <p className="text-sm">
                  "Wir steuern auf eine <strong>definitive Wand</strong> zu. Es droht etwas Schlimmeres als eine Rezession, wenn die Dinge nicht gut gehandhabt werden."
                  <span className="block text-right mt-2">— Ray Dalio</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 mx-auto">
              <svg viewBox="0 0 200 200">
                {/* Hintergrundkreis */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  fill="transparent" 
                  stroke="#e2e8f0" 
                  strokeWidth="12"
                />
                
                {/* Fortschrittskreis */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  fill="transparent" 
                  stroke="#3b82f6" 
                  strokeWidth="12" 
                  strokeDasharray="565.48" 
                  strokeDashoffset="169.64" 
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                />
                
                {/* Zentrum */}
                <text x="100" y="90" textAnchor="middle" fontSize="18" fontWeight="bold">
                  70%
                </text>
                <text x="100" y="115" textAnchor="middle" fontSize="12">
                  des aktuellen Zyklus
                </text>
              </svg>
            </div>
            <div className="w-full mt-4 bg-gray-100 rounded-lg p-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Neue Ordnung</span>
                <span>Aufbau</span>
                <span>Reife</span>
                <span>Höhepunkt</span>
                <span>Konflikt</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: '70%' }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-sm mb-2 flex items-center">
              <TrendingUp size={16} className="mr-1 text-blue-500" />
              Historische Analogien
            </h3>
            <ul className="text-xs space-y-1">
              <li>1930er Jahre (Große Depression, politische Extreme)</li>
              <li>1780er Jahre (Amerikanische Revolution)</li>
              <li>1930er-1940er (Aufstieg von Autoritarismus)</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-sm mb-2 flex items-center">
              <AlertTriangle size={16} className="mr-1 text-yellow-500" />
              Warnsignale
            </h3>
            <ul className="text-xs space-y-1">
              <li>Staatsschulden &gt; 120% des BIP</li>
              <li>Größte politische Polarisierung seit 1900</li>
              <li>Steigender Populismus von links und rechts</li>
              <li>Herausforderung der bestehenden Weltordnung</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-sm mb-2 flex items-center">
              <ThumbsUp size={16} className="mr-1 text-green-500" />
              Chancen im Übergang
            </h3>
            <ul className="text-xs space-y-1">
              <li>Technologische Revolution (KI, Produktivität)</li>
              <li>Neue monetäre und wirtschaftliche Modelle</li>
              <li>Aufbau von Resilienz und Anpassungsfähigkeit</li>
              <li>Zusammenarbeit bei globalen Herausforderungen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>,

    // Folie 3: Kraft 1 - Schulden & Wirtschaft
    <div className="max-w-4xl mx-auto p-4" key="force1">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Coins size={36} className="text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold">Kraft 1: Geld-, Kredit-, Schulden- und Wirtschaftszyklus</h1>
        </div>
        <p className="text-lg mb-2">
          "Der wichtigste Zyklus, der die monetäre Ordnung verändert"
        </p>
        <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Clock size={20} className="mr-2 text-blue-600" />
            Kurzfristiger Schuldenzyklus (5-8 Jahre)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gesteuert durch Zentralbanken via Kreditsystem</li>
            <li>Expansion: Kredite werden leichter verfügbar → Ausgaben steigen</li>
            <li>Inflation steigt → Zentralbanken erhöhen Zinsen</li>
            <li>Höhere Zinsen verteuern Kredite → Ausgaben sinken</li>
            <li>Rezession → Zentralbanken senken Zinsen</li>
            <li>Niedrigere Zinsen fördern Kreditaufnahme → Erneute Expansion</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp size={20} className="mr-2 text-blue-600" />
            Langfristiger Schuldenzyklus (~80 Jahre)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Schulden wachsen über Jahrzehnte schneller als Einkommen</li>
            <li>Menschliche Tendenz: Lieber leihen als zurückzuzahlen</li>
            <li>Kreditgeber werden großzügiger, Vermögenswerte steigen</li>
            <li>"Boom" oder "Blase" entsteht</li>
            <li>Irgendwann übersteigen Schuldenrückzahlungen die Einkommen</li>
            <li>Ausgaben sinken → Einkommen sinken → Kreditvergabe sinkt</li>
            <li>Schuldenlast wird zu groß → "Deleveraging"-Phase</li>
            <li>Resultat: Gelddrucken und Währungsabwertung (monetäre Inflation)</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <AlertTriangle size={20} className="mr-2 text-blue-600" />
            Aktuelle Situation (laut Dalio)
          </h3>
          <p className="mb-4">
            Die USA stehen am Rande eines großen Wandels, der durch Schuldenprobleme gekennzeichnet ist. Die Schuldenlast wird zunehmend problematisch, mit einem drohenden "Angebots-Nachfrage-Problem für Schulden".
          </p>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="italic text-sm">
              "Ohne geeignete Maßnahmen droht etwas Schlimmeres als eine Rezession - möglicherweise ein Zusammenbruch des Geldsystems, eine Depression oder schwere Konflikte."
              <span className="block text-right mt-2">— Ray Dalio</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <Star size={20} className="mr-2 text-blue-600" />
            Die "3%-Lösung"
          </h3>
          <p className="text-sm mb-3">
            Dalios Vorschlag zur Bewältigung des US-Budgetdefizits:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Budgetdefizit auf <strong>3% des BIP</strong> senken</li>
            <li>Kombination aus <strong>Ausgabenkürzungen</strong> und <strong>Steuererhöhungen</strong></li>
            <li><strong>Zinssätze</strong> auf Schulden beeinflussen</li>
            <li>Überparteiliche Lösung wie <strong>1991-1998</strong></li>
          </ul>
        </div>
      </div>
    </div>,

    // Folie 4: Kraft 2 - Interne Konflikte
    <div className="max-w-4xl mx-auto p-4" key="force2">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Users size={36} className="text-red-600 mr-3" />
          <h1 className="text-3xl font-bold">Kraft 2: Interne Konflikte</h1>
        </div>
        <p className="text-lg mb-2">
          "Der politische oder interne Ordnungs-/Unordnungszyklus"
        </p>
        <div className="h-1 w-24 bg-red-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Users size={20} className="mr-2 text-red-600" />
            Wesen dieser Kraft
          </h2>
          <p className="mb-4">
            Diese Kraft beinhaltet die Unterschiede zwischen Links und Rechts in Bezug auf Wohlstand und Werte, die tiefe gesellschaftliche Konflikte verursachen und die innere politische Ordnung eines Landes verändern.
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Verändert die interne politische Ordnung eines Landes</li>
            <li>Fällt zeitlich oft mit dem langfristigen Schuldenzyklus zusammen</li>
            <li>Populismus von links und rechts entsteht</li>
            <li>Schafft im Laufe des Zyklus größere und größere Konflikte</li>
            <li>Führt zur Infragestellung der Rechtsstaatlichkeit</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp size={20} className="mr-2 text-red-600" />
            Treibende Faktoren
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Wirtschaftliche Ungleichheit wächst während des Schuldenzyklus</li>
            <li>Globalisierung und Technologie verändern die Fertigung</li>
            <li>KI könnte diese Trends beschleunigen</li>
            <li>Unterschiede in Bildung und Produktivität verstärken die Spaltung</li>
            <li>Werteunterschiede (Religion, Glaubenssysteme) tragen bei</li>
            <li>Kein umfassender "Plan", um mit diesen Herausforderungen umzugehen</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <AlertTriangle size={20} className="mr-2 text-red-600" />
          Aktuelle Situation (laut Dalio)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              Die USA befinden sich in einer "Art Bürgerkrieg" mit unüberbrückbaren Differenzen. Die Kluft zwischen konservativen und liberalen Stimmen im Kongress ist die größte seit 1900, und die parteiübergreifende Zusammenarbeit ist auf einem historischen Tiefpunkt.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="italic text-sm">
                "Es gibt unüberbrückbare Differenzen, für die jede Seite bereit ist zu kämpfen. Die Lösung durch Kompromiss und Empathie ist unwahrscheinlich."
                <span className="block text-right mt-2">— Ray Dalio</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <div className="w-full max-w-md bg-gray-100 rounded-lg p-4">
              <h4 className="text-center font-bold mb-2">Politische Polarisierung in den USA</h4>
              <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-red-600 rounded-full"
                  style={{ width: '92%' }}
                />
              </div>
              <p className="text-center text-sm">92% - Höchster Wert seit 1900</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2">Lösungsansatz: Bildung</h4>
            <p className="text-xs">
              Förderung von Bildung, die sowohl praktische Fähigkeiten als auch Zivilität und den respektvollen Umgang miteinander vermittelt.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2">Lösungsansatz: Gemeinsame Ziele</h4>
            <p className="text-xs">
              Identifikation gemeinsamer Herausforderungen und Ziele, die politische Lager überbrücken können.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2">Lösungsansatz: Wirtschaftliche Mobilität</h4>
            <p className="text-xs">
              Schaffung von Möglichkeiten für wirtschaftliche Mobilität und Produktivität für breitere Bevölkerungsschichten.
            </p>
          </div>
        </div>
      </div>
    </div>,

    // Folie 5: Kraft 3 - Weltordnung
    <div className="max-w-4xl mx-auto p-4" key="force3">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Globe size={36} className="text-green-600 mr-3" />
          <h1 className="text-3xl font-bold">Kraft 3: Die Weltordnung</h1>
        </div>
        <p className="text-lg mb-2">
          "Der internationale Ordnungs-/Unordnungszyklus"
        </p>
        <div className="h-1 w-24 bg-green-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Globe size={20} className="mr-2 text-green-600" />
            Wesen dieser Kraft
          </h2>
          <p className="mb-4">
            Diese Kraft beschreibt, wie Länder miteinander umgehen, insbesondere wenn eine aufsteigende Macht eine bestehende Macht herausfordert. Sie verändert die politische Ordnung eines Landes extern.
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Betrifft, wie Länder miteinander umgehen</li>
            <li>Im Kern geht es darum, wer die dominante Macht ist</li>
            <li>Eine aufsteigende Macht fordert eine bestehende Macht heraus</li>
            <li>Tendiert dazu, dem langfristigen Schuldenzyklus zu folgen</li>
            <li>Endet oft mit Kriegen, die neue Systeme hervorbringen</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp size={20} className="mr-2 text-green-600" />
            USA vs. China: Der neue "Technologie-Krieg"
          </h2>
          
          <p className="mb-4 text-sm">
            Dalio sieht die Beziehung zwischen den USA und China als eine Art "Krieg", der bisher nicht militärisch, aber subversiv ist. Ein Schlüsselbereich dieses Konflikts ist die Technologie.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-bold text-sm mb-1 text-blue-700">USA Stärken</h3>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Erfindungsreichtum und Innovation</li>
                <li>Führende Universitäten und Forschung</li>
                <li>Globale Talentanziehung</li>
                <li>Entwickelte Kapitalmärkte</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg">
              <h3 className="font-bold text-sm mb-1 text-red-700">China Stärken</h3>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Fertigung (33% der globalen Produktion)</li>
                <li>Anwendung von Technologie</li>
                <li>Fortschritte in Robotik</li>
                <li>Schnelle Implementierung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <AlertTriangle size={20} className="mr-2 text-green-600" />
          Aktuelle Situation der Weltordnung
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              Die Welt befindet sich in einer Übergangsphase von einer multilateralen (USA-dominierten) zu einer unilateralen Weltordnung. Statt Zusammenarbeit und Institutionen wie der WHO oder dem IWF agieren Länder zunehmend in ihrem eigenen Interesse.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="italic text-sm">
                "Der Technologie-Krieg ist entscheidend und darf nicht verloren werden. Länder versuchen, getrennte, parallele Universen in der Technologie zu schaffen."
                <span className="block text-right mt-2">— Ray Dalio</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-1">Charakteristiken der Übergangsphase</h4>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Abnehmende Wirksamkeit internationaler Institutionen</li>
                <li>Verstärkter wirtschaftlicher Nationalismus und Protektionismus</li>
                <li>Technologie-Rivalität und -Kontrolle</li>
                <li>Aufbau paralleler Finanzsysteme</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-1">Lösungsansätze nach Dalio</h4>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Stärke nutzen, aber unnötigen Konflikt vermeiden</li>
                <li>Geordnete Übergänge anstreben</li>
                <li>In Bereichen gemeinsamer Interessen kooperieren</li>
                <li>Wettbewerbsvorteile in Schlüsseltechnologien sichern</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Folie 6: Kraft 4 - Naturereignisse
    <div className="max-w-4xl mx-auto p-4" key="force4">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <CloudLightning size={36} className="text-purple-600 mr-3" />
          <h1 className="text-3xl font-bold">Kraft 4: Naturereignisse</h1>
        </div>
        <p className="text-lg mb-2">
          "Eine größere Kraft als die ersten drei"
        </p>
        <div className="h-1 w-24 bg-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <CloudLightning size={20} className="mr-2 text-purple-600" />
            Wesen dieser Kraft
          </h2>
          <p className="mb-4">
            Dalio betrachtet Naturereignisse als eine noch größere historische Kraft als die wirtschaftlichen und politischen Zyklen. Sie umfasst Klimaereignisse, Dürren, Überschwemmungen und Pandemien und folgt nicht unbedingt demselben ~80-jährigen "großen Zyklus".
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Hat <strong>mehr Menschen getötet</strong> als wirtschaftliche oder politische Zyklen</li>
            <li>Hat <strong>mehr Weltordnungen und innere Ordnungen gestürzt</strong></li>
            <li>Kann <strong>jederzeit auftreten</strong> und tiefgreifende Veränderungen herbeiführen</li>
            <li>Wirkt als <strong>"Gegenwind"</strong> für wirtschaftliche Entwicklung</li>
          </ul>
          
          <div className="mt-4 bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-sm mb-2">Historische Beispiele großer Disruptionen:</h3>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>Der Schwarze Tod (14. Jh.) - Tötete ein Drittel der europäischen Bevölkerung</li>
              <li>Spanische Grippe (1918-1920) - Weltweit bis zu 50 Millionen Tote</li>
              <li>Große Dürre in China (1876-1879) - Trug zum Fall der Qing-Dynastie bei</li>
              <li>COVID-19 - Globale wirtschaftliche und soziale Auswirkungen</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Search size={20} className="mr-2 text-purple-600" />
            Wirtschaftliche Auswirkungen
          </h2>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-sm mb-2 text-center">BIP-Rückgang durch globale Pandemien (%)</h3>
            <div className="grid grid-cols-5 gap-2 mt-4">
              <div className="flex flex-col items-center">
                <div className="h-24 w-8 bg-purple-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">Span. Grippe (1918)</span>
                <span className="text-xs font-bold">6%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-8 bg-purple-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">Asiat. Grippe (1957)</span>
                <span className="text-xs font-bold">3%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 bg-purple-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">HIV/AIDS (1980er)</span>
                <span className="text-xs font-bold">2%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-4 w-8 bg-purple-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">SARS (2003)</span>
                <span className="text-xs font-bold">1%</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-8 bg-purple-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">COVID-19 (2020)</span>
                <span className="text-xs font-bold">5%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="italic text-sm">
              "Naturereignisse sind 'jetzt eine große Sache'. Pandemien und Klimaprobleme stellen einen weiteren 'Gegenwind' für die wirtschaftliche und gesellschaftliche Entwicklung dar."
              <span className="block text-right mt-2">— Ray Dalio</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <AlertTriangle size={20} className="mr-2 text-purple-600" />
          Resilienz gegenüber Naturereignissen
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2 flex items-center">
              <Search size={16} className="mr-1 text-purple-600" />
              Erkennen
            </h4>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>Frühwarnsysteme entwickeln</li>
              <li>Langfristige Trends verfolgen</li>
              <li>Wissenschaftliche Forschung fördern</li>
              <li>Interdisziplinäre Zusammenarbeit</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2 flex items-center">
              <Search size={16} className="mr-1 text-purple-600" />
              Vorbereiten
            </h4>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>Notfallpläne entwickeln</li>
              <li>Finanzielle Reserven aufbauen</li>
              <li>Infrastruktur stärken</li>
              <li>Lieferketten diversifizieren</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2 flex items-center">
              <Zap size={16} className="mr-1 text-purple-600" />
              Reagieren
            </h4>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>Schnelle Entscheidungsprozesse</li>
              <li>Flexible Ressourcenzuweisung</li>
              <li>Internationale Zusammenarbeit</li>
              <li>Evidenzbasierte Maßnahmen</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2 flex items-center">
              <Zap size={16} className="mr-1 text-purple-600" />
              Erholen
            </h4>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>"Build Back Better"-Ansatz</li>
              <li>Lehren aus Krisen ziehen</li>
              <li>Resilienz in Systeme einbauen</li>
              <li>Langfristige Anpassung</li>
            </ul>
          </div>
        </div>
      </div>
    </div>,

    // Folie 7: Kraft 5 - Technologie
    <div className="max-w-4xl mx-auto p-4" key="force5">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Lightbulb size={36} className="text-yellow-600 mr-3" />
          <h1 className="text-3xl font-bold">Kraft 5: Technologie</h1>
        </div>
        <p className="text-lg mb-2">
          "Die Erfindungsfähigkeit des Menschen als aufwärtsgerichtete Kraft"
        </p>
        <div className="h-1 w-24 bg-yellow-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp size={20} className="mr-2 text-yellow-600" />
            Positive Auswirkungen
          </h2>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Ein <strong>"Rückenwind"</strong> für Produktivität</li>
            <li>Technologische Fortschritte, insbesondere KI und Robotik, steigern die Produktivität</li>
            <li>Baut auf sich selbst auf und erzeugt exponentielles Wachstum</li>
            <li>KI wird das Denken revolutionieren und alles effizienter machen</li>
            <li>Hilft, komplexe Ursache-Wirkungs-Beziehungen zu verstehen</li>
            <li>Kann in Wirtschaft, Gesundheit und vielen anderen Bereichen angewendet werden</li>
          </ul>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="italic text-sm">
              "Die aktuelle KI-Revolution wird den größten Einfluss in der Geschichte haben. Sie wird das gesamte Denken revolutionieren und alles viel effizienter und leistungsfähiger machen."
              <span className="block text-right mt-2">— Ray Dalio</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <AlertTriangle size={20} className="mr-2 text-yellow-600" />
            Herausforderungen und Risiken
          </h2>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Ein <strong>"zweischneidiges Schwert"</strong> mit positiven und negativen Auswirkungen</li>
            <li>Vergrößert wahrscheinlich die Kluft zwischen Profiteuren und Verlierern</li>
            <li>Macht die Verteilung der Vorteile zu einer schwierigen sozialen Frage</li>
            <li>Könnte die Polarisierung der Gesellschaft beschleunigen</li>
            <li>Kann als Waffe eingesetzt werden</li>
            <li>Fragen nach totalitärer Kontrolle oder Anarchie</li>
            <li>Schutz geistigen Eigentums wird immer schwieriger</li>
          </ul>
          
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-sm mb-2">Historische Beispiele technologischer Revolutionen:</h3>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>Die industrielle Revolution mit der Dampfmaschine</li>
              <li>Die Elektrifizierung im späten 19. und frühen 20. Jahrhundert</li>
              <li>Die digitale Revolution mit Computern und Internet</li>
              <li>Der aktuelle KI-Durchbruch mit generativen Modellen</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <Zap size={20} className="mr-2 text-yellow-600" />
          Das zweischneidige Schwert der Technologie
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-sm mb-2">Positive Effekte</h4>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Beispiellose Produktivitätssteigerungen</li>
              <li>Neue Lösungen für komplexe Probleme</li>
              <li>Verbesserte Gesundheitsversorgung und Diagnosen</li>
              <li>Demokratisierung von Wissen und Bildung</li>
              <li>Neue wirtschaftliche Möglichkeiten</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-2">Negative Effekte</h4>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Arbeitsplatzverluste durch Automatisierung</li>
              <li>Vergrößerung sozialer und wirtschaftlicher Ungleichheit</li>
              <li>Missbrauch für Überwachung und Kontrolle</li>
              <li>Destabilisierung bestehender Machtstrukturen</li>
              <li>Ethische Dilemmata ohne klare Lösungen</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="flex">
            <Info size={20} className="text-blue-500 mr-2 flex-shrink-0" />
            <p className="text-sm">
              "Ich glaube nicht, dass KI die menschliche Natur kontrollieren wird; vielmehr wird die menschliche Natur die größte Kraft sein. Alles hängt davon ab, wie wir miteinander umgehen."
              <span className="block text-right mt-2">— Ray Dalio</span>
            </p>
          </div>
        </div>
      </div>
    </div>,

    // Folie 8: Kraft 6 - Demografie
    <div className="max-w-4xl mx-auto p-4" key="force6">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <UserPlus size={36} className="text-gray-600 mr-3" />
          <h1 className="text-3xl font-bold">Kraft 6: Demografie</h1>
        </div>
        <p className="text-lg mb-2">
          "Eine 'sehr, sehr schicksalhafte' Kraft"
        </p>
        <div className="h-1 w-24 bg-gray-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <UserPlus size={20} className="mr-2 text-gray-600" />
            Der "Silber-Tsunami"
          </h2>
          
          <p className="mb-4">
            Diese Kraft beschreibt demografische Verschiebungen, insbesondere die alternde Bevölkerung in vielen entwickelten Ländern. Sie spielt heute eine viel größere Rolle als je zuvor und wirkt der positiven Kraft der Technologie entgegen.
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Ein <strong>"Gegenwind"</strong> für wirtschaftliche Entwicklung</li>
            <li>Signifikanter Teil der Bevölkerung geht vom Arbeiten zum Bedürfen über</li>
            <li>Menschen werden zu "Konsumenten von Produktivität" statt Produzenten</li>
            <li>Die Frage ist, ob Innovationen rechtzeitig ein Produktivitätswunder schaffen</li>
            <li>Politische Realitäten verhindern oft eine Verlängerung der Arbeitsjahre</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp size={20} className="mr-2 text-gray-600" />
            Altersabhängigkeitsquotient
          </h2>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-sm mb-2 text-center">65+ pro 100 Personen im Erwerbsalter</h3>
            <div className="grid grid-cols-5 gap-2 mt-4">
              <div className="flex flex-col items-center">
                <div className="h-12 w-8 bg-gray-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">USA</span>
                <span className="text-xs font-bold">30</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-14 w-8 bg-gray-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">EU</span>
                <span className="text-xs font-bold">36</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-8 bg-gray-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">Japan</span>
                <span className="text-xs font-bold">48</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-9 w-8 bg-gray-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">China</span>
                <span className="text-xs font-bold">22</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-10 w-8 bg-gray-500 rounded-t-sm mb-1"></div>
                <span className="text-xs text-center">Global</span>
                <span className="text-xs font-bold">26</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="italic text-sm">
              "Diese Altersdemografie spielt heute eine viel größere Rolle als je zuvor und wird dies auch in Zukunft tun."
              <span className="block text-right mt-2">— Ray Dalio</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <AlertTriangle size={20} className="mr-2 text-gray-600" />
          Longevity und Produktivität
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              Die Verlängerung der Lebens- und Gesundheitsspanne steht in direktem Zusammenhang mit dieser Kraft. Die zentrale Frage ist, ob Menschen mit längeren, gesunden Leben weiterhin produktiv sein werden oder ob die zusätzlichen Jahre hauptsächlich Kosten verursachen.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
              <p className="text-sm">
                "Ein signifikanter Teil der Bevölkerung geht vom Arbeiten zum Bedürfen über. Die zentrale Frage ist, ob Innovationen ein Produktivitätswunder schaffen können, das demografische Faktoren überwindet."
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-bold text-sm mb-1">Optimistisches Szenario</h4>
                <p className="text-xs">
                  Menschen bleiben länger gesund und produktiv, arbeiten länger und tragen zur Wirtschaft bei, wodurch der demografische Druck gemildert wird.
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-bold text-sm mb-1">Pessimistisches Szenario</h4>
                <p className="text-xs">
                  Längere Leben erhöhen primär die Gesundheitskosten. Politische Realitäten verhindern eine Verlängerung der Arbeitsjahre, was die wirtschaftliche Last verstärkt.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-sm mb-1">Lösungsansätze</h4>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Technologische Produktivitätssteigerungen beschleunigen</li>
                <li>Längere Gesundheitsspannen fördern</li>
                <li>Realistische Ansätze für Arbeitsjahre entwickeln</li>
                <li>Anpassung der Sozialsysteme an demografische Realitäten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Folie 9: Aktuelle Lage
    <div className="max-w-4xl mx-auto p-4" key="current-situation">
      <h1 className="text-3xl font-bold mb-6 text-center">Die aktuelle Lage: Ein Wendepunkt</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Zusammenspiel der Kräfte heute</h2>
        <p className="mb-4">
          Ray Dalio sieht die aktuelle Situation als eine Übergangsphase, die von mehreren mächtigen Kräften angetrieben wird. Er beschreibt die gegenwärtige Lage als einen "Wendepunkt" und "Entscheidungspunkt".
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <ForceCard icon={Coins} title="Schulden & Wirtschaft" color="border-blue-500">
            ~65-70% im Wirtschaftszyklus, nahe an einer Rezession. Drohender Zusammenbruch der monetären Ordnung. Nicht nachhaltiges Schuldenwachstum führt zu finanziellen Schwierigkeiten.
          </ForceCard>
          
          <ForceCard icon={Users} title="Interne Konflikte" color="border-red-500">
            "Bürgerkrieg" mit größter Kluft zwischen politischen Lagern seit 1900. Wachsende Unterschiede in Wohlstand und Werten, verstärkt durch Globalisierung und Technologie.
          </ForceCard>
          
          <ForceCard icon={Globe} title="Weltordnung" color="border-green-500">
            Übergang von multilateraler zu unilateraler "Macht ist Recht"-Umgebung. Technologie-Krieg zwischen USA und China mit Aufbau paralleler technologischer Universen.
          </ForceCard>
          
          <ForceCard icon={CloudLightning} title="Naturereignisse" color="border-purple-500">
            "Jetzt eine große Sache", einschließlich Pandemien und Klimafragen, die als weitere "Gegenwinde" wirken.
          </ForceCard>
          
          <ForceCard icon={Lightbulb} title="Technologie" color="border-yellow-500">
            Gewaltige, revolutionäre Kraft, die in den nächsten Jahren den "größten Einfluss in der Geschichte" haben wird. Ein "Rückenwind" für Produktivität, aber auch ein "zweischneidiges Schwert".
          </ForceCard>
          
          <ForceCard icon={UserPlus} title="Demografie" color="border-gray-500">
            Spielt heute eine viel größere Rolle als je zuvor. Ein "Gegenwind", da mehr Menschen vom Arbeiten zum Bedürfen übergehen.
          </ForceCard>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Gesamteinschätzung</h2>
        <p className="mb-4">
          Dalio sieht in den nächsten 1-5 Jahren einen wahrscheinlichen Wirtschaftsabschwung und Bärenmarkt. Das wichtigste unmittelbare Problem ist die Budgetfrage, da der Anleihenmarkt das Fundament aller Märkte ist.
        </p>
        <p className="mb-4">
          Obwohl die Technologie einen starken "Rückenwind" bietet, sind die kombinierten "Gegenwinde" aus Schulden, Konflikten, Klima und Demografie erheblich. Es ist ungewiss, ob die Technologie diese rechtzeitig überwinden kann.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="italic">
            "Die Welt wird in den nächsten fünf Jahren vollkommen anders sein. Was mir dabei am meisten Sorgen bereitet, ist, wie Menschen miteinander umgehen."
            <span className="block text-right mt-2">— Ray Dalio</span>
          </p>
        </div>
      </div>
    </div>,

    // Folie 10: Konkrete Handlungsanweisungen
    <div className="max-w-4xl mx-auto p-4" key="actions">
      <h1 className="text-3xl font-bold mb-6 text-center">Konkrete Handlungsanweisungen</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">5 konkrete Schritte für heute</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
            <div className="ml-4">
              <h3 className="font-bold">Persönliche Schulden reduzieren und Notfallreserven aufbauen</h3>
              <p className="text-sm mt-1">
                Da wir uns laut Dalio etwa bei 65-70% des aktuellen Wirtschaftszyklus befinden und eine Rezession oder Schlimmeres bevorsteht, ist jetzt die Zeit, persönliche Verschuldung zu reduzieren und Liquiditätsreserven für mindestens 6-12 Monate aufzubauen.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
            <div className="ml-4">
              <h3 className="font-bold">Portfolio diversifizieren mit "Anti-Money"-Komponente</h3>
              <p className="text-sm mt-1">
                10-15% des Portfolios in Gold oder andere "Anti-Money"-Anlagen investieren, um sich gegen währungsbasierte Risiken abzusichern. Dabei auf Diversifikation achten und nicht alles auf eine Karte setzen.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
            <div className="ml-4">
              <h3 className="font-bold">In zukunftssichere Fähigkeiten und Bildung investieren</h3>
              <p className="text-sm mt-1">
                Angesichts der beschleunigten Entwicklung von KI und Technologie kontinuierlich in eigene Bildung und die Entwicklung von Fähigkeiten investieren, die komplementär zu Technologie sind und nicht leicht automatisiert werden können.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
            <div className="ml-4">
              <h3 className="font-bold">Gemeinschaftsnetzwerke stärken und Polarisierung überwinden</h3>
              <p className="text-sm mt-1">
                Da Dalio die menschliche Harmonie und Gemeinschaft als wichtigsten Faktor für Wohlbefinden identifiziert, bewusst in soziale Netzwerke und Beziehungen investieren. Brücken über politische und soziale Gräben bauen.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">5</div>
            <div className="ml-4">
              <h3 className="font-bold">Resilienz in allen Lebensbereichen aufbauen</h3>
              <p className="text-sm mt-1">
                Angesichts der vielschichtigen Herausforderungen (Wirtschaft, Politik, Technologie, Klima) systematisch Resilienz in verschiedenen Lebensbereichen aufbauen: finanziell, beruflich, gesundheitlich und sozial.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <Target size={20} className="mr-2 text-blue-500" />
            Für Unternehmer
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Nicht zu viel Schulden aufnehmen</li>
            <li>Realistische Wachstumspläne entwickeln</li>
            <li>Partnerschaften mit Investoren pflegen</li>
            <li>In Charakter und Beziehungen investieren</li>
            <li>"Don't die"-Mantra: Abschwünge überleben</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <TrendingUp size={20} className="mr-2 text-blue-500" />
            Für Investoren
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Diversifikation als Schlüsselstrategie</li>
            <li>10-15% in "Anti-Money" Anlagen (Gold, Bitcoin)</li>
            <li>Mit Unsicherheit umgehen lernen</li>
            <li>Auf steigende Volatilität vorbereitet sein</li>
            <li>Langfristige Zyklen in der Strategie berücksichtigen</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3 flex items-center">
            <Users size={20} className="mr-2 text-blue-500" />
            Für Entscheidungsträger
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Langfristige Schuldentrends umkehren</li>
            <li>Bildung fördern (Fähigkeiten + Zivilität)</li>
            <li>Gemeinsam an sozialen Problemen arbeiten</li>
            <li>Polarisierung aktiv bekämpfen</li>
            <li>Produktivitätssteigerungen gerecht verteilen</li>
          </ul>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Current Slide */}
        <div className="mb-8">
          {slides[currentSlide]}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${currentSlide === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            <ChevronLeft size={20} className="mr-1" />
            Zurück
          </button>
          
          <div className="flex space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${currentSlide === slides.length - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Weiter
            <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
        
        {/* Slide Info */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Folie {currentSlide + 1} von {slides.length}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
