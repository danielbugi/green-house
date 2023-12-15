import { useRouter } from 'next/router';
import classes from './shop-grid.module.css';
import Link from 'next/link';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../ui/product-card';

const ShopGrid = ({ products }) => {
  if (!products || products.length < 1) {
    return (
      <section className={classes.container}>
        <div className={classes.sectionCenter}>
          <p>No products to display</p>
        </div>
      </section>
    );
  }

  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 9;
  const numOfItems = products.length;
  const pagesVisited = pageNumber * productsPerPage;

  // const { results, data } = products || {};

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return <ProductCard product={product} key={product.id} />;
    });

  const pageCount = Math.ceil(numOfItems / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({
      top: 0,
    });
  };

  const startIndex = pageNumber * productsPerPage + 1;
  const endIndex = Math.min((pageNumber + 1) * productsPerPage, numOfItems);

  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <div className={classes.sectionHeader}>
          <p>
            <Link href={'/'}>Home </Link>
            {router.route}
          </p>
        </div>
        <div className={classes.gridController}>
          <p>
            Showing {startIndex}-{endIndex} of {numOfItems} result
          </p>
          <select name="sort" id="">
            <option value="default">Default sorting</option>
            <option value="default">Sort by popularity</option>
            <option value="default">Sort by price: High to low</option>
            <option value="default">Sort by price: Low to high</option>
          </select>
        </div>

        <ul className={classes.plantsGrid}>{displayProducts}</ul>
        <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={classes.paginationBtns}
          previousLinkClassName={classes.prevBtn}
          nextLinkClassName={classes.nextBtn}
          disabledClassName={classes.paginationDisabled}
          activeClassName={classes.paginationActive}
        />
      </div>
    </section>
  );
};
export default ShopGrid;
