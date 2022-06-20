import React, { useEffect, useState } from 'react';
import GetCard from './GetCard'
import Card from './Card'
import { getDeckId, getCards } from './utils/deck';

function Table() {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState(null)

  async function fetchDeckId(){
    const deckId = await getDeckId();
    setDeckId(deckId)
    console.log('deck id', deckId)
  }

  useEffect(
    async function fetchCard() {
      const cardsPromise = await getCards(deckId);
      // const cardImage = cardPromise.cards[0].image;
      setCards(cardsPromise.cards);
      console.log('in Table', cards);
    },[deckId])

  return (
    <section>
      <p>Table</p>
    <button onClick={fetchDeckId}>Click me for deck id</button>
      <GetCard cards={cards} foo={"whatever"}/>
      {/* <button>Set cards</button> */}
    </section> 
  )
}

export default Table; 