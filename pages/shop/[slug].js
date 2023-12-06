import ProductContent from '@/components/shop-page/product-content';

const SingleProductPage = ({ product, relatedProducts }) => {
  return (
    <>
      <ProductContent product={product} relatedProducts={relatedProducts} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  const productResponse = await fetch(
    `http://localhost:3000/api/products/${slug}`
  );
  const product = await productResponse.json();
  const relatedResponse = await fetch(
    'http://localhost:3000/api/products/related-products'
  );
  const relatedProducts = await relatedResponse.json();

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};

// export const getStaticPaths = async () => {
//   const response = await fetch('http://localhost:3000/api/products/products');
//   const products = await response.json();
//   const productNames = products.data.map((item) => item.name);
//   const slugs = productNames.map((name) => name.split(' ').join('-'));
//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug } })),
//     fallback: false, // false if our path get all supported parameters value, true for if we got some of them, then it will try generate in server a page for the request.
//   };
// };

export default SingleProductPage;
