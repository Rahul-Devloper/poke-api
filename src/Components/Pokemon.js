import { React, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Pokemon.css";
import { useParams } from "react-router-dom";
import Mockdata from "./Mockdata";

const Pokemon = (props) => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(Mockdata[`${pokemonId}`]);

  const generatePokemonJsx = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Container style={{textAlign:'center'}}>
        <h1 style={{textTransform:"Capitalize"}}>
          {`${id}. ${name}`}
          <img src={front_default} alt="" />
        </h1>
        <img src={fullImageUrl} alt="" style={{height:'300px', width:'300px'}} />
        <h3>Pokemon Stats</h3>
        <h4>Species:{species.name}</h4>
        <h4>Height:{height}</h4>
        <h4>Weight:{weight}</h4>
        <h4>Types: {types.slot}
          {types.map((type)=>{
            console.log(type.type.name)
            return <span>{type.type.name}</span>
          })}</h4>
        </Container>
      </>
    );
  };

  return (
    <div style={{textTransform:'capitalize', textAlign:'center'}}>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>{`Welcome to ${pokemon.name} stats page`}</h1>
      {generatePokemonJsx(pokemon)}
    </div>
  );
};

export default Pokemon;
