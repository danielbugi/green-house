import classes from './contact.module.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className={classes.container}>
      <div className={classes.containerCenter}>
        <div className={classes.content}>
          <h1>Get In Touch</h1>
          <p>
            Sit vulputate faucibus eget eget scelerisque faucibus malesuada
            nullam mollis ut montes, dui scelerisque ornare.
          </p>
          <div>
            <div>
              <FaLocationDot />
              <div>
                <h6>visit up</h6>
                <p>FaLocationDot</p>
              </div>
            </div>
            <div>
              <FaPhoneAlt />
              <div>
                <h6>visit up</h6>
                <p>FaLocationDot</p>
              </div>
            </div>
            <div>
              <FaEnvelope />
              <div>
                <h6>visit up</h6>
                <p>FaLocationDot</p>
              </div>
            </div>
          </div>
          <div className={classes.social}>
            <h6>follow us</h6>
            <ul>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
