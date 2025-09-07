import React, { useState } from 'react';

const Presentation = () => {
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
    setCurrentSlide(index);
  };

  const slides = [
    // Slide 1: Titelbild
    {
      title: "Million Dollar Weekend",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Million Dollar Weekend</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Der überraschend einfache Weg, in 48 Stunden ein 7-stelliges Unternehmen zu starten</h2>
          <div className="text-xl text-gray-600 italic mb-8">Nach Noah Kagan</div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <p className="text-lg text-gray-800">Ein praxisorientierter Leitfaden zur Umsetzung der Kernkonzepte</p>
          </div>
        </div>
      )
    },

    // Slide 2: Agenda/Übersicht
    {
      title: "Agenda",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Übersicht</h2>
          <div className="space-y-4 flex-grow">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold">START IT</h3>
                <p className="text-gray-600">Entdecke deinen Kreator-Mut & überwinde die Angst zu fragen</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold">BUILD IT</h3>
                <p className="text-gray-600">Millionen-Dollar-Ideen finden & validieren in 48 Stunden</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold">GROW IT</h3>
                <p className="text-gray-600">Dein Business skalieren & Geld verdienen im Schlaf</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Ziel: In einem einzigen Wochenende den Grundstein für ein 7-stelliges Business legen</p>
          </div>
        </div>
      )
    },

    // TEIL 1: START IT
    // Slide 3: Einführung in Teil 1
    {
      title: "Teil 1: START IT",
      content: (
        <div className="flex flex-col h-full">
          <div className="bg-blue-500 py-3 px-6 rounded-lg inline-block">
            <h2 className="text-3xl font-bold text-white">TEIL 1: START IT</h2>
          </div>
          <div className="mt-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Entdecke deinen Kreator-Mut wieder</h3>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-4">Die zwei größten Hindernisse beim Unternehmertum:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg"><span className="font-bold">Die Angst zu starten</span> - Wir denken, wir sind nie bereit</li>
              <li className="text-lg"><span className="font-bold">Die Angst zu fragen</span> - Wir fürchten Ablehnung</li>
            </ul>
          </div>
          <div className="italic text-center text-gray-600 text-lg">
            "Es gibt zwei Fehler, die man auf dem Weg zur Wahrheit machen kann... nicht den ganzen Weg zu gehen und nicht zu starten."
          </div>
        </div>
      )
    },

    // Slide 4: Kapitel 1 - Just Fu**ing Start
    {
      title: "Kapitel 1: Just Fu**ing Start",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Kapitel 1: Just Fu**ing Start</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">NOW, Not How</h3>
              <p>Handle JETZT, denke nicht zu viel über das WIE nach.</p>
              <div className="mt-3 p-2 bg-white rounded border border-blue-200">
                <p className="text-sm italic">"Die meisten Menschen: Erst überdenken, später handeln.<br/>Erfolgreiche Unternehmer: Erst handeln, später herausfinden."</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Freedom Number</h3>
              <p>Setze dir ein monatliches Umsatzziel, das dich motiviert.</p>
              <div className="mt-3 p-2 bg-white rounded border border-green-200 flex flex-col">
                <p className="text-sm">Beispiel: Noah's Freedom Number = $3.000/Monat</p>
                <ul className="text-xs pl-4 list-disc">
                  <li>$1.000 Wohnen</li>
                  <li>$1.000 Essen & Reisen</li>
                  <li>$1.000 Sparen</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Die Dollar-Challenge</h3>
            <p>Bitte jemanden um 1 Dollar Investition in dich und dein künftiges Unternehmen als symbolischen Funken.</p>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: NOW, Not How</h3>
            <p>Frage eine Person, die du respektierst, nach einer Geschäftsidee für dich.</p>
            <div className="mt-2 text-sm bg-white p-2 rounded">
              <span className="font-medium">Vorlage:</span> "Hey [Vorname], ich versuche gerade, auf ein paar Geschäftsideen zu kommen. Du kennst mich gut, deshalb wollte ich fragen, welche Art von Geschäft du mir zutraust?"
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Kapitel 2 - The Unlimited Upside of Asking
    {
      title: "Kapitel 2: The Unlimited Upside of Asking",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Kapitel 2: The Unlimited Upside of Asking</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Der Ask-Muskel</h3>
              <p className="mb-3">Entwickle die Fähigkeit, zu fragen und mit Ablehnung umzugehen.</p>
              <div className="bg-white p-2 rounded border border-blue-200">
                <p className="font-medium">Schlüsselprinzip:</p>
                <p className="italic">"Keine Frage? Keine Antwort." (No ASK? No GET.)</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ablehnung als Ziel</h3>
              <p className="mb-3">Setze dir "Rejection Goals" - strebe Ablehnung aktiv an.</p>
              <div className="bg-white p-2 rounded border border-green-200">
                <p className="italic">"Sammle Ablehnungen wie Schätze! Setze dir Ablehnungsziele."</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-purple-50 p-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Sei beharrlich</h3>
              <p className="text-sm">Fast jedes Nein kann irgendwann zu einem Ja werden</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Follow Up!</h3>
              <p className="text-sm">Nach einem anfänglichen Nein verdoppelt sich die Wahrscheinlichkeit eines Ja</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Verkaufen ist Helfen</h3>
              <p className="text-sm">Wenn dein Produkt hilft, ist es deine moralische Pflicht zu verkaufen</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Die Kaffee-Challenge</h3>
            <p className="mb-2">Gehe in ein Café und bitte um 10% Rabatt auf deine Bestellung.</p>
            <div className="bg-white p-2 rounded text-sm">
              <p className="font-medium">Skript:</p>
              <p>DU: "Kann ich 10% Rabatt bekommen?" (Mache die Aussage klar, mit einem Lächeln, und sage danach nichts mehr.)</p>
              <p>BARISTA: "Wofür ist das?"</p>
              <p>DU: "Ich mache einen Business-Kurs und das ist eine der Aufgaben. :)"</p>
            </div>
          </div>
        </div>
      )
    },

    // TEIL 2: BUILD IT
    // Slide 6: Einführung in Teil 2
    {
      title: "Teil 2: BUILD IT",
      content: (
        <div className="flex flex-col h-full">
          <div className="bg-green-500 py-3 px-6 rounded-lg inline-block">
            <h2 className="text-3xl font-bold text-white">TEIL 2: BUILD IT</h2>
          </div>
          <div className="mt-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Starte dein Business mit dem Million Dollar Weekend-Prozess</h3>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-4">Der 3-Schritte-Prozess:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li className="text-lg">
                <span className="font-bold">Finde ein Problem</span>, das Menschen haben und das du lösen kannst
              </li>
              <li className="text-lg">
                <span className="font-bold">Entwickle eine unwiderstehliche Lösung</span>, deren Millionen-Dollar-Plus-Potenzial durch einfache Marktforschung bestätigt wird
              </li>
              <li className="text-lg">
                <span className="font-bold">Gib KEIN GELD aus</span>, um schnell zu validieren, ob deine Idee wirklich funktioniert (oder nicht), indem du sie verkaufst, bevor du sie baust
              </li>
            </ol>
          </div>
          
          <div className="p-4 bg-blue-100 rounded-lg">
            <p className="font-semibold text-center text-gray-800">
              "In diesen nächsten drei Kapiteln - in den nächsten 48 Stunden - wirst du diesen einfachen, aber effektiven Million Dollar Weekend-Prozess umsetzen."
            </p>
          </div>
        </div>
      )
    },

    // Slide 7: Kapitel 3 - Finding Million-Dollar Ideas
    {
      title: "Kapitel 3: Finding Million-Dollar Ideas",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Kapitel 3: Finding Million-Dollar Ideas</h2>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Der "Customer First"-Ansatz</h3>
            <p className="mb-2">Konzentriere dich auf Probleme, die Menschen haben, nicht auf deine Ideen.</p>
            <div className="p-2 bg-white rounded border border-green-200">
              <p className="text-sm italic">"Kunden interessieren sich nicht für deine Ideen; sie interessieren sich dafür, ob du ihre Probleme lösen kannst."</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">4 Methoden zur Ideenfindung:</h3>
              <ol className="list-decimal pl-4 space-y-1 text-sm">
                <li><span className="font-medium">Löse deine eigenen Probleme</span> - Was frustriert dich?</li>
                <li><span className="font-medium">Bestseller sind deine besten Freunde</span> - Was verkauft sich bereits gut?</li>
                <li><span className="font-medium">Marktplätze erkunden</span> - Wo versuchen Menschen, Probleme zu lösen?</li>
                <li><span className="font-medium">Suchmaschinenanfragen</span> - Was suchen Menschen online?</li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Die drei Ws des Business:</h3>
              <ul className="pl-4 space-y-2 text-sm">
                <li><span className="font-medium">Wer:</span> An wen verkaufst du?</li>
                <li><span className="font-medium">Was:</span> Welches Problem löst du?</li>
                <li><span className="font-medium">Wo:</span> Wo findest du diese Personen?</li>
              </ul>
              <div className="mt-3 p-2 bg-white rounded">
                <p className="text-xs italic">Beispiel AppSumo: Reddit-Nutzer (Wer), Imgur Pro günstiger (Was), auf Reddit (Wo)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Top 3 Gruppen & Ideengenerierung</h3>
            <p className="mb-2">1. Identifiziere drei Zielgruppen, zu denen du leichten Zugang hast</p>
            <p className="mb-2">2. Generiere mit den 4 Methoden mindestens 10 Ideen</p>
            <p className="mb-2">3. Wähle deine 3 besten Ideen aus</p>
            <div className="p-2 bg-white rounded text-sm">
              <p className="italic">"Je besser du deine Zielgruppe verstehst, desto besser kannst du ihre Probleme ansprechen."</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Kapitel 4 - The One-Minute Business Model
    {
      title: "Kapitel 4: The One-Minute Business Model",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Kapitel 4: The One-Minute Business Model</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Finde $1 Million wert an Kunden</h3>
              <p className="mb-2">Überprüfe mit einfacher Marktforschung, ob deine Idee Potenzial hat.</p>
              <div className="p-2 bg-white rounded border border-green-200 text-sm">
                <p className="font-medium">Schnellcheck mit zwei Fragen:</p>
                <ol className="list-decimal pl-4">
                  <li>Wächst der Markt oder schrumpft er?</li>
                  <li>Ist dies eine Millionen-Dollar-Chance? (Kunden × Preis = Marktgröße)</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Das Ein-Minuten-Geschäftsmodell</h3>
              <p className="mb-2">Einfache Formel: Einnahmen - Kosten = Gewinn</p>
              <div className="p-2 bg-white rounded border border-blue-200">
                <div className="flex justify-between border-b pb-1 mb-1">
                  <span>Verkaufspreis</span>
                  <span>$50,00</span>
                </div>
                <div className="flex justify-between border-b pb-1 mb-1">
                  <span>Kosten</span>
                  <span>$37,50</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Gewinn pro Einheit</span>
                  <span>$12,50</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Pivot und Evolution</h3>
            <p className="mb-2">Passe dein Geschäftsmodell basierend auf Kundenfeedback an.</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-medium">Preisgestaltung</p>
                <p>Erhöhe/senke Preise</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium">Geschäftsmodell</p>
                <p>Einmalig vs. Abonnement</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium">Zielgruppe</p>
                <p>Einzelpersonen vs. Unternehmen</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Million-Dollar-Opportunity</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">1. Überprüfe deine Marktgröße</p>
                <ul className="list-disc pl-4">
                  <li>Google Trends für Wachstum</li>
                  <li>Facebook Ads für Zielgruppengröße</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">2. Berechne deinen Gewinn</p>
                <ul className="list-disc pl-4">
                  <li>Preis - Kosten = Gewinn pro Einheit</li>
                  <li>$1.000.000 ÷ Gewinn pro Einheit = Verkäufe für 7-stelligen Gewinn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Kapitel 5 - The 48-Hour Money Challenge
    {
      title: "Kapitel 5: The 48-Hour Money Challenge",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Kapitel 5: The 48-Hour Money Challenge</h2>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Die goldene Regel der Validierung</h3>
            <div className="p-3 bg-yellow-200 rounded text-center mb-3">
              <p className="font-bold">Finde drei Kunden in 48 Stunden, die dir Geld für deine Idee geben.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-medium">Zeitlimit</p>
                <p>48 Stunden schaffen Kreativität und Dringlichkeit</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium">3 Kunden</p>
                <p>Der 3. Kunde ist der Beweis für echtes Potenzial</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-medium">Echtes Geld</p>
                <p>Zahlungsversprechen zählen nicht - nur echte Zahlungen</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">1. Direktes Preselling</h3>
              <p className="text-sm mb-3">Kontaktiere potenzielle Kunden direkt und verkaufe, bevor du baust.</p>
              <div className="p-2 bg-white rounded text-xs">
                <p className="font-medium">3-Schritte-Gespräch:</p>
                <ol className="list-decimal pl-4">
                  <li><span className="font-medium">Zuhören:</span> Fragen stellen</li>
                  <li><span className="font-medium">Optionen:</span> Lösungen vorschlagen</li>
                  <li><span className="font-medium">Übergang:</span> Zum Verkauf überleiten</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">2. Marktplätze</h3>
              <p className="text-sm mb-3">Nutze bestehende Plattformen, wo Kunden bereits kaufen wollen.</p>
              <ul className="text-xs list-disc pl-4">
                <li>Facebook Marketplace</li>
                <li>Craigslist</li>
                <li>eBay</li>
                <li>Reddit</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">3. Landing Pages</h3>
              <p className="text-sm mb-3">Erstelle eine einfache Seite mit einem Zahlungslink.</p>
              <ul className="text-xs list-disc pl-4">
                <li>Einfach & schnell aufsetzen</li>
                <li>Fokus auf Verkauf, nicht Design</li>
                <li>Nutze PayPal oder Stripe</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Dream Ten & Validierung</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">1. Erstelle deine Dream Ten-Liste</p>
                <p className="text-xs">Die ersten 10 Menschen, die deine idealen Kunden sein könnten</p>
                <div className="mt-1 p-1 bg-white rounded">
                  <p className="text-xs italic">Deine Zone of Influence nutzen - Freunde, Familie, Kollegen</p>
                </div>
              </div>
              <div>
                <p className="font-medium">2. Erreiche sie direkt</p>
                <p className="text-xs">Text, Anruf, Direktnachricht - je direkter, desto besser</p>
                <div className="mt-1 p-1 bg-white rounded">
                  <p className="text-xs italic">Skript: "Hey, ich starte [Projekt]. Du liebst [Produkt]? Toll! Für $20 kannst du mein erster Kunde sein."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // TEIL 3: GROW IT
    // Slide 10: Einführung in Teil 3
    {
      title: "Teil 3: GROW IT",
      content: (
        <div className="flex flex-col h-full">
          <div className="bg-purple-500 py-3 px-6 rounded-lg inline-block">
            <h2 className="text-3xl font-bold text-white">TEIL 3: GROW IT</h2>
          </div>
          <div className="mt-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Verdiene Geld im Schlaf</h3>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-4">Der Weg zur Skalierung:</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Social Media für Wachstum</h3>
                <p className="text-gray-700">Baue eine Audience auf, die dich ein Leben lang unterstützt</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">E-Mail für Profit</h3>
                <p className="text-gray-700">Wandle deine Audience in zahlende Kunden um</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Die Wachstumsmaschine</h3>
                <p className="text-gray-700">Experimentiere mit Marketing & verdopple was funktioniert</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">52 Chancen im Jahr</h3>
                <p className="text-gray-700">Systeme & Routinen für das Business & Leben deiner Träume</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-100 rounded-lg">
            <p className="font-semibold text-center text-gray-800">
              "Was dich zum ersten $1 bringt, bringt dich auch zu den ersten $1.000. Der Sprung zu $100.000 und dann zu $1 Million erfordert eine Wachstumsmaschine."
            </p>
          </div>
        </div>
      )
    },

    // Slide 11: Kapitel 6 - Social Media Is for Growth
    {
      title: "Kapitel 6: Social Media Is for Growth",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Kapitel 6: Social Media Is for Growth</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Dein einzigartiger Blickwinkel</h3>
              <p className="mb-3">Definiere deine "special sauce" - was dich besonders macht.</p>
              <div className="p-2 bg-white rounded text-sm">
                <ol className="list-decimal pl-4">
                  <li><span className="font-medium">Wer bist du?</span> Definiere deine Identität</li>
                  <li><span className="font-medium">Warum sollte man zuhören?</span> Deine Expertise & Erfahrung</li>
                  <li><span className="font-medium">Was begeistert dich?</span> Deine Leidenschaft</li>
                  <li><span className="font-medium">Was wirst du für andere tun?</span> Dein Nutzenversprechen</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Wähle EINE Plattform</h3>
              <p className="mb-3">Konzentriere dich auf eine Plattform, bevor du expandierst.</p>
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">Drei Faktoren bei der Auswahl:</p>
                <ol className="list-decimal pl-4">
                  <li>Wo ist deine Zielgruppe?</li>
                  <li>Welches Medium magst DU?</li>
                  <li>Wo bekommst du die besten Ergebnisse für deine Arbeit?</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Content-Circle-Framework</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2 bg-white rounded text-sm border border-green-200">
                <p className="font-medium text-center">Core Circle</p>
                <p className="text-xs">Starte mit einer sehr spezifischen Nische</p>
                <p className="text-xs italic">"Medizinstudium-Tipps für britische Studenten"</p>
              </div>
              <div className="p-2 bg-white rounded text-sm border border-green-200">
                <p className="font-medium text-center">Medium Circle</p>
                <p className="text-xs">Erweitere auf verwandte Themen</p>
                <p className="text-xs italic">"Studier- und Produktivitätstipps für alle Studenten"</p>
              </div>
              <div className="p-2 bg-white rounded text-sm border border-green-200">
                <p className="font-medium text-center">Large Circle</p>
                <p className="text-xs">Gehe zum breitesten Publikum</p>
                <p className="text-xs italic">"Produktivität, Technologie und Lebenstipps"</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Sei der Guide, nicht der Guru</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">1. Aktualisiere deine Bio</p>
                <p className="text-xs">Nutze deinen einzigartigen Blickwinkel für dein Profil</p>
                <div className="mt-1 p-1 bg-white rounded">
                  <p className="text-xs italic">Beispiel: "Head Strength Coach bei Philadelphia 76ers. Helfe Menschen, ihre Bestleistung zu erbringen."</p>
                </div>
              </div>
              <div>
                <p className="font-medium">2. Erstelle einen ersten Content-Beitrag</p>
                <p className="text-xs">Dokumentiere, was DU tust, statt anderen zu sagen, was sie tun sollten</p>
                <div className="mt-1 p-1 bg-white rounded">
                  <p className="text-xs italic">Formel = Ergebnis, das du lieferst + Zielmarkt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: Kapitel 7 - Email Is for Profit
    {
      title: "Kapitel 7: Email Is for Profit",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Kapitel 7: Email Is for Profit</h2>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">E-Mail-Liste = Macht</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-2 bg-white rounded text-sm border border-purple-200">
                <p className="font-medium">Warum E-Mail unschlagbar ist:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li>Du besitzt die Verteilung</li>
                  <li>Nicht abhängig von Algorithmen</li>
                  <li>Direkter Kontakt & höhere Konversion</li>
                  <li>89% der Menschen checken es TÄGLICH</li>
                </ul>
              </div>
              <div className="p-2 bg-white rounded text-sm border border-purple-200">
                <p className="font-medium">Leider machen viele den Fehler:</p>
                <p className="text-xs italic">"Ich wünschte, ich hätte früher mit meiner E-Mail-Liste begonnen."</p>
                <p className="text-xs mt-2">Die Größe der Liste ist weniger wichtig als die Qualität der Beziehung - strebe 20% Öffnungsrate an.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Lead Magnets</h3>
              <p className="mb-2">Biete kostenlosen Mehrwert für E-Mail-Anmeldungen.</p>
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">Beispiele:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li>Checkliste zu einem Video-Thema</li>
                  <li>Vorlage für Berechnungen</li>
                  <li>Detaillierter Leitfaden</li>
                  <li>Kostenloses E-Book</li>
                  <li>Stadt- oder Reiseführer</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Landing Page & Wachstum</h3>
              <p className="mb-2">Eine einfache Webseite für E-Mail-Sammlung.</p>
              <div className="grid grid-cols-3 gap-1 text-xs mb-2">
                <div className="p-1 bg-white rounded">
                  <p className="font-medium">0-10 Abonnenten:</p>
                  <p>Deine Dream Ten Kontakte</p>
                </div>
                <div className="p-1 bg-white rounded">
                  <p className="font-medium">11-50 Abonnenten:</p>
                  <p>Email-Signatur & Social Bios</p>
                </div>
                <div className="p-1 bg-white rounded">
                  <p className="font-medium">51-100 Abonnenten:</p>
                  <p>Poste in deinen Communities</p>
                </div>
              </div>
              <p className="text-xs">Tools: SendFox.com, Mailchimp.com, ConvertKit.com</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Autoresponder & Law of 100</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">1. Richte eine 3-E-Mail-Sequenz ein:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li><span className="font-medium">Welcome Email:</span> Willkommensnachricht & Frage</li>
                  <li><span className="font-medium">Connection Email:</span> Aufforderung, sich zu verbinden</li>
                  <li><span className="font-medium">Content Email:</span> Dein bester Inhalt</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">2. Das Gesetz der 100:</p>
                <p className="text-xs">Verpflichte dich zu 100 Aktionen, bevor du aufgibst.</p>
                <div className="mt-1 p-1 bg-white rounded">
                  <p className="text-xs italic">Mache 100 E-Mails, Posts oder andere Aktionen, die dich deinen Zielen näherbringen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Kapitel 8 - The Growth Machine
    {
      title: "Kapitel 8: The Growth Machine",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Kapitel 8: The Growth Machine</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Setze ein einzelnes klares Ziel</h3>
              <p className="mb-2">Fokussiere dich auf EINE Zahl mit Zeitrahmen.</p>
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">Beispiele:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li>100.000 E-Mail-Adressen in 12 Monaten</li>
                  <li>1.000 YouTube-Abonnenten in 3 Monaten</li>
                  <li>$10.000 monatlicher Nettoumsatz bis Jahresende</li>
                </ul>
                <p className="text-xs italic mt-2">"Arbeite rückwärts von deinem Ziel!"</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Wer ist dein Kunde?</h3>
              <p className="mb-2">Definiere deinen idealen Kunden so genau wie möglich.</p>
              <div className="p-2 bg-white rounded text-sm">
                <div className="mb-2">
                  <p className="font-medium">Beispiel Belay Shades:</p>
                  <p className="text-xs">Menschen, die mindestens einmal pro Woche draußen klettern, in Nordamerika/Kanada, gehören zu einem Kletter-Fitnessstudio, kaufen bei Sportartikelgeschäften, lesen Outside-Magazin...</p>
                </div>
                <p className="text-xs italic">Je spezifischer, desto besser!</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Experimentbasiertes Marketing</h3>
            <p className="mb-2">Erstelle eine Liste von Marketing-Experimenten und verfolge die Ergebnisse.</p>
            <div className="bg-white p-2 rounded text-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left">Marketing-Experiment</th>
                    <th className="text-center">Erwartete Verkäufe</th>
                    <th className="text-center">Tatsächliche Verkäufe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td>Freundes-Netzwerk + Empfehlungen</td>
                    <td className="text-center">30</td>
                    <td className="text-center">9</td>
                  </tr>
                  <tr className="border-b">
                    <td>Großhandelsoptionen</td>
                    <td className="text-center">50</td>
                    <td className="text-center">217</td>
                  </tr>
                  <tr className="border-b">
                    <td>eBay Marktplatz</td>
                    <td className="text-center">25</td>
                    <td className="text-center">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CHALLENGE: Goldene Regel des Marketings</h3>
            <div className="bg-yellow-300 p-2 rounded text-center mb-3">
              <p className="font-bold">Verdopple, was funktioniert; eliminiere, was nicht funktioniert.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium">1. Erstelle deine Marketing-Experiment-Liste</p>
                <p className="text-xs">Mindestens 5 verschiedene Strategien mit erwarteten Verkäufen</p>
              </div>
              <div>
                <p className="font-medium">2. Mache deine ersten 100 Kunden glücklicher</p>
                <p className="text-xs">Frage: "Was ist eine Sache, die wir heute tun können, die dich doppelt so glücklich mit uns machen würde?"</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 14: Kapitel 9 - 52 Chances This Year
    {
      title: "Kapitel 9: 52 Chances This Year",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Kapitel 9: 52 Chances This Year</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Träume & Ziele</h3>
              <div className="p-2 bg-white rounded text-sm mb-3">
                <p className="font-medium">Dream Year Checklist:</p>
                <p className="text-xs">Visualisiere dein Traumjahr mit spezifischen Zielen in verschiedenen Lebensbereichen.</p>
              </div>
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">Kategorisiere deine Ziele:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li>Arbeit (z.B. 500.000 YouTube-Abonnenten)</li>
                  <li>Gesundheit (z.B. Quer durch Amerika radeln)</li>
                  <li>Persönlich (z.B. Pilotenschein machen)</li>
                  <li>Reisen (z.B. Mountainbike-Stadt besuchen)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Farbkodierter Kalender</h3>
              <p className="mb-2">Visualisiere deine Zeitallokation mit Farben.</p>
              <div className="p-2 bg-white rounded text-sm">
                <ol className="list-decimal pl-4 text-xs">
                  <li>Kategorisiere alle Aktivitäten</li>
                  <li>Weise Farbcodes zu (z.B. Blau = Arbeit)</li>
                  <li>Plane farblich deine wichtigsten Prioritäten</li>
                  <li>Führe wöchentlich einen Sonntags-Review durch</li>
                </ol>
                <p className="text-xs italic mt-1">"Zeige mir deinen Kalender und ich sage dir, was dir am wichtigsten ist."</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Netzwerk aufbauen</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">1. Accountability Buddy</p>
                <p className="text-xs">Jemand, der ähnliche Ziele hat und dir Feedback gibt</p>
                <p className="text-xs italic">Wöchentlicher Austausch über Ziele</p>
              </div>
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">2. Prefluencers</p>
                <p className="text-xs">Verbinde dich mit ambitionierten Menschen, BEVOR sie bekannt werden</p>
                <p className="text-xs italic">Ohne Erwartungen helfen</p>
              </div>
              <div className="p-2 bg-white rounded text-sm">
                <p className="font-medium">3. VIP-Netzwerk</p>
                <p className="text-xs">Bitte um Empfehlungen nach jedem Treffen</p>
                <p className="text-xs italic">Netzwerke durch gezielte Einführungen aufbauen</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Abschließende Botschaft</h3>
            <div className="p-3 bg-white rounded text-sm">
              <p className="italic">
                "Die erste Million verdient man, indem man Ideen entwickelt und den Mut hat, sie auszuprobieren. Experimentieren, experimentieren, experimentieren. Scheitern, scheitern, scheitern. Bis zum Erfolg. Einfach anfangen. Und dann... wieder anfangen."
              </p>
              <p className="text-right font-medium mt-2">- Noah Kagan</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 15: Umsetzungsleitfaden
    {
      title: "Umsetzungsleitfaden",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Umsetzungsleitfaden: Dein Million Dollar Weekend</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Tag 1: START IT</h3>
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li><span className="font-medium">Erstelle deine Freedom Number</span><br/>Wohn-, Lebens- und Sparkosten zusammenzählen</li>
                <li><span className="font-medium">Dollar Challenge</span><br/>Bitte jemanden um $1 Investition</li>
                <li><span className="font-medium">Kaffee Challenge</span><br/>Frage nach 10% Rabatt</li>
                <li><span className="font-medium">Frage nach einer Geschäftsidee</span><br/>Ein Freund, der dich gut kennt</li>
              </ol>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Tag 2: BUILD IT</h3>
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li><span className="font-medium">10+ Geschäftsideen generieren</span><br/>Eigene Probleme, Bestseller, Marktplätze, Suche</li>
                <li><span className="font-medium">Ein-Minuten-Geschäftsmodell</span><br/>Marktgröße prüfen (Google Trends, Facebook Ads)</li>
                <li><span className="font-medium">Revenue Dials anpassen</span><br/>Preis, Modell, Angebot optimieren</li>
                <li><span className="font-medium">Dream Ten Liste erstellen</span><br/>10 potenzielle Kunden identifizieren</li>
                <li><span className="font-medium">Validierung starten</span><br/>Direktes Preselling beginnen</li>
              </ol>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Tag 3: GROW IT</h3>
              <ol className="list-decimal pl-4 space-y-2 text-sm">
                <li><span className="font-medium">Eine Plattform wählen</span><br/>Bio aktualisieren, Content planen</li>
                <li><span className="font-medium">Landing Page erstellen</span><br/>Lead Magnet entwickeln</li>
                <li><span className="font-medium">Autoresponder einrichten</span><br/>3-E-Mail-Sequenz aufsetzen</li>
                <li><span className="font-medium">Marketing-Experimente planen</span><br/>5+ Strategien mit erwarteten Ergebnissen</li>
                <li><span className="font-medium">Dream Year Checklist</span><br/>Ziele in 4 Kategorien festlegen</li>
                <li><span className="font-medium">Accountability Partner finden</span><br/>Verpflichtung zum Gesetz der 100</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">1-2-3 Erfolgsformel auf einen Blick</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-600">1. Finde ein Problem</h4>
                <p className="text-sm">Ein echtes Problem, das Menschen haben und für dessen Lösung sie bereit sind zu zahlen</p>
              </div>
              <div className="bg-white p-3 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-600">2. Entwickle eine Lösung</h4>
                <p className="text-sm">Überprüfe das Millionen-Dollar-Potenzial mit einfacher Marktforschung</p>
              </div>
              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-600">3. Validiere ohne Ausgaben</h4>
                <p className="text-sm">Gewinne 3 zahlende Kunden in 48 Stunden, bevor du etwas baust</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Denk daran:</h3>
            <p className="text-lg italic">"Es geht nicht darum, die perfekte Idee zu finden. Es geht darum, zu starten und zu fragen."</p>
          </div>
        </div>
      )
    },

    // Slide 16: Ressourcen
    {
      title: "Ressourcen & Links",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Ressourcen & Tools</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Marktforschung & Validierung</h3>
              <ul className="space-y-2 text-sm">
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-2">1</div>
                  <div>
                    <p className="font-medium">Google Trends</p>
                    <p className="text-xs">Überprüfe, ob der Markt wächst oder schrumpft</p>
                  </div>
                </li>
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-2">2</div>
                  <div>
                    <p className="font-medium">Facebook Ads Manager</p>
                    <p className="text-xs">Zielgruppengröße ermitteln</p>
                  </div>
                </li>
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-2">3</div>
                  <div>
                    <p className="font-medium">AnswerThePublic.com</p>
                    <p className="text-xs">Fragen finden, die Menschen online stellen</p>
                  </div>
                </li>
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold mr-2">4</div>
                  <div>
                    <p className="font-medium">PayPal, Stripe, Venmo</p>
                    <p className="text-xs">Einfache Zahlungsabwicklung für Validierung</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Wachstum & E-Mail-Marketing</h3>
              <ul className="space-y-2 text-sm">
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center font-bold mr-2">1</div>
                  <div>
                    <p className="font-medium">SendFox.com / Mailchimp</p>
                    <p className="text-xs">E-Mail-Marketing & Autoresponder</p>
                  </div>
                </li>
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center font-bold mr-2">2</div>
                  <div>
                    <p className="font-medium">Canva</p>
                    <p className="text-xs">Einfache Grafikerstellung für Lead Magnets</p>
                  </div>
                </li>
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center font-bold mr-2">3</div>
                  <div>
                    <p className="font-medium">Bitly / Linktree</p>
                    <p className="text-xs">Link-Tracking für deine Bio-Links</p>
                  </div>
                </li>
                <li className="p-2 bg-white rounded flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center font-bold mr-2">4</div>
                  <div>
                    <p className="font-medium">Google Analytics</p>
                    <p className="text-xs">Website-Traffic-Analyse</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">3 Beispiele erfolgreicher Million Dollar Weekend-Businesses</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-purple-600">Sumo Jerky</h4>
                <p className="text-sm mb-2">Jerky-Abonnement für Büros</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Start: $1.135 Gewinn in 24h</li>
                  <li>Methode: Direktes Preselling bei Bekannten</li>
                  <li>Pivot: Von Einzelverkauf zu Abo-Modell</li>
                  <li>Verkauft für $120.000 nach 2 Jahren</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-purple-600">Belay Shades</h4>
                <p className="text-sm mb-2">Brillen für Kletterer</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Start: Daniel Bliss als Postbote</li>
                  <li>Methode: Validierung bei Kletterfreunden</li>
                  <li>Wachstum: Fokus auf Großhandelsstrategie</li>
                  <li>Ergebnis: $4.000/Monat, später 7-stelliger Umsatz</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-purple-600">Tech Training</h4>
                <p className="text-sm mb-2">In-Home Tech-Support für Senioren</p>
                <ul className="text-xs list-disc pl-4">
                  <li>Start: Daniel Reifenberger, Apple Store Mitarbeiter</li>
                  <li>Methode: Empfehlungen von Kunden</li>
                  <li>Wachstum: Ohne Marketingausgaben</li>
                  <li>Ergebnis: $20.000/Monat durch Service</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Mehr Ressourcen</h3>
            <p className="text-lg">Besuche MillionDollarWeekend.com für alle Templates, Skripte und Videos</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Million Dollar Weekend - Präsentation</h1>
          <div className="text-sm">
            Folie {currentSlide + 1} von {slides.length}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-gray-100 overflow-auto p-4">
          <div className="mb-4 text-lg font-bold">Folien</div>
          <div className="space-y-1">
            {slides.map((slide, index) => (
              <div 
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-2 rounded cursor-pointer text-sm ${currentSlide === index ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              >
                {slide.title}
              </div>
            ))}
          </div>
        </div>
        
        {/* Slide Content */}
        <div className="flex-grow flex flex-col p-8 overflow-auto">
          <div className="flex-grow bg-white rounded-lg shadow-lg p-8">
            {slides[currentSlide].content}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded-lg ${currentSlide === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              Vorherige Folie
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded-lg ${currentSlide === slides.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              Nächste Folie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
