import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-Context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
const Cart = (props) => {
  const ctx=useContext(CartContext);
  const totalAmount=`${ctx.totalAmount.toFixed(2)}`;
  const hasItems=ctx.items.length>0;
  
  const cartItemAddHandler=(item)=>{
     ctx.addItem({...item,amount:1}); 
    //ctx.addItem({item}); 

  }
  const cartItemRemoveHandler=(id)=>{ctx.removeItem(id)}
  const cartItems = <ul className={classes['cart-items']}>
    {ctx.items.map(item => (
    <CartItem 
    key={item.id}
    name={item.name} 
    amount={item.amount} 
    price={item.price}
    onRemove={cartItemRemoveHandler.bind(null, item.id)}
    onAdd={cartItemAddHandler.bind(null, item)}
    />
    ))}</ul>;

  return (
    <Modal onClose={props.onClose}>{cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
      {hasItems && <button className={classes.button}>order</button>
      }</div>
    </Modal>
  )
}

export default Cart