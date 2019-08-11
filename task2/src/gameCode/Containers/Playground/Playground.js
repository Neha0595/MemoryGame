import React from 'react'
import { Redirect } from 'react-router-dom'
import './Playground.css';
import { Header, Card } from '../../Components';
import GridSize from '../../Config/GridSize';
import ArrayUtility from '../../utils/ArrayUtility';

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 4,
      hitCount: 0,
      stage: 0,
      openCards: [],
      marker: [],
      gridArray: ArrayUtility.shuffle(GridSize[4]),
    };
  }

  updateGridSize = (size) => {
    this.setState({ gridSize: size.value, hitCount: 0, stage: 0, openCards: [], marker: [], gridArray: ArrayUtility.shuffle(GridSize[size.value]) });
  }

  updateOpenCards = (item, index) => () => {
    const { openCards, marker, stage } = this.state;
    let newStage = stage;
    let card = {};
    if (openCards.some(e => e.index == index && e.status === false)) {
      for( var i = 0; i < openCards.length; i++){ 
        if ( openCards[i].index == index) {
          openCards.splice(i, 1); 
        }
     }
    } else if (openCards.some(e => e.index == index)) {
    } else {
      card = {
        index: index,
        item: item,
        status: false,
      };
      for(var i = 0; i < openCards.length; i++) {
        if (openCards[i].item == item && openCards[i].status === false) {
          if (!marker.includes(item)) {
            marker.push(item);
            newStage = newStage + 1;
          }
          openCards[i].status = true;
          card.status = true;
        }
      }
      openCards.push(card);
    }
    this.setState(prevState =>({ openCards, marker, stage: newStage, hitCount: prevState.hitCount + 1 }));
    this.checkItems();
  }

  checkItems = () => {
    const { openCards } = this.state;
    const newArray = [];
    if (openCards.length >= 2) {
      for (var i = 0; i < openCards.length; i++) {
        if (openCards[i].status === false) {
          newArray.push(openCards[i]);
        }
      }
    }
    if (newArray.length == 2) {
      for (var i = 0; i < openCards.length ; i++) {
        if (openCards[i].index == newArray[0].index) {
          openCards.splice(i, 1);
        }
      }
    }
    this.setState({ openCards });
  }

  resetGame = () => {
    this.setState(prevState => ({ hitCount: 0, stage: 0, openCards: [], marker: [], gridArray: ArrayUtility.shuffle(GridSize[prevState.gridSize])  }));
  }

  render() {
    const { gridSize, stage, hitCount, openCards, gridArray } = this.state;
    const GridClass = `Grid${gridSize}`;
    if (stage == gridSize) {
      return <Redirect to={{ pathname: "/endGame", state: { moves: hitCount } }} />
    }
    return (
      <div className="Playground-Container">
        <div className="Header-Container">
          <Header
            gridSize={gridSize}
            updateGridSize={this.updateGridSize}
            stage={stage}
            hitCount={hitCount}
            resetGame={this.resetGame}
          />
        </div>
        <div className="Cards-Container">
          <div className={GridClass} style={{ width: `${gridSize*10 + gridSize-1}vmin`, height: `${gridSize*10 + gridSize -1}vmin` }}>
          {
            gridArray.map((item, index) =>
            <Card 
              item={item}
              index={index}
              gridSize={gridSize}
              openCards={openCards}
              updateOpenCards={this.updateOpenCards(item, index)}
            />
          )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Playground;