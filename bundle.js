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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	__webpack_require__(16);
	__webpack_require__(17);

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "CNAME";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY5YjBhYzRlMGIyMjczMTkyYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NOQU1FIiwid2VicGFjazovLy8uL3NyYy9mYXZpY29uLmljbyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxvQkFBTyxDQUFDLEVBQVUsQ0FBQyxDQUFDOztBQUVwQixLQUFJLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDcEYsS0FBSSxRQUFRLEdBQUcsSUFBSSxDQUFDOztBQUVwQixLQUFJLE9BQU8sR0FBRyxZQUFZO0FBQ3pCLFVBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxVQUFRLENBQUMsU0FBUyxHQUFHLFlBQVk7QUFDaEMsV0FBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2xCLENBQUM7QUFDRixVQUFRLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDOUIsYUFBVSxDQUFDLFlBQVk7QUFDdEIsUUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7O0FBQzFDLFlBQU8sRUFBRSxDQUFDO0tBQ1Y7SUFDRCxFQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFFLENBQUM7R0FDbEM7RUFDRDtBQUNELFFBQU8sRUFBRSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJULG9CQUFPLENBQUMsRUFBb0IsQ0FBQyxDQUFDO0FBQzlCLG9CQUFPLENBQUMsRUFBMEIsQ0FBQyxDQUFDO0FBQ3BDLG9CQUFPLENBQUMsRUFBc0MsQ0FBQyxDOzs7Ozs7QUNGL0MsMEM7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7QUNBQSx3RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBmOWIwYWM0ZTBiMjI3MzE5MmE0XG4gKiovIiwicmVxdWlyZSgnLi9hcHAuanMnKTtcblxudmFyIHdzVXJsID0gKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJykgKyAnOi8vJyArIGxvY2F0aW9uLmhvc3Q7XG52YXIgd3NDbGllbnQgPSBudWxsO1xuXG52YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0d3NDbGllbnQgPSBuZXcgV2ViU29ja2V0KHdzVXJsKTtcblx0d3NDbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9O1xuXHR3c0NsaWVudC5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHdzQ2xpZW50ICYmIHdzQ2xpZW50LnJlYWR5U3RhdGUgPT09IDMpIHsgLy8zLUNMT1NFRFxuXHRcdFx0XHRjb25uZWN0KCk7XG5cdFx0XHR9XG5cdFx0fSwgKE1hdGgucmFuZG9tKCkgKiAyMDAwICsgMjAwMCkpO1xuXHR9XG59XG5jb25uZWN0KCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZGV2LmpzXG4gKiovIiwicmVxdWlyZShcIi4uL3N0eWxlcy9hcHAubGVzc1wiKTtcbnJlcXVpcmUoXCJmaWxlP25hbWU9Q05BTUUhLi4vQ05BTUVcIik7XG5yZXF1aXJlKFwiZmlsZT9uYW1lPWZhdmljb24uaWNvIS4uL2Zhdmljb24uaWNvXCIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvYXBwLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy9hcHAubGVzc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJDTkFNRVwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpbGUtbG9hZGVyP25hbWU9Q05BTUUhLi9zcmMvQ05BTUVcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vc3JjL2Zhdmljb24uaWNvXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=