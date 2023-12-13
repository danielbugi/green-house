import ShopGrid from '@/components/shop-page/shop-grid';
import { connectDb } from '@/lib/db';

const ShopPage = ({ products }) => {
  return (
    <>
      <ShopGrid products={products} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await connectDb();
  const db = client.db();
  const products = await db
    .collection('products')
    .find()
    .sort({ _id: -1 })
    .toArray();

  client.close();

  return {
    props: {
      products: products.map((product) => ({
        name: product.name,
        id: product._id.toString(),
        category: product.category,
        img: product.img,
        price: product.price,
        info: product.info,
        inStock: product.inStock,
        featured: product.featured,
        freeShipping: product.freeShipping,
      })),
    },
    revalidate: 1000,
  };
};

export default ShopPage;
