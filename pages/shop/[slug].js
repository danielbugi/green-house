import ProductContent from '@/components/shop-page/product-content';
import { connectDb } from '@/lib/db';

const SingleProductPage = ({ product, relatedProducts }) => {
  return (
    <>
      <ProductContent product={product} relatedProducts={relatedProducts} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const client = await connectDb();
  const db = client.db();

  const formattedSlug = slug.split('-').join(' ');
  const product = await db
    .collection('products')
    .findOne({ name: formattedSlug });

  const totalDocuments = await db.collection('products').countDocuments();
  const randomIndices = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * totalDocuments)
  );
  const relatedProducts = await Promise.all(
    randomIndices.map(async (index) => {
      return await db.collection('products').findOne({}, { skip: index });
    })
  );

  client.close();

  return {
    props: {
      product: {
        name: product.name,
        id: product._id.toString(),
        category: product.category,
        img: product.img,
        price: product.price,
        info: product.info,
        inStock: product.inStock,
        featured: product.featured,
        freeShipping: product.freeShipping,
      },
      relatedProducts: relatedProducts.map((product) => ({
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
  };
};

export const getStaticPaths = async () => {
  const client = await connectDb();
  const db = client.db();
  const featuredProducts = await db
    .collection('products')
    .find({ featured: true })
    .toArray();

  client.close();

  return {
    fallback: true,
    paths: featuredProducts.map((slug) => ({ params: { slug: slug.name } })),
  };
};

export default SingleProductPage;
