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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);

/***/ },

/***/ 16:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "CNAME";

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico";

/***/ },

/***/ 22:
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    window.addEventListener('load', function () {
	        var navToggle = document.getElementById('nav-toggle');
	        var nav = document.getElementById('nav');
	        navToggle.addEventListener('click', function () {
	            if (nav.classList.contains('collapse')) {
	                nav.classList.remove('collapse');
	            } else {
	                nav.classList.add('collapse');
	            }
	        });
	        var navLinks = document.getElementsByClassName('index-link');
	        for (var i = 0; i < navLinks.length; i++) {
	            navLinks[i].addEventListener('click', handleNavCLick);
	        }
	        function handleNavCLick(e) {
	            nav.classList.add('collapse');
	        }
	    });
	})();

/***/ },

/***/ 23:
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    window.addEventListener('load', function () {
	        var show = document.getElementById('feedback-show'),
	            send = document.getElementById('feedback-submit'),
	            modal = document.getElementById('feedback-modal'),
	            form = document.getElementById('feedback-form');
	        show.addEventListener('click', function (e) {
	            e.preventDefault();
	            modal.classList.add('show');
	            return false;
	        });
	        modal.addEventListener('click', function (e) {
	            if (e.target === form || form.contains(e.target)) {
	                return;
	            }
	            modal.classList.remove('show');
	        });
	        window.addEventListener('keyup', function (e) {
	            if (e.keyCode == 27) {
	                modal.classList.remove('show');
	            }
	        });

	        send.addEventListener('click', function (e) {
	            //e.preventDefault();
	            var invalid = form.querySelector("*:invalid");
	            if (invalid) {
	                invalid.focus();
	                return;
	            }
	            //todo: send message
	            return false;
	        });
	    });
	})();

/***/ }

/******/ });