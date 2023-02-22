const path = require('path');

const srcDir = path.join(__dirname, '/client/src');
const distDir = path.join(__dirname, '/client/dist');

module.exports = {
	mode: 'development',
	entry: `${srcDir}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: distDir
	},
	module: {
		rules: [
			{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ["babel-loader"]
			}
		]
	}
}