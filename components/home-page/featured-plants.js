import { FeaturedProducts } from '@/lib/data';
import Button from '../ui/button';
import ProductCard from '../ui/product-card';
import classes from './featured-plants.module.css';

const FeaturedPlants = ({ featured }) => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <div className={classes.featuredHeader}>
          <h3>New Plants</h3>
          <Button
            customButtonClass={'btnGreen'}
            title={'Shop Now'}
            link={'/shop'}
          />
        </div>
        <div className={classes.newPlants}>
          {featured.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default FeaturedPlants;
