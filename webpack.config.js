const path = require('path');

module.exports = {
  entry: path.join(__dirname, "/client/index.jsx"),
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["babel-plugin-styled-components"],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};