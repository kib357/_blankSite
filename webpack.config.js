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
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },
    devtool: "inline-source-map"
};