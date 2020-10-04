import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - banana-shop',
    title: 'banana-shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://app.snipcart.com' },
      { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css',
      },
    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'https://graphql.umbraco.io',
        httpLinkOptions: {
          headers: {
            'umb-project-alias': 'dev-toms-hc-talk',
          },
        },
        inMemoryCacheOptions: {
          addTypename: false,
        },
      },
    },
  },
  env: {
    storeUrl:
      process.env.STORE_URL ||
      'https://graphql.umbraco.io/?Umb-Project-Alias=dev-toms-hc-talk',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
