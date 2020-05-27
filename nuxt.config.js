module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '工作台',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '工作台'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
   引入css
   **
   引入element-ui 样式
   */
  css: [
    '~/assets/css/main.scss',//总的scss
    {src: 'element-ui/lib/theme-chalk/index.css'}
  ],
  /*
 ** 引入element-ui 插件
 */
  plugins: [{
    src: '~plugins/element-ui',
    ssr: true //是能在服务端运行
  },
    '~/plugins/request.js'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

