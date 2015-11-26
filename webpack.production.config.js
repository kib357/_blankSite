var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "bundle": "./src/js/app.js"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            // LESS
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') }      
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    //devtool: "inline-source-map"
};