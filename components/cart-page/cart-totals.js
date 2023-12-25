import Link from 'next/link';
import classes from './cart-totals.module.css';
import { useCartContext } from '@/context/cart-context';

const CartTotals = () => {
  const { total_amount } = useCartContext();

  return (
    <div className={classes.container}>
      <div></div>
      <div className={classes.cartTotals}>
        <div className={classes.header}>
          <h6>Cart Totals</h6>
        </div>
        <div className={classes.body}>
          <div className={classes.totalsRow}>
            <p>Subtotal</p>
            <span>${total_amount.toFixed(2)}</span>
          </div>
          <div className={classes.totalsRow}>
            <p>Total</p>
            <span>${total_amount.toFixed(2)}</span>
          </div>
          <Link href="/shop/checkout" className={classes.link}>
            BUY NOW
          </Link>
          <Link href="/shop" className={classes.link}>
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartTotals;
