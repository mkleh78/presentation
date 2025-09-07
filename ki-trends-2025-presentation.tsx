import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, TrendingUp, Scale, Users, Target, Lightbulb, AlertTriangle, CheckCircle, Zap, Globe, Shield, Eye, Building, Code, Cpu, Network, DollarSign, BookOpen, Lock, Camera, Briefcase, GraduationCap, Clock } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Artificial Intelligence 2025",
      subtitle: "Trends in Technology, Business, Regulation and Society",
      type: "title",
      content: (
        <div className="text-center space-y-12 relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
              <Brain className="w-20 h-20 text-white" />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive analysis of revolutionary developments in Artificial Intelligence
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Business</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Regulation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Society</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Agenda",
      type: "agenda",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What to Expect?</h2>
            <p className="text-lg text-gray-600">A 360° view of the AI revolution in 2025</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">Technology Trends</h3>
                    <p className="text-blue-600 text-sm mt-1">Foundation Models • Edge AI • Multimodal AI</p>
                  </div>
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800">Business Developments</h3>
                    <p className="text-green-600 text-sm mt-1">Startup Boom • Productivity • New Business Models</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-800">Regulatory Framework</h3>
                    <p className="text-purple-600 text-sm mt-1">EU AI Act • Ethical Guidelines • International Standards</p>
                  </div>
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-800">Societal Implications</h3>
                    <p className="text-orange-600 text-sm mt-1">Labor Market • Education • Privacy • Misinformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technological Revolution",
      icon: <Brain className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The AI Technology Landscape 2025</h2>
            <p className="text-lg text-gray-600">Six key trends shaping the future</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Foundation Models</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Large pre-trained models become commoditized. Focus shifts from development to optimal fine-tuning and integration.</p>
                <div className="mt-4 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">GPT-4 • PaLM • LLaMA</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">Multimodal AI</h3>
                <p className="text-gray-700 text-sm leading-relaxed">AI systems process multiple data types simultaneously - text, images, audio, and video in unified models.</p>
                <div className="mt-4 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">Gemini • GPT-4V • Video-AI</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Edge AI</h3>
                <p className="text-gray-700 text-sm leading-relaxed">AI computation moves to end devices with NPUs. Better latency, enhanced privacy, and offline capabilities.</p>
                <div className="mt-4 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">AI-PCs • NPUs • On-Device</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-3">AutoML & No-Code</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Democratization of AI development enables non-experts to create powerful AI solutions.</p>
                <div className="mt-4 text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">70% faster • Drag & Drop</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200 shadow-lg hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-3">Open Source AI</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Community-driven development promotes transparency and innovation. Free models may surpass proprietary ones.</p>
                <div className="mt-4 text-xs text-pink-600 bg-pink-50 px-3 py-1 rounded-full inline-block">BLOOM • Stable Diffusion</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 shadow-lg hover:shadow-xl h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">Green AI</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Sustainable AI development with energy-efficient algorithms and hardware to reduce carbon footprint.</p>
                <div className="mt-4 text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">Neuromorphic Chips • Distillation</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">📊 Market Forecast</h3>
            <p className="text-lg">60% of all new PCs will have integrated AI chips by 2027</p>
            <p className="text-sm opacity-90 mt-2">AI processors already account for 11% of the global semiconductor market in 2024</p>
          </div>
        </div>
      )
    },
    {
      title: "Economic Breakthrough",
      icon: <TrendingUp className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI is Transforming the Business Landscape</h2>
            <p className="text-lg text-gray-600">From startup boom to productivity revolution</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white p-8 rounded-3xl text-center shadow-2xl">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-2">$45B</h3>
                <p className="text-lg opacity-90">Investments in Generative AI 2024</p>
                <p className="text-sm opacity-75 mt-1">Doubled from 2023</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">90%</h3>
                <p className="text-lg opacity-90">of companies use AI</p>
                <p className="text-sm opacity-75 mt-1">But only 8% are productive</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">40%</h3>
                <p className="text-lg opacity-90">faster report creation</p>
                <p className="text-sm opacity-75 mt-1">with AI assistants (MIT study)</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-800 text-lg mb-2">AI-as-a-Service</h4>
              <p className="text-sm text-gray-700 mb-3">Making AI capabilities available through APIs</p>
              <div className="text-xs text-blue-600">
                • OpenAI API<br/>
                • Cloud Services<br/>
                • On-Demand Models
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-green-800 text-lg mb-2">Productivity Tools</h4>
              <p className="text-sm text-gray-700 mb-3">Specialized AI tools for specific tasks</p>
              <div className="text-xs text-green-600">
                • GitHub Copilot<br/>
                • Jasper AI<br/>
                • Notion AI
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-purple-800 text-lg mb-2">Industry Solutions</h4>
              <p className="text-sm text-gray-700 mb-3">AI for specific industries and use cases</p>
              <div className="text-xs text-purple-600">
                • Harvey AI (Legal)<br/>
                • Smart Farming<br/>
                • Fintech-AI
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2" />
              Productivity Gains in Practice
            </h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-yellow-700 mb-2">Office Work</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 40% faster report creation</li>
                  <li>• 18% better result quality</li>
                  <li>• Focus on creative tasks</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-700 mb-2">Customer Service</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 14% higher productivity</li>
                  <li>• +35% for new employees</li>
                  <li>• 70% automated inquiries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EU AI Act: The Regulatory Framework",
      icon: <Scale className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Europe's Leadership in AI Regulation</h2>
            <p className="text-lg text-gray-600">World's first comprehensive AI regulation with global impact</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">🇪🇺 EU AI Act</h3>
              <p className="text-lg opacity-90">In effect since August 1, 2024</p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">⚖️</div>
                <p className="font-semibold">Risk-based Approach</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold">Up to €35M Fine</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📅</div>
                <p className="font-semibold">Phased Implementation until 2027</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">❌</span>
              </div>
              <h4 className="font-bold text-red-800 text-lg mb-2">Unacceptable Risk</h4>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <p className="text-sm text-red-700 mb-3 font-semibold">Completely prohibited</p>
                <ul className="text-xs text-gray-700 space-y-1 text-left">
                  <li>• Biometric mass surveillance</li>
                  <li>• Behavioral manipulation</li>
                  <li>• Social scoring</li>
                  <li>• Emotion recognition (lie detector)</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">⚠️</span>
              </div>
              <h4 className="font-bold text-orange-800 text-lg mb-2">High Risk</h4>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                <p className="text-sm text-orange-700 mb-3 font-semibold">Strict requirements</p>
                <ul className="text-xs text-gray-700 space-y-1 text-left">
                  <li>• Medical diagnostics</li>
                  <li>• HR decisions</li>
                  <li>• Critical infrastructure</li>
                  <li>• Educational assessment</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-yellow-800 text-lg mb-2">Limited Risk</h4>
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <p className="text-sm text-yellow-700 mb-3 font-semibold">Transparency obligations</p>
                <ul className="text-xs text-gray-700 space-y-1 text-left">
                  <li>• Mark chatbots</li>
                  <li>• Label deepfakes</li>
                  <li>• Disclose AI content</li>
                  <li>• Inform users</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h4 className="font-bold text-green-800 text-lg mb-2">Minimal Risk</h4>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="text-sm text-green-700 mb-3 font-semibold">Few requirements</p>
                <ul className="text-xs text-gray-700 space-y-1 text-left">
                  <li>• Spam filters</li>
                  <li>• Video games</li>
                  <li>• Simple recommendations</li>
                  <li>• Standard automation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4 text-lg flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Implementation Timeline
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">Feb 25</span>
                </div>
                <h5 className="font-semibold text-red-700 text-sm">Prohibitions Active</h5>
                <p className="text-xs text-gray-600">Banned AI systems</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">Aug 25</span>
                </div>
                <h5 className="font-semibold text-yellow-700 text-sm">Foundation Models</h5>
                <p className="text-xs text-gray-600">Provider obligations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">2027</span>
                </div>
                <h5 className="font-semibold text-green-700 text-sm">Full Implementation</h5>
                <p className="text-xs text-gray-600">All provisions</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
            <h4 className="font-bold text-red-800 mb-3 flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Substantial Penalties
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-red-600">€35M</p>
                <p className="text-sm text-gray-700">Or 7% of annual revenue</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-red-700 mb-2">Higher than GDPR!</p>
                <p className="text-sm text-gray-600">GDPR: max. 4% revenue</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "International AI Regulation",
      icon: <Globe className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Global Regulatory Landscape</h2>
            <p className="text-lg text-gray-600">Different approaches worldwide - from guidelines to strict laws</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 h-full">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🇺🇸</div>
                <h3 className="text-xl font-bold text-blue-800">USA</h3>
                <p className="text-sm text-blue-600">Flexible Guidelines</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">Executive Order (Oct 2023)</h4>
                  <p className="text-xs text-gray-600">8 principles for trustworthy AI</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">NIST Standards</h4>
                  <p className="text-xs text-gray-600">Voluntary industry standards</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">Self-Commitments</h4>
                  <p className="text-xs text-gray-600">OpenAI, Google, Microsoft</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200 h-full">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🇨🇳</div>
                <h3 className="text-xl font-bold text-red-800">China</h3>
                <p className="text-sm text-red-600">State Control</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">Generative AI Regulations</h4>
                  <p className="text-xs text-gray-600">Registration requirement for providers</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">Content Control</h4>
                  <p className="text-xs text-gray-600">State oversight of outputs</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">Censorship Mechanisms</h4>
                  <p className="text-xs text-gray-600">Built-in filter systems</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 h-full">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🌍</div>
                <h3 className="text-xl font-bold text-green-800">International</h3>
                <p className="text-sm text-green-600">Multilateral Approaches</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">G7 Hiroshima Process</h4>
                  <p className="text-xs text-gray-600">Coordinated AI governance</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">OECD Principles</h4>
                  <p className="text-xs text-gray-600">Ethical guidelines</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">UNESCO Standards</h4>
                  <p className="text-xs text-gray-600">Human rights-based</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">Tension Field of Regulatory Approaches</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Innovation-First (USA)
                </h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Minimal regulation</li>
                  <li>• Trust market dynamics</li>
                  <li>• Voluntary standards</li>
                  <li>• Fast innovation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Safety-First (EU)
                </h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Preventive regulation</li>
                  <li>• Risk management</li>
                  <li>• Clear prohibitions</li>
                  <li>• Build trust</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-3">Outlook: International AI Charter?</h4>
            <p className="text-gray-700 mb-3">
              Discussions about an international AI agreement are ongoing - comparable to climate agreements.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-yellow-700 mb-1">Possible Content:</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Basic safety standards</li>
                  <li>• Common ethical principles</li>
                  <li>• International oversight</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-700 mb-1">Challenges:</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Different legal systems</li>
                  <li>• Technology competition</li>
                  <li>• Enforcement mechanisms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Societal Transformation",
      icon: <Users className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Permeates All Areas of Life</h2>
            <p className="text-lg text-gray-600">Opportunities and challenges for society</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Labor Market</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-red-600 text-sm">📊 300M Full-time Jobs</h4>
                    <p className="text-xs text-gray-600">partially automatable (Goldman Sachs)</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-green-600 text-sm">🎯 Augmentation vs Replacement</h4>
                    <p className="text-xs text-gray-600">Historically more new jobs emerge</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-600 text-sm">📈 Less Experienced Benefit</h4>
                    <p className="text-xs text-gray-600">AI lifts to expert level</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Education</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-green-600 text-sm">👨‍🏫 100,000+ Teachers</h4>
                    <p className="text-xs text-gray-600">using AI assistants (Fobizz)</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-600 text-sm">🎓 1.6M Students</h4>
                    <p className="text-xs text-gray-600">have access to AI tools</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-600 text-sm">🤖 Personalized Learning</h4>
                    <p className="text-xs text-gray-600">Khan Academy Khanmigo tutor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">Privacy</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-red-600 text-sm">⚠️ GDPR Conflicts</h4>
                    <p className="text-xs text-gray-600">Italy temporarily blocked ChatGPT</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-600 text-sm">🔒 Training Data Leakage</h4>
                    <p className="text-xs text-gray-600">Personal data in models</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-green-600 text-sm">🛡️ Privacy-Preserving AI</h4>
                    <p className="text-xs text-gray-600">Differential Privacy, Federated Learning</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800">Misinformation</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-red-600 text-sm">🎭 Deepfakes Rising</h4>
                    <p className="text-xs text-gray-600">Pope in puffer jacket went viral</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-600 text-sm">📰 "Seeing is no longer believing"</h4>
                    <p className="text-xs text-gray-600">Authenticity crisis looming</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-600 text-sm">🔍 Countermeasures</h4>
                    <p className="text-xs text-gray-600">Watermarks, detectors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">⚡ Central Challenge 2025</h3>
            <div className="text-center">
              <p className="text-lg mb-4">
                Finding the balance between <strong>innovation</strong> and <strong>responsible use</strong>
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-xs">AI literacy for all</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Regulation</h4>
                  <p className="text-xs">Clear rules & ethics</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Inclusion</h4>
                  <p className="text-xs">Leave no one behind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Action Recommendations",
      icon: <Target className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Succeeding in the AI Era</h2>
            <p className="text-lg text-gray-600">Concrete steps for companies and individuals</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">For Companies</h3>
                <p className="text-blue-600 text-sm mt-1">Strategic AI Integration</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Develop AI Strategy</h4>
                      <p className="text-xs text-gray-600">Clear value focus, measurable KPIs, pilot projects with business value</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Foster AI Literacy</h4>
                      <p className="text-xs text-gray-600">Employee training, internal AI programs, hire specialists</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Ethics & Compliance</h4>
                      <p className="text-xs text-gray-600">Proactively implement EU AI Act, bias testing, ethical guidelines</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Prioritize Privacy</h4>
                      <p className="text-xs text-gray-600">On-premise solutions, internal AI rules, strengthen cybersecurity</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Human-in-the-Loop</h4>
                      <p className="text-xs text-gray-600">Humans retain control, AI as assistant, transparent communication</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-600 text-white p-4 rounded-xl text-center">
                <h4 className="font-bold text-sm mb-1">💡 Success Factor</h4>
                <p className="text-xs">Competitive advantage through early, responsible AI adoption</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">For Individuals</h3>
                <p className="text-green-600 text-sm mt-1">Personal AI Competence</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Develop AI Competence</h4>
                      <p className="text-xs text-gray-600">Try tools (ChatGPT, Midjourney), understand limits, gain hands-on experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Critical Evaluation</h4>
                      <p className="text-xs text-gray-600">Question AI results, recognize hallucinations, use as drafts</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Mind Your Privacy</h4>
                      <p className="text-xs text-gray-600">Conscious handling of personal data, use privacy settings</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Resilience Against Fakes</h4>
                      <p className="text-xs text-gray-600">Verify sources, know deepfake signs, develop healthy skepticism</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Lifelong Learning</h4>
                      <p className="text-xs text-gray-600">Stay flexible, continuous education, strengthen social & creative skills</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-green-600 text-white p-4 rounded-xl text-center">
                <h4 className="font-bold text-sm mb-1">🎯 Key to Success</h4>
                <p className="text-xs">Use AI as a colleague, not as a replacement for thinking</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white p-8 rounded-3xl text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Call to Action</h3>
            <p className="text-lg mb-6 opacity-90">
              2025 is the pivotal year for AI transformation - time to act!
            </p>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                <h4 className="font-bold mb-2">Start Now</h4>
                <p className="text-xs opacity-80">Begin pilot projects, test tools</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                <h4 className="font-bold mb-2">Take Responsibility</h4>
                <p className="text-xs opacity-80">Consider ethics, minimize risks</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                <h4 className="font-bold mb-2">Shape the Future</h4>
                <p className="text-xs opacity-80">Combine innovation with humanity</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Future is Shapeable",
      icon: <Lightbulb className="w-8 h-8" />,
      type: "content",
      content: (
        <div className="space-y-10">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                <Lightbulb className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">2025: A Turning Point for Humanity</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We stand at the threshold of an AI-driven future. The decisions we make today determine whether AI becomes a blessing or a curse.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl border border-green-200 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                Opportunities of the AI Revolution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Productivity Revolution</h4>
                    <p className="text-sm text-gray-600">Liberation from routine work, more time for creativity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🌟</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Personalized Solutions</h4>
                    <p className="text-sm text-gray-600">Tailored medicine, education, and services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Solving Global Challenges</h4>
                    <p className="text-sm text-gray-600">Combat climate change, diseases, poverty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Economic Growth</h4>
                    <p className="text-sm text-gray-600">New industries, jobs, and prosperity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-100 p-8 rounded-3xl border border-red-200 shadow-xl">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3" />
                Risks Without Governance
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700">Increased Inequality</h4>
                    <p className="text-sm text-gray-600">Digital divide, unemployment in sectors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">👁️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700">Loss of Privacy</h4>
                    <p className="text-sm text-gray-600">Surveillance, data misuse, transparency loss</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🎭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700">Information Decay</h4>
                    <p className="text-sm text-gray-600">Deepfakes, misinformation, loss of trust</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700">Loss of Control</h4>
                    <p className="text-sm text-gray-600">Autonomous systems with fatal decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-10 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">The Choice is Ours</h3>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Through responsible development, smart regulation, and conscious use, we can make AI the greatest tool in human history.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-lg mb-2">Innovation</h4>
                <p className="text-sm opacity-80">Drive forward with responsibility</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-lg mb-2">Collaboration</h4>
                <p className="text-sm opacity-80">Include all stakeholders</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Purpose</h4>
                <p className="text-sm opacity-80">Use AI for the benefit of all</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">🌟 Let's Do This!</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              The AI future is not predetermined - it is shapeable. Each of us can contribute to making 2025 the year when humanity successfully put AI in service of the common good.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">
                ✨ For Companies: Responsible AI Strategy
              </div>
              <div className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold">
                🎓 For Individuals: Develop AI Competence
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {currentSlideData.icon && (
                <div className="text-blue-600 bg-blue-50 p-2 rounded-xl">
                  {currentSlideData.icon}
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{currentSlideData.title}</h1>
                {currentSlideData.subtitle && (
                  <p className="text-sm text-gray-500">{currentSlideData.subtitle}</p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-gray-600">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className={`bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 min-h-[700px] transition-all duration-300 ${isAnimating ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}`}>
          {currentSlideData.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentSlide === 0
                  ? 'text-gray-400 cursor-not-allowed bg-gray-50'
                  : 'text-blue-600 hover:bg-blue-50 bg-blue-50/50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            {/* Slide indicators */}
            <div className="flex space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative transition-all duration-200 ${
                    index === currentSlide ? 'scale-110' : 'hover:scale-105'
                  }`}
                  title={slide.title}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`} />
                  {index === currentSlide && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {slide.title}
                    </div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentSlide === slides.length - 1
                  ? 'text-gray-400 cursor-not-allowed bg-gray-50'
                  : 'text-blue-600 hover:bg-blue-50 bg-blue-50/50'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Presentation;