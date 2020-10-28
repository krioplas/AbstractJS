const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,
		contentBase: paths.build,
		open: true,
		compress: true,
		overlay: {
			warnings: true,
			errors: true,
		},
		hot: true,
		port: 8080,
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],

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
