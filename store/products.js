import axios from 'axios'

const products = {
    namespaced: true,
    state: {
      products: []
    },
    mutations: {
      SET_PRODUCTS(state, data){
        state.products = data
      }
    },
    actions: {
      async loadProducts({commit}){
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        await axios.get('http://localhost:5000/products', {
   headers: {
          // remove headers
        }
      }).then(res => {
                    console.log(res.data)
            commit('SET_PRODUCTS', res.data)
      }).catch(err => {
        console.log(err.response);
      });

}
    }
};

export default products;





