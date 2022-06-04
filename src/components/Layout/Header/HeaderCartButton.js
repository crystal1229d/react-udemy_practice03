import { useEffect, useState, useContext } from 'react'

import CartIcon from '../../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../../store/cart-context'

const HeaderCartButton = props => {
  const [isButtonHighlited, setIsButtonHighlited] = useState(false)

  const cartContext = useContext(CartContext)

  const { items } = cartContext

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount; 
  }, 0)

  const btnClasses = `${classes.button} ${isButtonHighlited ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighlited(true)

    const timer = setTimeout(() => {
      setIsButtonHighlited(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }

  }, [items])
  

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton