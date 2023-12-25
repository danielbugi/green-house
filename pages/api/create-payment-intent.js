// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (amount) => {
  return amount * 100;
};

export default async function handler(req, res) {
  let { amount, cart } = req.body;

  // Create a PaymentIntent with the order amount and currency

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
