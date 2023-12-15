import { useCartContext } from '@/context/cart-context';
import CartTable from './cart-table';
import CartTotals from './cart-totals';
import classes from './cart.module.css';

const Cart = () => {
  const { domLoaded } = useCartContext();

  return (
    <div className={classes.container}>
      <div className={classes.pageCenter}>
        <h4>Cart</h4>
        {domLoaded && (
          <>
            <CartTable />
            <CartTotals />
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
