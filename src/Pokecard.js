import React from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard = props => {
  const { id, name, type, base_experience } = props.poke;
  let imgSrc = `${POKE_API}${id}.png`
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-title">{name}</h2>
      <img src={imgSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Exp: {base_experience}</div>
    </div>
  )
}

export default Pokecard;