import { useState } from 'react';
import axios from 'axios';
import Pokemon from './Components/Pokemon';


function App() {

const [pokemon, setPokemon]=useState([])

const pokemonApi = ()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then((response)=>{
    let data = response.data.results;
    console.log(response.data)
    setPokemon(data);
  })
  .catch(error=> console.log(error))
  
}



  return (
    <div className="App">
      <h2>Poke Api</h2>
      
      <Pokemon pokemon = {pokemon} pokemonApi = {pokemonApi}/>
    </div>
  );
}

export default App;
