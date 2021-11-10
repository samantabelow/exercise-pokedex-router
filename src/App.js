import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails'
import Links from './Links';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Links />
        </header>
        <h1> Pokedex </h1>
        <Switch>
          <Route exact path="/" render = {() => <Pokedex pokemons={pokemons} />} />
          <Route path="/pokemon/:id" render={(props) => <PokemonDetails pokemons={pokemons} {...props} />}>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;