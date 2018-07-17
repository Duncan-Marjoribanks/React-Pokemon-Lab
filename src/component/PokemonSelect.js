import React from 'react';

const PokemonSelect = (props) => {
  console.log(props.pokemon);
   const options = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  })

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onPokemonSelected(selectedIndex);
  }

  return (
    <select id="pokemon-selector" onChange={handleChange}
      defaultValue="default">
      <option disabled="true" value="default">Choose a Pokemon...</option>
      { options }
    </select>
  )

}



export default PokemonSelect;
