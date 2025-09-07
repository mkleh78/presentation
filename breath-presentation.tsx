import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wind, ArrowRight } from 'lucide-react';

const BreathPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Definiere alle Folien
  const slides = [
    // Titelfolie
    {
      title: "BREATH",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">BREATH</h1>
          <h2 className="text-2xl mb-8">Die neue Wissenschaft der verlorenen Kunst des Atmens</h2>
          <p className="text-xl">nach James Nestor</p>
          <div className="mt-12 text-xl">Highlights & Umsetzungsleitfaden</div>
        </div>
      )
    },
    
    // Überblick
    {
      title: "Überblick",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Die Kunst des richtigen Atmens</h2>
          <p className="mb-6">Das Buch "Breath" von James Nestor erforscht, wie wir die Kunst des richtigen Atmens verlernt haben und welche Auswirkungen dies auf unsere Gesundheit hat.</p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-red-700">Probleme</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mundatmung</li>
                <li>Flaches, schnelles Atmen</li>
                <li>Unvollständige Ausatmung</li>
                <li>Unterentwicklung des Kiefers</li>
                <li>Stress und chronische Krankheiten</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-700">Lösungen</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Nasenatmung</li>
                <li>Bewusste, vollständige Ausatmung</li>
                <li>Langsames, tiefes Atmen</li>
                <li>Atemanhaltetechniken</li>
                <li>Bewusstes Kauen</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <p className="italic">
              "Die Atmung ist die Brücke zwischen unserem bewussten und unbewussten Geist, das einzige autonome körperliche System, das wir willentlich kontrollieren können."
            </p>
          </div>
        </div>
      )
    },
    
    // Nasenatmung vs. Mundatmung
    {
      title: "Die Nase vs. Der Mund",
      content: (
        <div className="h-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Kapitel 1-3: Die Bedeutung der Nasenatmung</h2>
            <p className="mb-2">Das 10-Tage-Experiment zeigt klar: Nasenatmung ist entscheidend für unsere Gesundheit.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-red-700 flex items-center">
                <span className="mr-2">👄</span> Mundatmung
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Erhöhung der Stresshormone</li>
                <li>Bakterielle Infektionen</li>
                <li>Verbindung zu Schlafapnoe, ADHS, Bluthochdruck</li>
                <li>Kein Filter für Schadstoffe</li>
                <li>Keine Regulation der Lufttemperatur</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-700 flex items-center">
                <span className="mr-2">👃</span> Nasenatmung
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Filtern, Erwärmen und Befeuchten der Luft</li>
                <li>Nasenturbinen konditionieren die Atemluft</li>
                <li>Abwechselnde Nasenzyklen</li>
                <li>Optimierte Sauerstoffaufnahme</li>
                <li>Unterstützt gesunde Gesichtsstruktur</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Praktische Umsetzung:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Beobachten Sie bewusst Ihre Atmung: durch Nase oder Mund?</li>
              <li>Üben Sie die Nasenatmung auch bei leichter Anstrengung</li>
              <li>Verwenden Sie bei Bedarf ein Nasenband/Tape während des Schlafs</li>
              <li>Befreien Sie verstopfte Nasenwege mit sanften Nasenspülungen</li>
              <li>Beobachten Sie Ihre Nasenzyklen und nutzen Sie sie bewusst</li>
            </ol>
          </div>
        </div>
      )
    },
    
    // Die Ausatmung
    {
      title: "Die Kraft der Ausatmung",
      content: (
        <div className="h-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Kapitel 4-6: Die entscheidende Rolle der Ausatmung</h2>
            <p>Die vollständige Ausatmung ist der Schlüssel zu einer optimalen Atmung und Gesundheit.</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Carl Stough's Entdeckungen:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Behandlung von Emphysem-Patienten durch fokussierte Ausatmung</li>
              <li>Verbesserte Leistung von Olympischen Sprintern</li>
              <li>"Breathing Coordination" - Optimierung der Zwerchfellbewegung</li>
              <li>Vollständige Ausatmung verbessert die nachfolgende Einatmung</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Warum ist die Ausatmung so wichtig?</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="bg-white p-3 rounded-lg text-sm">
                <p className="font-bold mb-1">Zwerchfellaktivierung</p>
                <p>Verbessert die Funktion des wichtigsten Atemmuskels</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-sm">
                <p className="font-bold mb-1">CO₂-Balance</p>
                <p>Reguliert den optimalen Kohlendioxidgehalt</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-sm">
                <p className="font-bold mb-1">Parasympathikus</p>
                <p>Aktiviert den Entspannungszustand im Nervensystem</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-sm">
                <p className="font-bold mb-1">Lungenreinigung</p>
                <p>Entfernt verbrauchte Luft aus den Lungenbläschen</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Praktische Übung: Counting Exhalation</h3>
            <ol className="list-decimal pl-5 text-sm space-y-1">
              <li>Aufrecht sitzen, Augen schließen</li>
              <li>Sanft durch die Nase einatmen (ca. 4 Sekunden)</li>
              <li>Beim Ausatmen leise von 1-10 zählen</li>
              <li>Allmählich zum Flüstern übergehen</li>
              <li>Vollständig ausatmen, bis sich die Lungen leer anfühlen</li>
              <li>Wiederholen Sie diesen Zyklus 5-10 Mal</li>
            </ol>
          </div>
        </div>
      )
    },
    
    // Die Rolle des Kauens
    {
      title: "Die Rolle des Kauens",
      content: (
        <div className="h-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Kapitel 7: Kauen und Atemwegsgesundheit</h2>
            <p>Die Entwicklung unseres Gesichts und unserer Atemwege wird stark vom Kauen beeinflusst.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold mb-2 text-red-700">Das Problem:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Moderne weiche, verarbeitete Nahrung</li>
                  <li>Weniger Kaubewegungen notwendig</li>
                  <li>Unterentwicklung der Kiefer</li>
                  <li>Verengte Atemwege</li>
                  <li>Führt zu Zahnfehlstellungen und Mundatmung</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-green-700">Empfohlene Nahrung:</h3>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                  <div className="bg-white p-2 rounded-lg">Rohes Gemüse</div>
                  <div className="bg-white p-2 rounded-lg">Nüsse & Samen</div>
                  <div className="bg-white p-2 rounded-lg">Hartes Obst</div>
                  <div className="bg-white p-2 rounded-lg">Vollkornbrot</div>
                  <div className="bg-white p-2 rounded-lg">Trockenfleisch</div>
                  <div className="bg-white p-2 rounded-lg">Natürliches Kaugummi</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold mb-2">Der Zusammenhang:</h3>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-2">
                    <span className="text-xl">🦷</span>
                  </div>
                  <div className="text-center font-bold mb-1">Intensives Kauen</div>
                  <div className="text-2xl mb-1">↓</div>
                  <div className="bg-green-100 p-3 rounded-full mb-2">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div className="text-center font-bold mb-1">Knochenaufbau im Gesicht</div>
                  <div className="text-2xl mb-1">↓</div>
                  <div className="bg-blue-100 p-3 rounded-full mb-2">
                    <span className="text-xl">👃</span>
                  </div>
                  <div className="text-center font-bold">Offene Atemwege</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Praktische Umsetzung:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Führen Sie ein "Kau-Tagebuch" - wie oft und wie lange kauen Sie wirklich?</li>
              <li>Nehmen Sie sich Zeit zum Essen und kauen Sie jeden Bissen mindestens 20-30 Mal</li>
              <li>Integrieren Sie täglich harte, natürliche Nahrungsmittel in Ihre Ernährung</li>
              <li>Bei Kindern: Fördern Sie frühzeitig kauintensive Nahrung</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Atemtechniken
    {
      title: "Intensive Atemtechniken",
      content: (
        <div className="h-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Kapitel 8-10: Fortgeschrittene Atemtechniken</h2>
            <p>Diese "Breathing+" Techniken sind kraftvolle Werkzeuge, jedoch nur für gelegentliche Anwendung gedacht.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-center mb-2">
                <Wind size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold mb-2 text-center">Wim-Hof-Methode</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>30 tiefe Atemzüge</li>
                <li>Vollständig ausatmen</li>
                <li>Atem anhalten</li>
                <li>Tief einatmen & 15s halten</li>
                <li>3+ Runden wiederholen</li>
              </ul>
              <p className="text-xs mt-2 text-center text-gray-600">Aktiviert sympathisches Nervensystem</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-center mb-2">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-bold mb-2 text-center">Tummo-Meditation</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Visualisierung innerer Wärme</li>
                <li>Kraftvolles Atmen</li>
                <li>Atemanhalten mit Muskelkontraktionen</li>
                <li>Freisetzung "inneren Feuers"</li>
                <li>Zyklisch wiederholen</li>
              </ul>
              <p className="text-xs mt-2 text-center text-gray-600">Steigert Körpertemperatur und Immunsystem</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-center mb-2">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="font-bold mb-2 text-center">Bewusste Apnoe</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Ruhig einatmen</li>
                <li>Nach Ausatmung Atem anhalten</li>
                <li>Toleranz langsam steigern</li>
                <li>Bei Angst: kurze Apnoe statt tiefer Atmung</li>
                <li>CO₂-Toleranz trainieren</li>
              </ul>
              <p className="text-xs mt-2 text-center text-gray-600">Stabilisiert Nervensystem, reduziert Angst</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Wichtige Hinweise:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Diese Techniken sind <strong>nicht für den täglichen Gebrauch</strong> gedacht</li>
              <li>Beginnen Sie vorsichtig und steigern Sie langsam</li>
              <li>Mögliche Reaktionen: Schwindel, Kribbeln, intensive Emotionen</li>
              <li>Nicht während des Autofahrens oder in ähnlichen Situationen praktizieren</li>
              <li>Bei bestehenden Gesundheitsproblemen vorher mit Arzt konsultieren</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // 7-Tage Umsetzungsplan
    {
      title: "7-Tage Umsetzungsplan",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Ihr Weg zu besserer Atmung</h2>
          
          <div className="grid grid-cols-7 gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div key={day} className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                <h3 className="font-bold text-center">Tag 1</h3>
                <div className="flex justify-center my-2">
                  <span className="text-2xl">👃</span>
                </div>
                <p className="text-xs text-center">Bewusste Nasenatmung</p>
              </div>
              <div className="col-span-6 bg-gray-50 p-3 rounded-lg flex items-center">
                <div>
                  <p className="font-bold mb-1">Bewusstsein für Ihre Atmung schaffen</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Stündliche Erinnerung einstellen: "Atme ich durch die Nase?"</li>
                    <li>Beobachten Sie Ihre Atmung in verschiedenen Situationen</li>
                    <li>Üben Sie sanftes Naseneinatmen für 4 Sekunden, Ausatmen für 6 Sekunden</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                <h3 className="font-bold text-center">Tag 2-3</h3>
                <div className="flex justify-center my-2">
                  <Wind size={24} className="text-blue-600" />
                </div>
                <p className="text-xs text-center">Ausatmung verlängern</p>
              </div>
              <div className="col-span-6 bg-gray-50 p-3 rounded-lg flex items-center">
                <div>
                  <p className="font-bold mb-1">Die Ausatmung meistern</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Üben Sie die 4-6-8-Methode: 4s einatmen, 6s halten, 8s ausatmen</li>
                    <li>Counting Exhalation: beim Ausatmen von 1-10 zählen</li>
                    <li>Achten Sie auf die vollständige Entleerung der Lungen</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                <h3 className="font-bold text-center">Tag 4-5</h3>
                <div className="flex justify-center my-2">
                  <span className="text-2xl">⏱️</span>
                </div>
                <p className="text-xs text-center">Atemanhalten & Zwerchfell</p>
              </div>
              <div className="col-span-6 bg-gray-50 p-3 rounded-lg flex items-center">
                <div>
                  <p className="font-bold mb-1">Kapazität erweitern</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Üben Sie kurze Atemanhaltungen nach der Ausatmung (5-10 Sekunden)</li>
                    <li>Zwerchfellatmung: Hand auf Bauch legen, beim Einatmen heben</li>
                    <li>Die Atmung in stressigen Situationen bewusst verlangsamen</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                <h3 className="font-bold text-center">Tag 6-7</h3>
                <div className="flex justify-center my-2">
                  <span className="text-2xl">🫁</span>
                </div>
                <p className="text-xs text-center">Integration & Fortgeschrittenes</p>
              </div>
              <div className="col-span-6 bg-gray-50 p-3 rounded-lg flex items-center">
                <div>
                  <p className="font-bold mb-1">Alles zusammenbringen</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Tägliche Routine etablieren: 5-10 Minuten bewusstes Atmen</li>
                    <li>Optional: Erste Erfahrung mit der Wim-Hof-Methode (1 Runde)</li>
                    <li>Beginnen Sie, die Atmung beim Sport zu kontrollieren</li>
                    <li>Bewusstes Kauen bei jeder Mahlzeit praktizieren</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-center">Tägliche Mini-Praxis: 4-2-6</h3>
            <p className="text-sm text-center mb-3">Wenden Sie diese einfache Atemübung mehrmals täglich an:</p>
            <div className="flex justify-around">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">4</div>
                <p className="mt-1 text-xs">Einatmen (4s)</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">2</div>
                <p className="mt-1 text-xs">Halten (2s)</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">6</div>
                <p className="mt-1 text-xs">Ausatmen (6s)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Zusammenfassung
    {
      title: "Zusammenfassung",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Die wichtigsten Erkenntnisse</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Kernprinzipien</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Durch die Nase atmen</strong> - Sie ist ein hochentwickeltes Filtrations- und Befeuchtungssystem</li>
                <li><strong>Vollständig ausatmen</strong> - Die Entleerung der Lungen ist der Schlüssel zur optimalen Sauerstoffaufnahme</li>
                <li><strong>Langsamer atmen</strong> - 5-6 Atemzüge pro Minute ist ideal</li>
                <li><strong>CO₂-Toleranz erhöhen</strong> - Bewusstes Atemanhalten trainiert das Nervensystem</li>
                <li><strong>Bewusst kauen</strong> - Entwickelt gesunde Atemwege</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Gesundheitliche Vorteile</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Stressreduktion</strong> - Aktivierung des parasympathischen Nervensystems</li>
                <li><strong>Bessere Sauerstoffversorgung</strong> - Optimierte Atmungseffizienz</li>
                <li><strong>Stärkeres Immunsystem</strong> - Verringerung von Infektionen</li>
                <li><strong>Verbesserter Schlaf</strong> - Reduzierung von Schlafapnoe und Schnarchen</li>
                <li><strong>Mehr Energie</strong> - Effizientere Zellfunktion</li>
                <li><strong>Emotionale Ausgeglichenheit</strong> - Bessere Emotionsregulation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-center">Ihr nächster Schritt: Die 3-3-3 Methode</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-xl mb-1">3</div>
                <p className="text-sm">Bewusste Atemübungen</p>
                <p className="text-xs text-gray-600 mt-1">3 mal täglich je 3 Minuten</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-xl mb-1">3</div>
                <p className="text-sm">Kernprinzipien anwenden</p>
                <p className="text-xs text-gray-600 mt-1">In 3 verschiedenen Situationen</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-xl mb-1">3</div>
                <p className="text-sm">Wochen konsequent üben</p>
                <p className="text-xs text-gray-600 mt-1">Für nachhaltige Veränderung</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="italic">"Ändern Sie Ihre Atmung, und Sie ändern Ihr Leben."</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">BREATH - Die Kunst des richtigen Atmens</h1>
        <p className="text-sm">Highlights & Umsetzungsleitfaden nach James Nestor</p>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-4xl">
          <h2 className="text-xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <div className="h-full">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="p-4 bg-white border-t flex justify-between items-center">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={`flex items-center ${currentSlide === 0 ? 'text-gray-300' : 'text-blue-600'} px-4 py-2 rounded-lg hover:bg-blue-50`}
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Vorherige</span>
        </button>
        
        <div className="text-gray-600 font-medium">
          Folie {currentSlide + 1} von {slides.length}
        </div>
        
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center ${currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-blue-600'} px-4 py-2 rounded-lg hover:bg-blue-50`}
        >
          <span className="mr-1">Nächste</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BreathPresentation;