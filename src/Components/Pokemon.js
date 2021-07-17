import { React, useState, useEffect } from "react";
import { Container, Navbar, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pokemon.css";
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data)
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJsx = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Container style={{ textAlign: "center" }}>
          <h1 style={{ textTransform: "Capitalize" }}>
            {`${id}. ${name}`}
            <img src={front_default} alt="" />
          </h1>
          <img
            src={fullImageUrl}
            alt=""
            style={{ height: "300px", width: "300px" }}
          />
          <h3>Pokemon Stats</h3>
          <h4>Species:{species.name}</h4>
          <h4>Height:{height}</h4>
          <h4>Weight:{weight}</h4>
          <h4>
            Types: {types.slot}
            {types.map((type) => {
              console.log(type.type.name);
              return <span>{type.type.name}</span>;
            })}
          </h4>
        </Container>
      </>
    );
  };

  return (
    <div style={{ textTransform: "capitalize", textAlign: "center" }}>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>{`Welcome to stats page`}</h1>
      {pokemon === undefined && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {pokemon !== undefined && pokemon && generatePokemonJsx(pokemon)}
      {pokemon === false && <h1>Not Found</h1>}
      <Button href='/'>Click Here to Go Back </Button>
    </div>
  );
};

export default Pokemon;
