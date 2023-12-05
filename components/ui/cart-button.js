import { useSidebarContext } from '@/context/sidebar-context';
import classes from './cart-button.module.css';
import { FaShoppingBag } from 'react-icons/fa';

const CartButton = () => {
  const { toggleCart } = useSidebarContext();

  return (
    <button className={classes.cartButton} onClick={toggleCart}>
      <span className={classes.itemsNumber}>0</span>
      <span>$0.00</span>
      <span>
        <FaShoppingBag />
      </span>
    </button>
  );
};
export default CartButton;
