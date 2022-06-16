import React, { useState } from 'react';
import GetCard from './GetCard'
import { getDeckId } from './utils/deck';

function Table() {
  const [cards, setcards] = useState([]);
  const [deckId, setDeckId] = useState(null)

  async function fetchDeckId(){
    const deckId = await getDeckId();
    setDeckId(deckId)
    console.log('deck id', deckId)
  }

  return (
    <section>
      <p>Table</p>
    <button onClick={fetchDeckId}>Click me for deck id</button>
      <GetCard deckId={deckId} fetchDeckId={fetchDeckId} foo={"whatever"}/>
    </section> 
  )
}

export default Table; 