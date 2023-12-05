import ProductCard from '../ui/product-card';
import classes from './related-products.module.css';

const RelatedProducts = (props) => {
  const { products } = props;
  return (
    <div className={classes.container}>
      <h2>Related Products</h2>

      <div className={classes.wrapper}>
        {products.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;
