import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Zap, TrendingUp, Mail, DollarSign, Target, PenTool, Users, Lightbulb, BookOpen, Brain } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Sam Parr: Die $27M Newsletter Story",
    content: (
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <Mail className="w-16 h-16 text-white" />
          </div>
        </div>
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          The Hustle Newsletter
        </h2>
        <p className="text-2xl text-gray-600 mb-8">Von 0 auf 2 Millionen Leser</p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <p className="text-3xl font-bold text-blue-600">$27M</p>
            <p className="text-gray-500">Exit-Wert</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <p className="text-3xl font-bold text-purple-600">2M+</p>
            <p className="text-gray-500">Abonnenten</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <p className="text-3xl font-bold text-green-600">5 Jahre</p>
            <p className="text-gray-500">bis zum Exit</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Die Tiefpunkte: Sam's Wendepunkt",
    content: (
      <div className="space-y-6">
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-3 text-red-700">🚨 Der Tiefpunkt</h3>
          <ul className="space-y-3 text-lg">
            <li>• 21 Jahre alt: Schwerer Alkoholismus</li>
            <li>• Mehrfache Verhaftungen innerhalb eines Monats</li>
            <li>• 5 Tage im Gefängnis</li>
            <li>• Sein Hund Sid musste 2 Tage allein zu Hause bleiben</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-3 text-green-700">💪 Der Wendepunkt</h3>
          <ul className="space-y-3 text-lg">
            <li>• "Ich will nie wieder etwas Schlechtes tun"</li>
            <li>• Behandlung in einer kostenlosen Klinik in San Francisco</li>
            <li>• Dr. Joselyn Porchez glaubte an ihn</li>
            <li>• Hund Sid wurde seine Motivation: "Dieser Hund rettete mich davor, ein Versager zu sein"</li>
          </ul>
        </div>
        <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-500 pl-4">
          "Ich wollte Power über mich selbst. Nicht über andere, sondern über mein eigenes Leben."
        </blockquote>
      </div>
    )
  },
  {
    id: 3,
    title: "Der unternehmerische Weg",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Sam's Unternehmer-Evolution</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h4 className="font-bold text-lg">Hot Dog Stand: "Southern Sam's Wieners"</h4>
              <p className="text-gray-600">Bis zu $1.000 pro Nacht in bar</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h4 className="font-bold text-lg">Online Whiskey-Verkauf</h4>
              <p className="text-gray-600">$500-1000 pro Tag (musste aufhören - illegal)</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h4 className="font-bold text-lg">Roommate Matching App</h4>
              <p className="text-gray-600">Verkauft für ~$30.000</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
            <div>
              <h4 className="font-bold text-lg">Hustle Con (Konferenz)</h4>
              <p className="text-gray-600">Event #1: $60k | Event #2: $150k+</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
            <div>
              <h4 className="font-bold text-lg">The Hustle Newsletter</h4>
              <p className="text-gray-600">Exit: $27+ Millionen</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Die Newsletter-Mathematik",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Die Mathematik hinter dem Erfolg</h3>
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-4">📊 Die Formel:</h4>
          <div className="text-center text-2xl font-mono bg-white p-4 rounded-lg shadow">
            Abonnenten × Frequenz × CPM = Umsatz
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">❌ Schlechtes Beispiel: UFC Newsletter</h4>
            <ul className="text-sm space-y-1">
              <li>• 50.000 Abonnenten</li>
              <li>• 4x pro Monat (nur bei Kämpfen)</li>
              <li>• $10 CPM (niedrige Kaufkraft)</li>
              <li className="font-bold text-red-600">= $2.000/Monat 😢</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">✅ Gutes Beispiel: Ärzte-Newsletter</h4>
            <ul className="text-sm space-y-1">
              <li>• 50.000 Abonnenten</li>
              <li>• 24x pro Monat (tägliche News)</li>
              <li>• $1.000 CPM (hohe Kaufkraft)</li>
              <li className="font-bold text-green-600">= $1.2M/Monat 🚀</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-lg font-semibold">💡 Key Insight:</p>
          <p>"Es geht nicht um die Anzahl der Abonnenten, sondern um deren Kaufkraft und deine Sendefrequenz!"</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Der Writing Blueprint",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Wie man ein großartiger Writer wird</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
          <h4 className="text-2xl font-bold mb-4">✍️ Die Copy Work Methode</h4>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <div>
                <p className="font-semibold">Finde großartige Texte</p>
                <p className="text-gray-600">Suche nach "world's greatest sales letter" oder berühmten Büchern</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <div>
                <p className="font-semibold">Schreibe sie täglich ab - von Hand!</p>
                <p className="text-gray-600">30-60 Minuten jeden Tag, kein Tag auslassen</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <div>
                <p className="font-semibold">Erstelle eine Swipe File</p>
                <p className="text-gray-600">Sammle Texte, die dich beeindrucken</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <div>
                <p className="font-semibold">3-5 Min Warm-up vor wichtigen Texten</p>
                <p className="text-gray-600">Kopiere deinen Lieblings-Writer als Aufwärmübung</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl">
          <h4 className="text-xl font-bold mb-2">🎯 AIDA Framework statt Schulaufsatz</h4>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold text-red-500">A</p>
              <p className="text-sm">Attention</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold text-orange-500">I</p>
              <p className="text-sm">Interest</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold text-green-500">D</p>
              <p className="text-sm">Desire</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-bold text-blue-500">A</p>
              <p className="text-sm">Action</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Growth Hacking Strategien",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-6 text-center">So wuchs The Hustle auf 2M+ Abonnenten</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3">🔥 Viraler Content</h4>
            <p className="mb-2 font-semibold">Beispiel: "I lived on Soylent for 30 days"</p>
            <ul className="text-sm space-y-1">
              <li>• Zahlte $2.000 an einen Tester</li>
              <li>• Posted auf Reddit Soylent Subreddit</li>
              <li>• 50.000+ Besucher in einer Woche</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3">💬 Der perfekte Popup</h4>
            <p className="italic mb-2">"Oh sh*t, not another popup!"</p>
            <p className="text-sm">Verwendete Humor und AIDA um 30.000 Anmeldungen/Monat zu generieren</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3">💰 Facebook Ads</h4>
            <p className="mb-2 font-semibold">Die $10M Ad Copy:</p>
            <p className="italic text-sm">"My boss thinks I'm smart. I'm not. I really just read The Hustle."</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3">🎯 Zielgruppen-Fokus</h4>
            <ul className="text-sm space-y-1">
              <li>• Reddit, Hacker News, Facebook Groups</li>
              <li>• Content speziell für Tech-Nerds</li>
              <li>• Persönlicher Schreibstil ("your smart friend")</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-2xl font-bold">📈 Ergebnis: 250.000 Abonnenten im ersten Jahr</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Business Development & Monetarisierung",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Von $0 auf $30k/Monat (Solo)</h3>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
          <h4 className="text-2xl font-bold mb-4">💼 Der Sales Prozess</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">1️⃣</span>
              <p>LinkedIn: Finde Marketing Manager der Speaker-Unternehmen</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">2️⃣</span>
              <p>Cold Email: "Euer Gründer war bei meinem Event..."</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">3️⃣</span>
              <p>Start klein: $1.000 Test-Kampagne</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">4️⃣</span>
              <p>Retention: "Make them whole" - Zufriedenheit über alles</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-blue-600">$30k</p>
            <p className="text-gray-600">Monatsumsatz solo</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-600">$100k+</p>
            <p className="text-gray-600">Nach Einstellung Sales-Person</p>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl">
          <p className="text-lg font-semibold">🎯 Sam's Prediction für heute:</p>
          <p className="italic">"Ich könnte wahrscheinlich mindestens $3M/Jahr machen - nur ich und ein Assistent"</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Life Lessons & Philosophie",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Sam's wichtigste Erkenntnisse</h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">🎯 "Lean into your weirdness"</h4>
            <p>"Die Welt will, dass du Vanille bist. Gib dem nicht nach."</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">🔥 "Burn the boats"</h4>
            <p>"Ich liebe das Gefühl, wenn dein Rücken zur Wand steht. Dort entsteht Größe."</p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">👶 "Maintain childlike wonder"</h4>
            <p>"Mit 35 hänge ich mit Älteren rum und bin immer noch wie ein Kind - und das ist gut so!"</p>
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">💪 "You shape your own reality"</h4>
            <p>"Die Welt wird von normalen Menschen geformt. Du kannst deine eigene Realität erschaffen."</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gray-100 rounded-xl text-center">
          <p className="text-xl font-semibold mb-2">An sein 15-jähriges Ich:</p>
          <p className="text-lg italic">"Du bist der verdammte Boss. Du kannst es schaffen. 
          Sei einzigartig und versteck deine Eigenartigkeit nicht."</p>
        </div>
      </div>
    )
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentSlide / (slides.length - 1)) * 100);
  }, [currentSlide]);

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
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-4 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slide Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
          </div>
          
          <div className="p-8 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center p-6 bg-gray-50">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentSlide === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Zurück</span>
            </button>

            <span className="text-gray-500">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentSlide === slides.length - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}
            >
              <span>Weiter</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Tipp: Nutze die Navigationspunkte oben oder die Buttons zum Navigieren
        </p>
      </div>
    </div>
  );
}