import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

//create a store
export const state = () => ({
  orders: {}
});


// getters
export const getters = {
  orders(state) {
    return state.orders;
  }
}


// mutations
export const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders;
  }
}

// actions

export const actions = {
  /*async nuxtServerInit({ commit }){
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit("SET_POSTS", data);
  }*/
  setOrders({ commit }, orders) {
    commit("SET_ORDERS", orders);
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
