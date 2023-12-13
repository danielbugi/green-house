import About from '@/components/home-page/about';
import CustomersOpinion from '@/components/home-page/customers-opinion';
import FeaturedPlants from '@/components/home-page/featured-plants';
import GiftCard from '@/components/home-page/gift-card';
import Hero from '@/components/home-page/hero';
import { connectDb } from '@/lib/db';

const HomePage = ({ featured }) => {
  return (
    <main>
      <Hero />
      <FeaturedPlants featured={featured} />
      <About />
      <CustomersOpinion />
      <GiftCard />
    </main>
  );
};

export const getStaticProps = async () => {
  const client = await connectDb();
  const db = client.db();

  const featured = await db
    .collection('products')
    .find({ featured: true })
    .toArray();

  client.close();

  return {
    props: {
      featured: featured.map((item) => ({
        name: item.name,
        id: item._id.toString(),
        category: item.category,
        img: item.img,
        price: item.price,
        info: item.info,
        inStock: item.inStock,
        featured: item.featured,
        freeShipping: item.freeShipping,
      })),
    },
  };
};

export default HomePage;
