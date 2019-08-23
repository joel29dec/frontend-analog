import React from 'react';
import './Boardgame.css'

const BoardgameCard = ({boardgame, addToCart}) => {
  return ( 
    <div className='boardgame_card'>
          <div className='img-container'>
            <img src={boardgame.image}/>
          </div>
          <div className='info-container'>
            <h3>{boardgame.name}</h3>
            <span>${boardgame.price}</span>
            <br/><br/>
            <button onClick={()=> addToCart(boardgame.id)}>Add to Cart</button>
          </div>
        </div>

   );
}
 
export default BoardgameCard;