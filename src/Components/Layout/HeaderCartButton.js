import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../Store/Cart-Context';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  const cxt = useContext(CartContext);
  const [buttonIsHighlighted,setButtonIsHighLighted]=useState(false);
  const {items} = cxt;
  useEffect(()=>{
    if(items.length===0){
      return;
    }
    setButtonIsHighLighted(true);
    const timer=setTimeout(() => {
      setButtonIsHighLighted(false)
    }, 300);
    return()=>{
      clearTimeout(timer);
    }
  },[items])
  const btnClasses=`${classes.button} ${buttonIsHighlighted?classes.bump:''}`
  const numberOfCartItems=items.reduce((currentNumber,item)=>{
    return currentNumber+item.amount;
  },0);
  return (
   <button className={btnClasses} onClick={props.onClick}>
   <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
   
    <span className={classes.badge}>{numberOfCartItems}</span>
   </button>
  )
}

export default HeaderCartButton