export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: "/review-ui/",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "review-ui",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/main.css",
    "~node_modules/medium-editor/dist/css/medium-editor.css",
    "~node_modules/vuejs-medium-editor/src/themes/default.css",
  ],

  styleResources: {
    scss: [
      "~assets/scss/simple-grid.scss",
      "~assets/scss/mixins.scss",
      "~assets/scss/variables.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/medium-editor", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-social-sharing/nuxt", "@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    proxy: true,
  },

  proxy: {
    "/api/": {
      target: "http://localhost:8080/",
      pathRewrite: {
        "^/api/": "",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  colorMode: {
    preference: "", // default value of $colorMode.preference
    fallback: "", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
};
