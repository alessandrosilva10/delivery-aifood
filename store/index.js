import Vuex from 'vuex'
import * as products from './products';
import * as cart from './cart';

export const store = new Vuex.Store({
  modules: {
    products, cart
  },
})
