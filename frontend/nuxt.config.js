export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  env: {
    strapiBaseUri: process.env.API_URL || "https://design-playbook.herokuapp.com"
  },

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
    "@assets/css/main.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/apollo",
    "@nuxtjs/markdownit", // Simple usage
    '@nuxtjs/component-cache'
  ],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: (process.env.API_URL || "https://design-playbook.herokuapp.com") + "/graphql"
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
};
