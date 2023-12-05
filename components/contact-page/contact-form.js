import { useState } from 'react';
import classes from './contact-form.module.css';
import Loader from '../ui/loader';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact-message', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (!response.ok) {
    let errorData;
    try {
      // Try to parse the error response as JSON
      errorData = await response.json();
    } catch (jsonError) {
      // If parsing as JSON fails, use a default error message
      errorData = { message: 'Failed to parse error response' };
    }

    throw new Error(JSON.stringify(errorData) || 'Something went wrong');
  }

  const data = await response.json();

  return { response, data };
};

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const [reqStatus, setReqStatus] = useState(null);
  const [validationErr, setValidationErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessageHandle = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
      setLoading(false);
      setReqStatus('success');
    } catch (err) {
      const errors = JSON.parse(err.message);
      if (errors.name === 'ValidationError') {
        setLoading(false);
        setValidationErr(true);
      } else {
        setLoading(false);
        setReqStatus('error');
      }
    }
  };

  return (
    <form
      action=""
      className={classes.container}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={classes.formControl}>
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Full name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          required
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email address"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
          required
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="message">
          Comment or Message <span>*</span>
        </label>
        <textarea
          id="message"
          cols="30"
          rows="4"
          placeholder="Your message"
          value={enteredMessage}
          onChange={(e) => setEnteredMessage(e.target.value)}
          required
        ></textarea>
      </div>

      {reqStatus === null && (
        <>
          <button
            className={classes.btnGreen}
            type="button"
            onClick={sendMessageHandle}
          >
            Submit {loading && <Loader />}{' '}
          </button>
          {validationErr && (
            <p style={{ color: 'red' }}>
              * Please make sure all the fields are filled.
            </p>
          )}
        </>
      )}

      {reqStatus === 'success' && (
        <p style={{ color: 'green' }}>Message was sent successfully!</p>
      )}
      {reqStatus === 'error' && (
        <p style={{ color: 'red' }}>There was to send the message...</p>
      )}
    </form>
  );
};
export default ContactForm;
