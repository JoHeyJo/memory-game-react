import react, { useState } from "react";
import axios from 'axios';
import { getDeckId } from './utils/deck';
import Card from "./Card";
import { getCards } from "./utils/deck"

/** Gets cards
 * 
 * prop:
 * -cards: [ {code, image, images, value, suit},{}...]
 * 
 */
function GetCard ({ cards }) {

    return (
      <section>
        {cards.map((card) => 
        <>
        <Card key={card.code} card={card}/>
        <Card key={card.code} card={card}/>
        </>
    )}
      </section>
    )
}

export default GetCard;