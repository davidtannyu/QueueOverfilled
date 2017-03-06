let webpack = require("webpack");

module.exports = {
  entry: './frontend/queue_overfilled.jsx',
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  devtool: 'source-maps'
};
