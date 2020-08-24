import React from 'react';
import './App.css';
import Pokedex from './Pokedex'
import PokemonData from './pokemonData'

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={PokemonData}/>
    </div>
  );
}

export default App;
