import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { useState, useEffect } from "react";

const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const shuffledCards = [...cardValues].sort(() => Math.random() - 0.5);
    const finalCards = shuffledCards.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    
    setCards(finalCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched || flippedCards.length === 2) {
      return;
    }

    setMoves((prevMoves) => prevMoves + 1);

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      }
      return c;
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const firstCard = cards.find((c) => c.id === newFlippedCards[0]);
      const secondCard = card;

      if (firstCard.value === secondCard.value) {
        setScore((prevScore) => prevScore + 1);

        const matchedCards = newCards.map((c) => {
          if (c.id === firstCard.id || c.id === secondCard.id) {
            return { ...c, isMatched: true };
          }
          return c;
        });

        setCards(matchedCards);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            if (c.id === firstCard.id || c.id === secondCard.id) {
              return { ...c, isFlipped: false };
            }
            return c;
          });

          setCards(flippedBackCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="App">
      <GameHeader score={score} moves={moves} onNewGame={initializeGame} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;