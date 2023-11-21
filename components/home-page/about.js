import Image from 'next/image';
import classes from './about.module.css';
import Button from '../ui/button';

const About = () => {
  return (
    <section>
      <div className={classes.sectionCenter}>
        <div className={classes.imgContainer}>
          <Image
            src={'/home-page/our-story.jpg'}
            alt="about"
            height={600}
            width={800}
          />
        </div>
        <div className={classes.ourStory}>
          <div className={classes.content}>
            <h4>OUR STORY</h4>
            <h2>For people who love Plants</h2>
            <p>
              Vivamus quam sociis tristique diam at donec nisl, hendrerit leo
              nunc at velit lacinia porttitor a nulla tellus ultrices varius
              aliquet sed in placerat.
            </p>
            <p>
              Facilisis eu faucibus diam cursus pulvinar consectetur purus sem
              felis, mauris consectetur nisl vitae gravida ultricies sem
              condimentum aliquet ut sed gravida amet vitae euismod pulvinar
              volutpat laoreet pharetra.
            </p>
            <Button
              customButtonClass={'btnGreen'}
              title={'Read More'}
              link={'/'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
