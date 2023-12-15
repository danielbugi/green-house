import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '@/lib/actions';

import Cookies from 'js-cookie';

import reducer from '../reducers/cart_reducer';

const CartContext = createContext();

const getCookieCart = () => {
  let cart = Cookies.get('cart');
  return cart ? JSON.parse(cart) : [];
};

const initialState = {
  cart: getCookieCart(),

  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [domLoaded, setDomLoaded] = useState(false);

  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  // console.log(state);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    setDomLoaded(true);
    // localStorage.setItem('cart', JSON.stringify(state.cart));
    Cookies.set('cart', JSON.stringify(state.cart), { expires: 7 });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, domLoaded }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
