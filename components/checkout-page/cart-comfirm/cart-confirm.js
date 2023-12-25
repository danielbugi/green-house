import Image from 'next/image';

import classes from './cart.module.css';

const CartConfirm = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classes.f_row}>
        <div className={classes.img_container}>
          <Image src={item.image} height={150} width={100} alt={item.name} />
        </div>
        <p>{item.name}</p>
      </div>
      <p>x {item.amount}</p>
      <p>${item.price}</p>
    </div>
  );
};
export default CartConfirm;
