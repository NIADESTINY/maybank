import React from 'react';
import "./Cart.css";

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {
    const totalPrice = cartItems.reduce((price,y) => price + y.quantity * y.price,0);
  return (
    <div className='cart-items'>
     <div className='cart-items-header'> Cart Items</div>

     {
     cartItems.length === 0 && (
        <div className='cart-items-empty'>No Items here</div>
     )
    
     }
     <div>
        {cartItems.map((y)=> (
            <div key={y.id} className="cart-items-list">
                <img className='cart-items-image' src={y.image} alt={y.name}/>
                <div className='cart-items-name'>
             {y.name}
            </div>
            <div className='cart-items-function'>
                <button className='cart-items-add' onClick={()=> handleAddProduct(y)}>+</button>
                <button className='cart-items-remove'onClick={()=> handleRemoveProduct(y)}>-</button>

            </div>
            <div className='cart-items-price'>{y.quantity} * {y.price}</div>
            </div>
        ))}
     </div>
     <div className='cart-items-total-price-name'> Total Price 
     <div className='cart-items-total-price'> ${totalPrice}</div>
     </div>
    </div>
  )
}

export default Cart
