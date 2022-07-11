import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineShopping, AiOutlineShoppingCart} from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
    const { showCart, setShowCart, cartItems } = useStateContext();
  
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Jesusito Diosito Shop</Link>
            </p>
<button type='button' >
<AiOutlineShoppingCart />
</button>

            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShoppingCart />
                <span className="cart-item-qty">{cartItems.length}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar
