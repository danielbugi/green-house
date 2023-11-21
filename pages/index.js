import About from '@/components/home-page/about';
import CustomersOpinion from '@/components/home-page/customers-opinion';
import FeaturedPlants from '@/components/home-page/featured-plants';
import GiftCard from '@/components/home-page/gift-card';
import Hero from '@/components/home-page/hero';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedPlants />
      <About />
      <CustomersOpinion />
      <GiftCard />
    </main>
  );
};
export default HomePage;
