import React, { useState } from 'react';
import Deck from './Deck'

function Table() {
  const [cards, setcards] = useState([]);

  // function getCards(card){
  //   setcards(cards => [...cards, card])
  // }

  return (
    <section>
      <Deck />
      <p>Table</p>
    </section>
  )
}

export default Table;