/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	
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

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(18);
	__webpack_require__(19);

/***/ },

/***/ 14:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "CNAME";

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico";

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDY0ODQ1OWJiM2UzNzdhYzcwOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NOQU1FIiwid2VicGFjazovLy8uL3NyYy9mYXZpY29uLmljbyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esb0JBQU8sQ0FBQyxFQUFVLENBQUMsQ0FBQzs7QUFFcEIsS0FBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3BGLEtBQUksUUFBUSxHQUFHLElBQUksQ0FBQzs7QUFFcEIsS0FBSSxPQUFPLEdBQUcsWUFBWTtBQUN6QixVQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsVUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZO0FBQ2hDLFdBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNsQixDQUFDO0FBQ0YsVUFBUSxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzlCLGFBQVUsQ0FBQyxZQUFZO0FBQ3RCLFFBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFOztBQUMxQyxZQUFPLEVBQUUsQ0FBQztLQUNWO0lBQ0QsRUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBRSxDQUFDO0dBQ2xDO0VBQ0Q7QUFDRCxRQUFPLEVBQUUsQzs7Ozs7OztBQ2xCVCxvQkFBTyxDQUFDLEVBQW9CLENBQUMsQ0FBQztBQUM5QixvQkFBTyxDQUFDLEVBQTBCLENBQUMsQ0FBQztBQUNwQyxvQkFBTyxDQUFDLEVBQXNDLENBQUMsQzs7Ozs7OztBQ0YvQywwQzs7Ozs7OztBQ0FBLGtEOzs7Ozs7O0FDQUEsd0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjQ4NDU5YmIzZTM3N2FjNzA5ZlxuICoqLyIsInJlcXVpcmUoJy4vYXBwLmpzJyk7XG5cbnZhciB3c1VybCA9IChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cycpICsgJzovLycgKyBsb2NhdGlvbi5ob3N0O1xudmFyIHdzQ2xpZW50ID0gbnVsbDtcblxudmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdHdzQ2xpZW50ID0gbmV3IFdlYlNvY2tldCh3c1VybCk7XG5cdHdzQ2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0fTtcblx0d3NDbGllbnQub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh3c0NsaWVudCAmJiB3c0NsaWVudC5yZWFkeVN0YXRlID09PSAzKSB7IC8vMy1DTE9TRURcblx0XHRcdFx0Y29ubmVjdCgpO1xuXHRcdFx0fVxuXHRcdH0sIChNYXRoLnJhbmRvbSgpICogMjAwMCArIDIwMDApKTtcblx0fVxufVxuY29ubmVjdCgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Rldi5qc1xuICoqLyIsInJlcXVpcmUoXCIuLi9zdHlsZXMvYXBwLmxlc3NcIik7XG5yZXF1aXJlKFwiZmlsZT9uYW1lPUNOQU1FIS4uL0NOQU1FXCIpO1xucmVxdWlyZShcImZpbGU/bmFtZT1mYXZpY29uLmljbyEuLi9mYXZpY29uLmljb1wiKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMvYXBwLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiQ05BTUVcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPUNOQU1FIS4vc3JjL0NOQU1FXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29uLmljbyEuL3NyYy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9