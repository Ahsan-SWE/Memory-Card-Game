import { GameHeader } from "./components/GameHeader";


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
  
  return (
  <div className="App"> 
  <GameHeader score={3} moves={10} /> 

<div className="card-grid">
{cardValues.map((card) => (



))}

  </div>
 </div>
  )
}

export default App
