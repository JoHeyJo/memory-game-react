import React, { useEffect, useState } from 'react';
import GetCard from './GetCard'
import Card from './Card'
import { getDeckId, getCards } from './utils/deck';


/** Table component renders n sets of cards (default 7 sets)
 * 
 * state: 
 * -cards: [ {code, image, images, value, suit},{}...]
 * -deckId: string
 * 
 */
function Table() {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState(null)

  /** return deck id by calling on getDeckId() */
  async function fetchDeckId(){
    const deckId = await getDeckId();
    setDeckId(deckId)
  }

  /** returns array of cards by calling getCards() 
   * render when deckId state is changed
  */
  useEffect(
    async function fetchCard() {
      const cardsPromise = await getCards(deckId);
      setCards(cardsPromise.cards);
    },[deckId])

  return (
    <section>
      <p>Table</p>
    <button onClick={fetchDeckId}>Click me to set table</button>
      <GetCard cards={cards}/>
    </section> 
  )
}

export default Table; 