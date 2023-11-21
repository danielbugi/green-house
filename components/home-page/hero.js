import Image from 'next/image';
import classes from './hero.module.css';
import Link from 'next/link';
import Button from '../ui/button';

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.background}>
        <Image
          src="/home-page/hero-img.jpg"
          alt="plant-shop"
          height={1000}
          width={1400}
        />
      </div>
      <div className={classes.sectionCenter}>
        <div className={classes.heroContent}>
          <h6>welcome to the greenhouse</h6>
          <h1>
            let's bring the spring to <br /> your home
          </h1>
          <Button
            link={'/'}
            title={'Shop Now'}
            customButtonClass={'btnWhite'}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
