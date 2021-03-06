import react, { useState }from "react";
import { View, Image } from 'react-native';

/** Card component */
function Card({ card }) {
  return (
    <View>
      <section>
        <Image source={{ uri: card.image }}
        body={card.code}
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