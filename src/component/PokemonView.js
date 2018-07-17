import React from 'react';
const PokemonView = (props) => {

  if (!props.thePokemon) return null;
  return (
    <div>
      <h3>{props.thePokemon.name}</h3>
    </div>
  )
};

export default PokemonView;
