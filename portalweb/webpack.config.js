var webpack = require('webpack');
var path = require('path');
var packageJSON = require('./package.json');

// const PATHS = {
//     build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
// };

const PATHS = {
     build: path.join(__dirname, 'public')
};

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: PATHS.build,
      publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
        'node_modules',
        './app/components',
        './app/components/profile',
        './app/components/devices',
        './app/components/common',
        './app/components/main',
        './app/components/navigation',
        './app/components/login',
        './middleware',
        './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      userProfileActions: 'app/actions/userProfileActions.jsx',
        deviceActions: 'app/actions/deviceActions.jsx',
      userProfileReducer: 'app/reducers/userProfileReducer.jsx',
        deviceReducer: 'app/reducers/deviceReducer.jsx',
      configureStore: 'app/store/configureStore.jsx',
      actionTypes: 'app/actions/actionTypes.jsx',
        tokenActions: 'app/actions/tokenAction.jsx',
        tokenReducer: 'app/reducers/tokenReducer.jsx',
        tokenService: 'app/services/token/token.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
