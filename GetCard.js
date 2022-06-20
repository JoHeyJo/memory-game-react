import react, { useState } from "react";
import axios from 'axios';
import { getDeckId } from './utils/deck';
import Card from "./Card";
import { getCards } from "./utils/deck"

let cardObj = [{ code: 'QS', 
                image: 'https://deckofcardsapi.com/static/img/QS.png', 
                value: 'QUEEN', 
                suit: 'SPADES' 
              },
              { code: '5S', 
              image: 'https://deckofcardsapi.com/static/img/5S.png', 
              value: '5', 
              suit: 'SPADES'
              }
            ]
function GetCard ({ cards, deckId, fetchDeckId, foo }) {
  // const [cards, setCard] = useState([]);

  // async function fetchCard() {
  //   const cardsPromise = await getCards(deckId);
  //   // const cardImage = cardPromise.cards[0].image;
  //   setCard(cardsPromise.cards);
  //   console.log('in getCard', cards);
  // }
    return (
      <section>
        <p>Get Card</p>
        {/* <button onClick={fetchCard}>Click me for cards{foo}</button> */}
        {cards.map((card) => <Card id={card.code} card={card}/>)}
        {cards.map((card) => <Card id={card.code} card={card}/>)}
      </section>
    )
}

export default GetCard;