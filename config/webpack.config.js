let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.ts',
    output: {
        filename: 'tddutil.min.js',
        path: path.resolve('dist'),
        library      : 'tdl',
        // libraryTarget: 'umd',
        libraryExport: "default",
    },
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        //host: '0.0.0.0',
        port: 9090,
        open: false,
        hot: false
    },
    module:{
        rules:[
			{
			  test: /\.tsx?$/,
			  use: {
				loader: 'ts-loader'
              },
              exclude: /node_modules/
			}
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
	plugins: [
		new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: false,
    }),
	],
    optimization: {
        minimize: false
    }
}
