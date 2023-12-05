import Image from 'next/image';
import classes from './cart.module.css';
import { LiaTimesSolid } from 'react-icons/lia';
import CartItem from './cart-item';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { useSidebarContext } from '@/context/sidebar-context';

const Cart = () => {
  const { setCartShown, cartShown } = useSidebarContext();

  return (
    <>
      <div
        className={`${classes.backgroundCart} ${
          !cartShown ? classes.hide : ''
        }`}
        onClick={() => setCartShown(false)}
      ></div>
      <div className={`${classes.container} ${!cartShown ? classes.hide : ''}`}>
        <div className={classes.header}>
          <p>Shopping Cart</p>
          <button onClick={() => setCartShown(false)}>
            <LiaTimesSolid />
          </button>
        </div>
        <ul className={classes.items}>
          <CartItem />
        </ul>
        <div className={classes.subTotal}>
          <p>Subtotal:</p>
          <p>$284.90</p>
        </div>
        <div className={classes.buttonController}>
          <Button
            title={'View Cart'}
            customButtonClass={'btnGreen'}
            link={'/'}
          />
          <Button
            title={'Check Out'}
            customButtonClass={'btnGreen'}
            link={'/'}
          />
        </div>
      </div>
    </>
  );
};
export default Cart;
