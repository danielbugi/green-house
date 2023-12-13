import Image from 'next/image';
import classes from './product-section.module.css';
import { useState } from 'react';
import { useCartContext } from '@/context/cart-context';
import { useSidebarContext } from '@/context/sidebar-context';

const ProductSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();
  const { setCartShown } = useSidebarContext();

  const { category, freeShipping, img, info, name, price, id } = product;

  let amount = Number(quantity);

  // const clickHandle = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className={classes.container}>
      <div className={classes.imagesContainer}>
        <Image src={img} alt={name} height={650} width={450} />
      </div>
      <div className={classes.productContent}>
        <span>
          <a href="/">{category}</a>
        </span>
        <h1>{name}</h1>
        <p className={classes.priceCon}>
          <span className={classes.price}>${price}</span>
          {freeShipping && <span> + Free Shipping</span>}
        </p>
        <p>{info}</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id modi
          vitae ullam qui atque, fugiat repellendus blanditiis iusto possimus
          suscipit.
        </p>

        <div className={classes.productControl}>
          <form action="">
            <input
              value={quantity}
              type="number"
              defaultValue={1}
              min={1}
              step={1}
              inputMode="numeric"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(id, amount, product);
                setCartShown(true);
              }}
            >
              Add To Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProductSection;
