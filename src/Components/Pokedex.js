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

const getPokemonCard = () => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState(Mockdata);

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
            <Col xs={12} sm={4}>
              {getPokemonCard()}
            </Col>
            <Col xs={12} sm={4}>
              {getPokemonCard()}
            </Col>
            <Col xs={12} sm={4}>
              {getPokemonCard()}
            </Col>
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
