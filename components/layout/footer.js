import Link from 'next/link';
import classes from './footer.module.css';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import Loader from '../ui/loader';

const Footer = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);

  const inputRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = inputRef.current.value;
    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@')
    ) {
      setIsInvalid(true);
      return;
    }
    setLoading(true);
    const email = { email: enteredEmail };
    fetch('http://localhost:3000/api/news-letter', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setLoading(false);
          setEmailSentSuccess(true);
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || 'Something went wrong...');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputClicked = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsInvalid(true);
    }
    return;
  };

  const handleClickInside = () => setIsInputClicked(true);

  useEffect(() => {
    if (isInputClicked) {
      document.addEventListener('mousedown', handleInputClicked);
    }

    return () => document.removeEventListener('mousedown', handleInputClicked);
  }, [isInputClicked]);

  const inputClasses = isInvalid
    ? `${classes.input} ${classes.inputRequired}`
    : `${classes.input}`;

  const spanMessageClasses = isInvalid
    ? `${classes.inputMessage} ${classes.inputRequired}`
    : `${classes.inputMessage}`;

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={classes.container}>
      <div className={classes.containerCenter}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Plants</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className={classes.formContainer}>
          <h5>Subscribe to our newsletter</h5>
          {emailSentSuccess ? (
            <p className={classes.successMessage}>
              Thanks for signing up for the newsletter! We'll be in touch soon.
            </p>
          ) : (
            <form action="" onSubmit={handleSubmit} ref={formRef}>
              <label className={classes.inputControl}>
                <input
                  className={inputClasses}
                  ref={inputRef}
                  onClick={handleClickInside}
                  type="email"
                  placeholder="Your email address..."
                />
                <span className={spanMessageClasses}>
                  Please enter valid email address.*
                </span>
              </label>
              <button type="submit">Subscribe {loading && <Loader />}</button>
            </form>
          )}
        </div>
        <div className={classes.social}>
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaFacebook />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div className={classes.copy}>
        <p>
          &copy; {currentYear} Plant Shop. Powered by Wolf Digital Solutions
        </p>
      </div>
    </footer>
  );
};
export default Footer;
