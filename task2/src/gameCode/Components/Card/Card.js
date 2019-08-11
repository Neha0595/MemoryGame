import React from 'react'
import './Card.css';

class Card extends React.PureComponent {
  render() {
    const {  item, index, gridSize, openCards, updateOpenCards } = this.props;
    let CardClass = "Card-Front";
    let text = '?';
    let color = '#f4817f';
    for(var i = 0; i < openCards.length; i++) {
      if (openCards[i].index == index) {
        CardClass = "Card-Back";
        text = item;
        color = openCards[i].status === true ? 'grey' : 'white';
      }
    }
     return (
      <a
        className={CardClass}
        style={{ 
          width: `${gridSize*10 / gridSize}vmin`, 
          height: `${gridSize*10 / gridSize}vmin`,
          backgroundColor: color,
        }} 
        onClick={updateOpenCards} >
        {text}
      </a>        
    );
  }
}

export default Card;
