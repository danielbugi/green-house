import ShopGrid from '@/components/shop-page/shop-grid';

const ShopPage = (props) => {
  return (
    <>
      <ShopGrid products={props.products} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  return {
    props: { products },
  };
};

export default ShopPage;
