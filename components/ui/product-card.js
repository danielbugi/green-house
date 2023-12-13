import Image from 'next/image';
import classes from './product-card.module.css';
import Link from 'next/link';
import { FaShoppingBag, FaRegStar } from 'react-icons/fa';
import { useCartContext } from '@/context/cart-context';

const ProductCard = ({ product }) => {
  const { name, category, img, price, id } = product;

  const slug = name.split(' ').join('-');
  const linkPath = `/shop/${slug}`;

  const { addToCart } = useCartContext();

  return (
    <article className={classes.container}>
      <div
        className={classes.addCartButton}
        onClick={() => addToCart(id, 1, product)}
      >
        <FaShoppingBag />
      </div>
      <div className={classes.talkBubble}>
        <p>Add to cart</p>
      </div>

      <Link href={linkPath}>
        <div className={classes.imgContainer}>
          <Image src={img} alt={name} height={600} width={400} />
        </div>
      </Link>
      <div className={classes.productInfo}>
        <div>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
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
