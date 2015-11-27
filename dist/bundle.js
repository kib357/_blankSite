/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);

	var wsUrl = (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.host;
	var wsClient = null;

	var connect = function () {
		wsClient = new WebSocket(wsUrl);
		wsClient.onmessage = function () {
			location.reload();
		};
		wsClient.onclose = function () {
			setTimeout(function () {
				if (wsClient && wsClient.readyState === 3) {
					//3-CLOSED
					connect();
				}
			}, Math.random() * 2000 + 2000);
		};
	};
	connect();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "CNAME";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico";

/***/ }
/******/ ]);