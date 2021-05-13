export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: true,
  head: {
    title: 'Aifood',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google-site-verification', content: 'r8txx7XTw0F7y8RSKt58RbavSWB0oXLUQmuUDi2Bsng' },
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
   { src: '~/plugins/maps.js', mode: 'client' },
   { src: '~/plugins/vue-persist.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  pwa: {
    icon: false // disables the icon module
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
   ],
   transpileDependencies: ['vuex-persist'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    /*['nuxtjs-stripe', {
      publishableKey: 'pk_test_51IW1MBLrIdC5lYpk3Eqqny4PX4tQbniOyHXycjppEhSgkP8nVLDdDW8elbkDF3RTHLXfik1EkkM07yGTtG5D7NYn003Qh6xdTp',
      version: 'v3', // Default
      defer: true, // Default
      async: true // Default
    }],*/
    // https://go.nuxtjs.dev/buefy
    '@nuxtjs/auth',
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
  axios: {
    baseURL: 'https://aifood-myi454uzzq-rj.a.run.app'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    strategies: {
      tokenType: 'bearer',
      //https://stackoverflow.com/questions/58514171/flask-jwt-extended-the-specified-alg-value-is-not-allowed-error
      local: {
        endpoints: {
          login: { url: '/login', method: 'POST', propertyName: 'access_token' },
          user: { url: '/users', method: 'POST', propertyName: false},
          logout: { url: '/logout', method: 'POST'},
          tokenRequired: true
        },
      },
      facebook: {
        client_id: '',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email'],
        redirect_uri:'http://localhost:3000'
      },
      google: {
        client_id: '545822476688-7h0hrrj950nprgtmtslv5r65bjf7qe3m.apps.googleusercontent.com',
        responseType: "code",
        scope: ['profile', 'email'],
        refresh_token: {
          prefix: '_refresh_token.'
        },
        access_token: {
          prefix: '_access_token.'
        },
        fresh: true, type: "access",
        endpoints: {
          token: 'http://localhost:3000/',
          userInfo: 'http://localhost:3000/',
        },
        codeChallengeMethod: "HS256",
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        }
     /* google: {
        clientId: '545822476688-7h0hrrj950nprgtmtslv5r65bjf7qe3m.apps.googleusercontent.com',
        codeChallengeMethod: "",
        scope: ['profile', 'email'],
        user:true,
        responseType: "code",
        redirect_uri:'http://localhost:3000/',
        //responseType: 'code',
        //https://medium.com/swlh/how-to-build-google-social-login-in-django-rest-framework-and-nuxt-auth-and-refresh-its-jwt-token-752601d7a6f3
        // endpoints: {
        // token: 'http://localhost:8000/social-login/google/',
        // userInfo: 'http://localhost:8000/auth/user/'
       // },
      },*/
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/',
      home: '/'
    }
  }
  }}
