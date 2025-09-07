import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen, Brain, Clock, PieChart, CheckSquare, Award, Users, BookmarkPlus, Lightbulb, RefreshCw, BarChart4 } from 'lucide-react';

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const slides = [
    // Titel
    {
      title: "A Mind for Numbers",
      subtitle: "Wie man brillant Mathematik und Naturwissenschaften lernt",
      author: "Barbara Oakley, Ph.D.",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <BookOpen size={80} className="text-blue-600 mb-6" />
          <h1 className="text-4xl font-bold text-center mb-4">A Mind for Numbers</h1>
          <h2 className="text-2xl text-center mb-6">Wie man brillant Mathematik und Naturwissenschaften lernt</h2>
          <p className="text-xl text-center text-gray-700">von Barbara Oakley, Ph.D.</p>
          <p className="mt-8 text-center text-gray-600">Highlights und Umsetzungsleitfaden</p>
        </div>
      )
    },
    
    // Übersicht
    {
      title: "Übersicht der Kernstrategien",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-6">Übersicht der Kernstrategien</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg flex items-start">
              <Brain className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold">Fokussiertes vs. Diffuses Denken</h3>
                <p className="text-sm">Wechsel zwischen konzentriertem Lernen und entspanntem Nachdenken</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg flex items-start">
              <PieChart className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold">Chunking</h3>
                <p className="text-sm">Wissen in bedeutungsvolle Einheiten gliedern</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg flex items-start">
              <Clock className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold">Prokrastination überwinden</h3>
                <p className="text-sm">Produktive Gewohnheiten entwickeln</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg flex items-start">
              <BookmarkPlus className="text-red-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold">Gedächtnistechniken</h3>
                <p className="text-sm">Strategien zum besseren Merken und Abrufen</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg flex items-start">
              <Users className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold">Teamwork</h3>
                <p className="text-sm">Überzeugungen herausfordern durch Zusammenarbeit</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-start">
              <Award className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold">Test-Strategien</h3>
                <p className="text-sm">Optimale Prüfungsvorbereitung und -durchführung</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="italic">"Mathematik und Naturwissenschaften sind etwas, das man wird, nicht nur etwas, das man ist. — Barbara Oakley"</p>
          </div>
        </div>
      )
    },
    
    // Fokussiertes vs. Diffuses Denken
    {
      title: "Fokussiertes vs. Diffuses Denken",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Fokussiertes vs. Diffuses Denken</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-700">Fokussierter Modus</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Konzentrierte Aufmerksamkeit auf spezifische Probleme</li>
                <li>Bewusstes Nachdenken und Problemlösen</li>
                <li>Nutzt existierende neuronale Muster</li>
                <li>Gut für das Erlernen neuer Konzepte</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-700">Diffuser Modus</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Entspannter, umherschweifender Denkzustand</li>
                <li>Schafft neue Verbindungen zwischen Ideen</li>
                <li>Ermöglicht kreative Einsichten</li>
                <li>Löst oft Blockaden (Einstellungseffekt)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Nutzen Sie die <span className="font-bold">Pomodoro-Technik</span>: 25 Minuten konzentriert arbeiten, dann 5 Minuten Pause</li>
              <li>Bei Blockaden bewusst <span className="font-bold">den Kontext wechseln</span> – spazieren gehen, duschen, etc.</li>
              <li>Probleme <span className="font-bold">vor dem Schlafengehen</span> durchdenken – das Gehirn arbeitet unbewusst weiter</li>
              <li>Balance zwischen <span className="font-bold">intensiver Arbeit und Entspannung</span> finden</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel:</h3>
            <p>
              Maria hat Schwierigkeiten, eine komplexe Differentialgleichung zu lösen. Nach 25 Minuten intensiver 
              Konzentration macht sie eine Pause und geht spazieren. Beim Gehen, als ihr Gehirn im diffusen Modus ist, 
              kommt ihr plötzlich eine neue Herangehensweise in den Sinn, die sie nach ihrer Rückkehr erfolgreich anwendet.
            </p>
          </div>
        </div>
      )
    },
    
    // Chunking
    {
      title: "Chunking - Der Schlüssel zum Expertentum",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Chunking - Der Schlüssel zum Expertentum</h2>
          
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Was ist Chunking?</h3>
            <p className="mb-3">
              Chunking ist der Prozess, durch den einzelne Informationen zu bedeutungsvollen Gruppen (Chunks) 
              verbunden werden, die leichter im Arbeitsgedächtnis behalten werden können.
            </p>
            <div className="flex justify-center mb-2">
              <div className="flex space-x-2">
                <div className="bg-indigo-200 p-2 rounded">2</div>
                <div className="bg-indigo-200 p-2 rounded">7</div>
                <div className="bg-indigo-200 p-2 rounded">1</div>
                <div className="bg-indigo-200 p-2 rounded">8</div>
                <div className="bg-indigo-200 p-2 rounded">2</div>
                <div className="bg-indigo-200 p-2 rounded">8</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex space-x-4">
                <div className="bg-indigo-300 p-2 rounded">271</div>
                <div className="bg-indigo-300 p-2 rounded">828</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-bold mb-1 text-sm">1. Fokussierte Aufmerksamkeit</h3>
              <p className="text-xs">Konzentrieren Sie sich intensiv auf die zu lernende Information</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-bold mb-1 text-sm">2. Verständnis entwickeln</h3>
              <p className="text-xs">Verstehen Sie, warum und wie die Informationen zusammenhängen</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="font-bold mb-1 text-sm">3. Üben & Kontext schaffen</h3>
              <p className="text-xs">Wenden Sie Chunks in verschiedenen Situationen an</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Aktiver Abruf (Recall):</span> Schließen Sie das Buch und erinnern Sie sich an Kernkonzepte</li>
              <li><span className="font-bold">Selbsttests:</span> Überprüfen Sie Ihr Verständnis durch Übungsaufgaben ohne Nachschlagen</li>
              <li><span className="font-bold">Tägliche Übung:</span> Regelmäßige, kürzere Übungseinheiten sind effektiver als Marathon-Sessions</li>
              <li><span className="font-bold">Erklären Sie anderen:</span> Lehren Sie Konzepte, als würden Sie sie einem Kind erklären</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel:</h3>
            <p>
              Statt die Formel F = ma isoliert zu lernen, verbindet Thomas sie mit dem Konzept der Kräfte und Bewegung, 
              indem er sich vorstellt, wie er einen schweren Einkaufswagen schiebt. Er übt dann verschiedene Probleme, 
              bei denen diese Formel angewendet wird, bis sie zu einem intuitiven "Chunk" wird, den er flexibel 
              anwenden kann.
            </p>
          </div>
        </div>
      )
    },
    
    // Prokrastination überwinden
    {
      title: "Prokrastination überwinden",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Prokrastination überwinden</h2>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Die vier Elemente der Prokrastination:</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-2 rounded">
                <span className="font-bold text-purple-600">1. Auslöser (Cue):</span>
                <p className="text-sm">Etwas löst den Impuls aus zu prokrastinieren (Benachrichtigung, Unbehagen)</p>
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-bold text-purple-600">2. Routine:</span>
                <p className="text-sm">Die gewohnheitsmäßige Reaktion (z.B. Social Media checken)</p>
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-bold text-purple-600">3. Belohnung:</span>
                <p className="text-sm">Der kurzfristige Nutzen, der das Verhalten verstärkt</p>
              </div>
              <div className="bg-white p-2 rounded">
                <span className="font-bold text-purple-600">4. Glaube:</span>
                <p className="text-sm">Die zugrundeliegende Überzeugung, die das Verhalten rechtfertigt</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-bold">Pomodoro-Technik einsetzen:</span> 25 Minuten Arbeit → 5 Minuten Belohnung</li>
              <li><span className="font-bold">Prozess statt Produkt:</span> Fokus auf die Zeit, nicht auf das Ergebnis</li>
              <li><span className="font-bold">Mentales Kontrastieren:</span> Gegenwärtige Probleme mit positiver Zukunft vergleichen</li>
              <li><span className="font-bold">Planer-Journal führen:</span> Aufgaben am Vorabend planen</li>
              <li><span className="font-bold">Auslöser reduzieren:</span> Ablenkungsquellen identifizieren und minimieren</li>
              <li><span className="font-bold">"Eat your frogs first":</span> Schwierigste Aufgaben zuerst erledigen</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel:</h3>
            <p className="mb-2">
              <span className="font-bold">Problem:</span> Julia soll eine Präsentation für Statistik vorbereiten, schiebt es aber immer auf.
            </p>
            <p className="mb-1"><span className="font-bold">Lösung:</span></p>
            <ol className="list-decimal pl-5 text-sm">
              <li>Sie identifiziert den Auslöser: Das Gefühl der Überforderung beim Anblick des komplexen Themas</li>
              <li>Sie plant 25-Minuten-Pomodoros ein, in denen sie nur die Gliederung erstellt</li>
              <li>Als Belohnung erlaubt sie sich 5 Minuten Social Media nach jedem Pomodoro</li>
              <li>Sie stellt sich vor, wie stolz sie sein wird, wenn die Präsentation ein Erfolg wird</li>
              <li>Im Planer-Journal hält sie ihre täglichen Fortschritte fest</li>
            </ol>
          </div>
        </div>
      )
    },
    
    // Gedächtnistechniken
    {
      title: "Gedächtnistechniken",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Gedächtnistechniken</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-red-50 p-3 rounded-lg">
              <h3 className="font-bold mb-2 text-red-700">Memory Palace Technik</h3>
              <p className="text-sm mb-2">Informationen an bekannten Orten "platzieren"</p>
              <div className="bg-white p-2 rounded text-xs">
                <strong>Beispiel:</strong> Um die Planeten zu merken, visualisieren Sie Merkur auf Ihrer Türschwelle, 
                Venus im Flur, Erde in der Küche usw.
              </div>
            </div>
            
            <div className="bg-orange-50 p-3 rounded-lg">
              <h3 className="font-bold mb-2 text-orange-700">Mnemotechniken</h3>
              <p className="text-sm mb-2">Eselsbrücken, Akronyme und lebhafte Bilder</p>
              <div className="bg-white p-2 rounded text-xs">
                <strong>Beispiel:</strong> "Mein Vater erklärt mir jeden Sonntag unsere neun Planeten" 
                für die Reihenfolge der Planeten
              </div>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h3 className="font-bold mb-2 text-yellow-700">Spaced Repetition</h3>
              <p className="text-sm mb-2">Wiederholung in zunehmend größeren Zeitintervallen</p>
              <div className="bg-white p-2 rounded text-xs">
                <strong>Beispiel:</strong> Ein Konzept heute lernen, dann nach 1 Tag, 3 Tagen, 
                1 Woche und 2 Wochen wiederholen
              </div>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="font-bold mb-2 text-green-700">Aktiver Recall</h3>
              <p className="text-sm mb-2">Aktives Abrufen statt passives Wiederlesen</p>
              <div className="bg-white p-2 rounded text-xs">
                <strong>Beispiel:</strong> Nach dem Lesen eines Abschnitts, Buch schließen 
                und Hauptpunkte in eigenen Worten wiedergeben
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Mehrere Sinne einbeziehen:</span> Sehen, hören, schreiben, sprechen</li>
              <li><span className="font-bold">Geschichten entwickeln:</span> Absurde, lebhafte Narrative für Fakten erstellen</li>
              <li><span className="font-bold">Vor dem Schlafengehen wiederholen:</span> Schlaf festigt Erinnerungen</li>
              <li><span className="font-bold">Karteikarten erstellen:</span> Physisch oder digital (z.B. mit Anki)</li>
              <li><span className="font-bold">Assoziationen bilden:</span> Neues mit bereits Bekanntem verknüpfen</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel: Maxwell-Gleichungen merken</h3>
            <p className="text-sm">
              Anna muss die vier Maxwell-Gleichungen der Elektrodynamik lernen. Sie visualisiert jede Gleichung als Charakter in 
              ihrer Wohnung: Die erste sitzt auf ihrem Sofa und erzeugt elektrische Felder. Die zweite kocht in der Küche und zeigt, 
              dass keine magnetischen Monopole existieren. Die dritte duscht im Bad und demonstriert elektromagnetische Induktion. 
              Die vierte schläft im Bett und zeigt die Erzeugung magnetischer Felder durch Strom. Sie wiederholt diese Bilder 
              mehrmals in zunehmenden Abständen.
            </p>
          </div>
        </div>
      )
    },
    
    // Teamwork und Überzeugungen herausfordern
    {
      title: "Die Kraft des Teamworks",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Die Kraft des Teamworks</h2>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Warum Teamarbeit wichtig ist:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Überzeugungen hinterfragen:</span> Andere können Lücken in unserem Verständnis aufdecken</li>
              <li><span className="font-bold">Verschiedene Perspektiven:</span> Neue Herangehensweisen und Lösungsansätze entdecken</li>
              <li><span className="font-bold">Überkonfidenz vermeiden:</span> Realistischere Einschätzung des eigenen Verständnisses</li>
              <li><span className="font-bold">Feedback erhalten:</span> Konstruktive Kritik zur Verbesserung nutzen</li>
              <li><span className="font-bold">Tieferes Verständnis:</span> Durch Erklären und Diskutieren festigen wir unser Wissen</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-bold">Lerngruppen bilden:</span> Regelmäßige Treffen mit Kommilitonen vereinbaren</li>
              <li><span className="font-bold">Konzepte erklären:</span> Abwechselnd Themen den anderen erläutern</li>
              <li><span className="font-bold">"Devil's Advocate" spielen:</span> Annahmen bewusst hinterfragen</li>
              <li><span className="font-bold">Aktiv um Feedback bitten:</span> Nach Lücken im eigenen Verständnis fragen</li>
              <li><span className="font-bold">Verschiedene Perspektiven einholen:</span> Wie würden andere dieses Problem lösen?</li>
              <li><span className="font-bold">Eigene Überzeugungen überprüfen:</span> Bin ich wirklich sicher, dass ich das verstehe?</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel:</h3>
            <p>
              Eine Studiengruppe von vier Informatikstudenten trifft sich wöchentlich, um Algorithmen zu diskutieren. 
              Jede Woche erklärt ein anderes Mitglied einen komplexen Algorithmus, während die anderen "Devil's Advocate" 
              spielen und kritische Fragen stellen. Als Leon seine Erklärung des Dijkstra-Algorithmus präsentiert, bemerkt 
              Sarah eine Lücke in seinem Verständnis bezüglich negativer Kantengewichte. Diese Diskussion hilft nicht nur Leon, 
              sondern vertieft auch das Verständnis der gesamten Gruppe.
            </p>
          </div>
        </div>
      )
    },
    
    // Test-Strategien
    {
      title: "Test-Strategien",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Test-Strategien</h2>
          
          <div className="bg-green-50 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Prinzipien erfolgreicher Prüfungsvorbereitung:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Tests sind Lernchancen:</span> Testen verstärkt das Gedächtnis mehr als reines Wiederholen</li>
              <li><span className="font-bold">Übungstests sind entscheidend:</span> Sie decken Wissenslücken auf und reduzieren Angst</li>
              <li><span className="font-bold">Tiefes Verständnis:</span> Verstehen Sie die Konzepte, nicht nur Auswendiglernen</li>
              <li><span className="font-bold">Stressmanagement:</span> Entwickeln Sie Strategien zur Bewältigung von Prüfungsangst</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-bold">"Hard-start–jump-to-easy" Technik:</span> 
                <ul className="list-disc pl-5 text-sm">
                  <li>Mit schwierigen Aufgaben beginnen, aber nicht zu lange daran hängen bleiben</li>
                  <li>Zu einfacheren Aufgaben wechseln, wenn Sie feststecken</li>
                  <li>Später mit frischem Blick zu schwierigen Aufgaben zurückkehren</li>
                </ul>
              </li>
              <li><span className="font-bold">Atemtechniken:</span> Tiefe Bauchatmung bei Prüfungsangst</li>
              <li><span className="font-bold">Antworten überprüfen:</span> Kurz ablenken, dann mit frischem Blick prüfen</li>
              <li><span className="font-bold">Übungstests simulieren:</span> Unter realistischen Bedingungen üben</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel: Hard-start–jump-to-easy Technik</h3>
            <p className="mb-2">
              Bei einer Physikprüfung wirft Laura zunächst einen Blick auf alle Aufgaben und identifiziert die schwierigsten. 
              Sie beginnt mit einer komplexen Thermodynamik-Aufgabe und arbeitet daran für etwa drei Minuten. 
            </p>
            <p className="mb-2">
              Als sie merkt, dass sie nicht sofort weiterkommt, wechselt sie zu den einfacheren Kinematik-Aufgaben und löst diese zügig. 
              Ihr Gehirn arbeitet unterdessen im diffusen Modus weiter an der Thermodynamik-Aufgabe.
            </p>
            <p>
              Als sie später zur schwierigen Aufgabe zurückkehrt, hat sie eine neue Idee für den Lösungsansatz und kann das Problem erfolgreich bewältigen.
            </p>
          </div>
        </div>
      )
    },
    
    // Visuelles Denken und Gleichungspoesie
    {
      title: "Visuelles Denken und Gleichungspoesie",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Visuelles Denken und Gleichungspoesie</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Das "geistige Auge" entwickeln:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Gleichungen als Poesie:</span> Mathematische Formeln enthalten verdichtete Bedeutung und Schönheit</li>
              <li><span className="font-bold">Visualisierung:</span> Abstrakte Konzepte im Geist lebendig werden lassen</li>
              <li><span className="font-bold">Personalisierung:</span> Wissenschaftliche Konzepte in persönliche Bilder übersetzen</li>
              <li><span className="font-bold">Vereinfachung:</span> Komplexe Ideen auf ihre Essenz reduzieren</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Umsetzungsleitfaden:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-bold">Gleichungsgedichte verfassen:</span> Die Bedeutung hinter Formeln in eigenen Worten ausdrücken</li>
              <li><span className="font-bold">Konzepte als "Theaterstücke" visualisieren:</span> Elemente als handelnde Charaktere vorstellen</li>
              <li><span className="font-bold">Einfache Erklärungen üben:</span> Ein komplexes Konzept so erklären, dass es ein Kind verstehen würde</li>
              <li><span className="font-bold">Analogien entwickeln:</span> Wissenschaftliche Konzepte mit Alltagsphänomenen vergleichen</li>
              <li><span className="font-bold">Bildliche Darstellungen skizzieren:</span> Eigene Visualisierungen zu Formeln zeichnen</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Beispiel: Gleichungsgedicht zur 2. Newton'schen Gleichung</h3>
            <div className="flex justify-center mb-3">
              <div className="bg-white px-4 py-2 rounded-lg text-lg font-bold text-blue-700">F = m · a</div>
            </div>
            <p className="italic text-center mb-3">
              "Eine Kraft gibt Masse Beschleunigung,<br/>
              Je größer die Masse, desto stärker der Widerstand,<br/>
              Ein leichtes Boot schnell, ein schweres langsam,<br/>
              Alle Bewegung ist ein Tanz zwischen Kraft und Trägheit."
            </p>
            <p className="text-sm">
              Markus visualisiert diese Gleichung als eine Person (Kraft), die einen Wagen (Masse) schiebt. 
              Je schwerer der Wagen, desto mehr muss die Person sich anstrengen, um die gleiche Beschleunigung zu erzielen. 
              Diese Visualisierung hilft ihm, die Gleichung intuitiv zu verstehen und in verschiedenen Kontexten anzuwenden.
            </p>
          </div>
        </div>
      )
    },
    
    // Ihr Potenzial entfalten
    {
      title: "Ihr Potenzial entfalten",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4">Ihr Potenzial entfalten</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Kernprinzipien:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Wachstumsorientiertes Denken:</span> Fähigkeiten können durch Übung und Ausdauer entwickelt werden</li>
              <li><span className="font-bold">Gehirn als formbare Struktur:</span> Neuroplastizität ermöglicht kontinuierliche Verbesserung</li>
              <li><span className="font-bold">Balance zwischen Anstrengung und Entspannung:</span> Beide Modi des Denkens sind wichtig</li>
              <li><span className="font-bold">Das "Warum" verstehen:</span> Tiefes Verständnis der Konzepte statt mechanisches Auswendiglernen</li>
              <li><span className="font-bold">Vielseitigkeit schätzen:</span> Interdisziplinäres Denken fördert Innovation und Kreativität</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-2">Ihr persönlicher Aktionsplan:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-bold">Tägliche Lernroutine etablieren:</span> Regelmäßige, kurze Lerneinheiten mit fokussiertem und diffusem Denken</li>
              <li><span className="font-bold">Metakognition üben:</span> Regelmäßig über den eigenen Lernprozess nachdenken und anpassen</li>
              <li><span className="font-bold">Fehler als Wachstumschance betrachten:</span> Aus Fehlern lernen, statt sie zu vermeiden</li>
              <li><span className="font-bold">Vielfältige Interessen kultivieren:</span> Verbindungen zwischen verschiedenen Wissensgebieten herstellen</li>
              <li><span className="font-bold">Fortschritte feiern:</span> Auch kleine Erfolge anerkennen und würdigen</li>
            </ol>
          </div>
          
          <div className="flex justify-center mb-5">
            <div className="bg-pink-50 p-3 rounded-lg w-full max-w-md text-center">
              <h3 className="font-bold mb-2 text-pink-700">Das Gesetz der Serendipität</h3>
              <p className="italic">
                "Glück begünstigt den vorbereiteten Geist"
              </p>
              <p className="text-sm mt-2">
                Je mehr Sie üben und Ihre Lernfähigkeiten entwickeln, desto mehr "glückliche" Einsichten und Verbindungen werden Sie entdecken.
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-yellow-800">Ihr nächster Schritt:</h3>
            <p>
              Wählen Sie <span className="font-bold">eine Technik</span> aus dieser Präsentation, die Sie ansprechen, und 
              <span className="font-bold"> wenden Sie sie diese Woche an</span>. Vielleicht ist es die Pomodoro-Technik, ein Memory Palace 
              oder die "Hard-start–jump-to-easy"-Strategie für Ihre nächste Prüfung. Beginnen Sie klein, bleiben Sie 
              beharrlich, und erlauben Sie Ihrem Gehirn, sich durch bewusste Übung zu formen und zu entwickeln.
            </p>
          </div>
        </div>
      )
    },
    
    // Zusammenfassung und Ressourcen
    {
      title: "Zusammenfassung und Ressourcen",
      content: (
        <div className="h-full">
          <h2 className="text-2xl font-bold mb-4">Zentrale Erkenntnisse</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg flex items-start">
              <Brain className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-sm">Wechsel zwischen Denkmodi</h3>
                <p className="text-xs">Fokussiertes und diffuses Denken bewusst einsetzen</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-3 rounded-lg flex items-start">
              <PieChart className="text-indigo-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-sm">Chunking meistern</h3>
                <p className="text-xs">Informationen in bedeutungsvolle Einheiten strukturieren</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg flex items-start">
              <Clock className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-sm">Prokrastination bekämpfen</h3>
                <p className="text-xs">Gewohnheiten umformen, Pomodoro-Technik nutzen</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg flex items-start">
              <BookmarkPlus className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-sm">Gedächtnis stärken</h3>
                <p className="text-xs">Visualisierung, Abruf und verteilte Wiederholung</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg flex items-start">
              <Users className="text-yellow-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-sm">Teamwork nutzen</h3>
                <p className="text-xs">Andere Perspektiven einholen, Überkonfidenz vermeiden</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg flex items-start">
              <CheckSquare className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-sm">Tests als Lernchance</h3>
                <p className="text-xs">Hard-start–jump-to-easy Technik anwenden</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Ihre Lernreise - Die nächsten Schritte:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-bold">Führen Sie ein Lerntagebuch:</span> Dokumentieren Sie Fortschritte und Erkenntnisse</li>
              <li><span className="font-bold">Experimentieren Sie:</span> Testen Sie verschiedene Techniken und finden Sie Ihre persönliche Mischung</li>
              <li><span className="font-bold">Seien Sie geduldig:</span> Nachhaltige Veränderung braucht Zeit und Beharrlichkeit</li>
              <li><span className="font-bold">Bilden Sie Lerngemeinschaften:</span> Finden Sie Gleichgesinnte für gemeinsames Wachstum</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-blue-700 flex items-center">
              <ExternalLink size={18} className="mr-2" />
              Weiterführende Ressourcen
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">Learning How to Learn (Coursera):</span> Online-Kurs von Barbara Oakley</li>
              <li><span className="font-bold">Mindshift:</span> Ein weiteres Buch von Barbara Oakley über Lernen und Veränderung</li>
              <li><span className="font-bold">Make It Stick:</span> Buch von Peter C. Brown über wissenschaftlich fundierte Lernstrategien</li>
              <li><span className="font-bold">Anki:</span> Software für Spaced Repetition</li>
              <li><span className="font-bold">Forest App:</span> Hilft bei der Umsetzung der Pomodoro-Technik</li>
            </ul>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      {/* Navigation */}
      <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
        <button 
          onClick={goToPrevSlide} 
          className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-200'}`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex-1 text-center">
          <h3 className="font-bold text-gray-800">{slides[currentSlide].title}</h3>
          <div className="flex justify-center mt-1 space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
        
        <button 
          onClick={goToNextSlide} 
          className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-200'}`}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Slide Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {slides[currentSlide].content}
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 p-3 border-t text-center text-sm text-gray-500">
        <p>Basiert auf "A Mind for Numbers" von Barbara Oakley, Ph.D.</p>
      </div>
    </div>
  );
};

export default Presentation;