import classes from './cart.module.css';
import { LiaTimesSolid } from 'react-icons/lia';
import CartItem from './cart-item';
import Button from '@/components/ui/button';
import { useSidebarContext } from '@/context/sidebar-context';
import { useCartContext } from '@/context/cart-context';
import Link from 'next/link';
import CartContent from './cart-content';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { setCartShown, cartShown } = useSidebarContext();
  const { cart, total_amount, domLoaded } = useCartContext();

  return (
    <>
      {domLoaded && (
        <>
          <div
            className={`${classes.backgroundCart} ${
              cartShown ? '' : classes.hide
            }`}
            onClick={() => setCartShown(false)}
          ></div>

          <div
            className={`${classes.container} ${cartShown ? '' : classes.hide}`}
          >
            <div className={classes.header}>
              <p>Shopping Cart</p>
              <button onClick={() => setCartShown(false)}>
                <LiaTimesSolid />
              </button>
            </div>

            <CartContent cart={cart} total_amount={total_amount} />
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
