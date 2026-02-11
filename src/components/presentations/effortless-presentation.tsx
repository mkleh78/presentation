import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Check, X, Coffee, Brain, Award, Clock, Eye, Compass, Zap, BookOpen, Users, Shield, BarChart2 } from 'lucide-react';

const EffortlessPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showImplementationGuide, setShowImplementationGuide] = useState(false);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToHome = () => {
    setCurrentSlide(0);
  };

  const toggleImplementationGuide = () => {
    setShowImplementationGuide(!showImplementationGuide);
  };

  // Color themes
  const colors = {
    primary: 'bg-indigo-600',
    primaryLight: 'bg-indigo-100',
    secondary: 'bg-amber-500',
    secondaryLight: 'bg-amber-100',
    tertiary: 'bg-emerald-500',
    tertiaryLight: 'bg-emerald-100',
  };

  // Implementation examples for each chapter
  const implementationExamples = [
    {
      chapter: 1,
      title: "Invertieren: Was, wenn es einfach sein könnte?",
      examples: [
        "Statt zu denken 'Ich muss jeden Tag eine Stunde trainieren', fragen Sie sich: 'Wie könnte ich Bewegung so einfach wie möglich machen?' (z.B. 10-Minuten-Workouts oder Spaziergänge während Telefonaten)",
        "Wenn Sie ein wichtiges Dokument schreiben müssen und es als schwierig empfinden, fragen Sie sich: 'Was wäre der einfachste erste Schritt?' (z.B. einfach nur Stichpunkte sammeln, ohne den Druck, vollständige Sätze zu formulieren)"
      ]
    },
    {
      chapter: 2,
      title: "Genießen: Was, wenn es Spaß machen könnte?",
      examples: [
        "Unangenehme E-Mails beantworten während Sie Ihre Lieblingsmusik hören",
        "Die Wäsche falten während Sie einen interessanten Podcast hören",
        "Ein Morgenkaffee-Ritual, bevor Sie mit der Arbeit beginnen"
      ]
    },
    {
      chapter: 3,
      title: "Loslassen: Die Kraft des Loslassens",
      examples: [
        "Groll-Ritual: Schreiben Sie Ihre negativen Gefühle auf einen Zettel und verbrennen Sie ihn symbolisch",
        "Tägliche Praxis: Bei jeder Beschwerde bewusst etwas nennen, wofür Sie dankbar sind",
        "Fünf-Minuten-Meditation zur Loslösung von belastenden Gedanken"
      ]
    },
    {
      chapter: 4,
      title: "Ausruhen: Die Kunst des Nichtstuns",
      examples: [
        "Pomodoro-Technik: 25 Minuten konzentrierte Arbeit, 5 Minuten Pause",
        "Fester Tagespunkt für ein 20-Minuten-Nickerchen nach dem Mittagessen",
        "Abendliches Ritual ohne Bildschirme, um besseren Schlaf zu fördern"
      ]
    },
    {
      chapter: 5,
      title: "Wahrnehmen: Wie man klar sieht",
      examples: [
        "Achtsames Zuhören: Bei Gesprächen bewusst auf Unterbrechungen verzichten",
        "Tägliche 10-Minuten-Übung für präsente Wahrnehmung und Dankbarkeit",
        "Bewusste Beobachtung der Umgebung während eines Spaziergangs (ohne Handy)"
      ]
    },
    {
      chapter: 6,
      title: "Definieren: Wie 'Erledigt' aussieht",
      examples: [
        "Vor Projektbeginn: Schriftlich definieren, wie das konkrete Endergebnis aussehen soll",
        "'Erledigt für heute'-Liste mit maximal 3 wesentlichen Aufgaben",
        "Visualisierungsübung: Eine Minute mit geschlossenen Augen das erfolgreiche Projektergebnis vorstellen"
      ]
    },
    {
      chapter: 7,
      title: "Starten: Die erste offensichtliche Handlung",
      examples: [
        "Für das Schreiben eines Berichts: Nicht 'Bericht schreiben', sondern 'Dokument öffnen und Überschrift eingeben'",
        "10-Minuten-Microburst zum Starten einer aufgeschobenen Aufgabe",
        "Bei Überwältigung: Den kleinsten möglichen ersten Schritt identifizieren (z.B. eine E-Mail öffnen statt 'alle E-Mails beantworten')"
      ]
    },
    {
      chapter: 8,
      title: "Vereinfachen: Bei Null beginnen",
      examples: [
        "Überprüfung eines komplizierten Prozesses: 'Was wäre, wenn wir bei Null beginnen würden?' (z.B. Onboarding-Prozess)",
        "Projektbericht mit absoluten Minimum an notwendigen Informationen erstellen",
        "Amazon's 1-Click-Prinzip auf eigene Prozesse anwenden: 'Wie könnte ich das auf einen Schritt reduzieren?'"
      ]
    },
    {
      chapter: 9,
      title: "Fortschritt: Der Mut, schlecht zu sein",
      examples: [
        "Zero-Draft für wichtige Dokumente: Einfach schreiben, ohne Rücksicht auf Qualität",
        "Tägliche minimale Untergrenze festlegen (z.B. mindestens 10 Minuten an einem Projekt arbeiten)",
        "Bei neuen Fähigkeiten: Bewusst 'schlecht' sein und aus Fehlern lernen (z.B. neue Sprache sprechen trotz Fehlern)"
      ]
    },
    {
      chapter: 10,
      title: "Tempo: Langsam ist reibungslos, reibungslos ist schnell",
      examples: [
        "Arbeitsbereiche definieren: Mindestens 30 Minuten, höchstens 2 Stunden täglich an einem Projekt",
        "Bewusstes Verlangsamen bei komplexen Aufgaben, um Fehler zu vermeiden",
        "Regelmäßige 'Entschleunigungspausen' im Arbeitsalltag einplanen"
      ]
    },
    {
      chapter: 11,
      title: "Lernen: Das Beste nutzen, was andere wissen",
      examples: [
        "Lesezeit für 'Lindy-Bücher' einplanen (Klassiker, die die Zeit überdauert haben)",
        "Verbindungen zwischen verschiedenen Wissensgebieten herstellen (z.B. Prinzipien aus der Biologie auf Ihr Geschäft anwenden)",
        "Nach dem Lesen eines Buches: Die 3 wichtigsten Prinzipien zusammenfassen"
      ]
    },
    {
      chapter: 12,
      title: "Heben: Die Stärke von Zehn nutzen",
      examples: [
        "Anstatt komplexe Konzepte zu erklären, erzählen Sie eine eingängige Geschichte",
        "Das 'Sesame Street Simple'-Prinzip: Erklärungen so einfach machen, dass ein Kind sie verstehen könnte",
        "Lehren, um zu lernen: Ein Konzept einem Kollegen erklären, um es selbst besser zu verstehen"
      ]
    },
    {
      chapter: 13,
      title: "Automatisieren: Einmal tun und nie wieder",
      examples: [
        "Checkliste für wiederkehrende Prozesse erstellen (z.B. Monatsabschluss, Reisevorbereitungen)",
        "E-Mail-Vorlagen für häufige Anfragen erstellen",
        "Wiederkehrende Termine automatisch im Kalender eintragen"
      ]
    },
    {
      chapter: 14,
      title: "Vertrauen: Der Motor hocheffizienter Teams",
      examples: [
        "Klare Verantwortungsbereiche definieren, ohne Mikromanagement",
        "Regelmäßige Check-ins statt dauerhafte Überwachung",
        "Fehlerkultur etablieren: Teammitglieder ermutigen, aus Fehlern zu lernen ohne Angst vor Konsequenzen"
      ]
    },
    {
      chapter: 15,
      title: "Prävention: Probleme lösen, bevor sie entstehen",
      examples: [
        "Regelmäßige 'Präventionszeit' einplanen, um wiederkehrende Probleme zu identifizieren und zu lösen",
        "Bei neuen Projekten: Risiken vorab identifizieren und Gegenmaßnahmen planen",
        "Schwierige Gespräche früh führen, bevor Probleme eskalieren"
      ]
    }
  ];

  const slides = [
    // Slide 0: Title
    <div key="title" className="flex flex-col items-center justify-center h-full text-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">EFFORTLESS</h1>
      <h2 className="text-2xl mb-8">Der Weg zum mühelosen Erfolg</h2>
      <p className="text-xl mb-4">Nach dem Bestseller von Greg McKeown</p>
      <div className="mt-8 p-4 bg-indigo-50 rounded-lg max-w-lg">
        <p className="text-lg italic">"Es muss einen einfacheren Weg geben."</p>
      </div>
    </div>,

    // Slide 1: Introduction
    <div key="intro" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Die Kernidee des Buches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Das Problem</h3>
          <p className="mb-3">Viele Menschen kämpfen mit:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4 flex-grow">
            <li>Ständiger Erschöpfung trotz harter Arbeit</li>
            <li>Dem Gefühl, nie genug zu tun</li>
            <li>Komplexität, die einfache Aufgaben schwierig macht</li>
            <li>Der Annahme, dass wertvolle Ergebnisse immer Anstrengung erfordern</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Die Lösung</h3>
          <p className="mb-3">Ein müheloser Ansatz der:</p>
          <ul className="list-disc pl-5 space-y-2 flex-grow">
            <li>Die richtige Denkweise kultiviert: "Was, wenn es einfach sein könnte?"</li>
            <li>Handlungen mit Leichtigkeit ausführt statt übermäßiger Anstrengung</li>
            <li>Nachhaltige Systeme für wiederkehrende Ergebnisse schafft</li>
            <li>Kleine Hebel nutzt, um große Wirkungen zu erzielen</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 p-5 bg-indigo-50 rounded-lg">
        <p className="text-lg"><strong>Kernbotschaft:</strong> Es gibt einen einfacheren Weg, Wesentliches zu erreichen - ohne Burnout, Überlastung und übermäßige Kraftanstrengung.</p>
      </div>
    </div>,

    // Slide 2: Book Structure
    <div key="structure" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Die Struktur des Buches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        <div className={`${colors.primaryLight} p-6 rounded-lg shadow-md flex flex-col`}>
          <div className="flex items-center mb-4">
            <Brain className="text-indigo-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-indigo-700">Teil I: Effortless State</h3>
          </div>
          <p className="mb-3">Die richtige Denkweise entwickeln</p>
          <ul className="list-disc pl-5 space-y-1 flex-grow">
            <li>Invertieren: Es kann einfach sein</li>
            <li>Genießen: Es kann Spaß machen</li>
            <li>Loslassen: Der Ballast der Vergangenheit</li>
            <li>Ausruhen: Die Kunst des Nichtstuns</li>
            <li>Wahrnehmen: Klar sehen</li>
          </ul>
        </div>

        <div className={`${colors.secondaryLight} p-6 rounded-lg shadow-md flex flex-col`}>
          <div className="flex items-center mb-4">
            <Zap className="text-amber-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-amber-700">Teil II: Effortless Action</h3>
          </div>
          <p className="mb-3">Mühelose Handlungen ausführen</p>
          <ul className="list-disc pl-5 space-y-1 flex-grow">
            <li>Definieren: Was "Erledigt" bedeutet</li>
            <li>Starten: Der erste offensichtliche Schritt</li>
            <li>Vereinfachen: Bei Null beginnen</li>
            <li>Fortschritt: Der Mut, schlecht zu sein</li>
            <li>Tempo: Langsam ist reibungslos</li>
          </ul>
        </div>

        <div className={`${colors.tertiaryLight} p-6 rounded-lg shadow-md flex flex-col`}>
          <div className="flex items-center mb-4">
            <Award className="text-emerald-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-emerald-700">Teil III: Effortless Results</h3>
          </div>
          <p className="mb-3">Nachhaltige Ergebnisse erzielen</p>
          <ul className="list-disc pl-5 space-y-1 flex-grow">
            <li>Lernen: Das Beste von anderen nutzen</li>
            <li>Heben: Die Stärke von Zehn nutzen</li>
            <li>Automatisieren: Einmal tun, nie wieder</li>
            <li>Vertrauen: Der Motor effizienter Teams</li>
            <li>Prävention: Probleme vorab lösen</li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 3: Part I - Effortless State
    <div key="part1" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Teil I: Effortless State</h2>
      <p className="mb-6">Die richtige Denkweise für mühelose Ergebnisse entwickeln</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 flex-grow">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.primary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>1</div>
            <h3 className="font-semibold">Invertieren</h3>
          </div>
          <p className="text-sm">Fragen Sie: "Was wäre, wenn es einfach sein könnte?" statt anzunehmen, dass wertvoll immer schwierig bedeutet</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.primary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>2</div>
            <h3 className="font-semibold">Genießen</h3>
          </div>
          <p className="text-sm">Koppeln Sie wesentliche Aktivitäten mit genussvollen Elementen, um selbst schwierige Aufgaben angenehm zu gestalten</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.primary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>3</div>
            <h3 className="font-semibold">Loslassen</h3>
          </div>
          <p className="text-sm">Befreien Sie sich von emotionalen Lasten und Groll, die Ihre mentale Energie beanspruchen</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.primary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>4</div>
            <h3 className="font-semibold">Ausruhen</h3>
          </div>
          <p className="text-sm">Erkennen Sie den Wert von Ruhe und Erholung als wesentlichen Teil produktiver Arbeit</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.primary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>5</div>
            <h3 className="font-semibold">Wahrnehmen</h3>
          </div>
          <p className="text-sm">Entwickeln Sie Klarheit durch aufmerksame Wahrnehmung und Präsenz im gegenwärtigen Moment</p>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="italic">"Anstatt zu fragen 'Warum ist das so schwer?', fragen Sie: 'Was wäre, wenn es einfach sein könnte?'"</p>
      </div>
    </div>,

    // Slide 4: Part II - Effortless Action
    <div key="part2" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-amber-600">Teil II: Effortless Action</h2>
      <p className="mb-6">Wie Sie mit Leichtigkeit wesentliche Aufgaben ausführen</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 flex-grow">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.secondary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>6</div>
            <h3 className="font-semibold">Definieren</h3>
          </div>
          <p className="text-sm">Legen Sie klar fest, wie "erledigt" für eine Aufgabe aussieht, bevor Sie beginnen</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.secondary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>7</div>
            <h3 className="font-semibold">Starten</h3>
          </div>
          <p className="text-sm">Identifizieren Sie die einfachste, offensichtlichste erste Handlung und machen Sie sie so klein wie möglich</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.secondary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>8</div>
            <h3 className="font-semibold">Vereinfachen</h3>
          </div>
          <p className="text-sm">Beginnen Sie bei Null und fügen Sie nur die absolut notwendigen Schritte hinzu</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.secondary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>9</div>
            <h3 className="font-semibold">Fortschritt</h3>
          </div>
          <p className="text-sm">Haben Sie den Mut, anfangs schlecht zu sein, um durch Lernen schneller voranzukommen</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.secondary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>10</div>
            <h3 className="font-semibold">Tempo</h3>
          </div>
          <p className="text-sm">Finden Sie das richtige Tempo: Langsam ist reibungslos, reibungslos ist schnell</p>
        </div>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-lg">
        <p className="italic">"Jede große Leistung war am Anfang unzulänglich. Jede einzelne."</p>
      </div>
    </div>,

    // Slide 5: Part III - Effortless Results
    <div key="part3" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-emerald-600">Teil III: Effortless Results</h2>
      <p className="mb-6">Wie Sie nachhaltige, wiederkehrende Ergebnisse erzielen</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 flex-grow">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.tertiary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>11</div>
            <h3 className="font-semibold">Lernen</h3>
          </div>
          <p className="text-sm">Nutzen Sie das Beste aus dem Wissen anderer und konzentrieren Sie sich auf zugrundeliegende Prinzipien</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.tertiary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>12</div>
            <h3 className="font-semibold">Heben</h3>
          </div>
          <p className="text-sm">Nutzen Sie die Kraft des Lehrens, um Wissen zu multiplizieren und selbst tiefer zu verstehen</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.tertiary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>13</div>
            <h3 className="font-semibold">Automatisieren</h3>
          </div>
          <p className="text-sm">Erledigen Sie Dinge einmal und nie wieder durch Checklisten und Systeme</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.tertiary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>14</div>
            <h3 className="font-semibold">Vertrauen</h3>
          </div>
          <p className="text-sm">Bauen Sie auf Vertrauen als Motor für hocheffiziente Teams</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 ${colors.tertiary} rounded-full flex items-center justify-center text-white font-bold mr-2`}>15</div>
            <h3 className="font-semibold">Prävention</h3>
          </div>
          <p className="text-sm">Lösen Sie Probleme, bevor sie entstehen, und vermeiden Sie wiederholte Anstrengungen</p>
        </div>
      </div>
      
      <div className="bg-emerald-50 p-4 rounded-lg">
        <p className="italic">"Einmalige Investitionen können dauerhafte, wiederkehrende Ergebnisse erzeugen."</p>
      </div>
    </div>,

    // Slide 6: Key Principles
    <div key="principles" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Die 5 Kernprinzipien des Mühelosen</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
              <Brain size={24} />
            </div>
            <h3 className="text-lg font-semibold">Invertierte Denkweise</h3>
          </div>
          <p>"Was wäre, wenn es einfach sein könnte?" anstatt anzunehmen, dass wertvolle Ergebnisse schwierig sein müssen.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
              <Eye size={24} />
            </div>
            <h3 className="text-lg font-semibold">Klarheit schafft Mühelosigkeit</h3>
          </div>
          <p>Klar definierte Ziele und Endpunkte machen den Weg einfacher und vermeiden unnötige Umwege.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
              <Compass size={24} />
            </div>
            <h3 className="text-lg font-semibold">Kleiner Aufwand, große Wirkung</h3>
          </div>
          <p>Identifizieren Sie die wenigen Aktivitäten mit überdurchschnittlicher Wirkung und fokussieren Sie sich auf diese.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-semibold">Nachhaltiger Rhythmus</h3>
          </div>
          <p>Ein ausgewogenes Verhältnis zwischen Anstrengung und Erholung ermöglicht langfristige Leistungsfähigkeit ohne Burnout.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">
              <BarChart2 size={24} />
            </div>
            <h3 className="text-lg font-semibold">Residuale statt lineare Ergebnisse</h3>
          </div>
          <p>Streben Sie nach Systemen und Gewohnheiten, die einmal eingerichtet wiederholt Wert erzeugen, statt immer wieder die gleiche Anstrengung zu erfordern.</p>
        </div>
      </div>
    </div>,

    // Slide 7: Implementation Guide
    <div key="implementation" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Konkreter Umsetzungsleitfaden</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        <div className={`${colors.primaryLight} p-5 rounded-lg shadow-md`}>
          <h3 className="text-lg font-semibold mb-3 text-indigo-700">Effortless State</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check size={20} className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
              <p>Morgens 1 Minute invertierte Denkweise üben: "Was wäre, wenn diese Aufgabe einfach sein könnte?"</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
              <p>Eine Liste Ihrer "Bausteine der Freude" erstellen und mit wesentlichen Aufgaben verbinden</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
              <p>Tägliche 10-Minuten-Übung für präsente Wahrnehmung und Dankbarkeit</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
              <p>Arbeiten in 90-Minuten-Blöcken mit Pausen dazwischen</p>
            </li>
          </ul>
        </div>
        
        <div className={`${colors.secondaryLight} p-5 rounded-lg shadow-md`}>
          <h3 className="text-lg font-semibold mb-3 text-amber-700">Effortless Action</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>Tägliche "Erledigt für heute"-Liste mit maximal 3 wesentlichen Aufgaben</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>Die erste offensichtliche Handlung so klein wie möglich gestalten</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>Bei Prozessen: "Start with Zero" - Beginnen Sie bei Null und fügen Sie nur das Notwendige hinzu</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>Für jeden Arbeitstag Ober- und Untergrenzen für wichtige Aktivitäten setzen</p>
            </li>
          </ul>
        </div>
        
        <div className={`${colors.tertiaryLight} p-5 rounded-lg shadow-md`}>
          <h3 className="text-lg font-semibold mb-3 text-emerald-700">Effortless Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check size={20} className="text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>Wöchentliche Lesezeit für prinzipienbasiertes Lernen einplanen</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>Konzepte vereinfachen und in Geschichten verpacken, um sie zu lehren</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>Checklisten für wiederkehrende Prozesse erstellen</p>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>Monatliche "Präventionszeit" für Problemidentifikation und -lösung einplanen</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <Coffee size={20} className="text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold">Tipp für den Start:</h3>
        </div>
        <p>Beginnen Sie mit <strong>einem Prinzip pro Woche</strong>. Experimentieren Sie mit der Umsetzung und reflektieren Sie am Ende der Woche, was Sie gelernt haben. Bauen Sie Schritt für Schritt Ihr eigenes System des mühelosen Erfolgs auf.</p>
      </div>
    </div>,

    // Slide 8: Common Barriers
    <div key="barriers" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Typische Hindernisse und Lösungen</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <X size={20} className="text-red-500 mr-2" />
            <h3 className="text-lg font-semibold">Perfektionismus</h3>
          </div>
          <p className="mb-3 text-gray-700">Der Glaube, dass etwas nur wertvoll ist, wenn es perfekt gemacht wird.</p>
          <div className="p-3 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-1">Lösung:</h4>
            <p>Konzept des "Zero-Drafts" anwenden - erlauben Sie sich, anfangs schlecht zu sein. Setzen Sie sich bewusst niedrigere Standards für den ersten Versuch.</p>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <X size={20} className="text-red-500 mr-2" />
            <h3 className="text-lg font-semibold">Überwältigung</h3>
          </div>
          <p className="mb-3 text-gray-700">Das Gefühl, dass eine Aufgabe zu groß oder zu komplex ist, um sie anzugehen.</p>
          <div className="p-3 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-1">Lösung:</h4>
            <p>Fokussieren Sie sich nur auf die erste offensichtliche Handlung. Machen Sie sie so klein und einfach wie möglich (z.B. nur ein Dokument öffnen oder die erste E-Mail beantworten).</p>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <X size={20} className="text-red-500 mr-2" />
            <h3 className="text-lg font-semibold">Erschöpfung</h3>
          </div>
          <p className="mb-3 text-gray-700">Permanent müde und ausgelaugt sein, wodurch selbst einfache Aufgaben schwer erscheinen.</p>
          <div className="p-3 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-1">Lösung:</h4>
            <p>Implementieren Sie die 90-Minuten-Regel: Arbeiten Sie maximal 90 Minuten am Stück, gefolgt von einer echten Pause. Priorisieren Sie ausreichend Schlaf und bewusste Erholungsphasen.</p>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <X size={20} className="text-red-500 mr-2" />
            <h3 className="text-lg font-semibold">Unnötige Komplexität</h3>
          </div>
          <p className="mb-3 text-gray-700">Prozesse und Aufgaben komplizierter machen, als sie sein müssten.</p>
          <div className="p-3 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-1">Lösung:</h4>
            <p>Start with Zero: Beginnen Sie bei Null und fragen Sie sich für jeden Schritt: "Ist dies absolut notwendig, um das gewünschte Ergebnis zu erreichen?" Orientieren Sie sich am Amazon 1-Click-Prinzip.</p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 9: Application Scenarios
    <div key="scenarios" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Anwendungsbeispiele für verschiedene Lebensbereiche</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Berufsleben</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p>Erstellen Sie eine Checkliste für wiederkehrende Meetings, um mentale Ressourcen zu sparen</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p>Definieren Sie für jedes Projekt klar, wie "erledigt" aussieht, bevor Sie beginnen</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p>Vereinfachen Sie Ihre E-Mail-Kommunikation durch vorgefertigte Vorlagen für häufige Anfragen</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Persönliche Entwicklung</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p>Integrieren Sie Lernzeit in angenehme Aktivitäten (z.B. Hörbücher beim Spazierengehen)</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p>Setzen Sie sich täglich eine untere und obere Grenze für Lernaktivitäten (z.B. min. 10, max. 30 Min.)</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p>Lehren Sie anderen, was Sie gerade lernen, um Ihr eigenes Verständnis zu vertiefen</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Haushalt & Familie</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p>Verbinden Sie Haushaltsaufgaben mit angenehmen Aktivitäten (z.B. Podcast beim Aufräumen)</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p>Erstellen Sie ein automatisiertes System für wiederkehrende Einkäufe und Haushaltsaufgaben</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p>Etablieren Sie einfache Familienrituale, die wenig Aufwand, aber große Wirkung haben</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Gesundheit & Wohlbefinden</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p>Definieren Sie minimale Bewegungseinheiten, die Sie auch an stressigen Tagen einhalten können</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p>Planen Sie Präventionsmaßnahmen wie regelmäßige Check-ups automatisch in Ihren Kalender ein</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p>Erschaffen Sie ein Schlafenszeit-Ritual, das die Schlafqualität verbessert und mental entlastet</p>
            </li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 10: Personal Implementation Plan
    <div key="plan" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Ihr persönlicher 30-Tage-Umsetzungsplan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        <div className={`${colors.primaryLight} p-5 rounded-lg shadow-md`}>
          <h3 className="text-lg font-semibold mb-3 text-indigo-700">Woche 1: Effortless State</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">Mo</div>
              <p>Identifizieren Sie 3 Aufgaben, die Sie komplizierter machen als nötig</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">Di</div>
              <p>Erstellen Sie Ihre Liste der "Bausteine der Freude"</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">Mi</div>
              <p>Üben Sie die "Bei Beschwerde - Dankbarkeit"-Regel</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">Do</div>
              <p>Planen Sie bewusste Pausen in Ihren Tag ein</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">Fr</div>
              <p>Üben Sie die 10-Minuten Achtsamkeitsübung</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">WE</div>
              <p>Wochenreflexion: Was war einfacher als erwartet?</p>
            </li>
          </ul>
        </div>
        
        <div className={`${colors.secondaryLight} p-5 rounded-lg shadow-md`}>
          <h3 className="text-lg font-semibold mb-3 text-amber-700">Woche 2-3: Effortless Action</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-amber-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p>Beginnen Sie jeden Tag mit einer "Erledigt für heute"-Liste (max. 3 Punkte)</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-amber-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p>Für jede wesentliche Aufgabe: Definieren Sie klar, wie "erledigt" aussieht</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-amber-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p>Wenden Sie das Zero-Draft-Konzept auf ein aktuelles Projekt an</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-amber-600 mr-2 mt-0.5 flex-shrink-0">4</div>
              <p>Identifizieren Sie bei einem komplexen Prozess, welche Schritte überflüssig sind</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-amber-600 mr-2 mt-0.5 flex-shrink-0">5</div>
              <p>Setzen Sie für ein wichtiges Projekt Ober- und Untergrenzen der täglichen Arbeit</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-amber-600 mr-2 mt-0.5 flex-shrink-0">6</div>
              <p>Wochenreflexion: Was haben Sie durch Vereinfachung gewonnen?</p>
            </li>
          </ul>
        </div>
        
        <div className={`${colors.tertiaryLight} p-5 rounded-lg shadow-md`}>
          <h3 className="text-lg font-semibold mb-3 text-emerald-700">Woche 4: Effortless Results</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 mr-2 mt-0.5 flex-shrink-0">Mo</div>
              <p>Erstellen Sie eine Checkliste für einen wiederkehrenden Prozess</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 mr-2 mt-0.5 flex-shrink-0">Di</div>
              <p>Suchen Sie nach einem Problem, das Sie durch Prävention lösen können</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 mr-2 mt-0.5 flex-shrink-0">Mi</div>
              <p>Vereinfachen Sie ein Konzept so, dass Sie es einem Kind erklären könnten</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 mr-2 mt-0.5 flex-shrink-0">Do</div>
              <p>Identifizieren Sie einen Bereich, in dem Sie anderen mehr vertrauen könnten</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 mr-2 mt-0.5 flex-shrink-0">Fr</div>
              <p>Automatisieren Sie wiederkehrende Termine in Ihrem Kalender</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-600 mr-2 mt-0.5 flex-shrink-0">WE</div>
              <p>Gesamtreflexion: Welche Prinzipien waren am wertvollsten?</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <p className="italic text-center">"Vergessen Sie nicht: Der Schlüssel liegt nicht darin, mehr zu tun, sondern das Richtige einfacher zu machen."</p>
      </div>
    </div>,

    // Slide 11: Chapter Examples
    <div key="examples" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Umsetzungsbeispiele aus dem Buch</h2>
      <p className="mb-4">Klicken Sie auf ein Kapitel, um spezifische Umsetzungsbeispiele zu sehen:</p>
      
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-6">
        {Array.from({ length: 15 }, (_, i) => (
          <button
            key={i}
            className={`p-2 rounded-lg text-sm font-medium ${currentSlide === i + 12 ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}
            onClick={() => goToSlide(i + 12)}
          >
            Kap. {i + 1}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md flex-grow overflow-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Wählen Sie ein Kapitel aus</h3>
        <p className="text-center text-gray-600">Klicken Sie auf eine der Kapitelnummern oben, um spezifische Umsetzungsbeispiele zu diesem Kapitel zu sehen.</p>
        <div className="flex justify-center mt-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
            <BookOpen size={40} />
          </div>
        </div>
      </div>
    </div>,

    // Slide 12-26: Individual Chapter Implementation Examples
    ...implementationExamples.map((chapter, index) => (
      <div key={`chapter-${chapter.chapter}`} className="flex flex-col h-full p-8">
        <div className="flex items-center mb-6">
          <button
            className="mr-4 p-2 bg-indigo-100 rounded-lg hover:bg-indigo-200 text-indigo-700"
            onClick={() => goToSlide(11)}
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold text-indigo-700">Kapitel {chapter.chapter}: {chapter.title}</h2>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Konkrete Umsetzungsbeispiele:</h3>
          <ul className="space-y-4">
            {chapter.examples.map((example, i) => (
              <li key={i} className="flex items-start">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3 mt-0.5 flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-lg">{example}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )),

    // Slide 27: Summary & Next Steps
    <div key="summary" className="flex flex-col h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Zusammenfassung & nächste Schritte</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Die wichtigsten Erkenntnisse</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p>Es gibt immer einen leichteren Weg. Die Frage "Was wäre, wenn es einfach sein könnte?" öffnet neue Möglichkeiten.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p>Weniger, aber die richtigen Schritte führen schneller zum Ziel als viele komplexe Aktionen.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p>Streben Sie nach residualen statt linearen Ergebnissen - Systeme, die einmal eingerichtet immer wieder Wert erzeugen.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">4</div>
              <p>Ein nachhaltiger Rhythmus aus Anstrengung und Erholung ist produktiver als konstante Höchstleistung.</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Ihre nächsten Schritte</h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">1</div>
              <p><strong>Heute:</strong> Wählen Sie ein Prinzip aus, das Sie sofort umsetzen möchten. Notieren Sie, wie Sie es anwenden werden.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">2</div>
              <p><strong>Diese Woche:</strong> Erstellen Sie Ihre "Bausteine der Freude" und verbinden Sie sie mit wesentlichen Aufgaben.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">3</div>
              <p><strong>Innerhalb von 30 Tagen:</strong> Setzen Sie den 30-Tage-Umsetzungsplan um und reflektieren Sie wöchentlich Ihre Fortschritte.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 mt-0.5 flex-shrink-0">4</div>
              <p><strong>Langfristig:</strong> Entwickeln Sie Ihr persönliches System für mühelose Ergebnisse, indem Sie die effektivsten Prinzipien als Gewohnheiten verankern.</p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-indigo-50 rounded-lg text-center">
        <p className="text-lg font-medium">"Manchmal ist der beste Weg, etwas zu tun, es einfach zu tun, aber auf die einfachste Weise."</p>
        <p className="mt-2 text-indigo-600">- Greg McKeown</p>
      </div>
    </div>
  ];

  // Implementation Guide Component
  const ImplementationGuide = () => {
    const [selectedChapter, setSelectedChapter] = useState(1);
    
    const chapterExample = implementationExamples.find(c => c.chapter === selectedChapter);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
          <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
            <h3 className="text-xl font-bold">Umsetzungsleitfaden: Kapitel auswählen</h3>
            <button 
              className="p-1 rounded-full hover:bg-indigo-700"
              onClick={toggleImplementationGuide}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4 border-b overflow-x-auto">
            <div className="flex space-x-2">
              {implementationExamples.map(chapter => (
                <button
                  key={chapter.chapter}
                  className={`px-3 py-2 rounded ${selectedChapter === chapter.chapter ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}
                  onClick={() => setSelectedChapter(chapter.chapter)}
                >
                  {chapter.chapter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto flex-grow">
            {chapterExample && (
              <>
                <h4 className="text-xl font-semibold mb-4 text-indigo-700">{chapterExample.title}</h4>
                <ul className="space-y-4">
                  {chapterExample.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-800">{example}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          
          <div className="bg-gray-100 p-4 flex justify-end">
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              onClick={toggleImplementationGuide}
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top navigation bar */}
      <div className="bg-indigo-700 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="p-2 rounded-full hover:bg-indigo-600"
            onClick={goToHome}
          >
            <Home size={20} />
          </button>
          <h1 className="ml-4 text-xl font-bold">Effortless - Der Weg zum mühelosen Erfolg</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Folie {currentSlide + 1} von {slides.length}</span>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
            onClick={toggleImplementationGuide}
          >
            Umsetzungsleitfaden
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-grow overflow-hidden p-4">
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          {/* Slide content */}
          <div className="flex-grow overflow-auto p-1">
            {slides[currentSlide]}
          </div>
          
          {/* Bottom navigation controls */}
          <div className="p-4 border-t flex justify-between items-center">
            <button
              className={`p-2 rounded-lg flex items-center ${currentSlide > 0 ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} className="mr-1" />
              Zurück
            </button>
            
            <div className="flex space-x-1">
              {[...Array(slides.length)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${currentSlide === index ? 'bg-indigo-600' : 'bg-indigo-200'}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              className={`p-2 rounded-lg flex items-center ${currentSlide < slides.length - 1 ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              Weiter
              <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Implementation Guide Modal */}
      {showImplementationGuide && <ImplementationGuide />}
    </div>
  );
};

export default EffortlessPresentation;
