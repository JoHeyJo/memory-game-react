import react, { useState }from "react";
import { View, Image } from 'react-native';
import axios from 'axios';
import { getDeckId } from './utils/deck';


function Card({ deck_id }) {
  const [card, setCard] = useState('');

  
  async function getDeck(){
    const deck = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    const cardImage = deck.data.cards[0].image
    setCard(cardImage)
    // console.log('deck',card)
    const deckId = await getDeckId()
    console.log('deck id', deckId)
  }
  return (
    <View>
      <section>

        <p onClick={getDeck}>image</p>
        <Image source={{ uri: card }}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain'
          }} />
      </section>

    </View>
  )
}

export default Card;