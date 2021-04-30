import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(new VueSocketIO( {
    debug: false,
    connection: SocketIO('https://aifood-myi454uzzq-rj.a.run.app')
  } )
)

Vue.config.productionTip = false

