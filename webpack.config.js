/**
 * Created by kib357 on 03/11/15.
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            // LESS
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader!less-loader') }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    devtool: "inline-source-map"
};