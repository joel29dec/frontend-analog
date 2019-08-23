import React from 'react';
import './cart.css'



const Cart = ({boardgame, subtractFromCart, addFromCart, removeFromCart}) => {
  return ( 
    <div className='cart-item'>
      <img className='cart-img' src={boardgame.image}/>
      <h3 className='cart-name'>{boardgame.name}</h3>
      <button onClick={()=> subtractFromCart(boardgame.id)}>-</button>
      <p className='cart-qty'>{boardgame.quantity}</p>
      <button onClick={()=> addFromCart(boardgame.id)}>+</button>
      <p className='cart-price'>
        <span>${(boardgame.price * boardgame.quantity).toFixed(2)}</span>
      </p>
      <button id='x' onClick={()=> removeFromCart(boardgame.id)}>X</button>
  </div>
   );
}
 
export default Cart;