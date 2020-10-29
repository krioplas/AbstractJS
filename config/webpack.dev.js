const PATHS = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,
		watchContentBase: true,
		contentBase: PATHS.build,
		open: true,
		clientLogLevel: 'info',
		compress: true,
		hot: true,
		port: 8080,
		overlay: {
			warnings: true,
			errors: true,
		},
	},

	plugins: [
		// Only update what has changed on hot reload
		new webpack.HotModuleReplacementPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1 },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
		],
	},
})
