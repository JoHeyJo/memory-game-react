"use strict"
import axios from 'axios';

const BASE_URL = "https://deckofcardsapi.com/api"

/** pings card api and return id corresponding to a deck */
async function getDeckId(){
  const response = await axios.get(`${BASE_URL}/deck/new/shuffle/?deck_count=1`);
    return response.data.deck_id;
  

}

/** pings card api and returns cards from the same deck using a deck id */
async function getCards(deckId){
  const response = await axios.get(`${BASE_URL}/deck/${deckId}/draw/?count=7`)
  return response.data
}

export { getDeckId, getCards }