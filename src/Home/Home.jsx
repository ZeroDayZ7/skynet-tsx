import React, { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Typed from 'typed.js';


const AiComponent = lazy(() => import('../AI/Ai'));

function Home() {
// Stan ładowania
  const [loading, setLoading] = useState(false); 
// Stan informujący o załadowaniu komponentu Ai
  const [aiComponentLoaded, setAiComponentLoaded] = useState(false);

  useEffect(() => {
    // Inicjowanie Typed.js po zamontowaniu komponentu
    var options = {
      strings: [
        'Witaj w krainie zwaną SKYNET, tajemniczym i niebezpiecznym świecie, gdzie technologia i magia splatają się w nieprzewidywalny sposób.',
        'Od wieków trwały spory i walki o kontrolę nad potężnymi artefaktami, które kryją w sobie niezwykłe moce.',
        'Jesteś świadkiem konfliktu pomiędzy frakcjami, które rywalizują o supremację i dominację nad światem SKYNET.',
        'Potężne korporacje technologiczne wytwarzają coraz nowocześniejsze roboty, które zdolne są do niezwykłych rzeczy, lecz zagrażają ludzkości.',
        'W równoległym wymiarze, tajemnicze gildie magów strzegą starożytnych artefaktów, chroniąc świat przed zagładą.',
      ],
      typeSpeed: 40, // Szybkość pisania tekstu (50ms na znak)
      startDelay: 1000, // Opóźnienie przed rozpoczęciem animacji (1s)
      backSpeed: 7, // Szybkość usuwania tekstu (30ms na znak)
      backDelay: 2500, // Opóźnienie przed rozpoczęciem usuwania tekstu (0.5s)
      loop: true, // Powtarzanie animacji w pętli

      // loopCount: 3, // Liczba powtórzeń animacji (3 razy)
      showCursor: true, // Wyświetlanie kursora
      cursorChar: '|', // Znak kursora
      cursorSpeed: 100, // Szybkość migania kursora (100ms)
      contentType: 'html', // Typ zawartości (HTML)
    };

    var typed = new Typed('.element', options);

    // Zwolnienie Typed.js po odmontowaniu komponentu
    return () => {
      typed.destroy();
    };
  }, []);

// Obsługa kliknięcia przycisku "Go to AI"
  const handleGoToAI = () => {
    setLoading(true); // Ustawienie stanu ładowania na true po kliknięciu przycisku
  };

  const LazyAiComponent = useMemo(() => {
    return (
      <Suspense fallback={<div>Loading AiComponent...</div>}>
        <AiComponent />
      </Suspense>
    );
  }, []);

  return (
    <div className="bcg">
      <div className="dos-component">
        <div className="element"></div>
      </div>
      {loading && <div>Loading...</div>} 
      {aiComponentLoaded && LazyAiComponent}
    </div>
  );
}

export default Home;
