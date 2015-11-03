/**
 * Created by kib357 on 03/11/15.
 */

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
            // LESS
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
    devtool: "inline-source-map"
};