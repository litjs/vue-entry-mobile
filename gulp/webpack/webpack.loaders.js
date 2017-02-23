import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../config'
import path from 'path'
import {getEntryFilePath,getAppRootPath} from 'vue-entry/dist/bootstrap/utils'
var vueEntryConfig = config.vueEntryConfig

var loaders = {}

loaders.js = {
  test: /\.js$/i,
  //include: [path.resolve(config.src), path.resolve('./node_modules/vux')],
  loader: 'babel'
}

loaders.tempJs = {
  test: /\.js$/i,
  include: [getEntryFilePath(vueEntryConfig)],
  loader: 'babel'
}

loaders.configJson = {
  test: /config\.json$/i,
  exclude: [/\/components\//],
  loader: 'file',
  query: {
    context: getAppRootPath(vueEntryConfig),
    name: '[path][name].[ext]'
  }
}

loaders.indexhtml = {
  test: /index\.html$/i,
  exclude: [/\/components\//],
  loader: 'file',
  query: {
    context: getAppRootPath(vueEntryConfig),
    name: '[path][name].[ext]'
  }
};

loaders.i18n = {
  test: /\.lang\.json$/i,
  exclude: [/\/components\//],
  loader: 'file',
  query: {
    context: getEntryFilePath(vueEntryConfig),
    name: '[path][name].[ext]'
  }
};

loaders.vue = {
  test: /\.vue$/i,
  include: [path.resolve(config.src), path.resolve('./node_modules/')],
  loader: 'vue',
}

loaders.sassUsable = {
  test: /\.useable\.(scss|sass)$/i,
  loaders: [
    'style/useable',
    'css',
    'sass',
  ],
}

loaders.sass = {
  test: /\.(scss|sass)$/i,
  exclude: loaders.sassUsable.test,
  loader: ExtractTextPlugin.extract('style',
    loaders.sassUsable.loaders.slice(1).join('!')
  ),
}

loaders.css = {
  test: /\.(css)$/i,
  exclude: loaders.sassUsable.test,
  loader: ExtractTextPlugin.extract('style',
    'css-loader',
    'postcss-loader'
  ),
}

loaders.lessUsable = {
  test: /\.useable\.less$/i,
  loaders: [
    'style/useable',
    'css',
    'less',
  ],
}

loaders.less = {
  test: /\.less$/i,
  exclude: loaders.lessUsable.test,
  loader: ExtractTextPlugin.extract('style',
    loaders.lessUsable.loaders.slice(1).join('!')
  ),
}

loaders.fonts = {
  test: /.*\.(ttf|eot|woff|woff2|svg)(\?.*)?$/i,
  loader: 'url',
  query: {
    //context: getAppRootPath(vueEntryConfig),
    limit: 0.01 * 1024,
    name: config.assets.fonts + '/[name]-[hash:5].[ext]',
  },
}

loaders.url = {
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  loader: 'url',
  query: {
    limit: 0.01 * 1024,
    name:config.assets.images + '/[name].[ext]',
  },
}

loaders.svg = {
  test: /\.svg$/,
  include: /images/,
  loader: 'svg-sprite?' + JSON.stringify({
    name: '[name]'
  })
}

var usedLoaders = [
  loaders.configJson,
  loaders.indexhtml,
  loaders.i18n,
  loaders.vue,
  loaders.js,
  loaders.tempJs,
  loaders.sass,
  loaders.sassUsable,
  loaders.less,
  loaders.lessUsable,
  loaders.url,
  loaders.fonts,
  loaders.svg,
  loaders.css
]

export default usedLoaders
