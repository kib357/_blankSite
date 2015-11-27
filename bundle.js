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

	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(8);
	
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

	module.exports = __webpack_require__.p + "CNAME";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGZkZjk3ZjQyYjVmNDk0MDhjOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9DTkFNRSIsIndlYnBhY2s6Ly8vLi9zcmMvZmF2aWNvbi5pY28iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0Esb0JBQU8sQ0FBQyxDQUFvQixDQUFDLENBQUM7QUFDOUIsb0JBQU8sQ0FBQyxDQUEwQixDQUFDLENBQUM7QUFDcEMsb0JBQU8sQ0FBQyxDQUFzQyxDQUFDLENBQUM7O0FBRWhELEtBQUksS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztBQUNwRixLQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7O0FBRXBCLEtBQUksT0FBTyxHQUFHLFlBQVk7QUFDekIsVUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLFVBQVEsQ0FBQyxTQUFTLEdBQUcsWUFBWTtBQUNoQyxXQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDbEIsQ0FBQztBQUNGLFVBQVEsQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUM5QixhQUFVLENBQUMsWUFBWTtBQUN0QixRQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTs7QUFDMUMsWUFBTyxFQUFFLENBQUM7S0FDVjtJQUNELEVBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUUsQ0FBQztHQUNsQztFQUNEO0FBQ0QsUUFBTyxFQUFFLEM7Ozs7Ozs7O0FDcEJULDBDOzs7Ozs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsd0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwZmRmOTdmNDJiNWY0OTQwOGM5NFxuICoqLyIsInJlcXVpcmUoXCIuLi9zdHlsZXMvYXBwLmxlc3NcIik7XG5yZXF1aXJlKFwiZmlsZT9uYW1lPUNOQU1FIS4uL0NOQU1FXCIpO1xucmVxdWlyZShcImZpbGU/bmFtZT1mYXZpY29uLmljbyEuLi9mYXZpY29uLmljb1wiKTtcblxudmFyIHdzVXJsID0gKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJykgKyAnOi8vJyArIGxvY2F0aW9uLmhvc3Q7XG52YXIgd3NDbGllbnQgPSBudWxsO1xuXG52YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0d3NDbGllbnQgPSBuZXcgV2ViU29ja2V0KHdzVXJsKTtcblx0d3NDbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9O1xuXHR3c0NsaWVudC5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHdzQ2xpZW50ICYmIHdzQ2xpZW50LnJlYWR5U3RhdGUgPT09IDMpIHsgLy8zLUNMT1NFRFxuXHRcdFx0XHRjb25uZWN0KCk7XG5cdFx0XHR9XG5cdFx0fSwgKE1hdGgucmFuZG9tKCkgKiAyMDAwICsgMjAwMCkpO1xuXHR9XG59XG5jb25uZWN0KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9hcHAuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL2FwcC5sZXNzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiQ05BTUVcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPUNOQU1FIS4vc3JjL0NOQU1FXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vc3JjL2Zhdmljb24uaWNvXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==