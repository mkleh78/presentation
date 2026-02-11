import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Activity, 
  TrendingUp, 
  Wrench, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  BarChart, 
  ArrowRightCircle, 
  CircuitBoard, 
  RefreshCw, 
  Clock, 
  Lightbulb, 
  BookOpen, 
  Brain, 
  Lock, 
  Rocket, 
  Award, 
  Database, 
  Zap, 
  Settings, 
  Package, 
  TrendingDown,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  FileText,
  Eye,
  Network
} from 'lucide-react';

const TOCPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState('');

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay && !isTransitioning) {
      interval = setInterval(() => {
        if (currentSlide < slides.length - 1) {
          nextSlide();
        } else {
          setAutoPlay(false);
        }
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentSlide, isTransitioning]);

  const slides = [
    {
      title: "Engpasskonzentrierte Strategie",
      subtitle: "Theory of Constraints (TOC)",
      content: (
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-up">
              Engpasskonzentrierte Strategie
            </h1>
            <h2 className="text-3xl mb-8 animate-slide-up delay-100">Theory of Constraints (TOC)</h2>
          </div>
          <div className="relative flex justify-center items-center gap-8 mb-8">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Activity className="w-40 h-40 text-blue-600 animate-spin-slow relative z-10" />
          </div>
          <p className="text-2xl font-bold mb-4 animate-fade-in delay-200">Maximale Leistungssteigerung durch systematische Engpassbeseitigung</p>
          <p className="text-lg text-gray-600 animate-fade-in delay-300">Entwickelt von Dr. Eliyahu M. Goldratt</p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-blue-50 p-4 rounded-lg transform transition hover:scale-110 duration-300 animate-slide-up delay-400">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">Fokussiert</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg transform transition hover:scale-110 duration-300 animate-slide-up delay-500">
              <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">Effektiv</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg transform transition hover:scale-110 duration-300 animate-slide-up delay-600">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold">Messbar</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Was ist die engpasskonzentrierte Strategie?",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Was ist die engpasskonzentrierte Strategie?</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg animate-fade-in delay-100">
              <p className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="w-6 h-6 text-blue-600 mr-2 animate-pulse" />
                Kerngedanke:
              </p>
              <p className="text-lg">Jedes System hat mindestens einen Engpass, der die Gesamtleistung begrenzt. Die konsequente Identifikation und Beseitigung dieser Engpässe führt zu maximaler Leistungssteigerung.</p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-10 animate-pulse"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-blue-200 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl duration-300 animate-slide-up delay-200">
                  <Target className="w-12 h-12 text-blue-500 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Fokussierung</h3>
                  <p>Konzentration auf den kritischen Engpass statt auf viele Probleme gleichzeitig</p>
                </div>
                <div className="bg-white border border-green-200 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl duration-300 animate-slide-up delay-300">
                  <TrendingUp className="w-12 h-12 text-green-500 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Schnelle Ergebnisse</h3>
                  <p>Signifikante Verbesserungen durch gezielte Maßnahmen am Engpass</p>
                </div>
                <div className="bg-white border border-purple-200 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl duration-300 animate-slide-up delay-400">
                  <RefreshCw className="w-12 h-12 text-purple-500 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Kontinuierliche Verbesserung</h3>
                  <p>Systematischer Prozess zur fortlaufenden Optimierung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Die fünf Fokussierungsschritte",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Die fünf Fokussierungsschritte</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-yellow-500 via-purple-500 to-red-500 animate-gradient"></div>
            <div className="space-y-8">
              <div className="flex items-center transform transition hover:scale-105 animate-slide-right">
                <div className="w-1/2 text-right pr-8">
                  <div className="bg-blue-50 rounded-xl p-6 shadow-lg inline-block hover:shadow-xl transition">
                    <h3 className="font-bold text-xl">1. Identifizieren</h3>
                    <p>Den Engpass im System finden</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg animate-pulse-slow">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center transform transition hover:scale-105 animate-slide-left">
                <div className="w-1/2"></div>
                <div className="relative">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg animate-pulse-slow">
                    <Settings className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-green-50 rounded-xl p-6 shadow-lg inline-block hover:shadow-xl transition">
                    <h3 className="font-bold text-xl">2. Ausnutzen</h3>
                    <p>Maximale Nutzung ohne Investitionen</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center transform transition hover:scale-105 animate-slide-right">
                <div className="w-1/2 text-right pr-8">
                  <div className="bg-yellow-50 rounded-xl p-6 shadow-lg inline-block hover:shadow-xl transition">
                    <h3 className="font-bold text-xl">3. Unterordnen</h3>
                    <p>Alle Prozesse dem Engpass anpassen</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg animate-pulse-slow">
                    <Database className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center transform transition hover:scale-105 animate-slide-left">
                <div className="w-1/2"></div>
                <div className="relative">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg animate-pulse-slow">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-purple-50 rounded-xl p-6 shadow-lg inline-block hover:shadow-xl transition">
                    <h3 className="font-bold text-xl">4. Erweitern</h3>
                    <p>Kapazität erhöhen (mit Investitionen)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center transform transition hover:scale-105 animate-slide-right">
                <div className="w-1/2 text-right pr-8">
                  <div className="bg-red-50 rounded-xl p-6 shadow-lg inline-block hover:shadow-xl transition">
                    <h3 className="font-bold text-xl">5. Zurück zu Schritt 1</h3>
                    <p>Neuen Engpass finden & Prozess wiederholen</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg animate-spin-slow">
                    <RefreshCw className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Engpass-Visualisierung",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Wie funktioniert ein Engpass?</h2>
          <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-full max-w-4xl">
                {/* Produktionsfluss Animation */}
                <div className="flex items-center justify-between relative">
                  {/* Station 1 */}
                  <div className="bg-green-100 p-6 rounded-lg text-center transform transition hover:scale-105">
                    <Package className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="font-bold">Station 1</p>
                    <p className="text-sm">100 Einheiten/h</p>
                  </div>
                  
                  {/* Pfeil 1 */}
                  <div className="w-24 h-2 bg-green-400 relative animate-flow">
                    <div className="absolute right-0 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-green-400"></div>
                  </div>
                  
                  {/* Station 2 - ENGPASS */}
                  <div className="bg-red-100 p-8 rounded-lg text-center transform scale-110 shadow-xl border-4 border-red-400 animate-pulse">
                    <Lock className="w-16 h-16 text-red-600 mx-auto mb-2 animate-shake" />
                    <p className="font-bold text-xl text-red-600">ENGPASS</p>
                    <p className="text-lg font-semibold">50 Einheiten/h</p>
                  </div>
                  
                  {/* Pfeil 2 */}
                  <div className="w-24 h-2 bg-red-400 relative animate-flow-slow">
                    <div className="absolute right-0 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-red-400"></div>
                  </div>
                  
                  {/* Station 3 */}
                  <div className="bg-green-100 p-6 rounded-lg text-center transform transition hover:scale-105">
                    <Package className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="font-bold">Station 3</p>
                    <p className="text-sm">80 Einheiten/h</p>
                  </div>
                </div>
                
                {/* Stau vor dem Engpass */}
                <div className="absolute left-[30%] top-1/2 -translate-y-1/2 -translate-x-full animate-bounce">
                  <div className="flex flex-col space-y-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded animate-pulse"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded animate-pulse delay-100"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded animate-pulse delay-200"></div>
                  </div>
                  <p className="text-sm text-yellow-600 font-semibold mt-2">Stau!</p>
                </div>
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto animate-fade-in delay-300">
              <p className="text-xl font-semibold mb-4">
                Der Engpass bestimmt den Durchsatz des gesamten Systems!
              </p>
              <p className="text-gray-700">
                Egal wie schnell die anderen Stationen arbeiten, das Gesamtsystem kann nicht schneller als der Engpass produzieren.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Anwendungsbereiche der TOC",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Anwendungsbereiche der TOC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl animate-fade-in-up delay-100">
              <CircuitBoard className="w-12 h-12 text-blue-600 mb-3 animate-pulse-slow" />
              <h3 className="font-bold text-xl mb-3">Produktion</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-blue-500 mr-2 animate-slide-right" />
                  Durchlaufzeitreduzierung
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-blue-500 mr-2 animate-slide-right delay-100" />
                  Bestandsoptimierung
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-blue-500 mr-2 animate-slide-right delay-200" />
                  Kapazitätsmanagement
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl animate-fade-in-up delay-200">
              <Users className="w-12 h-12 text-green-600 mb-3 animate-pulse-slow" />
              <h3 className="font-bold text-xl mb-3">Projektmanagement</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-green-500 mr-2 animate-slide-right" />
                  Critical Chain Management
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-green-500 mr-2 animate-slide-right delay-100" />
                  Ressourcenplanung
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-green-500 mr-2 animate-slide-right delay-200" />
                  Zeitmanagement
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl animate-fade-in-up delay-300">
              <BarChart className="w-12 h-12 text-purple-600 mb-3 animate-pulse-slow" />
              <h3 className="font-bold text-xl mb-3">Supply Chain</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-purple-500 mr-2 animate-slide-right" />
                  Lieferkettenoptimierung
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-purple-500 mr-2 animate-slide-right delay-100" />
                  Bestandsmanagement
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-purple-500 mr-2 animate-slide-right delay-200" />
                  Distribution
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl animate-fade-in-up delay-400">
              <Lightbulb className="w-12 h-12 text-yellow-600 mb-3 animate-pulse-slow" />
              <h3 className="font-bold text-xl mb-3">Marketing & Vertrieb</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-yellow-500 mr-2 animate-slide-right" />
                  Umsatzsteigerung
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-yellow-500 mr-2 animate-slide-right delay-100" />
                  Kundenbindung
                </li>
                <li className="flex items-center">
                  <ArrowRightCircle className="w-5 h-5 text-yellow-500 mr-2 animate-slide-right delay-200" />
                  Marktpositionierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Denkwerkzeuge der TOC",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Denkwerkzeuge der TOC</h2>
          <div className="space-y-6">
            <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 transform transition hover:scale-105 animate-fade-in-up">
              <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mr-6 animate-pulse-slow">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Konfliktwolke (Evaporating Cloud)</h3>
                <p>Löst Dilemmata und Konflikte durch Aufdecken verborgener Annahmen</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 rounded-xl p-6 transform transition hover:scale-105 animate-fade-in-up delay-100">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 animate-pulse">1</span>
                  Gegenwartsbaum
                </h3>
                <p className="text-sm">Analysiert Ursache-Wirkungs-Beziehungen und identifiziert Kernprobleme</p>
              </div>
              
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 transform transition hover:scale-105 animate-fade-in-up delay-200">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 animate-pulse">2</span>
                  Zukunftsbaum
                </h3>
                <p className="text-sm">Visualisiert die erwarteten Ergebnisse von Veränderungen</p>
              </div>
              
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 transform transition hover:scale-105 animate-fade-in-up delay-300">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 animate-pulse">3</span>
                  Voraussetzungsbaum
                </h3>
                <p className="text-sm">Plant notwendige Zwischenschritte für die Zielerreichung</p>
              </div>
              
              <div className="bg-white border-2 border-red-200 rounded-xl p-6 transform transition hover:scale-105 animate-fade-in-up delay-400">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 animate-pulse">4</span>
                  Übergangsbäume
                </h3>
                <p className="text-sm">Detaillierter Aktionsplan für die Umsetzung</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visueller Umsetzungsfahrplan",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Visueller Umsetzungsfahrplan</h2>
          <div className="relative">
            {/* Zeitstrahl */}
            <div className="absolute left-0 right-0 top-1/2 h-2 bg-gray-200 rounded animate-expand-width"></div>
            
            {/* Phasen */}
            <div className="relative flex justify-between items-center">
              {/* Phase 1 */}
              <div className="bg-blue-100 rounded-xl p-6 w-72 transform -translate-y-20 hover:scale-105 transition shadow-lg animate-fade-in-up delay-100">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 animate-pulse">1</div>
                <h3 className="font-bold text-lg mb-2">Analyse & Vorbereitung</h3>
                <p className="text-sm text-gray-600 mb-2">Wochen 1-6</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />Systemanalyse</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />Engpassidentifikation</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />Strategieentwicklung</li>
                </ul>
              </div>
              
              {/* Phase 2 */}
              <div className="bg-green-100 rounded-xl p-6 w-72 transform translate-y-20 hover:scale-105 transition shadow-lg animate-fade-in-up delay-200">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 animate-pulse">2</div>
                <h3 className="font-bold text-lg mb-2">Implementation</h3>
                <p className="text-sm text-gray-600 mb-2">Wochen 7-16</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Quick Wins</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Prozessanpassung</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Kapazitätserweiterung</li>
                </ul>
              </div>
              
              {/* Phase 3 */}
              <div className="bg-purple-100 rounded-xl p-6 w-72 transform -translate-y-20 hover:scale-105 transition shadow-lg animate-fade-in-up delay-300">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 animate-pulse">3</div>
                <h3 className="font-bold text-lg mb-2">Kontrolle & Optimierung</h3>
                <p className="text-sm text-gray-600 mb-2">Wochen 17-24+</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2" />Monitoring</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2" />Stabilisierung</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-purple-600 mr-2" />Kontinuierliche Verbesserung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Erwartete Ergebnisse - Visualisiert",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Erwartete Ergebnisse</h2>
          <div className="space-y-8">
            {/* Durchsatzsteigerung */}
            <div className="bg-blue-50 rounded-xl p-6 animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4">Durchsatzsteigerung</h3>
              <div className="flex items-center justify-between">
                <div className="w-32 text-center">
                  <p className="text-3xl font-bold text-blue-600">0%</p>
                  <p className="text-sm text-gray-600">Start</p>
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-4 bg-gray-200 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-progress-fill" style={{width: '75%'}}>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg animate-pulse">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-32 text-center">
                  <p className="text-3xl font-bold text-blue-600">30-50%</p>
                  <p className="text-sm text-gray-600">Nach 12 Monaten</p>
                </div>
              </div>
            </div>
            
            {/* Durchlaufzeitreduktion */}
            <div className="bg-green-50 rounded-xl p-6 animate-fade-in-up delay-100">
              <h3 className="text-xl font-bold mb-4">Durchlaufzeitreduktion</h3>
              <div className="flex items-center justify-between">
                <div className="w-32 text-center">
                  <p className="text-3xl font-bold text-green-600">100%</p>
                  <p className="text-sm text-gray-600">Ursprünglich</p>
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-4 bg-gray-200 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-progress-fill-delay" style={{width: '60%'}}>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg animate-pulse">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-32 text-center">
                  <p className="text-3xl font-bold text-green-600">40%</p>
                  <p className="text-sm text-gray-600">Reduziert auf</p>
                </div>
              </div>
            </div>
            
            {/* Bestandsreduktion */}
            <div className="bg-purple-50 rounded-xl p-6 animate-fade-in-up delay-200">
              <h3 className="text-xl font-bold mb-4">Bestandsreduktion</h3>
              <div className="flex items-center justify-between">
                <div className="w-32 text-center">
                  <p className="text-3xl font-bold text-purple-600">100%</p>
                  <p className="text-sm text-gray-600">Ausgangsbestand</p>
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-4 bg-gray-200 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-progress-fill-delay-2" style={{width: '65%'}}>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg animate-pulse">
                        <TrendingDown className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-32 text-center">
                  <p className="text-3xl font-bold text-purple-600">65%</p>
                  <p className="text-sm text-gray-600">Optimiert auf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Top 5 Quellen zum Thema",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Top 5 Quellen zum Thema TOC</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-lg animate-fade-in-up">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 animate-pulse">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">"Das Ziel" von Eliyahu M. Goldratt</h3>
                  <p className="text-gray-700 mb-2">Der Klassiker, der die TOC in Romanform erklärt. Pflichtlektüre für jeden, der die Methode verstehen will.</p>
                  <div className="flex items-center text-blue-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Business-Roman, 1984</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-lg animate-fade-in-up delay-100">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 animate-pulse">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">"Theory of Constraints Handbook" von James F. Cox III & John G. Schleier</h3>
                  <p className="text-gray-700 mb-2">Umfassendes Nachschlagewerk mit praktischen Anwendungsbeispielen und Implementierungsstrategien.</p>
                  <div className="flex items-center text-green-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Fachbuch, 2010</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-lg animate-fade-in-up delay-200">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 animate-pulse">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">"Critical Chain" von Eliyahu M. Goldratt</h3>
                  <p className="text-gray-700 mb-2">Anwendung der TOC auf Projektmanagement. Revolutioniert die Art, wie Projekte geplant und gesteuert werden.</p>
                  <div className="flex items-center text-purple-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Business-Roman, 1997</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-lg animate-fade-in-up delay-300">
              <div className="flex items-start">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 animate-pulse">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">"Viable Vision" von Gerald Kendall</h3>
                  <p className="text-gray-700 mb-2">Zeigt, wie Unternehmen mit TOC ihre Gewinne innerhalb von vier Jahren verdoppeln können.</p>
                  <div className="flex items-center text-yellow-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Fachbuch, 2004</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 transform transition hover:scale-105 hover:shadow-lg animate-fade-in-up delay-400">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 animate-pulse">5</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">"The Choice" von Eliyahu M. Goldratt</h3>
                  <p className="text-gray-700 mb-2">Goldratt's letztes Werk - tiefgreifende Einblicke in die Denkweise hinter der TOC.</p>
                  <div className="flex items-center text-red-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Philosophisches Werk, 2008</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Nächste Schritte",
      content: (
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Nächste Schritte</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Sofortmaßnahmen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg transform transition hover:scale-105 animate-fade-in-up delay-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3 animate-pulse">1</div>
                    <h4 className="font-bold text-lg">Projektteam bilden</h4>
                  </div>
                  <p>Interdisziplinäres Team mit TOC-Expertise zusammenstellen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg transform transition hover:scale-105 animate-fade-in-up delay-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3 animate-pulse">2</div>
                    <h4 className="font-bold text-lg">Kick-off Workshop</h4>
                  </div>
                  <p>Einführung in TOC für alle Beteiligten</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg transform transition hover:scale-105 animate-fade-in-up delay-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3 animate-pulse">3</div>
                    <h4 className="font-bold text-lg">Datensammlung starten</h4>
                  </div>
                  <p>Erfassung aktueller Leistungskennzahlen</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg transform transition hover:scale-105 animate-fade-in-up delay-400">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3 animate-pulse">4</div>
                    <h4 className="font-bold text-lg">Pilotbereich auswählen</h4>
                  </div>
                  <p>Abgrenzung des ersten Implementierungsbereichs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 animate-fade-in-up delay-500">
              <h3 className="text-2xl font-bold mb-6">Bereit für den Start?</h3>
              <p className="text-xl mb-6">Beginnen Sie jetzt mit der Transformation Ihres Unternehmens durch die engpasskonzentrierte Strategie.</p>
              <div className="flex justify-center space-x-6">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 animate-pulse-slow">
                  Beratung anfragen
                </button>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition transform hover:scale-105">
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 min-h-[700px] relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-30 animate-gradient-shift"></div>
        
        {/* Content with transition */}
        <div className={`relative z-10 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {slides[currentSlide].content}
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-6 py-3 rounded-lg transition duration-300 ${
              currentSlide === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Zurück
          </button>
          
          <div className="flex items-center space-x-4">
            {/* Auto-play toggle */}
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`p-2 rounded-full transition ${
                autoPlay ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {autoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            {/* Progress indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 h-3 bg-blue-600 rounded-full' 
                      : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Overview toggle */}
            <button
              onClick={() => setShowOverview(!showOverview)}
              className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-6 py-3 rounded-lg transition duration-300 ${
              currentSlide === slides.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg'
            }`}
          >
            Weiter
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
      
      {/* Slide counter */}
      <div className="mt-4 text-center text-gray-600 animate-fade-in">
        Folie {currentSlide + 1} von {slides.length} • {slides[currentSlide].title}
      </div>
      
      {/* Overview panel */}
      {showOverview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Präsentationsübersicht</h2>
              <button
                onClick={() => setShowOverview(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    setShowOverview(false);
                  }}
                  className={`p-4 rounded-lg border text-left transition ${
                    currentSlide === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-400'
                  }`}
                >
                  <div className="font-bold mb-1">Folie {index + 1}</div>
                  <div className="text-sm text-gray-600">{slide.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-right {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-left {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 75%; }
        }
        
        @keyframes progress-fill-delay {
          0% { width: 0%; }
          25% { width: 0%; }
          100% { width: 60%; }
        }
        
        @keyframes progress-fill-delay-2 {
          0% { width: 0%; }
          50% { width: 0%; }
          100% { width: 65%; }
        }
        
        @keyframes flow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes flow-slow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes expand-width {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 0.5s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 0.5s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-progress-fill {
          animation: progress-fill 2s ease-out forwards;
        }
        
        .animate-progress-fill-delay {
          animation: progress-fill-delay 2s ease-out forwards;
        }
        
        .animate-progress-fill-delay-2 {
          animation: progress-fill-delay-2 2s ease-out forwards;
        }
        
        .animate-flow {
          animation: flow 3s ease-in-out infinite;
        }
        
        .animate-flow-slow {
          animation: flow-slow 4s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        
        .animate-expand-width {
          animation: expand-width 1s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default TOCPresentation;