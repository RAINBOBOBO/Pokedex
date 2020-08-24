import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

/** This component renders a list of Pokecard components */
function Pokedex(props) {
  const { pokemon } = props;
  const pokemonArray = pokemon.map(p => <li className="Pokedex-card"><Pokecard 
    name={p.name}
    id={p.id}
    type={p.type}
    base_experience={p.base_experience}
  /></li>);

  return (
    <ul className="Pokedex-list">
      {pokemonArray}
    </ul>
  )
}

export default Pokedex;
