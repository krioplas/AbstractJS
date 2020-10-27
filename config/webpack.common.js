const paths = require('./paths')
const fs = require('fs')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const PAGES_DIR = paths.src

const PAGES = fs
	.readdirSync(PAGES_DIR)
	.filter(fileName => fileName.endsWith('.html'))

module.exports = {
	// entry: [paths.src + '/index.js'],

	entry: {
		app: ['@babel/polyfill', `${paths.src}/index.js`],
	},

	// output: {
	// 	path: paths.build,
	// 	filename: '[name].bundle.js',
	// 	publicPath: '/',
	// },

	output: {
		filename: `${paths.assets}js/[name].js`,
		path: paths.build,
		publicPath: './',
		assetModuleFilename: `${paths.assets}/images/[hash][ext]`,
	},

	experiments: {
		asset: true,
	},

	resolve: {
		extensions: [
			'.js',
			'.json',
			'.xml',
			'.csv',
			'.png',
			'.svg',
			'.jpg',
			'.jpeg',
			'.sass',
			'.scss',
		],
		alias: {
			'~': paths.src,
		},
	},

	plugins: [
		new CleanWebpackPlugin(),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${paths.src}/${paths.assets}images`,
					to: `${paths.assets}images`,
				},
				{ from: `${paths.src}/static`, to: `` },
			],
		}),

		// Generates an HTML file from a template
		// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501

		...PAGES.map(
			page =>
				new HTMLWebpackPlugin({
					favicon: paths.src + '/static/favicon.ico',
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page}`,
				})
		),
	],

	// Determine how modules within the project are treated
	module: {
		rules: [
			// JavaScript: Use Babel to transpile JavaScript files
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties'],
						},
					},
				],
			},

			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				// generator: {
				// 	filename: `${paths.assets}/[hash][ext]`,
				// },
				// options: {
				// 	outputPath: `${paths.assets}/images`,
				// },
			},

			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
}
