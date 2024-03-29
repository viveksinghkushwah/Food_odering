import React, { useContext } from 'react'
import CartContext from '../../../Store/Cart-Context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
const ctx=useContext(CartContext);
const price=`$${props.price.toFixed(2)}`;
const onAddToCartHandler=(amount)=>{
ctx.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
});
}
    return (
    <li className={classes.meal}>
       <div> <div><h3>{props.name}</h3></div>
        <div className={classes.discription}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem