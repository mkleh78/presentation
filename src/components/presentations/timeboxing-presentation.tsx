import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, CheckCircle, AlertCircle, Target, Brain, Users, BarChart } from 'lucide-react';

const TimeboxingPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeboxPlan, setTimeboxPlan] = useState({
    task: '',
    duration: '30',
    startTime: '',
    importance: '',
    description: ''
  });
  const [todoList, setTodoList] = useState([]);
  const [mySchedule, setMySchedule] = useState([]);
  const [habitProgress, setHabitProgress] = useState(0);

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

  const addToTodoList = (e) => {
    e.preventDefault();
    if (todoList.length < 10) {
      setTodoList([...todoList, { id: Date.now(), text: e.target.task.value, completed: false }]);
      e.target.reset();
    }
  };

  const addTimebox = (e) => {
    e.preventDefault();
    const newTimebox = {
      id: Date.now(),
      ...timeboxPlan,
      completed: false
    };
    setMySchedule([...mySchedule, newTimebox]);
    setTimeboxPlan({
      task: '',
      duration: '30',
      startTime: '',
      importance: '',
      description: ''
    });
  };

  const slides = [
    // Slide 1: Willkommen
    {
      title: "Timeboxing - Dein Leben intentional gestalten",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Was ist Timeboxing?</h3>
            <p className="text-gray-700 mb-4">
              Timeboxing ist die Methode und Denkweise:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Aufgaben auswählen, bevor der Tag beginnt</li>
              <li>Jede Aufgabe mit Start- und Endzeit im Kalender eintragen</li>
              <li>Sich auf eine Sache konzentrieren</li>
              <li>Jede Aufgabe zu einem akzeptablen Standard erledigen (nicht perfekt)</li>
            </ul>
          </div>
          <div className="flex justify-around">
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-600">2.5x</span>
              <p className="text-sm text-gray-600">Produktivitätssteigerung</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-green-600">15 min</span>
              <p className="text-sm text-gray-600">Planungszeit täglich</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-purple-600">1</span>
              <p className="text-sm text-gray-600">Sache zur Zeit</p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: Warum es funktioniert
    {
      title: "BELIEVE - Warum Timeboxing funktioniert",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-6 rounded-lg">
              <Brain className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="font-bold mb-2">Klügeres Denken</h4>
              <p className="text-sm text-gray-600">Fokussiere dich auf eine Aufgabe und erreiche Flow-Zustände</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">Bessere Zusammenarbeit</h4>
              <p className="text-sm text-gray-600">Teile deinen Kalender für mehr Transparenz</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <Target className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="font-bold mb-2">Mehr Produktivität</h4>
              <p className="text-sm text-gray-600">Verdopple deine Produktivität durch bessere Fokussierung</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <BarChart className="w-8 h-8 text-orange-600 mb-3" />
              <h4 className="font-bold mb-2">Intentionales Leben</h4>
              <p className="text-sm text-gray-600">Wähle bewusst, wie du deine Zeit verbringst</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="font-medium italic">
              "Timeboxing ist eine Form von Implementation Intention - wissenschaftlich bewiesen 2.5x effektiver bei der Zielerreichung"
            </p>
          </div>
        </div>
      )
    },
    // Slide 3: To-Do Liste erstellen
    {
      title: "PLAN - Erstelle deine To-Do Liste",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Die To-Do Liste ist die Basis für erfolgreiches Timeboxing. Füge hier deine wichtigsten Aufgaben hinzu:
          </p>
          <form onSubmit={addToTodoList} className="flex gap-2">
            <input
              type="text"
              name="task"
              placeholder="Neue Aufgabe..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Hinzufügen
            </button>
          </form>
          <div className="space-y-2">
            {todoList.map(item => (
              <div key={item.id} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-gray-400" />
                <span>{item.text}</span>
              </div>
            ))}
            {todoList.length === 0 && (
              <p className="text-gray-500 text-center py-4">Füge Aufgaben zu deiner To-Do Liste hinzu</p>
            )}
          </div>
        </div>
      )
    },
    // Slide 4: Timeboxes erstellen
    {
      title: "PLAN - Erstelle deine Timeboxes",
      content: (
        <div className="space-y-6">
          <form onSubmit={addTimebox} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Aufgabe</label>
              <input
                type="text"
                value={timeboxPlan.task}
                onChange={(e) => setTimeboxPlan({...timeboxPlan, task: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Was willst du erledigen?"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dauer (Minuten)</label>
                <select
                  value={timeboxPlan.duration}
                  onChange={(e) => setTimeboxPlan({...timeboxPlan, duration: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="15">15 Minuten</option>
                  <option value="30">30 Minuten</option>
                  <option value="60">60 Minuten</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Startzeit</label>
                <input
                  type="time"
                  value={timeboxPlan.startTime}
                  onChange={(e) => setTimeboxPlan({...timeboxPlan, startTime: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Timebox hinzufügen
            </button>
          </form>

          <div className="mt-6">
            <h4 className="font-bold mb-3">Dein Zeitplan</h4>
            <div className="space-y-2">
              {mySchedule.map(box => (
                <div key={box.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="font-medium">{box.task}</span>
                    <span className="text-sm text-gray-600 ml-2">({box.duration} min)</span>
                  </div>
                  <span className="text-sm text-gray-600">{box.startTime}</span>
                </div>
              ))}
              {mySchedule.length === 0 && (
                <p className="text-gray-500 text-center py-4">Plane deine Timeboxes für den Tag</p>
              )}
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Box-Sizing Tipps
    {
      title: "PLAN - Box-Sizing Richtlinien",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15 min</div>
              <h4 className="font-bold mb-2">Klein</h4>
              <p className="text-sm text-gray-600">Kurze Aufgaben, E-Mails, Reviews</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">30 min</div>
              <h4 className="font-bold mb-2">Mittel</h4>
              <p className="text-sm text-gray-600">Standard Timeboxes für die meisten Aufgaben</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">60 min</div>
              <h4 className="font-bold mb-2">Groß</h4>
              <p className="text-sm text-gray-600">Deep Work, komplexe Projekte</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Tipps für bessere Zeitschätzungen:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Vergleiche mit ähnlichen vergangenen Aufgaben</li>
              <li>✓ Plane Pufferzeiten für Unerwartetes ein</li>
              <li>✓ Starte klein und passe dich an</li>
              <li>✓ Teile große Aufgaben in kleinere Timeboxes auf</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 6: DO - Tipps zur Ausführung 
    {
      title: "DO - Timeboxes erfolgreich ausführen",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Start</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Beginne pünktlich</li>
                <li>• Eliminiere Ablenkungen (Handy weg!)</li>
                <li>• Identifiziere die kleinste erste Aktion</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Middle</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Fokussiere auf eine Sache</li>
                <li>• Vermeide Ablenkungen</li>
                <li>• Setze einen Midway Checkpoint</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">End</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Halte die Endzeit ein</li>
                <li>• Ziel: Gut genug, nicht perfekt</li>
                <li>• Feiere deinen Erfolg</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Bei Verzögerungen:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Reduziere Umfang</li>
              <li>• Beschleunige die Arbeit</li>
              <li>• Verlängere die Timebox (nur wenn nötig)</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 7: OWN - Gewohnheit aufbauen
    {
      title: "OWN - Timeboxing zur Gewohnheit machen",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Fogg's Behavior Model: B = MAP</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-blue-600">Motivation</div>
                <p className="text-sm">Erinnere dich an die Benefits</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-blue-600">Ability</div>
                <p className="text-sm">Mache es dir leicht</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-blue-600">Prompt</div>
                <p className="text-sm">Setze Erinnerungen</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setHabitProgress(Math.min(habitProgress + 1, 7))}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Heute Timeboxing praktiziert
              </button>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-green-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${(habitProgress / 7) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">{habitProgress}/7 Tage</span>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quick Start Tipps:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Setze wiederkehrende 15-min "Timebox Planung" Termine</li>
                <li>✓ Kombiniere mit deiner Morgenroutine</li>
                <li>✓ Feiere kleine Erfolge</li>
                <li>✓ Passe das System an deine Bedürfnisse an</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Erste Schritte
    {
      title: "Deine ersten Schritte",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Starte mit Timeboxing jetzt!</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold">Plane 15 Minuten für morgen früh</h4>
                  <p className="text-blue-100">Setze einen wiederkehrenden Termin "Timeboxing Planung"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold">Wähle 3-5 wichtige Aufgaben</h4>
                  <p className="text-blue-100">Beschränke dich auf das Wesentliche</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold">Erstelle deine ersten Timeboxes</h4>
                  <p className="text-blue-100">Nutze 15, 30 oder 60 Minuten Blöcke</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold">Lebe den Plan und lerne</h4>
                  <p className="text-blue-100">Perfektion kommt mit der Praxis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://calendar.google.com/calendar/r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Öffne deinen Kalender und starte jetzt!
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-sm text-gray-500 mb-2">Slide {currentSlide + 1} von {slides.length}</div>
          <h2 className="text-2xl font-bold mb-6">{slides[currentSlide].title}</h2>
          <div>{slides[currentSlide].content}</div>
        </div>
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <button
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentSlide === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Zurück
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentSlide === slides.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Weiter
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeboxingPresentation;