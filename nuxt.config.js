export default {
  head: {
    title: "Dumb Designs Store",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  css: ["~/assets/styles/main.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  env: {
    assetsUrl: process.env.ASSETS_URL,
    apiUrl: process.env.STRAPI_API,
  },
  modules: ["@nuxtjs/snipcart", "@nuxtjs/apollo"],
  snipcart: {
    key: process.env.SNIPCART_API_KEY,
  },
  components: true,
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.STRAPI_API,
      },
    },
  },
};
