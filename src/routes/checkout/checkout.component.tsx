import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss'

export const CheckOut = () => {

    const {cartItems, totalCartItems, totalCartValue} = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems ? cartItems!.map((item) =>
                    <CheckoutItem product={item} />
                ) : <span>Cart empty</span>}
            </div>
            <div>
                <h1>Cart total: $ {totalCartValue}</h1>
            </div>
        </div>
    )
}