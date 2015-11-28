#!/usr/bin/env node
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var hbs = require('handlebars');
var wss = null;

var dev = process.argv[2] == 'dev';

// returns a Compiler instance
var compiler = webpack({
    entry: {
        "bundle": dev ? "./src/js/dev.js" : "./src/js/app.js"
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

var reloadClient = function () {
    if (wss != null) {
        wss.clients.forEach(function each(client) {
            client.send('Please update');
        });
    }
}

var compiling = false, recompile = false;
var compileHTML = function () {
    if (compiling) {
        recompile = true;
    } else {
        recompile = false;
        fs.readFile('./src/index.html', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            //Registering partials
            var partials = fs.readdirSync('./src/partials/');
            partials.forEach(function (file) {
                var partial = fs.readFileSync('./src/partials/' + file, 'utf-8');
                hbs.registerPartial(file.replace('.html', ''), partial);
            });
            
            var template = hbs.compile(data);
            var html = template({ "hello": "Hello, handlebars!!!" });
            fs.writeFile('./dist/index.html', html, function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("HTML compiled");
                    reloadClient();
                }
                compiling = false;
                if (recompile) {
                    compileHTML();
                }
            })
        });
    }
};

var onWebpackEvent = function (err, stats) {
    console.log("Assets builded. Time: ", (stats.endTime - stats.startTime), 'ms');
    if (err != null) {
        console.log(err);
    } else {
        reloadClient();
    }
};

if (dev) {
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

    var watcher = require('chokidar').watch(['./src/partials/', './src/index.html'], {
        persistent: true,
        ignoreInitial: true
    });
    watcher.on('change', function () {
        compileHTML();
    });
    compileHTML();

    compiler.watch({ // watch options:
        aggregateTimeout: 300, // wait so long for more changes
        //poll: true // use polling instead of native watchers
        // pass a number to set the polling interval
    }, onWebpackEvent);

} else {
    compileHTML();
    compiler.run(onWebpackEvent);
}