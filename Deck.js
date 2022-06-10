import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card'

// import { useEffect } from "react/cjs/react.production.min";

const DECK_OF_CARDS_API = "https://deckofcardsapi.com/api"

function Deck() {
  const [deck_id, setDeck_id] = useState("");

  // const response = await axios.get(`${DECK_OF_CARDS_API}/deck/${DECK_ID}/draw/?count=1`)
  useEffect(function fetchDeck() {
    async function getDeck_id() {
      const response = await axios.get(`${DECK_OF_CARDS_API}/deck/new/shuffle/?deck_count=1`);
      const deck_id = response.data.deck_id;
      setDeck_id(deck_id);
    }
    getDeck_id();
  }, []);
  console.log(deck_id)

  return (
    <section>
      <p>deck id: {deck_id}</p>
    <Card deck_id={deck_id}/>
    </section>
  )
  // }
}

export default Deck; 