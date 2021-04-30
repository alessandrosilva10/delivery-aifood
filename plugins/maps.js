import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBoIoWXDQVRAzePDp-REl-fKWTcfGS7Fd0',
    libraries: 'places',
  }
});
