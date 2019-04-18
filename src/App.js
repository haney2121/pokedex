import React, { Component } from 'react';

import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png