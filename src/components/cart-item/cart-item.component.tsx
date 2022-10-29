import {CartType} from "../../contexts/cart.context";
import './cart-item.styles.scss'

interface CartItemProps {
    key: number
    cartItem: CartType
}

export const CartItem = ({key, cartItem}: CartItemProps) => {

    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <div className={'cart-item-container'}>
            <img src={imageUrl} alt={`${name}`} />
            <div className={'item-details'}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span>$ {quantity * price}</span>
            </div>
        </div>
    )
}