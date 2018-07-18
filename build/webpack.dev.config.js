const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue countup',
            template: '!!ejs-loader!./example/index.ejs'
        })
    ]
});
