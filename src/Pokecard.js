import React from 'react';
import './Pokecard.css'

/** This component lists info about a pokemon*/
function Pokecard({ name, id, type, base_experience }) {
  const IMG_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return(
    <div>
      <h3 className="Pokecard-name">{name}</h3>
      <img src={IMG_SRC} alt='cute pokemon :)'/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;
