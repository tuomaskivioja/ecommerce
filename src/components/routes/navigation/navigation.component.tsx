import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import React from "react";
import './navigation.styles.scss'

import {

ReactComponent as CrownLogo
} from '../../../assets/crown.svg'


export const Navigation = () => {
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
                    <Link className={'nav-link'} to={'/sign-in'}>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
