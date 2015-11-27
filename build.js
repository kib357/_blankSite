#!/usr/bin/env node
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var wss = null;

var dev = process.argv[2] == 'dev';

// returns a Compiler instance
var compiler = webpack({
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
    devtool: dev ? "inline-source-map" : ""
});


// compiler.run(function(err, stats) {
// });
// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    //poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function (err, stats) {
    // ...
    console.log("Assets builded. Time: ", (stats.endTime - stats.startTime), 'ms');
    if (err != null) {
        console.log(err);
    } else {
        if (wss != null) {
            wss.clients.forEach(function each(client) {
                client.send('Please update');
            });
        }
    }
});

if (true || dev) {
    var express = require('express');
    var WebSocketServer = require('ws').Server;

    var app = express();
    app.use(express.static('dist'));
    var server = app.listen(8080, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Dev server listening at http://%s:%s and serving files from ./dist', host, port);
        wss = new WebSocketServer({ server: server });
    });
}