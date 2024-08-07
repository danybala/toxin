const PugPlugin = require("PugPlugin");

module.exports = {
	plugins: [
		new PugPlugin({
			entry: {
				// define many page templates here
				index: "src/pages/index.pug", // => dist/index.html
			},
			js: {
				// JS output filename
				filename: "js/[name].[contenthash:8].js",
			},
			css: {
				// CSS output filename
				filename: "css/[name].[contenthash:8].css",
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(s?css|sass)$/,
				use: ["css-loader", "sass-loader"],
			},
			{
				test: /\.(ico|png|jp?g|webp|svg)$/,
				type: "asset/resource",
				generator: {
					filename: "img/[name].[hash:8][ext][query]",
				},
			},
		],
	},
};
