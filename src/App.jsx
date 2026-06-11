import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { useState } from "react";
import { useEffect } from "react";
const cardValues = [ 
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
]

function App() {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
  

   
   const finalCards = cardValues.map((value, index) => (

{
  id: index,
  value,
  isFlipped: false,
  isMatched: false
}

    ))
    setCards(finalCards);

  }

useEffect(() => {
  initializeGame();
}, [])


const handleCardClick = (card) => {
  if (card.isFlipped || card.isMatched) {
    return;
  }
const newCards = cards.map((c) => {
if (c.id === card.id) {
  return {...c, isFlipped: true};
}
else {
  return c;
}
});

setCards(newCards);

}



  return (
  <div className="App"> 
  <GameHeader score={3} moves={10} /> 

<div className="cards-grid">
{cards.map((card) => (
<Card card={card} onClick={handleCardClick} />


))}

  </div>
 </div>
  )
}

export default App
