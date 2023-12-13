import Loader from '../ui/loader';
import classes from './product-content.module.css';
import ProductSection from './product-section';
import RelatedProducts from '@/components/shop-page/related-products';

const ProductContent = ({ product, relatedProducts }) => {
  if (!product) {
    return (
      <div className={classes.container}>
        <div className={classes.pageCenter}>
          <div className={classes.loading}>
            <Loader />
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.pageCenter}>
        <ProductSection product={product} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};
export default ProductContent;
