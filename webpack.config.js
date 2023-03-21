const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  name: 'react-boiler-plate',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
    },
  },
  entry: {
    app: ['./client'],
  },
  target: ['web', 'es6'],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' })],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    proxy: {
      '/api/': {
        target: 'http://localhost:3005',
        changeOrigin: true,
      },
    },
  },
}

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new ReactRefreshWebpackPlugin())
}
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }))
}

module.exports = config
