import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";

const Pokedex = (props) => {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(async () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        let data = response.data.results;
        console.log(data);
        const newPokemonData = {};
        data.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      })
      .catch((error) => console.log(error));
  }, []);
  const getPokemonCard = (pokemonId) => {
    console.log(pokemonData[`${pokemonId}`]);
    const { id, name, sprite } = pokemonData[pokemonId];
    const { history } = props;
    return (
      <Col xs={12} sm={6} md={4} key={pokemonId}>
        <Card
          style={{ width: "18rem", textTransform: "capitalize" }}
          className="m-2"
          onClick={() => history.push(`${pokemonId}`)}
        >
          <Card.Img variant="top" src={sprite} />
          <Card.Body>
            <Card.Title>{`${id}. ${name}`}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
        </Container>
      </Navbar>
      {pokemonData ? (
        <Container>
          <h1>Welcome to PokeDex</h1>
          <Row>
            {Object.keys(pokemonData).map((pokemonId) => {
              return getPokemonCard(pokemonId);
            })}
          </Row>
        </Container>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Pokedex;
