import react, { useState } from "react";
import axios from 'axios';
import { getDeckId } from './utils/deck';
import Card from "./Card";
import { getCards } from "./utils/deck"

function GetCard ({ deckId, fetchDeckId, foo }) {
  const [card, setCard] = useState("");

  async function fetchCard() {
    const cardsPromise = await getCards(deckId);
    // const cardImage = cardPromise.cards[0].image;
    const cardImage = cardsPromise.cards
    setCard(cardImage);
    console.log('card', card);
  }
    return (
      <section>
        <p>Get Card</p>
        <button onClick={fetchCard}>Click me for card{foo}</button>
        <Card card={card}/>
      </section>
    )
}

export default GetCard;