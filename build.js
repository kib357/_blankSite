#!/usr/bin/env node
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var hbs = require('handlebars');
var wss = null;

var dev = process.argv[2] == 'dev';

hbs.registerHelper('ifEquals', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

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

var compileHTML = function () {
    var data = fs.readFileSync('./src/index.html', 'utf8');
    var locales = ['en', 'ru'];
    locales.forEach(function (lang, index) {
        var partialsBase = './src/partials/';
        var loadPartials = function (path) {
            return fs.readdirSync(path).filter(function (file) {
                return fs.lstatSync(path + file).isFile() && file.indexOf('.html') > 0;
            }).map(function (f) {
                return {
                    "name": f,
                    "path": path
                };
            });
        }
        //Registering partials
        var partials = loadPartials(partialsBase);
        if (lang !== 'en') {
            partials = partials.concat(loadPartials(partialsBase + lang + '/'));
        }
        partials.forEach(function (file) {
            var partial = fs.readFileSync(file.path + file.name, 'utf-8');
            hbs.registerPartial(file.name.replace('.html', ''), partial);
        });

        //Compiling
        var template = hbs.compile(data);
        var html = template({ "lang": lang });
        
        //Unregistering partials
        partials.forEach(function (file) {
            hbs.unregisterPartial(file.name.replace('.html', ''));
        });

        //Writing HTML
        var workingDir = './dist/' + (lang === 'en' ? '' : lang + '/');
        if (lang !== 'en' && !fs.existsSync(workingDir)) {
            fs.mkdirSync(workingDir);
        }
        try {
            fs.writeFileSync(workingDir + 'index.html', html);
        } catch (err) {
            console.log(err);
        }
    });
    console.log("HTML compiled");
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
    var compileTm = null;
    var compileHTMLDebounce = function (aggregateTimeout) {
        clearTimeout(compileTm);
        setTimeout(compileHTML, aggregateTimeout || 300);
    }
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
        compileHTMLDebounce();
    });
    compileHTMLDebounce();

    compiler.watch({ // watch options:
        aggregateTimeout: 300, // wait so long for more changes
        //poll: true // use polling instead of native watchers
        // pass a number to set the polling interval
    }, onWebpackEvent);

} else {
    compileHTML();
    compiler.run(onWebpackEvent);
}