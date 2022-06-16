import { useState } from 'react';
import initialState from '../initialState';

const useInitialstate = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  return {
    addToCart,
    removeToCart,
    state,
  };
};

export default useInitialstate;
