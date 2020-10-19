const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.ts',
    renderer: './src/renderer.tsx',
  },
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
	test: /\.html$/,
	loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
	{from: './src/index.html'},
      ]
    })
  ]
};
