import React from 'react';

const CardSelect = (props) => {
  console.log(props.card);
   const options = props.card.map((card, index) => {
    return <option value={index} key={index}>{card.title}</option>
  })

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onCardSelected(selectedIndex);
  }

  return (
    <select id="Card-selector" onChange={handleChange}
      defaultValue="default">
      <option disabled="true" value="default">Choose a Card...</option>
      { options }
    </select>
  )

}



export default CardSelect;
