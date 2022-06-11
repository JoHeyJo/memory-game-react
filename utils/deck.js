"use strict"
import axios from 'axios';

const DECK_OF_CARDS_API = "https://deckofcardsapi.com/api"

/** pings card api and return id corresponding to a deck */
async function getDeckId(){
  const response = await axios.get(`${DECK_OF_CARDS_API}/deck/new/shuffle/?deck_count=1`);
  const deckId = response.data.deck_id;
  return deckId

}

export { getDeckId }