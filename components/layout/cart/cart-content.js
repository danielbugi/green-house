import classes from './cart-content.module.css';
import Button from '@/components/ui/button';
import CartItem from './cart-item';
import Link from 'next/link';

const CartContent = ({ cart, total_amount }) => {
  if (cart.length < 1) {
    return (
      <div>
        <div className={classes.noItems}>
          <p>No products in the cart.</p>
        </div>

        <div className={classes.buttonController}>
          <div
            onClick={() => {
              setCartShown(false);
            }}
            style={{ background: 'blue' }}
          >
            <Button
              title={'Continue Shopping'}
              customButtonClass={'btnGreen'}
              link={'/shop'}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ul className={classes.items}>
        {cart.map((productItem) => {
          return <CartItem productItem={productItem} key={productItem.id} />;
        })}
      </ul>

      <div className={classes.subTotal}>
        <p>Subtotal:</p>
        <p>${total_amount.toFixed(2)}</p>
      </div>
      <div className={classes.buttonController}>
        <Link href={'/shop/cart'} onClick={() => setCartShown(false)}>
          View Cart
        </Link>

        <Link href={'/shop/checkout'} onClick={() => setCartShown(false)}>
          Check Out
        </Link>
      </div>
    </>
  );
};
export default CartContent;
