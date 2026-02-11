import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X, PlusCircle } from 'lucide-react';

const AtomicHabitsSummary = () => {
  const [openSection, setOpenSection] = useState('concept');
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { 
        text: newHabit, 
        obvious: false, 
        attractive: false, 
        easy: false, 
        satisfying: false 
      }]);
      setNewHabit('');
    }
  };

  const toggleHabitProperty = (index, property) => {
    const updatedHabits = [...habits];
    updatedHabits[index][property] = !updatedHabits[index][property];
    setHabits(updatedHabits);
  };

  const removeHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  const Section = ({ id, title, children }) => (
    <div className="mb-6 border rounded-lg overflow-hidden shadow-sm">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
        onClick={() => toggleSection(id)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {openSection === id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {openSection === id && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">Atomic Habits</h1>
      <h2 className="text-xl text-center mb-6 text-gray-600">Umsetzungsorientierte Zusammenfassung</h2>
      
      <div className="flex border-b mb-6">
        <button 
          className={`px-4 py-2 ${activeTab === 'overview' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >
          Übersicht
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'implementation' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('implementation')}
        >
          Umsetzung
        </button>
      </div>

      {activeTab === 'overview' ? (
        <>
          <p className="mb-6">
            James Clears "Atomic Habits" zeigt, wie winzige Veränderungen zu bemerkenswerten Ergebnissen führen können. 
            Die Kernidee: Konzentriere dich auf kleine, tägliche Verbesserungen (1% besser jeden Tag), 
            statt auf große, dramatische Veränderungen.
          </p>

          <Section id="concept" title="Das Konzept der atomaren Gewohnheiten">
            <p>
              <strong>Atomare Gewohnheiten</strong> sind kleine, leicht umsetzbare Routinen, die zu größeren Systemen kombiniert werden können.
              Sie sind die grundlegenden Bausteine bemerkenswerter Ergebnisse und der Schlüssel zu nachhaltiger Verhaltensänderung.
            </p>
            <p className="mt-3">
              <strong>Die Kraft der Gewohnheiten:</strong> Kleine Verbesserungen summieren sich mit der Zeit durch die Kraft des Zinseszinses.
              1% Verbesserung täglich führt zu 37-facher Verbesserung über ein Jahr.
            </p>
          </Section>

          <Section id="laws" title="Die vier Gesetze der Verhaltensänderung">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. Mache es offensichtlich (Hinweis)</h4>
                <p>Der Hinweis löst dein Gehirn aus, mit einem Verhalten zu beginnen.</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Gestalte deine Umgebung so, dass Hinweise für gute Gewohnheiten sichtbar sind</li>
                  <li>Nutze Gewohnheitsstapelung: "Nach [bestehende Gewohnheit] werde ich [neue Gewohnheit]"</li>
                  <li>Führe eine Gewohnheitserfassung durch, um bestehende Verhaltensmuster zu erkennen</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">2. Mache es attraktiv (Verlangen)</h4>
                <p>Je attraktiver eine Gelegenheit erscheint, desto wahrscheinlicher wird sie zur Gewohnheit.</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Nutze Verlockungsbündelung: Verbinde eine Handlung, die du tun musst, mit einer, die du tun willst</li>
                  <li>Geselle dich zu Menschen, für die dein gewünschtes Verhalten normal ist</li>
                  <li>Ändere deine Perspektive: Fokussiere auf die Vorteile, nicht auf die Mühe</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">3. Mache es einfach (Reaktion)</h4>
                <p>Je einfacher eine Handlung, desto wahrscheinlicher wird sie getan.</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Reduziere Reibung: Beseitige Hindernisse für gute Gewohnheiten</li>
                  <li>Schaffe Reibung für schlechte Gewohnheiten</li>
                  <li>Das Zwei-Minuten-Prinzip: Reduziere neue Gewohnheiten auf einen Zwei-Minuten-Akt</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">4. Mache es befriedigend (Belohnung)</h4>
                <p>Wir neigen dazu, Verhaltensweisen zu wiederholen, die befriedigend sind.</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Verstärke dein Verhalten durch sofortige Belohnung</li>
                  <li>Verwende Gewohnheitstracker, um Fortschritte sichtbar zu machen</li>
                  <li>Vermeide Unterbrechungszeiten: Verpasse nie zweimal hintereinander</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="identity" title="Identitätsbasierte Gewohnheiten">
            <p>
              Echte Verhaltensänderung beginnt bei der Identität. Anstatt auf Ergebnisse zu fokussieren (Ich will ein Buch schreiben),
              konzentriere dich darauf, wer du werden willst (Ich bin ein Schriftsteller).
            </p>
            <p className="mt-3">
              <strong>Der Prozess:</strong> Jede Handlung ist ein Schritt in Richtung der Person, die du werden möchtest.
              Kleine Gewohnheiten sind "Abstimmungen" für deine gewünschte Identität.
            </p>
            <p className="mt-3">
              <strong>Anwendung:</strong> Frage dich: "Was würde die Person tun, die ich werden möchte?"
              Deine Gewohnheiten formen deine Identität, und deine Identität beeinflusst deine Gewohnheiten.
            </p>
          </Section>

          <Section id="environment" title="Umgebungsdesign">
            <p>
              Deine Umgebung hat enormen Einfluss auf dein Verhalten. Gestalte sie so, dass gute Gewohnheiten offensichtlich,
              attraktiv, einfach und befriedigend sind.
            </p>
            <ul className="list-disc ml-5 mt-3">
              <li>Dedizierte Räume für bestimmte Aktivitäten einrichten (Arbeiten, Training, Entspannung)</li>
              <li>Hinweise für gewünschte Gewohnheiten sichtbar platzieren</li>
              <li>Hindernisse für gute Gewohnheiten im Voraus beseitigen</li>
              <li>Auslöser für schlechte Gewohnheiten verstecken oder entfernen</li>
            </ul>
          </Section>
        </>
      ) : (
        <div>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Dein Gewohnheiten-Planer</h3>
            <p className="mb-4">
              Wende die vier Gesetze der Verhaltensänderung auf deine eigenen Gewohnheiten an.
              Füge eine Gewohnheit hinzu und prüfe, ob sie die vier Kriterien erfüllt.
            </p>
          
            <div className="flex mb-4">
              <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Neue Gewohnheit eingeben..."
                className="flex-grow p-2 border rounded-l"
              />
              <button
                onClick={addHabit}
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
              >
                <PlusCircle size={18} />
              </button>
            </div>
          </div>

          {habits.length > 0 ? (
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gewohnheit</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Offensichtlich</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Attraktiv</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Einfach</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Befriedigend</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aktion</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {habits.map((habit, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{habit.text}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                          onClick={() => toggleHabitProperty(index, 'obvious')}
                          className={`p-1 rounded-full ${habit.obvious ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {habit.obvious ? <Check size={18} /> : <X size={18} />}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                          onClick={() => toggleHabitProperty(index, 'attractive')}
                          className={`p-1 rounded-full ${habit.attractive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {habit.attractive ? <Check size={18} /> : <X size={18} />}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                          onClick={() => toggleHabitProperty(index, 'easy')}
                          className={`p-1 rounded-full ${habit.easy ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {habit.easy ? <Check size={18} /> : <X size={18} />}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                          onClick={() => toggleHabitProperty(index, 'satisfying')}
                          className={`p-1 rounded-full ${habit.satisfying ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {habit.satisfying ? <Check size={18} /> : <X size={18} />}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button 
                          onClick={() => removeHabit(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center p-10 text-gray-500">
              Füge eine Gewohnheit hinzu, um zu beginnen
            </div>
          )}

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Implementierungsstrategien</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-blue-600">Gewohnheitsstapelung</h4>
                <p className="mt-2">Formel: "Nach [bestehende Gewohnheit] werde ich [neue Gewohnheit]"</p>
                <p className="mt-2 text-sm text-gray-600">Beispiel: "Nach dem Zähneputzen werde ich 10 Minuten meditieren."</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-blue-600">Zwei-Minuten-Regel</h4>
                <p className="mt-2">Reduziere neue Gewohnheiten auf einen Zwei-Minuten-Akt</p>
                <p className="mt-2 text-sm text-gray-600">Beispiel: "Jeden Tag für 2 Minuten lesen" statt "Ein Buch pro Woche lesen"</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-blue-600">Gewohnheitstracking</h4>
                <p className="mt-2">Führe Buch über deine Gewohnheiten mit einem Kalender oder einer App</p>
                <p className="mt-2 text-sm text-gray-600">Beispiel: Markiere jeden Tag, an dem du trainiert hast</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-blue-600">Verpasse nie zweimal</h4>
                <p className="mt-2">Es ist in Ordnung, einmal zu versagen, aber nie zweimal hintereinander</p>
                <p className="mt-2 text-sm text-gray-600">Beispiel: Wenn du heute das Training verpasst, stelle sicher, dass du morgen trainierst</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AtomicHabitsSummary;