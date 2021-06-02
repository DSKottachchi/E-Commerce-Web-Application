import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import './Header.css';

const Header = () => {

    const counter = useSelector(state => state.counter);

    return (
        <div className="header">
            <div className="header__left">
                <NavLink to="/home">
                    <img className="header__logo" src="https://cdn.corporate.walmart.com/dims4/WMT/c2bbbe9/2147483647/strip/true/crop/2389x930+0+0/resize/1446x563!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fd6%2Fe7%2F48e91bac4a8ca8f22985b3682370%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png"/>
                </NavLink>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search Shop.com" />
                <SearchRoundedIcon className="icon--header" />
            </div>
            <div className="header__right">
                <button className="header__login">
                    <div>My Account</div>
                </button>
                <div className="header__cart">
                    <span className="cart__value">{counter}</span>
                    <NavLink to="/cart">
                        <ShoppingCartIcon className="" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;