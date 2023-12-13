import ProductCard from '../ui/product-card';
import classes from './related-products.module.css';

const RelatedProducts = ({ products }) => {
  return (
    <div className={classes.container}>
      <h2>Related Products</h2>

      <div className={classes.wrapper}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;
