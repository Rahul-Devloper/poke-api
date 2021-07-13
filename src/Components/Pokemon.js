import React from 'react'
import axios from 'axios'
import './Pokemon.css'

const Pokemon = ({pokemon, pokemonApi}) => {


  const handlePokemon =(poke)=>{
    console.log(poke)
    axios.get(poke.url)
    .then(response => console.log(response.data.stats[0].stat))
  }

  


  return (
    <div className = 'pokemon'>
      <button onClick = {pokemonApi}>Click to view Details</button>
      {pokemon.map((poke) => (
     <div>
        <li className = 'list'>{poke.name}</li>
        <li className = 'list'>{poke.url}</li>
      <button  onClick = {()=> handlePokemon(poke)}>click</button>
     </div>
      ))}
    </div>
  )
}

export default Pokemon
