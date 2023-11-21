import classes from './our-story.module.css';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const OurStory = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <div>
          <h6>our story</h6>
        </div>
        <div className={classes.content}>
          <div className={classes.contentParagraphs}>
            <p>
              Tristique dapibus porta viverra sit accumsan integer semper dolor
              etiam id iaculis feugiat egestas urna est magna euismod donec
              facilisis sed integer orci ac.
            </p>
            <p>
              Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat
              sit mauris semper platea urna, sapien fermentum venenatis etiam
              enim ullamcorper phasellus tortor justo, et, pellentesque
              pellentesque sapien faucibus in adipiscing risus adipiscing
              bibendum in nec eget tincidunt in in sed magna arcu molestie nec
              mauris quisque.
            </p>
            <p>
              Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae
              in volutpat faucibus elementum, sodales orci mi fames molestie
              venenatis nunc hendrerit.
            </p>
          </div>
          <article>
            <div>
              <FaQuoteLeft />
            </div>
            <p>
              Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
              tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in
              nec ullamcorper vel.
            </p>

            <div className={classes.personContainer}>
              <div className={classes.personImgContainer}>
                <Image
                  src={'/about-page/person/owner.jpg'}
                  alt="EMILY EVERGREEN"
                  height={'50'}
                  width={'50'}
                />
              </div>
              <div className={classes.personInfo}>
                <p>EMILY EVERGREEN</p>
                <span>Founder, Owner</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default OurStory;
