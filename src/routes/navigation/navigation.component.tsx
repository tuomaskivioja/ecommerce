import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import React from "react";
import './navigation.styles.scss'

import {

ReactComponent as CrownLogo
} from '../../assets/crown.svg'
import {UserContext} from "../../components/contexts/user-context.component";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart.dropdown.component";
import {CartContext} from "../../components/contexts/cart.context";


export const Navigation = () => {

    const { currentUser } = useContext(UserContext)

    const {isOpen} = useContext(CartContext)

    return (
        <Fragment>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <CrownLogo className={'logo'} />
                </Link>
                <div className={'nav-links-container'}>
                    <Link className={'nav-link'} to={'/shop'}>
                        SHOP
                    </Link>
                    { currentUser ? (
                        <span className={'nav-link'} onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className={'nav-link'} to={'/sign-in'}>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />

                </div>
                {isOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}
