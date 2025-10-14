import Card from './Components/Card.jsx';
import './App.css'

import { pokemon } from './pokemon.ts';

function App() {
  return (
    <>
      <div className='container'>
        {pokemon.map((pokemon,index) => (
          <Card key={index} poke={pokemon}/>
        ))}
      </div>
    </>
  )
}

export default App
