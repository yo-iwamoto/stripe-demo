import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.STRIPE_API_KEY as string;
const customerId = process.env.CUSTOMER_ID as string;

const stripe = new Stripe(apiKey, {
  apiVersion: '2020-08-27',
});

(async () => {
  const res = await stripe.customers.retrieve(customerId);
  console.log(res);
})();
