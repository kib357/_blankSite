##Setup for dev:

1. npm install
2. npm install webpack-dev-server -g
3. webpack-dev-server --content-base ./dist --inline
4. open http://localhost:8080

##Build production:

1. webpack --config webpack.production.config.js
2. git subtree push --prefix dist origin gh-pages
