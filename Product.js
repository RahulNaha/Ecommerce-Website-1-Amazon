import React from 'react'
import "./Product.css"
import { useStateValue } from './Stateprovider'
function Product({id,title,image,price,rating}) {
  const[{basket},dispatch]=useStateValue();
  console.log("this is vthe basket>>>",basket);
  
  const addtobasket =()=>
    {
          dispatch({
            type:'ADD_TO_BASKET',
            item:{
              id:id,
              title:title,
              image:image,
              price:price,
              rating:rating,
            },
          });
    };
  return (
    <div className="product">
        <div className='productinfo'>
        <p>{title}</p>
      <p className='price'>
        <small>Rs</small>
        <strong>{price}</strong>
      </p>
      <div className='productstar'>
        {Array(rating).fill() .map((_,i)=>
        <p>⭐</p>
        )}
         

      </div>
      </div>
      <img src={image}></img>
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  )
}

export default Product
