import axios from 'axios'

const profile = {
    namespaced: true,
     state:{
        address: [],
      },
    mutations: {
      SET_PROFILE(state, data){
        state.address = data
      },
      SET_PROFILE(state, data){
        state.address = data
      }
    },
    getters: {
      address: state => {
        return state.address
      }
    },
    actions: {
      async loadProfile({commit}){
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        if(process.browser){
          console.log( JSON.stringify(localStorage.getItem('auth._token.google')));
          console.log( JSON.stringify(localStorage.getItem('auth._token.local')));
          axios.defaults.headers.common['Authorization'] = JSON.stringify(localStorage.getItem('auth._token.google'));
        }
        await axios.post('https://aifood-myi454uzzq-rj.a.run.app/useraddress')
        .then(res => {
          console.error( res.data)
        commit('SET_PROFILE', res.data)
        }).catch(err => {
            console.error(err)
        });
      },
    }
};

export default profile;





