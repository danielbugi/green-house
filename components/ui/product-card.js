import Image from 'next/image';
import classes from './product-card.module.css';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { name, category, img, price } = product;
  return (
    <article className={classes.container}>
      <div className={classes.addCartButton}>
        <FaShoppingBag />
      </div>
      <div className={classes.talkBubble}>
        <p>Add to cart</p>
      </div>

      <Link href={'/'}>
        <div className={classes.imgContainer}>
          <Image src={img} alt={name} height={600} width={400} />
        </div>
      </Link>
      <div className={classes.productInfo}>
        <div>stars</div>
        <Link href={'/'}>
          <h2>{name}</h2>
        </Link>
        <span style={{ fontSize: '14px', color: 'grey' }}>{category}</span>
        <span>
          <b>${price}</b>
        </span>
      </div>
    </article>
  );
};
export default ProductCard;
