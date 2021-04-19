import Vuex from 'vuex'
import * as products from './products';

export const store = new Vuex.Store({
  modules: {
    products
  },
})
