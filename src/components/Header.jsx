import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const checkNumItemsInCart = () => {
    let itemsInCart = '9+';
    if (cart.length > 0 && cart.length <= 9) {
      itemsInCart = cart.length.toString();
    }
    return itemsInCart;
  };

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" title="Checkout" />
        </Link>
        {cart.length > 0 && (
          <div className="Header-alert">{checkNumItemsInCart()}</div>
        )}
      </div>
    </div>
  );
};

export default Header; //integracion de use context a product  yproducts
