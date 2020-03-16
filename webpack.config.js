var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TxtPlugin = require('./plugins/TxtPlugin');
var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9020,
        hot: true
    },
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js',
    },
    plugins: [
        new TxtPlugin({
            from: path.resolve(__dirname, 'copy/test.txt'),
            to: path.resolve(__dirname, 'dist/test.txt')
        }),
        new HotModuleReplacementPlugin()
    ]
}