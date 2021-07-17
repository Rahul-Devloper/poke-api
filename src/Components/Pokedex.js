import React from "react";
import { useState } from "react";
import Mockdata from "./Mockdata";
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
  const [pokemonData, setPokemonData] = useState(Mockdata);
  const getPokemonCard = (pokemonId) => {
    console.log(pokemonData[`${pokemonId}`]);
    const{id,name}= pokemonData[`${pokemonId}`]
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    const {history} = props
    return (
      <Col xs={12} sm={6} md={4} key={pokemonId}>
        <Card style={{ width: "18rem" }} className="m-2" onClick={()=>history.push(`${pokemonId}`)} >
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
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      {pokemonData ? (
        <Container>
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
      <h1>Welcome to PokeDex</h1>
    </>
  );
};

export default Pokedex;
