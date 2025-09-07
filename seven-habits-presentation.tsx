import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, Target, Clock, Handshake, Ear, Users, Zap } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  // Custom bullet component
  const Bullet = ({ children }) => (
    <div className="flex items-start mb-4">
      <div className="mr-2 mt-1 text-blue-500">•</div>
      <div>{children}</div>
    </div>
  );

  // Custom step component with number
  const Step = ({ number, title, children }) => (
    <div className="flex items-start mb-6">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3">
        {number}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );

  // Two column layout component
  const TwoColumn = ({ left, right }) => (
    <div className="flex flex-col md:flex-row mt-6 gap-6">
      <div className="flex-1">{left}</div>
      <div className="flex-1">{right}</div>
    </div>
  );

  // Habit card component
  const HabitCard = ({ number, title, icon, color, children }) => {
    const Icon = icon;
    return (
      <div className={`border-l-4 ${color} p-4 rounded shadow-md mb-4`}>
        <div className="flex items-center mb-2">
          <div className="mr-3">
            <Icon size={24} className={color.replace('border', 'text')} />
          </div>
          <h3 className="text-lg font-bold">{`Habit ${number}: ${title}`}</h3>
        </div>
        <div className="ml-9">{children}</div>
      </div>
    );
  };

  const slides = [
    // Slide 1: Title
    <div className="text-center" key="slide-1">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Die 7 Gewohnheiten höchst effektiver Menschen</h1>
      <h2 className="text-2xl text-gray-700 mb-12">Stephen R. Covey</h2>
      <div className="flex justify-center">
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Ein Leitfaden für persönliche und berufliche Effektivität durch prinzipienorientierte Führung
      </p>
    </div>,

    // Slide 2: Überblick
    <div key="slide-2">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Überblick: Die 7 Gewohnheiten</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">Private Siege</h3>
          <Bullet>Gewohnheit 1: Sei proaktiv</Bullet>
          <Bullet>Gewohnheit 2: Beginne mit dem Ende im Sinn</Bullet>
          <Bullet>Gewohnheit 3: Setze das Wichtigste zuerst</Bullet>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-700">Öffentliche Siege</h3>
          <Bullet>Gewohnheit 4: Denke Win-Win</Bullet>
          <Bullet>Gewohnheit 5: Suche erst zu verstehen, dann verstanden zu werden</Bullet>
          <Bullet>Gewohnheit 6: Schaffe Synergie</Bullet>
        </div>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-3 text-purple-700">Erneuerung</h3>
        <Bullet>Gewohnheit 7: Die Säge schärfen</Bullet>
      </div>
      
      <div className="mt-8 text-gray-700">
        <p>Die ersten drei Gewohnheiten führen von Abhängigkeit zu Unabhängigkeit (Private Siege).</p>
        <p>Die nächsten drei Gewohnheiten führen zur Interdependenz (Öffentliche Siege).</p>
        <p>Die siebte Gewohnheit ermöglicht die Erneuerung aller anderen Gewohnheiten.</p>
      </div>
    </div>,

    // Slide 3: Grundkonzepte
    <div key="slide-3">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Grundlegende Konzepte</h2>
      
      <TwoColumn 
        left={
          <>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">Charakterethik vs. Persönlichkeitsethik</h3>
              <p>Die <strong>Charakterethik</strong> basiert auf fundamentalen Prinzipien und Integrität, während die <strong>Persönlichkeitsethik</strong> auf äußeren Techniken und kurzfristigen Erfolgen basiert.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Paradigmen</h3>
              <p>Paradigmen sind unsere mentalen "Landkarten" - die Weise, wie wir die Welt sehen und interpretieren. Effektivität erfordert oft einen "Paradigmenwechsel".</p>
            </div>
          </>
        }
        right={
          <>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">P/PC-Balance</h3>
              <p>Die Balance zwischen <strong>Produktion</strong> (P) und <strong>Produktionskapazität</strong> (PC) - zwischen den "goldenen Eiern" und der "Gans, die sie legt".</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Reifegradkontinuum</h3>
              <p>Der Weg von <strong>Abhängigkeit</strong> über <strong>Unabhängigkeit</strong> zu <strong>Interdependenz</strong> - wahre Effektivität liegt in der Interdependenz.</p>
            </div>
          </>
        }
      />
    </div>,

    // Slide 4: Gewohnheit 1
    <div key="slide-4">
      <HabitCard number={1} title="Sei proaktiv®" icon={Zap} color="border-orange-500">
        <p className="mb-4">Übernimm Verantwortung für dein Leben und treffe bewusste Entscheidungen, anstatt reaktiv auf äußere Umstände zu reagieren.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <Step number={1} title="Erkenne deinen Einflussbereich">
          Unterscheide zwischen dem, was du beeinflussen kannst, und dem, worüber du keine Kontrolle hast. Konzentriere deine Energie auf deinen Einflussbereich.
        </Step>
        
        <Step number={2} title="Übernimm Verantwortung">
          Verwende proaktive Sprache ("Ich werde", "Ich kann") statt reaktiver Sprache ("Ich muss", "Wenn nur").
        </Step>
        
        <Step number={3} title="Handle nach Prinzipien">
          Basiere deine Entscheidungen auf Werten und Prinzipien statt auf Stimmungen oder Umständen.
        </Step>
        
        <div className="mt-6 p-4 bg-orange-50 rounded border-l-4 border-orange-400">
          <h4 className="font-semibold mb-2">Praktisches Beispiel:</h4>
          <p>Ein produktives Meeting wird durch negative Kommentare eines Kollegen gestört. <strong>Reaktiv:</strong> Sich ärgern und demotiviert werden. <strong>Proaktiv:</strong> Eigene Reaktion kontrollieren, die positiven Aspekte der Diskussion hervorheben und konstruktives Feedback anbieten.</p>
        </div>
      </div>
    </div>,

    // Slide 5: Gewohnheit 2
    <div key="slide-5">
      <HabitCard number={2} title="Beginne mit dem Ende im Sinn™" icon={Target} color="border-blue-500">
        <p className="mb-4">Definiere klar, was du erreichen möchtest, bevor du beginnst. Alles wird zweimal erschaffen: zuerst mental, dann physisch.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <Step number={1} title="Entwickle ein persönliches Leitbild">
          Definiere deine Werte, Ziele und die Art von Person, die du sein möchtest. Überlege, wie du in Erinnerung bleiben willst.
        </Step>
        
        <Step number={2} title="Identifiziere deine Rollen">
          Liste deine wichtigsten Rollen auf (z.B. Partner, Elternteil, Berufstätiger) und setze Ziele für jede Rolle.
        </Step>
        
        <Step number={3} title="Visualisiere Erfolg">
          Stelle dir den erfolgreichen Abschluss wichtiger Projekte und Ziele bildlich vor.
        </Step>
        
        <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
          <h4 className="font-semibold mb-2">Praktisches Beispiel:</h4>
          <p>Bei einem Projekt: Bevor du mit der Umsetzung beginnst, definiere klar das Endresultat. Was genau soll erreicht werden? Wie sieht Erfolg aus? Welche Qualitätskriterien müssen erfüllt sein? Diese Klarheit hilft dir, den effektivsten Weg zur Zielerreichung zu finden.</p>
        </div>
      </div>
    </div>,

    // Slide 6: Gewohnheit 3
    <div key="slide-6">
      <HabitCard number={3} title="Setze das Wichtigste zuerst™" icon={Clock} color="border-green-500">
        <p className="mb-4">Priorisiere und organisiere deine Zeit entsprechend deiner wichtigsten Prioritäten, nicht nach Dringlichkeit.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <Step number={1} title="Unterscheide zwischen wichtig und dringend">
          Nutze die Zeitmanagement-Matrix mit den vier Quadranten, und konzentriere dich auf Quadrant II: wichtig, aber nicht dringend.
        </Step>
        
        <Step number={2} title="Plane wöchentlich statt täglich">
          Beginne jede Woche mit einer Planung, die deine Rollen und wichtigsten Ziele berücksichtigt.
        </Step>
        
        <Step number={3} title="Lerne, &quot;Nein&quot; zu sagen">
          Entwickle die Fähigkeit, weniger wichtige Aktivitäten abzulehnen, um Zeit für das wirklich Wichtige zu haben.
        </Step>
        
        <div className="mt-6 p-4 bg-green-50 rounded border-l-4 border-green-400">
          <h4 className="font-semibold mb-2">Die Zeitmanagement-Matrix:</h4>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="p-3 bg-red-100 rounded">
              <strong>I: Dringend &amp; Wichtig</strong><br/>
              Krisen, drängende Probleme
            </div>
            <div className="p-3 bg-green-100 rounded">
              <strong>II: Wichtig, nicht dringend</strong><br/>
              Vorbeugung, Beziehungsaufbau, Planung
            </div>
            <div className="p-3 bg-yellow-100 rounded">
              <strong>III: Dringend, nicht wichtig</strong><br/>
              Unterbrechungen, manche Anrufe
            </div>
            <div className="p-3 bg-gray-100 rounded">
              <strong>IV: Weder dringend noch wichtig</strong><br/>
              Zeitverschwender, Trivialitäten
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 7: Gewohnheit 4
    <div key="slide-7">
      <HabitCard number={4} title="Denke Win-Win™" icon={Handshake} color="border-purple-500">
        <p className="mb-4">Strebe nach Lösungen, die für alle Beteiligten vorteilhaft sind. Dies erfordert gegenseitigen Respekt und das Bestreben nach beiderseitigem Nutzen.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <Step number={1} title="Entwickle eine Win-Win-Denkweise">
          Suche aktiv nach Lösungen, die für alle Beteiligten vorteilhaft sind, statt dich nur auf deinen eigenen Vorteil zu konzentrieren.
        </Step>
        
        <Step number={2} title="Baue Beziehungen auf (emotionales Bankkonto)">
          Investiere in Beziehungen durch Verständnis, kleine Aufmerksamkeiten, Einhalten von Versprechen und Loyalität.
        </Step>
        
        <Step number={3} title="Schaffe Win-Win-Vereinbarungen">
          Definiere klare Erwartungen, lege Ressourcen fest, bestimme Rechenschaftsmechanismen und vereinbare Konsequenzen.
        </Step>
        
        <div className="mt-6 p-4 bg-purple-50 rounded border-l-4 border-purple-400">
          <h4 className="font-semibold mb-2">Praktisches Beispiel:</h4>
          <p>In Verhandlungen mit Kunden oder Partnern: Anstatt nur auf den eigenen Vorteil zu achten, frage nach den Bedürfnissen und Zielen der anderen Partei. Suche nach kreativen Lösungen, die beiden Seiten einen Mehrwert bieten. Dies stärkt langfristige Beziehungen und schafft Vertrauen.</p>
        </div>
      </div>
    </div>,

    // Slide 8: Gewohnheit 5
    <div key="slide-8">
      <HabitCard number={5} title="Suche erst zu verstehen, dann verstanden zu werden™" icon={Ear} color="border-yellow-500">
        <p className="mb-4">Höre empathisch zu, um wirklich zu verstehen, bevor du versuchst, selbst verstanden zu werden. Dies baut Vertrauen auf und öffnet den Weg für effektive Kommunikation.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <Step number={1} title="Übe empathisches Zuhören">
          Höre mit der Absicht zu verstehen, nicht zu antworten. Stelle deine eigene "Autobiografie" (Erfahrungen, Urteile) zurück.
        </Step>
        
        <Step number={2} title="Spiegle Verständnis wider">
          Fasse das Gesagte in eigenen Worten zusammen, um sicherzustellen, dass du die andere Person richtig verstanden hast.
        </Step>
        
        <Step number={3} title="Diagnostiziere, bevor du verschreibst">
          Verstehe das Problem vollständig, bevor du Lösungen anbietest oder Ratschläge gibst.
        </Step>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
          <h4 className="font-semibold mb-2">Praktisches Beispiel:</h4>
          <p>Ein Teammitglied äußert Bedenken zu einem Projekt. Anstatt sofort zu erklären, warum die Bedenken unbegründet sind, höre aufmerksam zu, stelle Fragen, und wiederhole das Gehörte in eigenen Worten: "Ich verstehe, dass du Sorgen hast bezüglich... Habe ich das richtig erfasst?" Erst nachdem du die Perspektive des anderen wirklich verstanden hast, teile deine eigene Sichtweise mit.</p>
        </div>
      </div>
    </div>,

    // Slide 9: Gewohnheit 6
    <div key="slide-9">
      <HabitCard number={6} title="Schaffe Synergie™" icon={Users} color="border-red-500">
        <p className="mb-4">Nutze die Kraft der Zusammenarbeit, um bessere Lösungen zu finden, als jeder Einzelne allein hätte entwickeln können. Wertschätze Unterschiede statt sie als Bedrohung zu sehen.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <Step number={1} title="Wertschätze Unterschiede">
          Erkenne, dass verschiedene Perspektiven und Stärken eine Chance für Kreativität und Innovation bieten.
        </Step>
        
        <Step number={2} title="Suche nach der &quot;dritten Alternative&quot;">
          Strebe nicht nach Kompromissen (ich gebe etwas auf, du gibst etwas auf), sondern nach kreativen Lösungen, die besser sind als die ursprünglichen Vorschläge.
        </Step>
        
        <Step number={3} title="Schaffe eine vertrauensvolle Atmosphäre">
          Fördere Offenheit, Ehrlichkeit und gegenseitigen Respekt, um Synergie zu ermöglichen.
        </Step>
        
        <div className="mt-6 p-4 bg-red-50 rounded border-l-4 border-red-400">
          <h4 className="font-semibold mb-2">Praktisches Beispiel:</h4>
          <p>Bei unterschiedlichen Ansichten im Team: Anstatt einen Kompromiss zu suchen oder eine Meinung durchzusetzen, nutze die unterschiedlichen Perspektiven aktiv. Schaffe einen Raum, in dem alle ihre Ideen frei äußern können. Oft entstehen aus der Kombination verschiedener Ansätze innovative Lösungen, die besser sind als jeder Einzelvorschlag.</p>
        </div>
      </div>
    </div>,

    // Slide 10: Gewohnheit 7
    <div key="slide-10">
      <HabitCard number={7} title="Die Säge schärfen™" icon={BookOpen} color="border-teal-500">
        <p className="mb-4">Erneuere dich regelmäßig in allen Dimensionen: physisch, geistig, sozial/emotional und spirituell. Diese Balance ist entscheidend für nachhaltige Effektivität.</p>
      </HabitCard>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Umsetzung in die Praxis:</h3>
      
      <div className="bg-gray-50 p-5 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-blue-50 rounded">
            <h4 className="font-semibold mb-2">Physische Dimension</h4>
            <p>Regelmäßige Bewegung, ausgewogene Ernährung, ausreichend Schlaf und Entspannung.</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <h4 className="font-semibold mb-2">Mentale Dimension</h4>
            <p>Lesen, Lernen, Schreiben, systematisches Denken und kreative Aktivitäten.</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded">
            <h4 className="font-semibold mb-2">Sozial/emotionale Dimension</h4>
            <p>Beziehungen pflegen, Empathie üben, sinnvolle Verbindungen aufbauen.</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <h4 className="font-semibold mb-2">Spirituelle Dimension</h4>
            <p>Meditation, Reflexion, Werteklärung, Studium inspirierender Literatur.</p>
          </div>
        </div>
        
        <Step number={1} title="Plane Zeit für Erneuerung ein">
          Reserviere bewusst Zeit für alle vier Dimensionen in deinem wöchentlichen Plan (Quadrant II).
        </Step>
        
        <Step number={2} title="Schaffe Balance">
          Strebe nach einem Gleichgewicht zwischen den verschiedenen Dimensionen, vernachlässige keine.
        </Step>
        
        <div className="mt-6 p-4 bg-teal-50 rounded border-l-4 border-teal-400">
          <h4 className="font-semibold mb-2">Praktisches Beispiel:</h4>
          <p>Ein Manager, der sich nur auf die Arbeit konzentriert und andere Lebensbereiche vernachlässigt, wird langfristig an Effektivität verlieren. Plane konkrete Zeiten für Sport, Lernen, Familie und Reflexion. Ein "täglicher privater Sieg" könnte bedeuten, jeden Morgen 30 Minuten früher aufzustehen, um zu meditieren oder Sport zu treiben, bevor der Arbeitstag beginnt.</p>
        </div>
      </div>
    </div>,

    // Slide 11: Zusammenfassung und Integration
    <div key="slide-11">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Integration der 7 Gewohnheiten</h2>
      
      <div className="bg-gray-50 p-5 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Der Weg zur Effektivität</h3>
        <p className="mb-4">Die 7 Gewohnheiten bauen aufeinander auf und verstärken sich gegenseitig:</p>
        
        <div className="mb-6">
          <div className="p-3 bg-blue-50 rounded mb-3">
            <strong>Private Siege (1-3):</strong> Schaffen Unabhängigkeit und Selbstführung
          </div>
          <div className="p-3 bg-green-50 rounded mb-3">
            <strong>Öffentliche Siege (4-6):</strong> Ermöglichen effektive Interdependenz
          </div>
          <div className="p-3 bg-purple-50 rounded mb-3">
            <strong>Erneuerung (7):</strong> Erhält und verbessert alle anderen Gewohnheiten
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">5-Schritte-Plan zur Umsetzung</h3>
        
        <Step number={1} title="Selbstreflexion">
          Analysiere deine aktuellen Paradigmen und Gewohnheiten. Wo stehst du auf dem Weg von Abhängigkeit zur Interdependenz?
        </Step>
        
        <Step number={2} title="Persönliches Leitbild entwickeln">
          Definiere deine Werte, Vision und Mission als Grundlage für alle weiteren Schritte.
        </Step>
        
        <Step number={3} title="Wöchentliche Planung einführen">
          Implementiere eine Quadrant-II-Planung mit Fokus auf wichtige, nicht dringende Aktivitäten.
        </Step>
        
        <Step number={4} title="Beziehungen stärken">
          Investiere in emotionale Bankkonten durch empathisches Zuhören und Win-Win-Denken.
        </Step>
        
        <Step number={5} title="Kontinuierliche Erneuerung">
          Plane regelmäßige Zeit für Erneuerung in allen vier Dimensionen des Lebens.
        </Step>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-white p-6 max-w-5xl mx-auto">
      <div className="min-h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-grow mb-8">
          {slides[currentSlide]}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center border-t pt-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded ${currentSlide === 0 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'}`}
          >
            <ChevronLeft size={20} className="mr-1" />
            Zurück
          </button>
          
          <div className="text-gray-500">
            Folie {currentSlide + 1} von {slides.length}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded ${currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'}`}
          >
            Weiter
            <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;