import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (payload, indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_product, index) => index != indexValue),
    });
  };

  const removeAllCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeToCart,
    removeAllCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
