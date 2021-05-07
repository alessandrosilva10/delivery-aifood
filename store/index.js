import Vuex from 'vuex'
import * as products from './products';
import * as cart from './cart';
import * as profile from './profile';

export const store = new Vuex.Store({
  modules: {
    products, cart, profile
  },
})
