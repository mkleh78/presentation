import React, { useState } from 'react';

const EssentialismusPraesentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Icon Components
  const ArrowIcon = ({ direction }) => (
    <svg 
      className={`w-6 h-6 ${direction === 'right' ? 'transform rotate-180' : ''}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 19l-7-7 7-7" 
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
  
  // Slides
  const slides = [
    // Slide 1: Einführung
    {
      id: 'intro',
      title: 'Essentialismus',
      subtitle: 'Weniger, aber besser',
      content: (
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 italic mb-6">"Die Weisheit des Lebens besteht in der Eliminierung des Nicht-Essentiellen"</p>
            <p className="text-sm">- Lin Yutang</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg w-full max-w-xl">
            <p className="text-xl font-semibold mb-4">Was ist Essentialismus?</p>
            <p className="mb-4">
              Essentialismus ist das <span className="font-bold">relentless Streben nach weniger, aber besser</span>.
            </p>
            <p>
              Es ist eine systematische Disziplin, um zu unterscheiden, was absolut essentiell ist, 
              und dann alles andere zu eliminieren, damit wir unseren höchsten Beitrag zu den 
              wirklich wichtigen Dingen leisten können.
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 2: Kernprinzipien
    {
      id: 'kernprinzipien',
      title: 'Kernprinzipien des Essentialismus',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Die bewusste Wahl</h3>
            <p>Essentialisten verstehen, dass sie die Macht haben zu wählen. Sie fragen nicht "Wie kann ich alles tun?", sondern "Was ist wirklich wichtig?"</p>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-green-700">Die Unterscheidung</h3>
            <p>Fast alles ist unwichtig. Essentialisten unterscheiden das "triviale Viele" vom "vitalen Wenigen".</p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Die Ausführung</h3>
            <p>Essentialisten schaffen Systeme, die die Ausführung des Wesentlichen fast mühelos machen.</p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-amber-700">Der Trade-off</h3>
            <p>Essentialisten akzeptieren, dass sie nicht alles haben können, und fragen: "Welches Problem will ich?"</p>
          </div>
        </div>
      )
    },
    
    // Slide 3: Essentialist vs. Nonessentialist
    {
      id: 'vergleich',
      title: 'Essentialist vs. Nonessentialist',
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-100"></th>
                <th className="py-3 px-4 bg-gray-100 text-blue-600">Nonessentialist</th>
                <th className="py-3 px-4 bg-gray-100 text-green-600">Essentialist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 font-semibold border-b">Denkweise</td>
                <td className="py-3 px-4 border-b">"Ich muss alles tun."</td>
                <td className="py-3 px-4 border-b">"Weniger, aber besser."</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold border-b">Energie</td>
                <td className="py-3 px-4 border-b">Verteilt auf viele Aktivitäten</td>
                <td className="py-3 px-4 border-b">Fokussiert auf wenige Prioritäten</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold border-b">Ergebnisse</td>
                <td className="py-3 px-4 border-b">Minimaler Fortschritt in vielen Richtungen</td>
                <td className="py-3 px-4 border-b">Signifikanter Fortschritt in wenigen Richtungen</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold border-b">Wahl</td>
                <td className="py-3 px-4 border-b">"Wie kann ich beides tun?"</td>
                <td className="py-3 px-4 border-b">"Welches Problem will ich?"</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold border-b">Zeit</td>
                <td className="py-3 px-4 border-b">Zu beschäftigt mit Tun</td>
                <td className="py-3 px-4 border-b">Schafft Raum für Denken und Reflexion</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Umgang mit Hindernissen</td>
                <td className="py-3 px-4">Fügt mehr hinzu</td>
                <td className="py-3 px-4">Beseitigt Hindernisse</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    
    // Slide 4: Die Phasen des Essentialismus
    {
      id: 'phasen',
      title: 'Die 3 Phasen des Essentialismus',
      content: (
        <div className="flex flex-col space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Erkunden</h3>
              <p className="text-gray-700 mb-2">Erkunden Sie Ihre Optionen, schaffen Sie Raum zum Denken, und unterscheiden Sie das Wesentliche vom Unwesentlichen.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Choose</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Discern</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Trade-off</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Escape</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Look</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Eliminieren</h3>
              <p className="text-gray-700 mb-2">Sagen Sie anmutig "Nein", lösen Sie sich von Unwesentlichem, setzen Sie klare Grenzen.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Dare</span>
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Uncommit</span>
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Edit</span>
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Limit</span>
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Select</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Ausführen</h3>
              <p className="text-gray-700 mb-2">Schaffen Sie Puffer, beseitigen Sie Hindernisse, feiern Sie kleine Erfolge, entwickeln Sie Routinen.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Buffer</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Subtract</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Progress</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Flow</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Focus</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: Erkunden - Choose
    {
      id: 'choose',
      title: 'CHOOSE: Die unbesiegbare Macht der Wahl',
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Kernidee</h3>
              <p className="mb-2">
                Der Weg zum Essentialisten beginnt mit einer <span className="font-semibold">geschärften Wahrnehmung unserer Fähigkeit zu wählen</span>.
              </p>
              <p className="italic text-sm">"Mein erster Akt des freien Willens soll der Glaube an den freien Willen sein." - William James</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Essentialistische Perspektive</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bewusste Entscheidungen treffen statt reaktiv handeln</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Die Freiheit zu wählen als unveräußerliches Recht anerkennen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Nach Design leben, nicht nach Standard</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Praktische Umsetzung</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-blue-600">Hinterfragen Sie Ihre "Muss"-Aussagen</p>
                <p className="text-sm">Wann immer Sie denken "Ich muss...", halten Sie inne und fragen Sie sich: "Habe ich wirklich keine Wahl?"</p>
                <p className="text-sm italic mt-1">Beispiel: "Ich muss diese E-Mail heute beantworten" → "Wähle ich, diese E-Mail heute zu beantworten?"</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Reflektieren Sie Ihre wahren Wünsche</p>
                <p className="text-sm">Nehmen Sie sich Zeit, um darüber nachzudenken, was Sie wirklich tun möchten und was für Sie Priorität hat.</p>
                <p className="text-sm italic mt-1">Übung: Notieren Sie 20 Dinge, die Sie tun möchten, wenn Sie völlig frei wählen könnten.</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Wählen Sie bewusst</p>
                <p className="text-sm">Erinnern Sie sich mehrmals täglich daran, dass Sie die Wahl haben, und treffen Sie eine bewusste Entscheidung.</p>
                <p className="text-sm italic mt-1">Praxis: Setzen Sie Erinnerungen auf Ihrem Telefon mit der Frage "Wähle ich gerade bewusst?"</p>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 6: Erkunden - Discern
    {
      id: 'discern',
      title: 'DISCERN: Die Unwichtigkeit des praktisch Allem',
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Kernidee</h3>
              <p>
                <span className="font-semibold">Das meiste im Leben hat wenig Wert, während wenige Dinge außergewöhnlich wertvoll sind.</span> Essentialisten verstehen, dass sie zwischen dem "trivialen Vielen" und dem "vitalen Wenigen" unterscheiden müssen.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-yellow-700">Das Pareto-Prinzip</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-blue-200 rounded-full"></div>
                  <div className="absolute inset-0 bg-blue-500 rounded-l-full" style={{clipPath: 'polygon(0 0, 20% 0, 20% 100%, 0 100%)'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-xl">80/20</p>
                      <p className="text-sm mt-2">20% der Bemühungen <br/>erzeugen 80% der Ergebnisse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Praktische Umsetzung</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-blue-600">Wenden Sie das 80/20-Prinzip an</p>
                <p className="text-sm">Analysieren Sie, welche 20% Ihrer Aktivitäten 80% der wichtigsten Ergebnisse bringen.</p>
                <p className="text-sm italic mt-1">Übung: Listen Sie alle Ihre Projekte auf und markieren Sie die 20%, die den größten Wert schaffen.</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Nehmen Sie sich Zeit für die Erkundung</p>
                <p className="text-sm">Bevor Sie sich zu etwas verpflichten, nehmen Sie sich bewusst Zeit, verschiedene Optionen zu prüfen.</p>
                <p className="text-sm italic mt-1">Beispiel: Statt sofort zu einer Besprechung zuzusagen, sagen Sie: "Ich prüfe das und komme darauf zurück."</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Stellen Sie die essentialistische Frage</p>
                <p className="text-sm">Fragen Sie bei jeder Entscheidung: "Gehört das zu den vitalen Wenigen oder zu den trivialen Vielen?"</p>
                <p className="text-sm italic mt-1">Tipp: Bewerten Sie Ihre täglichen Aktivitäten auf einer Skala von 1-10. Konzentrieren Sie sich nur auf das, was über 9 liegt.</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Lernen Sie von Warren Buffett</p>
                <p className="text-sm">Seien Sie bereit, viele gute Gelegenheiten abzulehnen, um sich auf die außergewöhnlichen zu konzentrieren.</p>
                <p className="text-sm italic mt-1">Strategie: Führen Sie eine "Nicht-zu-tun-Liste" für alle Aktivitäten, die Sie bewusst vermeiden.</p>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 7: Erkunden - Trade-off
    {
      id: 'tradeoff',
      title: 'TRADE-OFF: Welches Problem will ich?',
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Kernidee</h3>
              <p className="mb-2">
                <span className="font-semibold">Trade-offs sind eine inhärente Realität des Lebens.</span> Wir können nicht alles haben oder tun.
              </p>
              <p className="italic">
                Ein Nonessentialist fragt: "Wie kann ich beides tun?"<br/>
                Ein Essentialist fragt: "Welches Problem will ich?"
              </p>
            </div>
            
            <div className="p-5 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Die Vier-Flammen-Analogie</h3>
              <div className="flex justify-center mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-100 p-4 rounded text-center">Familie</div>
                  <div className="bg-blue-100 p-4 rounded text-center">Freunde</div>
                  <div className="bg-green-100 p-4 rounded text-center">Gesundheit</div>
                  <div className="bg-red-100 p-4 rounded text-center">Arbeit</div>
                </div>
              </div>
              <p className="text-sm">
                Um erfolgreich zu sein, müssen wir möglicherweise eine Flamme reduzieren. Für wirklich großen Erfolg braucht es manchmal zwei reduzierte Flammen.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Praktische Umsetzung</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-blue-600">Akzeptieren Sie die Realität von Trade-offs</p>
                <p className="text-sm">Erkennen Sie, dass jede Entscheidung eine Form des Trade-offs beinhaltet.</p>
                <p className="text-sm italic mt-1">Übung: Notieren Sie für jede wichtige Entscheidung, worauf Sie verzichten, wenn Sie "Ja" sagen.</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Stellen Sie die richtigen Fragen</p>
                <p className="text-sm">Fragen Sie sich: "Welches Problem will ich wirklich lösen?" oder "Welches Ergebnis will ich unbedingt erzielen?"</p>
                <p className="text-sm italic mt-1">Beispiel: Bei der Karriereplanung nicht fragen "Wie kann ich befördert werden und mehr Zeit mit der Familie verbringen?", sondern "Ist mir die Beförderung oder die Familienzeit wichtiger?"</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Denken Sie langfristig</p>
                <p className="text-sm">Berücksichtigen Sie die langfristigen Auswirkungen Ihrer Trade-offs, nicht nur die kurzfristigen.</p>
                <p className="text-sm italic mt-1">Strategie: Erstellen Sie eine "Kosten-Nutzen-Analyse" für wichtige Entscheidungen mit 3-Monats-, 1-Jahres- und 5-Jahres-Auswirkungen.</p>
              </li>
              <li>
                <p className="font-medium text-blue-600">Formulieren Sie Ihre Fragen positiv</p>
                <p className="text-sm">Anstatt "Was muss ich aufgeben?" fragen Sie "Worauf will ich mich konzentrieren und Großes leisten?"</p>
                <p className="text-sm italic mt-1">Praxis: Reframen Sie mindestens eine tägliche Entscheidung mit diesem positiven Ansatz.</p>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    
    // Slide 8: Erkunden - Escape & Look
    {
      id: 'escape-look',
      title: 'ESCAPE & LOOK: Raum zum Denken und Sehen',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">ESCAPE: Die Vorteile der Unverfügbarkeit</h3>
            <div className="mb-4">
              <p className="mb-3"><span className="font-semibold">Kernidee:</span> Ohne regelmäßige Auszeiten zum Nachdenken ist keine ernsthafte Arbeit möglich.</p>
              <div className="bg-white p-3 rounded mb-3">
                <p className="text-sm italic">"Fokus erfordert ein Entkommen, um sich zu konzentrieren."</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Praktische Umsetzung:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▶</span>
                  <span><span className="font-medium">Planen Sie bewusst "Escape"-Zeit ein:</span> Blocken Sie Termine mit sich selbst für ungestörtes Nachdenken.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▶</span>
                  <span><span className="font-medium">Schaffen Sie Raum für Reflexion:</span> Gehen Sie täglich 20 Minuten spazieren ohne digitale Geräte.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▶</span>
                  <span><span className="font-medium">Begrenzen Sie Ablenkungen:</span> Deaktivieren Sie Benachrichtigungen während Ihrer Fokuszeit.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-700">LOOK: Sehen, was wirklich wichtig ist</h3>
            <div className="mb-4">
              <p className="mb-3"><span className="font-semibold">Kernidee:</span> Essentialisten sind wie Journalisten - sie sehen über die Fakten hinaus zur Bedeutung und Relevanz.</p>
              <div className="bg-white p-3 rounded mb-3">
                <p className="text-sm italic">"Das Wesentliche ist für die Augen unsichtbar." - Antoine de Saint-Exupéry</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Praktische Umsetzung:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">▶</span>
                  <span><span className="font-medium">Werden Sie zum "Journalisten" Ihres Lebens:</span> Stellen Sie die Fragen "Was bedeutet das?" und "Warum ist das wichtig?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">▶</span>
                  <span><span className="font-medium">Führen Sie ein fokussiertes Journal:</span> Notieren Sie täglich nur die wichtigste Erkenntnis oder "Schlagzeile".</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">▶</span>
                  <span><span className="font-medium">Trainieren Sie den Blick für das große Ganze:</span> Nehmen Sie regelmäßig eine Vogelperspektive ein, um Muster zu erkennen.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 9: Eliminieren - Dare & Uncommit
    {
      id: 'dare-uncommit',
      title: 'DARE & UNCOMMIT: Die Kunst des Loslassens',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-700">DARE: Die Kraft eines anmutigen "Nein"</h3>
            <div className="mb-4">
              <p className="mb-3"><span className="font-semibold">Kernidee:</span> Die Fähigkeit, "Nein" zu sagen, ist entscheidend für einen Essentialisten.</p>
              <div className="bg-white p-3 rounded mb-3">
                <p className="text-sm italic">"Ein klares 'Nein' kann respektvoller sein als ein vages oder unverbindliches 'Ja'."</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Praktische Umsetzung:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span><span className="font-medium">Üben Sie das elegante "Nein":</span> "Ich fühle mich geehrt, aber ich kann aktuell keine weiteren Verpflichtungen eingehen."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span><span className="font-medium">Seien Sie klar und bestimmt:</span> Verzichten Sie auf vage Antworten, die falsche Hoffnungen wecken.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span><span className="font-medium">Sagen Sie "Nein", um "Ja" zu sagen:</span> Machen Sie sich bewusst, dass jedes "Nein" zu Unwesentlichem ein "Ja" zum Wesentlichen ist.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">UNCOMMIT: Gewinnen durch Verlustbegrenzung</h3>
            <div className="mb-4">
              <p className="mb-3"><span className="font-semibold">Kernidee:</span> Sich von Verpflichtungen lösen, die nicht mehr wesentlich sind, um Ressourcen freizusetzen.</p>
              <div className="bg-white p-3 rounded mb-3">
                <p className="text-sm italic">"Wenn ich jetzt nicht schon investiert wäre, wie viel würde ich jetzt investieren?"</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Praktische Umsetzung:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span><span className="font-medium">Erkennen Sie den Sunk-Cost-Bias:</span> Vergangene Investitionen sollten zukünftige Entscheidungen nicht beeinflussen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span><span className="font-medium">Führen Sie regelmäßige "Audits" durch:</span> Überprüfen Sie monatlich alle Projekte auf ihre Übereinstimmung mit Ihren Zielen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▶</span>
                  <span><span className="font-medium">Üben Sie das "sanfte Aussteigen":</span> Delegieren Sie, reduzieren Sie den Umfang oder beenden Sie schrittweise.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 10: Eliminieren - Edit, Limit & Select
    {
      id: 'edit-limit-select',
      title: 'EDIT, LIMIT & SELECT: Weniger ist mehr',
      content: (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-violet-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-violet-700">EDIT: Die unsichtbare Kunst</h3>
              <p className="text-sm mb-3">
                <span className="font-semibold">Kernidee:</span> Durch Subtraktion und Entfernung von Unwesentlichem verbessern.
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-violet-500 mr-1">▶</span>
                  <span><span className="font-medium">Optionen streichen</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-1">▶</span>
                  <span><span className="font-medium">Verdichten</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-1">▶</span>
                  <span><span className="font-medium">Korrigieren</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-1">▶</span>
                  <span><span className="font-medium">Weniger editieren</span></span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-indigo-700">LIMIT: Die Freiheit durch Grenzen</h3>
              <p className="text-sm mb-3">
                <span className="font-semibold">Kernidee:</span> Grenzen ermöglichen Freiheit, anstatt sie einzuschränken.
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-1">▶</span>
                  <span><span className="font-medium">Setzen Sie klare Grenzen</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-1">▶</span>
                  <span><span className="font-medium">Kommunizieren Sie diese</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-1">▶</span>
                  <span><span className="font-medium">Bleiben Sie konsequent</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-1">▶</span>
                  <span><span className="font-medium">Überprüfen Sie regelmäßig</span></span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">SELECT: Extreme Kriterien</h3>
              <p className="text-sm mb-3">
                <span className="font-semibold">Kernidee:</span> Weniger aber extrem selektiv bei Entscheidungen sein.
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-1">▶</span>
                  <span><span className="font-medium">"Hell Yeah! oder Nein"-Regel</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-1">▶</span>
                  <span><span className="font-medium">Mindest- und Idealkriterien</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-1">▶</span>
                  <span><span className="font-medium">Drei entscheidende Fragen</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-1">▶</span>
                  <span><span className="font-medium">Machen Sie Kriterien explizit</span></span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Praktische Umsetzung im Alltag</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Tägliches "Editieren"</h4>
                <p className="text-sm">Nehmen Sie sich täglich 10 Minuten Zeit, um Ihren Terminkalender und Ihre To-Do-Liste zu überprüfen. Streichen Sie mindestens eine Aktivität, die nicht zum Wesentlichen beiträgt.</p>
                <p className="text-sm italic mt-1">Beispiel: "Diese Besprechung könnte auch eine E-Mail sein."</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Setzen Sie Grenzen für digitale Ablenkungen</h4>
                <p className="text-sm">Definieren Sie klare Zeiten, zu denen Sie E-Mails und Nachrichten checken (z.B. 3x täglich), anstatt ständig verfügbar zu sein.</p>
                <p className="text-sm italic mt-1">Tipp: Nutzen Sie automatische Antworten: "Ich bearbeite E-Mails um 10, 14 und 16 Uhr."</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Selektiver beim "Ja"-Sagen</h4>
                <p className="text-sm">Wenden Sie den 90%-Filter an: Wenn Sie nicht zu mindestens 90% begeistert sind, sagen Sie "Nein".</p>
                <p className="text-sm italic mt-1">Fragen Sie sich: "Würde ich morgen früh aufgeregt aufwachen, um dies zu tun?"</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Der Minimalismus-Test</h4>
                <p className="text-sm">Für jeden Gegenstand oder jede Verpflichtung, die Sie behalten, müssen Sie einen anderen loswerden.</p>
                <p className="text-sm italic mt-1">Praxis: "Eine rein, eins raus" - bei Kleidung, Büchern, Projekten und sogar sozialen Verpflichtungen.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 11: Ausführen - Buffer & Subtract
    {
      id: 'buffer-subtract',
      title: 'BUFFER & SUBTRACT: Puffer und Hindernisse beseitigen',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">BUFFER: Der unfaire Vorteil</h3>
            <div className="mb-4">
              <p className="mb-3"><span className="font-semibold">Kernidee:</span> Die Welt ist unvorhersehbar. Essentialisten bauen Puffer ein, um mit Unerwartetem umzugehen.</p>
              <div className="bg-white p-3 rounded mb-3">
                <p className="text-sm italic">"Essentialisten akzeptieren die Realität der Unvorhersehbarkeit und bereiten sich darauf vor."</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Praktische Umsetzung:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">▶</span>
                  <span><span className="font-medium">Planen Sie Zeitpuffer ein:</span> Kalkulieren Sie bei Projekten 50% mehr Zeit ein als Sie denken zu benötigen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">▶</span>
                  <span><span className="font-medium">Schaffen Sie Übergangszeiten:</span> Planen Sie zwischen Meetings 15-30 Minuten Pufferzeit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">▶</span>
                  <span><span className="font-medium">Antizipieren Sie Hindernisse:</span> Fragen Sie sich: "Was könnte schiefgehen?" und planen Sie entsprechend.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-emerald-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">SUBTRACT: Mehr durch Beseitigung von Hindernissen</h3>
            <div className="mb-4">
              <p className="mb-3"><span className="font-semibold">Kernidee:</span> Essentialisten erreichen mehr, indem sie Hindernisse beseitigen, anstatt immer mehr hinzuzufügen.</p>
              <div className="bg-white p-3 rounded mb-3">
                <p className="text-sm italic">"Was steht dem Erreichen des Wesentlichen im Weg?"</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Praktische Umsetzung:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">▶</span>
                  <span><span className="font-medium">Identifizieren Sie den "langsamsten Wanderer":</span> Welches Hindernis bremst Ihren Fortschritt am stärksten?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">▶</span>
                  <span><span className="font-medium">Beginnen Sie klein:</span> Manchmal genügt ein kleiner Anstoß, um große Hindernisse zu beseitigen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">▶</span>
                  <span><span className="font-medium">Machen Sie eine Hindernisanalyse:</span> Listen Sie alle Barrieren auf und priorisieren Sie diese.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Beispiel: Meeting-Effizienz steigern</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Buffer-Strategie</h4>
                <p className="text-sm mb-1">1. Planen Sie Meetings für 25 oder 50 Minuten statt volle Stunden</p>
                <p className="text-sm mb-1">2. Bereiten Sie eine klare Agenda mit Zeitangaben vor</p>
                <p className="text-sm mb-1">3. Halten Sie 5-10 Minuten für unerwartete Diskussionen frei</p>
                <p className="text-sm italic mt-1">Tipp: Nutzen Sie Timer, um Zeitlimits einzuhalten</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Subtract-Strategie</h4>
                <p className="text-sm mb-1">1. Identifizieren Sie Meeting-Hindernisse (unpünktlicher Start, fehlende Vorbereitung, Abschweifungen)</p>
                <p className="text-sm mb-1">2. Beseitigen Sie das größte Hindernis zuerst (z.B. Einführung einer "No-Device"-Regel)</p>
                <p className="text-sm mb-1">3. Schaffen Sie klare Standards (wer muss teilnehmen, wie wird entschieden)</p>
                <p className="text-sm italic mt-1">Beispiel: "Wenn Sie nicht vorbereitet sind, nehmen Sie nicht teil."</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 12: Ausführen - Progress, Flow & Focus
    {
      id: 'progress-flow-focus',
      title: 'PROGRESS, FLOW & FOCUS: Die Ausführung optimieren',
      content: (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-green-700">PROGRESS: Die Macht kleiner Erfolge</h3>
              <p className="text-sm mb-3">
                <span className="font-semibold">Kernidee:</span> Starten Sie klein, feiern Sie Erfolge und bauen Sie Momentum auf.
              </p>
              <div className="bg-white p-2 rounded mb-2">
                <p className="text-xs italic">"Fortschritt ist die effektivste Form der Motivation."</p>
              </div>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">▶</span>
                  <span>Beginnen Sie mit dem "minimal tragfähigen Fortschritt"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">▶</span>
                  <span>Machen Sie Fortschritt sichtbar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">▶</span>
                  <span>Feiern Sie kleine Siege</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700">FLOW: Das Genie der Routine</h3>
              <p className="text-sm mb-3">
                <span className="font-semibold">Kernidee:</span> Routinen machen die Erledigung des Wesentlichen zum Standard.
              </p>
              <div className="bg-white p-2 rounded mb-2">
                <p className="text-xs italic">"Routine beseitigt Hindernisse und spart wertvolle Energie."</p>
              </div>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-1">▶</span>
                  <span>Entwickeln Sie Routinen für wesentliche Aufgaben</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-1">▶</span>
                  <span>Beginnen Sie mit der schwierigsten Aufgabe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-1">▶</span>
                  <span>Führen Sie Routinen schrittweise ein</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">FOCUS: Was ist jetzt wichtig?</h3>
              <p className="text-sm mb-3">
                <span className="font-semibold">Kernidee:</span> Fokus auf das Hier und Jetzt, nicht Vergangenheit oder Zukunft.
              </p>
              <div className="bg-white p-2 rounded mb-2">
                <p className="text-xs italic">"Chronos vs. Kairos: Die Qualität des gegenwärtigen Moments."</p>
              </div>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">▶</span>
                  <span>Finden Sie heraus, was jetzt wichtig ist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">▶</span>
                  <span>Befreien Sie Ihren Kopf von Ablenkungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">▶</span>
                  <span>Konzentrieren Sie sich auf eine Sache zurzeit</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Praxisbeispiel: Ein wichtiges Projekt umsetzen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Progress-Strategie</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">1.</span>
                    <span>Zerlegen Sie das Projekt in kleine, überschaubare Schritte (max. 20-30 Min. pro Schritt)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">2.</span>
                    <span>Erstellen Sie eine visuelle Fortschrittsanzeige (z.B. Kanban-Board)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">3.</span>
                    <span>Feiern Sie den Abschluss jedes Schritts bewusst (z.B. Häkchen setzen)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Flow-Strategie</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">1.</span>
                    <span>Legen Sie eine feste Tageszeit für die Arbeit am Projekt fest (z.B. 8-10 Uhr)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">2.</span>
                    <span>Schaffen Sie einen Auslöser-Belohnungs-Kreislauf (z.B. Kaffee - Arbeit - kurze Pause)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">3.</span>
                    <span>Beginnen Sie jeden Tag mit dem schwierigsten Teil des Projekts</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">Focus-Strategie</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">1.</span>
                    <span>Schalten Sie alle Ablenkungen aus (Flugmodus, Benachrichtigungen aus)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">2.</span>
                    <span>Notieren Sie aufkommende Gedanken sofort, um den Kopf freizuhalten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">3.</span>
                    <span>Verwenden Sie die Pomodoro-Technik (25 Min. Fokus, 5 Min. Pause)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 13: Das essentialistische Leben
    {
      id: 'essentialist-life',
      title: 'BE: Das essentialistische Leben',
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="bg-purple-50 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">Kernidee</h3>
              <p className="mb-4">
                Essentialismus kann mehr als nur eine Methode sein – es kann zu einer grundlegenden Art zu leben und zu denken werden.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="italic text-sm">"Der Unterschied liegt darin, ob Essentialismus Ihr 'Hauptfach' oder Ihr 'Nebenfach' ist."</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Kumulative Vorteile</h3>
              <p className="mb-3 text-sm">
                Jede bewusste Entscheidung für das Wesentliche und gegen das Unwesentliche macht diese Wahl zur Gewohnheit.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-2">Mehr Klarheit über das, was wirklich zählt</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-2">Leichtere Entscheidungsfindung</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-2">Höhere Zufriedenheit durch Einfachheit</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-2">Ein Leben ohne Bedauern</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Ihr Essentialismus-Umsetzungsplan</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-purple-600 mb-2">Phase 1: Erste 30 Tage</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">1.</span>
                  <span>Formulieren Sie Ihre wesentliche Absicht für die wichtigsten Lebensbereiche</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">2.</span>
                  <span>Üben Sie täglich das "Nein"-Sagen (mindestens 1x pro Tag)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">3.</span>
                  <span>Führen Sie die "Escape"-Zeit ein (15-30 Min. täglich zum Nachdenken)</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-indigo-600 mb-2">Phase 2: Tag 31-60</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">4.</span>
                  <span>Führen Sie ein 90/10-Audit durch (Welche 10% Ihrer Aktivitäten bringen 90% des Wertes?)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">5.</span>
                  <span>Entfernen Sie ein großes Hindernis in jedem wichtigen Lebensbereich</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">6.</span>
                  <span>Etablieren Sie eine Morgen- oder Abendroutine für wesentliche Aktivitäten</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Phase 3: Tag 61-90</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">7.</span>
                  <span>Schaffen Sie Pufferzeiten in Ihrem Kalender (mindestens 20% Freiräume)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">8.</span>
                  <span>Feiern Sie kleine Fortschritte bewusst und dokumentieren Sie diese</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">9.</span>
                  <span>Reflektieren Sie wöchentlich: "Was ist diese Woche wesentlich?"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 14: Zusammenfassung
    {
      id: 'zusammenfassung',
      title: 'Zusammenfassung: Der Weg des Essentialisten',
      content: (
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-6 rounded-lg w-full max-w-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Die essentialistische Formel</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-700 text-4xl mb-2">1</div>
                <div className="font-semibold text-lg mb-1">Erkunden</div>
                <p className="text-sm">Unterscheide das Wichtige vom Unwichtigen</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-red-700 text-4xl mb-2">2</div>
                <div className="font-semibold text-lg mb-1">Eliminieren</div>
                <p className="text-sm">Entferne das Unwesentliche konsequent</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-700 text-4xl mb-2">3</div>
                <div className="font-semibold text-lg mb-1">Ausführen</div>
                <p className="text-sm">Mache das Wesentliche einfach umsetzbar</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg w-full max-w-2xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-purple-700">Ihr täglicher Essentialismus-Check</h3>
            <div className="space-y-3">
              <div className="flex items-center p-2 bg-white rounded">
                <input type="checkbox" className="w-5 h-5 mr-3" />
                <label className="font-medium">Habe ich heute meinen Fokus auf die vitalen Wenigen gerichtet?</label>
              </div>
              <div className="flex items-center p-2 bg-white rounded">
                <input type="checkbox" className="w-5 h-5 mr-3" />
                <label className="font-medium">Habe ich bewusst Grenzen gesetzt und "Nein" zu Unwesentlichem gesagt?</label>
              </div>
              <div className="flex items-center p-2 bg-white rounded">
                <input type="checkbox" className="w-5 h-5 mr-3" />
                <label className="font-medium">Habe ich Zeit für Reflexion und Klarheit eingeräumt?</label>
              </div>
              <div className="flex items-center p-2 bg-white rounded">
                <input type="checkbox" className="w-5 h-5 mr-3" />
                <label className="font-medium">Habe ich ein Hindernis beseitigt statt nur mehr hinzuzufügen?</label>
              </div>
              <div className="flex items-center p-2 bg-white rounded">
                <input type="checkbox" className="w-5 h-5 mr-3" />
                <label className="font-medium">Habe ich einen kleinen Fortschritt in einer wesentlichen Aktivität gemacht?</label>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold mb-2">Die zentrale Frage bleibt:</p>
            <p className="text-3xl italic text-purple-700">"Was ist wesentlich? Eliminiere alles andere."</p>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-purple-700 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Essentialismus: Weniger, aber besser</h1>
          <p className="text-sm">Nach Greg McKeown</p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {/* Current Slide */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">{slides[currentSlide].title}</h2>
          {slides[currentSlide].subtitle && (
            <p className="text-xl mb-6 text-gray-600">{slides[currentSlide].subtitle}</p>
          )}
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            {slides[currentSlide].content}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <button 
            onClick={goToPreviousSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentSlide === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            <ArrowIcon direction="left" />
            <span className="ml-2">Vorherige</span>
          </button>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-3">{currentSlide + 1} / {slides.length}</span>
            <div className="hidden md:flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-purple-700' : 'bg-gray-300 hover:bg-purple-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentSlide === slides.length - 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            <span className="mr-2">Nächste</span>
            <ArrowIcon direction="right" />
          </button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 p-4 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          <p>Basierend auf dem Buch "Essentialism: The Disciplined Pursuit of Less" von Greg McKeown</p>
        </div>
      </footer>
    </div>
  );
};

export default EssentialismusPraesentation;
