import React, { useState, useCallback, lazy, Suspense } from "react";
import gameImage from "./blackjack/background-blackjack.jpg";
import "./games.css"; // Importuj plik ze stylami

// Użyj React.lazy do leniwego ładowania komponentu gry
const LazyBlackJack = lazy(() => import("./blackjack/blackJack"));

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Dodaj stan dla ładowania obrazka

  // Użyj useCallback do zapamiętania funkcji startGame
  const startGame = useCallback((game) => {
    setSelectedGame(game);
  }, []);

  // Funkcja obsługująca załadowanie obrazka
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Jeśli obrazek nie jest jeszcze załadowany, wyświetl komunikat "Loading..." */}
      {!isImageLoaded && <div>Loading...</div>}
      {/* Użyj Suspense do leniwego ładowania komponentu gry */}
      <Suspense fallback={<div>Loading...</div>}>
        {selectedGame ? (
          <LazyBlackJack />
        ) : (
          <div className="cardd" onClick={() => startGame("blackjack")}>
            {/* Dodaj warunkowy render komunikatu ładowania podczas ładowania obrazka */}
            {!isImageLoaded && <div>Loading...</div>}
            {/* Obrazek gry */}
            <img
              src={gameImage}
              alt="Game Preview"
              className="imagee"
              onLoad={handleImageLoad}
            />
            <div className="descriptionn">
              <div>Black Jack</div>
              <div>Hello Black Jack !</div>
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
};

export default Games;
