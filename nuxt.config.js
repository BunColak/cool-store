export default {
  head: {
    title: "My Nuxt.js Application!",
  },
  modules: [
    '@nuxtjs/snipcart',
    '@nuxtjs/strapi'
  ],
  snipcart: {
    key: process.env.SNIPCART_API_KEY
  }
};
