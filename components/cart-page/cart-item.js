import classes from './cart-item.module.css';

import { useCartContext } from '@/context/cart-context';
import Image from 'next/image';
import { LiaTimesCircleSolid } from 'react-icons/lia';
import AmountButtons from './amount-buttons';

const CartItem = ({ product }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const { image, name, price, id, amount } = product;

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  const subtotal = price * amount;

  return (
    <li className={classes.cartItem}>
      <div className={classes.imageCon}>
        <div className={classes.removeItem} onClick={() => removeItem(id)}>
          <LiaTimesCircleSolid />
        </div>
        <div>
          <Image src={image} alt={name} height={'100'} width={'70'} />
        </div>
      </div>

      <p className={classes.itemName}>{name}</p>
      <p>${price}</p>

      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <p>${subtotal.toFixed(2)}</p>
    </li>
  );
};
export default CartItem;
