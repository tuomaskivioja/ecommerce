import {CartContext, CartType} from "../contexts/cart.context";
import './checkout-item.styles.scss'
import {useContext} from "react";

interface CheckoutItemProps {
    product: CartType
}

export const CheckoutItem = ({product}: CheckoutItemProps) => {

    const { name, imageUrl, price, quantity } = product;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(product);
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={product.imageUrl} alt={`${product.name}`} />
            </div>
            <span className='name'> {product.name} </span>
            <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{product.quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
            <span className='price'> {product.price * product.quantity}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    )
}