import React from 'react';
const CardView = (props) => {

  if (!props.card) return null;
  return (
    <div>
      <h3>{props.card.title}</h3>
      <img src={`https://netrunnerdb.com/card_image/${props.card.code}.png`}></img>
    </div>
  )
};

export default CardView;
