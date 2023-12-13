import Image from 'next/image';
import classes from './cart-item.module.css';
import { LiaTimesCircleSolid } from 'react-icons/lia';
import { useCartContext } from '@/context/cart-context';

const CartItem = ({ productItem }) => {
  const { amount, price, image, name, id } = productItem;

  const { removeItem } = useCartContext();

  return (
    <li className={classes.cartItem}>
      <div>
        <Image src={image} alt={name} height={'100'} width={'80'} />
      </div>
      <div className={classes.info}>
        <p className={classes.itemName}>{name}</p>
        <p className={classes.itemsAmount}>
          <span>{amount}</span>
          <span>x</span>
          <span>${price}</span>
        </p>

        <div className={classes.removeItem} onClick={() => removeItem(id)}>
          <LiaTimesCircleSolid />
        </div>
      </div>
    </li>
  );
};
export default CartItem;
