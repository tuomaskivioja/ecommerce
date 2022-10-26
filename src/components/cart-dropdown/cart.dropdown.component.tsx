import {useNavigate} from 'react-router-dom';

import './cart-dropdown.styles.scss';
import {Button} from "../Button/button.component";
import {ButtonType} from "../../App";

const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/*{cartItems.map((item) => (*/}
                {/*    <CartItem key={item.id} cartItem={item} />*/}
                {/*))}*/}
            </div>
            <Button buttonText={'GO TO CHECKOUT'} buttonType={ButtonType.DEFAULT} onClick={goToCheckoutHandler}></Button>
        </div>
    );
};

export default CartDropdown;