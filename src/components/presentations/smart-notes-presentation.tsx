import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Lightbulb, Check, Brain } from 'lucide-react';

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

  // Arten von Notizen Komponente
  const NoteTypes = () => {
    return (
      <div className="flex flex-col items-center w-full">
        <h3 className="text-xl mb-6 font-bold">Die drei Arten von Notizen</h3>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md w-64">
            <h4 className="font-bold mb-2">Flüchtige Notizen</h4>
            <p className="text-sm">Kurze Gedächtnisstützen, Ideen, die später verarbeitet werden</p>
            <div className="mt-3 text-xs italic">Beispiel: "Artikel über Lernmethoden in Spektrum der Wissenschaft 5/2023 lesen"</div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg shadow-md w-64">
            <h4 className="font-bold mb-2">Literaturhinweise</h4>
            <p className="text-sm">Quellenangaben und kurze Zusammenfassung</p>
            <div className="mt-3 text-xs italic">Beispiel: "Ahrens (2017): Schreiben ist ein Werkzeug zum Denken, nicht nur zur Kommunikation (S. 15-17)"</div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg shadow-md w-64">
            <h4 className="font-bold mb-2">Permanente Notizen</h4>
            <p className="text-sm">Vollständige, kontextunabhängige Gedanken für den Zettelkasten</p>
            <div className="mt-3 text-xs italic">Beispiel: "Schreiben als Denkmethode verändert den Lernprozess grundlegend, da es zur aktiven Auseinandersetzung zwingt, während passives Lesen oft nur Scheinwissen erzeugt."</div>
          </div>
        </div>
      </div>
    );
  };

  // Zettelkasten Visualisierung
  const ZettelkastenVisual = () => {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-xl mb-6 font-bold">Zettelkasten Visualisierung</h3>
        <div className="relative w-full max-w-2xl h-64 bg-gray-100 rounded-lg border-2 border-gray-300 p-4">
          {/* Zettel */}
          <div className="absolute top-6 left-8 w-40 h-24 bg-white shadow-md p-2 text-xs rounded border border-gray-400 transform rotate-1">
            <div className="font-bold mb-1 text-gray-700">Zettel #1: Schreiben als Denkprozess</div>
            <div className="text-xs">Schreiben ist kein Ergebnis, sondern ein Werkzeug des Denkens.</div>
            <div className="text-right mt-1 text-blue-500">→ #4, #7</div>
          </div>
          
          <div className="absolute top-12 left-48 w-40 h-24 bg-white shadow-md p-2 text-xs rounded border border-gray-400 transform -rotate-1">
            <div className="font-bold mb-1 text-gray-700">Zettel #4: Aktives Lernen</div>
            <div className="text-xs">Aktives Lernen durch Schreiben führt zu tieferem Verständnis.</div>
            <div className="text-right mt-1 text-blue-500">→ #1, #12</div>
          </div>
          
          <div className="absolute top-20 left-28 w-40 h-24 bg-white shadow-md p-2 text-xs rounded border border-gray-400 transform rotate-2">
            <div className="font-bold mb-1 text-gray-700">Zettel #7: Externalisierung von Gedanken</div>
            <div className="text-xs">Gedanken externalisieren entlastet das Gehirn.</div>
            <div className="text-right mt-1 text-blue-500">→ #1, #15</div>
          </div>
          
          <div className="absolute bottom-6 right-8 w-40 h-24 bg-white shadow-md p-2 text-xs rounded border border-gray-400 transform -rotate-2">
            <div className="font-bold mb-1 text-gray-700">Zettel #12: Netzwerk statt Hierarchie</div>
            <div className="text-xs">Wissen in Netzwerken statt in hierarchischen Strukturen organisieren.</div>
            <div className="text-right mt-1 text-blue-500">→ #4, #21</div>
          </div>
          
          {/* Verbindungslinien */}
          <svg className="absolute inset-0 w-full h-full" style={{zIndex: 0}}>
            <line x1="50" y1="45" x2="150" y2="65" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="50" y1="45" x2="90" y2="100" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="150" y1="65" x2="330" y2="180" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="90" y1="100" x2="330" y2="180" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2,2" />
          </svg>
        </div>
        <div className="text-sm italic mt-4 text-gray-600">
          Die Notizen werden durch Verweise miteinander verknüpft und bilden ein Netzwerk von Gedanken
        </div>
      </div>
    );
  };

  // Workflow Diagramm
  const WorkflowDiagram = () => {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-xl mb-6 font-bold">Workflow des Zettelkasten-Systems</h3>
        <div className="w-full max-w-2xl">
          <div className="flex flex-col space-y-3">
            {/* Workflow-Schritte */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
              <div className="ml-4 p-3 bg-blue-100 rounded-md flex-1">
                <div className="font-bold">Flüchtige Notizen erstellen</div>
                <div className="text-sm">Ideen und Gedanken sofort festhalten</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ChevronDown size={20} />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <div className="ml-4 p-3 bg-blue-100 rounded-md flex-1">
                <div className="font-bold">Literaturhinweise sammeln</div>
                <div className="text-sm">Quellen und kurze Zusammenfassungen in Referenzsystem</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ChevronDown size={20} />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="ml-4 p-3 bg-blue-100 rounded-md flex-1">
                <div className="font-bold">Permanente Notizen erstellen</div>
                <div className="text-sm">Eine Idee pro Notiz, in eigenen Worten, vollständige Sätze</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ChevronDown size={20} />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
              <div className="ml-4 p-3 bg-blue-100 rounded-md flex-1">
                <div className="font-bold">Notizen verknüpfen</div>
                <div className="text-sm">Verbindungen zu bestehenden Notizen herstellen</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ChevronDown size={20} />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">5</div>
              <div className="ml-4 p-3 bg-blue-100 rounded-md flex-1">
                <div className="font-bold">Ideen entwickeln</div>
                <div className="text-sm">Durch Verbindungen entstehen neue Gedanken</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ChevronDown size={20} />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">6</div>
              <div className="ml-4 p-3 bg-blue-100 rounded-md flex-1">
                <div className="font-bold">Erkenntnisse teilen</div>
                <div className="text-sm">Texte aus vernetzten Notizen schreiben</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Praktisches Beispiel
  const PraktischesBeispiel = () => {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-xl mb-6 font-bold">Praktisches Beispiel: Von der Idee zur permanenten Notiz</h3>
        
        <div className="w-full max-w-2xl mb-4">
          <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
            <h4 className="font-bold text-sm">1. Flüchtige Notiz (im Notizbuch)</h4>
            <p className="italic text-sm mt-2">
              "Interessanter Gedanke in Ahrens S. 43: Wir können nicht vorhersagen, welche Ideen in Zukunft wichtig sein werden."
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-2xl mb-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
            <h4 className="font-bold text-sm">2. Literaturhinweis (in Zotero)</h4>
            <p className="italic text-sm mt-2">
              "Ahrens, S. (2017): How to Take Smart Notes.<br/>
              S. 43: Der Autor argumentiert, dass wir nicht vorhersagen können, welche Ideen später wichtig werden. Daher ist es wichtig, Notizen unabhängig von ihrer aktuellen Relevanz zu erfassen und zu vernetzen."
            </p>
          </div>
        </div>
        
        <div className="w-full max-w-2xl mb-4">
          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
            <h4 className="font-bold text-sm">3. Permanente Notiz (im Zettelkasten)</h4>
            <p className="italic text-sm mt-2">
              "# Unvorhersehbarkeit relevanter Ideen<br/><br/>
              Die Relevanz von Ideen kann zum Zeitpunkt ihrer Entdeckung oft nicht vollständig erkannt werden. Das ist ein starkes Argument gegen thematische Ordnungssysteme, die eine Vorab-Kategorisierung erfordern.<br/><br/>
              Ein netzwerkartiges System wie der Zettelkasten ermöglicht es, Ideen zunächst ohne Bewertung ihrer Wichtigkeit zu erfassen und trotzdem später wiederzufinden, wenn ihre Bedeutung klarer wird.<br/><br/>
              → Verbunden mit #12 (Emergenz in Wissenssystemen)<br/>
              → Verbunden mit #27 (Grenzen hierarchischer Ordnungssysteme)<br/><br/>
              Quelle: Ahrens, S. (2017): How to Take Smart Notes, S. 43"
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Define ChevronDown component
  const ChevronDown = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  // Slide-Inhalte
  const slides = [
    // Slide 1: Titelseite
    {
      title: "How to Take Smart Notes",
      subtitle: "Highlights & Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <BookOpen size={80} className="mb-6 text-blue-500" />
          <h1 className="text-4xl font-bold mb-4">How to Take Smart Notes</h1>
          <h2 className="text-2xl text-gray-600">Highlights & Umsetzungsleitfaden</h2>
          <p className="mt-6 text-gray-500">Basierend auf dem Buch von Sönke Ahrens</p>
        </div>
      )
    },
    
    // Slide 2: Kernprinzipien
    {
      title: "Die vier Grundprinzipien",
      icon: <Lightbulb size={24} />,
      content: (
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold mb-4">Die vier Grundprinzipien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2">1. Schreiben ist das Einzige, was zählt</h3>
              <p className="text-sm">Schreiben ist nicht das Ergebnis von Denken, sondern das Medium des Denkens selbst.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2">2. Einfachheit ist entscheidend</h3>
              <p className="text-sm">Komplexität bewältigen durch einfache, effiziente Systeme und Prozesse.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2">3. Niemand fängt bei Null an</h3>
              <p className="text-sm">Bauen Sie auf vorhandenes Wissen auf und vernetzen Sie Ihre Gedanken.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2">4. Die Arbeit soll einen vorantreiben</h3>
              <p className="text-sm">Der Zettelkasten wird zum Dialogpartner und Ideengenerator, der die Arbeit erleichtert.</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
            <p className="text-sm"><strong>Kerngedanke:</strong> Der Zettelkasten dient als externes "Gerüst" für das Denken und kompensiert die Begrenzungen unseres Gehirns.</p>
          </div>
        </div>
      )
    },
    
    // Slide 3: Die drei Arten von Notizen
    {
      title: "Die drei Arten von Notizen",
      icon: <BookOpen size={24} />,
      content: <NoteTypes />
    },
    
    // Slide 4: Sechs Schritte zu erfolgreichem Schreiben
    {
      title: "Arbeitsablauf",
      icon: <BookOpen size={24} />,
      content: <WorkflowDiagram />
    },
    
    // Slide 5: Notwendige Werkzeuge
    {
      title: "Notwendige Werkzeuge",
      icon: <BookOpen size={24} />,
      content: (
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold mb-4">Notwendige Werkzeuge</h2>
          <p className="italic text-gray-600 text-center">"Mehr ist unnötig, weniger ist unmöglich"</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
                <h3 className="font-bold">Etwas zum Schreiben</h3>
              </div>
              <p className="text-sm">Stift und Papier oder eine einfache Notiz-App zum schnellen Festhalten von Ideen.</p>
              <div className="mt-3 text-xs bg-gray-100 p-2 rounded">
                <strong>Tipp:</strong> Ein kleines Notizbuch, das Sie immer bei sich tragen können.
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
                <h3 className="font-bold">Referenzverwaltungssystem</h3>
              </div>
              <p className="text-sm">Zum Sammeln von Literaturhinweisen und bibliographischen Daten.</p>
              <div className="mt-3 text-xs bg-gray-100 p-2 rounded">
                <strong>Empfehlung:</strong> Zotero (kostenlos, mit Browser-Plugin)
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
                <h3 className="font-bold">Zettelkasten</h3>
              </div>
              <p className="text-sm">Zum Vernetzen und Entwickeln von permanenten Notizen.</p>
              <div className="mt-3 text-xs bg-gray-100 p-2 rounded">
                <strong>Empfehlung:</strong> Zettelkasten von Daniel Lüdecke oder moderne Alternativen wie Obsidian, Roam Research, Logseq
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">4</div>
                <h3 className="font-bold">Texteditor</h3>
              </div>
              <p className="text-sm">Zum Verfassen von Texten basierend auf den Notizen.</p>
              <div className="mt-3 text-xs bg-gray-100 p-2 rounded">
                <strong>Tipp:</strong> Ein einfacher Editor, der mit Ihrem Referenzsystem zusammenarbeitet
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Zettelkasten Visualisierung
    {
      title: "Zettelkasten Visualisierung",
      icon: <Brain size={24} />,
      content: <ZettelkastenVisual />
    },
    
    // Slide 7: Praktisches Beispiel
    {
      title: "Praktisches Beispiel",
      icon: <Check size={24} />,
      content: <PraktischesBeispiel />
    },
    
    // Slide 8: Tipps für die Umsetzung
    {
      title: "Tipps für die Umsetzung",
      icon: <Lightbulb size={24} />,
      content: (
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold mb-4">Tipps für die erfolgreiche Umsetzung</h2>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold mb-3">Täglich umsetzen</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verarbeiten Sie Ihre flüchtigen Notizen idealerweise täglich</li>
              <li>Reservieren Sie feste Zeiten für das Erstellen permanenter Notizen</li>
              <li>Beginnen Sie mit wenigen, aber qualitativ hochwertigen Notizen</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold mb-3">Permanente Notizen richtig erstellen</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eine Idee pro Notiz</li>
              <li>Vollständige Sätze, die auch ohne Kontext verständlich sind</li>
              <li>Quellen nennen und präzise Verweise machen</li>
              <li>Denken Sie über mögliche Verbindungen zu bestehenden Notizen nach</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold mb-3">Fehler vermeiden</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vermeiden Sie zu viele Kategorien oder Tags (Überordnung)</li>
              <li>Halten Sie Literaturhinweise und permanente Notizen getrennt</li>
              <li>Notieren Sie eigene Gedanken, keine bloßen Zitate</li>
              <li>Perfektionismus vermeiden - das System wächst mit der Zeit</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 9: Zusammenfassung und Start
    {
      title: "Zusammenfassung und Start",
      icon: <Check size={24} />,
      content: (
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold mb-4">Zusammenfassung und Start</h2>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-3">Die Kernbotschaft</h3>
            <p className="mb-4">Der Zettelkasten ist kein reines Archiv, sondern ein Werkzeug zum Denken und ein "Dialogpartner" bei der Entwicklung neuer Ideen.</p>
            <p>Das Schreiben von intelligenten, vernetzten Notizen ist der Schlüssel zu effektivem Lernen, Forschen und Schreiben.</p>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h3 className="font-bold mb-3">So starten Sie heute</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Besorgen Sie die vier grundlegenden Werkzeuge</li>
              <li>Beginnen Sie mit dem Erstellen flüchtiger Notizen</li>
              <li>Verarbeiten Sie diese zu permanenten Notizen</li>
              <li>Legen Sie Wert auf Verknüpfungen zwischen Notizen</li>
              <li>Machen Sie es zur täglichen Gewohnheit</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
            <h3 className="font-bold mb-3">Langfristiger Nutzen</h3>
            <p>Mit der Zeit bauen Sie einen "Schatz" von intelligenten, vernetzten Notizen auf, der Ihnen nicht nur beim Schreiben hilft, sondern auch Ihr Denken, Lernen und die Entwicklung neuer Ideen fördert.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header mit Titel und Navigation */}
      <header className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">How to Take Smart Notes</h1>
          <div className="flex space-x-2 items-center">
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-300' : 'text-blue-500 hover:bg-blue-50'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-sm text-gray-500">{currentSlide + 1} / {slides.length}</span>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-blue-500 hover:bg-blue-50'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Hauptinhalt der Präsentation */}
      <main className="flex-1 flex">
        <div className="w-1/4 bg-white shadow-md p-6 overflow-auto">
          <nav>
            <ul className="space-y-2">
              {slides.map((slide, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setCurrentSlide(index)} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${currentSlide === index ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                  >
                    {slide.icon && <span className="mr-2">{slide.icon}</span>}
                    <span className={`${currentSlide === index ? 'font-medium' : ''}`}>{slide.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>
      
      {/* Footer mit Navigation */}
      <footer className="bg-white shadow-md p-4 mt-auto">
        <div className="flex justify-between max-w-4xl mx-auto">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-md flex items-center ${currentSlide === 0 ? 'text-gray-300' : 'text-blue-500 hover:bg-blue-50'}`}
          >
            <ChevronLeft size={18} className="mr-1" />
            Zurück
          </button>
          
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className={`px-4 py-2 rounded-md flex items-center ${currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-blue-500 hover:bg-blue-50'}`}
          >
            Weiter
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;
