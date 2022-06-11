import React, { useState } from 'react';
import Card from './Card'
import { getDeckId } from './utils.deck';

function Table() {
  const [cards, setcards] = useState([]);
  // const [deckId, setDeckId] = useState[null];

  // function getCards(card){
  //   setcards(cards => [...cards, card])
  // }

  return (
    <section>
      <p>Table</p>
    {/* <button onSubmit={}>Click me</button> */}
      <Card />
    </section>
  )
}

export default Table;