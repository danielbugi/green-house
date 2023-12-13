import classes from './cart.module.css';
import { LiaTimesSolid } from 'react-icons/lia';
import CartItem from './cart-item';
import Button from '@/components/ui/button';
import { useSidebarContext } from '@/context/sidebar-context';
import { useCartContext } from '@/context/cart-context';

const Cart = () => {
  const { setCartShown, cartShown } = useSidebarContext();
  const { cart, total_amount } = useCartContext();

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

        {cart.length < 1 ? (
          <>
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
          </>
        ) : (
          <>
            <ul className={classes.items}>
              {cart.map((productItem) => {
                return (
                  <CartItem productItem={productItem} key={productItem.id} />
                );
              })}
            </ul>
            <div className={classes.subTotal}>
              <p>Subtotal:</p>
              <p>${total_amount}</p>
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
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
