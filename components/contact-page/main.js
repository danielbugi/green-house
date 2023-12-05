import classes from './main.module.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import ContactForm from './contact-form';
import Link from 'next/link';

const Main = () => {
  return (
    <section className={classes.container}>
      <div className={classes.containerCenter}>
        <div className={classes.content}>
          <h1>Get In Touch</h1>
          <p>
            Sit vulputate faucibus eget eget scelerisque faucibus malesuada
            nullam mollis ut montes, dui scelerisque ornare.
          </p>
          <div className={classes.spans}>
            <div className={classes.spansContainer}>
              <FaLocationDot />
              <div>
                <h6>visit up</h6>
                <p>123 Demo St, San Francisco, CA 45678, United States</p>
              </div>
            </div>
            <div className={classes.spansContainer}>
              <FaPhoneAlt />
              <div>
                <h6>Call Us </h6>
                <p>+1 123-456-7890 </p>
              </div>
            </div>
            <div className={classes.spansContainer}>
              <FaEnvelope />
              <div>
                <h6>Email Us</h6>
                <p>mail@example.com</p>
              </div>
            </div>
          </div>
          <div className={classes.divider}></div>
          <div className={classes.social}>
            <h6>follow us</h6>
            <ul>
              <li>
                <Link href={'/'}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaPinterest />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.formContainer}>
          <h3>Drop us a line or two</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Main;
