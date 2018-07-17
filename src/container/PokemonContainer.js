import React from 'react';
import PokemonSelect from '../component/PokemonSelect.js';
import PokemonView from '../component/PokemonView.js';


class PokemonContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
      console.log(pokemon)

      this.setState({pokemon: pokemon.results})
    })
    .catch(err => console(err))
  }

  handlePokemonSelected(index) {
    const selectedPokemon = this.state.pokemon[index];
    console.log(selectedPokemon);
    this.setState({currentPokemon: selectedPokemon})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Container</h1>
        <PokemonSelect pokemon={this.state.pokemon}
          onPokemonSelected={this.handlePokemonSelected} />
          <PokemonView thePokemon={this.state.currentPokemon} />
      </div>
    );
  }


}

export default PokemonContainer;
