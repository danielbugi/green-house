import classes from './cart-table.module.css';
import CartItem from './cart-item';
import { useCartContext } from '@/context/cart-context';
import Button from '../ui/button';

const CartTable = () => {
  const { cart } = useCartContext();

  return (
    <div className={classes.table}>
      <div className={classes.head}>
        <p></p>
        <p></p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div className={classes.cartItems}>
        {cart.length < 1 || !cart ? (
          <div className={classes.cartMessage}>
            <p>Your cart is empty</p>
            <Button
              title={'Return to shop'}
              link={'/shop'}
              customButtonClass={'btnGreen'}
            />
          </div>
        ) : (
          cart.map((item) => {
            return <CartItem product={item} key={item.id} />;
          })
        )}
      </div>
    </div>
  );
};
export default CartTable;
