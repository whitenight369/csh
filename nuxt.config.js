export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'huarang-lawyer-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMerriweather%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%2C900%2C900italic&amp;subset=latin%2Clatin-ext%2Cdevanagari%2Ccyrillic-ext%2Cvietnamese%2Ccyrillic&amp;' },   //外部引入css方式
      // { rel: 'stylesheet', href: '/css/goodlayers-core/plugins/combine/style.css' },   // 内部引入会默认读取（static文件夹）
      // { rel: 'stylesheet', href: '/css/goodlayers-core/include/css/page-builder.css' },   // 内部引入会默认读取（static文件夹）
      // { rel: 'stylesheet', href: '/css/revslider/public/assets/css/settings.css' },   // 内部引入会默认读取（static文件夹）
      // { rel: 'stylesheet', href: 'css/style-core.css' },   // 内部引入会默认读取（static文件夹）
      // { rel: 'stylesheet', href: 'css/attorna-style-custom.css' },   // 内部引入会默认读取（static文件夹）
      // { rel: 'stylesheet', href: 'css/revslider/public/assets/fonts/font-awesome/css/font-awesome.css' },   // 内部引入会默认读取（static文件夹）
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    },
    transpile: [/^element-ui/],
  },
  head: {
    link: [
      // 引入PingFangSC-Semibold字体
      {
        rel: 'stylesheet',
        // href: 'https://cdn.jsdelivr.net/npm/fontsource-pingfang-sc-semi/latin.css'
        href: './static/fonts/style.css'
      },
      // 引入PingFangSC字体
      {
        rel: 'stylesheet',
        // href: 'https://cdn.jsdelivr.net/npm/fontsource-pingfang-sc/latin.css'
      }
    ]
  }
}
