import Image from 'next/image';
import classes from './cart-item.module.css';
import { LiaTimesCircleSolid } from 'react-icons/lia';

const CartItem = () => {
  return (
    <li className={classes.cartItem}>
      <div>
        <Image
          src={'/products/featured-img-1.jpg'}
          alt="item"
          height={'70'}
          width={'70'}
        />
      </div>
      <div className={classes.info}>
        <p className={classes.itemName}>item name</p>
        <p className={classes.itemsAmount}>
          <span>1</span>
          <span>x</span>
          <span>$284.90</span>
        </p>

        <div className={classes.removeItem}>
          <LiaTimesCircleSolid />
        </div>
      </div>
    </li>
  );
};
export default CartItem;
