import React, { useState } from 'react';

const ClearThinkingPresentation = () => {
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

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };
  
  const slides = [
    // Titelfolie
    {
      title: "Clear Thinking",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-6 text-indigo-700">Clear Thinking</h1>
          <h2 className="text-2xl mb-8 text-gray-700">Wie wir klarer denken und bessere Entscheidungen treffen</h2>
          <div className="w-24 h-1 bg-indigo-500 mb-8"></div>
          <p className="text-xl mb-2">Buchzusammenfassung & Umsetzungsleitfaden</p>
        </div>
      )
    },
    
    // Überblick
    {
      title: "Überblick",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Überblick</h2>
          <p className="mb-6">Dieses Buch zeigt, wie wir unbewusste Denkmuster erkennen, stärker werden, mit Schwächen umgehen und bessere Entscheidungen treffen können.</p>
          
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-indigo-700">Kapitel 1: Die Feinde des klaren Denkens</h3>
              <p>Unbewusste "Defaults", die unser Denken beeinflussen</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-700">Kapitel 2: Stärke aufbauen</h3>
              <p>Entwicklung von inneren Stärken für klares Denken</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-purple-700">Kapitel 3: Schwächen managen</h3>
              <p>Umgang mit unseren biologischen und erworbenen Schwächen</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-green-700">Kapitel 4: Entscheidungen: Klares Denken in Aktion</h3>
              <p>Strukturierter Prozess für bessere Entscheidungen</p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-amber-700">Kapitel 5: Wollen, was zählt</h3>
              <p>Die richtigen Ziele im Leben setzen</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Kapitel 1: Übersicht
    {
      title: "Kapitel 1: Die Feinde des klaren Denkens",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Kapitel 1: Die Feinde des klaren Denkens</h2>
          
          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            <p className="italic">Unbewusste "Defaults" beeinflussen unser Denken und Handeln, oft ohne dass wir es merken.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-indigo-600">Emotion Default</h3>
              <p className="text-sm">Emotionen steuern unsere Reaktionen, anstatt bewusstes Denken</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-indigo-600">Ego Default</h3>
              <p className="text-sm">Unser Ego täuscht uns über Realitäten hinweg</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-indigo-600">Social Default</h3>
              <p className="text-sm">Wir passen uns anderen an, anstatt unabhängig zu denken</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-indigo-600">Inertia Default</h3>
              <p className="text-sm">Wir bleiben bei dem, was wir kennen, vermeiden Veränderung</p>
            </div>
          </div>
          
          <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
            <p className="font-bold text-yellow-700">Kernpunkt:</p>
            <p>Das Problem ist oft nicht, <i>wie</i> wir denken, sondern <i>wann</i> wir überhaupt denken sollten.</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 1: Umsetzung
    {
      title: "Kapitel 1: Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Kapitel 1: Umsetzungsleitfaden</h2>
          
          <div className="mb-4">
            <h3 className="font-bold mb-2 text-indigo-600">So erkennen Sie Ihre Default-Muster:</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-indigo-500">Bewusstsein schaffen</h4>
              <p className="text-sm mb-2">Werden Sie sich in alltäglichen Momenten bewusst: Treffe ich gerade eine bewusste Wahl oder reagiere ich nur?</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Beispiel:</span> Beim Scrollen durch soziale Medien innehalten und fragen: "Tue ich das bewusst oder aus Gewohnheit?"
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-indigo-500">Emotionen beobachten</h4>
              <p className="text-sm mb-2">Nehmen Sie Ihre emotionalen Reaktionen wahr und halten Sie einen Moment inne, bevor Sie handeln.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Beispiel:</span> Bei Ärger über eine E-Mail erst tief durchatmen und 10 Minuten warten, bevor Sie antworten.
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-indigo-500">Gruppendenken erkennen</h4>
              <p className="text-sm mb-2">Hinterfragen Sie, ob Sie einer Meinung zustimmen, weil sie richtig ist oder weil die Mehrheit sie teilt.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Beispiel:</span> In Meetings fragen: "Stimme ich diesem Vorschlag zu, weil er gut ist oder weil alle anderen zustimmen?"
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-3 rounded-lg mt-2">
            <p className="font-bold text-indigo-700 mb-1">Tägliche Übung:</p>
            <p className="text-sm">Führen Sie ein "Default-Tagebuch" - notieren Sie Situationen, in denen Sie auf Autopilot reagiert haben, und überlegen Sie, wie Sie bewusster handeln könnten.</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 2: Übersicht
    {
      title: "Kapitel 2: Stärke aufbauen",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Kapitel 2: Stärke aufbauen</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="italic">Willenskraft allein reicht nicht aus. Wir müssen grundlegende innere Stärken entwickeln, um klarer zu denken.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-blue-600">Selbstverantwortung</h3>
              <p className="text-sm">Verantwortung für eigene Fähigkeiten, Unfähigkeiten und Handlungen übernehmen</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-blue-600">Selbstkenntnis</h3>
              <p className="text-sm">Stärken, Schwächen und blinde Flecken kennen</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-blue-600">Selbstbeherrschung</h3>
              <p className="text-sm">Ängste, Wünsche und Emotionen meistern</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-blue-600">Selbstvertrauen</h3>
              <p className="text-sm">Den eigenen Fähigkeiten und dem eigenen Wert vertrauen</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 rounded-lg bg-blue-50">
            <h3 className="font-bold text-blue-700 mb-2">Schlüsselkonzepte:</h3>
            <ul className="list-disc pl-5 text-sm">
              <li className="mb-1">Hohe Standards setzen</li>
              <li className="mb-1">Von Vorbildern lernen</li>
              <li>Kontinuierliche Übung und Verbesserung</li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Kapitel 2: Umsetzung
    {
      title: "Kapitel 2: Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Kapitel 2: Umsetzungsleitfaden</h2>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-blue-600">Selbstverantwortung stärken</h4>
              <p className="text-sm mb-2">Übernehmen Sie die volle Verantwortung für Ihre Entscheidungen und deren Konsequenzen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Beispiel:</span> Statt "Der Kunde hat unrealistische Erwartungen" zu sagen, fragen Sie: "Wie könnte ich die Erwartungen besser managen oder übertreffen?"
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-blue-600">Selbstkenntnis entwickeln</h4>
              <p className="text-sm mb-2">Reflektieren Sie regelmäßig über Ihre Stärken und Schwächen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Übung:</span> Führen Sie ein "Selbsterkenntnis-Journal" mit wöchentlichen Einträgen zu Ihren Reaktionen, Mustern und blinden Flecken.
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-blue-600">Von Vorbildern lernen</h4>
              <p className="text-sm mb-2">Identifizieren Sie Menschen mit höheren Standards als Ihren eigenen und studieren Sie deren Prinzipien.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Aktion:</span> Wählen Sie 2-3 Personen, die Sie bewundern, und notieren Sie konkrete Eigenschaften, die Sie übernehmen möchten. Fragen Sie in schwierigen Situationen: "Was würde [Vorbild] in dieser Situation tun?"
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg mt-2">
            <p className="font-bold text-blue-700 mb-1">Praktische Routine:</p>
            <p className="text-sm">Setzen Sie sich wöchentlich 15 Minuten Zeit für ein "Stärken-Training": Reflektieren Sie über eine Situation, in der Sie eine dieser Stärken gezeigt haben, und eine, in der Sie sie vermisst haben. Planen Sie, wie Sie in Zukunft stärker sein können.</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 3: Übersicht
    {
      title: "Kapitel 3: Schwächen managen",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Kapitel 3: Schwächen managen</h2>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <p className="italic">Wir können nicht alle unsere Schwächen beseitigen, aber wir können lernen, diese zu managen und ihre Auswirkungen zu mildern.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mt-2">
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-purple-600">Seine Schwächen kennen</h3>
              <p className="text-sm">Biologische (Hunger, Müdigkeit, Stress) und erworbene Schwächen verstehen und erkennen</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-purple-600">Schutzmaßnahmen implementieren</h3>
              <p className="text-sm">Strategien wie Prävention, Regeln, Checklisten und Perspektivwechsel einsetzen</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-purple-600">Mit Fehlern umgehen</h3>
              <p className="text-sm">Fehler als Lernmöglichkeit sehen und das eigene Denken sichtbar machen</p>
            </div>
          </div>
          
          <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
            <p className="font-bold text-yellow-700">Wichtiger Hinweis:</p>
            <p className="text-sm">Stress, Müdigkeit und andere biologische Zustände beeinflussen unsere Entscheidungsfähigkeit erheblich - oft mehr als wir wahrhaben wollen.</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 3: Umsetzung
    {
      title: "Kapitel 3: Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Kapitel 3: Umsetzungsleitfaden</h2>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-purple-600">Schwächen kartieren</h4>
              <p className="text-sm mb-2">Identifizieren Sie Ihre persönlichen Trigger und Schwachstellen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Übung:</span> Erstellen Sie eine "Schwächen-Karte": Notieren Sie Situationen, in denen Sie oft irrational reagieren, und die zugrunde liegenden Bedingungen (Müdigkeit, Stress, etc.).
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-purple-600">Persönliche Regeln aufstellen</h4>
              <p className="text-sm mb-2">Entwickeln Sie automatische Regeln für wiederkehrende Situationen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Beispiele:</span>
                <ul className="list-disc pl-5">
                  <li>"Keine wichtigen Entscheidungen nach 22 Uhr"</li>
                  <li>"Bei Vertragsverhandlungen immer 24 Stunden Bedenkzeit nehmen"</li>
                  <li>"Vor emotionalen Antworten auf E-Mails einen Spaziergang machen"</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-purple-600">Denken sichtbar machen</h4>
              <p className="text-sm mb-2">Dokumentieren Sie Ihre Überlegungen bei wichtigen Entscheidungen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Methode:</span> Führen Sie ein "Entscheidungstagebuch", in dem Sie vor wichtigen Entscheidungen Ihre Annahmen, Erwartungen und Gründe notieren. Überprüfen Sie diese später, um aus Fehlern zu lernen.
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg mt-2">
            <p className="font-bold text-purple-700 mb-1">Checklisten-Strategie:</p>
            <p className="text-sm">Erstellen Sie für wiederkehrende komplexe Aufgaben Checklisten, die Sie auch in Stresssituationen abarbeiten können. Besonders wichtig für finanzielle, berufliche oder gesundheitliche Entscheidungen.</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 4: Übersicht
    {
      title: "Kapitel 4: Entscheidungen - Klares Denken in Aktion",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Kapitel 4: Entscheidungen - Klares Denken in Aktion</h2>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="italic">Eine strukturierte Herangehensweise an Entscheidungen kann zu besseren Ergebnissen führen.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3 mt-2">
            <div className="bg-white p-3 rounded-lg shadow flex">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-green-700">1</span>
              </div>
              <div>
                <h3 className="font-bold mb-1 text-green-600">Das Problem definieren</h3>
                <p className="text-sm">Die Wurzelursache identifizieren, nicht nur Symptome behandeln</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow flex">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-green-700">2</span>
              </div>
              <div>
                <h3 className="font-bold mb-1 text-green-600">Mögliche Lösungen erkunden</h3>
                <p className="text-sm">Mindestens drei Optionen entwickeln, Folgeeffekte bedenken</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow flex">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-green-700">3</span>
              </div>
              <div>
                <h3 className="font-bold mb-1 text-green-600">Die Optionen bewerten</h3>
                <p className="text-sm">Kriterien definieren, HiFi- und HiEx-Informationen sammeln</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow flex">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-green-700">4</span>
              </div>
              <div>
                <h3 className="font-bold mb-1 text-green-600">Handeln!</h3>
                <p className="text-sm">ASAP- oder ALAP-Prinzip anwenden, entschlossen umsetzen</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow flex">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-green-700">5</span>
              </div>
              <div>
                <h3 className="font-bold mb-1 text-green-600">Aus Entscheidungen lernen</h3>
                <p className="text-sm">Prozess reflektieren, nicht nur Ergebnisse bewerten</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Kapitel 4: Umsetzung
    {
      title: "Kapitel 4: Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Kapitel 4: Umsetzungsleitfaden</h2>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-green-600">Problemdefinitions-Methode</h4>
              <p className="text-sm mb-2">Definieren Sie das Problem schriftlich und gehen Sie der Wurzelursache auf den Grund.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">5-Warum-Technik:</span> Fragen Sie fünfmal "Warum?", um tiefer zu graben.
                <p className="mt-1"><span className="italic">Beispiel:</span> Problem: "Unser Team verpasst Deadlines"</p>
                <ol className="list-decimal pl-5">
                  <li>Warum? "Weil wir zu spät anfangen."</li>
                  <li>Warum? "Weil andere Aufgaben dazwischenkommen."</li>
                  <li>Warum? "Weil wir zu viele Zusagen machen."</li>
                  <li>Warum? "Weil wir nicht Nein sagen können."</li>
                  <li>Warum? "Weil wir kein System haben, um Kapazitäten zu prüfen."</li>
                </ol>
                <p className="mt-1">→ Wahres Problem: Fehlendes Kapazitätsmanagement, nicht Faulheit!</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-green-600">3+-Prinzip anwenden</h4>
              <p className="text-sm mb-2">Entwickeln Sie mindestens drei verschiedene Lösungsansätze.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Lösungsfindungs-Framework:</span>
                <ol className="list-decimal pl-5 mt-1">
                  <li>Offensichtliche Lösung</li>
                  <li>Gegenteilige Lösung</li>
                  <li>Kreative Alternative</li>
                  <li>"Both-And"-Lösung (Kombination)</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-green-600">Second-Level Thinking</h4>
              <p className="text-sm mb-2">Denken Sie über die Folgen der Folgen nach.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Kettenmethode:</span> Für jede Lösung mindestens drei Folgefragen durchspielen:
                <ul className="list-disc pl-5 mt-1">
                  <li>Was passiert als direktes Ergebnis?</li>
                  <li>Was sind die Folgen dieses Ergebnisses?</li>
                  <li>Welche unbeabsichtigten Konsequenzen könnten auftreten?</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg mt-2">
            <p className="font-bold text-green-700 mb-1">Entscheidungsmatrix:</p>
            <p className="text-sm">Erstellen Sie für wichtige Entscheidungen eine Matrix mit Ihren Optionen und Bewertungskriterien. Gewichten Sie die Kriterien nach Wichtigkeit und bewerten Sie jede Option für jedes Kriterium. Dies macht Ihre Denkweise transparent und hilft, objektiver zu entscheiden.</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 5: Übersicht
    {
      title: "Kapitel 5: Wollen, was zählt",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-amber-700">Kapitel 5: Wollen, was zählt</h2>
          
          <div className="bg-amber-50 p-4 rounded-lg mb-4">
            <p className="italic">Es geht nicht nur darum, zu wissen, WIE man bekommt, was man will, sondern vor allem darum, WAS es wert ist, gewollt zu werden.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-amber-600">Dickens' verborgene Lektion</h3>
              <p className="text-sm">Erfolg bei der Verfolgung falscher Ziele (wie bei Scrooge) ist letztendlich bedeutungslos</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-amber-600">Die Glücksexperten</h3>
              <p className="text-sm">Beziehungen, Sinnhaftigkeit und Dankbarkeit sind wichtiger als materieller Besitz</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-amber-600">Memento Mori</h3>
              <p className="text-sm">Das Bewusstsein der eigenen Sterblichkeit hilft, Prioritäten zu setzen</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h3 className="font-bold mb-2 text-amber-600">Lebenslektionen aus dem Tod</h3>
              <p className="text-sm">Das Ende im Blick zu haben hilft, weiser zu leben und Zeit nicht zu verschwenden</p>
            </div>
          </div>
          
          <div className="mt-4 bg-amber-50 p-3 rounded-lg">
            <p className="font-bold text-amber-700 mb-1">Kernfrage:</p>
            <p>"Wird das, was in diesem Moment wichtig erscheint, auch am Ende meines Lebens wichtig sein?"</p>
          </div>
        </div>
      )
    },
    
    // Kapitel 5: Umsetzung
    {
      title: "Kapitel 5: Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-amber-700">Kapitel 5: Umsetzungsleitfaden</h2>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-amber-600">Werte-Reflexion</h4>
              <p className="text-sm mb-2">Reflektieren Sie Ihre aktuellen Ziele und Motivationen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Übung:</span> Erstellen Sie zwei Listen:
                <ol className="list-decimal pl-5 mt-1">
                  <li>"Was gibt meinem Leben Bedeutung?" - Beziehungen, Erfahrungen, Beiträge</li>
                  <li>"Wonach strebe ich tatsächlich?" - Aktuelle Ziele und Prioritäten</li>
                </ol>
                <p className="mt-1">Vergleichen Sie die Listen - gibt es Diskrepanzen? Wie können Sie sie in Einklang bringen?</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-amber-600">Memento Mori Praxis</h4>
              <p className="text-sm mb-2">Nutzen Sie die Perspektive der Sterblichkeit, um Prioritäten neu zu setzen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Übung: "Die Grabrede"</span>
                <p className="mt-1">Schreiben Sie Ihre eigene Grabrede, wie Sie sie sich wünschen würden. Was sollen Menschen über Ihr Leben, Ihre Werte und Ihren Einfluss sagen? Wie müssten Sie leben, um diese Grabrede zu verdienen?</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1 text-amber-600">Glücks-Praxis</h4>
              <p className="text-sm mb-2">Fokussieren Sie sich auf die Faktoren, die nachweislich zu langfristigem Glück beitragen.</p>
              <div className="bg-gray-50 p-2 rounded text-sm">
                <span className="font-bold">Tägliche Praktiken:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>Dankbarkeitstagebuch: Notieren Sie täglich drei Dinge, für die Sie dankbar sind</li>
                  <li>Beziehungspflege: Investieren Sie bewusst Zeit in wichtige Beziehungen</li>
                  <li>Sinnstiftung: Finden Sie Wege, anderen zu helfen oder etwas Positives beizutragen</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-3 rounded-lg mt-2">
            <p className="font-bold text-amber-700 mb-1">Die 80/20-Regel des Lebens:</p>
            <p className="text-sm">Identifizieren Sie die 20% Ihrer Aktivitäten, die 80% Ihres Glücks und Ihrer Erfüllung ausmachen. Wie können Sie mehr Zeit und Energie in diese investieren und weniger in die restlichen 80% der Aktivitäten, die nur 20% zur Lebensqualität beitragen?</p>
          </div>
        </div>
      )
    },
    
    // Zusammenfassung
    {
      title: "Zusammenfassung & Nächste Schritte",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Zusammenfassung & Nächste Schritte</h2>
          
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <p>Klares Denken ist ein lebenslanger Prozess, der Bewusstsein, Stärke, Management von Schwächen, strukturierte Entscheidungen und die richtige Fokussierung auf das, was wirklich zählt, erfordert.</p>
          </div>
          
          <h3 className="font-bold mb-3 text-indigo-600">Ihr 30-Tage-Aktionsplan:</h3>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1">Woche 1: Bewusstsein schaffen</h4>
              <p className="text-sm">Führen Sie ein "Default-Tagebuch" und identifizieren Sie Ihre typischen unbewussten Reaktionsmuster.</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1">Woche 2: Stärken aufbauen</h4>
              <p className="text-sm">Üben Sie täglich eine der vier Selbst-Stärken (Selbstverantwortung, Selbstkenntnis, Selbstbeherrschung, Selbstvertrauen).</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1">Woche 3: Schutzmaßnahmen implementieren</h4>
              <p className="text-sm">Erstellen Sie persönliche Regeln für Schwachstellen und entwickeln Sie Checklisten für wichtige Entscheidungsbereiche.</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow">
              <h4 className="font-bold mb-1">Woche 4: Entscheidungen verbessern und Werte reflektieren</h4>
              <p className="text-sm">Wenden Sie den strukturierten Entscheidungsprozess an und führen Sie die Werte-Reflexion durch.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg mt-2">
            <p className="font-bold mb-1">Tipp für nachhaltige Implementierung:</p>
            <p className="text-sm">Bilden Sie eine "Clear Thinking"-Gruppe mit Freunden oder Kollegen. Treffen Sie sich regelmäßig, um Fortschritte zu besprechen, Herausforderungen zu teilen und sich gegenseitig zu unterstützen. Die soziale Komponente verstärkt die Umsetzung erheblich.</p>
          </div>
        </div>
      )
    }
  ];

  // Navigation component
  const Navigation = () => (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg w-full">
      <button 
        onClick={prevSlide} 
        disabled={currentSlide === 0}
        className={`px-4 py-2 rounded ${currentSlide === 0 ? 'bg-gray-300 text-gray-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
      >
        Zurück
      </button>
      
      <div className="text-sm text-gray-600">
        Folie {currentSlide + 1} von {slides.length}
      </div>
      
      <button 
        onClick={nextSlide} 
        disabled={currentSlide === slides.length - 1}
        className={`px-4 py-2 rounded ${currentSlide === slides.length - 1 ? 'bg-gray-300 text-gray-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
      >
        Weiter
      </button>
    </div>
  );

  // Small navigation dots component
  const NavigationDots = () => (
    <div className="flex justify-center mt-4 space-x-1">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  // Chapter selection component
  const ChapterSelection = () => (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      <button onClick={() => goToSlide(0)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Titel</button>
      <button onClick={() => goToSlide(1)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Überblick</button>
      <button onClick={() => goToSlide(2)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.1 Überblick</button>
      <button onClick={() => goToSlide(3)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.1 Umsetzung</button>
      <button onClick={() => goToSlide(4)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.2 Überblick</button>
      <button onClick={() => goToSlide(5)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.2 Umsetzung</button>
      <button onClick={() => goToSlide(6)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.3 Überblick</button>
      <button onClick={() => goToSlide(7)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.3 Umsetzung</button>
      <button onClick={() => goToSlide(8)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.4 Überblick</button>
      <button onClick={() => goToSlide(9)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.4 Umsetzung</button>
      <button onClick={() => goToSlide(10)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.5 Überblick</button>
      <button onClick={() => goToSlide(11)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Kap.5 Umsetzung</button>
      <button onClick={() => goToSlide(12)} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">Zusammenfassung</button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with chapter title */}
        <div className="bg-indigo-700 py-2 px-4 text-white">
          <h1 className="text-lg font-bold">{slides[currentSlide].title}</h1>
        </div>
        
        {/* Slide content */}
        <div className="p-6 h-96 overflow-y-auto">
          {slides[currentSlide].content}
        </div>
        
        {/* Navigation */}
        <div className="p-4 border-t border-gray-200">
          <Navigation />
          <NavigationDots />
          <ChapterSelection />
        </div>
      </div>
    </div>
  );
};

export default ClearThinkingPresentation;
