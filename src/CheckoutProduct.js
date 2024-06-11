import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider';
function CheckoutProduct({id,image,title,price,rating}) {
  const [{ basket }, dispatch] = useStateValue();
  const removefrombasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
    }
  return (
    <div className='checkoutproduct'>
        <img className='checkoutimage' src={image}  height={300}/>
        <div className='checkoutproductinfo'>
          <p className='checkoutproducttitle'>{title}</p>  
          <p className='checkoutproductprice'>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproductrating">
            {Array(rating)
              .fill()
              .map(()=>(
               <p>⭐</p>
              )) }
          </div>
          <button onClick={removefrombasket}>Remove from Basket </button>
        </div>
      
    </div>
  )
}

export default CheckoutProduct
