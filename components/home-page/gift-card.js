import Image from 'next/image';
import Button from '../ui/button';
import classes from './gift-card.module.css';

const GiftCard = () => {
  return (
    <section className={classes.container}>
      <div className={classes.background}>
        <Image
          src={'/home-page/gift-card.jpg'}
          alt="gift card"
          height={800}
          width={1200}
        />
      </div>
      <div className={classes.sectionCenter}>
        <h6>gift card</h6>
        <h3>Give the Gift of Greenery</h3>
        <p>
          Pretium tortor risus enim neque quis pellentesque maecenas proin odio
          eget arcu
        </p>
        <Button
          customButtonClass={'btnWhite'}
          title={'Purchase A Gift Card'}
          link={'/'}
        />
      </div>
    </section>
  );
};
export default GiftCard;
