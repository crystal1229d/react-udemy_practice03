import { useContext } from 'react'

import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'

const Cart = props => {
    const cartContext = useContext(CartContext)

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const cartItemAddHandler = (item) => {
        cartContext.addItem(item)
    }

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id)
    }

    const cartItems = (<ul className={classes['cart-items']}>
        {cartContext.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
    </ul>)

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>0</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart