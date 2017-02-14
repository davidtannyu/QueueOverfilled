module.exports = {
  entry: './frontend/queue_overfilled.jsx',
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
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
