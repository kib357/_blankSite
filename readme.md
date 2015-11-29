##Setup for dev:

1. npm install
2. node build.js dev
3. open http://localhost:8080
4. profit!

##Build production:

1. node build.js
2. Commit ./dist changes to git
3. git subtree push --prefix dist origin gh-pages
