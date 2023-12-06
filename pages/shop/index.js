import ShopGrid from '@/components/shop-page/shop-grid';

const ShopPage = ({ products }) => {
  return (
    <>
      <ShopGrid products={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const apiUrl = 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/products`);
    const products = await response.json();
    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: null,
      },
    };
  }
};

export default ShopPage;
