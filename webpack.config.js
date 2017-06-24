var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
var config = {
	entry: __dirname + '/app/index.js',
    devServer: {
      inline: true,
      port: 8080
    },
	module:{
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	}
	plugins: [HTMLWebpackPluginConfig]
}
module.exports = config