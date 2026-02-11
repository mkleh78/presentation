import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wind, Brain, Heart, Activity, Clock, BookOpen } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const TitleSlide = () => (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">The Oxygen Advantage</h1>
      <h2 className="text-2xl mb-10">Von Patrick McKeown</h2>
      <div className="flex justify-center">
        <Wind size={100} className="text-blue-500" />
      </div>
      <p className="mt-8 text-xl italic">Atme besser, steigere deine Leistung und Gesundheit</p>
    </div>
  );

  const IntroductionSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Über das Buch</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            Patrick McKeown stellt in "The Oxygen Advantage" eine revolutionäre Atmungsmethode vor, 
            die auf einem überraschenden Prinzip basiert:
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
            <p className="font-semibold text-xl">Das Sauerstoffparadox</p>
            <p>Die Menge an Sauerstoff, die deine Muskeln, Organe und Gewebe nutzen können, 
            hängt nicht ausschließlich von der Sauerstoffmenge in deinem Blut ab.</p>
          </div>
          
          <p className="text-lg">
            Das Buch vermittelt Techniken, die deinen Körper trainieren, 
            Sauerstoff effizienter zu nutzen und dadurch Leistung, Gesundheit und Wohlbefinden zu verbessern.
          </p>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Zentrale Konzepte</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bohr-Effekt & CO₂-Bedeutung</li>
              <li>Body Oxygen Level Test (BOLT)</li>
              <li>Nasenatmung vs. Mundatmung</li>
              <li>Leichte Atmung ("Breathe Light")</li>
              <li>Simuliertes Höhentraining</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const ParadoxSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Das Sauerstoffparadox</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            Die meisten Menschen glauben, mehr Sauerstoff ist immer besser. Die Wahrheit ist überraschend anders:
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">Wichtige Fakten:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Unsere roten Blutkörperchen sind bereits zu 95-99% mit Sauerstoff gesättigt</li>
              <li>Tiefes Atmen bringt nicht mehr Sauerstoff zu den Zellen</li>
              <li>Der entscheidende Faktor ist <strong>Kohlendioxid (CO₂)</strong> im Blut</li>
              <li>CO₂ ermöglicht die Freisetzung von Sauerstoff aus dem Blut in die Gewebe (Bohr-Effekt)</li>
            </ul>
          </div>
          
          <p className="text-lg font-semibold">
            Überatmung reduziert CO₂ und verschlechtert paradoxerweise die Sauerstoffversorgung der Zellen!
          </p>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Optimale vs. Überatmung</h3>
            
            <div className="mb-4">
              <p className="font-medium mb-1 text-green-600">Optimale Atmung:</p>
              <p className="pl-4 mb-2">• Ruhig, kontrolliert, rhythmisch</p>
              <p className="pl-4 mb-2">• Ausreichend CO₂ im Blut</p>
              <p className="pl-4">• Effiziente O₂-Abgabe an Gewebe</p>
            </div>
            
            <div>
              <p className="font-medium mb-1 text-red-600">Überatmung:</p>
              <p className="pl-4 mb-2">• Schwer, intensiv, unregelmäßig</p>
              <p className="pl-4 mb-2">• Zu viel CO₂ wird ausgeatmet</p>
              <p className="pl-4">• Ineffiziente O₂-Nutzung</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Wind size={80} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );

  const BOLTSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Der Body Oxygen Level Test (BOLT)</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            Der BOLT-Test ist ein einfaches Werkzeug, um deine Atemeffizienz zu messen und Fortschritte zu verfolgen.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">So führst du den BOLT-Test durch:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Normaler Atemzug durch die Nase ein und aus</li>
              <li>Nach der Ausatmung: Nase zuhalten</li>
              <li>Zeit messen bis zum ersten deutlichen Atemreiz</li>
              <li>Bei ersten unwillkürlichen Atembewegungen stoppen</li>
              <li>Nase loslassen und normal weiteratmen</li>
            </ol>
          </div>
          
          <p className="text-lg">
            <strong>Wichtig:</strong> Es geht nicht darum, den Atem so lange wie möglich anzuhalten! 
            Stoppe bei den ersten Anzeichen des Atemreizes.
          </p>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">BOLT-Werte interpretieren</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1 text-red-600">Unter 20 Sekunden:</p>
                <p className="pl-4">Deutliche Überatmung, erhöhtes Risiko für Atemlosigkeit, Schlafprobleme, verstopfte Nase</p>
              </div>
              
              <div>
                <p className="font-medium mb-1 text-yellow-600">20-30 Sekunden:</p>
                <p className="pl-4">Moderate Atmung, Verbesserungspotential</p>
              </div>
              
              <div>
                <p className="font-medium mb-1 text-green-600">30-40 Sekunden:</p>
                <p className="pl-4">Gute Atmung, effiziente Sauerstoffnutzung</p>
              </div>
              
              <div>
                <p className="font-medium mb-1 text-green-700">40+ Sekunden:</p>
                <p className="pl-4">Optimaler Wert, exzellente Atemeffizienz</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Clock size={80} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
  
  const NoseBreathingSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Nasenatmung: Der Schlüssel zur Gesundheit</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            "Nasen sind zum Atmen, Münder zum Essen" - dieser einfache Grundsatz ist entscheidend für deine Gesundheit.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">Vorteile der Nasenatmung:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Filtert Staub und Krankheitserreger</li>
              <li>Wärmt und befeuchtet die Luft</li>
              <li>Fördert die Produktion von Stickstoffmonoxid (NO)</li>
              <li>NO erweitert Blutgefäße und Atemwege</li>
              <li>Verbessert die Sauerstoffaufnahme</li>
              <li>Unterstützt das Immunsystem</li>
              <li>Fördert korrekte Gesichtsentwicklung bei Kindern</li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Praktische Umsetzung</h3>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">Tagsüber:</p>
                <p className="pl-4">Bewusst durch die Nase atmen, auch beim Training</p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Nachts:</p>
                <p className="pl-4">Sicherstellen, dass du durch die Nase atmest, ggf. Mundpflaster verwenden</p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Bei verstopfter Nase:</p>
                <p className="pl-4">Nasenbefreiungsübung anwenden (kurzes Atemanhalten nach Ausatmen, bis leichter Luftmangel spürbar ist)</p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Bei Kindern:</p>
                <p className="pl-4">Früh zur Nasenatmung ermutigen, Mundatmung korrigieren</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="p-4 text-center">
              <p className="font-semibold text-lg text-blue-700 mb-2">Stickstoffmonoxid (NO)</p>
              <p>Wird nur durch Nasenatmung aufgenommen und ist ein entscheidender Faktor für Gefäßgesundheit und Blutdruck</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const BreatheLight = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Breathe Light to Breathe Right</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            "Breathe Light to Breathe Right" ist eine grundlegende Übung zur Wiederherstellung einer natürlichen, 
            effizienten Atmung.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">Anleitung:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Bequem sitzen oder liegen</li>
              <li>Klein, sanft und ruhig durch die Nase ein- und ausatmen</li>
              <li>Atemvolumen allmählich reduzieren, bis ein leichtes Gefühl von Luftmangel entsteht</li>
              <li>Dieses leichte Luftmangelgefühl 3-5 Minuten beibehalten</li>
              <li>Sich auf ruhige, kontrollierte Atmung konzentrieren</li>
              <li>Nach 3-5 Minuten: 1 Minute normal atmen, dann wiederholen</li>
            </ol>
          </div>
          
          <p className="text-lg">
            <strong>Ziel:</strong> Reduzierung des Atemvolumens und Erhöhung der CO₂-Toleranz
          </p>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Anzeichen erfolgreicher Übung</h3>
            
            <div className="space-y-3">
              <p className="pl-4">• Leichtes Wärmegefühl im Körper</p>
              <p className="pl-4">• Verstärkte Speichelproduktion</p>
              <p className="pl-4">• Leicht rosige Gesichtsfarbe</p>
              <p className="pl-4">• Entspannung und Ruhe</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-6 text-blue-700">Integration in den Alltag</h3>
            
            <div className="space-y-3">
              <p className="pl-4">• 15-20 Minuten täglich üben</p>
              <p className="pl-4">• Anfangs im Sitzen, später bei leichter Aktivität</p>
              <p className="pl-4">• Bei Stress oder Unruhe als Beruhigungstechnik einsetzen</p>
              <p className="pl-4">• Auf unnötige große Atemzüge und Seufzer achten</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const SimulatedAltitudeSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Simuliertes Höhentraining</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            Simuliertes Höhentraining bringt die Vorteile des Trainings in großer Höhe zu dir, 
            ohne dass du einen Berg besteigen musst.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">Vorteile:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Erhöht die Anzahl roter Blutkörperchen</li>
              <li>Verbessert die Sauerstofftransportkapazität</li>
              <li>Steigert die VO₂ max (max. Sauerstoffaufnahme)</li>
              <li>Reduziert Milchsäurebildung bei Anstrengung</li>
              <li>Verbessert die Ausdauer</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-semibold">Wichtiger Hinweis:</p>
            <p>Diese Übungen nur durchführen, wenn dein BOLT-Wert über 20 Sekunden liegt und 
            du keine gesundheitlichen Einschränkungen hast.</p>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Grundübung: Gehen mit Atemanhalten</h3>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>Normal durch die Nase ein- und ausatmen</li>
              <li>Nach einer normalen Ausatmung: Nase zuhalten</li>
              <li>Mit zugehaltener Nase weitergehen</li>
              <li>Solange gehen, bis ein deutliches (aber erträgliches) Luftmangelgefühl entsteht</li>
              <li>Nase loslassen und ruhig durch die Nase weiteratmen</li>
              <li>15-30 Sekunden normal atmen, dann wiederholen</li>
            </ol>
            
            <p className="mt-4 font-medium">Fortgeschrittenentechnik: "Sip of Air"</p>
            <p className="pl-4">Bei starkem Luftmangel: Nur einen kleinen "Schluck Luft" nehmen (ca. 10% eines normalen Atemzugs), um weiterzumachen</p>
          </div>
          
          <div className="flex justify-center">
            <Activity size={80} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
  
  const MentalFocusSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Mentaler Fokus: In die "Zone" kommen</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg mb-4">
            Die richtige Atmung kann dir helfen, einen Zustand optimaler Leistung und Konzentration zu erreichen – die "Zone".
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">Merkmale der "Zone":</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vollständige Konzentration auf die Aufgabe</li>
              <li>Präsenz im gegenwärtigen Moment</li>
              <li>Zustand tiefer Versunkenheit</li>
              <li>Optimale körperliche und mentale Leistung</li>
              <li>Ruhiger Geist, klare Gedanken</li>
            </ul>
          </div>
          
          <p className="text-lg">
            Deine Atmung ist ein mächtiges Werkzeug, um diesen Zustand willentlich zu erreichen.
          </p>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Atemlenkungstechnik</h3>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>In einer ruhigen Umgebung sitzen</li>
              <li>Auf die Atmung achten, ohne sie zu verändern</li>
              <li>Jeden Ein- und Ausatemzyklus bewusst verfolgen</li>
              <li>Gedanken beobachten, ohne an ihnen festzuhalten</li>
              <li>Bei Ablenkung sanft zum Atem zurückkehren</li>
              <li>Ein leichtes Gefühl von Luftmangel kann den Fokus verstärken</li>
            </ol>
            
            <p className="mt-4 font-medium">Regelmäßiges Üben:</p>
            <p className="pl-4">Diese Technik täglich für 10-15 Minuten üben, um die Fähigkeit zu entwickeln, willentlich in die "Zone" einzutreten</p>
          </div>
          
          <div className="flex justify-center">
            <Brain size={80} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
  
  const HealthSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Gesundheitliche Vorteile</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Herz-Kreislauf-Gesundheit</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verbesserte Sauerstoffversorgung des Herzens</li>
              <li>Stärkung der Herzmuskeln</li>
              <li>Regulation des Blutdrucks</li>
              <li>Erhöhte NO-Produktion erweitert Blutgefäße</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Atemwegsgesundheit</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reduzierung von Asthmasymptomen</li>
              <li>Linderung chronischer Atemwegserkrankungen</li>
              <li>Verbesserung der Lungenkapazität</li>
              <li>Weniger Husten und Keuchen</li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Gewichtsmanagement</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Appetitregulation</li>
              <li>Reduzierung von stressbedingtem Essen</li>
              <li>Verbesserter Stoffwechsel</li>
              <li>Unterstützung natürlicher Gewichtsabnahme</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Allgemeines Wohlbefinden</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bessere Schlafqualität</li>
              <li>Reduzierter Stress und Angst</li>
              <li>Erhöhte Energie und Vitalität</li>
              <li>Verbesserte mentale Klarheit</li>
              <li>Schnellere Erholung nach Anstrengung</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <Heart size={60} className="text-red-500 mr-8" />
        <Wind size={60} className="text-blue-500" />
      </div>
    </div>
  );
  
  const ImplementationSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Umsetzungsleitfaden</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-xl mb-2">1. Bestandsaufnahme</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>BOLT-Wert messen (morgens als Erstes)</li>
            <li>Aktuelle Atemgewohnheiten beobachten</li>
            <li>Symptome und Probleme notieren</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-xl mb-2">2. Grundlagen etablieren</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Konsequente Nasenatmung tags und nachts</li>
            <li>Bei Bedarf Mundpflaster für die Nacht</li>
            <li>Bei verstopfter Nase: Nasenbefreiungsübung</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-xl mb-2">3. Tägliche Übungsroutine</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>"Breathe Light" 15-20 Min/Tag praktizieren</li>
            <li>Bauchatmung üben und integrieren</li>
            <li>BOLT-Wert regelmäßig messen und protokollieren</li>
            <li>Atemaufmerksamkeit im Alltag steigern</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-xl mb-2">4. Trainingsintegration</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bei BOLT &gt; 20s: Simuliertes Höhentraining beginnen</li>
            <li>Trainingsintensität an Nasenatmung anpassen</li>
            <li>Auf Atemmuster während des Trainings achten</li>
            <li>Nach Training: Rückkehr zu ruhiger Nasenatmung</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-xl mb-2">5. Lebensstilintegration</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Stressreduktion durch bewusste Atmung</li>
            <li>Atmungsbewusstsein bei alltäglichen Aktivitäten</li>
            <li>Mentalen Fokus durch Atemtechniken stärken</li>
            <li>Bei Kindern: Früh auf Nasenatmung achten</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-xl mb-2">6. Langzeiterfolg sichern</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ziel: BOLT-Wert von 40 Sekunden</li>
            <li>Kontinuierlich Fortschritte überwachen</li>
            <li>Bei Verschlechterung: Zu Grundübungen zurückkehren</li>
            <li>Programm als dauerhafte Lebensstiländerung betrachten</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  const ApplicationSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Praktische Anwendungsbeispiele</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Für Ausdauersportler</h3>
          <p className="mb-3">Marathonläuferin Lisa, BOLT-Wert 18s</p>
          <div className="pl-4 space-y-2">
            <p><strong>Woche 1-2:</strong> Konsequente Nasenatmung, "Breathe Light" 15 Min/Tag</p>
            <p><strong>Woche 3-4:</strong> Training mit 20% reduzierter Intensität, reine Nasenatmung</p>
            <p><strong>Woche 5-8:</strong> Integration von Geh-Übungen mit Atemanhalten, Intensität langsam steigern</p>
            <p><strong>Ergebnis:</strong> BOLT-Wert 32s, weniger Atemnot, verbesserter Halbmarathon-Zeit</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Für Asthmatiker</h3>
          <p className="mb-3">Tom, 36, Anstrengungsasthma, BOLT-Wert 12s</p>
          <div className="pl-4 space-y-2">
            <p><strong>Woche 1-3:</strong> Nasenbefreiung, "Breathe Light" 4-6x täglich für je 5 Min</p>
            <p><strong>Woche 4-6:</strong> Mundpflaster nachts, leichte Spaziergänge mit Nasenatmung</p>
            <p><strong>Woche 7-12:</strong> "Breathe Light" während leichter Aktivität, BOLT steigt auf 25s</p>
            <p><strong>Ergebnis:</strong> 80% weniger Asthmasymptome, reduzierte Abhängigkeit vom Inhalator</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Für besseren Schlaf</h3>
          <p className="mb-3">Sarah, 42, Schlafprobleme, Schnarchen, BOLT-Wert 15s</p>
          <div className="pl-4 space-y-2">
            <p><strong>Woche 1-2:</strong> "Breathe Light" vor dem Schlafengehen, Mundpflaster</p>
            <p><strong>Woche 3-5:</strong> Fokus auf Bauchatmung tagsüber, weiterhin nächtliches Mundpflaster</p>
            <p><strong>Ergebnis:</strong> BOLT-Wert 28s, deutlich verbesserter Schlaf, kein Schnarchen mehr</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Für Gewichtsmanagement</h3>
          <p className="mb-3">Michael, 39, Gewichtsprobleme, BOLT-Wert 14s</p>
          <div className="pl-4 space-y-2">
            <p><strong>Woche 1-4:</strong> Konsequente Nasenatmung, "Breathe Light" bei Hungergefühl</p>
            <p><strong>Woche 5-8:</strong> Tägliches leichtes Gehen mit Atemanhalten, BOLT steigt auf 24s</p>
            <p><strong>Woche 9-12:</strong> Intensivierung der Übungen, reduziertes Verlangen nach Snacks</p>
            <p><strong>Ergebnis:</strong> 7kg Gewichtsverlust, mehr Energie, bessere Appetitregulation</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const SummarySlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Zusammenfassung: Die 5 Kernprinzipien</h2>
      
      <div className="flex flex-col space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Verständnis des Sauerstoffparadoxes</h3>
              <p>CO₂ ist entscheidend für die Sauerstoffabgabe aus dem Blut in die Gewebe (Bohr-Effekt). Weniger (aber richtig) atmen führt zu einer besseren Sauerstoffversorgung.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Konsequente Nasenatmung</h3>
              <p>Die Nase filtert, wärmt und befeuchtet die Luft, produziert Stickstoffmonoxid (NO) und fördert eine effizientere Sauerstoffnutzung. Strebe permanente Nasenatmung an.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Leichte, entspannte Atmung</h3>
              <p>"Breathe Light to Breathe Right" - Reduziere dein Atemvolumen, um die CO₂-Toleranz zu erhöhen und die Sauerstoffversorgung zu verbessern.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">BOLT-Test zur Fortschrittsmessung</h3>
              <p>Nutze den BOLT-Test regelmäßig, um deine Atemeffizienz zu messen und Fortschritte zu verfolgen. Ziel: 40 Sekunden.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">5</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Integration in den Lebensstil</h3>
              <p>Die Oxygen Advantage ist kein kurzfristiges Programm, sondern eine Lebensstiländerung. Integriere die Prinzipien in deinen Alltag für langfristige Gesundheit und Leistung.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const FinalSlide = () => (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Dein Weg zur optimalen Atmung</h2>
      
      <div className="flex justify-center mb-8">
        <Wind size={100} className="text-blue-500" />
      </div>
      
      <p className="text-xl mb-6">
        Erinnere dich an das wichtigste Prinzip des Buches:
      </p>
      
      <div className="bg-blue-100 p-6 rounded-lg mb-8 max-w-2xl">
        <p className="text-2xl italic">
          "Atme weniger, aber besser, um mehr Sauerstoff zu deinen Zellen zu bringen."
        </p>
      </div>
      
      <p className="text-xl">
        Beginne noch heute mit der ersten Übung und nimm die Kontrolle über deine Atmung in die Hand!
      </p>
    </div>
  );

  const ResourcesSlide = () => (
    <div className="h-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Weiterführende Ressourcen</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Bücher & Materialien</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The Oxygen Advantage</strong> - Patrick McKeown (Hauptbuch)</li>
              <li><strong>Buteyko Meets Dr. Mew</strong> - Für Kinder und Jugendliche</li>
              <li><strong>Close Your Mouth</strong> - Patrick McKeown (Einführung in Buteyko-Methode)</li>
              <li><strong>Breathe Light Online-Kurs</strong> - Oxygen Advantage Website</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Hilfsmittel</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mundpflaster</strong> für Nasenatmung während des Schlafs</li>
              <li><strong>Pulsoximeter</strong> für fortgeschrittenes Höhentraining</li>
              <li><strong>BOLT-Timer App</strong> zur einfachen Messung des BOLT-Werts</li>
              <li><strong>Atemtagebuch</strong> zur Fortschrittsdokumentation</li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Online-Ressourcen</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>OxygenAdvantage.com</strong> - Offizielle Website mit weiteren Informationen</li>
              <li><strong>YouTube-Kanal von Patrick McKeown</strong> - Demonstrationsvideos der Übungen</li>
              <li><strong>Oxygen Advantage App</strong> - Übungsprogramme und Fortschrittsverfolgung</li>
              <li><strong>Oxygen Advantage Trainer-Verzeichnis</strong> - Für persönliche Anleitung</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Wissenschaftliche Hintergründe</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Studien zum <strong>Bohr-Effekt</strong> und CO₂-Physiologie</li>
              <li>Forschung zu <strong>Nasenatmung und Stickstoffmonoxid</strong></li>
              <li>Studien zu <strong>Atmung und sportlicher Leistung</strong></li>
              <li>Wissenschaftliche Grundlagen des <strong>Buteyko-Ansatzes</strong></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <BookOpen size={60} className="text-blue-500" />
      </div>
    </div>
  );

  const slides = [
    <TitleSlide key="title" />,
    <IntroductionSlide key="intro" />,
    <ParadoxSlide key="paradox" />,
    <BOLTSlide key="bolt" />,
    <NoseBreathingSlide key="nose" />,
    <BreatheLight key="breathe-light" />,
    <SimulatedAltitudeSlide key="altitude" />,
    <MentalFocusSlide key="mental" />,
    <HealthSlide key="health" />,
    <ImplementationSlide key="implementation" />,
    <ApplicationSlide key="application" />,
    <ResourcesSlide key="resources" />,
    <SummarySlide key="summary" />,
    <FinalSlide key="final" />
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 flex flex-col p-8 overflow-auto">
        <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-lg p-8">
          {slides[currentSlide]}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentSlide === 0 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ChevronLeft size={20} className="mr-1" />
            Zurück
          </button>
          
          <div className="text-sm">
            Folie {currentSlide + 1} von {slides.length}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentSlide === slides.length - 1 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
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
