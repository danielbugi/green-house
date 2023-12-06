import classes from './product-content.module.css';
import ProductSection from './product-section';
import RelatedProducts from '@/components/shop-page/related-products';

const ProductContent = ({ product, relatedProducts }) => {
  return (
    <div className={classes.container}>
      <div className={classes.pageCenter}>
        <ProductSection product={product.product} />
        <RelatedProducts products={relatedProducts.data} />
      </div>
    </div>
  );
};
export default ProductContent;
