import axios from 'axios'

const products = {
    namespaced: true,
     state:{
        products: [],
      },
    mutations: {
      SET_PRODUCTS(state, data){
        state.products = data
      },
      SET_PRODUCT_IMAGES(state, data){
        state.product_images = data
      }
    },
    getters: {
      ProductImages: state => {
        return 1
      }
    },
    actions: {
      async loadProducts({commit}){
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          await axios.get('https://aifood-myi454uzzq-rj.a.run.app/products', {
        headers: {
            // remove headers
          }
        }).then(res => {
          commit('SET_PRODUCTS', res.data)
        }).catch(err => {
          console.log(err.response);
        });
      },
      /*async loadProductImages({commit}){
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          await axios.get('http://localhost:5000/products_images', {
        headers: {
            // remove headers
          }
        }).then(res => {
          commit('SET_PRODUCT_IMAGES', res.data)
        }).catch(err => {
          console.log(err.response);
        });
      }*/
    }
};

export default products;





