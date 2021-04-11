import Vue from 'vue';
import { StripeElementCard } from '@vue-stripe/vue-stripe';

const options = {
  pk: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeAccount: process.env.STRIPE_ACCOUNT,
  apiVersion: process.env.API_VERSION,
  locale: 'pt',
  // See https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  elementsOptions: {
    fonts: [],
    locale: 'pt',
    language: 'pt'
  },
};

export default () => {
  Vue.component('StripeElementCard', StripeElementCard, options);
};
