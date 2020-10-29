const PATHS = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,
		contentBase: PATHS.build,
		inline: true,
		open: true,
		clientLogLevel: 'info',
		compress: true,
		port: 3000,
		overlay: {
			warnings: true,
			errors: true,
		},
		hot: true,
		watchContentBase: true,
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
					// {
					// 	loader: MiniCssExtractPlugin.loader,
					// 	options: {
					// 		hmr: true,
					// 		reloadAll: true,
					// 	},
					// },
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
