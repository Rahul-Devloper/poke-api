import React from "react";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Switch>
    <Route 
    exact 
    path="/" 
    render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
);

export default App;