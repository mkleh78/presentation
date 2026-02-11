import { useState } from 'react';

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
    // Slide 1: Title
    {
      title: "Buy Back Your Time",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Buy Back Your Time</h1>
          <h2 className="text-2xl text-gray-700 mb-8">Highlights & Umsetzungsleitfaden</h2>
          <div className="text-lg text-gray-600 italic">Präsentation basierend auf dem Buch von Dan Martell</div>
        </div>
      )
    },
    
    // Slide 2: Table of Contents
    {
      title: "Übersicht",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Inhaltsverzeichnis</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Das Buyback-Prinzip</strong>: Grundkonzept verstehen</li>
                <li><strong>Die DRIP Matrix</strong>: Zeit und Energie sinnvoll einsetzen</li>
                <li><strong>Die 5 Zeit-Killer</strong>: Versteckte Produktivitätsbremsen</li>
                <li><strong>Der Time and Energy Audit</strong>: Wo fließt Ihre Zeit hin?</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Die Replacement Ladder</strong>: Systematisch delegieren</li>
                <li><strong>Playbooks erstellen</strong>: Prozesse dokumentieren</li>
                <li><strong>Ihre Perfect Week</strong>: Zeit proaktiv planen</li>
                <li><strong>10X Vision & Preloaded Year</strong>: Große Träume verwirklichen</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 3: The Buyback Principle
    {
      title: "Das Buyback-Prinzip",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Das Buyback-Prinzip</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Das Kernkonzept:</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">„Stelle nicht ein, um dein Geschäft auszubauen, sondern um deine Zeit zurückzukaufen."</span>
              </p>
              <p className="text-gray-600 mb-4">
                Nutze Ressourcen (hauptsächlich Geld), um Aufgaben zu delegieren und deine Zeit für höherwertige Tätigkeiten freizusetzen.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Der Buyback-Kreislauf:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Audit (Prüfen)</strong>: Identifiziere zeitraubende und energiezehrende Aufgaben</li>
                <li><strong>Transfer (Übertragen)</strong>: Delegiere diese Aufgaben</li>
                <li><strong>Fill (Füllen)</strong>: Nutze die freigewordene Zeit für höherwertige Tätigkeiten</li>
              </ul>
            </div>
            <div className="w-1/2 pl-4 flex flex-col">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Identifiziere 1-2 Aufgaben, die du nicht magst und die leicht delegierbar sind</li>
                  <li>Überlege, wer diese übernehmen könnte (Team, Freelancer, VA)</li>
                  <li>Plane, wie du die gewonnene Zeit nutzen würdest</li>
                  <li>Visualisiere dein Leben mit mehr Zeit</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Sarah, Grafikdesignerin</strong>, verbrachte 5 Stunden/Woche mit Rechnungsstellung und E-Mail-Management. Sie stellte einen virtuellen Assistenten für 15€/Stunde ein und nutzt die gewonnene Zeit für zusätzliche Kundenprojekte, die 75€/Stunde einbringen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: The DRIP Matrix
    {
      title: "Die DRIP Matrix",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Die DRIP Matrix</h2>
          <div className="flex-1 flex">
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-2 h-64 mb-4">
                <div className="bg-red-100 p-3 rounded border border-red-300">
                  <h3 className="font-bold text-red-700">DELEGATION</h3>
                  <p className="text-sm text-gray-700">Wenig Geld, wenig Energie</p>
                  <p className="text-xs italic mt-2">E-Mails sortieren, administrative Aufgaben, Dateneingabe</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                  <h3 className="font-bold text-yellow-700">REPLACEMENT</h3>
                  <p className="text-sm text-gray-700">Viel Geld, wenig Energie</p>
                  <p className="text-xs italic mt-2">Buchhaltung, technische Aufgaben, die du beherrscht aber nicht magst</p>
                </div>
                <div className="bg-green-100 p-3 rounded border border-green-300">
                  <h3 className="font-bold text-green-700">INVESTMENT</h3>
                  <p className="text-sm text-gray-700">Wenig Geld, viel Energie</p>
                  <p className="text-xs italic mt-2">Lernen, Netzwerken, persönliche Entwicklung</p>
                </div>
                <div className="bg-blue-100 p-3 rounded border border-blue-300">
                  <h3 className="font-bold text-blue-700">PRODUCTION</h3>
                  <p className="text-sm text-gray-700">Viel Geld, viel Energie</p>
                  <p className="text-xs italic mt-2">Kernkompetenzen, strategische Planung, Verkauf</p>
                </div>
              </div>
              <p className="text-gray-600">
                <strong>Das Ziel:</strong> Mehr Zeit im Production-Quadranten verbringen und teilweise im Investment-Quadranten, während Aufgaben aus Delegation und Replacement systematisch ausgelagert werden.
              </p>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Liste alle deine wiederkehrenden Aufgaben auf</li>
                  <li>Bewerte jede Aufgabe nach finanziellem Wert ($ bis $$$$) und Energie (+ oder -)</li>
                  <li>Ordne jede Aufgabe einem Quadranten zu</li>
                  <li>Berechne deinen Buyback Rate (Jahreseinkommen/2000/4)</li>
                  <li>Beginne mit der Auslagerung von Delegation-Aufgaben</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Michael, Webentwickler</strong>, hat seinen Buyback Rate mit 50€/Stunde berechnet. Er identifizierte das Erstellen von Angeboten (Delegation-Quadrant) als auslagerbar und stellte einen Assistenten für 20€/Stunde ein. Nun kann er die gewonnene Zeit für kundenspezifische Programmierung (Production-Quadrant, 100€/Stunde) nutzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: The 5 Time Killers
    {
      title: "Die 5 Zeit-Killer",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Die 5 Zeit-Killer</h2>
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div>
              <div className="bg-white rounded-lg shadow p-4 mb-3">
                <h3 className="text-lg font-semibold text-red-600">1. Der Aufschieber</h3>
                <p className="text-gray-600 text-sm">Vermeidet wichtige, aber unangenehme Aufgaben und verzögert den Fortschritt.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 mb-3">
                <h3 className="text-lg font-semibold text-red-600">2. Der Geschwindigkeits-Dämon</h3>
                <p className="text-gray-600 text-sm">Erledigt alles überhastet, oft auf Kosten von Qualität und strategischem Denken.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold text-red-600">3. Der Kontrolleur</h3>
                <p className="text-gray-600 text-sm">Hat Schwierigkeiten zu delegieren und mischt sich ständig in die Arbeit anderer ein.</p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow p-4 mb-3">
                <h3 className="text-lg font-semibold text-red-600">4. Der Sparer</h3>
                <p className="text-gray-600 text-sm">Zu sparsam, um in notwendige Unterstützung zu investieren; versucht alles selbst zu machen.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 mb-3">
                <h3 className="text-lg font-semibold text-red-600">5. Der Selbst-Medikamentierer</h3>
                <p className="text-gray-600 text-sm">Nutzt Arbeit als Ablenkung von persönlichen Problemen; neigt zu Burnout.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1">
                  <li>Führe eine ehrliche Selbstreflexion durch</li>
                  <li>Identifiziere deine primären Zeit-Killer</li>
                  <li>Beobachte dein Verhalten im Alltag</li>
                  <li>Erkenne negative Auswirkungen</li>
                  <li>Setze dir kleine Änderungsziele</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Time and Energy Audit
    {
      title: "Time and Energy Audit",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Der Time and Energy Audit</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Die drei Trade-Level:</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="font-bold">Level 1 Trader (Angestellter)</p>
                  <p className="text-sm text-gray-600">Tauscht Zeit gegen Geld</p>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="font-bold">Level 2 Trader (Unternehmer)</p>
                  <p className="text-sm text-gray-600">Tauscht Geld gegen mehr Zeit</p>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="font-bold">Level 3 Trader (Empire-Builder)</p>
                  <p className="text-sm text-gray-600">Tauscht Geld gegen mehr Geld</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Das Ziel:</h3>
                <p className="text-gray-600">Vom Level 1 zum Level 2 und schließlich zum Level 3 Trader entwickeln</p>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Time and Energy Audit durchführen:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Bestimme deinen Buyback Rate</li>
                  <li>Dokumentiere für zwei Wochen jede Viertelstunde deines Arbeitstages</li>
                  <li>Bewerte jede Aufgabe mit $ bis $$$$ (finanzieller Wert)</li>
                  <li>Markiere jede Aufgabe grün (gibt Energie) oder rot (raubt Energie)</li>
                  <li>Analysiere deinen Audit: Identifiziere "Quick Wins" (rot, $-$$)</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Thomas, Fotograf</strong>, führte einen Time and Energy Audit durch und stellte fest, dass er 8 Stunden pro Woche mit der Bearbeitung von Rechnungen und der Organisation von Kundenterminen verbrachte (rot, $). Sein Buyback Rate lag bei 60€/Stunde. Er stellte einen VA für 20€/Stunde ein und konnte dadurch 3 zusätzliche Fotoshootings pro Monat durchführen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 7: The Replacement Ladder
    {
      title: "Die Replacement Ladder",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Die Replacement Ladder</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>
                <div className="space-y-8 relative">
                  <div className="flex items-center">
                    <div className="absolute left-8 w-6 h-6 rounded-full bg-blue-500 -ml-3 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="ml-12">
                      <h3 className="font-bold text-gray-700">Admin</h3>
                      <p className="text-sm text-gray-600">Erste und wichtigste Stufe: Administrative Assistenz</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="absolute left-8 w-6 h-6 rounded-full bg-blue-500 -ml-3 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="ml-12">
                      <h3 className="font-bold text-gray-700">Lieferung</h3>
                      <p className="text-sm text-gray-600">Operationale Aufgaben der Produkt-/Dienstleistungserbringung</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="absolute left-8 w-6 h-6 rounded-full bg-blue-500 -ml-3 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="ml-12">
                      <h3 className="font-bold text-gray-700">Marketing</h3>
                      <p className="text-sm text-gray-600">Content-Erstellung, Social Media, Werbung</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="absolute left-8 w-6 h-6 rounded-full bg-blue-500 -ml-3 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="ml-12">
                      <h3 className="font-bold text-gray-700">Vertrieb</h3>
                      <p className="text-sm text-gray-600">Leadgenerierung, Kundenakquise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Starte mit Rung 1: Stelle eine administrative Assistenz ein (auch virtuell oder Teilzeit)</li>
                  <li>Identifiziere Aufgaben im Replacement-Quadranten (viel Geld, wenig Energie)</li>
                  <li>Nutze den Buyback Loop für jede Aufgabe: Audit, Transfer, Fill</li>
                  <li>Übertrage eine Aufgabe nach der anderen</li>
                  <li>Fülle die gewonnene Zeit mit Production-Quadrant-Aufgaben</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Martin, Online-Kursersteller</strong>, stellte zuerst eine VA für 15 Stunden/Woche ein, die seine E-Mails, seinen Kalender und administrative Aufgaben übernahm. Als nächsten Schritt engagierte er einen Video-Editor, der die Nachbearbeitung seiner Kursmaterialien (Replacement-Quadrant) übernahm. Dies ermöglichte es ihm, mehr Zeit für die Kurskonzeption und Verkaufsstrategien (Production-Quadrant) zu verwenden.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Building Playbooks
    {
      title: "Playbooks erstellen",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Building Playbooks</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Die 4 Cs eines Playbooks:</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold text-blue-600">Camcorder Method</p>
                  <p className="text-sm text-gray-600">Nehme dich selbst bei der Durchführung einer Aufgabe auf Video auf</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold text-blue-600">The Course</p>
                  <p className="text-sm text-gray-600">Schriftliche Anleitung mit Schritt-für-Schritt-Anweisungen</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold text-blue-600">The Cadence</p>
                  <p className="text-sm text-gray-600">Wie oft die Aufgabe erledigt werden muss</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold text-blue-600">The Checklist</p>
                  <p className="text-sm text-gray-600">Nicht verhandelbare Punkte, die beachtet werden müssen</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Identifiziere eine wiederkehrende Aufgabe, die dir Schmerzen bereitet</li>
                  <li>Nehme dich 3x bei der Durchführung auf Video auf</li>
                  <li>Lasse jemand anderen eine schriftliche Anleitung erstellen</li>
                  <li>Lege fest, wie oft die Aufgabe erledigt werden muss</li>
                  <li>Erstelle eine Checkliste mit nicht verhandelbaren Punkten</li>
                  <li>Überprüfe das Playbook und delegiere die Aufgabe</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Julia, Social-Media-Beraterin</strong>, erstellte ein Playbook für die monatliche Berichterstellung. Sie nahm sich bei der Erstellung dreimal auf Video auf, ließ ihre VA eine Anleitung verfassen und erstellte eine Checkliste mit 10 entscheidenden Punkten. Nach einmaligem Feedback konnte ihre VA die monatlichen Berichte selbstständig erstellen, wodurch Julia 6 Stunden pro Monat einsparte.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 9: Your Perfect Week
    {
      title: "Your Perfect Week",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Ihre Perfect Week</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Vorteile einer geplanten Woche:</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Optimierung der Energie</p>
                  <p className="text-sm text-gray-600">Plane Aufgaben, wenn deine Energie am höchsten ist</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Eliminierung von "Bleed Time"</p>
                  <p className="text-sm text-gray-600">Vermeide Überlappungen und unproduktive Zwischenzeiten</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">N.E.T.-Zeit nutzen</p>
                  <p className="text-sm text-gray-600">No Extra Time: Zwei Dinge gleichzeitig tun</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Task Batching</p>
                  <p className="text-sm text-gray-600">Ähnliche Aufgaben bündeln, um Kontextwechsel zu minimieren</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Führe einen Time and Energy Audit durch</li>
                  <li>Blocke feste Zeitfenster für verschiedene Aktivitäten</li>
                  <li>Plane wichtige berufliche und private Termine zuerst ein</li>
                  <li>Nutze deine Energiespitzen für anspruchsvolle Aufgaben</li>
                  <li>Bündele ähnliche Aufgaben (Task Batching)</li>
                  <li>Halte dich an deinen Plan, sei konsequent</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Andreas, Unternehmensberater</strong>, erkannte durch seinen Time and Energy Audit, dass seine Energie morgens am höchsten ist. Er blockte jeden Vormittag 2 Stunden für fokussierte Strategiearbeit, montags und freitags jeweils 3 Stunden für Kundenmeetings und dienstags 2 Stunden für Administrative Aufgaben. Mittwochs reservierte er Zeit für Sport und Familie. Seine Produktivität stieg um 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 10: Time Hacks
    {
      title: "Die 4 Time Hacks",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Die einzigen 4 Time Hacks, die du brauchst</h2>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">1. $50 Magic Pill</h3>
              <p className="text-gray-600 mb-2">Gib jedem im Team ein Budget, das sie ohne deine Zustimmung ausgeben können, um Probleme zu lösen.</p>
              <div className="bg-blue-50 p-2 rounded text-sm text-gray-600">
                <strong>Umsetzung:</strong> Definiere einen Betrag (z.B. 50€) und kommuniziere diese Regel klar an dein Team.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">2. Sync Meetings mit Standard-Agenda</h3>
              <p className="text-gray-600 mb-2">Führe regelmäßige Besprechungen mit einer standardisierten Agenda durch.</p>
              <div className="bg-blue-50 p-2 rounded text-sm text-gray-600">
                <strong>Umsetzung:</strong> Plane wöchentliche Meetings mit fester Agenda: Erledigtes, Blockaden, Feedback, Fragen.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">3. Definition of Done (DoD)</h3>
              <p className="text-gray-600 mb-2">Definiere klar, was "erledigt" bedeutet, wenn du eine Aufgabe delegierst.</p>
              <div className="bg-blue-50 p-2 rounded text-sm text-gray-600">
                <strong>Umsetzung:</strong> Berücksichtige Fakten (messbare Ergebnisse), Gefühle (wie soll es sich anfühlen?) und Funktionalität (wie soll es funktionieren?).
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">4. 1:3:1 Rule</h3>
              <p className="text-gray-600 mb-2">Wenn jemand mit einem Problem zu dir kommt, fordere: 1 Problem, 3 Lösungen, 1 Empfehlung.</p>
              <div className="bg-blue-50 p-2 rounded text-sm text-gray-600">
                <strong>Umsetzung:</strong> Bitte Mitarbeiter, mit definierten Problemen und eigenen Lösungsvorschlägen zurückzukommen.
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 mt-4 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
            <p className="text-gray-600">
              <strong>Teamleiter Markus</strong> führte die 1:3:1 Regel ein. Seine Mitarbeiterin kam mit einem Problem bei der Softwareimplementierung. Statt sofort eine Lösung zu bieten, bat er sie, das Problem klar zu definieren, drei Lösungsansätze zu überlegen und eine davon zu empfehlen. Als sie zurückkam, hatte sie bereits selbst eine funktionierende Lösung gefunden und umgesetzt. Markus sparte mehrere Stunden Problemlösungszeit.
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 11: The "Test-First" Hiring Method
    {
      title: "Test-First Hiring Method",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Die "Test-First" Einstellungsmethode</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Vorteile des "Test-First" Ansatzes:</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Bessere Bewertung der Fähigkeiten</p>
                  <p className="text-sm text-gray-600">Teste tatsächliche Kompetenzen statt nur Selbstdarstellung</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Reduzierung von Fehlentscheidungen</p>
                  <p className="text-sm text-gray-600">Erkenne frühzeitig, ob ein Kandidat wirklich geeignet ist</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Zeitersparnis im Onboarding</p>
                  <p className="text-sm text-gray-600">Mitarbeiter haben bereits bewiesen, dass sie die Aufgaben bewältigen können</p>
                </div>
                <div className="bg-white rounded-lg shadow p-3">
                  <p className="font-bold">Kulturelle Passung</p>
                  <p className="text-sm text-gray-600">Beobachte die Interaktion mit deinem Team während der Testphase</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Analysiere die Rolle genau: Definiere die wichtigsten Fähigkeiten</li>
                  <li>Entwickle realistische Testaufgaben für diese Fähigkeiten</li>
                  <li>Integriere Tests früh in den Einstellungsprozess</li>
                  <li>Erstelle klare Bewertungskriterien</li>
                  <li>Führe strukturierte Interviews basierend auf den Testergebnissen</li>
                  <li>Bewerte auch die kulturelle Passung während der Testphase</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Softwareunternehmen CodeCraft</strong> suchte einen Content-Manager. Statt nur nach Lebenslauf und Vorstellungsgespräch zu entscheiden, ließ das Unternehmen die Top 3 Bewerber einen kurzen Blog-Artikel schreiben und einen Social-Media-Plan erstellen. Durch diese Tests erkannten sie, dass ein Kandidat mit weniger Erfahrung tatsächlich die besten Inhalte produzierte und am besten zum Team passte. Die Einstellung erwies sich als großer Erfolg.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 12: Transformational Leadership & Feedback
    {
      title: "Transformationale Führung & Feedback",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Transformationale Führung & Feedback</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Transformationale Führung:</h3>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="mb-2">Entwickle Teammitglieder, damit sie langfristig bessere Entscheidungen treffen können.</p>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Definiere gewünschte Ergebnisse, nicht den Weg</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Agiere als Coach, nicht als Mikromanager</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Nutze die COACH-Methode: COre issue, Actual story, CHange</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Das CLEAR-Framework für Feedback:</h3>
              <div className="bg-white rounded-lg shadow p-3">
                <ul className="text-sm space-y-1 text-gray-600">
                  <li><strong>C</strong>ontext: Beschreibe die Situation</li>
                  <li><strong>L</strong>ead to Observation: Teile spezifische Beobachtungen</li>
                  <li><strong>I</strong>mpact: Erkläre die Auswirkungen</li>
                  <li><strong>E</strong>xpectation: Formuliere klare Erwartungen</li>
                  <li><strong>R</strong>esults: Bespreche die erwarteten Ergebnisse</li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Führe durch gewünschte Ergebnisse, nicht durch Anweisungen</li>
                  <li>Ermutige zur Problemlösung auf unterer Ebene (1:3:1 Regel)</li>
                  <li>Implementiere Kennzahlen und verfolge diese transparent</li>
                  <li>Lasse "die Affen auf den Schultern anderer sitzen"</li>
                  <li>Plane regelmäßige Feedback-Gespräche mit dem CLEAR-Framework</li>
                  <li>Fordere aktiv Feedback zu deiner eigenen Führung ein</li>
                  <li>Schaffe eine Kultur, in der Feedback als Wachstumschance gesehen wird</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Projektleiterin Anna</strong> stellte fest, dass ihr Teammitglied David Schwierigkeiten hatte, Deadlines einzuhalten. Statt ihn ständig zu kontrollieren, nutzte sie das CLEAR-Framework: Sie beschrieb die Situation (verspäteter Bericht), teilte ihre Beobachtung mit (ohne Vorwurf), erklärte die Auswirkungen auf das Team, formulierte klare Erwartungen für die Zukunft und besprach die positiven Ergebnisse einer Verbesserung. David verbesserte seine Termintreue erheblich und Anna konnte sich auf strategische Aufgaben konzentrieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 13: Dream BIG & The Preloaded Year
    {
      title: "10X Vision & Preloaded Year",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">10X Vision & The Preloaded Year</h2>
          <div className="flex-1 flex">
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Dream BIG. Achieve Bigger:</h3>
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <p className="mb-3">Entwickle eine gewaltige, inspirierende Vision, die als Leitfaden für deine Handlungen dient.</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Phase 1: Grenzenloses Träumen</p>
                  <p className="text-sm">Erlaube dir, ohne jegliche Einschränkungen zu träumen.</p>
                  <p className="text-sm font-semibold mt-2">Phase 2: Schaffung einer klaren 10X Vision</p>
                  <p className="text-sm">Entwickle ein detailliertes Bild deiner idealen Zukunft.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">The Preloaded Year:</h3>
                <p className="mb-3">Plane deine "großen Steine" zuerst in deinen Jahreskalender ein.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Identifiziere deine wichtigsten Prioritäten</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Trage diese zuerst in deinen Jahreskalender ein</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Halte dich an diese Versprechen an dich selbst</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-sm">Nutze den "Hell-yeah!"-Test für spontane Gelegenheiten</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Konkrete Umsetzung:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Nimm dir Zeit für grenzenloses Träumen</li>
                  <li>Erstelle ein detailliertes Dokument oder Vision Board deiner 10X Vision</li>
                  <li>Führe die "Kino"-Visualisierungsübung durch</li>
                  <li>Verbinde deine Vision mit dem Buyback-Prinzip</li>
                  <li>Identifiziere deine "großen Steine" für das kommende Jahr</li>
                  <li>Trage diese zuerst in deinen Kalender ein</li>
                  <li>Verbinde deinen Jahresplan mit deiner 10X Vision</li>
                  <li>Halte dich an deine geplanten Termine und nutze den "Hell-yeah!"-Test</li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Beispiel:</h3>
                <p className="text-gray-600">
                  <strong>Christian, E-Commerce-Unternehmer</strong>, entwickelte eine 10X Vision, in der sein Unternehmen in 5 Jahren einen Umsatz von 10 Millionen Euro erreicht und er nur noch 3 Tage pro Woche arbeitet. Um diese Vision zu verwirklichen, erstellte er eine "Preloaded Year" mit wichtigen Meilensteinen: Quartalsweise strategische Planungstage, monatliche Team-Retrospektiven, zwei zweiwöchige Familienurlaube und wöchentliche "Deep Work"-Blöcke. Durch das Freihalten dieser Termine und die konsequente Anwendung des Buyback-Prinzips konnte er sein Geschäft systematisch ausbauen und gleichzeitig mehr Zeit mit seiner Familie verbringen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 14: Summary
    {
      title: "Zusammenfassung",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Zusammenfassung & nächste Schritte</h2>
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Die wichtigsten Konzepte:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5">1</div>
                  <div>
                    <p className="font-semibold">Das Buyback-Prinzip</p>
                    <p className="text-sm text-gray-600">Stelle nicht ein, um dein Geschäft auszubauen, sondern um deine Zeit zurückzukaufen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5">2</div>
                  <div>
                    <p className="font-semibold">Die DRIP Matrix</p>
                    <p className="text-sm text-gray-600">Kategorisiere Aufgaben nach Wert und Energie; fokussiere dich auf Production.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5">3</div>
                  <div>
                    <p className="font-semibold">Time and Energy Audit</p>
                    <p className="text-sm text-gray-600">Verstehe, wo deine Zeit und Energie hinfließen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5">4</div>
                  <div>
                    <p className="font-semibold">Replacement Ladder</p>
                    <p className="text-sm text-gray-600">Systematisch Aufgaben delegieren, beginnend mit Admin.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5">5</div>
                  <div>
                    <p className="font-semibold">Playbooks & Perfect Week</p>
                    <p className="text-sm text-gray-600">Prozesse dokumentieren und Zeit proaktiv planen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5">6</div>
                  <div>
                    <p className="font-semibold">10X Vision & Preloaded Year</p>
                    <p className="text-sm text-gray-600">Große Träume entwickeln und systematisch verfolgen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Deine nächsten Schritte:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">1</div>
                  <div>
                    <p className="font-semibold">Führe einen Time and Energy Audit durch</p>
                    <p className="text-sm text-gray-600">Dokumentiere 2 Wochen lang deine Aktivitäten und bewerte sie nach Wert und Energie.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">2</div>
                  <div>
                    <p className="font-semibold">Berechne deinen Buyback Rate</p>
                    <p className="text-sm text-gray-600">Damit kannst du fundierte Entscheidungen über Delegation treffen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">3</div>
                  <div>
                    <p className="font-semibold">Stelle deine erste administrative Unterstützung ein</p>
                    <p className="text-sm text-gray-600">Dies ist der wichtigste erste Schritt auf der Replacement Ladder.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">4</div>
                  <div>
                    <p className="font-semibold">Erstelle ein Playbook für eine wiederkehrende Aufgabe</p>
                    <p className="text-sm text-gray-600">Beginne mit der Aufgabe, die dir die größten Probleme bereitet.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">5</div>
                  <div>
                    <p className="font-semibold">Plane deine Perfect Week und Preloaded Year</p>
                    <p className="text-sm text-gray-600">Sei proaktiv mit deiner Zeit und plane deine "großen Steine" zuerst.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Buy Back Your Time</h1>
          <div className="flex space-x-2">
            <button 
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className={`px-3 py-1 rounded ${currentSlide === 0 ? 'bg-gray-200 text-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              ← Zurück
            </button>
            <span className="px-3 py-1 bg-gray-100 rounded">{currentSlide + 1} / {slides.length}</span>
            <button 
              onClick={goToNextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-3 py-1 rounded ${currentSlide === slides.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              Weiter →
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="container mx-auto bg-white rounded-lg shadow-md p-8 h-full">
          {slides[currentSlide].content}
        </div>
      </main>
      
      <footer className="bg-white shadow-sm p-4 border-t">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;
