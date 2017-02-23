import { debug, production } from './helpers/getArg'

var src = './src'

export default {
  vueEntryConfig: {
    src: src,
    vueLibBuildIn: true,
    components: './src/components',
    pages: './src/pages',
    langs: ["zh_CN"],
    plugins: [{
      name: 'mobile',
      options: {
        designWidth: 320,
        designHeight: 568,
        designFontSize: 17
      }
    }]
  },
  src: src,
  dest: './dist',

  assets: {
    images: 'statics/images',
    scripts: 'statics/scripts',
    styles: 'statics/styles',
    fonts: 'statics/fonts',
  },

  isProduction: production,
  isDeveloper: !production,
  isDebug: debug,
  NODE_ENV: production ? 'production' : 'developer',

  server: {
    port: 8082,
  },
}
