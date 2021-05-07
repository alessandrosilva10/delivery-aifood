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
        if(process.browser){
          axios.defaults.headers.common['Authorization'] = JSON.parse(JSON.stringify(localStorage.getItem('auth._token.local')));
        }
        await axios.post('https://aifood-myi454uzzq-rj.a.run.app/useraddress')
        .then(res => {
        commit('SET_PROFILE', res.data)
        }).catch(err => {

        });
      },
    }
};

export default profile;





