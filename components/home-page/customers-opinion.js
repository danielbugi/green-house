import classes from './customers-opinion.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

const CustomersOpinion = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <h2>What our Customers Say</h2>
        <div className={classes.reviews}>
          <article>
            <div>
              <FaQuoteLeft />
            </div>
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <span>jennifer lewis</span>
          </article>
          <article>
            <div>
              <FaQuoteLeft />
            </div>
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <span>alicia heart</span>
          </article>
          <article>
            <div>
              <FaQuoteLeft />
            </div>
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <span>juan carlos</span>
          </article>
        </div>
      </div>
    </section>
  );
};
export default CustomersOpinion;
