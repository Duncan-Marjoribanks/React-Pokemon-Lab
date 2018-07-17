import React from 'react';
import CardSelect from '../component/CardSelect.js';
import CardView from '../component/CardView.js';


class CardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: null
    };
    this.handleCardSelected = this.handleCardSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://netrunnerdb.com/api/2.0/public/cards';

    fetch(url)
    .then(response => response.json())
    .then(card => {

      this.setState({cards: card.data})
    })
    .catch(err => console(err))
  }

  handleCardSelected(index) {
    const selectedCard = this.state.cards[index];
    console.log(selectedCard);
    this.setState({currentCard: selectedCard})
  }

  render() {
    return (
      <div>
        <h1>Card Container</h1>
        <CardSelect card={this.state.cards}
          onCardSelected={this.handleCardSelected} />
          <CardView card={this.state.currentCard} />
      </div>
    );
  }


}

export default CardContainer;
