import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    // Slide 1: Title
    {
      title: "$100M Offers",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">$100M Offers</h1>
          <h2 className="text-3xl mb-8 text-gray-700">Wie man Angebote erstellt, die unwiderstehlich sind</h2>
          <p className="text-xl text-gray-600 mb-8">Basierend auf dem Buch von Alex Hormozi</p>
          <div className="mt-12 text-gray-500">
            <p>Klicken Sie auf die Pfeile oder verwenden Sie die Navigationspunkte unten, um durch die Präsentation zu navigieren</p>
          </div>
        </div>
      )
    },

    // Slide 2: Core Concept
    {
      title: "Das Kernkonzept",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Das Kernkonzept des Buches</h2>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <p className="text-xl font-semibold text-blue-800 mb-2">Ein "Grand Slam Offer" ist:</p>
            <p className="text-lg">Ein Angebot, das so gut ist, dass potenzielle Kunden es für dumm halten würden, nein zu sagen.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Problem</h3>
              <p className="text-gray-700">Die meisten Unternehmer kämpfen mit:</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Zu wenigen Kunden</li>
                <li>Zu geringen Gewinnen</li>
                <li>Preiskämpfen</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Lösung</h3>
              <p className="text-gray-700">Ein Grand Slam Offer hilft dir:</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Mehr Kunden anzuziehen</li>
                <li>Höhere Preise zu erzielen</li>
                <li>Dich vom Wettbewerb zu differenzieren</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <p className="text-lg font-semibold text-green-800 mb-2">Das Ziel:</p>
            <p className="text-gray-700">Nicht das günstigste Angebot zu haben, sondern das wertvollste, das auf Wert statt auf Preis verkauft.</p>
          </div>
        </div>
      )
    },

    // Slide 3: What is a Grand Slam Offer
    {
      title: "Was ist ein Grand Slam Offer?",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Was ist ein Grand Slam Offer?</h2>
          
          <div className="text-lg mb-6">
            <p className="mb-4">Ein Grand Slam Offer ist eine spezielle Kombination aus:</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Preisgestaltung</h3>
              <p className="text-gray-700">Premium-Preise, die den enorm hohen Wert widerspiegeln</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Wertangebot</h3>
              <p className="text-gray-700">Ein Angebot, das alle Probleme des Kunden löst und einen überproportionalen Wert liefert</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Garantien</h3>
              <p className="text-gray-700">Risikoumkehr, die das Vertrauen stärkt und Einwände beseitigt</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Namensgebung</h3>
              <p className="text-gray-700">Magnetische Bezeichnung, die Aufmerksamkeit erregt und Wert kommuniziert</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <p className="text-lg font-semibold text-gray-800 mb-2">Warum ist es so wichtig?</p>
            <p className="text-gray-700">"Make people an offer so good they would feel stupid saying no." - Alex Hormozi</p>
            <p className="text-gray-700 mt-2">Ein Grand Slam Offer erzeugt eine so große Diskrepanz zwischen Preis und Wert, dass die Kaufentscheidung zu einem "No-Brainer" wird.</p>
          </div>
        </div>
      )
    },

    // Slide 4: The Main Elements
    {
      title: "Die Hauptelemente",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Die 4 Säulen eines Grand Slam Offers</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6 flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">1. Richtiger Markt</h3>
                <p className="text-gray-700 mb-2">Finde eine "hungrige Menge" mit:</p>
                <ul className="list-disc ml-5">
                  <li>Dringendem Problem ("Schmerz")</li>
                  <li>Kaufkraft</li>
                  <li>Bereitschaft zu handeln</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 flex-1">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">2. Preisgestaltung</h3>
                <p className="text-gray-700 mb-2">Verlange, was es wert ist:</p>
                <ul className="list-disc ml-5">
                  <li>Fokus auf Premium-Preise</li>
                  <li>Verkaufe auf Wert, nicht auf Preis</li>
                  <li>Vermeide das "Commodity-Problem"</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6 flex-1">
                <h3 className="text-xl font-semibold mb-2 text-green-800">3. Wertschöpfung</h3>
                <p className="text-gray-700 mb-2">Maximiere den wahrgenommenen Wert:</p>
                <ul className="list-disc ml-5">
                  <li>Identifiziere alle Kundenprobleme</li>
                  <li>Entwickle umfassende Lösungen</li>
                  <li>Wähle die wertvollsten Deliverables</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 flex-1">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">4. Angebot verbessern</h3>
                <p className="text-gray-700 mb-2">Steigere die Attraktivität durch:</p>
                <ul className="list-disc ml-5">
                  <li>Knappheit & Dringlichkeit</li>
                  <li>Wertvolle Boni</li>
                  <li>Starke Garantien</li>
                  <li>Ansprechende Namensgebung</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-800">Diese Elemente arbeiten zusammen, um ein Angebot zu schaffen, das sich deutlich vom Wettbewerb abhebt und überproportionale Ergebnisse erzielt.</p>
          </div>
        </div>
      )
    },

    // Slide 5: Market Selection
    {
      title: "Marktauswahl",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">1. Marktauswahl: Die "hungrige Menge"</h2>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
            <p className="text-lg font-semibold text-blue-800 mb-2">Prioritätenformel:</p>
            <p className="text-lg">Hungrige Menge &gt; Angebotsstärke &gt; Überzeugungskraft</p>
            <p className="mt-2 text-gray-700">Ein großartiger Markt kann selbst mit durchschnittlichem Angebot zum Erfolg führen.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Merkmale einer hungrigen Menge</h3>
              <ul className="list-disc ml-5">
                <li>Hat ein dringendes, schmerzhaftes Problem</li>
                <li>Verfügt über die nötige Kaufkraft</li>
                <li>Ist aktiv auf der Suche nach Lösungen</li>
                <li>Ideale Märkte wachsen oder sind stabil</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Die Kraft der Nische</h3>
              <ul className="list-disc ml-5">
                <li>Spezifischere Nischen = höhere Preise</li>
                <li>Bessere Anpassung an Kundenbedürfnisse</li>
                <li>Geringerer Preisdruck</li>
                <li>Differenzierung vom Wettbewerb</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Identifiziere den "Schmerz"</p>
                <p className="text-sm text-gray-700">Welches dringende Problem hat deine Zielgruppe?</p>
              </div>
              <div>
                <p className="font-semibold">2. Evaluiere die Kaufkraft</p>
                <p className="text-sm text-gray-700">Kann diese Gruppe für die Lösung bezahlen?</p>
              </div>
              <div>
                <p className="font-semibold">3. Wähle eine Nische</p>
                <p className="text-sm text-gray-700">Je spezifischer, desto besser</p>
              </div>
              <div>
                <p className="font-semibold">4. Verstehe den "Dream Outcome"</p>
                <p className="text-sm text-gray-700">Was will der Kunde wirklich erreichen?</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">Ein allgemeiner Zeitmanagement-Kurs kann für 19€ verkauft werden, während ein nischenspezifischer Kurs für Vertriebsprofis im Werkzeugbereich für 1.000-2.000€ verkauft werden kann - mit ähnlichem Grundinhalt.</p>
          </div>
        </div>
      )
    },

    // Slide 6: Pricing
    {
      title: "Preisgestaltung",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">2. Preisgestaltung: Charge What It's Worth</h2>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg font-semibold text-purple-800 mb-2">Kernprinzip:</p>
            <p className="text-lg">Es gibt keinen strategischen Vorteil darin, der zweitgünstigste Anbieter zu sein - aber es gibt einen darin, der teuerste zu sein.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Das "Commodity-Problem"</h3>
              <p className="text-gray-700 mb-2">Wenn dein Angebot als austauschbar wahrgenommen wird:</p>
              <ul className="list-disc ml-5">
                <li>Preiskampf mit Wettbewerbern</li>
                <li>Sinkende Margen</li>
                <li>Stagnierendes Wachstum</li>
                <li>Geringere Ressourcen für Verbesserungen</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Der "tugendhafte Kreislauf des Preises"</h3>
              <p className="text-gray-700 mb-2">Höhere Preise führen zu:</p>
              <ul className="list-disc ml-5">
                <li>Mehr emotionaler Investition der Kunden</li>
                <li>Höherer wahrgenommener Wert</li>
                <li>Mehr Ressourcen für besseren Service</li>
                <li>Bessere Ergebnisse für Kunden</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Fokussiere auf Wert statt Preis</p>
                <p className="text-sm text-gray-700">Verkaufe basierend auf dem gelieferten Wert</p>
              </div>
              <div>
                <p className="font-semibold">2. Differenziere dein Angebot</p>
                <p className="text-sm text-gray-700">Schaffe eine eigene Kategorie</p>
              </div>
              <div>
                <p className="font-semibold">3. Erhöhe den Wert vor dem Preis</p>
                <p className="text-sm text-gray-700">Wert muss den Preis deutlich übersteigen</p>
              </div>
              <div>
                <p className="font-semibold">4. Teste höhere Preise</p>
                <p className="text-sm text-gray-700">Traue dich, Premium-Preise zu verlangen</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">Ein Fotografieunternehmen steigerte seinen durchschnittlichen Auftragswert von 300€ auf 1.500€ durch Umsetzung der Buchprinzipien, was zu einer 38-fachen Gewinnsteigerung führte.</p>
          </div>
        </div>
      )
    },

    // Slide 7: Value Equation
    {
      title: "Die Wertgleichung",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">3. Die Wertgleichung</h2>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <p className="text-lg font-semibold text-green-800 mb-2">Die vier Treiber des wahrgenommenen Wertes:</p>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center max-w-3xl">
                <p className="text-lg">
                  <span className="font-bold text-green-600">Wahrgenommener Wert</span> = 
                  <span className="font-bold text-blue-600"> (Traumergebnis × Wahrscheinlichkeit des Erreichens)</span> ÷ 
                  <span className="font-bold text-red-600"> (Zeitverzögerung × Aufwand & Opferbereitschaft)</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Traumergebnis <span className="text-green-600">(erhöhen)</span></h3>
                <p className="text-gray-700 mb-2">Die tiefen, unveränderlichen Wünsche des Kunden</p>
                <p className="text-sm italic">Beispiel: "Deine perfekte Traumfigur" statt "Abnehmprogramm"</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Wahrscheinlichkeit des Erreichens <span className="text-green-600">(erhöhen)</span></h3>
                <p className="text-gray-700 mb-2">Die Überzeugung, dass man das Ergebnis erreichen wird</p>
                <p className="text-sm italic">Beispiel: Testimonials, Garantien, bewährter Prozess</p>
              </div>
            </div>
            
            <div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-red-800">Zeitverzögerung <span className="text-green-600">(verringern)</span></h3>
                <p className="text-gray-700 mb-2">Die Zeit bis zum Erreichen des Ergebnisses</p>
                <p className="text-sm italic">Beispiel: "Erste Ergebnisse in 7 Tagen" statt "Langfristiger Plan"</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold mb-2 text-red-800">Aufwand & Opferbereitschaft <span className="text-green-600">(verringern)</span></h3>
                <p className="text-gray-700 mb-2">Die Anstrengung, die der Kunde unternehmen muss</p>
                <p className="text-sm italic">Beispiel: Vereinfachte Schritte, Support, Automatisierungen</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel für Wertsteigerung:</p>
            <p className="text-gray-700">Ein Abnehmprogramm könnte seinen Wert steigern, indem es nicht nur mehr Gewichtsverlust verspricht (Traumergebnis), sondern den Prozess vereinfacht (weniger Aufwand), schnellere erste Ergebnisse erzielt (kürzere Zeitverzögerung) und eine starke Erfolgsgarantie bietet (höhere Wahrscheinlichkeit).</p>
          </div>
        </div>
      )
    },

    // Slide 8: Creating Value - Problems & Solutions
    {
      title: "Probleme & Lösungen",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">3a. Probleme & Lösungen identifizieren</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-xl font-semibold mb-3 text-red-800">Schritt 1: Probleme identifizieren</h3>
              <p className="text-gray-700 mb-2">Erstelle eine umfassende Liste aller Probleme, mit denen deine Zielgruppe zu kämpfen hat:</p>
              <ul className="list-disc ml-5">
                <li>Was passiert unmittelbar vor der Nutzung deines Produkts?</li>
                <li>Was passiert während der Nutzung?</li>
                <li>Was passiert danach?</li>
                <li>Welche einschränkenden Gedanken haben sie?</li>
                <li>Was sind die "nächsten" benötigten Dinge?</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Schritt 2: Lösungen entwickeln</h3>
              <p className="text-gray-700 mb-2">Wandle jedes identifizierte Problem in eine konkrete Lösung um:</p>
              <ul className="list-disc ml-5">
                <li>Formuliere Lösungen mit "Wie man..." zu Beginn</li>
                <li>Benenne jede Lösung klar und vorteilsbetont</li>
                <li>Frage: "Was müsste ich jemandem zeigen, um dieses Problem zu lösen?"</li>
                <li>Berücksichtige die vier Werttreiber bei jeder Lösung</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Beispiel für Probleme & Lösungen im Fitnessbereich:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Problem: Gesunde Ernährung ist schwierig</p>
                <p className="text-sm text-gray-700">Lösung: "Wie man köstliches, gesundes Essen isst, ohne sich eingeschränkt zu fühlen" - Der 20-Minuten Meal-Prep Guide</p>
              </div>
              <div>
                <p className="font-semibold">Problem: Keine Zeit für Training</p>
                <p className="text-sm text-gray-700">Lösung: "Wie man mit nur 3x 20 Minuten pro Woche maximale Ergebnisse erzielt" - Das Effiziente-Workouts-System</p>
              </div>
              <div>
                <p className="font-semibold">Problem: Motivation schwindet</p>
                <p className="text-sm text-gray-700">Lösung: "Wie man dauerhaft motiviert bleibt, auch ohne Willenskraft" - Die 5-Phasen-Gewohnheitsbildung</p>
              </div>
              <div>
                <p className="font-semibold">Problem: Plateau beim Abnehmen</p>
                <p className="text-sm text-gray-700">Lösung: "Wie man Plateaus durchbricht und kontinuierlich Fortschritte erzielt" - Der Metabolismus-Boost-Plan</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Umsetzungstipp:</p>
            <p className="text-gray-700">Gehe ins kleinste Detail und identifiziere alle möglichen Reibungspunkte aus der Perspektive deines Kunden. Je umfassender deine Liste, desto differenzierter und unwiderstehlicher wird dein Angebot am Ende sein.</p>
          </div>
        </div>
      )
    },

    // Slide 9: Trim & Stack
    {
      title: "Trim & Stack",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">3b. Trim & Stack: Das ultimative Angebot gestalten</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-xl font-semibold mb-3 text-red-800">Schritt 3: "Trim" (Beschneiden)</h3>
              <p className="text-gray-700 mb-2">Bewerte und entferne Lösungen in dieser Reihenfolge:</p>
              <ol className="list-decimal ml-5">
                <li className="mb-2"><span className="font-semibold">Entferne zuerst:</span> Hohe Kosten & geringer Wert</li>
                <li className="mb-2"><span className="font-semibold">Entferne dann:</span> Niedrige Kosten & geringer Wert</li>
                <li className="mb-2"><span className="font-semibold">Behalte:</span> Hoher Wert, unabhängig von den Kosten</li>
                <li><span className="font-semibold">Priorisiere:</span> "One-to-Many"-Lösungen (skalierbar)</li>
              </ol>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Schritt 4: "Stack" (Stapeln)</h3>
              <p className="text-gray-700 mb-2">Bündle die hochwertigen Lösungen zu einem Gesamtpaket:</p>
              <ul className="list-disc ml-5">
                <li>Gruppiere ähnliche Lösungen</li>
                <li>Ordne sie in einer logischen Reihenfolge</li>
                <li>Stelle sicher, dass sie alle identifizierten Probleme abdecken</li>
                <li>Präsentiere sie als umfassendes, integriertes System</li>
                <li>Gib dem Gesamtpaket einen prägnanten, vorteilsbetonten Namen</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
            <p className="text-lg font-semibold text-blue-800 mb-2">Das "Sales to Fulfillment Continuum":</p>
            <p className="text-gray-700 mb-2">Finde den Sweet Spot zwischen Verkaufsleichtigkeit und Erfüllungsaufwand:</p>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div className="text-center">
                <p className="font-semibold">Geringer Erfüllungsaufwand</p>
                <p className="text-sm text-gray-600">z.B. E-Books, Videos</p>
                <p className="text-sm text-gray-600">Kann den Verkauf erschweren</p>
              </div>
              <div className="text-center bg-green-100 p-2 rounded-lg">
                <p className="font-semibold text-green-800">Sweet Spot</p>
                <p className="text-sm text-gray-600">Optimale Balance</p>
                <p className="text-sm text-gray-600">Gut verkaufbar & skalierbar</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Hoher Erfüllungsaufwand</p>
                <p className="text-sm text-gray-600">z.B. 1:1 Betreuung</p>
                <p className="text-sm text-gray-600">Leicht zu verkaufen, aber schwer zu skalieren</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">Ein Online-Marketingkurs könnte aus einem Kernkurs (Videos), unterstützenden Materialien (Vorlagen, Checklisten), Gruppen-Coaching-Calls und einem begrenzten 1:1-Support bestehen – ein optimaler Mix aus skalierbaren Komponenten und hochwertiger persönlicher Unterstützung.</p>
          </div>
        </div>
      )
    },

    // Slide 10: Scarcity
    {
      title: "Knappheit",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">4a. Angebot verbessern: Knappheit</h2>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg font-semibold text-purple-800 mb-2">Knappheit = Funktion der Quantität</p>
            <p className="text-gray-700">Ziel: Das Angebot künstlich verknappen, um höhere Preise zu erzielen und die wahrgenommene Exklusivität zu steigern</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">1. Begrenzte Verfügbarkeit</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Limitierte Anzahl an Plätzen</li>
                <li>Begrenzte Auflagen oder Editionen</li>
                <li>Nur X Exemplare verfügbar</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">2. Begrenzte Boni</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Zusätzliche Vorteile nur für die ersten X Käufer</li>
                <li>Limitierte Tickets zu exklusiven Events</li>
                <li>Sonderkonditionen für Early Adopters</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">3. Nie wieder verfügbar</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Einmalige Angebote, die nicht wiederholt werden</li>
                <li>Letzte Chance vor dem Verschwinden vom Markt</li>
                <li>Produkt wird eingestellt oder überarbeitet</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Schaffe echte Knappheit</p>
                <p className="text-sm text-gray-700">Die kommunizierte Begrenzung muss real sein</p>
              </div>
              <div>
                <p className="font-semibold">2. Kommuniziere die Begrenzung klar</p>
                <p className="text-sm text-gray-700">"Nur noch X Plätze verfügbar" - mit Zähler</p>
              </div>
              <div>
                <p className="font-semibold">3. Setze auf exklusive High-End-Optionen</p>
                <p className="text-sm text-gray-700">Limitierter 1:1-Zugang zu höheren Preisen</p>
              </div>
              <div>
                <p className="font-semibold">4. Kombiniere mit Dringlichkeit</p>
                <p className="text-sm text-gray-700">Knappheit plus Zeitlimit verstärkt die Wirkung</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">"Der Kurs startet am 15. Mai mit maximal 50 Teilnehmern. Die ersten 20 Anmeldungen erhalten zusätzlich ein exklusives 30-minütiges 1:1-Coaching-Gespräch (Wert: 497€), das separat nicht erhältlich ist."</p>
          </div>
        </div>
      )
    },

    // Slide 11: Urgency
    {
      title: "Dringlichkeit",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">4b. Angebot verbessern: Dringlichkeit</h2>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg font-semibold text-purple-800 mb-2">Dringlichkeit = Funktion der Zeit</p>
            <p className="text-gray-700">Ziel: Sofortiges Handeln motivieren, indem ein zeitliches Limit für ein Angebot oder Vorteile gesetzt wird</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">1. Zeitlich begrenztes Angebot</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Befristete Aktionen ("Nur bis Sonntag")</li>
                <li>Sales mit festem Enddatum</li>
                <li>Launch-Perioden mit klarem Ende</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">2. Zeitlich begrenzter Bonus</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Fast-Action-Boni für schnelles Handeln</li>
                <li>Zusätzliche Vorteile nur bis zu einem Stichtag</li>
                <li>Early-Bird-Specials</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">3. Bevorstehende Preiserhöhung</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Ankündigung zukünftiger Preiserhöhungen</li>
                <li>"Letzte Chance zum aktuellen Preis"</li>
                <li>Staffelpreise, die mit der Zeit steigen</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">4. "Explodierende" Gelegenheit</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Gelegenheiten, die mit der Zeit verfallen</li>
                <li>Feste Starttermine mit Wartezeiten</li>
                <li>Saisonale oder an Ereignisse gebundene Angebote</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Setze klare Deadlines</p>
                <p className="text-sm text-gray-700">Mit genauen Daten und Uhrzeiten</p>
              </div>
              <div>
                <p className="font-semibold">2. Biete Boni statt Rabatte</p>
                <p className="text-sm text-gray-700">Verhindert die Wahrnehmung verhandelbarer Preise</p>
              </div>
              <div>
                <p className="font-semibold">3. Nutze visuelle Countdown-Timer</p>
                <p className="text-sm text-gray-700">Verstärkt die wahrgenommene Dringlichkeit</p>
              </div>
              <div>
                <p className="font-semibold">4. Kommuniziere proaktiv</p>
                <p className="text-sm text-gray-700">Erinnerungen zum nahenden Ende der Frist</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">"Melde dich bis Freitag, 23:59 Uhr an und erhalte zusätzlich den 'Social Media Content Kalender' (Wert: 197€) geschenkt. Ab Samstag erhöht sich der Preis um 100€ und der Bonus entfällt."</p>
          </div>
        </div>
      )
    },

    // Slide 12: Bonuses
    {
      title: "Boni",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">4c. Angebot verbessern: Boni</h2>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg font-semibold text-purple-800 mb-2">Kernprinzip:</p>
            <p className="text-lg">Ein einzelnes Angebot ist weniger wertvoll als dasselbe Angebot, aufgeteilt in seine Einzelteile und als Boni präsentiert</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Effektive Boni erstellen</h3>
              <ul className="list-disc ml-5">
                <li>Gib jedem Bonus einen nutzenorientierten Namen</li>
                <li>Erkläre den Zusammenhang zum Problem des Kunden</li>
                <li>Beschreibe, wie er das Leben verbessert</li>
                <li>Verwende Beweise für den Wert</li>
                <li>Male ein lebendiges Zukunftsbild</li>
                <li>Weise einen konkreten Geldwert zu</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Boni-Strategien</h3>
              <ul className="list-disc ml-5">
                <li>Tools &amp; Checklisten &gt; zusätzliche Trainings</li>
                <li>Adressiere spezifische Einwände mit passenden Boni</li>
                <li>Biete Lösungen für die "nächsten" Probleme</li>
                <li>Gesamtwert der Boni &gt; Wert des Kernangebots</li>
                <li>Kombiniere mit Knappheit und Dringlichkeit</li>
                <li>Verhandle Gruppenrabatte mit Partnerunternehmen</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Füge immer Boni hinzu, nie Rabatte</p>
                <p className="text-sm text-gray-700">Boni steigern den Wert, Rabatte senken ihn</p>
              </div>
              <div>
                <p className="font-semibold">2. Präsentiere die Boni strategisch</p>
                <p className="text-sm text-gray-700">Im Einzelverkauf: Nach der Kaufaufforderung</p>
              </div>
              <div>
                <p className="font-semibold">3. Nutze Boni, um Einwände zu überwinden</p>
                <p className="text-sm text-gray-700">Spezifische Boni für typische Bedenken</p>
              </div>
              <div>
                <p className="font-semibold">4. Betone den Gesamtwert</p>
                <p className="text-sm text-gray-700">Addiere alle Einzelwerte für beeindruckende Summe</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">"Aber warte, es gibt noch mehr! Als Bonus erhältst du auch den 'Client Acquisition Blueprint' (Wert: 497€), der dir zeigt, wie du einen stetigen Strom von Neukunden gewinnst - ohne dafür bezahlen zu müssen. Dieser Blueprint hat meinen Kunden durchschnittlich 3-5 neue Kunden pro Woche eingebracht."</p>
          </div>
        </div>
      )
    },

    // Slide 13: Guarantees
    {
      title: "Garantien",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">4d. Angebot verbessern: Garantien</h2>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg font-semibold text-purple-800 mb-2">Kernprinzip:</p>
            <p className="text-lg">Garantien eliminieren oder kehren das Risiko für den Käufer um, was die Kaufwahrscheinlichkeit deutlich erhöht</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1. Einfache Geld-zurück-Garantie</h3>
                <p className="text-sm text-gray-700">"Wenn Sie nicht zufrieden sind, erhalten Sie Ihr Geld zurück - ohne Fragen."</p>
                <p className="text-sm text-gray-700 mt-2">Ideal für den Einstieg, um anfängliche Zögerlichkeit zu überwinden</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">2. Value-basierte Garantie</h3>
                <p className="text-sm text-gray-700">"Wenn Sie keinen Wert in Höhe von mindestens X€ erhalten, bekommen Sie Ihr Geld zurück."</p>
                <p className="text-sm text-gray-700 mt-2">Fokussiert auf den gelieferten Service, nicht unbedingt auf das Endergebnis</p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">3. Ergebnis-basierte Garantie</h3>
                <p className="text-sm text-gray-700">"Erreichen Sie [spezifisches Ergebnis] oder erhalten Sie Ihr Geld zurück und [zusätzlichen Vorteil]."</p>
                <p className="text-sm text-gray-700 mt-2">Starke Garantie, die den Fokus auf das gewünschte Endergebnis legt</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">4. Weitere Garantieformen</h3>
                <ul className="list-disc ml-5 text-sm">
                  <li>"Delayed Second Payment"-Garantie</li>
                  <li>Anti-Garantie (für sehr exklusive Angebote)</li>
                  <li>Doppelte Geld-zurück-Garantie</li>
                  <li>Leistungsgarantie</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Wähle eine kühne, spezifische Garantie</p>
                <p className="text-sm text-gray-700">Je mutiger, desto effektiver</p>
              </div>
              <div>
                <p className="font-semibold">2. Kommuniziere die Bedingungen klar</p>
                <p className="text-sm text-gray-700">Transparenz schafft Vertrauen</p>
              </div>
              <div>
                <p className="font-semibold">3. Zeige Selbstvertrauen</p>
                <p className="text-sm text-gray-700">Eine starke Garantie beweist Überzeugung</p>
              </div>
              <div>
                <p className="font-semibold">4. Setze die Garantie als Abschlussinstrument ein</p>
                <p className="text-sm text-gray-700">Betone das minimale Risiko für den Kunden</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiel:</p>
            <p className="text-gray-700">"Meine 'Doppelte Ergebnis oder Doppeltes Geld zurück'-Garantie: Wenn du nach 90 Tagen nicht mindestens 10 neue Kunden gewonnen hast, erhältst du nicht nur deine Investition vollständig zurück, sondern ich verdopple sie sogar - plus du behältst Zugang zu allen Materialien. So sicher bin ich mir, dass diese Methode für dich funktionieren wird."</p>
          </div>
        </div>
      )
    },

    // Slide 14: Naming
    {
      title: "Namensgebung",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">4e. Angebot verbessern: Namensgebung</h2>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg font-semibold text-purple-800 mb-2">Die M-A-G-I-C Formel:</p>
            <div className="grid grid-cols-5 gap-3 mt-3">
              <div className="bg-white p-2 rounded-lg border border-gray-200 text-center">
                <p className="font-bold">M</p>
                <p className="text-sm">Magnet</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-200 text-center">
                <p className="font-bold">A</p>
                <p className="text-sm">Avatar</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-200 text-center">
                <p className="font-bold">G</p>
                <p className="text-sm">Goal</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-200 text-center">
                <p className="font-bold">I</p>
                <p className="text-sm">Interval</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-200 text-center">
                <p className="font-bold">C</p>
                <p className="text-sm">Container</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Die 5 Komponenten eines magnetischen Namens:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-blue-700">M - Magnet</p>
                  <p className="text-sm text-gray-700 mb-1">Der "Grund warum" für das Angebot</p>
                  <p className="text-xs italic text-gray-600">Beispiele: "Frühlings-", "Kostenlos", "50% Rabatt"</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">A - Avatar</p>
                  <p className="text-sm text-gray-700 mb-1">Die spezifische Zielgruppe</p>
                  <p className="text-xs italic text-gray-600">Beispiele: "Für Webdesigner", "München-Unternehmer"</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">G - Goal (Ziel)</p>
                  <p className="text-sm text-gray-700 mb-1">Das gewünschte Ergebnis des Kunden</p>
                  <p className="text-xs italic text-gray-600">Beispiele: "Stressfreie Steuererklärung", "Traum-Webseite"</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">I - Interval (Zeitraum)</p>
                  <p className="text-sm text-gray-700 mb-1">Der erwartete Zeitrahmen für Ergebnisse</p>
                  <p className="text-xs italic text-gray-600">Beispiele: "30-Tage", "6-Wochen"</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold text-blue-700">C - Container</p>
                  <p className="text-sm text-gray-700 mb-1">Das Format oder die Art des Angebots</p>
                  <p className="text-xs italic text-gray-600">Beispiele: "Challenge", "Bootcamp", "Blueprint", "System"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Umsetzungstipps:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">1. Kombiniere 3-5 Komponenten</p>
                <p className="text-sm text-gray-700">Nicht alle sind zwingend nötig</p>
              </div>
              <div>
                <p className="font-semibold">2. Finde Balance zwischen Kürze und Spezifität</p>
                <p className="text-sm text-gray-700">Prägnant, aber aussagekräftig</p>
              </div>
              <div>
                <p className="font-semibold">3. Teste verschiedene Namen</p>
                <p className="text-sm text-gray-700">Nur der Markt weiß, was wirklich funktioniert</p>
              </div>
              <div>
                <p className="font-semibold">4. Priorisiere Avatar und Goal</p>
                <p className="text-sm text-gray-700">Diese Komponenten sind oft am wichtigsten</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">Beispiele:</p>
            <ul className="list-disc ml-5">
              <li>"Der 6-Wochen Webdesigner-Kundenmagnet: Wie du garantiert 5 neue Premium-Kunden gewinnst, ohne kalt zu akquirieren"</li>
              <li>"Das 30-Tage Steuerspar-Blueprint für Selbstständige"</li>
              <li>"Die Berlin Gastronomen Instagram-Strategie: In 8 Wochen zu 80% mehr Gästen"</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 15: Implementation Guide
    {
      title: "Umsetzungsleitfaden",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Grand Slam Offer: Umsetzungsleitfaden</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Phase 1: Vorbereitung</h3>
              <ol className="list-decimal ml-5">
                <li className="mb-2">Identifiziere deine "hungrige Menge" mit:
                  <ul className="list-disc ml-5 text-sm">
                    <li>Dringendem Problem</li>
                    <li>Ausreichender Kaufkraft</li>
                    <li>Bereitschaft zu handeln</li>
                  </ul>
                </li>
                <li className="mb-2">Definiere das "Dream Outcome" deiner Zielgruppe</li>
                <li>Erfasse die aktuellen Probleme und Hindernisse</li>
              </ol>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Phase 2: Angebotsgestaltung</h3>
              <ol className="list-decimal ml-5">
                <li className="mb-2">Erstelle eine detaillierte Liste aller Probleme</li>
                <li className="mb-2">Entwickle Lösungen für jedes Problem</li>
                <li className="mb-2">Bewerte und selektiere die wertvollsten Lösungen (Trim)</li>
                <li>Bündle die Lösungen zu einem Gesamtpaket (Stack)</li>
              </ol>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Phase 3: Preisgestaltung</h3>
              <ol className="list-decimal ml-5">
                <li className="mb-2">Befreie dich vom "Commodity-Problem"</li>
                <li className="mb-2">Fokussiere auf den Wert, nicht auf den Preis</li>
                <li className="mb-2">Berücksichtige die vier Werttreiber
                  <ul className="list-disc ml-5 text-sm">
                    <li>Traumergebnis &uarr;</li>
                    <li>Wahrscheinlichkeit &uarr;</li>
                    <li>Zeitverzögerung &darr;</li>
                    <li>Aufwand/Opfer &darr;</li>
                  </ul>
                </li>
                <li>Setze einen Premium-Preis, der den enormen Wert widerspiegelt</li>
              </ol>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Phase 4: Angebot verbessern</h3>
              <ol className="list-decimal ml-5">
                <li className="mb-2">Integriere Knappheit
                  <p className="text-xs italic">Begrenzte Verfügbarkeit, limitierte Boni</p>
                </li>
                <li className="mb-2">Schaffe Dringlichkeit
                  <p className="text-xs italic">Zeitlimits, Preiserhöhungen, Deadlines</p>
                </li>
                <li className="mb-2">Füge wertvolle Boni hinzu
                  <p className="text-xs italic">Mit Wert &gt; Kernangebot</p>
                </li>
                <li className="mb-2">Wähle starke Garantien
                  <p className="text-xs italic">Risikoumkehr für den Kunden</p>
                </li>
                <li>Kreiere einen magnetischen Namen (M-A-G-I-C)</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Aktionsplan für die nächsten 7 Tage:</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Tag 1-2:</p>
                <p className="text-sm">Zielgruppe definieren & Probleme identifizieren</p>
              </div>
              <div>
                <p className="font-semibold">Tag 3-4:</p>
                <p className="text-sm">Lösungen entwickeln & Angebot strukturieren</p>
              </div>
              <div>
                <p className="font-semibold">Tag 5-7:</p>
                <p className="text-sm">Preis festlegen & Angebot mit Boni, Garantien und Namen verbessern</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 16: Comprehensive Example
    {
      title: "Praxisbeispiel",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Praxisbeispiel: Ein Grand Slam Offer</h2>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Der 8-Wochen Online-Marketing-Durchbruch für kleine Handwerksbetriebe</h3>
            <p className="text-gray-700">Ein Angebot, das einem Handwerksbetrieb hilft, mehr qualifizierte Anfragen über digitale Kanäle zu generieren</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Zielgruppe & Probleme</h3>
                <ul className="list-disc ml-5 text-sm">
                  <li>Handwerksbetriebe mit 1-5 Mitarbeitern</li>
                  <li>Aktuell hauptsächlich Empfehlungskunden</li>
                  <li>Keine Strategie für Online-Marketing</li>
                  <li>Keine Zeit für Marketing-Aktivitäten</li>
                  <li>Unzuverlässiger Kundenzustrom</li>
                  <li>Kaufkraft: 1.000-3.000€ Investitionsbereitschaft</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-2 text-green-800">Das Kernangebot</h3>
                <ul className="list-disc ml-5 text-sm">
                  <li>8-Wochen-Online-Kurs mit wöchentlichen Modulen</li>
                  <li>Vorlagen für Google Business Profil und Website</li>
                  <li>Komplette Content-Strategie mit 30 Inhaltsideen</li>
                  <li>Automatisierter Kundenanfragen-Prozess</li>
                  <li>Bewertungsmanagement-System</li>
                  <li>Wöchentliche Gruppen-Coaching-Calls</li>
                  <li>Tech-Support für Implementierung</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Boni & Verbesserungen</h3>
                <ul className="list-disc ml-5 text-sm">
                  <li><span className="font-semibold">Bonus #1:</span> "Der Lokale SEO-Booster" (Wert: 497€)</li>
                  <li><span className="font-semibold">Bonus #2:</span> "Die perfekte Angebotskalkulation" (Wert: 297€)</li>
                  <li><span className="font-semibold">Bonus #3:</span> "Handwerker-Foto-Paket" mit 100 Stockfotos (Wert: 197€)</li>
                  <li><span className="font-semibold">Bonus #4:</span> 1x 30-Min persönliches Strategie-Gespräch (Wert: 397€)</li>
                  <li><span className="font-semibold">Fast-Action-Bonus:</span> "Der Telefonscript-Generator" - nur für Anmeldungen innerhalb 48h (Wert: 197€)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Garantie & Preisgestaltung</h3>
                <div className="mb-3">
                  <p className="font-semibold">Garantie:</p>
                  <p className="text-sm">"5-fache ROI-Garantie: Wenn du nicht mindestens 5x deiner Investition an neuen Aufträgen innerhalb von 90 Tagen generierst, erhältst du dein Geld zurück und wir optimieren deinen Online-Auftritt kostenlos."</p>
                </div>
                <div>
                  <p className="font-semibold">Preisgestaltung:</p>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Gesamtwert des Pakets: 4.997€</li>
                    <li>Regulärer Preis: 2.497€</li>
                    <li>Aktueller Launch-Preis: 1.997€ (nur für die ersten 10 Teilnehmer)</li>
                    <li>Ab nächstem Monat: 2.497€</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 p-5 rounded-lg border border-red-200">
            <h3 className="text-xl font-semibold mb-2 text-red-800">Knappheit & Dringlichkeit:</h3>
            <ul className="list-disc ml-5">
              <li>Begrenzt auf maximal 15 Teilnehmer pro Durchgang</li>
              <li>Nur 2 Durchgänge pro Jahr</li>
              <li>Fast-Action-Bonus nur für 48 Stunden verfügbar</li>
              <li>Launch-Preis nur für die ersten 10 Teilnehmer</li>
              <li>Anmeldeschluss in 7 Tagen, nächster Start erst in 6 Monaten</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 17: Summary
    {
      title: "Zusammenfassung",
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Zusammenfassung: 100M Offers</h2>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
            <p className="text-lg mb-4">Ein "Grand Slam Offer" kombiniert vier Hauptelemente:</p>
            
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">1. Der richtige Markt</h3>
                <p className="text-gray-700">Eine "hungrige Menge" mit dringendem Problem und Kaufkraft</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold mb-2 text-purple-800">2. Premium-Preisgestaltung</h3>
                <p className="text-gray-700">Basierend auf Wert, nicht auf Kosten oder Konkurrenz</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-2 text-green-800">3. Überragender Wert</h3>
                <p className="text-gray-700">Löst alle Kundenprobleme mit optimierten Deliverables</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">4. Angebot verbessern</h3>
                <p className="text-gray-700">Durch Knappheit, Dringlichkeit, Boni, Garantien und Namensgebung</p>
              </div>
            </div>
            
            <p className="text-gray-700">Das Ergebnis ist ein Angebot, das Kunden als "No-Brainer" wahrnehmen - es wäre unklug, es abzulehnen.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Die Wertgleichung</h3>
              <p className="text-gray-700 mb-2">Optimiere diese vier Faktoren:</p>
              <ul className="list-disc ml-5">
                <li>Steigere das Traumergebnis</li>
                <li>Erhöhe die Wahrscheinlichkeit des Erreichens</li>
                <li>Reduziere die Zeitverzögerung</li>
                <li>Minimiere den Aufwand und die Opferbereitschaft</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold mb-2 text-green-800">Kernerkenntnisse</h3>
              <ul className="list-disc ml-5">
                <li>Der Preis sollte der Wert sein, nicht die Kosten</li>
                <li>Höhere Preise führen oft zu besseren Ergebnissen</li>
                <li>Gute Angebote befreien dich vom Preiskampf</li>
                <li>Verlange Premiumpreise, nachdem du überragenden Wert geschaffen hast</li>
                <li>Differenzierung ist der Schlüssel zum Erfolg</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold mb-3 text-purple-800">Nächste Schritte:</h3>
            <ol className="list-decimal ml-5">
              <li className="mb-2">Analysiere dein bestehendes Angebot anhand der Prinzipien aus diesem Buch</li>
              <li className="mb-2">Identifiziere Verbesserungsmöglichkeiten in allen vier Hauptbereichen</li>
              <li className="mb-2">Entwickle systematisch ein Grand Slam Offer nach dem vorgestellten Umsetzungsleitfaden</li>
              <li>Teste kontinuierlich und optimiere basierend auf Marktfeedback</li>
            </ol>
            <p className="mt-3 font-semibold text-gray-700">"Make people an offer so good they would feel stupid saying no." - Alex Hormozi</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-blue-600">$100M Offers - Zusammenfassung und Umsetzungsleitfaden</h1>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center overflow-hidden">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-6xl h-full overflow-y-auto">
          {slides[currentSlide].content}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <button 
          onClick={prevSlide} 
          className="flex items-center justify-center p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide} 
          className="flex items-center justify-center p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
