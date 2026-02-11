import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Brain, Repeat, Shuffle, Zap, AlertTriangle, BookOpen, Lightbulb } from 'lucide-react';

const MakeItStickPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showExample, setShowExample] = useState(false);
  const [practiceType, setPracticeType] = useState('massed');
  const [retrievalActive, setRetrievalActive] = useState(false);
  const [retrievalAnswer, setRetrievalAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setShowExample(false);
      setShowAnswer(false);
      setRetrievalActive(false);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setShowExample(false);
      setShowAnswer(false);
      setRetrievalActive(false);
    }
  };

  const toggleExample = () => {
    setShowExample(!showExample);
  };

  const togglePracticeType = () => {
    setPracticeType(practiceType === 'massed' ? 'interleaved' : 'massed');
  };

  const startRetrieval = () => {
    setRetrievalActive(true);
    setShowAnswer(false);
    setRetrievalAnswer('');
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  const slides = [
    // Slide 0: Title
    {
      title: "Make It Stick",
      subtitle: "Die Wissenschaft des erfolgreichen Lernens",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-5xl font-bold text-blue-700">Make It Stick</div>
          <div className="text-2xl mt-4 text-gray-700">Die Wissenschaft des erfolgreichen Lernens</div>
          <div className="mt-8 text-gray-600 italic">
            Basierend auf dem Buch von Peter C. Brown, Henry L. Roediger III und Mark A. McDaniel
          </div>
          <div className="mt-12 flex space-x-8">
            <div className="flex flex-col items-center">
              <Brain size={40} className="text-blue-600" />
              <div className="mt-2">Wissenschaftlich fundiert</div>
            </div>
            <div className="flex flex-col items-center">
              <Lightbulb size={40} className="text-yellow-500" />
              <div className="mt-2">Praxisnah</div>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen size={40} className="text-green-600" />
              <div className="mt-2">Nachhaltig Lernen</div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 1: Overview
    {
      title: "Überblick",
      content: (
        <div className="h-full">
          <div className="text-xl mb-6">Das Buch räumt mit verbreiteten Lernmythen auf und präsentiert wissenschaftlich fundierte Lernstrategien:</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="font-bold text-blue-700 flex items-center">
                <AlertTriangle size={20} className="mr-2" />
                Lernmythen
              </div>
              <ul className="mt-2 list-disc pl-6">
                <li>Wiederholtes Lesen ist effektiv</li>
                <li>Massiertes Üben ist besser</li>
                <li>Lernen sollte sich einfach anfühlen</li>
                <li>Lernstile sind entscheidend</li>
                <li>Kenntnis = Können</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 flex items-center">
                <Zap size={20} className="mr-2" />
                Effektive Lernmethoden
              </div>
              <ul className="mt-2 list-disc pl-6">
                <li>Retrieval Practice (Abrufübung)</li>
                <li>Spaced Practice (verteiltes Üben)</li>
                <li>Interleaved Practice (verzahntes Üben)</li>
                <li>Elaboration (Verknüpfung mit Vorwissen)</li>
                <li>Generation (selbst Lösungen finden)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-purple-50 p-4 rounded-lg shadow">
            <div className="font-bold text-purple-700 mb-2">Kernbotschaft:</div>
            <div className="text-lg">
              Effektives Lernen fühlt sich oft schwieriger an, führt aber zu tieferem und dauerhafterem Wissen als scheinbar mühelose Methoden.
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: Chapter 1 - Learning Is Misunderstood
    {
      title: "Kapitel 1: Lernen wird missverstanden",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Lernen, das sich einfach anfühlt, ist oft oberflächlich und kurzlebig."
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg shadow">
              <div className="font-bold text-red-700 mb-2">Mythen über effektives Lernen:</div>
              <ul className="list-disc pl-5">
                <li>Wiederholtes Lesen ist effektiv</li>
                <li>Wissen bleibt durch Wiederholung im Gedächtnis</li>
                <li>Leichtes Lernen ist besser</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Wissenschaftliche Erkenntnisse:</div>
              <ul className="list-disc pl-5">
                <li>Aktives Lernen ist effektiver als passives Lesen</li>
                <li>Anstrengung ist ein Zeichen für tieferes Lernen</li>
                <li>Wir sind oft schlechte Beurteiler unseres Lernfortschritts</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <div className="font-bold text-blue-700 mb-2">Praktische Umsetzung:</div>
            <ul className="list-disc pl-5">
              <li>Hinterfragen Sie Lernmethoden, die sich zu einfach anfühlen</li>
              <li>Vermeiden Sie reines wiederholtes Lesen</li>
              <li>Akzeptieren Sie, dass effektives Lernen Anstrengung erfordert</li>
              <li>Fokussieren Sie sich auf Verständnis, nicht auf Wiederholung</li>
            </ul>
          </div>
          
          <button 
            onClick={toggleExample} 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {showExample ? "Beispiel ausblenden" : "Beispiel anzeigen"}
          </button>
          
          {showExample && (
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="font-bold text-yellow-800 mb-2">Beispiel: Die Illusion des Wissens</div>
              <div>
                <p>Lisa liest ihr Physikbuch dreimal durch und hat das Gefühl, den Stoff gut zu kennen. In der Prüfung kann sie jedoch viele Fragen nicht beantworten.</p>
                <p className="mt-2 font-semibold">Warum?</p>
                <p>Das wiederholte Lesen erzeugte bei ihr eine "Illusion des Wissens". Die Vertrautheit mit dem Text verwechselte sie mit echtem Verständnis. Hätte sie sich stattdessen selbst getestet oder versucht, die Konzepte zu erklären, hätte sie ihre Wissenslücken früher erkannt.</p>
              </div>
            </div>
          )}
        </div>
      )
    },
    
    // Slide 3: Chapter 2 - To Learn, Retrieve
    {
      title: "Kapitel 2: Lernen durch Abrufen",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Tests sind nicht nur Werkzeuge zur Bewertung, sondern leistungsstarke Lernwerkzeuge."
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="font-bold text-blue-700 mb-2">Retrieval Practice (Abrufübung):</div>
              <ul className="list-disc pl-5">
                <li>Aktives Abrufen von Informationen aus dem Gedächtnis</li>
                <li>Verstärkt neuronale Verbindungen</li>
                <li>Verbessert dauerhafte Speicherung</li>
                <li>Zeigt echtes Wissen statt Vertrautheit</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Vorteile:</div>
              <ul className="list-disc pl-5">
                <li>Identifiziert Wissenslücken</li>
                <li>Vertieft das Verständnis</li>
                <li>Verbessert die künftige Abrufbarkeit</li>
                <li>Fördert Verbindungen zu Vorwissen</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
            <div className="font-bold text-blue-700 mb-2">Praktische Umsetzung:</div>
            <ul className="list-disc pl-5">
              <li>Regelmäßige Selbsttests integrieren</li>
              <li>Karteikarten nutzen</li>
              <li>Nach dem Lesen aus dem Gedächtnis zusammenfassen</li>
              <li>Sich selbst Fragen zum Material stellen</li>
              <li>Konzepte anderen erklären ("Feynman-Technik")</li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 border border-blue-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-4">Interaktives Beispiel: Retrieval Practice</div>
            
            {!retrievalActive ? (
              <button 
                onClick={startRetrieval} 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Retrieval-Übung starten
              </button>
            ) : (
              <div>
                <div className="mb-4 font-medium">Versuchen Sie, diese Frage zu beantworten (ohne zurückzublättern):</div>
                <div className="mb-4 p-3 bg-gray-100 rounded">Nennen Sie drei Vorteile von Retrieval Practice gegenüber wiederholtem Lesen.</div>
                
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded mb-4 min-h-20"
                  placeholder="Ihre Antwort hier eingeben..."
                  value={retrievalAnswer}
                  onChange={(e) => setRetrievalAnswer(e.target.value)}
                ></textarea>
                
                <button 
                  onClick={checkAnswer} 
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                  disabled={retrievalAnswer.trim() === ''}
                >
                  Antwort prüfen
                </button>
                
                {showAnswer && (
                  <div className="mt-4 bg-green-50 p-4 rounded border border-green-200">
                    <div className="font-bold text-green-800 mb-2">Mögliche Antwort:</div>
                    <ol className="list-decimal pl-5">
                      <li>Identifiziert Wissenslücken statt Illusion des Wissens zu erzeugen</li>
                      <li>Stärkt neuronale Verbindungen für dauerhafteres Lernen</li>
                      <li>Verbessert die Fähigkeit, Wissen in verschiedenen Kontexten anzuwenden</li>
                      <li>Fördert tieferes Verständnis statt oberflächlicher Vertrautheit</li>
                      <li>Spart Zeit im Vergleich zu wiederholtem Lesen</li>
                    </ol>
                    <div className="mt-4 text-sm text-gray-600">
                      Dieses kleine Experiment demonstriert Retrieval Practice! Sie haben aktiv Wissen abgerufen, anstatt es nur passiv zu lesen.
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )
    },
    
    // Slide 4: Chapter 3 - Mix Up Your Practice
    {
      title: "Kapitel 3: Mischen Sie Ihre Übungen",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Interleaved Practice führt zu besserer langfristiger Beherrschung und flexiblerem Denken."
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-4 rounded-lg shadow">
              <div className="font-bold text-red-700 mb-2">Massed Practice (blockweises Üben):</div>
              <ul className="list-disc pl-5">
                <li>Fokus auf eine Fähigkeit/Aufgabe für längere Zeit</li>
                <li>Schneller, aber oberflächlicher Fortschritt</li>
                <li>Fühlt sich produktiver an</li>
                <li>Erzeugt Illusion der Kompetenz</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Interleaved Practice (verzahntes Üben):</div>
              <ul className="list-disc pl-5">
                <li>Wechsel zwischen verschiedenen Aufgabentypen</li>
                <li>Langsamerer, aber tieferer Fortschritt</li>
                <li>Fühlt sich schwieriger an</li>
                <li>Verbessert Unterscheidungsfähigkeit</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-blue-700 mb-2">Praktische Umsetzung:</div>
            <ul className="list-disc pl-5">
              <li>Mischen Sie Aufgabentypen in einer Lernsitzung</li>
              <li>Üben Sie verschiedene, aber verwandte Fähigkeiten nacheinander</li>
              <li>Bei Mathematik: Mischen Sie verschiedene Problemtypen</li>
              <li>Beim Sprachenlernen: Wechseln Sie zwischen Grammatik, Vokabeln und Konversation</li>
              <li>Im Sport: Variieren Sie Übungen und Kontexte</li>
            </ul>
          </div>
          
          <div className="p-4 border border-blue-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-4">Interaktives Beispiel: Massed vs. Interleaved Practice</div>
            
            <div className="mb-4">
              <button 
                onClick={togglePracticeType} 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Wechseln zu {practiceType === 'massed' ? 'Interleaved Practice' : 'Massed Practice'}
              </button>
            </div>
            
            {practiceType === 'massed' ? (
              <div className="border-2 border-red-300 rounded p-4">
                <div className="font-bold text-red-700 mb-2">Massed Practice (blockweises Üben)</div>
                
                <div className="mb-4">
                  <div className="font-medium mb-1">Mathematik: Quadratische Gleichungen (1 Stunde)</div>
                  <div className="bg-red-100 p-2 rounded text-sm">
                    x² + 5x + 6 = 0<br />
                    x² - 3x - 4 = 0<br />
                    x² + 2x - 8 = 0<br />
                    ... (viele ähnliche Aufgaben)
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="font-medium mb-1">Dann: Exponentialfunktionen (1 Stunde)</div>
                  <div className="bg-orange-100 p-2 rounded text-sm">
                    f(x) = 2ˣ<br />
                    f(x) = 3ˣ⁻¹<br />
                    f(x) = 4·2ˣ<br />
                    ... (viele ähnliche Aufgaben)
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-1">Dann: Logarithmen (1 Stunde)</div>
                  <div className="bg-yellow-100 p-2 rounded text-sm">
                    log₂(8) = ?<br />
                    log₁₀(100) = ?<br />
                    log₃(27) = ?<br />
                    ... (viele ähnliche Aufgaben)
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <strong>Problem:</strong> In einer Prüfung können Schüler oft nicht unterscheiden, welche Methode für welches Problem anzuwenden ist.
                </div>
              </div>
            ) : (
              <div className="border-2 border-green-300 rounded p-4">
                <div className="font-bold text-green-700 mb-2">Interleaved Practice (verzahntes Üben)</div>
                
                <div className="mb-2">
                  <div className="font-medium mb-1">Mathematik-Übung (3 Stunden gemischt)</div>
                  <div className="bg-green-100 p-2 rounded text-sm">
                    x² + 5x + 6 = 0 <span className="text-xs text-gray-500">(Quadratische Gleichung)</span><br />
                    log₂(8) = ? <span className="text-xs text-gray-500">(Logarithmus)</span><br />
                    f(x) = 2ˣ <span className="text-xs text-gray-500">(Exponentialfunktion)</span><br />
                    x² - 3x - 4 = 0 <span className="text-xs text-gray-500">(Quadratische Gleichung)</span><br />
                    log₁₀(100) = ? <span className="text-xs text-gray-500">(Logarithmus)</span><br />
                    ... (gemischte Aufgaben)
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <strong>Vorteile:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Schüler lernen zu erkennen, welche Methode für welches Problem geeignet ist</li>
                    <li>Fördert tieferes Verständnis der Unterschiede zwischen Konzepten</li>
                    <li>Bereitet besser auf Prüfungssituationen vor, wo Probleme nicht nach Typ sortiert sind</li>
                    <li>Verbessert langfristige Beibehaltung und Transfer des Wissens</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },
    
    // Slide 5: Chapter 4 - Embrace Difficulties
    {
      title: "Kapitel 4: Wünschenswerte Schwierigkeiten",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Lernen ist tiefer und dauerhafter, wenn es anstrengend ist."
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-purple-700 mb-2">Desirable Difficulties (wünschenswerte Schwierigkeiten):</div>
            <div className="mb-2">Herausforderungen, die:</div>
            <ul className="list-disc pl-5">
              <li>Anstrengung erfordern</li>
              <li>Anfangs Fortschritt verlangsamen</li>
              <li>Zu tieferem Lernen führen</li>
              <li>Langfristige Beibehaltung fördern</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="font-bold text-blue-700 mb-2">Beispiele für wünschenswerte Schwierigkeiten:</div>
              <ul className="list-disc pl-5">
                <li>Retrieval Practice (Abrufübung)</li>
                <li>Spaced Practice (verteiltes Üben)</li>
                <li>Interleaved Practice (verzahntes Üben)</li>
                <li>Generation (selbst Lösungen entwickeln)</li>
                <li>Elaboration (Verknüpfen mit Vorwissen)</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Praktische Umsetzung:</div>
              <ul className="list-disc pl-5">
                <li>Versuchen Sie, Probleme zu lösen, bevor Sie die Lösung sehen</li>
                <li>Verteilen Sie Lernsitzungen über die Zeit</li>
                <li>Mischen Sie verschiedene Themen</li>
                <li>Variieren Sie Übungsbedingungen</li>
                <li>Erklären Sie Konzepte in eigenen Worten</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 border border-purple-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-2">Beispiel: Generation-Effekt</div>
            <div className="mb-4 text-sm">
              Zwei Gruppen von Studenten lernen ein neues Konzept:
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-red-200 rounded p-3 bg-red-50">
                <div className="font-medium text-red-700 mb-2">Gruppe A: Passive Lerner</div>
                <ul className="list-disc pl-5 text-sm">
                  <li>Erhalten vollständige Erklärung und Beispiele</li>
                  <li>Lesen die Materialien mehrmals durch</li>
                  <li>Folgen Schritt-für-Schritt-Anleitungen</li>
                  <li>Anfängliche Leistung: <span className="font-bold">85%</span></li>
                  <li>Leistung nach 1 Woche: <span className="font-bold">56%</span></li>
                </ul>
              </div>
              
              <div className="border border-green-200 rounded p-3 bg-green-50">
                <div className="font-medium text-green-700 mb-2">Gruppe B: Generation-Ansatz</div>
                <ul className="list-disc pl-5 text-sm">
                  <li>Erhalten nur grundlegende Prinzipien</li>
                  <li>Versuchen zuerst, Probleme selbst zu lösen</li>
                  <li>Machen Fehler und korrigieren diese</li>
                  <li>Anfängliche Leistung: <span className="font-bold">68%</span></li>
                  <li>Leistung nach 1 Woche: <span className="font-bold">78%</span></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <strong>Fazit:</strong> Die Anstrengung, selbst Lösungen zu generieren, auch wenn dabei Fehler gemacht werden, führt zu tieferem Verständnis und besserer langfristiger Beibehaltung des Wissens.
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Chapter 5 - Avoid Illusions of Knowing
    {
      title: "Kapitel 5: Illusionen des Wissens vermeiden",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Wir sind oft schlechte Beurteiler dessen, was wir wissen und was nicht."
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-yellow-800 mb-2">Illusionen des Wissens:</div>
            <ul className="list-disc pl-5">
              <li>Vertrautheit mit Informationen wird mit Beherrschung verwechselt</li>
              <li>Flüssigkeit beim Lesen erzeugt falsches Kompetenzgefühl</li>
              <li>Wir überschätzen unser Wissen bei ineffektiven Lernmethoden</li>
              <li>Das Gefühl des Wissens stimmt oft nicht mit tatsächlichem Verständnis überein</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg shadow">
              <div className="font-bold text-red-700 mb-2">Häufige Täuschungen:</div>
              <ul className="list-disc pl-5">
                <li>"Ich habe es mehrmals gelesen, also kenne ich es"</li>
                <li>"Es klingt vertraut, also verstehe ich es"</li>
                <li>"Ich kann dem Lehrer/der Präsentation folgen, also beherrsche ich den Stoff"</li>
                <li>"Ich habe hart gearbeitet, also muss ich es gelernt haben"</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Kalibrierung des Wissens:</div>
              <ul className="list-disc pl-5">
                <li>Regelmäßige Selbsttests durchführen</li>
                <li>Konzepte in eigenen Worten erklären</li>
                <li>Mentale Modelle entwickeln und verbinden</li>
                <li>Auf Leichtigkeit des Abrufs nach Verzögerung achten</li>
                <li>Feedback von anderen einholen</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 border border-yellow-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-2">Beispiel: Die Feynman-Technik</div>
            <div className="bg-yellow-100 p-3 rounded-lg mb-4 text-sm">
              <div className="font-medium mb-2">Die Feynman-Technik zur Prüfung des echten Verständnisses:</div>
              <ol className="list-decimal pl-5">
                <li>Wählen Sie ein Konzept, das Sie verstehen möchten</li>
                <li>Erklären Sie es in einfachen Worten, als würden Sie es einem Kind erklären</li>
                <li>Identifizieren Sie die Lücken in Ihrem Verständnis</li>
                <li>Kehren Sie zu den Quellen zurück, um diese Lücken zu schließen</li>
                <li>Vereinfachen und klären Sie Ihre Erklärung weiter, bis sie einfach und klar ist</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-red-200 rounded p-3 bg-red-50">
                <div className="font-medium text-red-700 mb-2">Illusion des Wissens:</div>
                <div className="text-sm">
                  "Ich verstehe Photosynthese. Es ist der Prozess, bei dem Pflanzen Sonnenlicht in Energie umwandeln. Sie nehmen CO₂ auf und geben O₂ ab. Ich habe das Kapitel dreimal gelesen."
                </div>
              </div>
              
              <div className="border border-green-200 rounded p-3 bg-green-50">
                <div className="font-medium text-green-700 mb-2">Echtes Verständnis (Feynman):</div>
                <div className="text-sm">
                  "Pflanzen 'essen' Sonnenlicht und Luft, um zu wachsen. Sie nehmen CO₂ aus der Luft und Wasser aus dem Boden auf. Mit Hilfe von Chlorophyll (dem grünen Farbstoff) und Sonnenlicht bauen sie diese Stoffe zu Zucker um. Dabei entsteht Sauerstoff als 'Abfallprodukt'. Der Zucker dient als Energiespeicher und Baustoff für die Pflanze."
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 7: Chapter 6 - Get Beyond Learning Styles
    {
      title: "Kapitel 6: Lernstile überwinden",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Die Theorie der Lernstile ist wissenschaftlich kaum gestützt."
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg shadow">
              <div className="font-bold text-red-700 mb-2">Der Mythos der Lernstile:</div>
              <ul className="list-disc pl-5">
                <li>Die Idee, dass jeder einen dominanten "Lernstil" hat (visuell, auditiv, kinästhetisch, etc.)</li>
                <li>Die Annahme, dass Lernen optimiert wird, wenn der Unterricht an diesen Stil angepasst wird</li>
                <li>Kaum wissenschaftliche Beweise für die Wirksamkeit</li>
                <li>Kann zu einer eingeschränkten Sicht des eigenen Potenzials führen</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Relevantere individuelle Unterschiede:</div>
              <ul className="list-disc pl-5">
                <li>Vorwissen in einem Bereich</li>
                <li>Interesse am Thema</li>
                <li>Spezifische Fähigkeiten</li>
                <li>"Big picture" vs. Detail-Denker</li>
                <li>"Example learners" vs. "rule learners"</li>
                <li>Spezifische Lernherausforderungen (z.B. Dyslexie)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-blue-700 mb-2">Praktische Umsetzung:</div>
            <ul className="list-disc pl-5">
              <li>Fokussieren Sie sich auf bewährte effektive Lernstrategien für alle (Retrieval, Spacing, Interleaving)</li>
              <li>Seien Sie ein aktiver Lerner ("Be the one in charge")</li>
              <li>Entwickeln Sie bei Bedarf Kompensationsstrategien für spezifische Herausforderungen</li>
              <li>Konzentrieren Sie sich auf tiefes Verständnis und mentale Modelle</li>
              <li>Entwickeln Sie eine "Growth Mindset" - Fähigkeiten können durch Anstrengung verbessert werden</li>
            </ul>
          </div>
          
          <div className="p-4 border border-blue-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-2">Growth Mindset vs. Fixed Mindset</div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-red-200 rounded p-3 bg-red-50">
                <div className="font-medium text-red-700 mb-2">Fixed Mindset:</div>
                <ul className="list-disc pl-5 text-sm">
                  <li>"Ich bin nicht gut in Mathematik"</li>
                  <li>"Ich bin kein visueller Lerner"</li>
                  <li>"Meine Fähigkeiten sind angeboren und begrenzt"</li>
                  <li>"Fehler bedeuten, dass ich nicht begabt bin"</li>
                  <li>"Anstrengung zeigt Mangel an Talent"</li>
                  <li>"Herausforderungen sollten vermieden werden"</li>
                </ul>
              </div>
              
              <div className="border border-green-200 rounded p-3 bg-green-50">
                <div className="font-medium text-green-700 mb-2">Growth Mindset:</div>
                <ul className="list-disc pl-5 text-sm">
                  <li>"Ich kann meine mathematischen Fähigkeiten verbessern"</li>
                  <li>"Ich kann auf verschiedene Arten lernen"</li>
                  <li>"Meine Fähigkeiten können sich durch Übung entwickeln"</li>
                  <li>"Fehler sind Lernchancen"</li>
                  <li>"Anstrengung ist der Weg zur Meisterschaft"</li>
                  <li>"Herausforderungen helfen mir zu wachsen"</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <strong>Fazit:</strong> Ein "Growth Mindset" zu entwickeln ist wirksamer als sich auf einen vermeintlichen Lernstil zu fixieren. Es ermöglicht Ihnen, verschiedene Lernstrategien anzuwenden und Herausforderungen als Chancen zur Verbesserung zu sehen.
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Chapter 7 - Increase Your Abilities
    {
      title: "Kapitel 7: Fähigkeiten steigern",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Das Gehirn kann sich durch Erfahrung und Übung neu organisieren und anpassen."
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-purple-700 mb-2">Neuroplastizität:</div>
            <ul className="list-disc pl-5">
              <li>Das Gehirn ist veränderbar und passt sich an</li>
              <li>Neue neuronale Verbindungen entstehen durch Lernen</li>
              <li>Fähigkeiten können durch gezielte Übung verbessert werden</li>
              <li>Sogar nach Verletzungen kann das Gehirn neue Wege finden</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="font-bold text-blue-700 mb-2">Deliberate Practice (bewusstes Üben):</div>
              <ul className="list-disc pl-5">
                <li>Fokussierte Anstrengung zur Verbesserung spezifischer Fähigkeiten</li>
                <li>Herausfordernde, aber erreichbare Ziele setzen</li>
                <li>Sofortiges Feedback suchen und nutzen</li>
                <li>Reflexion über den Fortschritt</li>
                <li>Kontinuierliche Anpassung der Strategien</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Mnemotechniken:</div>
              <ul className="list-disc pl-5">
                <li>Loci-Methode (Gedächtnispalast)</li>
                <li>Visuelle Bilder für abstrakte Konzepte</li>
                <li>Akronyme und Merksprüche</li>
                <li>Reimschemata</li>
                <li>Chunking (Informationen gruppieren)</li>
                <li>Verbessern den Abruf, nicht das konzeptuelle Verständnis</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 border border-purple-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-2">Beispiel: Loci-Methode (Gedächtnispalast)</div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="border border-gray-200 rounded p-3 bg-gray-50 flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">Ort 1: Haustür</div>
                <div className="font-medium text-center">Retrieval Practice</div>
                <div className="mt-1 text-xs text-center">
                  (Stellen Sie sich vor: ein Türklopfer, der ständig nach Informationen fragt)
                </div>
              </div>
              
              <div className="border border-gray-200 rounded p-3 bg-gray-50 flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">Ort 2: Wohnzimmer</div>
                <div className="font-medium text-center">Spaced Practice</div>
                <div className="mt-1 text-xs text-center">
                  (Stellen Sie sich vor: Möbel, die weit auseinander stehen)
                </div>
              </div>
              
              <div className="border border-gray-200 rounded p-3 bg-gray-50 flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">Ort 3: Küche</div>
                <div className="font-medium text-center">Interleaved Practice</div>
                <div className="mt-1 text-xs text-center">
                  (Stellen Sie sich vor: verschiedene Zutaten, die gemischt werden)
                </div>
              </div>
            </div>
            
            <div className="mb-4 text-sm text-center">
              Durch die Verknüpfung abstrakter Konzepte mit bekannten Orten können Sie sich eine Reihe von Informationen in der richtigen Reihenfolge merken.
            </div>
            
            <div className="mb-2 font-medium">Praktische Anwendungen:</div>
            <ul className="list-disc pl-5 text-sm">
              <li>Reden halten ohne Notizen</li>
              <li>Sich Fakten für Prüfungen merken</li>
              <li>Listen oder Sequenzen abrufen</li>
              <li>Vokabeln in Fremdsprachen lernen</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 9: Chapter 8 - Make It Stick
    {
      title: "Kapitel 8: Praktische Umsetzung",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700">
            "Die Fähigkeit zu lernen zu meistern ist entscheidend für den Erfolg in jedem Bereich."
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="font-bold text-blue-700 mb-2">Für Schüler & Studenten:</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Regelmäßige Selbsttests einbauen</li>
                <li>Lernsitzungen über die Zeit verteilen</li>
                <li>Verschiedene Themen mischen</li>
                <li>Konzepte mit eigenen Worten erklären</li>
                <li>Probleme selbst lösen versuchen</li>
                <li>Mnemotechniken für Fakten nutzen</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <div className="font-bold text-green-700 mb-2">Für lebenslang Lernende:</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Reflexion als Lernwerkzeug nutzen</li>
                <li>Bewusste Übung für gezielte Verbesserung</li>
                <li>Verknüpfungen mit vorhandenem Wissen herstellen</li>
                <li>Herausforderungen als Chancen sehen</li>
                <li>Mentale Modelle entwickeln</li>
                <li>Wissen regelmäßig kalibrieren</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg shadow">
              <div className="font-bold text-yellow-700 mb-2">Für Lehrer & Trainer:</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Effektive Lernstrategien selbst vormachen</li>
                <li>Niedrigschwellige Tests einsetzen</li>
                <li>Freies Erinnern fördern</li>
                <li>"Lernparagraphen" verwenden</li>
                <li>Wünschenswerte Schwierigkeiten integrieren</li>
                <li>Abwechslungsreiches Training gestalten</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-purple-700 mb-2">Praktischer Leitfaden für effektives Lernen:</div>
            <ol className="list-decimal pl-5">
              <li><strong>Vorwissen aktivieren</strong> - Was wissen Sie bereits über das Thema?</li>
              <li><strong>Ziele setzen</strong> - Was möchten Sie lernen? Warum ist es wichtig?</li>
              <li><strong>Aktiv lernen</strong> - Verwenden Sie Retrieval Practice, Generation und Elaboration</li>
              <li><strong>Lernen verteilen</strong> - Planen Sie regelmäßige, kürzere Lernsitzungen statt Marathons</li>
              <li><strong>Themen mischen</strong> - Wechseln Sie zwischen verwandten Konzepten</li>
              <li><strong>Wissen testen</strong> - Überprüfen Sie regelmäßig Ihr Verständnis</li>
              <li><strong>Fortschritt reflektieren</strong> - Was funktioniert? Was nicht?</li>
              <li><strong>Mentale Modelle entwickeln</strong> - Wie passen die Teile zusammen?</li>
            </ol>
          </div>
          
          <div className="p-4 border border-blue-300 rounded-lg bg-white">
            <div className="text-center font-bold mb-2">Praktisches Beispiel: Wochenplan für effektives Lernen</div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-2 border">Tag</th>
                    <th className="p-2 border">Aktivität</th>
                    <th className="p-2 border">Lernprinzip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Montag</td>
                    <td className="p-2 border">Neues Material lesen und Fragen formulieren</td>
                    <td className="p-2 border">Generation, Elaboration</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Dienstag</td>
                    <td className="p-2 border">Selbsttest zu Montags-Material, neues Thema einführen</td>
                    <td className="p-2 border">Retrieval Practice, Interleaving</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Mittwoch</td>
                    <td className="p-2 border">Früheres Material wiederholen, Konzepte verknüpfen</td>
                    <td className="p-2 border">Spaced Practice, Elaboration</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Donnerstag</td>
                    <td className="p-2 border">Gemischte Übungsaufgaben zu verschiedenen Themen</td>
                    <td className="p-2 border">Interleaved Practice, Retrieval</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Freitag</td>
                    <td className="p-2 border">Wochenrückblick, Erklären in eigenen Worten</td>
                    <td className="p-2 border">Retrieval, Elaboration</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Wochenende</td>
                    <td className="p-2 border">Kurze Wiederholung, Anwendung in realem Kontext</td>
                    <td className="p-2 border">Spaced Practice, Transfer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 10: Summary
    {
      title: "Zusammenfassung",
      content: (
        <div className="h-full">
          <div className="mb-6 italic text-gray-700 text-center text-xl">
            "Es geht nicht darum, härter zu lernen, sondern intelligenter zu lernen."
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow mb-6">
            <div className="font-bold text-blue-700 mb-2 text-center">Kernbotschaften von "Make It Stick":</div>
            <ol className="list-decimal pl-5">
              <li><strong>Vergessen Sie alte Lerngewohnheiten</strong> - Wiederholtes Lesen und massiertes Üben sind weniger effektiv als wir denken</li>
              <li><strong>Nutzen Sie aktive Lernstrategien</strong> - Retrieval Practice, Spacing, Interleaving, Generation, Elaboration</li>
              <li><strong>Begrüßen Sie Schwierigkeiten</strong> - Anstrengung beim Lernen ist ein Zeichen für tieferes Lernen</li>
              <li><strong>Vermeiden Sie Illusionen des Wissens</strong> - Testen Sie Ihr Wissen regelmäßig objektiv</li>
              <li><strong>Konzentrieren Sie sich auf effektive Strategien</strong> - Nicht auf Lernstile</li>
              <li><strong>Entwickeln Sie Ihre Fähigkeiten</strong> - Durch gezielte Übung und mentale Modelle</li>
              <li><strong>Werden Sie ein selbstgesteuerter Lerner</strong> - Übernehmen Sie die Kontrolle über Ihren Lernprozess</li>
            </ol>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg shadow flex flex-col items-center">
              <div className="font-bold text-green-700 mb-2 flex items-center">
                <Repeat size={20} className="mr-2" />
                Retrieval Practice
              </div>
              <div className="text-sm text-center">
                Rufen Sie Informationen aktiv aus dem Gedächtnis ab statt sie passiv zu lesen
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg shadow flex flex-col items-center">
              <div className="font-bold text-yellow-700 mb-2 flex items-center">
                <ChevronLeft size={16} className="mr-1" />
                Spaced Practice
                <ChevronRight size={16} className="ml-1" />
              </div>
              <div className="text-sm text-center">
                Verteilen Sie Ihr Lernen über die Zeit statt alles auf einmal zu lernen
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg shadow flex flex-col items-center">
              <div className="font-bold text-purple-700 mb-2 flex items-center">
                <Shuffle size={20} className="mr-2" />
                Interleaved Practice
              </div>
              <div className="text-sm text-center">
                Mischen Sie verschiedene Themen und Aufgabentypen anstatt blockweise zu üben
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-blue-300 rounded-lg bg-white text-center">
            <div className="font-bold mb-4 text-lg">Ihr erster Schritt zu besserem Lernen:</div>
            <div className="mb-4">
              Wählen Sie <strong>eine</strong> Strategie aus diesem Buch und implementieren Sie sie noch diese Woche in Ihre Lernroutine.
            </div>
            <div className="text-sm text-gray-600">
              "The journey of a thousand miles begins with a single step." - Laozi
            </div>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
        {slides[currentSlide].subtitle && 
          <h2 className="text-lg text-blue-100">{slides[currentSlide].subtitle}</h2>
        }
      </div>
      
      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {slides[currentSlide].content}
      </div>
      
      {/* Navigation */}
      <div className="bg-gray-100 p-4 flex justify-between items-center border-t border-gray-300">
        <button 
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded ${currentSlide === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          <ChevronLeft size={20} className="mr-2" />
          Zurück
        </button>
        
        <div className="text-gray-600">
          Folie {currentSlide + 1} von {slides.length}
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded ${currentSlide === slides.length - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          Weiter
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MakeItStickPresentation;