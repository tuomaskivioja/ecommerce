import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import React from "react";
import './navigation.styles'

import {

ReactComponent as CrownLogo
} from '../../assets/crown.svg'
import {UserContext} from "../../contexts/user-context.component";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart.dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {LogoContainer, NavigationContainer, NavLinks, NavLink} from "./navigation.styles";


export const Navigation = () => {

    const { currentUser } = useContext(UserContext)

    const {isOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to={'/'}>
                    <CrownLogo className={'logo'} />
                </LogoContainer>
                <NavLinks >
                    <NavLink to={'/shop'}>
                        SHOP
                    </NavLink>
                    { currentUser ? (
                        <span onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <NavLink className={'nav-link'} to={'/sign-in'}>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />

                </NavLinks>
                {isOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
