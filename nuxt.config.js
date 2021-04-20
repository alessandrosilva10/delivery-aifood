export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  ssr: true,
  head: {
    title: 'Aifood',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-stripe.js', ssr: false },
    { src: '@/plugins/vue-material-icons', mode: 'client' },
    { src: '@/plugins/apex-chart', mode: 'client' },
   { src: '~/plugins/socketio.js', mode: 'client' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

   ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    /*['nuxtjs-stripe', {
      publishableKey: 'pk_test_51IW1MBLrIdC5lYpk3Eqqny4PX4tQbniOyHXycjppEhSgkP8nVLDdDW8elbkDF3RTHLXfik1EkkM07yGTtG5D7NYn003Qh6xdTp',
      version: 'v3', // Default
      defer: true, // Default
      async: true // Default
    }],*/
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', {
      defaultIconPack: 'fas',
      materialDesignIconsHRef: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
    }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
"nuxt-stripejs"
    //{ src: '~/plugins/vue-stripe.js', ssr: false },
  ],/*
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fa'
  },*/
  stripe: {
    publishableKey: 'pk_test_XXXXXXXXXXXXXXX',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
