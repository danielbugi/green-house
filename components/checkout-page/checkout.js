import { useCartContext } from '@/context/cart-context';
import { FaCheck, FaShieldAlt, FaCreditCard } from 'react-icons/fa';
import { SlSupport } from 'react-icons/sl';

import CheckoutForm from './checkout-form/checkout-form';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import classes from './checkout.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loader from '../ui/loader';

const Checkout = () => {
  const [loading, setLoading] = useState(true);

  const { cart, total_amount } = useCartContext();

  const amount = total_amount.toFixed(2) * 1;

  // console.log(cart);
  const [clientSecret, setClientSecret] = useState('');

  console.log(clientSecret);

  const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

  const createPaymentIntent = async () => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, amount }),
      });
      const data = await response.json();

      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (total_amount == 0) {
      setLoading(true);
    }
    if (amount > 0) {
      createPaymentIntent();
      setLoading(false);
    }

    // Create PaymentIntent as soon as the page loads
  }, [total_amount]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <main className={classes.container}>
      <div className={classes.divider}></div>
      <div className={classes.center}>
        <div className={classes.payment_container}>
          {loading ? (
            <Loader />
          ) : (
            clientSecret && (
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm cart={cart} amount={amount} />
              </Elements>
            )
          )}
        </div>

        <div className={classes.disclaimer}>
          <div className={classes.disc_content}>
            <div className={classes.disc_header}>
              <h4>What you'll get</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam optio ad porro saepe provident exercitationem
                molestias, quasi corrupti, qui non nam doloremque debitis ab.
              </p>
              <ul>
                <li>
                  <FaCheck /> <span>Donec quam tristique donec lectus</span>
                </li>
                <li>
                  <FaCheck /> <span>Consequat nibh elementum</span>
                </li>
                <li>
                  <FaCheck /> <span>Neque pharetra facilisi</span>
                </li>
                <li>
                  <FaCheck /> <span>Sed nunc tellus nulla nunc</span>
                </li>
              </ul>
            </div>

            <div className={classes.testimonials}>
              <h4>Testimonials</h4>
              <div className={classes.testimonial}>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  illum harum rem tenetur nostrum accusamus et, qui sequi
                  facilis repellendus."
                </p>
                <div className={classes.person_container}>
                  <div className={classes.person_img}>
                    <Image src={'/checkout/p1.jpg'} width={150} height={150} />
                  </div>

                  <div className={classes.person_details}>
                    <p>Elad Hamami</p>
                    <p>Tel-Aviv</p>
                  </div>
                </div>
              </div>
              <div className={classes.testimonial}>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  illum harum rem tenetur nostrum accusamus et, qui sequi
                  facilis repellendus."
                </p>
                <div className={classes.person_container}>
                  <div className={classes.person_img}>
                    <Image src={'/checkout/p2.jpg'} width={150} height={150} />
                  </div>
                  <div className={classes.person_details}>
                    <p>Julia Levi</p>
                    <p>Ramat-Gan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.guarantee}>
              <h4>Purchase with confidence</h4>
              <div className={classes.money_back}>
                <div className={classes.img_container}>
                  <Image
                    src={'/checkout/money-back.png'}
                    height={150}
                    width={150}
                  />
                </div>
                <div className={classes.money_back_content}>
                  <h6>100% money back guarantee!</h6>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet.
                  </p>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, vel.
              </p>
              <ul>
                <li>
                  <FaShieldAlt /> SSL secured checkout
                </li>
                <li>
                  <SlSupport /> 24/7 support available
                </li>
                <li>
                  <FaCreditCard /> Payment options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Checkout;
