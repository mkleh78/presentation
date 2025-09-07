import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckSquare, Clock, Award } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Define all slides content
  const slides = [
    // Slide 1: Title
    {
      title: "Slow Productivity",
      subtitle: "Der Weg zu nachhaltiger Wissensarbeit",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">Slow Productivity</h1>
          <h2 className="text-2xl mb-8 text-gray-600">Der Weg zu nachhaltiger Wissensarbeit</h2>
          <p className="text-center text-gray-500 mt-8">
            Basierend auf dem Buch von Cal Newport
          </p>
        </div>
      )
    },
    
    // Slide 2: Problem - Pseudo-Produktivität
    {
      title: "Das Problem: Pseudo-Produktivität",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-red-600">Das Problem: Pseudo-Produktivität</h2>
          
          <div className="flex flex-col space-y-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-bold">Definition:</p>
              <p>Die <span className="italic">Nutzung sichtbarer Aktivität als primäres Mittel zur Annäherung an tatsächliche produktive Arbeit</span></p>
            </div>
            
            <p className="font-semibold">Probleme der Pseudo-Produktivität:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ständige Überlastung, Hektik und Erschöpfung</li>
              <li>Fokus auf Aktivität statt auf bedeutsame Ergebnisse</li>
              <li>Permanente Erreichbarkeit durch moderne Kommunikationsmittel</li>
              <li>Keine nachhaltige Arbeitsweise für Wissensarbeiter</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg mt-auto">
            <p className="italic">"Ein Beispiel für Pseudo-Produktivität ist der CBS-Manager, der von seinen Mitarbeitern verlangte, mehr zu arbeiten, um die Leistung zu verbessern - ohne zu definieren, was 'mehr Arbeit' eigentlich bedeutet."</p>
          </div>
        </div>
      )
    },
    
    // Slide 3: Die drei Prinzipien der Slow Productivity
    {
      title: "Die drei Prinzipien der Slow Productivity",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Die drei Prinzipien der Slow Productivity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500 flex flex-col">
              <div className="flex items-center mb-4">
                <CheckSquare className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-bold">1. Do Fewer Things</h3>
              </div>
              <p>Weniger tun, um mehr zu erreichen und die Wirksamkeit der Arbeitszeit zu erhöhen</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500 flex flex-col">
              <div className="flex items-center mb-4">
                <Clock className="text-green-600 mr-2" size={24} />
                <h3 className="text-xl font-bold">2. Work at a Natural Pace</h3>
              </div>
              <p>In einem natürlichen, nachhaltigen Rhythmus arbeiten, der besser zur menschlichen Natur passt</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500 flex flex-col">
              <div className="flex items-center mb-4">
                <Award className="text-purple-600 mr-2" size={24} />
                <h3 className="text-xl font-bold">3. Obsess Over Quality</h3>
              </div>
              <p>Eine Besessenheit für Qualität entwickeln, die Langsamkeit zu einem notwendigen Gebot macht</p>
            </div>
          </div>
          
          <p className="italic text-gray-600 mt-6">
            "Diese drei Prinzipien bilden zusammen den Kern der Slow Productivity: eine nachhaltige Alternative zur Pseudo-Produktivität"
          </p>
        </div>
      )
    },
    
    // Slide 4: Prinzip 1 - Do Fewer Things
    {
      title: "Prinzip 1: Do Fewer Things",
      content: (
        <div className="h-full flex flex-col">
          <div className="flex items-center mb-6">
            <CheckSquare className="text-blue-600 mr-2" size={28} />
            <h2 className="text-2xl font-bold text-blue-600">Prinzip 1: Do Fewer Things</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <div>
              <h3 className="text-lg font-bold mb-3">Kerngedanken:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Weniger tun ≠ weniger erreichen</li>
                <li>Fokus auf weniger Aufgaben erhöht die Qualität</li>
                <li>Vermeidet den "Overhead Tax" durch Kontextwechsel</li>
                <li>Schafft Raum für Konzentration und Kreativität</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
                <p className="italic">Beispiel: Jane Austen schuf ihre besten Werke, nachdem sie ein einfacheres Leben in Chawton Cottage führte und sich auf das Schreiben konzentrieren konnte.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Umsetzungsstrategien:</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Limit the Big</p>
                  <p>Konzentrieren Sie sich auf eine große Initiative pro Tag</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Contain the Small</p>
                  <p>Entwickeln Sie Routinen für wiederkehrende kleine Aufgaben</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Pull Instead of Push</p>
                  <p>Simulieren Sie ein "Pull-System" für Ihre Aufgaben</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: Do Fewer Things - Praxisbeispiel
    {
      title: "Do Fewer Things - Praxisbeispiel",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Do Fewer Things - Praxisbeispiel</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <h3 className="text-xl font-bold mb-4">Das "Active List" System</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">1. Holding Tank</h4>
                <div className="bg-white p-3 rounded border border-gray-300 h-40">
                  <p className="font-bold text-sm mb-2">Alle zugewiesenen Projekte:</p>
                  <ul className="text-sm space-y-1 pl-4 list-disc">
                    <li>Jahresbericht erstellen</li>
                    <li>Neue Marketingstrategie entwickeln</li>
                    <li>Teambuilding organisieren</li>
                    <li>Website überarbeiten</li>
                    <li>Konferenzpräsentation vorbereiten</li>
                    <li>Kundenfeedback analysieren</li>
                    <li>Software-Update planen</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">2. Active List</h4>
                <div className="bg-white p-3 rounded border border-gray-300 h-40">
                  <p className="font-bold text-sm mb-2">Aktuelle Arbeitskapazität (max. 3):</p>
                  <ul className="text-sm space-y-1 pl-4 list-disc">
                    <li className="font-semibold text-blue-600">Jahresbericht erstellen</li>
                    <li className="font-semibold text-blue-600">Neue Marketingstrategie entwickeln</li>
                    <li className="font-semibold text-blue-600">Website überarbeiten</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-sm italic">Erst wenn ein Projekt von der Active List abgeschlossen ist, wird ein neues vom Holding Tank gezogen!</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Umsetzungstipps:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Definieren Sie eine maximale Anzahl an gleichzeitigen aktiven Projekten (z.B. 3)</li>
              <li>Kommunizieren Sie Ihre Kapazitätsgrenzen klar an Kollegen und Vorgesetzte</li>
              <li>Führen Sie regelmäßige Reviews Ihrer Listen durch</li>
              <li>Neue Projekte erst starten, wenn bestehende abgeschlossen sind</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 6: Prinzip 2 - Work at a Natural Pace
    {
      title: "Prinzip 2: Work at a Natural Pace",
      content: (
        <div className="h-full flex flex-col">
          <div className="flex items-center mb-6">
            <Clock className="text-green-600 mr-2" size={28} />
            <h2 className="text-2xl font-bold text-green-600">Prinzip 2: Work at a Natural Pace</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <div>
              <h3 className="text-lg font-bold mb-3">Kerngedanken:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ununterbrochene, intensive Arbeit ist nicht natürlich</li>
                <li>Historische Wissenschaftler wie Newton arbeiteten in ungleichmäßigen Rhythmen</li>
                <li>Langsamerer, abwechslungsreicherer Arbeitsrhythmus ist nachhaltiger</li>
                <li>Arbeit sollte Teil eines erfüllten Lebens sein, nicht ein Hindernis dafür</li>
              </ul>
              
              <div className="bg-green-50 p-4 rounded-lg mt-4 border-l-4 border-green-500">
                <p className="italic">Ein natürlicheres Arbeitstempo ist eine bewusste Entscheidung für Nachhaltigkeit, Wohlbefinden und langfristig bessere Ergebnisse.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Umsetzungsstrategien:</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Take Longer on Important Projects</p>
                  <p>Verlängern Sie bewusst Zeitpläne für bedeutende Projekte</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Simplify Your Workday</p>
                  <p>Reduzieren Sie tägliche Verpflichtungen und planen Sie Pausen ein</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Schedule Slow Seasons</p>
                  <p>Integrieren Sie Perioden geringerer Intensität in Ihren Jahresplan</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Embrace Shorter Work Rhythms</p>
                  <p>Wechseln Sie zwischen intensiver Arbeit und Ruhephasen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 7: Work at a Natural Pace - Praxisbeispiel
    {
      title: "Work at a Natural Pace - Praxisbeispiel",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-green-600">Work at a Natural Pace - Praxisbeispiel</h2>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-bold mb-4">Der "Natürliche Arbeitsrhythmus"-Tagesplan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-gray-300">
                <h4 className="font-bold mb-2 text-green-700">Morgen</h4>
                <ul className="text-sm space-y-2">
                  <li><span className="font-bold">8:30-10:30:</span> Tiefenarbeit Phase (2h)</li>
                  <li><span className="font-bold">10:30-11:00:</span> Pause & Bewegung (30min)</li>
                  <li><span className="font-bold">11:00-12:00:</span> Leichtere Aufgaben & E-Mails (1h)</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-300">
                <h4 className="font-bold mb-2 text-amber-700">Mittag</h4>
                <ul className="text-sm space-y-2">
                  <li><span className="font-bold">12:00-13:00:</span> Mittagspause & Erholung (1h)</li>
                  <li><span className="font-bold">13:00-14:30:</span> Meetings & Kommunikation (1.5h)</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-300">
                <h4 className="font-bold mb-2 text-indigo-700">Nachmittag</h4>
                <ul className="text-sm space-y-2">
                  <li><span className="font-bold">14:30-15:00:</span> Kurze Pause (30min)</li>
                  <li><span className="font-bold">15:00-16:30:</span> Zweite Tiefenarbeit (1.5h)</li>
                  <li><span className="font-bold">16:30-17:00:</span> Tagesabschluss & Planung (30min)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Umsetzungstipps:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Berücksichtigen Sie Ihren natürlichen Energiezyklus bei der Tagesplanung</li>
              <li>Planen Sie bewusst Pausen ein - sie sind produktiver Teil des Arbeitstages</li>
              <li>Blockieren Sie lange Zeiträume für Tiefenarbeit in Ihrem Kalender</li>
              <li>Nutzen Sie Rituale, um Tiefenarbeitsphasen einzuleiten (z.B. Tee zubereiten, Arbeitsplatz aufräumen)</li>
              <li>Reflektieren Sie regelmäßig, ob Ihr Arbeitstempo nachhaltig ist</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 8: Prinzip 3 - Obsess Over Quality
    {
      title: "Prinzip 3: Obsess Over Quality",
      content: (
        <div className="h-full flex flex-col">
          <div className="flex items-center mb-6">
            <Award className="text-purple-600 mr-2" size={28} />
            <h2 className="text-2xl font-bold text-purple-600">Prinzip 3: Obsess Over Quality</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <div>
              <h3 className="text-lg font-bold mb-3">Kerngedanken:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Qualitätsfokus ist der "Klebstoff" der Slow Productivity</li>
                <li>Qualität erfordert Verlangsamung - Geschäftigkeit wird zur Störung</li>
                <li>Qualitätsbesessenheit führt zu mehr Kontrolle über die eigene Arbeit</li>
                <li>Der Markt belohnt langfristig hochwertige Arbeit</li>
                <li>Entwicklung von "Geschmack" (Verständnis für Qualität) ist entscheidend</li>
              </ul>
              
              <div className="bg-purple-50 p-4 rounded-lg mt-4 border-l-4 border-purple-500">
                <p className="italic">Beispiele: Die Musikerin Jewel und der Unternehmer Paul Jarvis zeigen, dass Priorisierung von Qualität langfristig zu mehr Freiheit und einem nachhaltigeren Lebensstil führen kann.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Umsetzungsstrategien:</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Improve Your Taste</p>
                  <p>Tauchen Sie tief in die Werke von Meistern Ihres Fachs ein</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Form a Mastermind Group</p>
                  <p>Treffen Sie sich regelmäßig mit Gleichgesinnten zum Austausch</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Keep a "Fifty-Dollar Notebook"</p>
                  <p>Führen Sie ein hochwertiges Notizbuch für Qualitätsreflexionen</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-bold">Bet on Quality</p>
                  <p>Widmen Sie bedeutende freie Zeit wichtigen Projekten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 9: Obsess Over Quality - Praxisbeispiel
    {
      title: "Obsess Over Quality - Praxisbeispiel",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">Obsess Over Quality - Praxisbeispiel</h2>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
            <h3 className="text-xl font-bold mb-4">Der "Qualitäts-Fokus"-Prozess</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded border border-gray-300">
                <h4 className="font-bold mb-3 text-purple-700">Die "Meisterwerke-Sammlung"</h4>
                <p className="text-sm mb-2">Erstellen Sie eine kuratierte Sammlung von herausragenden Arbeiten in Ihrem Feld:</p>
                <ul className="text-sm space-y-1 pl-4 list-disc">
                  <li>Sammeln Sie 5-10 Beispiele für außergewöhnliche Qualität</li>
                  <li>Analysieren Sie, was diese Werke auszeichnet</li>
                  <li>Identifizieren Sie konkrete Qualitätsmerkmale</li>
                  <li>Überprüfen Sie regelmäßig Ihre eigene Arbeit anhand dieser Kriterien</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border border-gray-300">
                <h4 className="font-bold mb-3 text-purple-700">Das "Qualitäts-Notizbuch"</h4>
                <p className="text-sm mb-2">Führen Sie ein hochwertiges Notizbuch für Qualitätsreflexionen:</p>
                <ul className="text-sm space-y-1 pl-4 list-disc">
                  <li>Notieren Sie Beobachtungen zu Qualitätsmerkmalen in Ihrem Feld</li>
                  <li>Dokumentieren Sie Feedback zu Ihrer eigenen Arbeit</li>
                  <li>Reflektieren Sie wöchentlich über Ihre Fortschritte</li>
                  <li>Planen Sie konkrete Schritte zur Qualitätsverbesserung</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Umsetzungstipps:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verbringen Sie jeden Monat einen Tag damit, die besten Arbeiten in Ihrem Feld zu studieren</li>
              <li>Bilden Sie eine kleine Gruppe von 3-5 Personen, die sich regelmäßig zum Qualitäts-Feedback trifft</li>
              <li>Definieren Sie für jedes Projekt klare Qualitätskriterien, bevor Sie beginnen</li>
              <li>Kündigen Sie wichtige Projekte öffentlich an, um sich selbst zu verpflichten</li>
              <li>Setzen Sie Zeit für Qualitätsverbesserungen bewusst in Ihren Zeitplan</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 10: Umsetzungsleitfaden
    {
      title: "Umsetzungsleitfaden für Slow Productivity",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Umsetzungsleitfaden für Slow Productivity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                <h3 className="font-bold">Bestandsaufnahme</h3>
              </div>
              <ul className="text-sm space-y-2 pl-4">
                <li>Identifizieren Sie Pseudo-Produktivität in Ihrem Arbeitsalltag</li>
                <li>Analysieren Sie Ihre typischen Arbeitsabläufe</li>
                <li>Reflektieren Sie über Ihr Stresslevel und Ihre Arbeitsqualität</li>
                <li>Dokumentieren Sie, welche Aktivitäten tatsächlich Wert schaffen</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                <h3 className="font-bold">Experimentieren Sie</h3>
              </div>
              <ul className="text-sm space-y-2 pl-4">
                <li>Beginnen Sie mit einem Prinzip, das Sie am meisten anspricht</li>
                <li>Setzen Sie für 2 Wochen eine konkrete Strategie um</li>
                <li>Starten Sie mit dem "Active List"-System oder dem natürlichen Arbeitsrhythmus</li>
                <li>Beobachten Sie die Auswirkungen auf Ihre Arbeit und Ihr Wohlbefinden</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                <h3 className="font-bold">Etablieren Sie Routinen</h3>
              </div>
              <ul className="text-sm space-y-2 pl-4">
                <li>Integrieren Sie erfolgreiche Strategien in Ihren regulären Arbeitsablauf</li>
                <li>Kommunizieren Sie Ihre neuen Arbeitsweisen an Kollegen</li>
                <li>Schaffen Sie unterstützende Strukturen (z.B. Kalenderblöcke)</li>
                <li>Entwickeln Sie Rituale für wichtige Arbeitsabschnitte</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold mb-2">Kontinuierliche Verbesserung:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reflektieren Sie monatlich über Ihre Fortschritte</li>
              <li>Passen Sie Strategien an Ihre individuellen Bedürfnisse an</li>
              <li>Integrieren Sie schrittweise weitere Prinzipien der Slow Productivity</li>
              <li>Teilen Sie Ihre Erfahrungen mit anderen und lernen Sie voneinander</li>
              <li>Seien Sie geduldig - nachhaltige Veränderung braucht Zeit</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 11: Zusammenfassung
    {
      title: "Zusammenfassung",
      content: (
        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Zusammenfassung: Der Weg zur Slow Productivity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold mb-2">Von der Pseudo-Produktivität...</h3>
                <ul className="pl-4 list-disc space-y-1">
                  <li>Ständige, sichtbare Aktivität</li>
                  <li>Fokus auf Geschäftigkeit statt Ergebnisse</li>
                  <li>Überlastung und Erschöpfung</li>
                  <li>Oberflächliche Arbeit</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold mb-2">...zur Slow Productivity</h3>
                <p className="font-bold">1. Do Fewer Things</p>
                <p className="ml-4 mb-2">Weniger, aber bedeutsamere Arbeit</p>
                
                <p className="font-bold">2. Work at a Natural Pace</p>
                <p className="ml-4 mb-2">Nachhaltiger, menschlicher Arbeitsrhythmus</p>
                
                <p className="font-bold">3. Obsess Over Quality</p>
                <p className="ml-4">Fokus auf herausragende Qualität</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
              <blockquote className="text-lg italic border-l-4 border-green-500 pl-4">
                "Slow Productivity geht nicht darum, weniger zu leisten, sondern darum, einen besseren Weg zu finden, bedeutende und qualitativ hochwertige Arbeit zu leisten - auf eine Weise, die nachhaltig, erfüllend und menschlich ist."
              </blockquote>
              
              <div className="mt-8">
                <h3 className="font-bold mb-3">Nächste Schritte:</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Wählen Sie eine Strategie aus, die Sie als erstes umsetzen möchten</li>
                  <li>Setzen Sie sich ein konkretes Ziel für die nächsten 2 Wochen</li>
                  <li>Reflektieren Sie regelmäßig über Ihre Fortschritte</li>
                  <li>Passen Sie Ihren Ansatz kontinuierlich an</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navigation bar with slide counter */}
      <div className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            SP
          </div>
          <h1 className="ml-2 text-xl font-bold">Slow Productivity</h1>
        </div>
        <div className="text-gray-600">
          Folie {currentSlide + 1} von {slides.length}
        </div>
      </div>
      
      {/* Main slide content */}
      <div className="flex-grow overflow-auto">
        <div className="max-w-4xl mx-auto p-6 bg-white my-6 rounded-lg shadow-lg h-auto">
          {slides[currentSlide].content}
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="bg-white p-4 flex justify-between items-center shadow-md">
        <button 
          onClick={goToPrevSlide} 
          className={`flex items-center justify-center p-2 rounded ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
          <span className="ml-1">Zurück</span>
        </button>
        
        <button 
          onClick={goToNextSlide} 
          className={`flex items-center justify-center p-2 rounded ${currentSlide === slides.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
          disabled={currentSlide === slides.length - 1}
        >
          <span className="mr-1">Weiter</span>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Presentation;