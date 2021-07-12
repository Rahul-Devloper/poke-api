import React from 'react'
import './Pokemon.css'

const Pokemon = ({pokemon, pokemonApi}) => {
  return (
    <div className = 'pokemon'>
      <button onClick = {pokemonApi}>Click Here</button>
      {pokemon.map((poke) => (
      <li className = 'list'>{poke.name}</li>
      ))}
    </div>
  )
}

export default Pokemon
