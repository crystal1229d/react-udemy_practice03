import { useContext, useEffect, useState } from 'react'

import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const [btnIsHightlighted, setBtnIsHightlighted] = useState(false)
  const cartContext = useContext(CartContext)
  const { items } = cartContext

  const numberOfCartItems = items.reduce((currentNumber, item) => { 
    return currentNumber + item.amount;
  }, 0) 

  const btnClasses = `${classes.button} ${btnIsHightlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHightlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHightlighted(false)
    }, 300);

    // cleanup func
    return () => {
      clearTimeout(timer)
    }
  
  }, [items])
  

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton