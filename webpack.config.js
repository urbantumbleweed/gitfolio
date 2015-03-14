module.exports = {
  entry: './app/App.js',
  output: {
    path: './public',
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  devtool: 'source-map'
};
