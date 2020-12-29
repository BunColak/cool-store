export default {
  head: {
    title: "My Nuxt.js Application!",
  },
  css: ["~/assets/styles/main.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  modules: [
    '@nuxtjs/snipcart',
    '@nuxtjs/apollo'
  ],
  snipcart: {
    key: process.env.SNIPCART_API_KEY
  },
  components: true,
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.STRAPI_API,
      }
    }
  }
};
