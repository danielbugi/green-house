import { useSidebarContext } from '@/context/sidebar-context';
import classes from './cart-button.module.css';
import { FaShoppingBag } from 'react-icons/fa';
import { useCartContext } from '@/context/cart-context';

const CartButton = () => {
  const { toggleCart } = useSidebarContext();
  const { total_items, total_amount } = useCartContext();

  return (
    <button className={classes.cartButton} onClick={toggleCart}>
      <span className={classes.itemsNumber}>{total_items}</span>
      <span>
        {total_amount === 0 ? '$0.00' : `$${total_amount.toFixed(2)}`}
      </span>
      <span>
        <FaShoppingBag />
      </span>
    </button>
  );
};
export default CartButton;
