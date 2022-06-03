import { useContext } from 'react'

import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {
    const cartContext = useContext(CartContext);
    
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const cartItemAddHandler = item => { }
    const cartItemRemoveHandler = id => { }

    const cartItems =
        (<ul className={classes['cart-items']}>
            { cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAddHandler.bind(null, item.id)}  // bind 호출해 null 과 item.id 를 바인드 : 추가되거나 삭제된 항목의 id 가 removeHandler 로 전달된다
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                />
            )) }
        </ul>)
    
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>    
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart