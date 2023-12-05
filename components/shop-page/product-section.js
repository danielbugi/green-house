import Image from 'next/image';
import classes from './product-section.module.css';

const ProductSection = (props) => {
  const { category, freeShipping, img, info, name, price } = props.product;
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
          <span className={classes.price}>{price}</span>
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
              type="number"
              defaultValue={1}
              min={1}
              step={1}
              inputMode="numeric"
            />
            <button>Add To Cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProductSection;
