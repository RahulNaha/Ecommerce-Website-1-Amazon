import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';
import Payment from './Payment';

function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    
    <div className='checkout'>
      <div className='checkoutleft'>
        <img className='checkoutad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg " height={300} width={1000}/>
      <h3> Hello,{user.email}</h3>
     
      <div>
        <h2 className='checkouttitle'>Your Shopping Basket</h2>
        {basket.map(item=>(
          <CheckoutProduct
          
          id={item.id}
          title={item.title}
          image={item.image }
          price={item.price}
          rating={item.rating}
          />
        ))}
        
        
      </div>
      </div>
      <div className='checkoutright'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
