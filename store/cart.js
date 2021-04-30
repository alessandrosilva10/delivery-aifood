import axios from 'axios'

const cart = {
    namespaced: true,
    state: {
      StoreCart: []
    },
    getters: {
      StoreCartState: state => {
        // not 'this.state' because state is passed in as a parameter
        return state.StoreCart
      },
        StoreCart: state => {
          // not 'this.state' because state is passed in as a parameter
          if(process.browser){
            return JSON.parse(localStorage.getItem('cartItems')) || []
          }
        },
        TotalStoreCart(){
          if(process.browser){
            if(JSON.parse(localStorage.getItem('cartItems'))){
              return JSON.parse(localStorage.getItem('cartItems')).reduce((a, b) => +a + +b.total_value, 0);
            }
            return 0
          }
        },
        StoreCartLength: state => {
          // not 'this.state' because state is passed in as a parameter
          if(process.browser){
            if(state.StoreCart.length > 0 && state.StoreCart.StoreCart >= JSON.parse(localStorage.getItem('cartItems')).length){
              return state.StoreCart.length
            }else{
              if(localStorage.getItem('cartItems')){
                return JSON.parse(localStorage.getItem('cartItems')).length;
              }
            }
          }
        }
      },
    mutations: {
      ADD_Item(state, order) {
          state.StoreCart.push(order);
        },

        REMOVE_Item(state, index) {
          state.StoreCart.splice(index, 1);
      },
    },
    actions: {
      addItem(context, order) {
        context.commit("ADD_Item", order);
      },
      removeItem(context, index) {
        context.commit("REMOVE_Item", index);
      },
      StoreCart(state){
        return state.StoreCart;
      },
    }
};

export default cart;





